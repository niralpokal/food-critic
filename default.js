
var restaurant1 = {
  name: 'Taco Taco!',
  type: 'Mexican',
  numberOfReviews: 34,
  stars: 4.5,
  image: "images/mexican1.jpg",
  info: "Find us to try our savory tacos, our enormous burritos, and delightful antojitos. Don't forget to grab your freshly made agua fresca and to grab salsas from our 20+ salsa bar.",
  reviews: [
    review1 = {
      name: 'Shawna C.',
      stars: 4,
      image: "images/mexicanreview1.jpg",
      tag: '',
      content: "'Holy moly! Is this place GOOD! Don't let the look of the truck deceive you. At least for me, I had seen this truck numerous times at the food truck event that we frequent, but nothing really jumped out to me from the outside. The truck is a pretty plain black with simple gold small writing of Classic Tacos. Plus, you can find tacos at a lot of places. One day we finally decided to give it a shot and I really regret not trying these guys out sooner!!'"
    },
    review2 = {
      name: 'Brian R.',
      stars: 5,
      image: "images/mexicanreview2.jpg",
      tag: '',
      content: 'Man I read some of these reviews and damn some people really take their yelping very seriously. Straight and to the point. Food was great. Food was fast. The biggest challenge is my 3.5 year old daughter who is absurdly picky and she ate most of my burrito. Would eat again'
    },
    review3 = {
      name: 'Angie M.',
      stars: 5,
      image: "images/mexicanreview3.jpg",
      tag: '',
      content: 'I have to start by saying... I am often disappointed by food trucks.  Most of the time, I feel a little ripped off, and I dont feel like the food was worth it. That is NOT the case with the Classic Tacos Truck.  I LOVED IT!'
    }
  ]
};

var restaurant2 = {
  name: 'Pizza Unlimited',
  type: 'Pizza',
  numberOfReviews: 14,
  stars: 3,
  image: "images/pizza1.jpg",
  info: 'We offer a flexible approach to dining, combining a fast paced, informal atmosphere in the daytime and casual sit down dinner service in the evening. Our thin, crisp pizzas combine a delicate balance of fresh, unique flavors paired with our carefully cured and handcrafted dough.',
  reviews: [
    review1 ={
      name: 'Beast A.',
      stars: 2,
      image: "images/pizzareview1.jpg",
      tag: '',
      content: "Ownership is rude. Staff is nice and on a weeknight the place seems like a good option but in reality it takes a long time to wait for food (20 minutes tonight) and there are better options really close by. I went to NY pizza cuz I'd been there in the past and didn't want to risk the new Square One or the CPK across Jeffrey since both are new and I wasn't sure how long the wait would be. But I certainly will be giving those a try next time! Can't be difficult to beat $26 medium pepperoni pizza with breadsticks and super easy to do better than the impolite owner with tons of attitude. Im all for buying local but why patronize a small business if they are going to be rude?"
    },
    review2 = {
      name: 'Dana K.',
      stars: 4,
      image: "images/pizzareview2.jpg",
      tag: '',
      content: 'I love pizza by the slice since I can get a variety. My default is the white pizza with mozzarella and ricotta and sprinkles of pepper flakes. Their garlic knots are super garlicy and bready which I absolutely love. They use good sausage (nice and peppery) on their pepperoni and sausage pizza.'
    },
    review3 = {
      name: 'Aaron E.',
      stars: 3,
      image: "images/pizzareview3.jpg",
      tag:  '',
      content: 'The pie itself is undoubtedly greasy, as the cheese top showcased pools of yellow oily liquid and the paper plate it arrived on had some areas saturated with grease as well. The marinara was quite good however, with a nice kick of basil in each bite and the perfect consistency of tomato paste. The Crust was also noteworthy, doughy on the inside, crusty on the outside and the crust to toppings ratio was spot on.'
    }
  ]
};

