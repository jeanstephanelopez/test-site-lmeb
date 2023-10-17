// Resize video background on window resize
window.addEventListener('resize', resizeVideo);

function resizeVideo() {
    const video = document.getElementById('video-bg');
    const overlay = document.querySelector('.overlay');

    video.style.minHeight = window.innerHeight + 'px';
    overlay.style.minHeight = window.innerHeight + 'px';
}

// Initial resize
resizeVideo();

// Add this script to your home.js file
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    document.querySelector("#video-bg").style.transform = `translateY(-${offset * 0.5}px)`;
});

