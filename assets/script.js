document.getElementById('togglePortfolio').addEventListener('click', function() {
    var portfolioSection = document.getElementById('portfolio');
    if (portfolioSection.style.display === 'none') {
        portfolioSection.style.display = 'block'
    } else {
        portfolioSection.style.display = 'none'
    }
})
