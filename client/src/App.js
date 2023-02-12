import './App.css';
import FormAndData from './components/FormAndData'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
//import ProductUpdate from './components/ProductUpdate';
import UpdateForm from './components/UpdateForm';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={'/'}>Home</Link>
      <Routes>
        <Route path='/' element={<FormAndData  />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/product/:id/edit' element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
