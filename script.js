// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive weekly MLB stats updates.`);
            this.reset();
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // FAQ Category Filter
    const categoryBtns = document.querySelectorAll('.faq-category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter FAQ items
            faqItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                    item.classList.remove('active');
                }
            });
        });
    });

    // Player Search Functionality
    const playerSearch = document.getElementById('player-search');
    if (playerSearch) {
        playerSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('#batting-table tbody tr');
            
            tableRows.forEach(row => {
                const playerName = row.cells[1].textContent.toLowerCase();
                const team = row.cells[2].textContent.toLowerCase();
                
                if (playerName.includes(searchTerm) || team.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Filter Controls
    const applyFiltersBtn = document.getElementById('apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const category = document.getElementById('stat-category').value;
            const season = document.getElementById('season-select').value;
            const team = document.getElementById('team-select').value;
            
            // Show loading indicator
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;
            
            // Simulate data fetch
            setTimeout(() => {
                alert(`Filters Applied:\nCategory: ${category}\nSeason: ${season}\nTeam: ${team === 'all' ? 'All Teams' : team}`);
                this.textContent = originalText;
                this.disabled = false;
            }, 500);
        });
    }

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Scroll Indicator Animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Charts - Home Runs by Team
    const homeRunsChart = document.getElementById('homeRunsChart');
    if (homeRunsChart) {
        new Chart(homeRunsChart, {
            type: 'bar',
            data: {
                labels: ['Yankees', 'Dodgers', 'Astros', 'Braves', 'Phillies', 'Rangers'],
                datasets: [{
                    label: 'Home Runs',
                    data: [245, 238, 230, 227, 215, 210],
                    backgroundColor: [
                        'rgba(0, 51, 135, 0.8)',
                        'rgba(0, 90, 156, 0.8)',
                        'rgba(235, 110, 31, 0.8)',
                        'rgba(206, 17, 65, 0.8)',
                        'rgba(232, 24, 40, 0.8)',
                        'rgba(0, 50, 120, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 51, 135, 1)',
                        'rgba(0, 90, 156, 1)',
                        'rgba(235, 110, 31, 1)',
                        'rgba(206, 17, 65, 1)',
                        'rgba(232, 24, 40, 1)',
                        'rgba(0, 50, 120, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Total Home Runs'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Team'
                        }
                    }
                }
            }
        });
    }

    // Charts - Batting Average Distribution
    const avgChart = document.getElementById('avgChart');
    if (avgChart) {
        new Chart(avgChart, {
            type: 'line',
            data: {
                labels: ['April', 'May', 'June', 'July', 'August', 'September'],
                datasets: [
                    {
                        label: 'Mike Trout',
                        data: [.298, .312, .318, .325, .328, .324],
                        borderColor: 'rgba(213, 0, 50, 1)',
                        backgroundColor: 'rgba(213, 0, 50, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Aaron Judge',
                        data: [.285, .295, .305, .308, .315, .311],
                        borderColor: 'rgba(0, 51, 135, 1)',
                        backgroundColor: 'rgba(0, 51, 135, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'League Average',
                        data: [.245, .248, .250, .252, .251, .249],
                        borderColor: 'rgba(108, 117, 125, 1)',
                        backgroundColor: 'rgba(108, 117, 125, 0.1)',
                        borderDash: [5, 5],
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 0.200,
                        max: 0.350,
                        title: {
                            display: true,
                            text: 'Batting Average'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(3);
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Month'
                        }
                    }
                }
            }
        });
    }

    // Table Sorting Functionality
    const table = document.querySelector('.stats-table');
    if (table) {
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            // Skip the first column (Rank)
            if (index === 0) return;
            
            header.style.cursor = 'pointer';
            header.title = 'Click to sort';
            
            header.addEventListener('click', function() {
                sortTable(table, index);
            });
        });
    }

    function sortTable(table, column) {
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        // Determine sort direction
        const currentDirection = table.dataset.sortDirection || 'asc';
        const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
        table.dataset.sortDirection = newDirection;
        
        // Sort rows
        rows.sort((a, b) => {
            let aValue = a.cells[column].textContent.trim();
            let bValue = b.cells[column].textContent.trim();
            
            // Convert to numbers if possible
            const aNum = parseFloat(aValue);
            const bNum = parseFloat(bValue);
            
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return newDirection === 'asc' ? aNum - bNum : bNum - aNum;
            } else {
                return newDirection === 'asc' 
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }
        });
        
        // Re-append rows
        rows.forEach(row => tbody.appendChild(row));
        
        // Update rank numbers
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1;
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .stat-card, .leader-card, .advanced-stat-card, .gallery-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add active state to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Additional Interactive Features

// Highlight table row on hover
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.stats-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e7f3ff';
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Add click to copy functionality for stats
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        stat.style.cursor = 'pointer';
        stat.title = 'Click to copy';
        
        stat.addEventListener('click', function() {
            const value = this.textContent;
            navigator.clipboard.writeText(value).then(() => {
                // Show temporary tooltip
                const originalColor = this.style.color;
                this.style.color = '#28a745';
                setTimeout(() => {
                    this.style.color = originalColor;
                }, 500);
            });
        });
    });

    // Video lazy loading
    const videos = document.querySelectorAll('iframe');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    videoObserver.unobserve(iframe);
                }
            }
        });
    });

    videos.forEach(video => {
        videoObserver.observe(video);
    });

    // Back to top button
    const backToTopButton = createBackToTopButton();
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});

function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #0051BA, #D50032);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    `;

    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    return button;
}

// Print statistics function
function printStats() {
    window.print();
}

// Export to CSV functionality (placeholder)
function exportToCSV() {
    alert('Export functionality coming soon! You can currently copy data from the tables.');
}
