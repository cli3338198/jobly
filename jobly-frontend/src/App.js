import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import UserContext from "./UserContext";

/**
 * App:
 *
 * Props: none
 *
 * State: currUser: like {username: "", firstName: "", lastName: "", email: ""}
 *        token: string
 *
 * App -> { Navigation, RoutesList }
 */
function App() {
  console.log("App");

  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState();

  /** Handles signup */
  async function signUp(signUpData) {
    const tokenResult = await JoblyApi.signUp(signUpData);
    const copy = {...signUpData};
    delete copy["password"];
    setCurrUser(copy);
    setToken(tokenResult);
  }

  /** Handles login */
  async function login(loginData) {
    const tokenResult = await JoblyApi.login(loginData);
    setToken(tokenResult);
  }

  async function editProfile(username, profileData) {
    const userResult = await JoblyApi.editProfile(username, profileData);
    setCurrUser(userResult);
  }

  /** Handles logout */
  async function logout() {
    setToken(null);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{
        currUser
      }}>
      <BrowserRouter>
        <Navigation logout={logout}/>
        <RoutesList login={login} signUp={signUp} editProfile={editProfile}/>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
