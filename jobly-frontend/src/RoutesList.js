import { Routes, Route, Navigate } from "react-router-dom";
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
  return (
    <Routes>
      <Route path="/" element={<div>Homepage</div>} />
      <Route path="/companies/:name" element={<div>Company detail</div>} />
      <Route path="/companies" element={<div>Companies</div>} />
      <Route path="/jobs" element={<div>Jobs</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
