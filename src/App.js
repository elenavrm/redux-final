import './App.css';
import './index.css';
import Cart from './components/Cart/Cart';
import Dishes from './components/Dishes/Dishes';
import AllCategories from './components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
    <div className='block'>
    <AllCategories />
    <Cart />
    </div>
    <div className='block'>
    <Dishes />
    </div>
    </div>
  );
}

export default App;
