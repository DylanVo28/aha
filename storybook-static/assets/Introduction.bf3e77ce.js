import{r as d,M as x}from"./index.b20594f9.js";import{u as l}from"./index.6e598f88.js";import"./iframe.8d8c0cb6.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.712cc82f.js";import"./index.e850844b.js";import"./index.f1e20297.js";import"./index.4df17049.js";import"./index.67736049.js";var e={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=d.exports,h=Symbol.for("react.element"),g=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function c(s,t,o){var r,n={},a=null,p=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(p=t.ref);for(r in t)f.call(t,r)&&!j.hasOwnProperty(r)&&(n[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:h,type:s,key:a,ref:p,props:n,_owner:u.current}}i.Fragment=g;i.jsx=c;i.jsxs=c;(function(s){s.exports=i})(e);const k=""+new URL("code-brackets.9ef6443e.svg",import.meta.url).href,b=""+new URL("colors.ac9401f3.svg",import.meta.url).href,y=""+new URL("comments.f15a6837.svg",import.meta.url).href,w=""+new URL("direction.94a9917f.svg",import.meta.url).href,v=""+new URL("flow.275142c6.svg",import.meta.url).href,_=""+new URL("plugin.57148314.svg",import.meta.url).href,N=""+new URL("repo.fb4ece47.svg",import.meta.url).href,S=""+new URL("stackalt.2ad81543.svg",import.meta.url).href;function z(s={}){const{wrapper:t}=Object.assign({},l(),s.components);return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},l(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(x,{title:"Example/Introduction"}),`
`,e.exports.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.exports.jsx(r.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),`
`,e.exports.jsxs(r.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e.exports.jsx(r.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,e.exports.jsxs(r.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e.exports.jsx(r.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,e.exports.jsx(r.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:e.exports.jsx(r.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,e.exports.jsx("div",{className:"subheading",children:"Configure"}),`
`,e.exports.jsxs("div",{className:"link-list",children:[e.exports.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e.exports.jsx("img",{src:_,alt:"plugin"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),e.exports.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[e.exports.jsx("img",{src:S,alt:"Build"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),e.exports.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[e.exports.jsx("img",{src:b,alt:"colors"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),e.exports.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e.exports.jsx("img",{src:v,alt:"flow"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,e.exports.jsx("div",{className:"subheading",children:"Learn"}),`
`,e.exports.jsxs("div",{className:"link-list",children:[e.exports.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e.exports.jsx("img",{src:N,alt:"repo"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),e.exports.jsxs("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e.exports.jsx("img",{src:w,alt:"direction"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),e.exports.jsxs("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e.exports.jsx("img",{src:k,alt:"code"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),e.exports.jsxs("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e.exports.jsx("img",{src:y,alt:"comments"}),e.exports.jsx("span",{children:e.exports.jsxs(r.p,{children:[e.exports.jsx("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,e.exports.jsx("div",{className:"tip-wrapper",children:e.exports.jsxs(r.p,{children:[e.exports.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e.exports.jsx("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}export{z as default};
//# sourceMappingURL=Introduction.bf3e77ce.js.map
