import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import Layout from './component/layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';



function App() {
  return (
    <div className="App">

   <Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="contact" element={<Contact />}/>
<Route path="services" element={<Services />} />
</Route>
   </Routes>







    </div>
  );
}

export default App;
