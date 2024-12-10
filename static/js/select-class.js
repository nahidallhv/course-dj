const startButtons = document.querySelectorAll('.start');
const selectClasses = document.querySelectorAll('.select-class');
const examCards = document.querySelectorAll('.exams');
const images = document.querySelectorAll('.img_div img'); 

startButtons.forEach((button, index) => {
    const selectClass = selectClasses[index]; 
    const examCard = examCards[index]; 
    const image = images[index]; 

    button.addEventListener('click', function(event) {

        if (selectClass.style.display === 'flex') {
            return;
        }

        selectClasses.forEach(sc => sc.style.display = 'none');

        images.forEach(img => img.style.opacity = '1');

        selectClass.style.display = 'flex';

        image.style.opacity = '0.2';
        
        event.stopPropagation();
    });

    examCard.addEventListener('mouseleave', function() {
        selectClass.style.display = 'none';
        image.style.opacity = '1';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.start') && !event.target.closest('.select-class')) {
        selectClasses.forEach(sc => sc.style.display = 'none');
        images.forEach(img => img.style.opacity = '1');
    }
});
