import re

# 1. Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

sidebar_css = """
/* LAYOUT BASE: SIDEBAR + MAIN */
.app-container {
    display: flex;
    min-height: 100vh;
}

/* SIDEBAR */
.sidebar {
    width: 280px;
    background: #0f172a;
    color: #fff;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    z-index: 100;
    box-shadow: 4px 0 15px rgba(0,0,0,0.1);
}

.sidebar-header {
    padding: 2rem 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.sidebar-header .icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.sidebar-header h2 {
    color: #fff;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
}

.sidebar-header p {
    color: #94a3b8;
    font-size: 0.85rem;
    margin: 0.5rem 0 0;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    gap: 0.5rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s;
    font-size: 0.95rem;
}

.nav-link:hover {
    background: rgba(255,255,255,0.05);
    color: #fff;
}

.nav-link.active {
    background: var(--primary);
    color: #fff;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(79, 70, 229, 0.4);
}

/* MAIN WRAPPER */
.main-wrapper {
    flex: 1;
    margin-left: 280px;
    background: var(--bg-main);
    min-height: 100vh;
}

/* Hero Compact inside Main */
.hero.compact {
    padding: 3rem 2rem;
    text-align: left;
    border-radius: 0 0 24px 24px;
    margin-bottom: 2rem;
}

.hero.compact h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
}

.hero.compact .subtitle {
    font-size: 1.1rem;
}

.hero.compact::before {
    display: none;
}

/* Content Sections */
.content-section {
    animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    .app-container {
        flex-direction: column;
    }
    .sidebar {
        width: 100%;
        position: relative;
        height: auto;
    }
    .main-wrapper {
        margin-left: 0;
    }
    .hero.compact {
        border-radius: 0;
    }
}
"""
css += "\n" + sidebar_css

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# 2. Update script.js to add navigation logic
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

nav_logic = """
    // Navigation logic
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and hide all sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.style.display = 'none');
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show target section
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.style.display = 'block';
                // Trigger window resize so Chart.js recalculates dimensions if needed
                window.dispatchEvent(new Event('resize'));
            }
            
            // Scroll to top
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    });
"""

# Insert nav logic inside DOMContentLoaded
js = js.replace('document.addEventListener(\'DOMContentLoaded\', () => {', 'document.addEventListener(\'DOMContentLoaded\', () => {\n' + nav_logic)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("CSS and JS updated for sidebar navigation!")
