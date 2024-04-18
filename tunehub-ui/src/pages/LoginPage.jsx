import React from "react"
import { useState } from "react"; 
import axios  from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';                                   //Import Bootstrap
import imagess from './imagess/L3.jpg';
// import { loginApi } from "../Apis/NavBarApi";



	function Login(){
		//Use state to store the email and password
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');

		//Function to handle form submission
		const handleSubmit = async (event) => {
		event.preventDefault();
	
		try{
			//sending a POST request to the backend
			const response = await axios.post('http://localhost:8080/login', {
				email:email,
				password: password
			})

			//Handling the response here
			console.log(response.data);
			//Redirect based on the role, for example:
			if(response.data === 'adminhome'){
				window.location.href = './admin';
			}else if (response.data === 'customerhome'){
				window.location.href = './customer';
			}else{
				alert('Login failed');
			}
		}catch(error){
				console.error('Login error:', error);
				alert('An error occured during login.');
			}
		};

		// Login.js

		return (
			<div className="login-container d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${imagess})`, backgroundSize: 'cover', textalign: 'center', height: '100vh'}}>
			 <form className="login-form  bg-transparent  p-4  mx-auto" style={{ width: '450px' }} onSubmit={handleSubmit}>						{/*	border rounded */}
				{/* <h1 className="text-center mb-4" style={{ color: '#fff', textalign: 'center'}}>Login</h1> */}
				<div className="form-group">
				<label style={{ marginBottom:'8px', color: '#fff'}}>Email:</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					className="form-control bg-transparent shadow"
					style={{ color:'#fff', width:'100%-22px',  marginBottom:'8px', border: '1px solid #ccc', marginleft:' 8px' }}
				/>
				</div>
				<div className="form-group">
				<label style={{ marginBottom:'8px', color:'#fff'}}>Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					className="form-control bg-transparent shadow"
					style={{ color:'#fff', width:'100%-22px', marginBottom:'8px', border: '1px solid #ccc', marginleft:' 8px' }}
				/>
				</div>
				<button type="submit" value="" className="btn btn-success"
				 style={{ width: '100%', fontSize: '1rem', backgroundColor: '#4caf50', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '3px' }}>Login</button>
			</form>
			</div>
		);
		};

export default Login;



