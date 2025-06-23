document.addEventListener("DOMContentLoaded", function () {
    // Original checkbox functionality for best practices
    const summaryTextEl = document.getElementById("summaryText");
    const rewardEl = document.getElementById("rewardMessage");
    const animalImageEl = document.getElementById("animalImage");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const requiredCount = 12;
    const totalCount = checkboxes.length;

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Load saved state from localStorage
    function loadSavedState() {
        let checkedCount = 0;
        checkboxes.forEach((checkbox, index) => {
            const savedState = localStorage.getItem(`checkbox${index}`);
            if (savedState === "true") {
                checkbox.checked = true;
                checkedCount++;
            }
        });
        updateSummary(checkedCount);
        checkReward(checkedCount);
    }

    // Listen for changes on each checkbox
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", function () {
            localStorage.setItem(`checkbox${index}`, checkbox.checked);
            updateCount();
        });
    });

    // Update the count and summary text
    function updateCount() {
        const count = document.querySelectorAll("input[type='checkbox']:checked").length;
        updateSummary(count);
        checkReward(count);
    }

    // Update Summary text element
    function updateSummary(count) {
        if (summaryTextEl) {
            summaryTextEl.innerHTML = `You've selected <span class="bold-numbers">${count}</span> out of <span class="bold-numbers">${totalCount}</span> best practices.`;
        }
    }

    // Check if reward condition is met
    function checkReward(count) {
        if (count >= requiredCount && rewardEl && animalImageEl) {
            fetchRandomAnimal();
            document.body.style.backgroundColor = "#78B061"; // Change background color when reward is achieved
            rewardEl.classList.remove("hidden"); // Show reward message
        } else if (rewardEl) {
            document.body.style.backgroundColor = "#DC8466"; // Default background color
            rewardEl.classList.add("hidden"); // Hide reward message
        }
    }

    // Fetch a random animal image
    function fetchRandomAnimal() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success" && animalImageEl) {
                    animalImageEl.src = data.message; // Set image source
                    animalImageEl.alt = "Cute dog"; // Set alt text
                    animalImageEl.classList.remove("hidden"); // Show the image
                } else {
                    console.error("API request failed"); // Log error if API request fails
                }
            })
            .catch(error => console.error("Failed to fetch dog image:", error)); // Log error for fetch failure
    }

    // Project filtering functionality
    function initProjectFilter() {
        if (filterButtons.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Add fade-in animation for project cards
    function addFadeAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize project filter
    initProjectFilter();
    addFadeAnimation();

    // Initialize saved state on page load
    loadSavedState();
});
