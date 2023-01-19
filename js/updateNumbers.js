window.addEventListener('DOMContentLoaded', () => {
	const numberFields = document.querySelectorAll('.count');
	const plusOne = (numberFields) => {
		Array.from(numberFields).forEach((element) => (element.textContent = +element.textContent + 1));
	};

	setInterval(plusOne, 2000, numberFields);
});
