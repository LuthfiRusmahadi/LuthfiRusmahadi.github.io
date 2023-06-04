import 'regenerator-runtime'; // untuk transpile async await
import '../styles/main.css';

console.log('Hello Coders! :)');

const hamburgerButton = document.querySelector('.hamburger-button');
const navigationDrawer = document.querySelector('.navigation-drawer');

// Toggle navigation drawer on hamburger button click
const toggleNavigationDrawer = () => {
  navigationDrawer.classList.toggle('show');
};

hamburgerButton.addEventListener('click', toggleNavigationDrawer);

async function fetchRestaurantData() {
  try {
    const response = await fetch('../data.json');
    const data = await response.json();
    showRestaurants(data.restaurants);
  } catch (error) {
    console.log(error);
  }
}

function showRestaurants(restaurants) {
  const restaurantListSection = document.getElementById('restaurant-list');
  restaurantListSection.innerHTML = '';

  restaurants.forEach(restaurant => {
    const restaurantElement = document.createElement('div');
    restaurantElement.classList.add('restaurant');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = restaurant.pictureId;
    imageElement.alt = restaurant.name;
    imageElement.classList.add('restaurant-image');

    const nameElement = document.createElement('h3');
    nameElement.innerText = restaurant.name;

    const addressElement = document.createElement('p');
    addressElement.innerText = `Address: ${restaurant.city}`;

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = `Description: ${restaurant.description}`;
    descriptionElement.classList.add('description');

    restaurantElement.appendChild(imageElement);
    restaurantElement.appendChild(nameElement);
    restaurantElement.appendChild(addressElement);
    restaurantElement.appendChild(descriptionElement);

    cardElement.appendChild(restaurantElement);
    restaurantListSection.appendChild(cardElement);
  });
}

fetchRestaurantData();
