import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Index = () => {
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">REVOLUT</div>
            <Button 
              onClick={() => setShowRegisterDialog(true)}
              className="bg-white text-black hover:bg-gray-200"
            >
              Register Interest
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to REVOLUT
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Register your interest for early access
          </p>
        </div>
      </main>

      {/* Register Interest Dialog */}
      <Dialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog}>
        <DialogContent className="sm:max-w-md bg-black border-gray-800">
          <div className="flex flex-col items-center space-y-6 p-6">
            {/* Logo */}
            <div className="text-5xl font-bold text-white">
              REVOLUT
            </div>
            
            {/* Thank you message */}
            <p className="text-xl text-center text-white max-w-lg">
              Thank You! You're All Set. An Expert Will Contact You From a +4420.... Number With 48 Hours
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;