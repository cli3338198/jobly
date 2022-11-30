import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./api";

/**
 * CompanyList:
 *
 * Props: none
 *
 * State: companies - list of companies
 *        searchTerm - string
 *
 * Routes -> CompanyList -> { SearchForm, CompanyCard }
 */
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // make api call to get all companies
    async function getCompanies() {
      const companiesResults = await JoblyApi.getCompanies();
      setCompanies(companiesResults);
    }

    getCompanies();
  }, []);

  /**Set the searchterm. */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /**Handle search submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    // make the api call to companies
    const companiesResults = await JoblyApi.getCompanies(
      searchTerm.length > 0 ? {nameLike: searchTerm} : {}
    );
    // Old code:
    // if (searchTerm.length > 0) {
    //   companiesResults = await JoblyApi.getCompanies({
    //     nameLike: searchTerm,
    //   });
    // } else {
    //   companiesResults = await JoblyApi.getCompanies();
    // }
    setCompanies(companiesResults);
  }

  return (
    <div className="CompanyList">
      <SearchForm
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {companies.map((c) => (
        <CompanyCard key={c.name} {...c} />
      ))}
    </div>
  );
}

export default CompanyList;
