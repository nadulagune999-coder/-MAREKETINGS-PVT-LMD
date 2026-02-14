// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if(btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('glass-nav', 'bg-darker/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-darker/95', 'glass-nav');
    }
});

// Visitor Count Simulation
document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('visit-count');
    const mobileCountElement = document.getElementById('mobile-visit-count');
    
    // Check if usage exists
    let visits = localStorage.getItem('n2_visits');
    
    if (!visits) {
        // Start with a 'supiri' base number so it doesn't look empty
        visits = 1250;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    // Save new count
    localStorage.setItem('n2_visits', visits);
    
    // Animate the count up
    if(countElement) animateValue(countElement, visits - 50, visits, 2000);
    if(mobileCountElement) mobileCountElement.innerText = formatNumber(visits);
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.innerHTML = formatNumber(value);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
