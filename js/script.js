
var cats = [

{name: 'Bob', img: './img/cat_flower.jpg', click: 0},
{name: 'Marcel', img: './img/cat_roof.jpg', click: 0},
{name: 'Puma', img: './img/cat_boquet.jpg', click: 0},
{name: 'Sam', img: './img/cat_frog.jpg', click: 0},
{name: 'Vasy', img: './img/cat_dreams.jpg', click: 0},
];


cats.forEach(function(cat){
	console.log(cat);
	let containerCat = document.createElement('div');
	let catName = document.createElement('p');
	let catImg = document.createElement('img');
	let counter = document.createElement('p');
	counter.innerHTML = cat.click;
	containerCat.ClassName = 'containerCat';
	catName.innerHTML = cat.name; 
	catImg.setAttribute('src', cat.img);
	catImg.style.width = '200px';	

	containerCat.appendChild(catName);
	containerCat.appendChild(catImg);
	containerCat.appendChild(counter);
	document.body.appendChild(containerCat);

	containerCat.addEventListener('click', function() {
		cat.click++;
		counter.innerHTML = cat.click;

	}, false)
	
}
)

