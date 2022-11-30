import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";

/**
 * RoutesList:
 *
 * Props: none
 *
 * State: none
 *
 * App -> RoutesList -> Routes
 */
function RoutesList() {
  console.log("RoutesList");

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