var restaurant3 = {
  name: 'Urban Plates',
  type: 'American',
  numberOfReviews: 198,
  stars: 4,
  image: 'images/american1.jpg',
  info: "We're farm to plate and won't break the bank! It's true. Farm means freshly delivered from local farms and producers. Plate means chef-crafted dishes piled high with one-of-a-kind flavors. Won't break the bank means you could pay twice as much for food this good.",
  reviews: [
    review1 = {
      name: 'Julie H.',
      stars: 4,
      image: "images/americanreview1.jpg",
      tag: '',
      content: 'My first impression of Urban Plates was that it was like a Lemonade done better. When I first walked in I immediately liked the variety in the seating arrangement. It includes a long narrow table on which people propped up their laptops and were working while others were able to eat and chat with the person across from them. They also offered 2 and 4 person tables around this longer table and plenty of outdoor seating on their covered patio.'
    },
    review2 = {
      name: 'Anh B.',
      stars: 2,
      image: "images/americanreview2.jpg",
      tag: '',
      content: "The dinner team tonight executed service really well!! Not sure if it's like this every weekend nights as we've only been here a handful of time. But well done!! The food backed up the line a little and some were sent back (our neighboring table :p but they were not the only ones) because they were undercooked but the team handled it very well!!"
    },
    review3 = {
      name: 'Joanna H.',
      stars: 4,
      image: "images/americanreview3.jpg",
      tag: '',
      content: "Recently, I've been trying to calm down my beer belly by eating healthier. I haven't consumed less beer... but I have been eating healthier! While figuring out a quick dinner with a few girlfriends, Urban Plates seemed like the perfect candidate for a healthy, faux-home-cooked meal with the fresh ingredients I was looking for. "
    }
  ]
};

var restaurant4 = {
  name: 'Burger!',
  type: 'American',
  numberOfReviews: 56,
  stars: 4.5,
  image: 'images/american2.jpg',
  info: "Intricately Simple - We are quite Intricate in our preparation, techniques, and craft. Yet, our menu is Simple, just good ol' fashioned grub.",
  reviews: [
    review1 = {
     name: 'Truong T.',
     stars: 5,
     image: "images/americanreview4.jpg",
     tag: '',
     content: 'Overall this was a wonderful food truck.  I had a great lunch experience here though it can be a bit pricey.  The total was about 40 bucks which is a bit insane for lunch but sometimes you gotta pay the cost to be a boss.'
   },
   review2 = {
     name: 'Stacy S.',
     stars: 5,
     image: "images/americanreview5.jpg",
     tag: '',
     content: 'Super awesome burger food truck!!  I learned of this place because it was stationed right outside of a brewery (Bottle Logic) that we were going to check out. I got their Savory Burger and it was perfection in every bite!  It has bacon relish, Swiss cheese, aioli and 3,000 sauce.'
   },
   review3 = {
     name: 'Rob D.',
     stars: 4,
     image: "images/americanreview6.jpg",
     tag: '',
     content: 'I ordered the Savory Cut burger that came with bacon relish, swiss cheese, aioli splash (their name for sauce) and the 3000 splash priced at $11.  The burger patty had a nice beefy, charred flavor and was pretty rich and moist.  They put this bacon relish on that has bacon pieces, capers and what looked like little smashed grapes.  It was really good and complimented the burger patty very well with the richness of the bacon and the sweet, tangy and slight pepper flavor of the capers and little smashed grapes.  The bun was very good being moist, buttery and bready holding up well to the burger patty and other ingredients.  Also, the swiss was a good choice for this rendition of a burger.'
   }
 ]
};

