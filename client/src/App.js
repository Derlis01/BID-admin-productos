import './App.css';
import FormAndData from './components/FormAndData'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import ProductUpdate from './components/ProductUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FormAndData />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/product/:id/edit' element={<ProductUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
