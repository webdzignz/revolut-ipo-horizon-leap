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

        {/* Combined Features and Timeline Section */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-black">
                  Why Revolut Leads
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-lg mx-auto">
                A comprehensive financial ecosystem built for the digital age
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Growth Journey Timeline - Left Side */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-16">
                  <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Growth Journey
                  </span>
                </h2>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-2xl p-4">
                          <div className="text-xl font-bold text-blue-600 mb-1">{milestone.year}</div>
                          <div className="text-sm font-semibold text-gray-800 mb-1">{milestone.event}</div>
                          <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                            {milestone.value}
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features - Right Side */}
              <div>
                
                <div className="grid grid-cols-1 gap-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div 
                        key={index} 
                        className="group relative p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-black group-hover:text-blue-600 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 mb-3 text-sm group-hover:text-gray-700 transition-colors duration-300">
                            {feature.description}
                          </p>
                          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {feature.metric}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Investment Form */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Join the $65B IPO
                </span>
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Secure your position in the most anticipated fintech IPO of 2024
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-white/70">
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
              <div className="bg-white/10 backdrop-blur-xl border border-green-500/30 text-white px-8 py-6 rounded-2xl mb-8 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <h3 className="text-lg font-semibold mb-2">IPO Registration Confirmed!</h3>
                <p>You're now on the priority list for Revolut's $65B IPO. Our team will contact you within 12 hours with exclusive access details and next steps.</p>
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/90">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/90">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white/90">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-white/90">
                    Full Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 backdrop-blur-xl resize-none"
                    placeholder="Enter your full residential address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="investmentAmount" className="block text-sm font-medium text-white/90">
                      Investment Amount *
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 text-white rounded-xl focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                    >
                      <option value="" className="bg-gray-800 text-white">Select investment amount</option>
                      <option value="50000-100000" className="bg-gray-800 text-white">£50,000 - £100,000</option>
                      <option value="100000-250000" className="bg-gray-800 text-white">£100,000 - £250,000</option>
                      <option value="250000-500000" className="bg-gray-800 text-white">£250,000 - £500,000</option>
                      <option value="500000-1000000" className="bg-gray-800 text-white">£500,000 - £1,000,000</option>
                      <option value="1000000+" className="bg-gray-800 text-white">£1,000,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="timeframe" className="block text-sm font-medium text-white/90">
                      Investment Timeframe *
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 text-white rounded-xl focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                    >
                      <option value="" className="bg-gray-800 text-white">Select timeframe</option>
                      <option value="immediate" className="bg-gray-800 text-white">Immediate (Within 30 days)</option>
                      <option value="short-term" className="bg-gray-800 text-white">Short-term (1-3 months)</option>
                      <option value="medium-term" className="bg-gray-800 text-white">Medium-term (3-6 months)</option>
                      <option value="long-term" className="bg-gray-800 text-white">Long-term (6+ months)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-white text-blue-600 py-5 px-8 rounded-xl font-semibold text-lg hover:bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
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

        {/* Terms and Conditions Section */}
        <section className="px-6 py-12 bg-black/20 border-t border-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Terms and Conditions / Disclaimer</h2>
              <div className="text-xs text-gray-400 leading-relaxed space-y-4">
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">IMPORTANT INVESTMENT DISCLAIMER</h3>
                  <p><strong>THIS IS NOT AN OFFER TO SELL OR A SOLICITATION OF AN OFFER TO BUY SECURITIES.</strong> This website and its contents are for informational purposes only and do not constitute an offer to sell or a solicitation of an offer to buy any securities. No securities are being offered or sold through this website.</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Investment Risk Warning</h3>
                  <p><strong>ALL INVESTMENTS INVOLVE RISK AND MAY RESULT IN LOSS.</strong> Past performance is not indicative of future results. The value of investments can go down as well as up. You may not get back the amount you originally invested. Investment in pre-IPO companies carries additional risks including illiquidity and potential total loss.</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">No Financial Advice</h3>
                  <p>The information provided on this website does not constitute financial, investment, tax, or legal advice. We strongly recommend that you consult with a qualified financial advisor before making any investment decisions, seek independent professional advice tailored to your specific circumstances, conduct your own due diligence before investing, and only invest amounts you can afford to lose.</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">No Affiliation</h3>
                  <p>This website is not affiliated with, endorsed by, or sponsored by Revolut Ltd. or any of its subsidiaries. We are an independent third-party platform collecting expressions of interest for potential investment opportunities.</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Terms and Conditions</h3>
                  <p><strong>Eligibility:</strong> You must be at least 18 years of age, legally competent to enter into contracts, not restricted from investing under applicable laws, and a qualified investor in your jurisdiction (where applicable).</p>
                  <p className="mt-2"><strong>Data Collection:</strong> We collect personal information (name, email, phone, address), investment preferences, and website usage data. We use this information to contact you regarding investment opportunities, verify eligibility, comply with legal requirements, and improve our services. We implement appropriate security measures and will not sell your information without consent.</p>
                  <p className="mt-2"><strong>Registration Process:</strong> Information submitted is an expression of interest only. No binding commitment is created. We may contact you to discuss opportunities. You may withdraw your interest at any time.</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Limitation of Liability</h3>
                  <p>TO THE FULLEST EXTENT PERMITTED BY LAW: We exclude all warranties, express or implied. We are not liable for any direct, indirect, incidental, or consequential damages. Our total liability shall not exceed the amount you paid to use this website (if any).</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Regulatory Compliance</h3>
                  <p>This website complies with applicable securities laws. We maintain appropriate AML procedures and may conduct KYC checks as required. This website may not be available in all jurisdictions. It is your responsibility to ensure compliance with local laws and regulations.</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Cookie Policy</h3>
                  <p>We use essential cookies for website functionality, analytics cookies to understand usage, and marketing cookies for advertising (with your consent). You can control cookies through your browser settings.</p>
                </div>

                <div className="border-t border-gray-700/50 pt-4 mt-6">
                  <p className="text-center"><strong>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and Disclaimer.</strong></p>
                  <p className="text-center mt-2"><strong>Last Updated:</strong> July 15, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="border-t border-white/20 px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Investment Disclaimer</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  This is not financial advice. All investments carry risk, including potential loss of principal. 
                  Past performance does not guarantee future results.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Regulatory Information</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  This offering is subject to regulatory approval and market conditions. 
                  Available only to qualified investors in eligible jurisdictions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Data Protection</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Your data is processed in accordance with GDPR regulations and our privacy policy. 
                  Consent to contact regarding investment opportunities.
                </p>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm">
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
