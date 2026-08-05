import React from 'react';

export default function Experience() {
  return (
    <>
      <style>
        {`
          /* Container */
          .experience-page {
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
          .experience-content-wrapper {
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

          .section-title.work {
            border-bottom-color: rgba(100, 255, 218, 0.3);
          }

          .section-title.projects {
            border-bottom-color: rgba(100, 255, 218, 0.3);
          }

          .section-divider {
            height: 1px;
            background: linear-gradient(to right, rgba(100, 255, 218, 0.2), transparent);
            margin: 50px 0;
            border: none;
          }

          /* Experience Items */
          .experience-item {
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

          .experience-item:hover {
            transform: translateY(-4px);
            background: rgba(21, 41, 74, 0.8);
            border-color: rgba(100, 255, 218, 0.2);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          }

          .experience-content {
            flex: 1;
          }

          .role {
            font-size: 1.1rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 4px 0;
            letter-spacing: -0.3px;
          }

          .role .badge {
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

          .role .badge.project-badge {
            background: rgba(100, 255, 218, 0.1);
            color: #64ffda;
            border-color: rgba(100, 255, 218, 0.15);
          }

          .company {
            font-size: 1rem;
            font-weight: 500;
            color: #8892b0;
            margin: 0 0 12px 0;
          }

          .company .project-sub {
            font-weight: 400;
            color: #8892b0;
            font-size: 0.9rem;
          }

          .experience-content ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .experience-content ul li {
            position: relative;
            padding-left: 22px;
            margin-bottom: 8px;
            font-size: 0.95rem;
            line-height: 1.6;
            color: #ccd6f6;
          }

          .experience-content ul li::before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #64ffda;
            font-weight: 700;
          }

          .experience-content ul li.project-bullet::before {
            color: #64ffda;
          }

          .experience-meta {
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

          /* Project specific styling */
          .project-item .role {
            color: #ffffff;
          }

          .project-item .experience-content ul li::before {
            color: #64ffda;
          }

          .tech-tag {
            display: inline-block;
            font-size: 0.7rem;
            font-weight: 600;
            color: #64ffda;
            background: rgba(100, 255, 218, 0.1);
            padding: 2px 14px;
            border-radius: 20px;
            margin-left: 8px;
            letter-spacing: 0.3px;
            border: 1px solid rgba(100, 255, 218, 0.15);
          }

          /* Animations */
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .experience-page {
              padding: 30px 16px;
              padding-top: 80px;
            }

            .experience-item {
              flex-direction: column;
              gap: 12px;
              padding: 20px;
            }

            .experience-meta {
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

            .section-title {
              font-size: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .role {
              font-size: 1rem;
            }

            .role .badge {
              display: block;
              margin-left: 0;
              margin-top: 6px;
              width: fit-content;
            }

            .experience-content ul li {
              font-size: 0.88rem;
            }
          }
        `}
      </style>

      <div className="experience-page">
        {/* Animated Background Elements */}
        <div className="bg-glow-1" />
        <div className="bg-glow-2" />
        <div className="grid-overlay" />

        {/* Content */}
        <div className="experience-content-wrapper">
          {/* WORK EXPERIENCE SECTION */}
          <h2 className="section-title work">💼 Work Experience</h2>

          {/* Experience 1 - Gamage Recruiters */}
          <div className="experience-item">
            <div className="experience-content">
              <h3 className="role">
                QA Intern
                <span className="badge">Full-time</span>
              </h3>
              <h4 className="company">Gamage Recruiters (PVT) Ltd</h4>
              <ul>
                <li>Ensure user satisfaction and retention by providing responsive tech support</li>
                <li>Build and maintain software documentation sites using various programming languages</li>
                <li>Increase productivity by using software to organize, track bug patches and add feature requests</li>
                <li>Collaborate with other developers to update the website and create new features</li>
              </ul>
            </div>
            <div className="experience-meta">
              <span className="date">Oct 2025 – Apr 2026</span>
              <span className="location">Sri Lanka</span>
            </div>
          </div>

          {/* Experience 2 - Trischel Fabrics */}
          <div className="experience-item">
            <div className="experience-content">
              <h3 className="role">
                IT Intern
                <span className="badge">Internship</span>
              </h3>
              <h4 className="company">Trischel Fabrics (Private) Ltd - MAS</h4>
              <ul>
                <li>Create a Power BI dashboard for Machine maintenance system</li>
                <li>Built and maintained websites for Machine maintenance system</li>
                <li>Filed reports and gathered information for system improvements</li>
              </ul>
            </div>
            <div className="experience-meta">
              <span className="date">Jun 2025 – Oct 2025</span>
              <span className="location">Sri Lanka</span>
            </div>
          </div>

          <hr className="section-divider" />

          {/* PERSONAL PROJECTS SECTION */}
          <h2 className="section-title projects">🚀 Personal Projects</h2>

          {/* Project 1 - Automation Testing - CTMS */}
          <div className="experience-item project-item">
            <div className="experience-content">
              <h3 className="role">
                Automation Testing
                <span className="tech-tag">Postman</span>
              </h3>
              <h4 className="company">CTMS Project <span className="project-sub">- Backend Testing</span></h4>
              <ul>
                <li className="project-bullet">Test the backend endpoints using Postman and create test reports</li>
              </ul>
            </div>
            <div className="experience-meta">
              <span className="date">2025</span>
              <span className="location">Personal Project</span>
            </div>
          </div>

          {/* Project 2 - Pick and Go */}
          <div className="experience-item project-item">
            <div className="experience-content">
              <h3 className="role">
                Automation Testing
                <span className="tech-tag">Cypress</span>
              </h3>
              <h4 className="company">Pick and Go Project <span className="project-sub">- E2E Testing</span></h4>
              <ul>
                <li className="project-bullet">Tested all CRUD operations in the frontend using Cypress for this online booking app</li>
              </ul>
            </div>
            <div className="experience-meta">
              <span className="date">2025</span>
              <span className="location">Personal Project</span>
            </div>
          </div>

          {/* Project 3 - Student Management System */}
          <div className="experience-item project-item">
            <div className="experience-content">
              <h3 className="role">
                Automation Testing
                <span className="tech-tag">Selenium IDE</span>
              </h3>
              <h4 className="company">Student Management System <span className="project-sub">- UI Testing</span></h4>
              <ul>
                <li className="project-bullet">Tested the online student management portal using Selenium IDE</li>
              </ul>
            </div>
            <div className="experience-meta">
              <span className="date">2024</span>
              <span className="location">Personal Project</span>
            </div>
          </div>

          {/* Project 4 - Manual Testing */}
          <div className="experience-item project-item">
            <div className="experience-content">
              <h3 className="role">
                Manual Testing
                <span className="tech-tag">Manual QA</span>
              </h3>
              <h4 className="company">CTMS HR Project <span className="project-sub">- Frontend Testing</span></h4>
              <ul>
                <li className="project-bullet">Manually tested the frontend and created detailed test and bug reports</li>
              </ul>
            </div>
            <div className="experience-meta">
              <span className="date">2024</span>
              <span className="location">Personal Project</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}