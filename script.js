// Profile Image Handler with Light Effect
const profileImage = document.getElementById('profile-image');
const profilePlaceholder = document.getElementById('profile-placeholder');

profileImage.onload = function() {
    profilePlaceholder.style.display = 'none';
    profileImage.style.display = 'block';
};

profileImage.onerror = function() {
    // Keep placeholder if image fails to load
    profilePlaceholder.style.display = 'flex';
    profileImage.style.display = 'none';
};

// Try to load the image
profileImage.src = 'profile.jpg';

// Enhanced Light Ring Animation with Mouse Movement
const lightRing = document.querySelector('.light-ring');
const profileContainer = document.querySelector('.profile-photo-container');

profileContainer.addEventListener('mousemove', (e) => {
    const rect = profileContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleX = (y - centerY) / 10;
    const angleY = (centerX - x) / 10;
    
    lightRing.style.transform = `translate(-50%, -50%) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

profileContainer.addEventListener('mouseleave', () => {
    lightRing.style.transform = 'translate(-50%, -50%) rotateX(0) rotateY(0)';
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* Certificate Details Data
const certDetails = {
    publication: {
        title: "Research Publication",
        details: `
            <h2 style="color: var(--highlight); margin-bottom: 1rem;">Research Publication Details</h2>
            <p style="color: var(--muted); margin-bottom: 2rem;">Click below to add your publication details:</p>
            <div style="background: rgba(233, 69, 96, 0.1); padding: 2rem; border-radius: 10px; margin-bottom: 1rem;">
                <h3 style="color: var(--highlight); margin-bottom: 1rem;">Paper Title</h3>
                <p style="color: var(--text); margin-bottom: 1rem;">Add your paper title here</p>
                
                <h3 style="color: var(--highlight); margin-bottom: 1rem;">Authors</h3>
                <p style="color: var(--text); margin-bottom: 1rem;">List of authors</p>
                
                <h3 style="color: var(--highlight); margin-bottom: 1rem;">Abstract</h3>
                <p style="color: var(--text); margin-bottom: 1rem;">Brief abstract of your research</p>
                
                <h3 style="color: var(--highlight); margin-bottom: 1rem;">Publication Details</h3>
                <p style="color: var(--text);">Journal/Conference name, volume, issue, pages, year</p>
            </div>
        `
    },
    oasis: {
        title: "Web Development & Design Certificate",
        details: `
            <h2 style="color: var(--highlight); margin-bottom: 1rem;">Oasis Infobyte Certification</h2>
            <p style="color: var(--muted); margin-bottom: 1rem;">October - November 2023</p>
            <h3 style="color: var(--highlight); margin-bottom: 1rem;">Skills Acquired:</h3>
            <ul style="color: var(--text); line-height: 2; margin-bottom: 2rem;">
                <li>HTML5 & CSS3 fundamentals and advanced techniques</li>
                <li>JavaScript programming and DOM manipulation</li>
                <li>Responsive web design principles</li>
                <li>Building interactive web applications</li>
                <li>Local storage and data persistence</li>
            </ul>
            <h3 style="color: var(--highlight); margin-bottom: 1rem;">Projects Completed:</h3>
            <ul style="color: var(--text); line-height: 2;">
                <li>Calculator Application</li>
                <li>Tribute Page</li>
                <li>To-Do Application with Local Storage</li>
            </ul>
        `
    },
    bharat: {
        title: "Web Development Certificate",
        details: `
            <h2 style="color: var(--highlight); margin-bottom: 1rem;">Bharat Internships Certification</h2>
            <p style="color: var(--muted); margin-bottom: 1rem;">July - August 2023</p>
            <h3 style="color: var(--highlight); margin-bottom: 1rem;">Skills Acquired:</h3>
            <ul style="color: var(--text); line-height: 2; margin-bottom: 2rem;">
                <li>Modern web development practices</li>
                <li>CSS Grid and Flexbox layouts</li>
                <li>Performance optimization techniques</li>
                <li>Cross-browser compatibility testing</li>
                <li>Code minification and optimization</li>
            </ul>
            <h3 style="color: var(--highlight); margin-bottom: 1rem;">Projects Completed:</h3>
            <ul style="color: var(--text); line-height: 2;">
                <li>Temperature Converter Application</li>
                <li>Netflix Homepage Clone</li>
            </ul>
        `
    },
    bca: {
        title: "Bachelor of Computer Applications",
        details: `
            <h2 style="color: var(--highlight); margin-bottom: 1rem;">BCA Degree - Outstanding Grade</h2>
            <p style="color: var(--muted); margin-bottom: 1rem;">Progressive Education Society's Modern College, Pune</p>
            <p style="color: var(--muted); margin-bottom: 2rem;">August 2021 - April 2024</p>
            <h3 style="color: var(--highlight); margin-bottom: 1rem;">Key Subjects:</h3>
            <ul style="color: var(--text); line-height: 2; margin-bottom: 2rem;">
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
                <li>Object-Oriented Programming</li>
                <li>Web Technologies</li>
                <li>Software Engineering</li>
                <li>Computer Networks</li>
            </ul>
            <h3 style="color: var(--highlight); margin-bottom: 1rem;">Achievement:</h3>
            <p style="color: var(--text); line-height: 2;">
                Graduated with Outstanding (O) Grade, demonstrating exceptional performance 
                in academic coursework and practical projects.
            </p>
        `
    }
};

// Certificate Modal
const modal = document.getElementById('cert-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', function() {
        const certType = this.getAttribute('data-cert');
        if (certDetails[certType]) {
            modalBody.innerHTML = certDetails[certType].details;
            modal.classList.add('active');
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});*/


/* ===============================
   CERTIFICATE MODAL LOGIC
================================ */
const modal = document.getElementById("cert-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

const certDetails = {
    sspu: {
        content: `
            <h2>Full Stack Java</h2>
            <p>Symbiosis Skills & Professional University (SSPU)</p>
            <p>Jan 2024 – May 2024</p>
            <ul>
                <li>Java, JDBC, JSP, Servlets</li>
                <li>HTML, CSS, Bootstrap</li>
                <li>MySQL Database</li>
            </ul>
        `
    },
    aicte: {
        content: `
            <h2>Front End Development</h2>
            <p>AICTE – Edunet Foundation (IBM SkillsBuild)</p>
            <p>June 2023 – July 2023</p>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Responsive Web Design</li>
                <li>Real-world projects</li>
            </ul>
        `
    },
    oasis: {
        content: `
            <h2>Web Development & Designing</h2>
            <p>Oasis Infobyte</p>
            <p>July 2023</p>
            <ul>
                <li>Calculator App</li>
                <li>To-Do App</li>
                <li>Tribute Page</li>
            </ul>
        `
    }
};

document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", function (e) {
        if (e.target.tagName === "A") return;

        const type = this.getAttribute("data-cert");
        if (certDetails[type]) {
            modalBody.innerHTML = certDetails[type].content;
            modal.classList.add("active");
        }
    });
});

modalClose?.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal?.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.classList.remove("active");
});

// Skill tags interactive effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Project cards parallax effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});




// Add keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});
