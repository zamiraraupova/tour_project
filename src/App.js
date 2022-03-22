
import './App.css';
import Card from './components/Cards/Card';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/index'
import {data} from './helper/data'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='card-wrapper'>
        {data.map((item) =>
          <Card item={item} />
        )}
      </div>
    </div>
  );
}

export default App;
