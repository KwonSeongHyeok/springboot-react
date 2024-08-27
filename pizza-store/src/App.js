import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PizzaList from './components/PizzaList';
import PizzaResult from './components/PizzaResult';
import PizzaRouter from './components/PizzaRouter';

function App() {
  return (
    <Router>
      <PizzaRouter />
      <Routes>
        <Route path='/' element={<PizzaList />} />
        {/*<Route path='/pizza-detail' element={</>} />*/}
        <Route path='/search' element={<PizzaResult />} />
      </Routes>
    </Router>
  );
}

export default App;
