import 'leaflet/dist/leaflet.css'
import {Form} from './pages/Form'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';

function App() {
    return (
        <div className='bg-gradient-to-br from-blue-50 to-indigo-100'>
       <Routes>
        <Route path='/form' element={<Form/>}/>
        <Route path='/' element={<Landing/>}/>
       </Routes>
        </div>
    );
}

export default App;