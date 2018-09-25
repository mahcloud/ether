import Markdown from "./readme.md";
import React from "react"; // eslint-disable-line no-unused-vars
import ReactMarkdown from "react-markdown";
import Style from "./readme.style";

const Readme = () => {
  return(
    <Style className="readme-page">
      <ReactMarkdown source={Markdown}/>
    </Style>
  );
};

export default Readme;
