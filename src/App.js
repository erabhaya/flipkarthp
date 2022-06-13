import Navbar from "./component/Navbar";
import './App.css';
import Header from "./component/Header";
import Slider from "./component/Slider";
import Main from "./component/Main";


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Slider/>
      <Main/>
    </div>
  );
}

export default App;
