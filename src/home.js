import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div className="body" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', minHeight: '100vh' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="txt">Welcome to ShoeTrove</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h2 className="txt"> Unlock the World of Footwear</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h3 className="txt">Join ShoeTrove Today! Where Every Step Leads to Style.</h3>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/login'} className="btn btn-danger">Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/register'} className="btn btn-danger">Register</Link>
            </div>
        </div>
     );
}
 
export default Home;