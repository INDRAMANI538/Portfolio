const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
    sidebarToggle.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarToggle.classList.remove('hidden');
});
