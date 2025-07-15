import React, { useState } from 'react';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    numbers: '',
    investmentAmount: '',
    timeframe: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investment Form Submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      numbers: '',
      investmentAmount: '',
      timeframe: '',
      notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <h1 className="text-2xl font-bold text-black">Revolut</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-gray-600">
              <span className="hover:text-black cursor-pointer">Personal</span>
              <span className="hover:text-black cursor-pointer">Business</span>
              <span className="hover:text-black cursor-pointer">Revolut &lt;18</span>
              <span className="hover:text-black cursor-pointer">Company</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-black transition-colors">Log in</button>
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">Sign up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Deposits
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
                Secure Your Future,<br />
                Invest in Tomorrow
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Invest in your future with deposits offering competitive rates and flexible 
                terms for steady growth and peace of mind.
              </p>
              
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors">
                Open Deposits
              </button>
            </div>

            {/* Right Content - Investment Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Investment Interest</h3>
                  <p className="text-gray-600">Tell us about your investment goals</p>
                </div>
                
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Numbers Field */}
                <div className="space-y-2">
                  <label htmlFor="numbers" className="block text-sm font-medium text-gray-700">
                    Contact Number/s
                  </label>
                  <input
                    type="text"
                    id="numbers"
                    name="numbers"
                    value={formData.numbers}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all"
                    placeholder="Phone number(s)"
                  />
                </div>

                {/* Investment Amount Field */}
                <div className="space-y-2">
                  <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700">
                    Potential Investment Amount
                  </label>
                  <select
                    id="investmentAmount"
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  >
                    <option value="">Select amount range</option>
                    <option value="10000-50000">€10,000 - €50,000</option>
                    <option value="50000-100000">€50,000 - €100,000</option>
                    <option value="100000-250000">€100,000 - €250,000</option>
                    <option value="250000-500000">€250,000 - €500,000</option>
                    <option value="500000+">€500,000+</option>
                  </select>
                </div>

                {/* Timeframe Field */}
                <div className="space-y-2">
                  <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">
                    Investment Timeframe
                  </label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all"
                  >
                    <option value="">Select timeframe</option>
                    <option value="3-months">3 months</option>
                    <option value="6-months">6 months</option>
                    <option value="1-year">1 year</option>
                    <option value="2-years">2 years</option>
                    <option value="5-years">5+ years</option>
                  </select>
                </div>

                {/* Notes Field */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all resize-none"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors"
                >
                  Submit Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Background arrow pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black">
                Unlock the power of steady<br />
                growth with our deposits
              </h2>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative h-[600px] flex items-center justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-72 h-[500px] bg-black rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Content */}
                    <div className="p-6 space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                        <div className="text-sm font-medium">Search</div>
                        <div className="w-6 h-6"></div>
                      </div>
                      
                      {/* Deposit Info Card */}
                      <div className="bg-black text-white p-6 rounded-2xl">
                        <div className="space-y-2">
                          <div className="text-2xl font-bold">1,000 €</div>
                          <div className="text-sm opacity-80">Deposit amount</div>
                        </div>
                      </div>
                      
                      {/* Benefits */}
                      <div className="space-y-4">
                        <div className="text-sm font-medium">Your benefits</div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">%</span>
                            </div>
                            <div className="text-sm">according % of interest</div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                            <div className="text-sm">To the Standard card</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Info Boxes */}
                <div className="absolute -left-20 top-1/3 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="text-xs text-gray-500 mb-1">Term</div>
                  <div className="font-bold">3 months at 5% per annum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;