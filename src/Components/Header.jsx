import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const handleResumeDownload = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Amaya_Bandara_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#ffffff',
          fontSize: '20px',
          fontWeight: '700',
          letterSpacing: '1px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Amaya Bandara
        </Link>
      </h1>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        <span 
          onClick={handleResumeDownload}
          style={{ 
            padding: '10px 25px',
            cursor: 'pointer',
            color: '#764ba2',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '25px',
            backgroundColor: '#ffffff',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
          }}
        >
          Resume
        </span>
        <Link to="/about" style={{ 
          padding: '10px 18px',
          textDecoration: 'none', 
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          About
        </Link>
        <Link to="/experience" style={{ 
          padding: '10px 18px',
          textDecoration: 'none', 
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          Experience
        </Link>
        <Link to="/education" style={{ 
          padding: '10px 18px',
          textDecoration: 'none', 
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          Education
        </Link>
        <Link to="/contact" style={{ 
          padding: '10px 18px',
          textDecoration: 'none', 
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;