
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, CameraOff, Upload, PlayCircle, StopCircle } from "lucide-react";
import { detectASLGesture, initializeASLRecognition, HandGesture } from "@/utils/aslRecognition";
import ASLStatusIndicator from "@/components/ASLStatusIndicator";

interface CameraPanelProps {
  onTextDetected: (text: string) => void;
  isRecognizing: boolean;
  setIsRecognizing: (value: boolean) => void;
}

const CameraPanel = ({ onTextDetected, isRecognizing, setIsRecognizing }: CameraPanelProps) => {
  const [hasCamera, setHasCamera] = useState<boolean>(false);
  const [cameraEnabled, setCameraEnabled] = useState<boolean>(false);
  const [modelReady, setModelReady] = useState<boolean>(false);
  const [lastDetection, setLastDetection] = useState<HandGesture | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recognitionIntervalRef = useRef<number | null>(null);

  // Check if camera is available
  useEffect(() => {
    async function checkCameraAvailability() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasVideoDevice = devices.some(device => device.kind === 'videoinput');
        setHasCamera(hasVideoDevice);
      } catch (err) {
        console.error("Error checking camera:", err);
        setHasCamera(false);
      }
    }
    
    checkCameraAvailability();
  }, []);

  // Start camera when enabled
  useEffect(() => {
    if (cameraEnabled && videoRef.current) {
      const startCamera = async () => {
        try {
          const constraints = {
            video: {
              width: { ideal: 640 },
              height: { ideal: 480 },
              facingMode: "user"
            }
          };
          
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          videoRef.current!.srcObject = stream;
          streamRef.current = stream;
          
          // Initialize ASL recognition model
          if (!modelReady) {
            const initialized = await initializeASLRecognition();
            setModelReady(initialized);
          }
        } catch (err) {
          console.error("Error starting camera:", err);
          setCameraEnabled(false);
        }
      };
      
      startCamera();
      
      return () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }
      };
    }
  }, [cameraEnabled, modelReady]);

  const toggleCamera = () => {
    if (cameraEnabled) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      setCameraEnabled(false);
      setIsRecognizing(false);
    } else {
      setCameraEnabled(true);
    }
  };

  const toggleRecognition = () => {
    if (!cameraEnabled || !modelReady) return;
    
    if (!isRecognizing) {
      setIsRecognizing(true);
      
      // Start ASL recognition loop
      const runDetection = async () => {
        if (!videoRef.current || !isRecognizing) return;
        
        try {
          const gesture = await detectASLGesture(videoRef.current);
          
          if (gesture) {
            setLastDetection(gesture);
            // Only add letter to text if confidence is high enough
            if (gesture.confidence > 0.6) {
              onTextDetected(gesture.letter);
            }
          }
        } catch (err) {
          console.error("Error detecting ASL gesture:", err);
        }
        
        // Schedule next detection
        if (isRecognizing) {
          recognitionIntervalRef.current = window.setTimeout(runDetection, 1500);
        }
      };
      
      // Start the detection loop
      runDetection();
    } else {
      setIsRecognizing(false);
      // Clear any pending detection timeout
      if (recognitionIntervalRef.current) {
        clearTimeout(recognitionIntervalRef.current);
        recognitionIntervalRef.current = null;
      }
    }
  };
  
  // Cleanup recognition interval when component unmounts or recognition stops
  useEffect(() => {
    return () => {
      if (recognitionIntervalRef.current) {
        clearTimeout(recognitionIntervalRef.current);
        recognitionIntervalRef.current = null;
      }
    };
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Handle video file upload (for future implementation)
    alert("Video upload functionality will be implemented in a future version");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-purple-500" />
          <span>Camera Input</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
          {cameraEnabled ? (
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <CameraOff className="h-12 w-12 text-gray-400" />
              <p className="text-gray-500 mt-2">Camera is off</p>
            </div>
          )}
          
          <div className="absolute top-2 right-2">
            <ASLStatusIndicator isRecognizing={isRecognizing} lastDetection={lastDetection} />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={cameraEnabled ? "destructive" : "default"}
            onClick={toggleCamera}
            disabled={!hasCamera}
            className="flex-1"
          >
            {cameraEnabled ? (
              <>
                <CameraOff className="mr-2 h-4 w-4" />
                Stop Camera
              </>
            ) : (
              <>
                <Camera className="mr-2 h-4 w-4" />
                Start Camera
              </>
            )}
          </Button>
          
          <Button
            variant={isRecognizing ? "destructive" : "secondary"}
            onClick={toggleRecognition}
            disabled={!cameraEnabled}
            className="flex-1"
          >
            {isRecognizing ? (
              <>
                <StopCircle className="mr-2 h-4 w-4" />
                Stop Recognition
              </>
            ) : (
              <>
                <PlayCircle className="mr-2 h-4 w-4" />
                Start Recognition
              </>
            )}
          </Button>
          
          <Button variant="outline" className="flex-1" asChild>
            <label>
              <Upload className="mr-2 h-4 w-4" />
              Upload Video
              <input 
                type="file" 
                accept="video/*" 
                className="hidden" 
                onChange={handleFileUpload}
              />
            </label>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CameraPanel;
