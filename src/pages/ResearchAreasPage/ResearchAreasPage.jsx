import React from "react";
import { useParams } from "react-router-dom";

const ResearchAreaPage = () => {
  const { area } = useParams();

  return (
    <div>
      <h1>{area ? area : "Research Areas"}</h1>
      <p>Details about the research area will go here.</p>
    </div>
  );
};

export default ResearchAreaPage;
