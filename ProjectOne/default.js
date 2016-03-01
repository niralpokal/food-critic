
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

function sortRestuarants(array,b) {
  for (var i = 0; i< array.length; i++){
    var a = array[i];
    if ((a.type.toLowerCase() === b)|| (a.name.toLowerCase() === b)){
      addToDocument(array[i]);
    }
  }
};

function stopRefresh(event) {
  event.preventDefault();
  search = document.getElementById('search-bar').value;
  sortRestuarants(restuarantArray, search.toLowerCase());
}

function addToDocument(array){
  var name = array.name;
  var stars = array.stars;
  var newH1 = document.createElement('h1');
  var newP = document.createElement('p');
  var nameContent = document.createTextNode(name);
  var starContent = document.createTextNode(stars);
  newH1.appendChild(nameContent);
  newP.appendChild(starContent);
  restuarants.appendChild(newH1);
  restuarants.appendChild(newP);
  array;

}

var restuarants = document.getElementById('restuarants');
var searchButton = document.getElementById('form1');
searchButton.addEventListener("submit", stopRefresh);