var restaurant5 = {
  name: 'Pizza Cafe',
  type: 'Pizza',
  numberOfReviews: 74,
  stars: 4,
  image: "images/pizza2.jpg",
  info: 'Authentic Neapolitan Style Pizza made in a 900 degree wood fired oven. Closest to real Italian pizza outside of Naples, Italy.',
  reviews: [
    review1 = {
      name: 'Puja L.',
      stars: 4,
      image: "images/pizzareview4.jpg",
      tag: '',
      content: "Mix and match everything!  It's like a dream come true for a person who loves to sample things.  I'm a big fan of variety...and I got it at Pizza Cafe. You can do up to 4 different pizzas on your pie, and order a beer flight of any 4 of the beers they have on tap ($9). I will say that I didn't love their crust, but I was still a pretty happy customer. "
    },
    review2 = {
      name: 'Shelly C.',
      stars: 4,
      image: "images/pizzareview5.jpg",
      tag: '',
      content: "At first, we order first class pizza because it's so close to our house- 2 minute of drive, how convenient! AND after we tasted the pizza, we were impressive how good the pizza was! Their crust is the chewy, thicker type, which I love. However, there's also an ultra thin crust option on the menu. Kids like the Sweet Pig (Hawaiian) and plain cheese, my husband and I like the Zesty Italian and Popeye's Favorite. They were generous on toppings, not stingy at all! Our go-to pizza place when I don't feel like cooking!"
    },
    review3 = {
      name: 'Denise K.',
      stars: 5,
      image: "images/pizzareview6.jpg",
      tag: '',
      content: 'My favorite kind of pizza has crust that is crispy on the outside and chewy on the inside. Pizza Cafe serves up first class pizza dough - exactly how I like it! Not only do they have great flavors, but they are generous with the toppings too. We ordered an XL combo and it was enough for 4 average appetites. My family has a big appetite so we ordered another XL - pizza of the month: feta, garlic, spinach and roma tomatoes. The pizza of the month was my favorite of the two.'
    }
  ]
};

var restaurant6 = {
  name: 'Aioli',
  type: 'American',
  numberOfReviews: 201,
  stars: 4,
  image: 'images/american3.jpg',
  info: 'Our restaurant serves great burgers, fresh salads, healthy meals and Chicago specialties.  Our catering service specializes in corporate catering, drop off catering, lunch catering, wedding and party catering. Let Aioli create an unforgettable experience for your next event.',
  reviews: [
    review1 = {
      name: 'Romuel Dave C.',
      stars: 3,
      image: "images/americanreview7.jpg",
      tag: '',
      content: 'I had really high hopes for this spot.  It is located inside the Main Place food court off Jamboree and Main.  This place has the makings of the perfect burger, but it sort of fell short of great in my book.  Perhaps its my choice on the menu that I made a mistake on... so I wont be too harsh.'
    },
    review2 = {
      name: 'Truong T.',
      stars: 4,
      image: "images/americanreview8.jpg",
      tag: '',
      content: "I've been eyeing Aioli for a while now but nobody wanted to go with me for lunch at work to it since my street cred has taken quite a hit from prior bad experiences (curses).  Finally I got somebody to trust me (sucker).  I came through with my coworker to a food court located on Main St.  The place was pretty runned down.  It lacked outer appeal but the interior was actually quite decent."
    },
    review3 = {
      name: 'Aaron E.',
      stars: 2,
      image: "images/americanreview9.jpg",
      tag: '',
      content: 'I can only give Aioli 2 stars and it is probably all of my own fault. No fewer than 10 people I follow on Yelp and a few co-workers have raved about the food at Aioli by mouth or in reviews so I have had this one bookmarked for quite a while now. The opportunity to stop for lunch finally arose and I think I totally blew it while ordering. '
    }
  ]
};

