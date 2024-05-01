const panels = document.querySelectorAll('.player-panel');
panels.forEach(panel => {
    panel.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.11)';
        this.style.transform = 'scale(1.01)';
        this.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.2)';
    });

    panel.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#rgba(255, 255, 255, 0.11)';
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});