import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

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
      paddingTop: '100px', // Increased to account for header
      paddingBottom: '60px'
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
        display: 'flex',
        gap: '60px',
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '50px',
        position: 'relative',
        zIndex: 1,
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        
        {/* Left Section - Contact Info */}
        <div style={{
          flex: '1',
          paddingRight: '30px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '10px',
            background: 'linear-gradient(135deg, #ffffff 0%, #64ffda 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Get In Touch
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#ccd6f6',
            lineHeight: '1.6',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            I'm always open to discussing new opportunities, QA automation challenges,
            <br />
            or just having a conversation about testing. Reach out!
          </p>

          {/* Contact Details */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <span style={{
                fontSize: '20px',
                minWidth: '30px'
              }}>📧</span>
              <div>
                <div style={{
                  fontSize: '14px',
                  color: '#8892b0',
                  fontWeight: '500'
                }}>
                  Email
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#ccd6f6',
                  fontWeight: '500'
                }}>
                  inoliamaya@gmail.com
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <span style={{
                fontSize: '20px',
                minWidth: '30px'
              }}>📱</span>
              <div>
                <div style={{
                  fontSize: '14px',
                  color: '#8892b0',
                  fontWeight: '500'
                }}>
                  Phone
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#ccd6f6',
                  fontWeight: '500'
                }}>
                  +94 70 118 7919
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <span style={{
                fontSize: '20px',
                minWidth: '30px'
              }}>🔗</span>
              <div>
                <div style={{
                  fontSize: '14px',
                  color: '#8892b0',
                  fontWeight: '500'
                }}>
                  LinkedIn
                </div>
                <a 
                  href="https://www.linkedin.com/in/amaya-bandara/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '16px',
                    color: '#64ffda',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64ffda';
                    e.target.style.textDecoration = 'none';
                  }}
                >
                  linkedin.com/in/amaya-bandara/
                </a>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <span style={{
                fontSize: '20px',
                minWidth: '30px'
              }}>💻</span>
              <div>
                <div style={{
                  fontSize: '14px',
                  color: '#8892b0',
                  fontWeight: '500'
                }}>
                  GitHub
                </div>
                <a 
                  href="https://github.com/amaya064" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '16px',
                    color: '#64ffda',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64ffda';
                    e.target.style.textDecoration = 'none';
                  }}
                >
                  github.com/amaya064
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div style={{
          flex: '1',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{
              marginBottom: '20px'
            }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#8892b0',
                marginBottom: '8px'
              }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#64ffda';
                  e.target.style.boxShadow = '0 0 20px rgba(100, 255, 218, 0.1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
                placeholder="Enter your name"
              />
            </div>

            <div style={{
              marginBottom: '20px'
            }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#8892b0',
                marginBottom: '8px'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#64ffda';
                  e.target.style.boxShadow = '0 0 20px rgba(100, 255, 218, 0.1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
                placeholder="Enter your email"
              />
            </div>

            <div style={{
              marginBottom: '25px'
            }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#8892b0',
                marginBottom: '8px'
              }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  fontFamily: 'Arial, sans-serif',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#64ffda';
                  e.target.style.boxShadow = '0 0 20px rgba(100, 255, 218, 0.1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#0f213a',
                background: 'linear-gradient(135deg, #64ffda 0%, #00b4d8 100%)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(100, 255, 218, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 30px rgba(100, 255, 218, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(100, 255, 218, 0.3)';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Contact;