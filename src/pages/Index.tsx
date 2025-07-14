import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Shield, ArrowRight, Star, CheckCircle, Building2, CreditCard, BarChart3, Wallet } from 'lucide-react';

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
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '£1.1B', label: 'Pre-tax Profit', icon: TrendingUp, color: 'from-green-400 to-emerald-600' },
    { value: '149%', label: 'Profit Growth', icon: BarChart3, color: 'from-blue-400 to-cyan-600' },
    { value: '26%', label: 'Net Margin', icon: Wallet, color: 'from-purple-400 to-violet-600' },
    { value: '50M+', label: 'Customers', icon: Users, color: 'from-orange-400 to-red-500' },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Operating across 38+ countries with rapid international growth',
      metric: '38+ Countries'
    },
    {
      icon: CreditCard,
      title: 'Digital Banking',
      description: 'Leading neobank with comprehensive financial services ecosystem',
      metric: '£500B+ Processed'
    },
    {
      icon: Building2,
      title: 'Business Growth',
      description: 'Serving millions of business customers with innovative solutions',
      metric: '500K+ Businesses'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Fully licensed and regulated across all operating jurisdictions',
      metric: '100% Compliant'
    }
  ];

  const milestones = [
            { year: '2015', event: 'Founded in London', value: 'Startup' },
            { year: '2021', event: 'Series E Funding', value: '$33B Valuation' },
            { year: '2024', event: 'Pre-IPO Round', value: '$45B Valuation' },
            { year: '2024', event: 'IPO Filing', value: '$65B Target' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary text-foreground font-inter overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--gradient-revolut)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-white/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-800/50 backdrop-blur-xl bg-black/50 px-6 py-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <h1 className="text-2xl font-bold lowercase">revolut</h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-red-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  BREAKING: IPO News
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
              <span>$1B Funding Round</span>
              <span>•</span>
              <span>Financial Times Reported</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 text-center relative">
          <div className="max-w-6xl mx-auto">
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-2xl backdrop-blur-xl animate-float hidden lg:block"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-xl backdrop-blur-xl animate-float delay-1000 hidden lg:block"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/20 rounded-lg backdrop-blur-xl animate-float delay-2000 hidden lg:block"></div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-red-500/30 rounded-full px-6 py-2 mb-6">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">BREAKING: $1B Funding Round Announced</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Revolut's Historic
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                $65B IPO Launch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-white">JUST ANNOUNCED:</strong> Revolut is raising $1 billion in its largest funding round, 
              targeting a historic $65 billion valuation. Be among the first to secure your position in this 
              <span className="text-orange-400 font-semibold"> game-changing IPO opportunity</span>.
            </p>
            
            {/* Dynamic Stats Display */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = index === currentStat;
                
                return (
                  <div 
                    key={index}
                    className={`relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-700 transform ${
                      isActive 
                        ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/30 scale-105 shadow-2xl shadow-white/10' 
                        : 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:scale-105'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-2xl`}></div>
                    <div className="relative z-10">
                      <Icon className={`w-8 h-8 mb-4 mx-auto transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <div className={`text-4xl font-bold mb-2 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm transition-colors duration-500 ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Secure Your Position</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group flex items-center gap-2 px-8 py-4 border border-gray-600 rounded-xl font-semibold text-lg hover:border-white hover:bg-white/5 transition-all duration-300">
                <span>Read Financial Times Report</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-red-400 font-semibold mb-2">⚡ LIMITED TIME OPPORTUNITY</div>
                <div className="text-gray-300">Pre-IPO registration closes in 72 hours. Minimum investment: $10,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6 py-20 bg-gradient-to-b from-transparent to-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Revolut Leads
              </span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              A comprehensive financial ecosystem built for the digital age
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {feature.metric}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Growth Journey
              </span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <div className="text-lg font-semibold mb-2">{milestone.event}</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                        {milestone.value}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-black shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Investment Form */}
        <section className="px-6 py-20 bg-gradient-to-b from-gray-900/30 to-black">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Join the $65B IPO
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Secure your position in the most anticipated fintech IPO of 2024
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Commitment</span>
                </div>
              </div>
            </div>

            {showSuccess && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 text-green-100 px-8 py-6 rounded-2xl mb-8 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <h3 className="text-lg font-semibold mb-2">IPO Registration Confirmed!</h3>
                <p>You're now on the priority list for Revolut's $65B IPO. Our team will contact you within 12 hours with exclusive access details and next steps.</p>
              </div>
            )}

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                    Full Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 backdrop-blur-xl resize-none"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-300">
                      Investment Amount *
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                    >
                      <option value="">Select investment range</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m+">$1,000,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="timeframe" className="block text-sm font-medium text-gray-300">
                      Investment Timeframe *
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
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
                  className="group relative w-full bg-gradient-to-r from-red-500 to-orange-600 py-5 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Secure IPO Position Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="border-t border-gray-800/50 px-6 py-16 bg-gradient-to-b from-transparent to-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Investment Disclaimer</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is not financial advice. All investments carry risk, including potential loss of principal. 
                  Past performance does not guarantee future results.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Regulatory Information</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This offering is subject to regulatory approval and market conditions. 
                  Available only to qualified investors in eligible jurisdictions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Data Protection</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your data is processed in accordance with GDPR regulations and our privacy policy. 
                  Consent to contact regarding investment opportunities.
                </p>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-gray-800/50">
              <p className="text-gray-500 text-sm">
                © 2024 Revolut Investment Opportunity Portal. For qualified investors only.
              </p>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default Index;
