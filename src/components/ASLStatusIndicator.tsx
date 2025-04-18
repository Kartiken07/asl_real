
import { Badge } from "@/components/ui/badge";
import { HandGesture } from "@/utils/aslRecognition";

interface ASLStatusIndicatorProps {
  isRecognizing: boolean;
  lastDetection: HandGesture | null;
}

const ASLStatusIndicator = ({ isRecognizing, lastDetection }: ASLStatusIndicatorProps) => {
  if (!isRecognizing) {
    return (
      <Badge variant="outline" className="bg-gray-100 text-gray-500">
        Recognition Off
      </Badge>
    );
  }
  
  if (!lastDetection) {
    return (
      <Badge variant="outline" className="bg-yellow-100 text-yellow-700 animate-pulse">
        Waiting for gesture...
      </Badge>
    );
  }
  
  // Color mapping based on confidence level
  let badgeClass = "bg-green-100 text-green-700";
  if (lastDetection.confidence < 0.7) {
    badgeClass = "bg-yellow-100 text-yellow-700";
  }
  if (lastDetection.confidence < 0.5) {
    badgeClass = "bg-red-100 text-red-700";
  }
  
  return (
    <Badge variant="outline" className={`${badgeClass}`}>
      Detected: {lastDetection.letter} ({Math.round(lastDetection.confidence * 100)}%)
    </Badge>
  );
};

export default ASLStatusIndicator;
