
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CameraPanel from "@/components/CameraPanel";
import TextEditorPanel from "@/components/TextEditorPanel";
import VoiceOutputPanel from "@/components/VoiceOutputPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [text, setText] = useState<string>("");
  const [isRecognizing, setIsRecognizing] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const handleTextDetected = (detectedText: string) => {
    setText(prev => prev + detectedText);
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Communicate with American Sign Language
        </h2>
        
        {isMobile ? (
          <Tabs defaultValue="camera" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="camera">Camera</TabsTrigger>
              <TabsTrigger value="editor">Text</TabsTrigger>
              <TabsTrigger value="voice">Voice</TabsTrigger>
            </TabsList>
            
            <TabsContent value="camera" className="mt-0">
              <CameraPanel 
                onTextDetected={handleTextDetected}
                isRecognizing={isRecognizing}
                setIsRecognizing={setIsRecognizing}
              />
            </TabsContent>
            
            <TabsContent value="editor" className="mt-0">
              <TextEditorPanel 
                text={text}
                onTextChange={handleTextChange}
                onClearText={handleClearText}
              />
            </TabsContent>
            
            <TabsContent value="voice" className="mt-0">
              <VoiceOutputPanel text={text} />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <CameraPanel 
                onTextDetected={handleTextDetected}
                isRecognizing={isRecognizing}
                setIsRecognizing={setIsRecognizing}
              />
            </div>
            
            <div className="flex flex-col gap-6">
              <TextEditorPanel 
                text={text}
                onTextChange={handleTextChange}
                onClearText={handleClearText}
              />
              
              <VoiceOutputPanel text={text} />
            </div>
          </div>
        )}
        
        <Card className="mt-8 p-4 bg-purple-50 border-purple-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">How to use:</span> Enable your camera, then click "Start Recognition" to begin detecting ASL gestures. 
            The recognized text will appear in the text editor. You can manually edit the text or clear it using the controls. 
            Use the Voice Output panel to convert your text to speech.
          </p>
        </Card>
      </main>
      
      <footer className="bg-gray-100 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>ASL Text Editor - A tool for American Sign Language communication</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