var restaurant7 = {
  name: 'Mod Pizza',
  type: 'Pizza',
  numberOfReviews: 93,
  stars: 4.5,
  image: "images/pizza3.jpg",
  info: 'MOD Pizza specializes in individual artisan-style pizzas Made On Demand (MOD) in a fast, friendly and stylish environment. All pizzas are cooked by hand in an 800 degree display oven and ready in under 5 minutes with as many toppings as you like for one low price. You can also create your own salads. Northwest beers on tap, wine, sodas and milkshakes. Takeout, awesome music and patio dining.',
  reviews: [
    review1 = {
      name: 'Janet R.',
      stars: 5,
      image: "images/pizzareview7.jpg",
      tag: '',
      content: 'This is probably my favorite make your own pizza place. They have a variety of toppings to choose from. I usually like to pack my pizza with a lot of veggies and places like Blaze and Pieology get the crust soggy, but here the crust stays nice and crisp!'
    },
    review2 = {
      name: 'Nijole T.',
      stars: 5,
      image: "images/pizzareview8.jpg",
      tag: '',
      content: 'Really falling in love with MOD! More options than any other places where you can create your own pizza, different size pizzas and salads, several tasty and fresh juices instead of soda, desserts and more toppings than any other place offers! Prices and quality are great, this is the perfect place to take kids and picky eaters, you can be healthy or not, everything is fresh and made in house, even the salad dressings which I also love. Service wass very nice, they are a bit slower and your food takes longer than other chains, but the wait is well worth it. Cool and clean location, plenty of seating, worth checking out!'
    },
    review3 = {
      name: 'Fernando C.',
      stars: 4,
      image: "images/pizzareview9.jpg",
      tag: '',
      content: 'I am a converted MOD believer.  I have come back 6 or 7 times now and it seems they got rid of the rude girl that made my first visit so unpleasant.  I like the topping options here compared to similar spots.  Surprisingly their drinks are scrumptious although more size options would be nice.'
    }
  ]
};

var restaurant8 = {
  name: 'La Sirena Grill',
  type: 'Mexican',
  numberOfReviews: 34,
  stars: 4,
  image: "images/mexican2.jpg",
  info: 'Contemporary Mexican Grill with an edge. Everything from our spicy fire-roasted salsas, blackened seasonings, hand-made tortillas & agua frescas.',
  reviews: [
    review1 = {
      name: 'Matt K.',
      stars: 4,
      image: "images/mexicanreview4.jpg",
      tag: '',
      content: "'Excellent Mexican food in the Orchard Hills Plaza.  It's a quick order type of place like a Rubio's.  I think the food tastes fresh and clean.  My carnitas burrito was not heavy at all.  It also came with guacamole on the side which was good and tortilla chips which were also good.  I don't like the salsas at their salsa bar, but the pico de gallo is good.'"
    },
    review2 = {
      name: 'Aileen K.',
      stars: 3,
      image: "images/mexicanreview5.jpg",
      tag: '',
      content: "'My friend and I shared the chicken nachos and the chicken burrito. Both came with nice portions of delicious guacamole, which was amazing and fresh. However, the burrito was quite plain and small. Nachos are, well, nachos (delicious and filling but gluttonous). Additionally, the salsas were mediocre.'"
    },
    review3 = {
      name: 'Tom',
      stars: 4,
      image: "images/mexicanreview6.jpg",
      tag: '',
      content: "'Since I don't like too authentic mexican food that can get pretty spicy, too saucy, and stinky from over seasoning meat, I think this place is just right for my tastebuds. Clean, simple and and not crazy with mysterious green, red, black or white sauces! I always get chicken nachos and salmon burrito here. '"
    }
  ]
};

