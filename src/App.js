
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import UserRouters from './Routers/UserRouters';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRouters/>}/>
        <Route path='/admin/*' element={<AdminRouters/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
