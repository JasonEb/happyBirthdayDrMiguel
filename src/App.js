import logo from './cake.svg';
import './App.css';

import pic1 from './hbd/01.png'
import pic2 from './hbd/02.png'
import pic3 from './hbd/03.png'
import pic4 from './hbd/04.png'
import pic5 from './hbd/05.png'
import pic8 from './hbd/08.png'
import pic9 from './hbd/09.png'
import pic6 from './hbd/06.png'
import pic7 from './hbd/07.png'
import pic10 from './hbd/10.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Happy Birthday mike!
        </p>
      </header>
      <img src={pic1}/>
      <img src={pic2}/>
      <img src={pic3}/>
      <img src={pic4}/>
      <img src={pic5}/>
      <img src={pic6}/>
      <img src={pic7}/>
      <img src={pic8}/>
      <img src={pic9}/>
      <img src={pic10}/>
    </div>
  );
}

export default App;