var restaurant9 = {
  name: 'Super Mex',
  type: 'Mexican',
  numberOfReviews: 34,
  stars: 3,
  image: "images/mexican3.jpg",
  info: 'Super Mex offers great-tasting, traditional Mexican food that is prepared to taste homemade. Our signature "Super Mex Burrito" is the perfect example of classic Mexican comfort food prepared with a distinct homemade authenticity. Our extra-grande tortilla chips, legendary salsa, and tender pork carnitas are among the staples here at Super Mex.',
  reviews: [
    review1 = {
      name: 'A. P.',
      stars: 2,
      image: "images/mexicanreview7.jpg",
      tag: '',
      content: "'Good food and good service.  There were 5 of us seated at a table with a bench on one side and two chairs in the other.  No one can sit at the end of the table so three of us sat on one side while two sat on the other.  Very uncomfortable when one is left-handed and has all but 1 foot of space to work with.  I honestly don't know what they were thinking by seating 5 adults at a table designed for 4.  It was a busy Saturday night but no excuse for that.  I didn't want to upset the grandparents who were already comfortably seated so we sat through dinner without complaint. '"
    },
    review2 = {
      name: 'Jessica E.',
      stars: 3,
      image: "images/mexicanreview8.jpg",
      tag: '',
      content: "'Tonight I ordered 2 meals to go, it was $25 plus tip. My order was 2 cheese enchiladas  crispy asada taco and beans. Well I got about 2 tablespoons of beans if that... the food was cold, I got a soft taco not a Crispy taco. By the time my husband go home it was all cold. we live 5 min away. He even tipped them and when he got home we realized all of this was wrong. I'm super disappointed. I can't believe a place of service would actually serve food this way.  The only reason I gave 2 stars is because the food tasted decent once I reheated it.'"
    },
    review3 = {
      name: 'Victoria S.',
      stars: 4,
      image: "images/mexicanreview9.jpg",
      tag: '',
      content: "'4 stars for finding a good Mexican food restaurant in Irvine. This definitely is not the best Mexican food I've ever had... But trying to find authentic Mexican in irvine is probably impossible. I'm all about authentic Mexican food, like not-so-pretty restaurants made with love from my Tia (I'm not Latina, but I'm from an area with a large percentage so I love good stuff!) '"
    }
  ]
};

var userReview = {};
var userRestuarant = {};
//var searchFail = document.createTextNode('Sorry but your search brought zero results.');
//var failH1 = document.createElement('h1');
//failH1.appendChild(searchFail);
var restaurantArray = [ restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6, restaurant7, restaurant8, restaurant9 ];
var search;
var addReviewButton = document.getElementById('add-review');
var addRestaurantButton = document.getElementById('add-restaurant');
var restaurants = document.getElementById('restaurants');
var selectedRestaurant = document.getElementById('selected-restaurant');
var listOfReviews = document.getElementById('review-list');
var searchButton = document.getElementById('form1');
var goBackToResultsButton = document.getElementById('search-results')
var foodHomePage = document.getElementById('food-image-home');
var userReviewForm = document.getElementById('form2');
var userRestaurantForm = document.getElementById('form3');
var submitUserForm = document.getElementById('submit-user-review');
var submitRestaurantForm = document.getElementById('submit-user-restaurant')
var homeButton = document.getElementById('home');
var logo = document.getElementById('logo');
var newDiv = document.createElement('div');
var newDivContainer = document.createElement('div');
var newDivMediaLeft = document.createElement('div');
var newH3 = document.createElement('h3');
var newP = document.createElement('p');
var newDivContainer = document.createElement('div');
var starValue;
var searchedArray = [];

function stopRefresh(event) {
  var element = restaurants;
  var element2 = listOfReviews;
  var element3 = selectedRestaurant;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  while(element2.firstChild){
    element2.removeChild(element2.firstChild);
  }
  while(element3.firstChild){
    element3.removeChild(element3.firstChild);
  }
  restaurants.className = "media";
  listOfReviews.className = "hidden media";
  addReviewButton.className = "hidden btn btn-default";
  foodHomePage.className ="hidden row-fluid";
  event.preventDefault();
  search = document.getElementById('search-bar').value;
  sortRestaurants(restaurantArray, search.toLowerCase());
};

