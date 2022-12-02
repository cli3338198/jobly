import Alert from "react-bootstrap/Alert";
/**
 * MyAlert:
 *
 * Props: errors - list of Errors
 *
 * State:
 *
 * {} -> Alert
 */
function MyAlert({ errors = [] }) {
  return (
    <Alert className="mt-3" variant="danger">
      {errors.map((err, i) => (
        <p key={i}>{err}</p>
      ))}
    </Alert>
  );
}

export default MyAlert;
