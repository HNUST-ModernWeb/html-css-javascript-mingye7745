const avatarInput = document.getElementById('avatar-input');
const avatar = document.getElementById('avatar');
const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const displayName = document.getElementById('display-name');
const displayBio = document.getElementById('display-bio');
const saveBtn = document.getElementById('saveBtn');
const themeBtn = document.getElementById('themeBtn');

avatarInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            avatar.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

saveBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const bio = bioInput.value.trim();
    
    if (name) {
        displayName.textContent = name;
    }
    if (bio) {
        displayBio.textContent = bio;
    }
    
    saveBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        saveBtn.style.transform = 'scale(1)';
    }, 100);
});

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        themeBtn.innerHTML = '☀️ 切换主题';
    } else {
        themeBtn.innerHTML = '🌙 切换主题';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        themeBtn.innerHTML = '☀️ 切换主题';
    }
}

themeBtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', loadTheme);