import { BrowserRouter } from "react-router-dom"
import  Router  from './routes';
import Header from "./components/index"
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App; 
