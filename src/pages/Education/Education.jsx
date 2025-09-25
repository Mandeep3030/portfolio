/**
 * Education Page Component - Academic background and achievements
 * Features: Educational timeline, degree information, relevant coursework
 * Includes academic achievements and learning milestones
 */

import React from 'react';
import { education, personalInfo } from '../../data/portfolio-data';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      {/* Page Header */}
      <section className="education-header section">
        <div className="container">
          <div className="header-content text-center">
            <h1 className="page-title animate-fade-in">Education & Learning</h1>
            <p className="page-subtitle animate-fade-in">
              My academic journey in software engineering and continuous learning path 
              in modern web development technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Education Timeline */}
      <section className="education-timeline section">
        <div className="container">
          <h2 className="section-title">Academic Background</h2>
          
          <div className="timeline">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content card">
                  <div className="timeline-marker">
                    <span className="marker-icon">🎓</span>
                  </div>
                  
                  <div className="education-card">
                    <div className="card-header">
                      <h3 className="institution-name">{edu.institution}</h3>
                      <span className="education-period">{edu.period}</span>
                    </div>
                    
                    <div className="card-body">
                      <h4 className="degree-title">{edu.degree}</h4>
                      <p className="location">
                        <span className="location-icon">📍</span>
                        {edu.location}
                      </p>
                      
                      <p className="education-description">{edu.description}</p>
                      
                      {/* Course Highlights */}
                      <div className="course-highlights">
                        <h5>Key Areas of Study:</h5>
                        <div className="highlights-grid">
                          {edu.highlights.map((highlight, idx) => (
                            <span key={idx} className="highlight-tag">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="learning-philosophy section bg-secondary">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2 className="section-title">Learning Philosophy</h2>
              <div className="philosophy-description">
                <p>
                  Education is not just about formal degrees—it's a lifelong journey of curiosity, 
                  growth, and adaptation. In the rapidly evolving field of technology, I believe 
                  in the importance of continuous learning and staying current with industry trends.
                </p>
                <p>
                  My approach combines theoretical knowledge from formal education with practical, 
                  hands-on experience through personal projects and real-world applications. 
                  This balance helps me understand not just the "how" but also the "why" behind 
                  different technologies and methodologies.
                </p>
              </div>
            </div>
            
            <div className="learning-stats">
              <div className="stat-item">
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <span className="stat-number">Current</span>
                  <span className="stat-label">Student Status</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <span className="stat-number">Advanced</span>
                  <span className="stat-label">Diploma Program</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">💡</div>
                <div className="stat-content">
                  <span className="stat-number">Full-Stack</span>
                  <span className="stat-label">Specialization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Development */}
      <section className="skills-development section">
        <div className="container">
          <h2 className="section-title">Skills Development Journey</h2>
          
          <div className="skills-timeline">
            <div className="skill-phase card">
              <div className="phase-header">
                <h3>Foundation Phase</h3>
                <span className="phase-period">Year 1</span>
              </div>
              <div className="phase-content">
                <p>Building strong fundamentals in programming concepts, data structures, and web technologies.</p>
                <div className="phase-skills">
                  <span className="skill-item">Programming Fundamentals</span>
                  <span className="skill-item">HTML/CSS</span>
                  <span className="skill-item">JavaScript Basics</span>
                  <span className="skill-item">Database Concepts</span>
                </div>
              </div>
            </div>

            <div className="skill-phase card">
              <div className="phase-header">
                <h3>Development Phase</h3>
                <span className="phase-period">Year 2</span>
              </div>
              <div className="phase-content">
                <p>Advanced programming concepts, frameworks, and full-stack development practices.</p>
                <div className="phase-skills">
                  <span className="skill-item">React.js</span>
                  <span className="skill-item">Node.js</span>
                  <span className="skill-item">Express.js</span>
                  <span className="skill-item">MongoDB</span>
                  <span className="skill-item">RESTful APIs</span>
                </div>
              </div>
            </div>

            <div className="skill-phase card current">
              <div className="phase-header">
                <h3>Specialization Phase</h3>
                <span className="phase-period">Current</span>
              </div>
              <div className="phase-content">
                <p>Advanced topics, industry best practices, and preparation for professional development.</p>
                <div className="phase-skills">
                  <span className="skill-item">Advanced React</span>
                  <span className="skill-item">Cloud Services</span>
                  <span className="skill-item">DevOps Basics</span>
                  <span className="skill-item">Testing</span>
                  <span className="skill-item">Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="certifications section bg-secondary">
        <div className="container">
          <h2 className="section-title">Certifications & Achievements</h2>
          
          <div className="achievements-grid">
            <div className="achievement-card card">
              <div className="achievement-icon">🎯</div>
              <h3>Academic Excellence</h3>
              <p>Maintaining strong academic performance while focusing on practical application of learned concepts.</p>
            </div>

            <div className="achievement-card card">
              <div className="achievement-icon">🚀</div>
              <h3>Project Leadership</h3>
              <p>Leading team projects and demonstrating ability to manage complex development tasks.</p>
            </div>

            <div className="achievement-card card">
              <div className="achievement-icon">💻</div>
              <h3>Technical Proficiency</h3>
              <p>Demonstrating advanced skills in modern web development frameworks and technologies.</p>
            </div>

            <div className="achievement-card card">
              <div className="achievement-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Excellent teamwork skills and ability to contribute effectively in group development projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="continuous-learning section">
        <div className="container">
          <h2 className="section-title">Continuous Learning</h2>
          
          <div className="learning-content">
            <div className="learning-methods">
              <h3>How I Stay Updated</h3>
              <div className="methods-grid">
                <div className="method-item">
                  <span className="method-icon">📖</span>
                  <h4>Technical Documentation</h4>
                  <p>Regularly reading official documentation and staying updated with framework changes.</p>
                </div>

                <div className="method-item">
                  <span className="method-icon">🎥</span>
                  <h4>Online Courses</h4>
                  <p>Completing courses on platforms like Coursera, Udemy, and freeCodeCamp.</p>
                </div>

                <div className="method-item">
                  <span className="method-icon">👥</span>
                  <h4>Developer Community</h4>
                  <p>Participating in developer forums, GitHub discussions, and tech meetups.</p>
                </div>

                <div className="method-item">
                  <span className="method-icon">🛠️</span>
                  <h4>Hands-on Projects</h4>
                  <p>Building personal projects to practice new technologies and concepts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="education-cta section bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Apply My Knowledge</h2>
            <p className="cta-description">
              My educational background and continuous learning approach have prepared me 
              to take on challenging projects and contribute meaningfully to development teams.
            </p>
            <div className="cta-actions">
              <a href="/projects" className="btn btn-outline btn-light">
                View My Projects
              </a>
              <a href="/contact" className="btn btn-secondary">
                Discuss Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;