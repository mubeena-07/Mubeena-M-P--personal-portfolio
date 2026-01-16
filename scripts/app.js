// Initialize Lucide Icons
lucide.createIcons();

// Elements
const app = document.getElementById('app');

// Render Function
function render() {
    // 1. Navbar
    const nav = `
        <nav>
            <div class="nav-container">
                <div class="logo">
                    <img src="assets/images/profile.png" alt="Mubeena M P" style="height: 40px; width: 40px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);">
                </div>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact" class="btn btn-primary">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;

    // 2. Hero
    const hero = `
        <section class="hero">
            <div data-aos="fade-up">
                <h1>${content.hero.name}</h1>
                <div class="role">${content.hero.role}</div>
                <p>${content.hero.tagline}</p>
                <div style="display:flex; gap:1rem; justify-content:center;">
                    <a href="#projects" class="btn btn-primary">
                        <i data-lucide="folder"></i> View Projects
                    </a>
                    <a href="#contact" class="btn btn-outline">
                        <i data-lucide="mail"></i> Contact Me
                    </a>
                </div>
            </div>
        </section>
    `;

    // 3. About
    const educationHTML = content.about.education.map(edu => `
        <div class="timeline-item">
            <h4>${edu.degree}</h4>
            <p style="color:var(--text-gray)">${edu.school}</p>
            <small style="color:var(--primary)">${edu.year}</small>
        </div>
    `).join('');

    const about = `
        <section id="about">
            <h2>About Me</h2>
            <div class="about-grid">
                <div data-aos="fade-right">
                    <p style="margin-bottom:1.5rem; font-size:1.1rem;">${content.about.bio}</p>
                    <h3>Achievments & Certifications</h3>
                    <ul style="list-style:none; margin-top:1rem;">
                        ${content.about.certifications.map(c => `<li style="margin-bottom:0.5rem; display:flex; gap:0.5rem;"><i data-lucide="check-circle" style="color:var(--primary); width:20px;"></i> ${c}</li>`).join('')}
                    </ul>
                </div>
                <div data-aos="fade-left">
                    <h3>Education</h3>
                    <div style="margin-top:1.5rem;">
                        ${educationHTML}
                    </div>
                </div>
            </div>
        </section>
    `;

    // 4. Skills
    const iconMap = {
        // Languages & Core
        'Python': { type: 'devicon', class: 'devicon-python-plain colored' }, // Plain colored often cleaner
        'R': { type: 'devicon', class: 'devicon-r-plain colored' }, // Switched to plain colored for better visibility
        'SQL': { type: 'lucide', icon: 'database', color: '#00bcd4' },
        'MySQL': { type: 'devicon', class: 'devicon-mysql-plain colored' },
        'HTML': { type: 'devicon', class: 'devicon-html5-plain colored' },
        'CSS': { type: 'devicon', class: 'devicon-css3-plain colored' },
        'OOPS': { type: 'lucide', icon: 'boxes', color: '#e11d48' },

        // ML/DL
        'TensorFlow': { type: 'devicon', class: 'devicon-tensorflow-original colored' },
        'Keras': { type: 'devicon', class: 'devicon-keras-plain colored' },
        'Scikit-learn': { type: 'devicon', class: 'devicon-scikitlearn-plain colored' },
        'Regression': { type: 'lucide', icon: 'trending-up', color: '#3b82f6' },
        'Classification': { type: 'lucide', icon: 'git-fork', color: '#10b981' },
        'k-NN': { type: 'lucide', icon: 'users', color: '#6366f1' },
        'Naive Bayes': { type: 'lucide', icon: 'sigma', color: '#ec4899' },
        'Decision Trees': { type: 'lucide', icon: 'git-graph', color: '#22c55e' },
        'SVM': { type: 'lucide', icon: 'divide', color: '#f43f5e' },
        'K-Means': { type: 'lucide', icon: 'grid', color: '#8b5cf6' },
        'DBSCAN': { type: 'lucide', icon: 'scatter-chart', color: '#06b6d4' },
        'CNN': { type: 'lucide', icon: 'image', color: '#d946ef' },
        'RNN': { type: 'lucide', icon: 'activity', color: '#f97316' },

        // Tools
        'Tableau': { type: 'lucide', icon: 'bar-chart-2', color: '#e63946' },
        'Matplotlib': { type: 'devicon', class: 'devicon-matplotlib-plain colored' },
        'Seaborn': { type: 'lucide', icon: 'pie-chart', color: '#38bdf8' },
        'Pandas': { type: 'devicon', class: 'devicon-pandas-plain colored' },
        'NumPy': { type: 'devicon', class: 'devicon-numpy-plain colored' },
        'NLTK': { type: 'lucide', icon: 'message-square', color: '#84cc16' },
        'Flask': { type: 'devicon', class: 'devicon-flask-original colored' },
        'VS Code': { type: 'devicon', class: 'devicon-vscode-plain colored' },
        'Jupyter Notebook': { type: 'devicon', class: 'devicon-jupyter-plain colored' },
        'IntelliJ IDEA': { type: 'devicon', class: 'devicon-intellij-plain colored' },
        'Rstudio': { type: 'devicon', class: 'devicon-rstudio-plain colored' },

        // Data Processing
        'Feature Engineering': { type: 'lucide', icon: 'settings-2', color: '#64748b' },
        'PCA': { type: 'lucide', icon: 'minimize-2', color: '#a855f7' },
        'Data Cleaning': { type: 'lucide', icon: 'eraser', color: '#ef4444' },
        'Normalization': { type: 'lucide', icon: 'sliders', color: '#14b8a6' }
    };

    // Flattening removed - keeping categories
    const skillsHTML = content.skills.categories.map(cat => `
        <div class="skill-category-group" style="margin-bottom: 3rem;" data-aos="fade-up">
            <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; color: var(--secondary);">
                <i data-lucide="${cat.icon}"></i> ${cat.name}
            </h3>
            <div class="skills-container">
                ${cat.items.map(skill => {
        const mapping = iconMap[skill] || { type: 'lucide', icon: 'code-2', color: 'var(--primary)' };
        let iconElement;

        if (mapping.type === 'devicon') {
            iconElement = `<i class="${mapping.class}"></i>`;
        } else {
            iconElement = `<i data-lucide="${mapping.icon}" style="color: ${mapping.color}"></i>`;
        }

        return `
                        <div class="skill-card">
                            ${iconElement}
                            <span>${skill}</span>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `).join('');

    const skills = `
        <section id="skills" style="background:rgba(255,255,255,0.02)">
            <h2>Skills & Expertise</h2>
            <div style="max-width: 1200px; margin: 0 auto;">
                ${skillsHTML}
            </div>
        </section>
    `;

    // 5. Services
    const servicesHTML = content.services.map(s => `
        <div class="service-card" data-aos="flip-left">
            <div class="service-icon"><i data-lucide="${s.icon}"></i></div>
            <h3>${s.title}</h3>
            <p style="color:var(--text-gray); margin-top:0.5rem;">${s.description}</p>
        </div>
    `).join('');

    const services = `
        <section id="services">
            <h2>Services</h2>
            <div class="services-grid">
                ${servicesHTML}
            </div>
        </section>
    `;

    // 6. Projects
    const projectsHTML = content.projects.map(p => `
        <div class="project-card" data-aos="fade-up">
            <div class="project-content">
                <div class="project-tech">${p.tech}</div>
                <h3>${p.title}</h3>
                <p style="color:var(--text-gray); margin-top:0.5rem;">${p.description}</p>
            </div>
        </div>
    `).join('');

    const projects = `
        <section id="projects" style="background:rgba(255,255,255,0.02)">
            <h2>Featured Projects</h2>
            <div class="projects-grid">
                ${projectsHTML}
            </div>
        </section>
    `;

    // 7. Resume Section
    const resume = `
        <section id="resume">
            <div class="resume-section" data-aos="zoom-in">
                <h2>Resume</h2>
                <p style="max-width:600px; margin:0 auto 2rem; color:var(--text-gray);">
                    Interested in my complete professional journey? Check out my resume for details on my experience, research, and technical background.
                </p>
                <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
                    <a href="https://drive.google.com/file/d/1RF1rJlI6p6ovEJEcPzEfPaK5FqsBv_26/view?usp=drive_link" target="_blank" class="btn btn-primary">
                        <i data-lucide="eye"></i> View Resume
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=1RF1rJlI6p6ovEJEcPzEfPaK5FqsBv_26" class="btn btn-outline">
                         <i data-lucide="download"></i> Download
                    </a>
                    <a href="#contact" class="btn btn-outline">
                        <i data-lucide="user-check"></i> Hire Me
                    </a>
                </div>
            </div>
        </section>
    `;

    // 8. Contact
    const contact = `
        <section id="contact">
            <h2>Contact Me</h2>
            <div class="contact-container" style="align-items: flex-start;">
                <!-- Left: Contact Form -->
                <div class="contact-form-container" data-aos="fade-right">
                    <form 
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSft3rCnHQ1eJDzCAPJUtTn7od_41vDfaneZFx8pVZvrhBKrYw/formResponse" 
                        method="POST" 
                        target="hidden_iframe" 
                        onsubmit="submitted=true;"
                        class="contact-form"
                    >
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="entry.294867332" id="name" class="form-input" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="entry.1842503748" id="email" class="form-input" placeholder="your@email.com" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="entry.1134294271" id="message" class="form-input" placeholder="How can I help you?" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">
                            <i data-lucide="send"></i> Send Message
                        </button>
                    </form>
                    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(typeof submitted !== 'undefined' && submitted) { showThankYouModal(); }"></iframe>
                </div>

                <!-- Right: Contact Links -->
                <div class="contact-grid" data-aos="fade-left">
                    <a href="mailto:${content.contact.email}" class="contact-card">
                        <i data-lucide="mail" style="font-size:2rem; margin-bottom:1rem;"></i>
                        <h4>Email</h4>
                        <small>${content.contact.email}</small>
                    </a>
                    <a href="${content.contact.linkedin}" target="_blank" class="contact-card">
                        <i data-lucide="linkedin" style="font-size:2rem; margin-bottom:1rem;"></i>
                        <h4>LinkedIn</h4>
                        <small>Connect</small>
                    </a>
                    <a href="${content.contact.github}" target="_blank" class="contact-card">
                        <i data-lucide="github" style="font-size:2rem; margin-bottom:1rem;"></i>
                        <h4>GitHub</h4>
                        <small>Follow</small>
                    </a>
                    <a href="https://wa.me/${content.contact.whatsapp.replace('+', '')}" target="_blank" class="contact-card">
                        <i data-lucide="message-circle" style="font-size:2rem; margin-bottom:1rem;"></i>
                        <h4>WhatsApp</h4>
                        <small>Chat</small>
                    </a>
                </div>
            </div>
        </section>

        <!-- Thank You Modal -->
        <div id="thankYouModal" class="modal">
            <div class="modal-content">
                <span class="close-modal" onclick="closeModal()">&times;</span>
                <div class="modal-icon">
                    <i data-lucide="check" style="font-size: 2rem;"></i>
                </div>
                <h3 style="margin-bottom: 0.5rem;">Message Sent!</h3>
                <p style="color: var(--text-gray); margin-bottom: 1.5rem;">
                    Thanks for reaching out, ${content.hero.name.split(' ')[0]}! I'll get back to you as soon as possible.
                </p>
                <button class="btn btn-primary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;

    // 9. Footer
    const footer = `
        <footer>
            <p>&copy; 2026 Mubeena M P. All rights reserved.</p>
        </footer>
    `;

    // 10. Modal
    const modal = `
        <div id="thankYouModal" class="modal">
            <div class="modal-content">
                <i data-lucide="check-circle" style="width: 64px; height: 64px; color: var(--primary); margin-bottom: 1.5rem;"></i>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully. I will get back to you soon.</p>
                <button class="btn btn-primary" onclick="closeModal()" style="margin-top: 2rem;">Close</button>
            </div>
        </div>
    `;

    // Assemble
    app.innerHTML = nav + hero + about + skills + services + projects + resume + contact + footer + modal;

    // Re-run icons for dynamically added content
    lucide.createIcons();
}

// Global variables for form handling
let submitted = false;

function showThankYouModal() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
        modal.classList.add('show');
        // Reset form
        const form = document.querySelector('.contact-form');
        if (form) form.reset();
        submitted = false;

        // Re-initialize icons inside modal
        lucide.createIcons();
    } else {
        // Fallback alert if modal not found
        alert('Thank you! Your message has been sent successfully.');
    }
}

function closeModal() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('thankYouModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Run
document.addEventListener('DOMContentLoaded', () => {
    // Wait for content variable to be available
    render();
    AOS.init({
        duration: 800,
        once: true
    });
});