function sortRestaurants(array,b) {
  for (var i = 0; i< array.length; i++){
    var a = array[i];
    if ((a.type.toLowerCase() == b) || (a.name.toLowerCase() == b)){
      searchedRestaurants(array[i]);
    } else /*if (!(a.type.toLowerCase() == b) && !(a.name.toLowerCase() == b))*/{
      //restaurants.appendChild(failH1);
      }
    }
  };
var reviewsForSearchedRestaurant;
function searchedRestaurants(array){
  var array = array;
  var name = array.name;
  var stars = array.stars;
  var image = array.image;
  var info = array.info;
  starIcon(stars);
  stars = starValue;
  var showButton = document.createElement('button');
  showButton.setAttribute('type', 'button');
  showButton.setAttribute('class', 'show-reviews');
  showButton.className="center-block";
  var buttonContent = document.createTextNode('Show Reviews');
  var newDivRestaurant = document.createElement('div');
  newDivRestaurant.className = "media-body";
  var newDivContainerRestaurant = document.createElement('div');
  newDivContainerRestaurant.className = "media well";
  var newDivMediaLeftRestaurant = document.createElement('div');
  newDivMediaLeftRestaurant.className = "media-left";
  var newImage = document.createElement('img');
  var starImage = document.createElement('img');
  var newBreak = document.createElement('br');
  newImage.className="img-rounded";
  newImage.setAttribute('src', image);
  newImage.setAttribute('alt', "");
  newImage.setAttribute('width', "324");
  newImage.setAttribute('height', "236");
  starImage.className="img-responsive";
  starImage.setAttribute('src', stars);
  starImage.setAttribute('alt', "");
  starImage.setAttribute('width', "150");
  starImage.setAttribute('height', "150");
  var nameContent = document.createTextNode(name);
  var restaurantName = document.createElement('h3');
  var infoTextNode = document.createTextNode(info);
  var restaurantInfo = document.createElement('p');
  showButton.appendChild(buttonContent);
  showButton.addEventListener('click',showReviews, false);
  restaurantName.appendChild(nameContent);
  restaurantInfo.appendChild(infoTextNode);
  restaurantName.appendChild(starImage);
  newDivRestaurant.appendChild(restaurantName);
  newDivRestaurant.appendChild(restaurantInfo);
  newDivMediaLeftRestaurant.appendChild(newImage);
  newDivMediaLeftRestaurant.appendChild(showButton);
  newDivContainerRestaurant.appendChild(newDivMediaLeftRestaurant);
  newDivContainerRestaurant.appendChild(newDivRestaurant);
  restaurants.appendChild(newDivContainerRestaurant);
  searchedArray.push(array);
};

function slRes(array){
  var name = array.name;
  var stars = array.stars;
  var image = array.image;
  var info = array.info;
  starIcon(stars);
  stars = starValue;
  var newDivRestaurant = document.createElement('div');
  newDivRestaurant.className = "media-body";
  var newDivContainerRestaurant = document.createElement('div');
  newDivContainerRestaurant.className = "media well";
  var newDivMediaLeftRestaurant = document.createElement('div');
  newDivMediaLeftRestaurant.className = "media-left";
  var newImage = document.createElement('img');
  var starImage = document.createElement('img');
  newImage.className="img-rounded";
  newImage.setAttribute('src', image);
  newImage.setAttribute('alt', "");
  newImage.setAttribute('width', "324");
  newImage.setAttribute('height', "236");
  starImage.className="img-responsive";
  starImage.setAttribute('src', stars);
  starImage.setAttribute('alt', "");
  starImage.setAttribute('width', "150");
  starImage.setAttribute('height', "150");
  var nameContent = document.createTextNode(name);
  var restaurantName = document.createElement('h3');
  var infoTextNode = document.createTextNode(info);
  var restaurantInfo = document.createElement('p');
  restaurantName.appendChild(nameContent);
  restaurantInfo.appendChild(infoTextNode);
  restaurantName.appendChild(starImage);
  newDivRestaurant.appendChild(restaurantName);
  newDivRestaurant.appendChild(restaurantInfo);
  newDivMediaLeftRestaurant.appendChild(newImage);
  newDivContainerRestaurant.appendChild(newDivMediaLeftRestaurant);
  newDivContainerRestaurant.appendChild(newDivRestaurant);
  selectedRestaurant.appendChild(newDivContainerRestaurant);
};

