const btnMenu = document.querySelector('.qela-btn-menu');
const menuAside = document.querySelector('.qela-menu');
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
// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
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
// input search
const inputSearchWrap = document.querySelectorAll('.qela-search');
if (inputSearchWrap) {
    for (let i = 0; i < inputSearchWrap.length; i++) {
        const inputSearch = inputSearchWrap[i].querySelector('.form-control');
        const inputButton = inputSearchWrap[i].querySelector('.ic-cloze');
        console.log(inputButton);
        inputSearch.addEventListener('input', function () {
            if (inputSearch.value != '') inputSearchWrap[i].classList.add('active');
            else inputSearchWrap[i].classList.remove('active');
        })
        inputButton.addEventListener('click', function () {
            inputSearch.value = '';
            inputSearchWrap[i].classList.remove('active');
        })
    }
}
// input search
// read more text
let coll = document.querySelectorAll('[data-qela-target]')
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        let self = event.currentTarget;
        let valueAtribute = self.getAttribute('data-qela-target');
        let content = document.querySelector(`.qela-description[id="${valueAtribute}"]`);
        content.classList.toggle('active');
        this.classList.toggle('active');
        if (content.style.height) {
            content.style.height = null
            this.textContent = 'Read more';
        } else {
            content.style.height = content.scrollHeight + 'px';
            this.textContent = 'Cloze';
        }
    })
}
// read more text