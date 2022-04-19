import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
function App() {

    const adminUser = {

          email: "admin@admin.com",
          password: "admin123"
    }
   
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
      console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("LogidIn");
      setUser({
        name: details.name,
        email: details.email
      });
    }
     else {
      console.log("Details do not match!");
      setError("Details do not match!")
    }
  }
    const Logout = () => {
      setUser({
        name: "",
        email: ""
      });
    }

   

  return (
    <div className="App">
    {(user.email == "" ) ? (
     <LoginForm Login={Login} error={error}/>
    ) : (
    <div className="welcome">
    <h2>Welcome, <span>{user.name}</span></h2>
<button onClick={Logout}>Log Out</button>  
</div>
      
    ) }
    </div>
  );
}

export default App;
