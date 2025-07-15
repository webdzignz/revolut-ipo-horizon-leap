import React from 'react';

const Index: React.FC = () => {
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

            {/* Right Content - Decorative Element */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Main decorative graphic */}
              <div className="relative w-96 h-96">
                {/* Central circle with R logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center z-10">
                  <span className="text-2xl font-bold text-gray-600">R</span>
                </div>
                
                {/* Radiating elements */}
                <div className="absolute inset-0">
                  {/* Blue elements */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-blue-500 rounded-sm rotate-12 origin-bottom"></div>
                  <div className="absolute top-8 right-8 w-12 h-24 bg-blue-400 rounded-sm rotate-45 origin-bottom"></div>
                  <div className="absolute bottom-8 right-4 w-14 h-28 bg-blue-600 rounded-sm -rotate-12 origin-bottom"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-18 h-36 bg-blue-500 rounded-sm -rotate-45 origin-bottom"></div>
                  <div className="absolute bottom-8 left-4 w-12 h-24 bg-blue-400 rounded-sm rotate-12 origin-bottom"></div>
                  <div className="absolute top-8 left-8 w-16 h-32 bg-blue-600 rounded-sm -rotate-45 origin-bottom"></div>
                  
                  {/* Green elements */}
                  <div className="absolute top-4 left-1/3 w-10 h-20 bg-green-400 rounded-sm rotate-30 origin-bottom"></div>
                  <div className="absolute right-4 top-1/3 w-12 h-24 bg-green-500 rounded-sm rotate-60 origin-bottom"></div>
                  <div className="absolute bottom-4 right-1/3 w-14 h-28 bg-green-400 rounded-sm -rotate-30 origin-bottom"></div>
                  <div className="absolute left-4 bottom-1/3 w-10 h-20 bg-green-500 rounded-sm -rotate-60 origin-bottom"></div>
                  
                  {/* Gray elements */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gray-300 rounded-sm rotate-0 origin-bottom"></div>
                  <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-10 h-20 bg-gray-400 rounded-sm rotate-90 origin-bottom"></div>
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-12 h-24 bg-gray-300 rounded-sm rotate-0 origin-bottom"></div>
                  <div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-gray-400 rounded-sm -rotate-90 origin-bottom"></div>
                </div>
              </div>
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