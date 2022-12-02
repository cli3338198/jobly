import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
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
  const [token, setToken] = useState(null);

  useEffect(() => {
    // get token from localstorage
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    async function getUser() {
      const { username } = await jwt_decode(token);
      JoblyApi.token = token;
      const userResult = await JoblyApi.getUser(username);
      setCurrUser(userResult);
    }
    if (token) {
      getUser();
    }
  }, [token]);

  /** Handles signup */
  async function signUp(signUpData) {
    const tokenResult = await JoblyApi.signUp(signUpData);
    setToken(tokenResult);
  }

  /** Handles login */
  async function login(loginData) {
    const tokenResult = await JoblyApi.login(loginData);
    setToken(tokenResult);
    localStorage.setItem("token", tokenResult);
  }

  /** Edit user profile */
  async function editProfile(username, profileData) {
    const userResult = await JoblyApi.editProfile(username, profileData);
    setCurrUser(userResult);
  }

  /** Handles logout */
  async function logout() {
    setCurrUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          currUser,
        }}
      >
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signUp={signUp} editProfile={editProfile} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
