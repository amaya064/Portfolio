import React from 'react';

export default function Education() {
  return (
    <>
      <style>
        {`
          /* Container */
          .education-page {
            min-height: 100vh;
            padding: 40px 60px;
            margin: 0;
            font-family: 'Arial', sans-serif;
            position: relative;
            overflow: hidden;
            padding-top: 100px;
            background: linear-gradient(135deg, #0f213a 0%, #15294a 50%, #0f213a 100%);
          }

          /* Animated Background Elements */
          .bg-glow-1 {
            position: absolute;
            top: -50%;
            right: -20%;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 188, 212, 0.08) 0%, transparent 70%);
            animation: pulse 8s ease-in-out infinite;
          }

          .bg-glow-2 {
            position: absolute;
            bottom: -30%;
            left: -10%;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%);
            animation: pulse 10s ease-in-out infinite reverse;
          }

          /* Grid Pattern Overlay */
          .grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(100, 200, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 200, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 0;
          }

          /* Content */
          .education-content-wrapper {
            position: relative;
            z-index: 1;
            max-width: 1000px;
            margin: 0 auto;
          }

          /* Section Titles */
          .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #ccd6f6;
            margin-bottom: 30px;
            padding-bottom: 12px;
            border-bottom: 3px solid rgba(100, 255, 218, 0.3);
            display: inline-block;
            letter-spacing: -0.5px;
          }

          .section-title.education {
            border-bottom-color: rgba(100, 255, 218, 0.3);
          }

          .section-title.certificates {
            border-bottom-color: rgba(100, 255, 218, 0.3);
          }

          .section-divider {
            height: 1px;
            background: linear-gradient(to right, rgba(100, 255, 218, 0.2), transparent);
            margin: 50px 0;
            border: none;
          }

          /* Education Items */
          .education-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 40px;
            padding: 24px 30px;
            margin-bottom: 16px;
            background: rgba(21, 41, 74, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            border: 1px solid rgba(100, 255, 218, 0.08);
            transition: all 0.3s ease;
          }

          .education-item:hover {
            transform: translateY(-4px);
            background: rgba(21, 41, 74, 0.8);
            border-color: rgba(100, 255, 218, 0.2);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          }

          .education-content {
            flex: 1;
          }

          .degree {
            font-size: 1.1rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 4px 0;
            letter-spacing: -0.3px;
          }

          .degree .badge {
            font-size: 0.7rem;
            font-weight: 600;
            background: rgba(100, 255, 218, 0.15);
            color: #64ffda;
            padding: 2px 14px;
            border-radius: 20px;
            margin-left: 10px;
            letter-spacing: 0.3px;
            border: 1px solid rgba(100, 255, 218, 0.2);
          }

          .institution {
            font-size: 1rem;
            font-weight: 500;
            color: #8892b0;
            margin: 0 0 12px 0;
          }

          .education-content ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .education-content ul li {
            position: relative;
            padding-left: 22px;
            margin-bottom: 8px;
            font-size: 0.95rem;
            line-height: 1.6;
            color: #ccd6f6;
          }

          .education-content ul li::before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #64ffda;
            font-weight: 700;
          }

          .education-meta {
            text-align: right;
            min-width: 150px;
            flex-shrink: 0;
            padding-top: 2px;
          }

          .date {
            display: block;
            font-size: 0.85rem;
            font-weight: 500;
            color: #ccd6f6;
            margin-bottom: 4px;
          }

          .location {
            display: block;
            font-size: 0.8rem;
            color: #8892b0;
          }

          /* Certificate Items */
          .certificate-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;
            padding: 18px 30px;
            margin-bottom: 12px;
            background: rgba(21, 41, 74, 0.4);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            border: 1px solid rgba(100, 255, 218, 0.06);
            transition: all 0.3s ease;
          }

          .certificate-item:hover {
            transform: translateX(6px);
            background: rgba(21, 41, 74, 0.7);
            border-color: rgba(100, 255, 218, 0.15);
          }

          .cert-name {
            font-size: 1rem;
            font-weight: 600;
            color: #ffffff;
            margin: 0;
          }

          .cert-issuer {
            font-size: 0.85rem;
            color: #8892b0;
            margin: 0;
          }

          .cert-meta {
            text-align: right;
            min-width: 130px;
            flex-shrink: 0;
          }

          .cert-date {
            font-size: 0.8rem;
            color: #8892b0;
          }

          .cert-badge {
            display: inline-block;
            font-size: 0.65rem;
            font-weight: 600;
            color: #64ffda;
            background: rgba(100, 255, 218, 0.1);
            padding: 2px 12px;
            border-radius: 20px;
            border: 1px solid rgba(100, 255, 218, 0.15);
            margin-top: 4px;
          }

          /* Animations */
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .education-page {
              padding: 30px 16px;
              padding-top: 80px;
            }

            .education-item {
              flex-direction: column;
              gap: 12px;
              padding: 20px;
            }

            .education-meta {
              text-align: left;
              min-width: auto;
              width: 100%;
            }

            .date {
              display: inline;
              margin-right: 12px;
            }

            .location {
              display: inline;
            }

            .certificate-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
              padding: 16px 20px;
            }

            .cert-meta {
              text-align: left;
              min-width: auto;
              width: 100%;
            }

            .section-title {
              font-size: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .degree {
              font-size: 1rem;
            }

            .degree .badge {
              display: block;
              margin-left: 0;
              margin-top: 6px;
              width: fit-content;
            }

            .education-content ul li {
              font-size: 0.88rem;
            }

            .cert-name {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="education-page">
        {/* Animated Background Elements */}
        <div className="bg-glow-1" />
        <div className="bg-glow-2" />
        <div className="grid-overlay" />

        {/* Content */}
        <div className="education-content-wrapper">
          {/* EDUCATION SECTION */}
          <h2 className="section-title education">🎓 Education</h2>

          {/* Education 1 - SLIIT */}
          <div className="education-item">
            <div className="education-content">
              <h3 className="degree">
                BSc (Hons) Information Technology
                <span className="badge">Current</span>
              </h3>
              <h4 className="institution">Sri Lanka Institute of Information Technology (SLIIT)</h4>
              <ul>
                <li>Specializing in Information Technology</li>
                <li>Expected Graduation: 2027</li>
              </ul>
            </div>
            <div className="education-meta">
              <span className="date">2022 – 2026</span>
              <span className="location">Sri Lanka</span>
            </div>
          </div>

          {/* Education 2 - AL */}
          <div className="education-item">
            <div className="education-content">
              <h3 className="degree">
                G.C.E. Advanced Level
                <span className="badge">Completed</span>
              </h3>
              <h4 className="institution">Swarna Jayanthi National Collge, Kegalle</h4>
              <ul>
                <li>Completed Advanced Level examinations in the Science stream</li>
                <li>Subjects: Biology, Chemistry, Physics</li>
              </ul>
            </div>
            <div className="education-meta">
              <span className="date">2017 – 2019</span>
              <span className="location">Kegalle, Sri Lanka</span>
            </div>
          </div>

          <hr className="section-divider" />

          {/* CERTIFICATES SECTION */}
          <h2 className="section-title certificates">📜 Certificates</h2>

          {/* Certificate 1 */}
          <div className="certificate-item">
            <div>
              <h4 className="cert-name">Software Testing and Validation</h4>
              <p className="cert-issuer">University of Leeds</p>
            </div>
            <div className="cert-meta">
              <span className="cert-date">2024</span>
              <div className="cert-badge">Certificate</div>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="certificate-item">
            <div>
              <h4 className="cert-name">Agile Project Management</h4>
              <p className="cert-issuer">University of Moratuwa</p>
            </div>
            <div className="cert-meta">
              <span className="cert-date">2024</span>
              <div className="cert-badge">Certificate</div>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="certificate-item">
            <div>
              <h4 className="cert-name">Python for Beginners</h4>
              <p className="cert-issuer">University of Moratuwa</p>
            </div>
            <div className="cert-meta">
              <span className="cert-date">2023</span>
              <div className="cert-badge">Certificate</div>
            </div>
          </div>

          {/* Certificate 4 */}
          <div className="certificate-item">
            <div>
              <h4 className="cert-name">Introduction to IOT</h4>
              <p className="cert-issuer">Cisco Networking Academy</p>
            </div>
            <div className="cert-meta">
              <span className="cert-date">2023</span>
              <div className="cert-badge">Certificate</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}