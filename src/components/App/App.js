import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const businesses = [
  {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Fung Shay\'s Diner',
  address: '1010 flux capacity Way',
  city: 'NoRoads',
  state: 'NY',
  zipCode: '10101',
  category: 'Asian',
  rating: 4.7,
  reviewCount: 9
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Jimmy Seas',
  address: '123 Main st',
  city: 'NewYork',
  state: 'NY',
  zipCode: '10101',
  category: 'American',
  rating: 3,
  reviewCount: 190
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Kavarnas',
  address: '124 Broadway',
  city: 'NewYork',
  state: 'NY',
  zipCode: '10101',
  category: 'CoffeeShop',
  rating: 4,
  reviewCount: 1190
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: '1919',
  address: '125 Packer blvd',
  city: 'NewYork',
  state: 'NY',
  zipCode: '10101',
  category: 'American',
  rating: 3.8,
  reviewCount: 180
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Pizza Hut',
  address: '124 Broadway',
  city: 'NewYork',
  state: 'NY',
  zipCode: '10101',
  category: 'Pizza',
  rating: 5,
  reviewCount: 11190
},
]

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList business={businesses}/>
    </div>
  )
  }

export default App;
