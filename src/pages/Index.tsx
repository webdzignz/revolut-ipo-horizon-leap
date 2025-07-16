import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Building2, CreditCard, BarChart3, DollarSign, Calendar, MapPin, Target } from 'lucide-react';

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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/f75b334c-2922-4196-9eb1-fd6f26b9c95e.png" 
              alt="Revolut Logo" 
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold text-black uppercase tracking-tight">IPO</span>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8 text-gray-700">
              <span className="hover:text-black cursor-pointer">Introduction</span>
              <span className="hover:text-black cursor-pointer">Request Info</span>
              <span className="hover:text-black cursor-pointer">Contact Us</span>
            </nav>
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-black transition-colors">Log in</button>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">Sign up</button>
            </div>
          </div>
        </div>
      </header>

      
      {/* Scrolling Banner */}
      <section className="bg-black py-1 overflow-hidden" style={{ marginTop: '100px' }}>
        <div className="relative">
          <div className="flex animate-scroll gap-4 whitespace-nowrap">
            {/* First set */}
            <div className="flex gap-4 shrink-0">
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
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-4 shrink-0">
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
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                  IPO ANNOUNCEMENT
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black uppercase tracking-tight flex flex-wrap items-center gap-4">
                  <img 
                    src="/lovable-uploads/d2432a1e-2721-45ca-9a43-ebb2eb5a8859.png" 
                    alt="Revolut" 
                    className="h-12 md:h-16 lg:h-20 w-auto"
                  />
                  <span>IPO</span>
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black uppercase tracking-tight">
                  Is Coming Soon
                </h2>
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black uppercase tracking-tight">
                  Invest In Future
                </h3>
                <h4 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black uppercase tracking-tight">
                  Starting Today
                </h4>
                
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
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/d5371364-cf23-4fa1-9ce8-467e8b3fda66.png" 
                alt="Woman holding Revolut card" 
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12 text-center mt-6">
            <h2 className="text-5xl md:text-6xl font-bold text-black uppercase mb-2">TALK TO AN EXPERT</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black">GET MORE INFO ON THE REVOLUT IPO</h3>
          </div>

          {/* Bottom Content - Steps and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
            {/* Left Content - Registration Steps */}
            <div className="space-y-8 flex flex-col">
              
              {/* Step 1 */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</div>
                  <h3 className="text-xl font-bold text-black">Complete the Registration Form</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-sm list-none ml-[52px]">
                  <li className="pl-2 -indent-2">- Fill out the form carefully and double-check all information</li>
                  <li className="pl-2 -indent-2">- Use "Other Info" for alternative contacts or specific requirements</li>
                  <li className="pl-2 -indent-2">- Book a call with an FCA-regulated expert (London 0204 number)</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</div>
                  <h3 className="text-xl font-bold text-black">Submit Your Details & Expect a Call</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-sm list-none ml-[52px]">
                  <li className="pl-2 -indent-2">- Submit your details and they'll be securely processed</li>
                  <li className="pl-2 -indent-2">- You'll receive a call from a licensed representative within 48 hours</li>
                  <li className="pl-2 -indent-2">- All calls come from London 0204 numbers</li>
                  <li className="pl-2 -indent-2">- Booking a time guarantees a scheduled call at your convenience</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">3</div>
                  <h3 className="text-xl font-bold text-black">Get Ready for Your Call</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-sm list-none ml-[52px]">
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

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            
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
                  Currently valued at $45 billion with 45+ million users across 38 countries. Revenue grew to $2.2B in 2023 with $545M pre-tax profit.
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

          </div>
        </div>
      </section>



      {/* Disclaimer Section */}
      <section className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs text-black leading-relaxed space-y-4">
            <p>© 2025 Revolut Bank UAB</p>
            
            <p>
              If you would like to find out more about which Revolut entity you receive services from please click here. If you have any other questions, please reach out to us via the in-app chat in the Revolut app. Revolut Bank UAB is a bank established in the Republic of Lithuania, registered address: Konstitucijos ave. 21B, Vilnius, 08130, the Republic of Lithuania, number of registration 304580906, FI code 70700. Revolut Bank UAB is licensed by the European Central Bank and regulated by the Bank of Lithuania. Revolut Bank UAB provides credit, payment, current account and demand deposit account services.
            </p>
            
            <p>
              Insurance distribution service is provided by Revolut Insurance Europe UAB which is authorised by the Bank of Lithuania as an insurance broker undertaking. Registered address: Konstitucijos ave. 21B, Vilnius, 08130, the Republic of Lithuania, number of registration 305910164.
            </p>
            
            <p>
              Revolut Ltd (No. 08804411) is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (Firm Reference 900562). Registered address: 7 Westferry Circus, Canary Wharf, London, England, E14 4HD. Insurance related-products for Revolut Ltd customers are provided by Revolut Travel Ltd which is authorised by the Financial Conduct Authority to undertake insurance mediation services (FCA No: 780586) and by Revolut Ltd, an Appointed Representative of Revolut Travel Ltd in relation to insurance distribution activities.
            </p>
            
            <p>
              Investment services in the European Economic Area ("EEA") are provided by Revolut Securities Europe UAB (registration code 305799582, address Konstitucijos ave. 21B, Vilnius, Lithuania, LT-08130) which is authorised by the Bank of Lithuania as a brokerage firm.
            </p>
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