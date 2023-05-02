
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
		} else if (!targetElement.closest('#gela-nav') && document.querySelector('.qela-menu.active')) {
			document.querySelector('.qela-menu').classList.remove('active');
			document.querySelector('.qela-btn-menu').classList.remove('active');
		}
		//== випадашки search
		if (targetElement.classList.contains('qela-search-btn')) {
			if (document.querySelector('.qela-search-btn')) {
				document.querySelector('.qela-search__wrapper').classList.toggle('qela--visible');
			}
		} else if (!targetElement.closest('.qela-search__wrapper') && document.querySelector('.qela-search__wrapper.qela--visible')) {
			document.querySelector('.qela-search__wrapper').classList.remove('qela--visible');
		}
	}
}
// // Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.qela-dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown-btn');
	const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown-item');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('visible');
		this.classList.toggle('active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			if (this.classList.contains('not-visible')) {
				this.classList.remove('not-visible');
			} else {
				const activeLink = dropDownList.querySelector('.dropdown-item.not-visible');
				if (activeLink) {
					activeLink.classList.remove('not-visible');
				}
				this.classList.add('not-visible');
			}
			dropDownBtn.focus();
			dropDownList.classList.remove('visible');
			dropDownBtn.classList.remove('active');
			if (e.target.classList.contains('label')) {
				dropDownBtn.classList.remove('selected');
			} else {
				dropDownBtn.classList.add('selected');

			}
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('visible');
		}
	});
});
// ============================================

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))