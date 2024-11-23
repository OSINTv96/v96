// Encapsulating code for maintainability
(() => {
    // Image Rotation Logic
    const images = [document.getElementById('image1'), document.getElementById('image2')];
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }, 5000);

    // Secret Code Logic
    let sequence = [];
    const secretCode = ['KeyV', 'Digit9', 'Digit6'];

    document.addEventListener('keydown', (e) => {
        sequence.push(e.code);
        if (sequence.length > secretCode.length) {
            sequence.shift();
        }
        if (sequence.join('') === secretCode.join('')) {
            alert('Hold on, wtf?');
            sequence = [];
        }
    });
})();
