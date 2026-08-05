import React from 'react';
import { Link } from 'react-router-dom';
// Import your photo (replace the path with your actual image)
import myPhoto from '../assets/undraw_programmer_raqr.svg'; // <-- CHANGE THIS PATH

function About() {
  // Technology categories data
  const techCategories = [
    {
      title: '🧪 Testing Tools',
      icon: '🔧',
      technologies: ['Selenium', 'Selenium IDE', 'Cypress', 'Postman']
    },
    {
      title: '🔬 API Testing',
      icon: '🔗',
      technologies: ['Postman', 'Swagger']
    },
    {
      title: '💻 Web Development & Programming',
      icon: '⚡',
      technologies: ['React JS', 'Node JS', 'Tailwind', 'HTML/CSS', 'JavaScript', 'Python', 'Java']
    },
    {
      title: '🗄️ Databases',
      icon: '📊',
      technologies: ['MongoDB', 'MySQL']
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
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

      {/* Main Content Container */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        
        {/* Profile Section - Photo and Bio */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '50px',
          marginBottom: '60px',
          flexWrap: 'wrap',
        }}>
          
          {/* Left Section - Photo */}
          <div style={{
            flex: '1 1 300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px',
            }}>
              {/* Glow effect behind photo */}
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
              
              {/* Photo with circular crop and border */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(100, 255, 218, 0.3)',
                boxShadow: '0 20px 60px rgba(0, 188, 212, 0.2)',
                animation: 'float 3s ease-in-out infinite',
                aspectRatio: '1 / 1',
              }}>
                <img 
                  src={myPhoto}
                  alt="Amaya Bandara"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div style={{
            flex: '1 1 400px',
            color: 'white',
            padding: '20px',
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '300',
              marginBottom: '5px',
              letterSpacing: '2px',
              opacity: 0.9,
              color: '#8892b0'
            }}>
              About Me
            </h2>

            <p style={{
              fontSize: '22px',
              fontWeight: '400',
              marginTop: '5px',
              marginBottom: '25px',
              opacity: 0.95,
              letterSpacing: '1px',
              color: '#ccd6f6'
            }}>
              Software Quality Assurance
            </p>

            {/* Bio / Description */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid rgba(100, 255, 218, 0.08)',
            }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#ccd6f6',
                margin: 0,
              }}>
                I'm Amaya Bandara, a final year undergraduate in Information Technology with a passion for 
                <span style={{ color: '#64ffda', fontWeight: '500' }}> software quality assurance</span>. 
                My journey in software testing began and grew into a career ambition — to become a 
                <span style={{ color: '#64ffda', fontWeight: '500' }}> Quality Assurance Engineer</span>. 
                I continuously push myself to learn new technologies and best practices in software quality assurance.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '10px',
            background: 'linear-gradient(135deg, #ffffff 0%, #64ffda 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Technologies I Work With
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#8892b0',
            marginBottom: '40px',
            fontSize: '16px',
          }}>
            A curated set of technologies and tools I've worked with throughout my journey
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {techCategories.map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(100, 255, 218, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 188, 212, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontSize: '28px',
                  }}>
                    {category.icon}
                  </span>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#ccd6f6',
                    margin: 0,
                  }}>
                    {category.title}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}>
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: 'rgba(100, 255, 218, 0.08)',
                        color: '#64ffda',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '500',
                        border: '1px solid rgba(100, 255, 218, 0.12)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.15)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.08)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
        `}
      </style>
    </div>
  );
}

export default About;