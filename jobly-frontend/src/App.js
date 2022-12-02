import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import JoblyApi from "./api";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import MySpinner from "./MySpinner";

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

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  // const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  // DON'T NEED
  // useEffect(() => {
  //   // get token from localstorage
  //   const localToken = localStorage.getItem("token");
  //   if (localToken) {
  //     setToken(localToken);
  //   }
  // }, []);

  useEffect(() => {
    async function getUser() {
      const { username } = jwt_decode(token);
      JoblyApi.token = token;
      const userResult = await JoblyApi.getUser(username);
      setCurrUser(userResult);
    }
    if (token) {
      getUser();
    } else {
      setCurrUser(null);
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
    localStorage.removeItem("token");
  }

  if (token && !currUser) {
    return <MySpinner />;
  }

  return (
    <div className="App">
      <userContext.Provider
        value={{
          currUser,
        }}
      >
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signUp={signUp} editProfile={editProfile} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
