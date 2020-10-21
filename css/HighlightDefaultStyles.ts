import css from "styled-jsx/css"

export const HighlightDefaultStyles = css.global`
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #f0f0f0;
  }
  .hljs,
  .hljs-subst {
    color: #444;
  }
  .hljs-comment {
    color: #888;
  }
  .hljs-attribute,
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta-keyword,
  .hljs-name,
  .hljs-selector-tag {
    font-weight: 700;
  }
  .hljs-deletion,
  .hljs-number,
  .hljs-quote,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-string,
  .hljs-template-tag,
  .hljs-type {
    color: #800;
  }
  .hljs-section,
  .hljs-title {
    color: #800;
    font-weight: 700;
  }
  .hljs-link,
  .hljs-regexp,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-symbol,
  .hljs-template-variable,
  .hljs-variable {
    color: #bc6060;
  }
  .hljs-literal {
    color: #78a960;
  }
  .hljs-addition,
  .hljs-built_in,
  .hljs-bullet,
  .hljs-code {
    color: #397300;
  }
  .hljs-meta {
    color: #1f7199;
  }
  .hljs-meta-string {
    color: #4d99bf;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
`
