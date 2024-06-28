// menu
window.onload = function () {
	document.addEventListener("click", documentActions);
	// Actions ( делегирование собитий click)
	function documentActions(e) {
		const targetElement = e.target;
		// ====== Меню
		if (targetElement.classList.contains('qela-btn-menu') || targetElement.classList.contains('qela-burger')) {
			if (document.querySelector('.qela-btn-menu') || document.querySelector('.qela-burger')) {
				document.querySelector('.qela-menu').classList.toggle('active');
				document.querySelector('.qela-btn-menu').classList.toggle('active');
			}
		} else if (!targetElement.closest('.qela-nav') && document.querySelector('.qela-menu.active') || targetElement.classList.contains('qela-btn-close')) {
			document.querySelector('.qela-menu').classList.remove('active');
			document.querySelector('.qela-btn-menu').classList.remove('active');
		}
		//== випадашки search
		if (targetElement.classList.contains('qela-search-btn')) {
			if (document.querySelector('.qela-search-btn')) {
				document.querySelector('.qela-search__wrapper').classList.toggle('active');
			}
		} else if (!targetElement.closest('.qela-search__wrapper') && document.querySelector('.qela-search__wrapper.active')) {
			document.querySelector('.qela-search__wrapper').classList.remove('active');
		}
	}
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
// read more text
let coll = document.querySelectorAll('[data-ql-target]')
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		let self = event.currentTarget;
		let valueAtribute = self.getAttribute('data-ql-target');
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
// quest items show content right
let quest = document.querySelectorAll('[data-quest]');
quest.forEach(function (link, index) {
	link.addEventListener('click', function () {
		let self = event.currentTarget;
		let valueAtribute = self.getAttribute('data-quest');
		let content = document.querySelector(`.qela-content[id="${valueAtribute}"]`);
		if (this.classList.contains('qela-quest.active')) {
			this.classList.remove('active');
		} else {
			const activeItem = document.querySelector('.qela-quest.active');
			const activeContent = document.querySelectorAll('.qela-content.active');
			activeContent.forEach(function (e) {
				e.classList.remove('active');
			});
			if (activeItem) {
				activeItem.classList.remove('active');
			}
			this.classList.add('active');
			content.classList.add('active');
		}
	});
});
// quest items show content right
// let itemList = document.querySelectorAll('.qela-extended .list-group-item');

// itemList.forEach(function (link, index) {
//     link.addEventListener('click', function () {
//         const activeLink = document.querySelector('.qela-extended .list-group-item.current');
//         if (activeLink) {
//             activeLink.classList.remove('current');
//         }
//         this.classList.add('current');
//     });
// });
