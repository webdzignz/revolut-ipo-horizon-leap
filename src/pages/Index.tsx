import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Users, DollarSign, Building2, Globe, ArrowRight, CheckCircle, Star, Award, Shield, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [email, setEmail] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">IPOWIKI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-blue-600 hover:bg-blue-700">
            <Star className="w-4 h-4 mr-2" />
            #1 IPO Information Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your Gateway to
            <span className="block text-blue-400">IPO Success</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Get comprehensive IPO insights, real-time data, and expert analysis to make informed investment decisions.
          </p>
          
          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <p className="text-sm text-gray-400">
            Join 50,000+ investors who trust IPOWIKI for their IPO insights
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need for
              <span className="block text-blue-400">IPO Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive tools and insights to navigate the IPO landscape with confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
                title: "Real-Time IPO Data",
                description: "Live updates on IPO filings, pricing, and market performance"
              },
              {
                icon: <Users className="h-8 w-8 text-green-400" />,
                title: "Expert Analysis",
                description: "In-depth research and analysis from industry professionals"
              },
              {
                icon: <Calendar className="h-8 w-8 text-purple-400" />,
                title: "IPO Calendar",
                description: "Never miss an important IPO date with our comprehensive calendar"
              },
              {
                icon: <DollarSign className="h-8 w-8 text-yellow-400" />,
                title: "Valuation Tools",
                description: "Advanced tools to assess IPO valuations and potential returns"
              },
              {
                icon: <Shield className="h-8 w-8 text-red-400" />,
                title: "Risk Assessment",
                description: "Comprehensive risk analysis for informed decision making"
              },
              {
                icon: <Zap className="h-8 w-8 text-orange-400" />,
                title: "Instant Alerts",
                description: "Get notified immediately about IPO developments"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "IPOs Tracked" },
              { number: "50K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your
              <span className="block text-blue-400">Investment Plan</span>
            </h2>
            <p className="text-xl text-gray-300">
              Flexible pricing for every type of investor
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                features: [
                  "Basic IPO calendar",
                  "Email alerts",
                  "Community access",
                  "Mobile app"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                features: [
                  "Everything in Starter",
                  "Advanced analytics",
                  "Expert research reports",
                  "Priority support",
                  "API access"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$299",
                period: "/month",
                features: [
                  "Everything in Professional",
                  "Custom integrations",
                  "Dedicated account manager",
                  "White-label solutions",
                  "Advanced security"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`bg-gray-800 border-gray-700 relative ${plan.popular ? 'border-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    <Award className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-400">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your IPO Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful investors who trust IPOWIKI
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">IPOWIKI</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for IPO insights and investment decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Globe className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IPOWIKI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Thank You Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Thank You! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <p className="text-lg text-gray-300">
              We've received your email and will keep you updated with the latest IPO insights!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;