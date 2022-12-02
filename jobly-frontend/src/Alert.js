import Alert from "react-bootstrap/Alert";
/**
 * MyAlert:
 *
 * Props: errors - Error[]
 *
 * State:
 *
 * {} -> Alert
 */
//TODO: generic alert
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
