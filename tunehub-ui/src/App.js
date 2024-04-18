import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Registeration from "./pages/registeration";
import LoginPage from "./pages/LoginPage";
import Index from "./pages/Index";
import AdminhomePage from "./pages/AdminhomePage";
import CustomerHome from "./pages/CustomerHome";
import DisplaySongs from "./pages/DisplaySongs"
import ViewPlaylists from "./pages/ViewPlaylists"
import CreatePlaylist from "./pages/CreatePlaylist"
import AddSongs from "./pages/AddSongs"
import Payment from "./pages/Payment"
//import { loginApi } from "./Apis/NavBarApi"; // Import login and register API functions
//import { registerApi } from "./Apis/UsersAPi";

function App() {
  // const handleLogin = async (email, password) => {
  //   try {
  //     const response = await loginApi(email, password);
  //     // Handle successful login
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle login error
  //     console.error(error);
  //   }
  // };

  // const handleRegister = async (email) => {
  //   try {
  //     const response = await registerApi(email);
  //     // Handle successful registration
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle registration error
  //     console.error(error);
  //   }
  // };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registeration" element={<Registeration  />} />
          <Route path="/login" element={<LoginPage  />}/>
          <Route path="/customerhome" element={<CustomerHome/>}/> 
          <Route path="/adminhome" element={<AdminhomePage />} />

          <Route path="/exploreSongs" element={<AdminhomePage />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/displaySongs" element={<DisplaySongs />}/>

          <Route path="/adminhome/addSongs" element={<AddSongs />}/>
          <Route path="/adminhome/displaySongs" element={<DisplaySongs />}/>
          <Route path="/adminhome/createPlaylist" element={<CreatePlaylist />}/>
          <Route path="/adminhome/viewPlaylists" element={<ViewPlaylists />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
