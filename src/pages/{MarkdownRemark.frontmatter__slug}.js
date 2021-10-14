import * as React from "react";
import { graphql } from "gatsby";
import { privacyPage, header, wrapper } from "../components/layout.module.css";

export default function MarkdownTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  React.useEffect(() => {
    document.body.style.overflowY = "auto";
  });
  return (
    <main className={privacyPage}>
      <title>Turyam</title>
      <header className={header}>turyam</header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
