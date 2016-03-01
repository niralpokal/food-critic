
var restuarant1 = {
  name: 'Taco Taco!',
  type: 'Mexican',
  numberOfReviews: 34,
  stars: 4.5
};

var restuarant2 = {
  name: 'Pizza Unlimited',
  type: 'Pizza',
  numberOfReviews: 14,
  stars: 3
};

var restuarant3 = {
  name: 'Urban Plates',
  type: 'American',
  numberOfReviews: 198,
  stars: 4
};

var restuarant4 = {
  name: 'Burger!',
  type: 'American',
  numberOfReviews: 56,
  stars: 3.5
};

var restuarant5 = {
  name: 'Pizza Cafe',
  type: 'Pizza',
  numberOfReviews: 74,
  stars: 4
};

var restuarant6 = {
  name: 'Aioli',
  type: 'American',
  numberOfReviews: 201,
  stars: 5
};

var restuarant7 = {
  name: 'Mod Pizza',
  type: 'Pizza',
  numberOfReviews: 93,
  stars: 4.5
};

var searchFail = 'Sorry but your search brought zero results.';
var restuarantArray = [ restuarant1, restuarant2, restuarant3, restuarant4, restuarant5, restuarant6, restuarant7 ];
var search;
var restuarants = document.getElementById('restuarants');
var searchButton = document.getElementById('form1');



function sortRestuarants(array,b) {
  for (var i = 0; i< array.length; i++){
    var a = array[i];
    if ((a.type.toLowerCase() === b)|| (a.name.toLowerCase() === b)){
      addRestuarant(array[i]);
    }
  }
};

function stopRefresh(event) {
  var element = restuarants;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  event.preventDefault();
  search = document.getElementById('search-bar').value;
  sortRestuarants(restuarantArray, search.toLowerCase());
};

function addRestuarant(array){
  var name = array.name;
  var stars = array.stars;
  var nameContent = document.createTextNode(name);
  var starContent = document.createTextNode(stars);
  var restuarantName = document.createElement('h1');
  var restuarantStars= document.createElement('p');
  restuarantName.appendChild(nameContent);
  restuarantStars.appendChild(starContent);
  restuarants.appendChild(restuarantName);
  restuarants.appendChild(restuarantStars);
};

searchButton.addEventListener("submit", stopRefresh);
