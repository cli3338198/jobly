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
    // async function getJobs() {
    //   const jobsResults = await JoblyApi.getJobs();
    //   setJobs(jobsResults);
    // }

    // getJobs();
    search();
  }, []);

  /**Handle search submit. */
  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   // make the api call to companies
  //   const jobsResults = await JoblyApi.getJobs(
  //     searchTerm.length > 0 ? { title: searchTerm } : {}
  //   );
  //   setJobs(jobsResults);
  // }

  async function search() {
    const jobsResults = await JoblyApi.getJobs(
      searchTerm.length > 0 ? { title: searchTerm } : {}
    );
    setJobs(jobsResults);
  }

  function handleSubmit(evt) {
    return (value) => {
      evt.preventDefault();
      setSearchTerm(value);
    };
  }

  return (
    <div className="JobList">
      <SearchForm searchFor={search} />
      {jobs.map((j) => (
        <JobCard key={j.id} {...j} />
      ))}
    </div>
  );
}

export default JobList;
