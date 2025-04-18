
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { PenLine, Copy, Trash2 } from "lucide-react";

interface TextEditorPanelProps {
  text: string;
  onTextChange: (text: string) => void;
  onClearText: () => void;
}

const TextEditorPanel = ({ text, onTextChange, onClearText }: TextEditorPanelProps) => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PenLine className="h-5 w-5 text-purple-500" />
          <span>Text Editor</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Recognized text will appear here..."
          className="min-h-[200px] mb-4 text-lg"
        />
        
        <div className="flex gap-2 justify-end">
          <Button 
            variant="outline" 
            onClick={copyText}
            disabled={!text.trim()}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
          
          <Button 
            variant="destructive" 
            onClick={onClearText}
            disabled={!text.trim()}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TextEditorPanel;
