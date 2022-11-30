import "./Homepage.css";

/**
 * Homepage:
 *
 * Props: None
 *
 * State: None
 *
 * Routes -> Homepage
 */
function Homepage() {
  console.log("Homepage");

  return (
    <div className="Homepage">
      <div className="container text-center justify-content-center align-items-center">
        <h1 className="mb-4 fw-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
      </div>
    </div>
  );
}

export default Homepage;

// background: url(/static/media/background.6549e727.png);
