// 🎬 Video hover play/pause
const videos = document.querySelectorAll('.skills-vidbox video');

videos.forEach(video => {
  const hoverSign = video.parentElement.querySelector('.hover-sign');
  
  video.addEventListener('mouseenter', () => {
    video.play();
    if (hoverSign) hoverSign.classList.add('active');
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    if (hoverSign) hoverSign.classList.remove('active');
  });
});

// 📱 Sidebar toggle
const sideBar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  sideBar.classList.add('open-sidebar');
  sideBar.classList.remove('close-sidebar');
});

closeIcon.addEventListener('click', () => {
  sideBar.classList.remove('open-sidebar');
  sideBar.classList.add('close-sidebar');
});

// 💬 WhatsApp message
 const inputs = document.querySelectorAll('.contact-box input, .contact-box textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#25D366'; // Change border color on focus
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = '#ccc'; // Revert border color on blur
        });
    });