function showReviews(event){
  var target = event.target;
  var parent = target.parentElement;
  var theParent = parent.nextSibling.getElementsByTagName("h3")[0];
  reviewsForSearchedRestaurant = theParent.textContent;
  for (var i = 0; i < restaurantArray.length; i++) {
    if (reviewsForSearchedRestaurant === restaurantArray[i].name){
      slRes(restaurantArray[i]);
      reviewsList(restaurantArray[i].reviews);

    }
  }
  restaurants.className = "hidden media";
  listOfReviews.className = "media";
};

function reviewsList(array){
  var reviews = array;
  var i = 0;
  var newDiv1;
  var newDivContainer1;
  var newDivMediaLeft1;
  while  (i<reviews.length){
    addReviews(reviews[i]);
    i++;
  }
  userRestaurantForm.className= "hidden";
  goBackToResultsButton.className = "btn btn-default pull-left";
  addReviewButton.className = "btn btn-default";
};

function addReviews(array){
  var temp = array;
  var image = temp.image;
  var stars = temp.stars;
  starIcon(stars);
  stars = starValue;
  var reviewContent = document.createTextNode(temp.content);
  var reviewName = document.createTextNode(temp.name);
  var starNumber = document.createTextNode(stars);
  var newImage = document.createElement('img');
  var starImage = document.createElement('img');
  newImage.className="img-rounded";
  newImage.setAttribute('src', image);
  newImage.setAttribute('alt', "");
  newImage.setAttribute('width', "185");
  newImage.setAttribute('height', "150");
  starImage.className="img-responsive";
  starImage.setAttribute('src', stars);
  starImage.setAttribute('alt', "");
  starImage.setAttribute('width', "100");
  starImage.setAttribute('height', "100");
  newDiv = document.createElement('div');
  newDiv.className = "media-body";
  newDivContainer = document.createElement('div');
  newDivContainer.className = "media well";
  newDivMediaLeft = document.createElement('div');
  newDivMediaLeft.className = "media-left";
  newH3 = document.createElement('h3');
  newP = document.createElement('p');
  newP.appendChild(reviewContent);
  newH3.appendChild(reviewName);
  newH3.appendChild(starImage);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newP);
  newDivMediaLeft.appendChild(newImage);
  newDivContainer.appendChild(newDivMediaLeft);
  newDivContainer.appendChild(newDiv);
  listOfReviews.appendChild(newDivContainer);
  return newDivContainer;
};

function reviewButton(event){
  event.preventDefault();
  userReviewForm.className="well";
};

function submitReview(event){
  event.preventDefault();
  var userName = document.getElementById('name-input').value;
  var starChoice = document.getElementsByName('inlineRadio');
  var stars1;
  for (var i = 0; i< starChoice.length; i++ ){
    if (starChoice[i].checked){
      stars1 = starChoice[i].value;
    }
  }
  var images;
  var reviewContent = document.getElementById('user-review-content').value;
  for (var i = 0; i < restaurantArray.length; i++) {
    if (reviewsForSearchedRestaurant === restaurantArray[i].name){
      images = restaurantArray[i].image;
    }
  }
  userReview = {
    name: userName,
    stars: stars1,
    image: images,
    content: reviewContent
  };
  for (var i = 0; i < restaurantArray.length; i++) {
    if (reviewsForSearchedRestaurant === restaurantArray[i].name){
      restaurantArray[i].reviews.push(userReview);
    }
  }
  document.forms['form2'].reset();
  resetReviews();
};

