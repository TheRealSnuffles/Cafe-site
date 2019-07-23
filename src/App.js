import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav className="navigation">
        <ul className="ul">
          <li className="buttons">
            <a href="#home" className="anchor">HOME</a></li>
          <li className="buttons">
            <a href="about" className="anchor">ABOUT</a></li>
          <li className="buttons">
            <a href="menu" className="anchor">MENU</a></li>
          <li className="buttons">
            <a href="where" className="anchor">WHERE</a></li>
        </ul>
      </nav>
    <main>
      <header className="coffee">
        <div className="open">
          <span className="opn">Open 6am to 5pm</span>
        </div>
        <div className="thecafe">
          <h1 className="cafe">The<br></br>Cafe</h1>
        </div>
        <div className="address">
          <span className="addy">16th sunrise blvd SW, 1010</span>
        </div>
      </header>
    </main> </>
  );
}

export default App;
