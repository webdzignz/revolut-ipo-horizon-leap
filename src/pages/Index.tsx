const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-6xl font-bold mb-6 text-black tracking-tight">
          IPOWIKI
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your comprehensive resource for IPO information, analysis, and insights. 
          Discover upcoming public offerings and investment opportunities.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Explore IPOs
          </button>
          <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
