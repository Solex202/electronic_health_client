import Register from "./pages/auth/Register"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
const App = () => {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
      </Routes>   
      </BrowserRouter> 
    </div>
  );
};

export default App
