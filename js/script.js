
var cat1 = document.getElementById('cat1');
var cat2 = document.getElementById('cat2');
var counter = document.getElementById('counter');
var clicks = 0;
var imgCatRoof = document.createElement('img');
var imgCatFlower = document.createElement('img');

var cats = [

{name: 'Bob', img: 'cat_flower.jpg'},
{name: 'Marcel', img: 'cat_roof.jpg'},
{name: 'Puma', img: 'cat_boquet.jpg'},
{name: 'Sam', img: 'cat_frog.jpgg'},
{name: 'Vasy', img: 'cat_dreams.jpg'},
];

var catFlowerName = document.createElement('p');
catFlowerName.innerHTML = 'Homa';
var catRoofName = document.createElement('p');
catRoofName.innerHTML = 'Moma';

imgCatFlower.setAttribute("src", 'cat_flower.jpg');
imgCatRoof.setAttribute("src", 'cat_roof.jpg');

cat1.appendChild(catFlowerName);
cat1.appendChild(imgCatFlower);

cat2.appendChild(catRoofName);
cat2.appendChild(imgCatRoof);



var increase = function(){
	clicks++;
	counter.innerHTML = clicks;
}

cat1.addEventListener('click', increase, false);
cat2.addEventListener('click', increase, false);
