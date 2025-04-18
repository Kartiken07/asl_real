import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from "./imgs/Leonardo_Phoenix_10_A_vibrant_and_modern_illustration_of_a_div_1.jpg"
import img2 from "./imgs/Leonardo_Phoenix_10_A_futuristic_and_modern_illustration_of_a_1.jpg"
import img3 from "./imgs/Leonardo_Phoenix_10_A_futuristic_illustration_of_a_cloud_synci_0.jpg"
import img4 from "./imgs/Leonardo_Phoenix_10_A_futuristic_hightech_illustration_depicti_2.jpg"
const FeaturesPage: React.FC = () => {
  // Refs for elements we want to animate
  const headerRef = useRef<HTMLDivElement>(null);
  const featureSectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation on scroll function
  useEffect(() => {
    // Initial animation for the header
    if (headerRef.current) {
      headerRef.current.classList.add('animate-fadeIn');
    }

    // Function to check if an element is in viewport
    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll animations
    const handleScroll = () => {
      featureSectionRefs.current.forEach((section) => {
        if (section && isInViewport(section) && !section.classList.contains('animate-fadeInUp')) {
          section.classList.add('animate-fadeInUp');
          section.style.opacity = '1';
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-[#7254E7] text-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">ASL Text Editor</div>
          <div className="space-x-6">
            <Link to="/" className="hover:opacity-80">Home</Link>
            <Link to="/feartures" className="hover:opacity-80 font-medium">Features</Link>
            <Link to="/price" className="hover:opacity-80">Pricing</Link>
            <Link to="/con" className="hover:opacity-80">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div 
        ref={headerRef}
        className="bg-[#7254E7] text-white py-20 px-4 opacity-0"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Up Comming Powerful Features</h1>
          <p className="max-w-2xl mx-auto text-xl mb-10">
            Discover why ASL Text Editor is the preferred choice for both beginners and professionals.
          </p>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* Feature 1: ASL Support */}
        <div 
          ref={(el) => featureSectionRefs.current[0] = el}
          className="flex flex-col md:flex-row items-center mb-24 opacity-0"
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Advanced ASL Support</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our editor comes with built-in ASL (American Sign Language) support, allowing you to seamlessly integrate sign language notation with your text documents.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Real-time ASL notation conversion</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Built-in ASL symbol library</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Video translation preview</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="bg-purple-100 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden">
              <img src={img1} alt="ASL Support Feature" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>

        {/* Feature 2: Real-time Collaboration */}
        <div 
          ref={(el) => featureSectionRefs.current[1] = el}
          className="flex flex-col md:flex-row-reverse items-center mb-24 opacity-0"
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Real-time Collaboration</h2>
            <p className="text-lg text-gray-600 mb-6">
              Work together with your team in real-time. See changes as they happen and communicate effectively regardless of distance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Simultaneous editing with multiple users</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Built-in commenting system</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Version history and tracking</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="bg-blue-100 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden">
              <img src={img2} alt="Collaboration Feature" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>

        {/* Feature 3: Cloud Sync */}
        <div 
          ref={(el) => featureSectionRefs.current[2] = el}
          className="flex flex-col md:flex-row items-center mb-24 opacity-0"
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Seamless Cloud Sync</h2>
            <p className="text-lg text-gray-600 mb-6">
              Access your documents from anywhere, anytime. Our cloud synchronization ensures your work is always up-to-date across all your devices.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Automatic saving and syncing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Cross-platform compatibility</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Offline mode with auto-sync on reconnection</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="bg-green-100 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden">
              <img src={img3} alt="Cloud Sync Feature" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>

        {/* Feature 4: Advanced Formatting */}
        <div 
          ref={(el) => featureSectionRefs.current[3] = el}
          className="flex flex-col md:flex-row-reverse items-center opacity-0"
          style={{ transitionDelay: '0.8s' }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Advanced Formatting Tools</h2>
            <p className="text-lg text-gray-600 mb-6">
              Create professional documents with our comprehensive set of formatting tools designed for both accessibility and aesthetics.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Accessible formatting options</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Custom templates for various document types</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7254E7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Smart formatting suggestions</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="bg-yellow-100 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden">
              <img src={img4} alt="Formatting Tools Feature" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div 
        ref={(el) => featureSectionRefs.current[4] = el}
        className="bg-gray-100 py-16 px-4 opacity-0"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">More Amazing Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7254E7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
              <p className="text-gray-600">Enjoy lightning-fast editing without lag, even on large documents with complex formatting.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7254E7]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Team Management</h3>
              <p className="text-gray-600">Organize users into teams with customizable permissions and roles for better collaboration.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7254E7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Code Integration</h3>
              <p className="text-gray-600">Seamlessly embed and format code snippets with syntax highlighting for technical documentation.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7254E7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dark Mode</h3>
              <p className="text-gray-600">Reduce eye strain with our elegant dark mode option, perfect for night-time productivity.</p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7254E7]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Notifications</h3>
              <p className="text-gray-600">Stay informed with customizable alerts for document changes, mentions, and important updates.</p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7254E7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1 .257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Assistance</h3>
              <p className="text-gray-600">Get intelligent suggestions for content, formatting, and ASL translations as you type.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={(el) => featureSectionRefs.current[5] = el}
        className="bg-[#7254E7] text-white py-16 px-4 opacity-0"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience ASL Text Editor?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Join thousands of satisfied users who have transformed their document editing experience with our powerful tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#7254E7] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300 transform hover:scale-105">
                <Link to="/price">
              View Pricing
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ASL Text Editor</h3>
              <p className="text-gray-400">The premier text editing solution with ASL support for all your needs.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
  <li><Link to="/feartures" className="text-gray-400 hover:text-white">Features</Link></li>
  <li><Link to="/price" className="text-gray-400 hover:text-white">Pricing</Link></li>
  <li><Link to="/con" className="text-gray-400 hover:text-white">Contact</Link></li>
</ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Email: ABCD@gamil.com</p>
              <p className="text-gray-400">Phone: +91 123-456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} ASL Text Editor. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesPage;