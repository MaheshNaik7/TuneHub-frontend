import React from "react"
import {Link} from 'react-router-dom'
import '../css/welcome.css'
import 'bootstrap/dist/css/bootstrap.min.css';    

function Index(){
    return(
        
        <div class="container text-center">
            <h1>Welcome to Tune Hub Application</h1>
            <br></br><br></br>
            <Link to="/registeration">Click here to register</Link>
            <br></br><br></br><br></br>
            <Link to="/login">Click here to login</Link>
        </div>
    )
}
export default Index;