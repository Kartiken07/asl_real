
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, Play, Pause, StopCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VoiceOutputPanelProps {
  text: string;
}

const VoiceOutputPanel = ({ text }: VoiceOutputPanelProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState([75]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speakText = () => {
    if (!text.trim()) return;
    
    stopSpeaking();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = volume[0] / 100;
    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };
    
    utteranceRef.current = utterance;
    setIsPlaying(true);
    setIsPaused(false);
    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeaking = () => {
    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPlaying && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (utteranceRef.current && isPlaying) {
      utteranceRef.current.volume = newVolume[0] / 100;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-purple-500" />
          <span>Voice Output</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <Volume2 className="h-4 w-4 text-gray-500" />
          <Slider 
            value={volume}
            onValueChange={handleVolumeChange}
            max={100} 
            step={1}
            className="flex-1"
          />
          <span className="text-xs w-8 text-right">{volume[0]}%</span>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={speakText}
            disabled={!text.trim() || (isPlaying && !isPaused)}
            className="flex-1"
          >
            <Play className="mr-2 h-4 w-4" />
            {isPlaying && !isPaused ? "Speaking..." : "Speak"}
          </Button>
          
          <Button
            variant="outline"
            onClick={pauseSpeaking}
            disabled={!isPlaying}
            className="flex-1"
          >
            {isPaused ? (
              <><Play className="mr-2 h-4 w-4" />Resume</>
            ) : (
              <><Pause className="mr-2 h-4 w-4" />Pause</>
            )}
          </Button>
          
          <Button
            variant="outline"
            onClick={stopSpeaking}
            disabled={!isPlaying}
            className="flex-1"
          >
            <StopCircle className="mr-2 h-4 w-4" />
            Stop
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceOutputPanel;