function resetReviews(){
  userReviewForm.className="hidden well";
  var element = listOfReviews;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  for (var i = 0; i < restaurantArray.length; i++) {
    if (reviewsForSearchedRestaurant === restaurantArray[i].name){
      reviewsList(restaurantArray[i].reviews);
    }
  }
  goBackToResultsButton.className = "hidden btn btn-default pull-left";
}

function goBackToResults(event){
  event.preventDefault();
  var element = listOfReviews;
  var element2 = selectedRestaurant;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  while(element2.firstChild){
    element2.removeChild(element2.firstChild);
  }
  restaurants.className = "media";
  goBackToResultsButton.className = "hidden btn btn-default pull-left";
  addReviewButton.className="hidden btn btn-default";
  userReviewForm.className="hidden well";
}

function goHome(event){
  event.preventDefault();
  var element = listOfReviews;
  var element2 = restaurants;
  var element3 = selectedRestaurant;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  while(element2.firstChild){
    element2.removeChild(element2.firstChild);
  }
  while(element3.firstChild){
    element3.removeChild(element3.firstChild);
  }
  addReviewButton.className = "hidden btn btn-default";
  goBackToResultsButton.className = "hidden btn btn-default pull-left";
  foodHomePage.className ="row-fluid";
  userReviewForm.className="hidden well";
  userRestaurantForm.className="hidden well";
}

function starIcon(array){
  if (array == 0){
    starValue = "images/stars0.png";
  }else if (array == 1){
    starValue = "images/stars1.png";
  }else if (array == 1.5){
    starValue = "images/stars1.5.png";
  }else if (array == 2){
    starValue = "images/stars2.png";
  }else if (array == 2.5){
    starValue = "images/stars2.5.png";
  }else if (array == 3){
    starValue = "images/stars3.png";
  }else if (array == 3.5){
    starValue = "images/stars3.5.png";
  }else if (array == 4){
    starValue = "images/stars4.png";
  }else if (array == 4.5){
    starValue = "images/stars4.5.png";
  }else if (array == 5){
    starValue = "images/stars5.png";
  }
}

function addRestaurantClick(event){
  event.preventDefault();
  //var element = restaurants;
  var element2 = listOfReviews;
  var element3 = selectedRestaurant;
  //while(element.firstChild){
    //element.removeChild(element.firstChild);
//  }
  while(element2.firstChild){
    element2.removeChild(element2.firstChild);
  }
  while(element3.firstChild){
    element3.removeChild(element3.firstChild);
  }
  foodHomePage.className ="hidden row-fluid";
  addReviewButton.className="hidden btn btn-default";
  goBackToResultsButton.className = "hidden btn btn-default pull-left";
  userReviewForm.className="hidden well";
  userRestaurantForm.className = "well"
}

function addRestaurant(event){
  event.preventDefault();
  var name = document.getElementById('restaurant-name').value;
  var type = document.getElementById('restaurant-type').value;
  var info = document.getElementById('restaurant-info').value;
  userRestuarant = {
    name: name,
    type: type,
    numberOfReviews: '',
    stars: '',
    image: 'images/defaultimage.jpg',
    info: info,
    reviews: []
  };
    reviewsForSearchedRestaurant = name;
    restaurantArray.push(userRestuarant);
    document.forms['form3'].reset();
    userRestaurantForm.className="hidden well";
    slRes(userRestuarant);
    addReviewButton.className = "btn btn-default";
    //goHome(event);
}

searchButton.addEventListener("submit", stopRefresh);
addReviewButton.addEventListener('click', reviewButton);
submitUserForm.addEventListener('click', submitReview);
goBackToResultsButton.addEventListener('click', goBackToResults);
homeButton.addEventListener('click', goHome);
logo.addEventListener('click', goHome);
addRestaurantButton.addEventListener('click', addRestaurantClick);
submitRestaurantForm.addEventListener('click', addRestaurant);
//console.log(restaurant7.reviews[1].name);
