import logo from './logo.svg';
import './App.css';

function App() {
  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data);
  }
  return (

    <div>
      <h1><p>Hello world</p></h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> */}
    //     <button onclick={getAdvice}>GetAdvice</button>
    //   </header>
    // </div>
   );
}

export default App;
