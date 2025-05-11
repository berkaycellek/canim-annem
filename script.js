document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const flap = document.querySelector('.envelope-flap');
    let isOpen = false;

    envelope.addEventListener('click', () => {
        if (!isOpen) {
            envelope.style.transform = 'rotateX(180deg)';
            flap.style.transform = 'rotateX(180deg)';
            setTimeout(() => {
                letter.style.transform = 'translateZ(0)';
            }, 500);
            isOpen = true;
        } else {
            envelope.style.transform = 'rotateX(0)';
            flap.style.transform = 'rotateX(0)';
            letter.style.transform = 'translateZ(-1px)';
            isOpen = false;
        }
    });
}); 