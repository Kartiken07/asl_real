import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ASLResourcePage = () => {
  const [activeTab, setActiveTab] = useState('symbols');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ASL symbols data
  const aslSymbols = [
    { id: 1, symbol: "👋", meaning: "Hello", description: "Wave hand side to side" },
    { id: 2, symbol: "👌", meaning: "OK/Yes", description: "Thumb and index finger form circle" },
    { id: 3, symbol: "👍", meaning: "Good", description: "Thumbs up gesture" },
    { id: 4, symbol: "🤟", meaning: "I love you", description: "Extended thumb, index, and pinky finger" },
    { id: 5, symbol: "✋", meaning: "Stop", description: "Open palm facing forward" },
    { id: 6, symbol: "👉", meaning: "You", description: "Pointing at someone" },
    { id: 7, symbol: "👈", meaning: "Me/I", description: "Pointing at self" },
    { id: 8, symbol: "🙏", meaning: "Please", description: "Hands together" },
    { id: 9, symbol: "👏", meaning: "Applause", description: "Clapping hands" },
    { id: 10, symbol: "✌️", meaning: "Peace/Two", description: "Victory sign" },
    { id: 11, symbol: "👊", meaning: "Fist letter S", description: "Closed fist" },
    { id: 12, symbol: "🤲", meaning: "Open/Give", description: "Open palms facing up" },
  ];

  // Training data sources
  const trainingData = [
    { source: "Kaggle ASL Dataset", records: "25,000 hand signs", url: "#kaggle-dataset" },
    { source: "Google MediaPipe", records: "Custom hand tracking data", url: "#mediapipe" },
    { source: "ASL Dictionary", records: "10,000 signs with translations", url: "#asl-dictionary" },
    { source: "Community Contributions", records: "5,000 user-submitted signs", url: "#community" },
    { source: "University Research Dataset", records: "15,000 verified signs", url: "#university" }
  ];

  // Upcoming features
  const upcomingFeatures = [
    { name: "Real-time Translation", description: "Convert ASL to text in real-time using your webcam", eta: "Q3 2025" },
    { name: "Mobile App", description: "Native iOS and Android applications for on-the-go signing", eta: "Q4 2025" },
    { name: "Text-to-ASL Animation", description: "Convert written text to animated ASL gestures", eta: "Q1 2026" },
    { name: "Dialect Support", description: "Support for regional ASL variations and dialects", eta: "Q2 2026" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: '#7254E7' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-white font-bold text-xl flex items-center">
                <span className="mr-2">✋</span>
                ASL Text Editor
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:bg-purple-700 px-3 py-2 rounded-md font-medium">Home</Link>
              <Link to="/price" className="text-white hover:bg-purple-700 px-3 py-2 rounded-md font-medium">Pricing</Link>
              <Link to="/feartures" className="text-white hover:bg-purple-700 px-3 py-2 rounded-md font-medium">Features</Link>
              <Link to="/resources" className="text-white hover:bg-purple-700 px-3 py-2 rounded-md font-medium bg-purple-700">Resources</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ backgroundColor: '#7254E7' }}>
              <a href="#" className="text-white block px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#pricing" className="text-white block px-3 py-2 rounded-md font-medium">Pricing</a>
              <a href="#features" className="text-white block px-3 py-2 rounded-md font-medium">Features</a>
              <a href="#resources" className="text-white block px-3 py-2 rounded-md font-medium bg-purple-700">Resources</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">ASL Resource Center</h1>
          <p className="text-xl">Learn American Sign Language and discover our AI translation technology</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex flex-wrap border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('symbols')}
            className={`px-4 py-2 mr-2 ${activeTab === 'symbols' ? 'text-purple-600 border-b-2 border-purple-600 font-medium' : 'text-gray-500'}`}
          >
            ASL Symbols
          </button>
          <button 
            onClick={() => setActiveTab('training')}
            className={`px-4 py-2 mr-2 ${activeTab === 'training' ? 'text-purple-600 border-b-2 border-purple-600 font-medium' : 'text-gray-500'}`}
          >
            AI Training
          </button>
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 mr-2 ${activeTab === 'upcoming' ? 'text-purple-600 border-b-2 border-purple-600 font-medium' : 'text-gray-500'}`}
          >
            Upcoming Features
          </button>
        </div>

        {/* Content Sections */}
        <div className="mt-6 mb-12">
          {/* ASL Symbols Content */}
          {activeTab === 'symbols' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">ASL Symbols and Their Meanings</h2>
              <p className="mb-6 text-gray-700">Our text editor supports the following common ASL symbols. Learn these to get started with basic ASL communication.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {aslSymbols.map(item => (
                  <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-200 border border-gray-200">
                    <div className="flex items-center">
                      <span className="text-4xl mr-3">{item.symbol}</span>
                      <div>
                        <h3 className="font-bold">{item.meaning}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded transition-colors duration-200">
                  <a href='https://www.lifeprint.com/dictionary.htm'>
                  View Complete ASL Dictionary
                  </a>
                </button>
              </div>
            </div>
          )}

          {/* Training Data Content */}
          {activeTab === 'training' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Our AI Model Training Process</h2>
              <p className="mb-6 text-gray-700">We've developed our ASL recognition model by gathering data from various sources and training it using advanced machine learning techniques.</p>
              
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="text-xl font-medium mb-3">Data Collection Sources</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Volume</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {trainingData.map((source, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{source.source}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{source.records}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3">Training Process</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Data collection from multiple sources</li>
                    <li>Data cleaning and normalization</li>
                    <li>Hand landmarks extraction using MediaPipe</li>
                    <li>Training deep learning models on varied datasets</li>
                    <li>Cross-validation and optimization</li>
                    <li>Continuous improvement with user feedback</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3">Model Performance</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Accuracy</span>
                        <span className="text-sm font-medium text-gray-700">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Processing Speed</span>
                        <span className="text-sm font-medium text-gray-700">80ms</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Vocabulary Coverage</span>
                        <span className="text-sm font-medium text-gray-700">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming Features Content */}
          {activeTab === 'upcoming' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Upcoming Features</h2>
              <p className="mb-6 text-gray-700">We're constantly improving our ASL Text Editor. Here's what you can look forward to:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
                    <h3 className="font-bold text-lg mb-1">{feature.name}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Expected: {feature.eta}</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Coming Soon</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">ASL Text Editor</h3>
              <p className="text-gray-400">Making sign language accessible through technology.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/reso" className="text-gray-400 hover:text-white">Resources</Link></li>
                <li><Link to="/price" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link to="/feartures" className="text-gray-400 hover:text-white">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/con" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <form className="mt-3">
                <div className="flex">
                  <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l w-full text-gray-900" />
                  <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-r">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>© 2025 ASL Text Editor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ASLResourcePage;