var thumbUp = document.getElementsByClassName('status');

var trash = document.getElementsByClassName('fa-trash-alt');

// Array.from(thumbUp).forEach(el => console.log(el.value));

Array.from(thumbUp).forEach(function (element) {
	if (element.value === 'complete') {
		element.checked = true;
		console.log(element.parentNode.childNodes[3]);
		element.parentNode.childNodes[3].classList.add('completed');
	}
	element.addEventListener('click', function () {
		const todoItem = this.parentNode.childNodes[3];
		const todo = this.parentNode.childNodes[3].innerText;
		const status = this.parentNode.childNodes[1];
		console.log(todo);
		if (status.value === 'incomplete') {
			console.log('changing to complete');
			fetch('upVote', {
				method: 'put',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					todo: todo,
					status: status.value,
				}),
			})
				.then(response => {
					if (response.ok) return response.json();
				})
				.then(data => {
					todoItem.classList.add('completed');
					console.log(status.value);
					window.location.reload();
				});
			return;
		} else {
			console.log('changing to incomplete');
			// console.log()
			fetch('downVote', {
				method: 'put',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					todo: todo,
					status: status.value,
				}),
			})
				.then(response => {
					if (response.ok) return response.json();
				})
				.then(data => {
					todoItem.classList.remove('completed');
					window.location.reload();
					console.log(status.value);
					console.log(data);
				});
			return;
		}
	});
});

Array.from(trash).forEach(function (element) {
	element.addEventListener('click', function () {
		const todo = this.parentNode;
		console.log(element.value);
		console.log('hi');

		fetch('delete', {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: element.value,
			}),
		}).then(function (response) {
			window.location.reload();
		});
	});
});

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			console.log(panel.scrollHeight);
			panel.style.height = 'fit-content';
		}
	});
}
