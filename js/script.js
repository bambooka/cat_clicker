
var cats = [

{name: 'Bob', img: './img/cat_flower.jpg'},
{name: 'Marcel', img: './img/cat_roof.jpg'},
{name: 'Puma', img: './img/cat_boquet.jpg'},
{name: 'Sam', img: './img/cat_frog.jpg'},
{name: 'Vasy', img: './img/cat_dreams.jpg'},
];


cats.forEach(function(cat){
	let count = 0;
	console.log(cat);
	let containerCat = document.createElement('div');
	let catName = document.createElement('p');
	let catImg = document.createElement('img');
	let counter = document.createElement('p');
	containerCat.ClassName = 'containerCat';
	catName.innerHTML = cat.name; 
	catImg.setAttribute('src', cat.img);
	catImg.style.width = '200px';	

	containerCat.appendChild(catName);
	containerCat.appendChild(catImg);
	containerCat.appendChild(counter);
	document.body.appendChild(containerCat);

	containerCat.addEventListener('click', function() {
		count++;
		counter.innerHTML = count;

	}, false)
	
}
)

