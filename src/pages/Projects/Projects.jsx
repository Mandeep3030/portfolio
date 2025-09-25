/**
 * Projects Page Component - Showcase of portfolio projects
 * Features: Project cards with images, descriptions, technologies used
 * Includes demo and GitHub links for each project
 */

import React, { useState } from 'react';
import { projects } from '../../data/portfolio-data';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get unique technologies for filtering
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  const categories = ['all', ...allTechnologies];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedCategory));

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="projects-header section">
        <div className="container">
          <div className="header-content text-center">
            <h1 className="page-title animate-fade-in">My Projects</h1>
            <p className="page-subtitle animate-fade-in">
              A showcase of my recent work and technical expertise. Each project represents 
              a unique challenge and demonstrates different aspects of full-stack development.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter section bg-secondary">
        <div className="container">
          <div className="filter-content">
            <h3 className="filter-title">Filter by Technology</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
            <div className="projects-count">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section section">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`project-card animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="project-image">
                    <div className="image-placeholder">
                      <span className="project-icon">💻</span>
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <a 
                            href={project.demoLink} 
                            className="overlay-btn demo-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="btn-icon">🚀</span>
                            Live Demo
                          </a>
                          <a 
                            href={project.githubLink} 
                            className="overlay-btn github-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="btn-icon">💻</span>
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-links">
                        <a 
                          href={project.demoLink} 
                          className="project-link demo-link"
                          title="Live Demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🔗
                        </a>
                        <a 
                          href={project.githubLink} 
                          className="project-link github-link"
                          title="GitHub Repository"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          💻
                        </a>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    {/* Key Highlights */}
                    <div className="project-highlights">
                      <h4>Key Features:</h4>
                      <ul className="highlights-list">
                        {project.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="project-technologies">
                      <h4>Technologies:</h4>
                      <div className="tech-tags">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className={`tech-tag ${selectedCategory === tech ? 'active' : ''}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="project-actions">
                      <a 
                        href={project.demoLink} 
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <div className="no-projects-content">
                <span className="no-projects-icon">🔍</span>
                <h3>No projects found</h3>
                <p>No projects match the selected technology filter.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedCategory('all')}
                >
                  Show All Projects
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Statistics */}
      <section className="project-stats section bg-secondary">
        <div className="container">
          <h2 className="section-title">Project Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{projects.length}</div>
              <div className="stat-label">Total Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{allTechnologies.length}</div>
              <div className="stat-label">Technologies Used</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {projects.reduce((total, project) => total + project.highlights.length, 0)}
              </div>
              <div className="stat-label">Key Features</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Interested in My Work?</h2>
            <p className="cta-description">
              These projects represent just a sample of what I can do. I'm always working on 
              new ideas and would love to discuss potential collaborations or opportunities.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">
                Let's Work Together
              </a>
              <a href="/about" className="btn btn-secondary">
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;