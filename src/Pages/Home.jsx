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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 60px',
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Wave Background */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '200px',
          zIndex: 0
        }}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(255,255,255,0.1)"
          d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,213.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          fill="rgba(255,255,255,0.05)"
          d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,245.3C672,256,768,224,864,208C960,192,1056,192,1152,192C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

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
            opacity: 0.9
          }}>
            Hello,
          </h2>

          <h1 style={{
            fontSize: '50px',
            fontWeight: '700',
            margin: '5px 0',
            textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
            letterSpacing: '2px'
          }}>
            I'm Amaya.
          </h1>

          <p style={{
            fontSize: '28px',
            fontWeight: '400',
            marginTop: '5px',
            marginBottom: '35px',
            opacity: 0.95,
            letterSpacing: '1px'
          }}>
            Software Quality Assurance
          </p>

          <Link to="/about">
            <button style={{
              padding: '16px 50px',
              fontSize: '18px',
              fontWeight: '600',
              color: '#764ba2',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
            }}
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Section - Programmer Illustration */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src={programmerImage}
            alt="Programmer Illustration"
            style={{
              width: '100%',
              maxWidth: '450px',
              height: 'auto',
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))',
              animation: 'float 3s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}

export default Home;