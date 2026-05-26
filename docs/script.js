// Copy code to clipboard
function copyCode(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = '#3fb950';
        setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1500);
    });
}

// Animate stats counting on scroll
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    stats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = 'all 0.5s ease';
        observer.observe(stat);
    });

    // Trigger initial animation
    setTimeout(() => {
        document.querySelectorAll('.stat-number').forEach(s => {
            const rect = s.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                s.style.opacity = '1';
                s.style.transform = 'translateY(0)';
            }
        });
    }, 300);
});
