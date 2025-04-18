import React from 'react';
import { Link } from 'react-router-dom';
interface PricingPlanProps {
  title: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, duration, features, isPopular = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 w-full max-w-xs ${isPopular ? 'border-2 border-purple-600 relative' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
          BEST VALUE
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-4xl font-bold text-purple-600 mb-2">
          <span className="text-2xl align-top">₹</span>{price}
        </div>
        <p className="text-gray-500">{duration}</p>
      </div>
      <ul className="mb-8 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center pb-2 border-b border-gray-100">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-200">
        Get Started
      </button>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const commonFeatures = [
    "Full Text Editing",
    "ASL Support",
    "Cloud Backup",
    "Community Support"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-[#7254E7] text-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">ASL Text Editor</div>
          <div className="space-x-6">
            <Link to="/" className="hover:opacity-80">Home</Link>
            <Link to="/feartures" className="hover:opacity-80">Features</Link>
            <Link to="/price" className="hover:opacity-80 font-medium">Pricing</Link>
            <Link to="/con" className="hover:opacity-80">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-[#7254E7] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Get access to the most intuitive ASL Text Editor with our flexible subscription options.
            Save more when you subscribe for longer!
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingPlan
            title="Monthly Plan"
            price={100}
            duration="Per Month"
            features={[
              ...commonFeatures,
              "Basic Templates"
            ]}
          />
          <PricingPlan
            title="Bi-Monthly Plan"
            price={250}
            duration="For 2 Months"
            features={[
              ...commonFeatures,
              "Premium Templates",
              "Priority Support"
            ]}
            isPopular={true}
          />
          <PricingPlan
            title="Quarterly Plan"
            price={300}
            duration="For 3 Months"
            features={[
              ...commonFeatures,
              "Premium Templates",
              "Priority Support",
              "Offline Access"
            ]}
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. The price difference will be adjusted in your next billing cycle.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Is there a free trial available?</h3>
              <p className="text-gray-600">We offer a 7-day free trial for all new users. No credit card required during the trial period.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, UPI, and net banking options for payments in Indian Rupees.</p>
            </div>
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
              <p className="text-gray-400 mb-2">Email: support@asltexteditor.com</p>
              <p className="text-gray-400">Phone: +91 123-456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} ASL Text Editor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;