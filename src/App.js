import React from 'react';
import './App.css';
import image from './coffee2.jpg'
import waffles from './waffles1.jpg'
import findUs from './findUs.jpg'

function App() {
  return (
    <>
      <nav className="navigation">
        <ul className="ulNav">
          <li className="buttons">
            <a href="#top" className="anchor">HOME</a></li>
          <li className="buttons">
            <a href="#about" className="anchor">ABOUT</a></li>
          <li className="buttons">
            <a href="#menu" className="anchor">MENU</a></li>
          <li className="buttons">
            <a href="#where" className="anchor">WHERE</a></li>
        </ul>
      </nav>
    <main>
      <header className="coffee">
        <div>
          <span id="about" className="opn">Open 6am to 5pm</span>
        </div>
        <div>
          <h1 className="cafe">The<br></br>Cafe</h1>
        </div>
        <div>
          <span className="addy">16th sunrise blvd SW, 1010</span>
        </div>
      </header>
      <div className="container">
        <div className="aC">
          <h4>
            <span className="ab">About The Cafe</span>
          </h4>
          <p className="abt">The cafe was founded in 2011 by coffee inc. Coffee inc has
            a world wide network of coffee experts to bring you the freshest and most exotic
            coffee you'll ever taste. They created the cafe to provide a space for people to work,
            hang out with friends, or just relax. They acheive this goal by brewing some insanely good coffee and 
            making some delicious food for your enjoyment. 
          </p>
          <p className="abt">We have a wide variety espresso and brew bar items that are artfully
            made by our expert baristas. Each hand made delight will be sure to have
            you mmming and ahhhing. 
          </p>
          <div className="quote">
            <p className="q">
              <i>"We use as many locally sourced ingredients as we can to provide you
              with the freshest tasting coffee and food in the minneapolis area."</i>
            </p>
            <p className="q">
              Chef, barista and owner: Alex Lenzen
            </p>
            </div>
          <div className="coffee2C">
            <img src={image} alt="Cup of coffee"></img>
            <p className="c2"><strong>Opening hours:</strong> everyday from 6am to 5pm</p>
            <p id="menu" className="c2"><strong>Address:</strong> 16th sunrise blvd SW, 1010</p>
          </div>
        <div className="menuContainer">
          <h5>
            <span className="menu">The Menu</span>
          </h5>
            <div>
              <table align="center">
                <tr>
                  <th>Eats</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>Bread Basket</td>
                  <td>Assortment of fresh baked fruit breads and muffins</td>
                  <td>5.50</td>
                </tr>
                <tr>
                  <td>Honey Almond Granola with Fruits</td>
                  <td>Natural cereal of honey toasted oats, rasins, almonds and dates</td>
                  <td>7.00</td>
                </tr>
                <tr>
                  <td>Belgian Waffle</td>
                  <td>Vanilla flavored batter with malted flour, fresh fruit 
                    and maple syrup</td>
                  <td>7.50</td>
                </tr>
                <tr>
                  <td>Scrambled eggs</td>
                  <td>Scrambled eggs, roasted red and green peppers, garlic, and green onions</td>
                  <td>7.50</td>
                </tr>
                <tr>
                  <th>Drinks</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>Coffee</td>
                  <td>Regular coffee light, medium, or dark roast</td>
                  <td>2.50</td>
                </tr>
                <tr> 
                  <td>Chocolato</td>
                  <td>Chocolate espresso with milk</td>
                  <td>4.50</td>
                </tr>
                <tr>
                  <td>Cold brew coffee</td>
                  <td>Cold pressed coffee that we steep overnight</td>
                  <td>4.50</td>
                </tr>
                <tr>
                  <td>A shot in the dark</td>
                  <td>Black coffee + a shot of espresso</td>
                  <td>4.00</td>
                </tr>
                <tr>
                  <td>latte</td>
                  <td>Made with espresso and steamed milk</td>
                  <td>3.50</td>
                </tr>
              </table>
            </div>
            <div id="where" className="wAffles">
              <img src={waffles} alt="Waffles"></img>
            </div>
        <div>
          <h5>
            <span className="where">Where to find us</span>
          </h5>
          <p className="abt">Find us at 16th sunrise blvd SW, 1010, Minneapolis</p>
          <img src={findUs} alt="Aerial street View"></img>
          <p className="abt"><span className="tag">FYI</span> We offer full-service catering
          for any size event! We understand your needs and we will
          cater the food to satisfy the biggest criteria of them all, both
          look and taste.</p>
          <p className="abt"> <strong>Reserve</strong> a table, ask for today's speical
          or just send us a message:</p>
          <form>
            <p>
              <input className="data" type="text" placeholder="Full Name"
              required name="Name"></input>
            </p>
            <p>
              <input className="data" type="number" placeholder="How many people"
              required name="People"></input>
            </p>
            <p>
              <input className="data" type="datetime-local" placeholder="Date and time"
              required name="date" value="2019-08-08T20:00"></input>
            </p>
            <p>
              <input className="data" type="text" 
              placeholder="Message \ Special requirements"></input>
            </p>
            <p>
              <button class="button" type="submit">SEND MESSAGE</button>
            </p>
          </form>
        </div>

        </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
