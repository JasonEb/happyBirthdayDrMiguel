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
          Happy Birthday Mike 😊!
        </p>
      </header>
      <img alt="he is so content" src={pic1}/>
      <img alt="braces nightmare" src={pic2}/>
      <img alt="balla samurai mike" src={pic3}/>
      <img alt="making it rain" src={pic4}/>
      <img alt="jason got lazy" src={pic5}/>
      <img alt="rice farmer mike" src={pic6}/>
      <img alt="up mike" src={pic7}/>
      <img alt="deflated mike" src={pic8}/>
      <img alt="the tooter" src={pic9}/>
      <img alt="dropped" src={pic10}/>
    </div>
  );
}

export default App;
