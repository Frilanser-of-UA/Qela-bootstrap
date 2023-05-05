
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