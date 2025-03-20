import logo from './logo.svg';
import './App.css';
import React from 'react';
import img from './images/R (2).jpg';
import Car from './car';
import img2 from './images/Lexus500.jpg'
import img3 from './images/pickup.jpg'
import img4 from './images/zely.jpg'
import './styles.css'

function App() {
  return (
    <div className="App">
    <div id='uno'>
    <Car class='cellR' src={img} description='rich life dream, speed and status car but even if i had it i wont use daily' color='orange' brand='something fancy and pricey' />
      <Car class='cellL' src={img2} description='this is my true g=dream car if i had it  i will use it always ' color='silver' brand='Lexus' />
    </div>
    <div id='duos'>
    <Car class='cellF' src={img3} description='this is also in a weird way a dream car of mine, it was built strong and for the work and i really 
      like the design and prefer it to the ugly and fat american trucks which resemble the image of their people' color='blue' brand='ford' />
      <Car class='cellZ' src={img4} description='LOL' color= 'ukraine' brand='Zelensky Barrell'/>
    </div>
      
    </div>
  );
}

export default App;
