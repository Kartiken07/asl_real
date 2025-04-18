import React from 'react';
import { Link } from "react-router-dom";
const ASLTextEditorHomepage: React.FC = () => {
  return (
    <div className="asl-text-editor">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-[#7254E7] px-8 py-4 sticky top-0 z-50 shadow-md">
        <a href="#" className="flex items-center gap-2 text-white text-2xl font-bold no-underline">
          <span className="text-3xl">✋</span>
          <span>ASL Text Editor</span>
        </a>
        <div className="flex gap-8">
          <Link to="/feartures" className="text-white font-medium hover:text-opacity-80 transition-all">Up Comming Features</Link>
          <Link to="/howworks" className="text-white font-medium hover:text-opacity-80 transition-all">How It Works</Link>
          <Link to="/price" className="text-white font-medium hover:text-opacity-80 transition-all">Pricing</Link>
          <Link to='/reso' className="text-white font-medium hover:text-opacity-80 transition-all">Resources</Link>
          <Link to="/auth"className="bg-white text-black font-bold px-5 py-2 rounded-full hover:bg-opacity-90 hover:-translate-y-0.5 transition-all">Get Started</Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <h1 className="text-5xl mb-4 text-[#7254E7] font-bold">Bridge the Gap Between Sign Language and Text</h1>
        <p className="text-xl max-w-2xl mb-8">ASL Text Editor helps you easily translate between American Sign Language and written text, making communication accessible for everyone.</p>
        <div className="flex gap-4">
        <Link to="/Getstart"><button className="bg-[#7254E7] text-white px-8 py-3 rounded-full text-base font-semibold border-none cursor-pointer hover:bg-[#9980fa] hover:-translate-y-0.5 transition-all">Try It Now</button></Link>
          <button className="bg-transparent text-[#7254E7] px-8 py-3 rounded-full text-base font-semibold border-2 border-[#7254E7] cursor-pointer hover:bg-[#7254E7] hover:bg-opacity-10 hover:-translate-y-0.5 transition-all">Watch Demo</button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="px-8 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#7254E7] mb-4 font-bold">Powerful Features</h2>
          <p className="text-lg max-w-2xl mx-auto">Our innovative tools make ASL communication simpler and more efficient than ever before.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon="📷" 
            title="Camera Recognition" 
            description="Use your webcam to capture sign language gestures and convert them to text in real-time." 
          />
          <FeatureCard 
            icon="💬" 
            title="Text-to-ASL Conversion" 
            description="Type text and see animated ASL signs to help you learn and communicate effectively." 
          />
          <FeatureCard 
            icon="📚" 
            title="Sign Language Dictionary" 
            description="Access a comprehensive library of ASL signs with search functionality." 
          />
          <FeatureCard 
            icon="📱" 
            title="Mobile Compatibility" 
            description="Use our editor on any device, anywhere, with cloud synchronization." 
          />
          <FeatureCard 
            icon="🔄" 
            title="Two-Way Translation" 
            description="Seamlessly convert between ASL and text for fluid communication." 
          />
          <FeatureCard 
            icon="⚡" 
            title="Real-Time Processing" 
            description="Experience minimal lag with our advanced recognition algorithms." 
          />
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="px-8 py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#7254E7] mb-4 font-bold">How It Works</h2>
          <p className="text-lg max-w-2xl mx-auto">Our intuitive platform makes ASL communication simple for everyone.</p>
        </div>
        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          <Step 
            number={1} 
            title="Enable Your Camera" 
            description="Allow access to your webcam for the ASL recognition system to capture your hand movements." 
          />
          <Step 
            number={2} 
            title="Sign or Type" 
            description="Either sign with your hands or type text, depending on your preferred input method." 
          />
          <Step 
            number={3} 
            title="Receive Instant Translation" 
            description="Watch as your signs are converted to text or your text is represented with animated ASL signs." 
          />
          <Step 
            number={4} 
            title="Save and Share" 
            description="Save your translations, create a personal sign library, or share with others instantly." 
          />
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

// Component for feature cards
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
      <div className="bg-[#7254E7] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 text-[#7254E7] font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Component for steps
interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="bg-[#7254E7] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-2xl mb-2 text-[#7254E7] font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Component for footer links
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

export default ASLTextEditorHomepage;
