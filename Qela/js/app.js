const btnMenu = document.querySelector('.qela-btn-menu');
const menuAside = document.querySelector('.qela-menu');
const sidebarTooltips = document.querySelectorAll('[data-bs-custom-class="qela-sidebar-tooltip"],[data-bs-custom-class="qela-sidebar-tooltip settings"]');
// open/close menu
if (menuAside) {
    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('close');
        menuAside.classList.toggle('close');
        // document.body.classList.toggle('active');
    });
    const observer = new ResizeObserver(entrirs => {
        const elem = entrirs[0];
        let widthAside = elem.borderBoxSize[0].inlineSize;
        document.body.style.paddingLeft = widthAside + 'px';
    })
    observer.observe(menuAside);
}
// hide tooltips when menu open
for (let i = 0; i < sidebarTooltips.length; i++) {
    sidebarTooltips[i].addEventListener('show.bs.tooltip', event => {
        if (!menuAside.classList.contains('close') && window.innerWidth > 1440) return event.preventDefault();
        else if (menuAside.classList.contains('close') && window.innerWidth < 1440) return event.preventDefault();
    })
}
// tooltip
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// toast
// const toastElList = document.querySelectorAll('.toast');
// const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}