import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, BarChart3, DollarSign, Calendar, MapPin, Target, Menu, X, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    numbers: '',
    investmentAmount: '',
    timeframe: '',
    notes: '',
    appointment: ''
  });

  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero images array
  const heroImages = [
    {
      src: "/lovable-uploads/d5371364-cf23-4fa1-9ce8-467e8b3fda66.png",
      alt: "Woman holding Revolut card"
    },
    {
      src: "/lovable-uploads/de223bd2-f548-4c90-ba82-03a64756de71.png", 
      alt: "Man with headphones showing Revolut app"
    },
    {
      src: "/lovable-uploads/643c0b1d-b8e5-47e8-aae7-c60504de625e.png",
      alt: "Woman showing Revolut app"
    },
    {
      src: "/lovable-uploads/3c35cd11-e080-4119-9e9a-154379b2fc5a.png",
      alt: "Woman holding Revolut card"
    },
    {
      src: "/lovable-uploads/20f0d219-1f1f-4d4a-aeca-e6704d264c75.png",
      alt: "Woman showing Revolut app"
    }
  ];

  // Hero image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
    
    // Collect all form data
    const submissionData = {
      ...formData,
      appointmentDate: appointmentDate ? format(appointmentDate, 'PPP') : '',
      appointmentTime: formData.appointment.includes('at ') ? formData.appointment.split('at ')[1] : ''
    };
    
    // Log the submission (in a real app, you'd send this to your backend)
    console.log('Form submitted:', submissionData);
    
    // Show success message
    alert('Thank you! Your investment interest has been registered. We will contact you soon.');
    
    // Reset form after successful submission
    setFormData({
      name: '',
      numbers: '',
      investmentAmount: '',
      timeframe: '',
      notes: '',
      appointment: ''
    });
    setAppointmentDate(undefined);
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
              <div className="w-full max-w-lg space-y-4 sm:space-y-6">
                
                
                <div className="flex justify-start" style={{ marginTop: '0.5in' }}>
                  <img 
                    src="/lovable-uploads/bc21313b-5651-4a1c-87ca-0c910f3c7794.png" 
                    alt="Revolut" 
                    className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto mb-4 sm:mb-8"
                  />
                </div>
                
                <div className="text-lg sm:text-xl text-black font-medium mb-4 sm:mb-8">
                  IPO Announcement • Expected 2025
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black uppercase tracking-tight mb-4 sm:mb-8">
                  Revolut IPO Banking on the Future
                  <br />
                  Buy Now.....
                </h1>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic font-bold">
                  "Revolut's IPO is on the horizon — and with 45 million users and some of the fastest growth in fintech, it's shaping up to be one of the biggest plays of the year. Markets are warming up, investor appetite is back, but timing's everything. Get in early. Think big. Win big."
                </p>
              </div>

              <div className="w-full max-w-lg flex gap-4">
                <button 
                  className="bg-black text-white px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-800 transition-colors min-h-[48px] flex-1 sm:flex-none"
                  onClick={() => scrollToSection('form-section')}
                >
                  More Info
                </button>
                <button 
                  className="bg-white text-black border-2 border-black px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-50 transition-colors min-h-[48px] flex-1 sm:flex-none"
                  onClick={() => scrollToSection('form-section')}
                >
                  Book A Call
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image Slideshow */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                <img 
                  src={heroImages[currentImageIndex].src}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 ease-in-out object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
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
          <div className="space-y-4 flex flex-col">
            
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border-l-4 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold min-w-[40px]">1</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Complete registration form</h3>
              </div>
              <ul className="space-y-0 text-gray-700 text-sm sm:text-base list-none ml-[52px]">
                <li className="pl-2 -indent-2">- Fill out the form carefully and double-check all information</li>
                <li className="pl-2 -indent-2">- Use "additional notes" for alternative contacts or specific requirements</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border-l-4 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold min-w-[40px]">2</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Submit your details</h3>
              </div>
              <ul className="space-y-0 text-gray-700 text-sm sm:text-base list-none ml-[52px]">
                <li className="pl-2 -indent-2">- Submit your details and they'll be securely processed</li>
                <li className="pl-2 -indent-2">- You will receive a PDF with key info and a CALL from a representative within 48 hrs</li>
                <li className="pl-2 -indent-2">- Booking a time guarantees a scheduled call at your convenience</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border-l-4 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold min-w-[40px]">3</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Get Ready for Your Call</h3>
              </div>
              <ul className="space-y-0 text-gray-700 text-sm sm:text-base list-none ml-[52px]">
                <li className="pl-2 -indent-2">- Expect a call within 48 hours of submitting</li>
                <li className="pl-2 -indent-2">- Prepare questions for the expert</li>
                <li className="pl-2 -indent-2">- Expert will provide overview and tailored strategy</li>
                <li className="pl-2 -indent-2">- <strong>+44 20</strong> number will call you</li>
              </ul>
            </div>
          </div>

          {/* Right Content - Investment Form */}
          <div className="w-full">
            <div>
              <div className="bg-black p-6 pb-14 rounded-2xl shadow-lg border border-gray-800 w-full max-w-5xl">{/* Increased to max-w-5xl for even wider form */}
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

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                <div className="space-y-3">
                  <label className="block text-xs font-medium text-white uppercase tracking-wide">
                    Book Expert Call (Optional)
                  </label>
                  
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-2 border-gray-600 bg-white text-black rounded-lg hover:bg-gray-50 focus:border-white focus:ring-1 focus:ring-gray-400 px-3 py-3 h-auto text-sm",
                            !appointmentDate && "text-gray-500"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {appointmentDate ? format(appointmentDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={appointmentDate}
                          onSelect={setAppointmentDate}
                          disabled={(date) => {
                            const today = new Date();
                            const oneWeekFromNow = new Date();
                            oneWeekFromNow.setDate(today.getDate() + 7);
                            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                            return date < today || date > oneWeekFromNow || isWeekend;
                          }}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Selection - Only show if date is selected */}
                  {appointmentDate && (
                    <div className="space-y-2">
                      <label className="block text-xs font-medium text-gray-300">Select Time</label>
                      <Select 
                        value={formData.appointment.includes('at ') ? formData.appointment.split('at ')[1] : ''} 
                        onValueChange={(time) => setFormData({...formData, appointment: `${format(appointmentDate, "MMM d")} at ${time}`})}
                      >
                        <SelectTrigger className="w-full border-2 border-gray-600 bg-white text-black rounded-lg focus:border-white focus:ring-1 focus:ring-gray-400 px-3 py-3 h-auto text-sm" data-side="bottom" data-align="start">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-300 shadow-lg z-50 max-h-64 overflow-y-auto" position="item-aligned" side="bottom" align="start" sideOffset={8} avoidCollisions={false}>
                          {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map((time) => (
                            <SelectItem key={time} value={time} className="hover:bg-gray-100 cursor-pointer text-black px-3 py-2">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
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
          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button 
              className="bg-black text-white px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              onClick={() => scrollToSection('form-section')}
            >
              More Info
            </button>
            <button 
              className="bg-white text-black border-2 border-black px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-50 transition-colors min-h-[48px]"
              onClick={() => scrollToSection('form-section')}
            >
              Book A Call
            </button>
          </div>

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
                <button 
                  className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => scrollToSection('form-section')}
                >
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
                <button 
                  className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => scrollToSection('form-section')}
                >
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
                <button 
                  className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => scrollToSection('form-section')}
                >
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
                <button 
                  className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => scrollToSection('form-section')}
                >
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
                <button 
                  className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => scrollToSection('form-section')}
                >
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
                <button 
                  className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => scrollToSection('form-section')}
                >
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Buttons Above Footer */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-4">
            <button 
              className="bg-black text-white px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              onClick={() => scrollToSection('form-section')}
            >
              More Info
            </button>
            <button 
              className="bg-white text-black border-2 border-black px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-50 transition-colors min-h-[48px]"
              onClick={() => scrollToSection('form-section')}
            >
              Book A Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-start">
            {/* Top Left corner - Revolut Logo */}
            <div className="flex items-start">
              <img 
                src="/lovable-uploads/d2432a1e-2721-45ca-9a43-ebb2eb5a8859.png" 
                alt="Revolut Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Right side - Navigation Links */}
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
              <button 
                className="text-gray-400 hover:text-white transition-colors text-lg"
                onClick={() => scrollToSection('terms-conditions')}
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Terms and Conditions section */}
      <div id="terms-conditions" className="bg-white w-full">
        <div className="py-2 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-[8px] md:text-[7px] text-black leading-tight space-y-1">
            <div className="mb-2">
              <h2 className="text-[10px] md:text-[9px] font-bold mb-1">Terms and Conditions</h2>
              <p className="text-[8px] md:text-[7px] mb-1">By submitting your information on this page, you acknowledge and agree to the following:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 md:gap-y-0.5">
              <div>
                <h3 className="font-semibold mb-0.5 text-[9px] md:text-[8px]">Introduction Only</h3>
                <p className="text-[8px] md:text-[7px] leading-tight">We are a financial intermediary. Our role is strictly limited to introducing interested individuals to regulated financial partners who may provide investment services related to the Revolut IPO or other opportunities.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-0.5 text-[9px] md:text-[8px]">No Financial Advice</h3>
                <p className="text-[8px] md:text-[7px] leading-tight">We do not offer investment advice, endorse specific investments, or recommend financial products. You should consider seeking independent financial advice before making any investment decisions.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-0.5 text-[9px] md:text-[8px]">Regulated Partners</h3>
                <p className="text-[8px] md:text-[7px] leading-tight">Any investment opportunity or financial service discussed with you will be offered solely by a third-party firm that is authorized and regulated by the appropriate financial authority (e.g. FCA, SEC, etc.). You will be informed of the partner's credentials prior to any further engagement.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-0.5 text-[9px] md:text-[8px]">Call and Contact Disclosure</h3>
                <p className="text-[8px] md:text-[7px] leading-tight">You may be contacted by a licensed investment representative within 48 hours. Calls will originate from a UK number beginning with +44 20. By submitting your contact details, you consent to be contacted for this purpose.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-0.5 text-[9px] md:text-[8px]">Data Handling</h3>
                <p className="text-[8px] md:text-[7px] leading-tight">Your information will be securely handled in accordance with our privacy policy and only shared with our regulated partners for the purpose of investor introduction. We do not sell or misuse your data.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-0.5 text-[9px] md:text-[8px]">Risk Disclaimer</h3>
                <p className="text-[8px] md:text-[7px] leading-tight">Investing in IPOs and financial products carries risk. Past performance is not indicative of future results. You may lose part or all of your investment. Ensure you fully understand the risks before proceeding.</p>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-semibold mb-0.5 text-[9px] md:text-[8px]">Eligibility</h3>
                <p className="text-[8px] md:text-[7px] leading-tight">This service is intended only for individuals who are eligible to invest in regulated financial products in their jurisdiction. You may be required to complete additional verification to confirm suitability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revolut Copyright Section */}
      <div className="bg-black w-full">
        <div className="py-6 px-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm">© 2025 Revolut. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;