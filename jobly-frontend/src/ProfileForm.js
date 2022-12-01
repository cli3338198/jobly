import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import Alert from "./Alert";

/**
 * ProfileForm:
 *
 * Props: editProfile - function, to be called in parent
 *
 * State: formData - like {
    username: "",
    first: "",
    last: "",
    email: "",
  }
          errors - array of Errors
 *
 * App -> Routes -> ProfileForm
 */
function ProfileForm({ editProfile }) {
  console.log("ProfileForm");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    first: "",
    last: "",
    email: "",
  });
  const [errors, setErrors] = useState([]);

  /**Handles the input change. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  /**Handle form submission. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // make axios call
      await editProfile(formData);
      navigate("/");
      // reroute to main page
    } catch (err) {
      // set errors
      console.log(err);
      setErrors((prevErrors) => [...prevErrors, err]);
    }
  }

  return (
    <Form className="ProfileForm container" onSubmit={handleSubmit}>
      <Form.Text as="h1">Sign Up</Form.Text>
      <Form.Group>
        <Form.Label>Username:</Form.Label>
        <Form.Control value={formData.username} name="username" disabled />
      </Form.Group>

      <Form.Group>
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          value={formData.first}
          name="first"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          value={formData.last}
          name="last"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          value={formData.email}
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
      </Form.Group>
      {errors.length > 0 && errors.map((e, i) => <Alert key={i} err={e} />)}
      <Button as="button" className="btn btn-primary">
        Submit
      </Button>
    </Form>
  );
}

export default ProfileForm;
