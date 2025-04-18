import React, { useState } from 'react';
import {Link} from "react-router-dom"
const HowItWorksTutorial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('gesture');
  
  return (
    <div className="asl-text-editor-tutorial">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-[#7254E7] px-8 py-4 sticky top-0 z-50 shadow-md">
        <a href="#" className="flex items-center gap-2 text-white text-2xl font-bold no-underline">
          <span className="text-3xl">✋</span>
          <span>ASL Text Editor</span>
        </a>
        <div className="flex gap-8">
  <Link to="/feartures" className="text-white font-medium hover:text-opacity-80 transition-all">Up Coming Features</Link>
  <Link to="/howworks" className="text-white font-medium hover:text-opacity-80 transition-all">How It Works</Link>
  <Link to="/price" className="text-white font-medium hover:text-opacity-80 transition-all">Pricing</Link>
  <Link to="/reso" className="text-white font-medium hover:text-opacity-80 transition-all">Resources</Link>
  <Link to="/auth" className="bg-white text-black font-bold px-5 py-2 rounded-full hover:bg-opacity-90 hover:-translate-y-0.5 transition-all">Get Started</Link>
</div>
      </nav>
      
      {/* Page Header */}
      <header className="bg-gradient-to-b from-[#7254E7] to-[#9980fa] text-white text-center py-16 px-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">How to Use ASL Text Editor</h1>
        <p className="text-xl max-w-3xl mx-auto">Follow our step-by-step guide to translate between American Sign Language and text with ease.</p>
      </header>
      
      {/* Tutorial Navigation */}
      <div className="bg-gray-100 shadow-inner">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="flex overflow-x-auto pb-2 gap-4 justify-center">
            <TabButton 
              active={activeTab === 'gesture'} 
              onClick={() => setActiveTab('gesture')}
              text="Gesture Recognition"
            />
            <TabButton 
              active={activeTab === 'typing'} 
              onClick={() => setActiveTab('typing')}
              text="Text-to-ASL Typing"
            />
            <TabButton 
              active={activeTab === 'dictionary'} 
              onClick={() => setActiveTab('dictionary')}
              text="Sign Dictionary"
            />
            <TabButton 
              active={activeTab === 'advanced'} 
              onClick={() => setActiveTab('advanced')}
              text="Advanced Features"
            />
          </div>
        </div>
      </div>
      
      {/* Main Tutorial Content */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {activeTab === 'gesture' && <GestureRecognitionContent />}
        {activeTab === 'typing' && <TextToAslTypingContent />}
        {activeTab === 'dictionary' && <SignDictionaryContent />}
      </div>
      
      {/* Ready to Start Section */}
      <section className="bg-gray-100 py-16 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#7254E7]">Ready to Start Communicating?</h2>
          <p className="text-lg mb-8">Join thousands of users bridging the communication gap with ASL Text Editor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#7254E7] text-white px-8 py-3 rounded-full text-base font-semibold border-none cursor-pointer hover:bg-[#9980fa] hover:-translate-y-0.5 transition-all">Try It Free</button>

          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#7254E7] text-white px-8 py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
          <div>
            <h4 className="text-xl mb-6 font-semibold">ASL Text Editor</h4>
            <p>Making communication accessible for the Deaf and hard of hearing community through innovative technology.</p>
          </div>
          <div>
            <h4 className="text-xl mb-6 font-semibold">Quick Links</h4>
            <ul className="list-none p-0">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/feartures" text="Features" />
              <FooterLink href="/price" text="Pricing" />
              <FooterLink href="/reso" text="Resources" />
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-6 font-semibold">Support</h4>
            <ul className="list-none p-0">
              <FooterLink href="/con" text="Contact Us" />
              <FooterLink href="#" text="FAQs" />
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-6 font-semibold">Connect</h4>
            <ul className="list-none p-0">
              <FooterLink href="https://www.facebook.com/help/396404120401278/list" text="Twitter" />
              <FooterLink href="https://www.facebook.com/help/396404120401278/list" text="Facebook" />
              <FooterLink href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/&ved=2ahUKEwj07ey-heGMAxVqTGwGHXctNnMQFnoECAwQAQ&usg=AOvVaw1cBeRoOpMhZ3-x5M1sA3Fm" text="Instagram" />
              <FooterLink href="https://www.youtube.com/watch?v=NQPV2344cGE" text="YouTube" />
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white border-opacity-20">
          <p>&copy; 2025 ASL Text Editor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Tab Button Component
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  text: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, text }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-3 text-lg font-medium rounded-lg whitespace-nowrap transition-all ${
        active 
          ? 'bg-[#7254E7] text-white shadow-md' 
          : 'bg-white text-gray-700 hover:bg-gray-200'
      }`}
    >
      {text}
    </button>
  );
};

// Tutorial Content Components
const GestureRecognitionContent: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#7254E7]">ASL Gesture Recognition</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">How Gesture Recognition Works</h3>
        <p className="mb-4">Our advanced computer vision technology tracks your hand movements and translates them into text in real-time. The system recognizes individual signs and can interpret continuous signing for fluid communication.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <img src="/api/placeholder/800/400" alt="Gesture recognition illustration" className="w-full rounded-lg mb-4" />
          <p className="text-sm text-gray-600 text-center">The camera tracks hand position, shape, and movement to interpret signs.</p>
        </div>
      </div>
      
      <TutorialStep
        number={1}
        title="Position Your Camera"
        description="Ensure you're in a well-lit environment and position yourself where your hands and face (for facial expressions) are clearly visible."
      />
      
      <TutorialStep
        number={2}
        title="Grant Camera Access"
        description="When prompted, allow the ASL Text Editor to access your device's camera. This permission is essential for the gesture recognition system to work."
      />
      
      <TutorialStep
        number={3}
        title="Start Signing"
        description="Begin signing in American Sign Language. Make sure your movements are clear and within the camera frame. The system will recognize and display the corresponding text."
      />
      
      <TutorialStep
        number={4}
        title="Review and Edit"
        description="As you sign, text will appear in the editor. You can pause at any time to review and edit the generated text if needed."
      />
      
      <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h4 className="text-xl font-bold mb-2 text-blue-800">Pro Tips</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintain consistent lighting to improve recognition accuracy</li>
          <li>Start with single signs before progressing to continuous signing</li>
          <li>Use the practice mode to get familiar with the system</li>
          <li>For complex signs, slow down your movements slightly</li>
        </ul>
      </div>
    </div>
  );
};

const TextToAslTypingContent: React.FC = () => {
  const [demoText, setDemoText] = useState('');
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#7254E7]">Text-to-ASL Typing Tutorial</h2>
      
      <div className="mb-12">
        <p className="mb-6">Our Text-to-ASL feature allows you to type text and instantly see the corresponding ASL signs. This is perfect for learning sign language or preparing for signed conversations.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <p className="text-sm text-gray-600 text-center mt-4">
          </p>
        </div>
      </div>
      
      <TutorialStep
        number={1}
        title="Open the Text Editor"
        description="Navigate to the editor view and ensure you're in 'Text-to-ASL' mode."
      />
      
      <TutorialStep
        number={2}
        title="Type Your Message"
        description="Enter your text in the input field. As you type, the system will process each word."
      />
      
      <TutorialStep
        number={3}
        title="View ASL Representation"
        description="The corresponding ASL signs will appear above or beside your text. You can click on any sign to see it in a larger format with animation."
      />
      
      <TutorialStep
        number={4}
        title="Adjust Speed and Size"
        description="Use the control panel to adjust the speed of sign animations and the size of the display to your preference."
      />
      
      <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
        <h4 className="text-xl font-bold mb-2 text-yellow-800">Important Notes</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>ASL grammar differs from English - the editor can suggest grammar adjustments</li>
          <li>Some concepts may require multiple signs or fingerspelling</li>
          <li>Technical terms or names may default to fingerspelling</li>
          <li>Save frequently used phrases to your personal library for quick access</li>
        </ul>
      </div>
      
      <div className="mt-12 p-6 border border-gray-200 rounded-lg">
        <h4 className="text-xl font-bold mb-4">Common ASL Patterns</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">English Structure</th>
                <th className="p-4 text-left">ASL Structure</th>
                <th className="p-4 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="p-4">Subject-Verb-Object</td>
                <td className="p-4">Topic-Comment</td>
                <td className="p-4">"I am going to the store" → "STORE I GO"</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">Questions with "do"</td>
                <td className="p-4">Raised eyebrows + question sign</td>
                <td className="p-4">"Do you want coffee?" → "COFFEE YOU WANT?"</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-4">Negation after verb</td>
                <td className="p-4">Sign + head shake</td>
                <td className="p-4">"I don't understand" → "I UNDERSTAND [head shake]"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const SignDictionaryContent: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#7254E7]">ASL Sign Dictionary</h2>
      
      <p className="mb-6">Our comprehensive dictionary includes thousands of ASL signs, complete with animations, usage examples, and regional variations.</p>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-12">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DictionaryCard letter="A" count={42} />
          <DictionaryCard letter="B" count={36} />
          <DictionaryCard letter="C" count={51} />
          <DictionaryCard letter="D" count={29} />
          <DictionaryCard letter="E" count={18} />
          <DictionaryCard letter="F" count={33} />
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Using the Dictionary</h3>
        <p className="mb-4">The ASL Dictionary is an essential tool for both learning and reference. Here's how to make the most of it:</p>
        
        <div className="space-y-6">
          <FeatureItem
            title="Search by English Word"
            description="Type any English word to find its ASL equivalent."
          />
          
          <FeatureItem
            title="Browse by Category"
            description="Explore signs organized by themes like greetings, emotions, or everyday objects."
          />
          
          <FeatureItem
            title="View Multiple Angles"
            description="Each sign can be viewed from different perspectives to ensure proper hand positioning."
          />
          
          <FeatureItem
            title="Save Favorites"
            description="Build your personal vocabulary by saving frequently used signs."
          />
        </div>
      </div>
      
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
        <h4 className="text-xl font-bold mb-2 text-green-800">Learning Tips</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Practice signs regularly to build muscle memory</li>
          <li>Learn signs in context rather than in isolation</li>
          <li>Use the "Practice Mode" to receive feedback on your signing</li>
          <li>Join our community forums to connect with other learners and native signers</li>
        </ul>
      </div>
    </div>
  );
};

const AdvancedFeaturesContent: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#7254E7]">Advanced Features</h2>
      
      <p className="mb-8">Once you've mastered the basics, explore these advanced features to enhance your ASL communication experience:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <AdvancedFeatureCard
          title="Grammar Correction"
          description="Our AI analyzes your sentences and suggests ASL-appropriate grammar structures."
          icon="📝"
        />
        
        <AdvancedFeatureCard
          title="Speed Adjustments"
          description="Control the pace of sign animations to match your learning or communication needs."
          icon="⏱️"
        />
        
        <AdvancedFeatureCard
          title="Regional Variations"
          description="Access different regional sign variants to communicate effectively with diverse ASL users."
          icon="🌎"
        />
        
        <AdvancedFeatureCard
          title="Sign Customization"
          description="Create and save personalized signs for names, technical terms, or frequently used phrases."
          icon="⚙️"
        />
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Collaborative Features</h3>
        <p className="mb-6">ASL Text Editor offers powerful tools for collaborative communication:</p>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-[#7254E7]">Real-time Conversation</h4>
              <p>Connect with other users for live ASL-to-text and text-to-ASL conversations, perfect for remote communication.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-[#7254E7]">Shared Documents</h4>
              <p>Collaborate on documents with mixed text and ASL content, ideal for educational settings or group projects.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-[#7254E7]">Video Recording</h4>
              <p>Record signing sessions to review later or share with others who might not be available for real-time communication.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-[#7254E7]">Translation History</h4>
              <p>Access a searchable history of all your translations, organized by date, conversation, or topic.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Integration Options</h3>
        <p className="mb-6">Extend ASL Text Editor functionality by connecting with other tools:</p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="bg-gray-100 p-3 rounded-full">
              <div className="w-10 h-10 flex items-center justify-center text-2xl">📱</div>
            </div>
            <div>
              <h4 className="font-bold">Mobile App Sync</h4>
              <p>Continue your work seamlessly between desktop and mobile devices.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="bg-gray-100 p-3 rounded-full">
              <div className="w-10 h-10 flex items-center justify-center text-2xl">💬</div>
            </div>
            <div>
              <h4 className="font-bold">Messaging Platform Integration</h4>
              <p>Connect with popular messaging apps for ASL communication anywhere.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="bg-gray-100 p-3 rounded-full">
              <div className="w-10 h-10 flex items-center justify-center text-2xl">📊</div>
            </div>
            <div>
              <h4 className="font-bold">Learning Analytics</h4>
              <p>Track your progress and receive personalized learning recommendations.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
        <h4 className="text-xl font-bold mb-2 text-purple-800">Enterprise Features</h4>
        <p className="mb-4">For organizations and educational institutions, we offer additional features:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom terminology libraries for specific industries</li>
          <li>Bulk user management and activity reports</li>
          <li>Dedicated training sessions for staff</li>
          <li>API access for custom integrations</li>
        </ul>
        <p className="mt-4 font-medium">Contact our sales team to learn more about enterprise solutions.</p>
      </div>
    </div>
  );
};

// Tutorial Step Component
interface TutorialStepProps {
  number: number;
  title: string;
  description: string;
}

const TutorialStep: React.FC<TutorialStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex gap-6 mb-8">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-[#7254E7] text-white rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Dictionary Card Component
interface DictionaryCardProps {
  letter: string;
  count: number;
}

const DictionaryCard: React.FC<DictionaryCardProps> = ({ letter, count }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-4">
      <div className="w-12 h-12 bg-[#7254E7] text-white rounded-full flex items-center justify-center text-2xl font-bold">
        {letter}
      </div>
      <div>
        <h4 className="font-bold">{letter}-Signs</h4>
        <p className="text-gray-600">{count} signs available</p>
      </div>
    </div>
  );
};

// Feature Item Component
interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 bg-[#7254E7] text-white rounded-full flex items-center justify-center">
          ✓
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Advanced Feature Card Component
interface AdvancedFeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const AdvancedFeatureCard: React.FC<AdvancedFeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[#7254E7] bg-opacity-10 p-3 rounded-full text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#7254E7]">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// Footer Link Component
interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li className="mb-3">
      <a href={href} className="text-white text-opacity-80 no-underline hover:text-white transition-all">
        {text}
      </a>
    </li>
  );
};

export default HowItWorksTutorial;