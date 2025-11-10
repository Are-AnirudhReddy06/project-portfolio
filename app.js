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
const whatsappBtn = document.getElementById('whatsappBtn');

whatsappBtn.addEventListener('click', () => {
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields before sending!");
        return;
    }

    const whatsappNumber = "916301775024"; // Your number without '+'
    const text = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});
