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
      {/* Animated Background with Clouds */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--gradient-sky)]"></div>
        
        {/* Cloud Elements */}
        <div className="absolute top-10 left-20 w-64 h-32 bg-white/40 rounded-full blur-xl animate-float opacity-70"></div>
        <div className="absolute top-32 right-32 w-48 h-24 bg-white/30 rounded-full blur-lg animate-float delay-1000 opacity-80"></div>
        <div className="absolute top-24 left-1/2 w-72 h-36 bg-white/35 rounded-full blur-xl animate-float delay-500 opacity-60"></div>
        <div className="absolute top-64 left-10 w-56 h-28 bg-white/25 rounded-full blur-lg animate-float delay-2000 opacity-70"></div>
        <div className="absolute top-80 right-20 w-80 h-40 bg-white/40 rounded-full blur-xl animate-float delay-1500 opacity-50"></div>
        <div className="absolute top-40 right-1/3 w-60 h-30 bg-white/30 rounded-full blur-lg animate-float delay-3000 opacity-65"></div>
        <div className="absolute top-96 left-1/3 w-68 h-34 bg-white/35 rounded-full blur-xl animate-float delay-2500 opacity-55"></div>
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-xl bg-background/80 px-6 py-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-sm">R</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Revolut</h1>
              </div>
              <nav className="hidden md:flex items-center gap-8 text-white/80">
                <span>Personal</span>
                <span>Business</span>
                <span>Revolut &lt;18</span>
                <span>Company</span>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-white transition-colors">Log in</button>
              <button className="bg-white text-background px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors">Sign up</button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 relative pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 z-10 pt-20">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <div className="text-white">REVOLUT LOOKS TO</div>
                <div className="text-white">RAISE AT $65 BILLION</div>
                <div className="text-white">VALUATION</div>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Revolut is attempting to raise $1 billion in a new funding round that would give the U.K.-based fintech startup a valuation of $65 billion, the Financial Times first reported.
              </p>
              
              <button className="bg-white text-background px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-colors">
                Register Interest
              </button>
            </div>

            {/* Right Content - Woman Image */}
            <div className="relative h-[800px] flex items-start justify-end -mt-32">
              <div className="relative w-full max-w-2xl h-full">
                <img 
                  src="/lovable-uploads/d931b75e-5958-4017-bd44-50b2cbf9e6fa.png" 
                  alt="Woman in beige jacket" 
                  className="absolute top-0 right-0 h-full w-auto object-cover object-top scale-125"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute top-1/4 right-16 bg-white rounded-3xl p-6 shadow-2xl">
                  <div className="text-4xl font-bold text-black">$65 Billion</div>
                  <div className="text-sm text-gray-600 mt-1">Valuation Target</div>
                </div>
                
                <div className="absolute bottom-1/3 right-4 bg-white rounded-3xl p-6 shadow-2xl min-w-[200px]">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-black mb-2">Sign Up for Info</div>
                    <div className="text-sm text-gray-500">Get exclusive updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Investment Form */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-black">REVOLUT IPO: </span>
                <span className="text-2xl md:text-3xl font-semibold text-black">A Landmark Entry into Public Markets</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Secure your position in the most anticipated fintech IPO of 2024
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No Commitment</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto w-1/2">

            {showSuccess && (
              <div className="bg-green-50 border border-green-300 text-green-800 px-8 py-6 rounded-2xl mb-8 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <h3 className="text-lg font-semibold mb-2">IPO Registration Confirmed!</h3>
                <p>You're now on the priority list for Revolut's $65B IPO. Our team will contact you within 12 hours with exclusive access details and next steps.</p>
              </div>
            )}

            <div className="bg-gray-50 border border-gray-300 rounded-3xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Full Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Enter your full residential address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700">
                      Investment Amount *
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    >
                      <option value="" className="bg-white text-black">Select investment amount</option>
                      <option value="50000-100000" className="bg-white text-black">£50,000 - £100,000</option>
                      <option value="100000-250000" className="bg-white text-black">£100,000 - £250,000</option>
                      <option value="250000-500000" className="bg-white text-black">£250,000 - £500,000</option>
                      <option value="500000-1000000" className="bg-white text-black">£500,000 - £1,000,000</option>
                      <option value="1000000+" className="bg-white text-black">£1,000,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">
                      Investment Timeframe *
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    >
                      <option value="" className="bg-white text-black">Select timeframe</option>
                      <option value="immediate" className="bg-white text-black">Immediate (Within 30 days)</option>
                      <option value="short-term" className="bg-white text-black">Short-term (1-3 months)</option>
                      <option value="medium-term" className="bg-white text-black">Medium-term (3-6 months)</option>
                      <option value="long-term" className="bg-white text-black">Long-term (6+ months)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-black text-white py-5 px-8 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Secure IPO Position Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Combined Features and Timeline Section */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="text-black">
                  Why Revolut Leads
                </span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-12">
                <span className="text-gray-700">
                  Growth Journey
                </span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Growth Journey Timeline - Left Side */}
              <div>
                
                <div className="relative pl-8">
                  {/* Connecting line */}
                  <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                      <div 
                        key={index} 
                        className="group relative p-6 bg-white border border-gray-300 rounded-2xl hover:border-black transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl h-40"
                      >
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-lg font-bold text-black">{milestone.year}</span>
                            </div>
                            <div className="text-xl font-bold text-black">
                              {milestone.value}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-black group-hover:text-gray-700 transition-colors duration-300">
                            {milestone.event}
                          </h3>
                          <div className="w-full h-1 bg-black rounded-full"></div>
                        </div>
                        
                        {/* Timeline dot */}
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary-foreground rounded-full border-2 border-white shadow-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features - Right Side */}
              <div>
                
                <div className="relative pr-8">
                  {/* Connecting line */}
                  <div className="absolute right-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  
                  <div className="space-y-8">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div 
                          key={index} 
                          className="group relative p-6 bg-white border border-gray-300 rounded-2xl hover:border-black transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl h-40"
                        >
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-5 h-5 text-black" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-base font-bold mb-1 text-black group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                                  {feature.title}
                                </h3>
                                <p className="text-gray-600 text-xs group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                            <div className="text-lg font-bold text-black mt-2">
                              {feature.metric}
                            </div>
                          </div>
                          
                          {/* Timeline dot */}
                          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary-foreground rounded-full border-2 border-white shadow-lg"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="border-t border-gray-300 px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Revolut IPO</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>IPO Overview</li>
                  <li>Investment Information</li>
                  <li>Registration Portal</li>
                  <li>Investor Relations</li>
                  <li>Financial Reports</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Investor Support</li>
                  <li>General Inquiries</li>
                  <li>Media Relations</li>
                  <li>Partnership Opportunities</li>
                  <li>Legal & Compliance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Fast Links</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Risk Disclosure</li>
                  <li>Cookie Policy</li>
                  <li>GDPR Compliance</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-gray-300">
              <p className="text-gray-500 text-sm">
                © 2024 Revolut Investment Opportunity Portal. For qualified investors only.
              </p>
            </div>
          </div>
        </footer>

        {/* Terms and Conditions Section */}
        <section className="px-6 py-8 bg-black/20 border-t border-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Terms and Conditions / Disclaimer</h2>
              <div className="text-xs text-gray-400 leading-tight space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div>
                  <h3 className="text-xs font-semibold text-gray-300 mb-1">INVESTMENT DISCLAIMER</h3>
                  <p className="text-xs">NOT AN OFFER TO SELL. For informational purposes only. All investments involve risk and may result in loss.</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-gray-300 mb-1">No Financial Advice</h3>
                  <p className="text-xs">Information provided does not constitute financial advice. Consult a qualified advisor before investing.</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-gray-300 mb-1">No Affiliation</h3>
                  <p className="text-xs">Not affiliated with Revolut Ltd. Independent third-party platform collecting investment interest.</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-gray-300 mb-1">Eligibility & Data</h3>
                  <p className="text-xs">Must be 18+, qualified investor. We collect data for investment opportunities and compliance.</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-gray-300 mb-1">Limitation of Liability</h3>
                  <p className="text-xs">TO THE FULLEST EXTENT PERMITTED: We exclude all warranties and limit our liability.</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-gray-300 mb-1">Compliance & Cookies</h3>
                  <p className="text-xs">Complies with securities laws. Uses essential, analytics, and marketing cookies. You control settings.</p>
                </div>

                <div className="col-span-1 md:col-span-2 border-t border-gray-700/50 pt-3 mt-3 text-center">
                  <p className="text-xs"><strong>By using this website, you agree to these Terms and Conditions.</strong></p>
                  <p className="text-xs mt-1"><strong>Last Updated:</strong> July 15, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Index;
