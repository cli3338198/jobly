import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyApi from "./api";

/**
 * JobList:
 *
 * Props: None
 *
 * State: jobs - list of jobs
 *        searchTerm - string
 *
 * Routes -> JobList -> { JobCard, SearchForm }
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // make api call to get all companies
    async function getJobs() {
      const jobsResults = await JoblyApi.getJobs();
      setJobs(jobsResults);
    }

    getJobs();
  }, []);

  /**Set the searchterm. */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /**Handle search submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    // make the api call to companies
    const jobsResults = await JoblyApi.getJobs(
      searchTerm.length > 0 ? {title: searchTerm} : {}
    );
    // Old code:
    // if (searchTerm.length > 0) {
    //   jobsResults = await JoblyApi.getJobs({
    //     title: searchTerm,
    //   });
    // } else {
    //   jobsResults = await JoblyApi.getJobs();
    // }
    setJobs(jobsResults);
  }

  return (
    <div className="JobList">
      <SearchForm
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {jobs.map((j) => (
        <JobCard key={j.id} {...j} />
      ))}
    </div>
  );
}

export default JobList;
