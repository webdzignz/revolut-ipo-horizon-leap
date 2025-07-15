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
              <span className="hover:text-black cursor-pointer">Introduction</span>
              <span className="hover:text-black cursor-pointer">Request Info</span>
              <span className="hover:text-black cursor-pointer">Contact Us</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-sm text-gray-500 uppercase tracking-wide">
                  IPO ANNOUNCEMENT
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black uppercase tracking-tight">
                  INVEST IN TOMORROW, TODAY — REVOLUT'S IPO IS COMING
                </h1>
                
                <div className="text-xl text-black font-medium">
                  Expected 2025
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Get early access insights into one of the world's fastest-growing digital banks and make international transfers at speed — with great rates. No matter how much you need to invest.
              </p>

              <button className="bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors">
                Join now
              </button>
              
              {/* Stats Image */}
              <div className="mt-8 -mx-6 md:-mx-12 lg:-mx-24 xl:-mx-48 2xl:-mx-96">
                <img 
                  src="/lovable-uploads/c8d2f23f-9763-450f-879b-d04268f00419.png" 
                  alt="Revolut Stats - 52.5M customers, #1 finance app, $38B balances, $4B revenue" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative flex items-start justify-center -mt-8">
              <div className="w-full max-w-lg">
                <img 
                  src="/lovable-uploads/25b5cda2-5546-448c-bd17-93266c2d4853.png" 
                  alt="Revolut 3D Card Design" 
                  className="w-full h-auto object-contain scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">45M+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Users globally</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">$45B</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Valuation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">38+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">2025</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">IPO Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mb-4">
              REGISTER YOUR INVESTMENT INTEREST
            </h2>
            <p className="text-lg text-gray-600">
              Get priority access to IPO updates and investment opportunities
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-lg"
                placeholder="Enter your full name"
              />
            </div>

            {/* Numbers Field */}
            <div className="space-y-2">
              <label htmlFor="numbers" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Contact Number/s
              </label>
              <input
                type="text"
                id="numbers"
                name="numbers"
                value={formData.numbers}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-lg"
                placeholder="Phone number(s)"
              />
            </div>

            {/* Investment Amount Field */}
            <div className="space-y-2">
              <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Potential Investment Amount
              </label>
              <select
                id="investmentAmount"
                name="investmentAmount"
                value={formData.investmentAmount}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-lg"
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
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Investment Timeframe
              </label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all text-lg"
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
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all resize-none text-lg"
                placeholder="Any specific questions or requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors uppercase tracking-wide"
            >
              Register Interest
            </button>
          </form>
        </div>
      </section>

      {/* IPO Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              IPO Highlight Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Revolut's upcoming public offering
            </p>
          </div>

          {/* Step 1 */}
          <div className="mb-20">
            <div className="bg-green-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mb-6">
                    Step 1
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">Expected Timeline</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Revolut is targeting a 2025 IPO launch with preparation already underway. 
                    The company has secured necessary banking licenses and achieved profitability, 
                    positioning itself for a successful public debut.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center border">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📅</div>
                      <div className="text-2xl font-bold text-black">2025</div>
                      <div className="text-gray-600">IPO Launch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-20">
            <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mb-6">
                    Step 2
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">Valuation & Growth</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Currently valued at $45 billion with 45+ million users across 38 countries. 
                    Revenue grew to $2.2B in 2023 with $545M pre-tax profit, demonstrating 
                    strong financial performance and global expansion.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center border">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📈</div>
                      <div className="text-2xl font-bold text-black">$45B</div>
                      <div className="text-gray-600">Valuation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-20">
            <div className="bg-purple-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mb-6">
                    Step 3
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">Investment Opportunity</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With backing from Tiger Global, Coatue, and D1 Capital, Revolut offers 
                    exposure to the rapidly growing fintech sector. Multiple revenue streams 
                    and global expansion plans make it an attractive investment opportunity.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center border">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💼</div>
                      <div className="text-2xl font-bold text-black">Invest</div>
                      <div className="text-gray-600">Opportunity</div>
                    </div>
                  </div>
                </div>
              </div>
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