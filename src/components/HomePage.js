import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  // fetch data for posts
 
  useDocumentTitle("Underreacted | Home");
  const{isLoaded,data}=useQuery("http://localhost:4000/posts")
useDocumentTitle()



  

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={data} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
