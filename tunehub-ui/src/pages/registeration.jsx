import React from "react";
import { useState } from "react"; 
//import axios  from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import imagess from './imagess/R2.avif';
import { registerApi } from "../Apis/UsersAPi";

// function Registeration(){
	const Registeration = () => {

		const [email, setEmail] = useState('');
		
        // const handleSubmit = async () => {
		// const response = await axios.post('http://localhost:8080/register', {email});
		// console.log(response.data);
		// };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const response = await registerApi(email);
              // Handle successful registration
              console.log(response.data);
            } catch (error) {
              // Handle registration error
              console.error(error);
            }
          };
        

        return (
            <div className="register-container d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${imagess})`, backgroundSize: 'cover', textalign: 'center'}}>
            <form action="register" method="post" onClick={handleSubmit}
                     className="register-form bg-transparent border rounded p-4" style={{ width: '550px', textAlign:'left', marginBottom:'20px', marginTop:'20px' }}>
                <h1 className="text-center mb-4" style={{ color: '#fff', fontSize: '2rem' }}>User Registration</h1>

                <div className="form-group">
                <label style={{ marginBottom: '8px', color: '#fff' }}>Username:</label>
                <input
                    type="text"
                    name="username"
                    className="form-control bg-transparent shadow"
                    style={{ color:'#fff', width:'100%-22px',  marginBottom:'8px', border: '1px solid #ccc', marginLeft:' 8px' }}
                />
                </div>

                <div className="form-group">
                <label style={{ marginBottom: '8px', color: '#fff' }}>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
					onChange={(e) => setEmail(e.target.value)}
                    className="form-control bg-transparent shadow"
                    style={{color:'#fff', width:'100%-22px',  marginBottom:'8px', border: '1px solid #ccc', marginLeft:' 8px' }}
                />
                </div>

                <div className="form-group">
                <label style={{marginBottom: '8px', color: '#fff' }}>Password:</label>
                <input
                    type="password"
                    name="password"
                    className="form-control bg-transparent shadow"
                    style={{color:'#fff', width:'100%-22px',  marginBottom:'8px', border: '1px solid #ccc', marginLeft:' 8px' }}
                />
                </div>

                <div className="form-group ">
                <label style={{ marginBottom: '8px', color: '#fff' }}>Gender:</label>
                <div className="d-flex" style={{ marginBottom: '8px', color: '#fff', marginLeft:'8px' }}>
                    <label>Male
                    <input type="radio" name="gender" value="male" className="mr-1" style={{ marginLeft:'8px',marginRight:'10px', padding:'20px' }}/></label>

                    <label>Female
                    <input type="radio" name="gender" value="female" className="mr-1" style={{ marginLeft:'8px',marginRight:'10px', padding:'20px' }}/></label>

                    <label>Others
                    <input type="radio" name="gender"value="other" className="mr-1" style={{ marginLeft:'8px',marginRight:'10px', padding:'20px' }}/></label>
                </div>
                </div>
                
                <div className="form-group">
                <label style={{ marginBottom: '8px', color: '#fff' }}>Role:</label>
                    <div className="d-flex" style={{ marginBottom: '8px', color: '#fff', marginLeft:'8px' }}>

                    <label className="mr-3">Admin
                    <input type="radio" name="role" value="admin"  className="mr-1" style={{ marginLeft:'8px',marginRight:'10px', padding:'20px' }}/></label>

                    <label className="mr-3">Customer
                    <input type="radio" name="role"value="customer" className="mr-1" style={{ marginLeft:'8px',marginRight:'10px', padding:'20px' }}/></label>
                </div>
                </div>

                <div className="form-group">
                <label style={{ marginBottom: '8px', color: '#fff' }}>Address:</label>
                <textarea name="address"
                    className="form-control bg-transparent shadow"
                    style={{ marginBottom: '8px', color: '#fff' }}
                ></textarea>
                </div>
                <button type="submit" className="btn btn-success" style={{ width: '100%', fontSize: '1rem', backgroundColor: '#4caf50', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '3px' }}>Register</button>
            </form>
            </div>
        );
        }

export default Registeration;
