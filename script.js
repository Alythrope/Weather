const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

function searchInfo() {
	
	fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fb7c09f4e782884e57c1c16e762f3fbb')
	.then(response => response.json())
	.then(data => {
	console.log(data);
	const nameValue = data['name'];
	const tempValue = data['main']['temp'];
	const descValue = data['weather'][0]['description'];

	name.innerHTML = nameValue;
	temp.innerHTML = `${tempValue -273.15} &#8451`;
	desc.innerHTML = descValue;
	})

	

.catch(err => alert('Wrong city name!'))
}
button.addEventListener('click', searchInfo)

