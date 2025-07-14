import React, { useState } from 'react';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    investmentAmount: '',
    timeframe: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investment Form Submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      investmentAmount: '',
      timeframe: ''
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-revolut">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold lowercase">revolut</h1>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
              IPO Announced
            </span>
          </div>
          <div className="text-sm text-gray-400">
            Investment Opportunity
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolut IPO
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Investment Opportunity
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Be part of Europe's most valuable fintech company's public offering
          </p>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-12">
            <div className="text-6xl md:text-8xl font-bold mb-4">
              $65B
            </div>
            <div className="text-xl text-gray-300">
              Target Valuation
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Record-Breaking Performance
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-black rounded-xl border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-green-400">
                £1.1B
              </div>
              <div className="text-gray-400">
                Pre-tax Profit (2024)
              </div>
            </div>
            
            <div className="text-center p-6 bg-black rounded-xl border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">
                149%
              </div>
              <div className="text-gray-400">
                Profit Growth
              </div>
            </div>
            
            <div className="text-center p-6 bg-black rounded-xl border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-purple-400">
                26%
              </div>
              <div className="text-gray-400">
                Net Profit Margin
              </div>
            </div>
            
            <div className="text-center p-6 bg-black rounded-xl border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">
                50M+
              </div>
              <div className="text-gray-400">
                Global Customers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Form */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Register Your Interest
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Secure your position in this exclusive investment opportunity
          </p>

          {showSuccess && (
            <div className="bg-green-900 border border-green-700 text-green-100 px-6 py-4 rounded-lg mb-8 text-center">
              Thank you for your interest! We'll contact you within 48 hours with next steps.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-2">
                Full Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="investmentAmount" className="block text-sm font-medium mb-2">
                  Investment Amount *
                </label>
                <select
                  id="investmentAmount"
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                >
                  <option value="">Select amount range</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m+">$1,000,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timeframe" className="block text-sm font-medium mb-2">
                  Investment Timeframe *
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                >
                  <option value="">Select timeframe</option>
                  <option value="immediate">Immediate (Within 30 days)</option>
                  <option value="short-term">Short-term (1-3 months)</option>
                  <option value="medium-term">Medium-term (3-6 months)</option>
                  <option value="long-term">Long-term (6+ months)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              Submit Investment Interest
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 text-gray-400 text-sm leading-relaxed">
            <p className="font-semibold text-white">
              Important Investment Disclaimer
            </p>
            <p>
              This is not financial advice. All investments carry risk, including potential loss of principal. 
              Past performance does not guarantee future results. This offering is subject to regulatory approval 
              and market conditions.
            </p>
            <p>
              By submitting this form, you consent to being contacted regarding this investment opportunity. 
              Your data will be processed in accordance with GDPR regulations and our privacy policy.
            </p>
            <p className="pt-4 border-t border-gray-800">
              © 2024 Revolut Investment Opportunity. For qualified investors only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
