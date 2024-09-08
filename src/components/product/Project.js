import React, { useState } from "react";
import { Image } from "react-bootstrap";
import LoadingProject from "./../loading/LoadingProject";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const itemsPerPage = 2;

const Project = ({ project }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(project.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = project.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="ProjectContainer">
        {currentItems.length !== 0 ? (
          currentItems.map((element) => (
            <div key={element.id} className="mb-2 project_box">
              <div className="projectBox">
                <Image
                  loading="lazy"
                  className="projectImg"
                  src={element.projectImg}
                  alt={element.title}
                  fluid
                />
                <div className="projectInfo">
                  <h6 className="mainTitle">{element.category}</h6>
                  <p className="mainTitle">{element.title}</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.projectLink}
                    className="mainBtn1"
                  >
                    Show More
                  </a>
                </div> 
              </div>
            </div>
          ))
        ) : (
          <div className='No_Project'>
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/oiiqgosg.json"
              trigger="hover"
              colors="primary:#229799"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
            <h1> No Project </h1>
          </div>
        )}
      </div>

      <Stack spacing={2} mt={3} mb={2} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#48CFCB",
            },
            "& .Mui-selected": {
              backgroundColor: "#48CFCB",
              color: "#fff",
            },
          }}
          size="small"
        />
      </Stack>
    </div>
  );
};

export default Project;
