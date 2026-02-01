// 1. Navbar Scroll Effect
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// 2. Tab Logic (Jadwal)
function openDay(evt, dayName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 3. Lightbox Logic
function openLightbox(element) {
    var lightbox = document.getElementById('lightbox');
    var imgSrc = element.querySelector('img').src;
    document.getElementById('lightbox-img').src = imgSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// 4. Modal Login Logic
function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleLogin(e) {
    e.preventDefault();
    alert("Login Berhasil! Selamat Datang Siswa VIIIE.");
    closeLogin();
}

// Close modal when clicking outside
window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var lightbox = document.getElementById('lightbox');
    if (event.target == lightbox) {
        lightbox.style.display = "none";
    }
}

// Initialize
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-btn").click();
});