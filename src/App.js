import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'
import StocksHome from './screens/StocksHome'
import About from './screens/About'
import NoMatch from './screens/NoMatch'
import Stock from './screens/Stock'
import Stocks from './components/Stocks';

function App() {
  return (
    <div className="App">
      <div className="navDiv">
      
         <img src='https://p7.hiclipart.com/preview/605/903/599/computer-icons-chart-icon-design-diagram-finance.jpg' alt="logo" />
         <nav>
        <NavLink to={"/"}><span>Home</span></NavLink>
        <NavLink to={"/about"}><span>About</span></NavLink>
        <NavLink to={"/stocks"}><span>Stocks</span></NavLink>
        </nav>
      </div>
         <Routes>
             <Route path="/" element={<StocksHome />} />
             <Route path="/stocks" element={<Stock />} /> 
             <Route path="/stocks/:symbol" element={<Stocks />} />
             <Route path="/about" element={<About />} />
             <Route path="*" element={<NoMatch />} />
         </Routes>
    </div>
  );
}

export default App;
