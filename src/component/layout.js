 import Sidebar from "./sidebar";
 import Footer from "./footer";
import { Outlet} from 'react-router-dom';
import '../styles/layout.css'



 function Layout(){
return(
<div className="layout">
<div className="lay-body">
<Sidebar />
<div className="content">
    <Outlet />
</div>
    
</div>
<Footer />

</div>







)


 }
 export default Layout;