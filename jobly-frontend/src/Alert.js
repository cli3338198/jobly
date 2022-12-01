import Alert from "react-bootstrap/Alert";
/**
 * Alert:
 *
 * Props: err - Error
 *
 * State:
 *
 * {} -> Alert
 */
function MyAlert(err) {
  return (
    <Alert className="mt-3" variant="danger">
      {err.err.message}
    </Alert>
  );
}

export default MyAlert;
