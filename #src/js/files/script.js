let moreInfo = document.querySelectorAll('.js-more-info');

moreInfo.forEach(function (item) {
	item.addEventListener('click', function () {
		let article = this.closest('.article');
		let block = this.closest('.block');
		let info = article.querySelector('.more-info');
		this.classList.toggle('active');
		info.classList.toggle('active');
		block.classList.toggle('active');
		if (item.classList.contains('active')) {
			item.textContent = 'Hide info';
		}
		else {
			item.textContent = 'More info';
		}
	})
	if (item.classList.contains('active')) {
		item.textContent = 'Hide info';
	}
	else {
		item.textContent = 'More info';
	}
})

// =========================================================
let payBlock = document.querySelectorAll('.block__pay--inner');
payBlock.forEach(function (item) {
	let article = item.closest('.article');
	let block = item.closest('.block');
	let info = article.querySelector('.more-info');
	let moreInfo = item.querySelector('.js-more-info__wrapper');
	let row = info.querySelector('.more-info__row');
	console.log(info)
	if (document.documentElement.clientWidth <= 450) {
		info.insertBefore(item, row);
		block.appendChild(moreInfo);
	}
})




