import React from "react";
import { useParams } from "react-router-dom";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  return (
    <>
      {!keyword ? (
        
      )}
    </>
  )
};

export default HomeScreen;
