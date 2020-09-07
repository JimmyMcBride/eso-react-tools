import { css } from "styled-components";

export const baseStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Bellota|Ubuntu+Mono|Open+Sans|Ubuntu&display=swap");
  @import "markdown.css";

  /* Variables */
  :root {
    --gray0: #f7fafc;
    --gray1: #edf2f7;
    --gray2: #e2e8f0;
    --gray3: #cbd5e0;
    --gray4: #a0aec0;
    --gray5: #718096;
    --gray6: #4a5568;
    --gray7: #2d3748;
    --gray8: #1a202c;
    --gray9: #171923;

    --red0: #fff5f5;
    --red1: #fed7d7;
    --red2: #feb2b2;
    --red3: #fc8181;
    --red4: #f56565;
    --red5: #e53e3e;
    --red6: #c53030;
    --red7: #9b2c2c;
    --red8: #822727;
    --red9: #63171b;

    --orange0: #fffaf0;
    --orange1: #feebc8;
    --orange2: #fbd38d;
    --orange3: #f6ad55;
    --orange4: #ed8936;
    --orange5: #dd6b20;
    --orange6: #c05621;
    --orange7: #9c4221;
    --orange8: #7b341e;
    --orange9: #652b19;

    --yellow0: #fffff0;
    --yellow1: #fefcbf;
    --yellow2: #faf089;
    --yellow3: #f6e05e;
    --yellow4: #ecc94b;
    --yellow5: #d69e2e;
    --yellow6: #b7791f;
    --yellow7: #975a16;
    --yellow8: #744210;
    --yellow9: #5f370e;

    --green0: #f0fff4;
    --green1: #c6f6d5;
    --green2: #9ae6b4;
    --green3: #68d391;
    --green4: #48bb78;
    --green5: #38a169;
    --green6: #2f855a;
    --green7: #276749;
    --green8: #22543d;
    --green9: #1c4532;

    --teal0: #e6fffa;
    --teal1: #b2f5ea;
    --teal2: #81e6d9;
    --teal3: #4fd1c5;
    --teal4: #38b2ac;
    --teal5: #319795;
    --teal5: #2c7a7b;
    --teal7: #285e61;
    --teal8: #234e52;
    --teal9: #1d4044;

    --blue0: #ebf8ff;
    --blue1: #ceedff;
    --blue2: #90cdf4;
    --blue3: #63b3ed;
    --blue4: #4299e1;
    --blue5: #3182ce;
    --blue6: #2a69ac;
    --blue7: #1e4e8c;
    --blue8: #153e75;
    --blue9: #1a365d;

    --cyan0: #edfdfd;
    --cyan1: #c4f1f9;
    --cyan2: #9decf9;
    --cyan3: #76e4f7;
    --cyan4: #0bc5ea;
    --cyan5: #00b5d8;
    --cyan6: #00a3c4;
    --cyan7: #0987a0;
    --cyan8: #086f83;
    --cyan9: #065666;

    --purple0: #faf5ff;
    --purple1: #e9d8fd;
    --purple2: #d6bcfa;
    --purple3: #b794f4;
    --purple4: #9f7aea;
    --purple5: #805ad5;
    --purple6: #6b46c1;
    --purple7: #553c9a;
    --purple8: #44337a;
    --purple9: #322659;

    --pink0: #fff5f7;
    --pink1: #fed7e2;
    --pink2: #fbb6ce;
    --pink3: #f687b3;
    --pink4: #ed64a6;
    --pink5: #d53f8c;
    --pink6: #b83280;
    --pink7: #97266d;
    --pink8: #702459;
    --pink9: #521b41;

    --whiteAlpha0: rgba(255, 255, 255, 0.04);
    --whiteAlpha1: rgba(255, 255, 255, 0.06);
    --whiteAlpha2: rgba(255, 255, 255, 0.08);
    --whiteAlpha3: rgba(255, 255, 255, 0.16);
    --whiteAlpha4: rgba(255, 255, 255, 0.24);
    --whiteAlpha5: rgba(255, 255, 255, 0.36);
    --whiteAlpha6: rgba(255, 255, 255, 0.48);
    --whiteAlpha7: rgba(255, 255, 255, 0.64);
    --whiteAlpha8: rgba(255, 255, 255, 0.8);
    --whiteAlpha9: rgba(255, 255, 255, 0.92);

    --blackAlpha0: rgba(0, 0, 0, 0.04);
    --blackAlpha1: rgba(0, 0, 0, 0.06);
    --blackAlpha2: rgba(0, 0, 0, 0.08);
    --blackAlpha3: rgba(0, 0, 0, 0.16);
    --blackAlpha4: rgba(0, 0, 0, 0.24);
    --blackAlpha5: rgba(0, 0, 0, 0.36);
    --blackAlpha6: rgba(0, 0, 0, 0.48);
    --blackAlpha7: rgba(0, 0, 0, 0.64);
    --blackAlpha8: rgba(0, 0, 0, 0.8);
    --blackAlpha9: rgba(0, 0, 0, 0.92);
  }

  html {
    font-size: 62.5%;
    line-height: 1.4;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  html body {
    font-size: 1.6rem;
  }

  html,
  body {
    height: 100%;
  }

  html body p {
    margin: 0.4rem;
    line-height: 1.4;
  }

  html body h1,
  html body h2,
  html body h3,
  html body h4,
  html body h5,
  html body h6 {
    line-height: 1.2;
    margin: 0.4rem;
  }

  html body h1 {
    font-size: 3.4rem;
  }

  html body h2 {
    font-size: 3.2rem;
  }

  html body h3 {
    font-size: 3rem;
  }

  html body h4 {
    font-size: 2.8rem;
  }

  html body h5 {
    font-size: 2.6rem;
  }

  html body h6 {
    font-size: 2.4rem;
  }

  html body a {
    text-decoration: none;
    color: var(--blue6);
  }

  html body a:hover {
    color: var(--blue7);
  }

  .hidden {
    display: none;
  }

  html body img {
    border-radius: 0.4rem;
  }

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  /* Document
   ========================================================================== */
  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
  html {
    /* line-height: 1.15; */
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
  }

  /* Sections
   ========================================================================== */
  /**
 * Remove the margin in all browsers.
 */
  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    /* font-size: 2em; */
    margin: 0.67em 0;
  }

  /* Grouping content
   ========================================================================== */
  /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
  hr {
    box-sizing: content-box;
    /* 1 */
    height: 0;
    /* 1 */
    overflow: visible;
    /* 2 */
  }

  pre {
    font-family: "Ubuntu Mono", monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
  }

  /* Text-level semantics
   ========================================================================== */
  /**
 * Remove the gray background on active links in IE 10.
 */
  a {
    background-color: transparent;
  }

  /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
  abbr[title] {
    border-bottom: none;
    /* 1 */
    text-decoration: underline;
    /* 2 */
    text-decoration: underline dotted;
    /* 2 */
  }

  /**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: "Ubuntu Mono", monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
  }

  /**
 * Add the correct font size in all browsers.
 */
  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
   ========================================================================== */
  /**
 * Remove the border on images inside links in IE 10.
 */
  img {
    border-style: none;
  }

  /* Forms
   ========================================================================== */
  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    /* 1 */
    font-size: 100%;
    /* 1 */
    line-height: 1.4;
    /* 1 */
    margin: 0;
    /* 2 */
  }

  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
 * Remove the inner border and padding in Firefox.
 */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
 * Restore the focus styles unset by the previous rule.
 */
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
 * Correct the padding in Firefox.
 */
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    /* 1 */
    color: inherit;
    /* 2 */
    display: table;
    /* 1 */
    max-width: 100%;
    /* 1 */
    padding: 0;
    /* 3 */
    white-space: normal;
    /* 1 */
  }

  /**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
  progress {
    vertical-align: baseline;
  }

  /**
 * Remove the default vertical scrollbar in IE 10+.
 */
  textarea {
    overflow: auto;
  }

  /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
  }

  /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
  [type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
  }

  /**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
  }

  /* Interactive
   ========================================================================== */
  /*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
  details {
    display: block;
  }

  /*
 * Add the correct display in all browsers.
 */
  summary {
    display: list-item;
  }

  /* Misc
   ========================================================================== */
  /**
 * Add the correct display in IE 10+.
 */
  template {
    display: none;
  }

  /**
 * Add the correct display in IE 10.
 */
  [hidden] {
    display: none;
  }
`;
