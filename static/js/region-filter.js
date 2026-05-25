// Region filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.region-filter');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedRegion = this.getAttribute('data-region');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            courseCards.forEach(card => {
                if (selectedRegion === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const cardRegion = card.getAttribute('data-region');
                    if (cardRegion === selectedRegion) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});
