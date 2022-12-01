import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm"

/**
 * RoutesList:
 *
 * Props: login - fn to be called in parent
 *        signUp - fn to be called in parent
 *        editProfile - fn to be called in parent
 *
 * State: none
 *
 * App -> RoutesList -> Routes
 */
function RoutesList({ login, signUp, editProfile }) {
  console.log("RoutesList");

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginForm login={login}/>} />
      <Route path="/signup" element={<SignUpForm signUp={signUp}/>} />
      <Route path="/profile" element={<ProfileForm editProfile={editProfile}/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
