import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Building2, CreditCard, BarChart3, DollarSign, Calendar, MapPin, Target, Menu, X } from 'lucide-react';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    numbers: '',
    investmentAmount: '',
    timeframe: '',
    notes: '',
    appointment: ''
  });

  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
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
      notes: '',
      appointment: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Black Separator */}
      <div className="h-[0.5cm] bg-black"></div>
      
      {/* Header */}
      <header className="fixed top-[0.5cm] left-0 right-0 z-50 bg-white px-4 sm:px-6 py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3" style={{ marginLeft: '0.5in' }}>
            <img 
              src="/lovable-uploads/bc684528-0d11-4499-bd86-1184fd24a40d.png" 
              alt="Revolut Logo" 
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase tracking-tight">IPO</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-gray-700">
              <span className="hover:text-black cursor-pointer transition-colors" onClick={() => scrollToSection('form-section')}>Request Info</span>
              <span className="hover:text-black cursor-pointer transition-colors" onClick={() => scrollToSection('form-section')}>Talk to Expert</span>
              <span className="hover:text-black cursor-pointer transition-colors" onClick={() => scrollToSection('fundamental-data')}>Fundamental Data</span>
              <span className="hover:text-black cursor-pointer transition-colors" onClick={() => scrollToSection('form-section')}>Contact Us</span>
            </nav>
            <button 
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors min-h-[44px]" 
              onClick={() => scrollToSection('form-section')}
            >
              Sign up
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors min-h-[44px] text-sm" 
              onClick={() => scrollToSection('form-section')}
            >
              Sign up
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
            <nav className="px-4 py-4 space-y-4">
              <button 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => scrollToSection('form-section')}
              >
                Request Info
              </button>
              <button 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => scrollToSection('form-section')}
              >
                Talk to Expert
              </button>
              <button 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => scrollToSection('fundamental-data')}
              >
                Fundamental Data
              </button>
              <button 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => scrollToSection('form-section')}
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </header>

      
      {/* Scrolling Banner */}
      <section className="bg-black py-1 overflow-hidden" style={{ marginTop: `calc(0.5cm + 80px)` }}>
        <div className="relative">
          <div className="flex animate-scroll gap-8 whitespace-nowrap">
            {/* First set */}
            <div className="flex gap-8 shrink-0">
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Calendar className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">2015</div>
                <div className="text-xs text-gray-300">Founded</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <MapPin className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">London</div>
                <div className="text-xs text-gray-300">Headquarters</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Users className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">8,125+</div>
                <div className="text-xs text-gray-300">Employees</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <DollarSign className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£2.2B</div>
                <div className="text-xs text-gray-300">Revenue</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <TrendingUp className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£545M</div>
                <div className="text-xs text-gray-300">Profit</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Target className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£45B</div>
                <div className="text-xs text-gray-300">Valuation</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Globe className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">30+</div>
                <div className="text-xs text-gray-300">Licenses</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <BarChart3 className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">2023</div>
                <div className="text-xs text-gray-300">UK License</div>
              </div>
            </div>
            
            {/* Second set for seamless loop */}
            <div className="flex gap-8 shrink-0">
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Calendar className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">2015</div>
                <div className="text-xs text-gray-300">Founded</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <MapPin className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">London</div>
                <div className="text-xs text-gray-300">Headquarters</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Users className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">8,125+</div>
                <div className="text-xs text-gray-300">Employees</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <DollarSign className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£2.2B</div>
                <div className="text-xs text-gray-300">Revenue</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <TrendingUp className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£545M</div>
                <div className="text-xs text-gray-300">Profit</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Target className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£45B</div>
                <div className="text-xs text-gray-300">Valuation</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Globe className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">30+</div>
                <div className="text-xs text-gray-300">Licenses</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <BarChart3 className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">2023</div>
                <div className="text-xs text-gray-300">UK License</div>
              </div>
            </div>

            {/* Third set for seamless loop */}
            <div className="flex gap-8 shrink-0">
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Calendar className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">2015</div>
                <div className="text-xs text-gray-300">Founded</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <MapPin className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">London</div>
                <div className="text-xs text-gray-300">Headquarters</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Users className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">8,125+</div>
                <div className="text-xs text-gray-300">Employees</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <DollarSign className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£2.2B</div>
                <div className="text-xs text-gray-300">Revenue</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <TrendingUp className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£545M</div>
                <div className="text-xs text-gray-300">Profit</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Target className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">£45B</div>
                <div className="text-xs text-gray-300">Valuation</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <Globe className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">30+</div>
                <div className="text-xs text-gray-300">Licenses</div>
              </div>
              
              <div className="text-center p-1.5 bg-black rounded-lg shadow-sm min-w-24">
                <BarChart3 className="w-3.5 h-3.5 mx-auto mb-1 text-white" />
                <div className="text-sm font-bold text-white">2023</div>
                <div className="text-xs text-gray-300">UK License</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-4 pb-12 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                
                
                <div className="flex justify-start" style={{ marginTop: '0.5in' }}>
                  <img 
                    src="/lovable-uploads/bc21313b-5651-4a1c-87ca-0c910f3c7794.png" 
                    alt="Revolut" 
                    className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto mb-4 sm:mb-8"
                  />
                </div>
                
                <div className="text-lg sm:text-xl text-black font-medium mb-4 sm:mb-8 max-w-lg">
                  IPO Announcement • Expected 2025
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black uppercase tracking-tight mb-4 sm:mb-8 max-w-lg">
                  Revolut IPO Banking on the Future
                  <br />
                  Buy Now....
                </h1>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mb-6 sm:mb-8 italic font-bold">
                "Revolut's IPO is on the horizon — and with 45 million users and some of the fastest growth in fintech, it's shaping up to be one of the biggest plays of the year. Markets are warming up, investor appetite is back, but timing's everything. Get in early. Think big. Win big."
              </p>

              <button className="bg-black text-white px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-800 transition-colors min-h-[48px] w-full sm:w-auto">
                More Info
              </button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <img 
                src="/lovable-uploads/d5371364-cf23-4fa1-9ce8-467e8b3fda66.png" 
                alt="Woman holding Revolut card" 
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Main Heading */}
      <section id="form-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 text-center mt-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black uppercase mb-2">TALK TO AN EXPERT</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">GET MORE INFO ON THE REVOLUT IPO</h3>
        </div>

        {/* Bottom Content - Steps and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8 sm:mt-16">
          {/* Left Content - Registration Steps */}
          <div className="space-y-8 flex flex-col">
            
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border-l-4 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold min-w-[40px]">1</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Complete registration form</h3>
              </div>
              <ul className="space-y-1 text-gray-700 text-xs sm:text-sm font-bold list-none ml-[52px]">
                <li className="pl-2 -indent-2">- Fill out the form carefully and double-check all information</li>
                <li className="pl-2 -indent-2">- Use "additional notes" for alternative contacts or specific requirements</li>
                <li className="pl-2 -indent-2">- <strong>+44 20</strong> number will call you</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border-l-4 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold min-w-[40px]">2</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Submit your details</h3>
              </div>
              <ul className="space-y-1 text-gray-700 text-xs sm:text-sm font-bold list-none ml-[52px]">
                <li className="pl-2 -indent-2">- Submit your details and they'll be securely processed</li>
                <li className="pl-2 -indent-2">- You'll receive a call from a licensed representative within 48 hours</li>
                <li className="pl-2 -indent-2">- All calls come from a <strong>+44 20</strong> number</li>
                <li className="pl-2 -indent-2">- Booking a time guarantees a scheduled call at your convenience</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border-l-4 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold min-w-[40px]">3</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Get Ready for Your Call</h3>
              </div>
              <ul className="space-y-1 text-gray-700 text-xs sm:text-sm font-bold list-none ml-[52px]">
                <li>- Expect a call within 48 hours of submitting</li>
                <li>- Do light research on Revolut's IPO beforehand</li>
                <li>- Prepare questions for the expert</li>
                <li>- Expert will provide overview and tailored strategy</li>
              </ul>
            </div>
          </div>

          {/* Right Content - Investment Form */}
          <div className="w-full">
            <div>
              <div className="bg-black p-6 pb-24 rounded-2xl shadow-lg border border-gray-800 w-full max-w-5xl">{/* Increased to max-w-5xl for even wider form */}
                {/* Logo at top left */}
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/d2432a1e-2721-45ca-9a43-ebb2eb5a8859.png" 
                    alt="Revolut Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-1">
                    REGISTER YOUR INVESTMENT INTEREST
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Get priority access to IPO updates and investment opportunities
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Numbers on same row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-xs font-medium text-white uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-600 bg-white text-black rounded-lg focus:border-white focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="numbers" className="block text-xs font-medium text-white uppercase tracking-wide">
                      Contact Number/s
                    </label>
                    <input
                      type="text"
                      id="numbers"
                      name="numbers"
                      value={formData.numbers}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-600 bg-white text-black rounded-lg focus:border-white focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all text-sm"
                      placeholder="Phone number(s)"
                    />
                  </div>
                </div>

                {/* Investment Amount and Timeframe on same row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="investmentAmount" className="block text-xs font-medium text-white uppercase tracking-wide">
                      Investment Amount
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-600 bg-white text-black rounded-lg focus:border-white focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all text-sm"
                    >
                      <option value="">Select amount</option>
                      <option value="10000-50000">£10K - £50K</option>
                      <option value="50000-100000">£50K - £100K</option>
                      <option value="100000-250000">£100K - £250K</option>
                      <option value="250000-500000">£250K - £500K</option>
                      <option value="500000+">£500K+</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="timeframe" className="block text-xs font-medium text-white uppercase tracking-wide">
                      Timeframe
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-600 bg-white text-black rounded-lg focus:border-white focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all text-sm"
                    >
                      <option value="">Select timeframe</option>
                      <option value="immediate">Immediate</option>
                      <option value="3-months">3 months</option>
                      <option value="6-months">6 months</option>
                      <option value="1-year">1+ years</option>
                    </select>
                  </div>
                </div>

                {/* Notes Field */}
                <div className="space-y-1">
                  <label htmlFor="notes" className="block text-xs font-medium text-white uppercase tracking-wide">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-3 border-2 border-gray-600 bg-white text-black rounded-lg focus:border-white focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all resize-none text-sm"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                {/* Appointment Field */}
                <div className="space-y-1">
                  <label htmlFor="appointment" className="block text-xs font-medium text-white uppercase tracking-wide">
                    Book Appointment with Expert
                  </label>
                  <input
                    type="datetime-local"
                    id="appointment"
                    name="appointment"
                    className="w-full px-3 py-3 border-2 border-gray-600 bg-white text-black rounded-lg focus:border-white focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all text-sm"
                  />
                  <p className="text-xs text-gray-400">Optional: Book a specific time for your expert call</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors uppercase tracking-wide mt-8"
                >
                  Register Interest
                </button>
              </form>
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


      {/* IPO Highlights Section */}
      <section id="fundamental-data" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
               FUNDAMENTAL DATA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Revolut's upcoming public offering
            </p>
          </div>

          {/* Grid Layout for all boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
            
            {/* Row 1 */}
            
            {/* Top Left - Dark Background */}
            <div className="bg-black text-white p-8 rounded-3xl">
              <div className="space-y-4">
                <div className="text-sm text-gray-400 uppercase tracking-wide">Expected Timeline</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  FROM STARTUP TO<br />
                  IPO, EASILY
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Revolut is targeting a 2025 IPO launch with preparation already underway. The company has secured necessary banking licenses and achieved profitability.
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Learn Timeline
                </button>
              </div>
            </div>

            {/* Top Right - Light Background */}
            <div className="bg-gray-50 text-black p-8 rounded-3xl">
              <div className="space-y-4">
                <div className="text-sm text-gray-600 uppercase tracking-wide">Valuation Growth</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  DECLARE THAT<br />
                  YOU INVEST
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Currently valued at $45 billion with 45+ million users across 38 countries. Revenue grew to over $4.0B in 2024 with a $1.4B pre-tax profit.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  View Growth
                </button>
              </div>
            </div>

            {/* Bottom Left - Light Background */}
            <div className="bg-gray-50 text-black p-8 rounded-3xl">
              <div className="space-y-4">
                <div className="text-sm text-gray-600 uppercase tracking-wide">Investment Strategy</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  INVEST IN FINTECH<br />
                  TOGETHER
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Join institutional investors like Tiger Global, Coatue, and D1 Capital. Multiple revenue streams and global expansion plans make it attractive.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Join Strategy
                </button>
              </div>
            </div>

            {/* Bottom Right - Dark Background */}
            <div className="bg-black text-white p-8 rounded-3xl">
              <div className="space-y-4">
                <div className="text-sm text-gray-400 uppercase tracking-wide">Market Leadership</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  WE'VE GOT<br />
                  EXPERIENCE
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We built an app to make all things finance easy. And our IPO preparation is no different — every step is calculated, and going public couldn't be simpler.
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Row 2 - Additional 3 boxes */}
            
            {/* IPO Timeline - Dark Background */}
            <div className="bg-black text-white p-8 rounded-3xl">
              <div className="space-y-4">
                <div className="text-sm text-gray-400 uppercase tracking-wide">IPO Timeline</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  WHEN IS REVOLUT<br />
                  GOING PUBLIC?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As of February 2025, Revolut is actively preparing for a potential listing this year, following a recent valuation of $45 billion. Full UK banking license obtained July 2024.
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Learn Timeline
                </button>
              </div>
            </div>

            {/* Company Overview - Light Background */}
            <div className="bg-gray-50 text-black p-8 rounded-3xl">
              <div className="space-y-4">
                <div className="text-sm text-gray-600 uppercase tracking-wide">Company Overview</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  WHAT IS<br />
                  REVOLUT?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Revolut is a UK FinTech app launched in 2015. It lets you send money, exchange currencies, and trade crypto — all in one place.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-start">
            {/* Left side - Navigation Links */}
            <div className="flex gap-12 pt-4">
              <button 
                className="text-gray-400 hover:text-white transition-colors text-lg"
                onClick={() => scrollToSection('form-section')}
              >
                Talk to an Expert
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors text-lg"
                onClick={() => scrollToSection('form-section')}
              >
                Request More Info
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors text-lg"
                onClick={() => scrollToSection('form-section')}
              >
                Contact Us
              </button>
            </div>
            
            {/* Top Right corner - Revolut Logo */}
            <div className="flex items-start">
              <img 
                src="/lovable-uploads/d2432a1e-2721-45ca-9a43-ebb2eb5a8859.png" 
                alt="Revolut Logo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </footer>
      
      {/* Full-width disclaimer section */}
      <div className="bg-white w-full">
        <div className="py-6 px-6 max-w-4xl mx-auto">
          <div className="text-[10px] text-black leading-tight space-y-2">
            <p>
              <strong>Disclaimer:</strong><br/>
              The content provided on this website is for informational and educational purposes only and does not constitute financial advice, investment recommendations, or an offer to buy or sell any securities. We are not a licensed financial advisor, broker-dealer, or investment firm. Our role is to introduce users to qualified third-party financial professionals and institutions who are authorized to provide regulated investment services.
            </p>
            
            <p>
              While we strive to ensure that all information is accurate and up to date, we do not guarantee the completeness, reliability, or suitability of any content or third-party service mentioned. Any investment carries risk, including the potential loss of capital. You are solely responsible for conducting your own due diligence and should consult with a licensed financial advisor or registered investment professional before making any financial decisions.
            </p>
            
            <p>
              By using this site, you acknowledge that we do not provide personalized financial advice and that any decisions made based on the information or introductions provided are made at your own risk.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;