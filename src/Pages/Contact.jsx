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
    // Handle form submission here
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

      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        gap: '60px',
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '50px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left Section - Contact Info */}
        <div style={{
          flex: '1',
          paddingRight: '30px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '10px'
          }}>
            Get In Touch
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '30px'
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
                  color: '#999',
                  fontWeight: '500'
                }}>
                  Email
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#333',
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
                  color: '#999',
                  fontWeight: '500'
                }}>
                  Phone
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#333',
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
                  color: '#999',
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
                    color: '#667eea',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
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
                  color: '#999',
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
                    color: '#667eea',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
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
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '15px'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{
              marginBottom: '20px'
            }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#555',
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
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
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
                color: '#555',
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
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
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
                color: '#555',
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
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  fontFamily: 'Arial, sans-serif'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
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
                color: 'white',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;