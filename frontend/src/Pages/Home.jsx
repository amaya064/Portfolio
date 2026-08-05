import React from 'react';
import { Link } from 'react-router-dom';
import programmerImage from '../assets/undraw_programmer_raqr.svg';

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f213a 0%, #15294a 50%, #0f213a 100%)',
      padding: '40px 60px',
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.08) 0%, transparent 70%)',
        animation: 'pulse 8s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
        animation: 'pulse 10s ease-in-out infinite reverse'
      }} />

      {/* Grid Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(100, 200, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100, 200, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        zIndex: 0
      }} />

      {/* Content Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        width: '100%',
        gap: '50px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left Section - Text Content */}
        <div style={{
          flex: '1',
          color: 'white',
          padding: '20px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '300',
            marginBottom: '5px',
            letterSpacing: '2px',
            opacity: 0.9,
            color: '#8892b0'
          }}>
            Hi!,
          </h2>

          <h1 style={{
            fontSize: '55px',
            fontWeight: '700',
            margin: '5px 0',
            textShadow: '0 0 30px rgba(0, 188, 212, 0.2)',
            letterSpacing: '2px',
            background: 'linear-gradient(135deg, #ffffff 0%, #64ffda 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            I'm Amaya Bandara
          </h1>

          <p style={{
            fontSize: '28px',
            fontWeight: '400',
            marginTop: '5px',
            marginBottom: '35px',
            opacity: 0.95,
            letterSpacing: '1px',
            color: '#ccd6f6'
          }}>
            Final year IT Undergraduate
          </p>

          {/* Social Icons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px'
          }}>
            {['GitHub', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  color: '#8892b0',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(136, 146, 176, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#64ffda';
                  e.target.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                  e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#8892b0';
                  e.target.style.borderColor = 'rgba(136, 146, 176, 0.1)';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Programmer Illustration */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '350px'
          }}>
            {/* Glow effect behind image */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(0, 188, 212, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 4s ease-in-out infinite'
            }} />
            
            <img 
              src={programmerImage}
              alt="Programmer Illustration"
              style={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 20px 60px rgba(0, 188, 212, 0.2))',
                animation: 'float 3s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
          
          @keyframes shine {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(100%) rotate(45deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Home;