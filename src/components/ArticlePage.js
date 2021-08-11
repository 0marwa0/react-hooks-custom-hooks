import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeEmojiList } from "../utils";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function ArticlePage() {
  // fetch data for a post
  const { id } = useParams();

  const url = `http://localhost:4000/posts/${id}`;

const {isLoaded,data}=useQuery(url)
  // set the document title
  const pageTitle = data ? `Underreacted | ${data.title}` : "Underreacted";

  useDocumentTitle(pageTitle);
  useEffect(() => { 
    
    
  }, [pageTitle]);

  if (!isLoaded) return <h3>Loading...</h3>;

  const { minutes, title, date, preview } = data;
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default ArticlePage;
