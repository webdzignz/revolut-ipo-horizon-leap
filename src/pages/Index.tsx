import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, TrendingUp, Users, Calendar, Download, X } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowThankYou(true);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: ''
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Revolut_2024_Annual_Report_Summary.pdf';
    link.download = 'Revolut_2024_Annual_Report_Summary.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ipoData = [
    {
      company: "Arm Holdings",
      ticker: "ARM",
      sector: "Technology",
      date: "Sep 2023",
      raised: "$4.87B",
      performance: "+25%",
      logo: "/lovable-uploads/20f0d219-1f1f-4d4a-aeca-e6704d264c75.png"
    },
    {
      company: "Instacart",
      ticker: "CART",
      sector: "E-commerce",
      date: "Sep 2023",
      raised: "$660M",
      performance: "-15%",
      logo: "/lovable-uploads/25b5cda2-5546-448c-bd17-93266c2d4853.png"
    },
    {
      company: "Klaviyo",
      ticker: "KVYO",
      sector: "Marketing Tech",
      date: "Sep 2023",
      raised: "$576M",
      performance: "+45%",
      logo: "/lovable-uploads/28e3756b-4f60-4ca5-9919-14544e6d1f45.png"
    },
    {
      company: "Birkenstock",
      ticker: "BIRK",
      sector: "Consumer Goods",
      date: "Oct 2023",
      raised: "$1.48B",
      performance: "+12%",
      logo: "/lovable-uploads/3c35cd11-e080-4119-9e9a-154379b2fc5a.png"
    },
    {
      company: "Fidelity National Financial",
      ticker: "FNF",
      sector: "Financial Services",
      date: "Nov 2023",
      raised: "$2.2B",
      performance: "+8%",
      logo: "/lovable-uploads/5df7549f-609d-45a7-af3a-c741b8b5e94b.png"
    },
    {
      company: "Solventum",
      ticker: "SOLV",
      sector: "Healthcare",
      date: "Apr 2024",
      raised: "$3.8B",
      performance: "+18%",
      logo: "/lovable-uploads/643c0b1d-b8e5-47e8-aae7-c60504de625e.png"
    },
    {
      company: "KKR & Co",
      ticker: "KKR",
      sector: "Private Equity",
      date: "Jul 2024",
      raised: "$1.9B",
      performance: "+22%",
      logo: "/lovable-uploads/67627212-6679-4888-89a4-7dfcc02876ef.png"
    },
    {
      company: "TPG Inc",
      ticker: "TPG",
      sector: "Private Equity",
      date: "Jan 2024",
      raised: "$1.1B",
      performance: "+35%",
      logo: "/lovable-uploads/6d7c94bd-a5d6-4854-9462-2e1d094770e9.png"
    },
    {
      company: "Kenvue",
      ticker: "KVUE",
      sector: "Consumer Health",
      date: "May 2023",
      raised: "$3.8B",
      performance: "+5%",
      logo: "/lovable-uploads/8c8582dd-5800-41e6-92e5-bf016af7186e.png"
    },
    {
      company: "Corebridge Financial",
      ticker: "CRBG",
      sector: "Insurance",
      date: "Sep 2022",
      raised: "$1.68B",
      performance: "+28%",
      logo: "/lovable-uploads/b58295cd-671d-4295-a103-a1c8d634bb0c.png"
    },
    {
      company: "Haleon",
      ticker: "HLN",
      sector: "Consumer Healthcare",
      date: "Jul 2022",
      raised: "$4.5B",
      performance: "+15%",
      logo: "/lovable-uploads/bc21313b-5651-4a1c-87ca-0c910f3c7794.png"
    },
    {
      company: "Porsche AG",
      ticker: "P911",
      sector: "Automotive",
      date: "Sep 2022",
      raised: "$9.4B",
      performance: "+42%",
      logo: "/lovable-uploads/bc684528-0d11-4499-bd86-1184fd24a40d.png"
    },
    {
      company: "Bausch + Lomb",
      ticker: "BLCO",
      sector: "Healthcare",
      date: "May 2022",
      raised: "$630M",
      performance: "-8%",
      logo: "/lovable-uploads/c1cd8c60-158d-48ed-9e2c-438d0b2ec004.png"
    },
    {
      company: "Didi Global",
      ticker: "DIDI",
      sector: "Transportation",
      date: "Jun 2021",
      raised: "$4.4B",
      performance: "-75%",
      logo: "/lovable-uploads/c8d2f23f-9763-450f-879b-d04268f00419.png"
    },
    {
      company: "Robinhood",
      ticker: "HOOD",
      sector: "Fintech",
      date: "Jul 2021",
      raised: "$2.1B",
      performance: "-45%",
      logo: "/lovable-uploads/d2432a1e-2721-45ca-9a43-ebb2eb5a8859.png"
    },
    {
      company: "Coinbase",
      ticker: "COIN",
      sector: "Cryptocurrency",
      date: "Apr 2021",
      raised: "$3.4B",
      performance: "-65%",
      logo: "/lovable-uploads/d5371364-cf23-4fa1-9ce8-467e8b3fda66.png"
    },
    {
      company: "Bumble",
      ticker: "BMBL",
      sector: "Social Media",
      date: "Feb 2021",
      raised: "$2.2B",
      performance: "-25%",
      logo: "/lovable-uploads/d931b75e-5958-4017-bd44-50b2cbf9e6fa.png"
    },
    {
      company: "Roblox",
      ticker: "RBLX",
      sector: "Gaming",
      date: "Mar 2021",
      raised: "$1.2B",
      performance: "-35%",
      logo: "/lovable-uploads/de223bd2-f548-4c90-ba82-03a64756de71.png"
    },
    {
      company: "Airbnb",
      ticker: "ABNB",
      sector: "Travel",
      date: "Dec 2020",
      raised: "$3.5B",
      performance: "+85%",
      logo: "/lovable-uploads/e6871ec1-c50c-46ef-9e6c-7d5fb3d06f18.png"
    },
    {
      company: "DoorDash",
      ticker: "DASH",
      sector: "Food Delivery",
      date: "Dec 2020",
      raised: "$3.4B",
      performance: "+25%",
      logo: "/lovable-uploads/f3503a5f-fc5c-4c19-ace0-b4b7b1071e3b.png"
    },
    {
      company: "Snowflake",
      ticker: "SNOW",
      sector: "Cloud Computing",
      date: "Sep 2020",
      raised: "$3.4B",
      performance: "+125%",
      logo: "/lovable-uploads/f75b334c-2922-4196-9eb1-fd6f26b9c95e.png"
    }
  ];

  const upcomingIPOs = [
    {
      company: "Stripe",
      sector: "Fintech",
      expectedDate: "Q2 2025",
      estimatedValuation: "$95B",
      logo: "/lovable-uploads/29c719d1-d8c4-4ce6-8254-e697eefa3e17.png"
    },
    {
      company: "SpaceX",
      sector: "Aerospace",
      expectedDate: "Q3 2025",
      estimatedValuation: "$180B",
      logo: "/lovable-uploads/4e4a5147-fd89-4a1a-a7a6-a76799179213.png"
    },
    {
      company: "ByteDance",
      sector: "Social Media",
      expectedDate: "Q4 2025",
      estimatedValuation: "$220B",
      logo: "/lovable-uploads/943e8591-0be8-4e3d-9bcc-2bf79968ec68.png"
    },
    {
      company: "Canva",
      sector: "Design Software",
      expectedDate: "Q1 2026",
      estimatedValuation: "$40B",
      logo: "/lovable-uploads/6fa59685-2039-4c32-9a50-5770099ba15f.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="text-xl font-bold text-black">IPO Tracker</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">Home</a>
              <a href="#ipos" className="text-gray-600 hover:text-black transition-colors">Recent IPOs</a>
              <a href="#upcoming" className="text-gray-600 hover:text-black transition-colors">Upcoming</a>
              <a href="#insights" className="text-gray-600 hover:text-black transition-colors">Insights</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Your Gateway to <span className="text-blue-600">IPO Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay ahead of the market with comprehensive IPO data, analysis, and insights. 
              Track recent offerings, discover upcoming opportunities, and make informed investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Explore Recent IPOs
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
                View Upcoming IPOs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">500+</h3>
              <p className="text-gray-600">IPOs Tracked</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">$2.1T</h3>
              <p className="text-gray-600">Total Capital Raised</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">50K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">24/7</h3>
              <p className="text-gray-600">Market Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent IPOs Section */}
      <section id="ipos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Recent IPO Performance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track the latest public offerings and their market performance since debut
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipoData.map((ipo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={ipo.logo} 
                        alt={`${ipo.company} logo`}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg text-black">{ipo.company}</CardTitle>
                        <p className="text-sm text-gray-500">{ipo.ticker}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={ipo.performance.startsWith('+') ? 'default' : 'destructive'}
                      className={ipo.performance.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    >
                      {ipo.performance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sector:</span>
                      <span className="text-black font-medium">{ipo.sector}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">IPO Date:</span>
                      <span className="text-black font-medium">{ipo.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Raised:</span>
                      <span className="text-black font-medium">{ipo.raised}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming IPOs Section */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Upcoming IPOs to Watch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get ahead of the curve with our pipeline of anticipated public offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingIPOs.map((ipo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                <CardHeader className="text-center">
                  <img 
                    src={ipo.logo} 
                    alt={`${ipo.company} logo`}
                    className="w-16 h-16 rounded-lg object-cover mx-auto mb-4"
                  />
                  <CardTitle className="text-xl text-black">{ipo.company}</CardTitle>
                  <CardDescription className="text-gray-600">{ipo.sector}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Expected Date</p>
                      <p className="text-lg font-semibold text-black">{ipo.expectedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Est. Valuation</p>
                      <p className="text-lg font-semibold text-blue-600">{ipo.estimatedValuation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section id="insights" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Market</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get exclusive IPO insights, market analysis, and early access to upcoming opportunities delivered straight to your inbox.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">R</span>
                  </div>
                  <div>
                    <p className="font-semibold">Powered by Revolut Intelligence</p>
                    <p className="text-gray-400 text-sm">Trusted by 45M+ users worldwide</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white text-black">
                <CardHeader>
                  <CardTitle className="text-2xl">Get IPO Insights</CardTitle>
                  <CardDescription>Join thousands of investors staying informed</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                      Get IPO Insights
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="bg-white border-2 border-black max-w-md mx-auto">
          <DialogHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
            </div>
            <DialogTitle className="text-xl font-bold text-black leading-tight">
              Thank You! You're All Set, Check Your Inbox and Expect a Follow-Up Call From a +44 20 Number
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-6">
            <Button 
              onClick={handleDownload}
              className="bg-black text-white hover:bg-gray-800 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Annual Report
            </Button>
            <Button 
              onClick={() => setShowThankYou(false)}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">IT</span>
                </div>
                <span className="text-xl font-bold">IPO Tracker</span>
              </div>
              <p className="text-gray-400">
                Your comprehensive source for IPO intelligence and market insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">IPO Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Educational Content</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IPO Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;