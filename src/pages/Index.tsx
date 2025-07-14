import React from 'react';

const Index: React.FC = () => {
  console.log("IPOWIKI Index component is definitely rendering now!");
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      padding: '20px'
    }}>
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '800px',
        color: '#000000'
      }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          color: '#000000',
          fontFamily: 'Inter, sans-serif'
        }}>
          IPOWIKI
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#666666', 
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Your comprehensive resource for IPO information, analysis, and insights. 
          Discover upcoming public offerings and investment opportunities.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '12px 32px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Explore IPOs
          </button>
          
          <button style={{
            padding: '12px 32px',
            backgroundColor: 'transparent',
            color: '#1f2937',
            borderRadius: '8px',
            fontWeight: '500',
            border: '1px solid #d1d5db',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
