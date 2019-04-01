
var listCat = document.querySelectorAll('catsList');
var cats = [

{name: 'Bob', img: './img/cat_flower.jpg'},
{name: 'Marcel', img: './img/cat_roof.jpg'},
{name: 'Puma', img: './img/cat_boquet.jpg'},
{name: 'Sam', img: './img/cat_frog.jpg'},
{name: 'Vasy', img: './img/cat_dreams.jpg'},
];





console.log(cats);
console.log(listCat);

cats.forEach(function(cat){
	console.log(cat);
	let containerCat = document.createElement('div');
	let catName = document.createElement('p');
	catName.innerHTML = cat.name; 
	let catImg = document.createElement('img');
	catImg.setAttribute('src', cat.img);
	catImg.style.width = '200px';	

	containerCat.appendChild(catName);
	containerCat.appendChild(catImg);
	document.body.appendChild(containerCat);
	
}
)
