import { NavLink } from "react-router-dom";
import "./CompanyCard.css";

/**
 * CompanyCard:
 *
 * Props: handle - string
 *        name - string
 *        description - string
 *        logoUrl - string
 *
 * State: none
 *
 * CompanyList -> CompanyCard -> NavLink
 */
function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <div className="CompanyCard">
      <NavLink to={`/companies/${handle}`}>
        <h1>{name}</h1>
        <p>{description}</p>
        {logoUrl !== null && <img src={logoUrl} alt={handle} />}
      </NavLink>
    </div>
  );
}

export default CompanyCard;
