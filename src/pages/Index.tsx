import React, { useState } from 'react';
import { TrendingUp, Users, Globe, Building2, CreditCard, BarChart3, DollarSign, Calendar, MapPin, Target } from 'lucide-react';

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
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  IPO ANNOUNCEMENT
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
                  Revolut IPO:<br />
                  What You Need<br />
                  to Know
                </h1>
                
                <div className="flex items-center gap-2 text-2xl font-bold text-green-600">
                  <span className="text-4xl">🚀</span>
                  <span>Expected 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Revolut — one of the world&apos;s fastest-growing digital banks — is preparing for a much-anticipated Initial Public Offering (IPO) expected in 2025. With over 45 million users and a sharp growth trajectory, Revolut is positioning itself to become a global fintech leader.
              </p>
            </div>

            {/* Right Content - Investment Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Investment Interest</h3>
                  <p className="text-gray-600">Register for IPO updates and investment opportunities</p>
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
                    <option value="10000-50000">£10,000 - £50,000</option>
                    <option value="50000-100000">£50,000 - £100,000</option>
                    <option value="100000-250000">£100,000 - £250,000</option>
                    <option value="250000-500000">£250,000 - £500,000</option>
                    <option value="500000+">£500,000+</option>
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
                    <option value="immediate">Immediate (IPO launch)</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="1-year">Long-term (1+ years)</option>
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
                  Register Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Company Snapshot Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <Building2 className="w-10 h-10" />
              Company Snapshot
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold text-black">2015</div>
              <div className="text-gray-600">Founded</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <div className="text-2xl font-bold text-black">London</div>
              <div className="text-gray-600">Headquarters</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold text-black">8,125+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <DollarSign className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <div className="text-2xl font-bold text-black">£2.2B</div>
              <div className="text-gray-600">Revenue (2023)</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <div className="text-2xl font-bold text-black">£545M</div>
              <div className="text-gray-600">Pre-Tax Profit (2023)</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Target className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold text-black">£45B</div>
              <div className="text-gray-600">Valuation (2024)</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Globe className="w-8 h-8 mx-auto mb-3 text-gray-500" />
              <div className="text-2xl font-bold text-black">30+</div>
              <div className="text-gray-600">Banking Licenses</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <BarChart3 className="w-8 h-8 mx-auto mb-3 text-gray-500" />
              <div className="text-2xl font-bold text-black">2023</div>
              <div className="text-gray-600">UK Banking License</div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <DollarSign className="w-10 h-10" />
              How Revolut Makes Money
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: "Subscription Plans", desc: "Standard, Plus, Premium, Metal", color: "blue" },
              { icon: BarChart3, title: "Transaction Fees", desc: "Card Transaction Fees", color: "green" },
              { icon: Globe, title: "Currency Exchange", desc: "Currency Exchange & Interbank Fees", color: "gray" },
              { icon: TrendingUp, title: "Crypto & Stocks", desc: "Crypto Trading & Stock Brokerage", color: "blue" },
              { icon: Building2, title: "Wealth Management", desc: "Savings Vaults & Wealth Management", color: "green" },
              { icon: DollarSign, title: "Credit Products", desc: "Loans, Overdrafts, Business Accounts", color: "gray" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <item.icon className={`w-8 h-8 mb-4 ${
                  item.color === 'blue' ? 'text-blue-500' : 
                  item.color === 'green' ? 'text-green-500' : 'text-gray-500'
                }`} />
                <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <Globe className="w-10 h-10" />
              Global Reach & Growth
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">45M+</div>
              <div className="text-gray-600">Users in 38 countries</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600">12M</div>
              <div className="text-gray-600">New Users (2023)</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">73%</div>
              <div className="text-gray-600">Transaction Growth YoY</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600">38%</div>
              <div className="text-gray-600">Balance Growth YoY</div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-black mb-4">Markets Launched</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["US", "Brazil", "Australia", "Singapore", "Japan", "New Zealand"].map((market) => (
                <span key={market} className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                  {market}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-4">Planned Expansion: India, Mexico & more</p>
          </div>
        </div>
      </section>

      {/* IPO Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="w-10 h-10" />
              IPO Highlights
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-black mb-2">Expected Timing</h3>
                <p className="text-2xl font-bold text-blue-600">2025</p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-black mb-2">Target Valuation</h3>
                <p className="text-2xl font-bold text-green-600">£45 Billion</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">Listing Location</h3>
                <p className="text-lg text-gray-700">London Stock Exchange or Nasdaq</p>
                <p className="text-sm text-gray-600 mt-1">No final decision yet — both remain possible</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-black">Notable Buyers in Employee Share Sale:</h3>
              <div className="space-y-4">
                {["Coatue", "D1 Capital", "Tiger Global"].map((buyer) => (
                  <div key={buyer} className="p-4 bg-white border border-gray-200 rounded-lg">
                    <span className="font-medium text-black">{buyer}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <h4 className="font-semibold text-black mb-2">Funding Note:</h4>
                <p className="text-gray-700">Revolut hasn&apos;t raised capital recently, avoiding the valuation drops seen by peers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">R</span>
                </div>
                <h3 className="text-xl font-bold">Revolut</h3>
              </div>
              <p className="text-gray-400">
                The world&apos;s fastest-growing digital bank, preparing for a landmark IPO in 2025.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Personal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Revolut &lt;18</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Crypto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">IPO Information</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">IPO Timeline</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Revolut. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;