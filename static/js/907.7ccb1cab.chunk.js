"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[907],{3907:function(n,e,t){t.r(e),t.d(e,{default:function(){return yn}});var r=t(4942),a=t(1413),l=t(9439),i=t(2791),o=t(168),s=t(7924);var c=t.p+"static/media/search.f40218f957a1954f6b3cc31fe50119a4.svg";var d,u,p=t.p+"static/media/toggle.44956463d2686e9744e02374ed696b95.svg",f=s.ZP.div(d||(d=(0,o.Z)(["\n  background: #f8f8f8;\n  height: 100vh;\n  padding: 32px 16px;\n\n  @media only screen and (min-width: 768px) {\n    padding: 64px 32px;\n  }\n\n  .FilterContainer {\n    @media only screen and (min-width: 1440px) {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n\n  .Form {\n    position: relative;\n    display: grid;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {\n      display: flex;\n    }\n  }\n\n  .CountContainer {\n    @media only screen and (min-width: 768px) {\n      display: flex;\n      align-items: end;\n      gap: 16px;\n\n      margin-top: 30px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 0;\n      align-items: center;\n    }\n  }\n\n  .SearchContainer {\n    position: relative;\n\n    &::after {\n      content: url(",");\n      position: absolute;\n      top: 14px;\n      right: 24px;\n    }\n  }\n\n  .custom-input {\n    position: relative;\n\n    &::after {\n      content: url(",');\n      position: absolute;\n      top: 14px;\n      right: 24px;\n    }\n  }\n\n  .Input {\n    border: 1px solid rgba(18, 20, 23, 0.1);\n    border-radius: 15px;\n    padding: 12px 24px;\n    width: 100%;\n    height: 48px;\n    box-sizing: border-box;\n\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: #121417;\n\n    &:focus {\n      border-color: transparent;\n      outline: none;\n    }\n  }\n\n  .Input[id="filters"] {\n    @media only screen and (min-width: 768px) {\n      width: 274px;\n    }\n  }\n\n  .Input[id="statistics"] {\n    @media only screen and (min-width: 768px) {\n      width: 164px;\n    }\n  }\n\n  .dropdown {\n    z-index: 1000;\n    position: absolute;\n    margin-top: 5px;\n    display: none;\n    gap: 8px;\n\n    border-radius: 15px;\n    padding: 12px 24px;\n    width: 343px;\n    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);\n    background: #fff;\n  }\n\n  .ListItem {\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    border-radius: 6px;\n\n    &:hover {\n      background-color: #85aa9f;\n    }\n  }\n\n  .CountWord {\n    margin-top: 50px;\n    font-weight: 500;\n    font-size: 14px;\n    color: rgba(18, 20, 23, 0.5);\n\n    align-items: center;\n    display: flex;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 0px;\n    }\n  }\n\n  .NumberCountWord {\n    font-weight: 500;\n    font-size: 20px;\n    color: #121417;\n  }\n\n  .ButtonList {\n    margin-top: 16px;\n    display: flex;\n    gap: 16px;\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 0;\n    }\n  }\n\n  .ButtonItem {\n    display: flex;\n    gap: 8px;\n    cursor: pointer;\n  }\n\n  .RadioButtonList {\n    position: absolute;\n    top: 120px;\n    display: grid;\n    gap: 34px;\n    left: 14px;\n\n    @media only screen and (min-width: 768px) {\n      position: static;\n      margin-left: 20px;\n    }\n  }\n\n  .RadioButtonItem {\n    position: relative;\n    display: flex;\n    gap: 8px;\n\n    font-weight: 400;\n    font-size: 12px;\n    text-align: center;\n    align-items: center;\n  }\n\n  .RadioButton {\n    height: 12px;\n    width: 12px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    outline: none;\n    cursor: pointer;\n\n    &:before {\n      content: "";\n      position: absolute;\n      top: 50%;\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      transform: translate(-50%, -50%);\n      background-color: #fff;\n      border: 3px solid #8a8a89;\n    }\n\n    &:checked:before {\n      border-color: #85aa9f;\n    }\n\n    &:checked::after {\n      content: "";\n      position: absolute;\n      top: 50%;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background-color: #85aa9f;\n      transform: translate(-50%, -50%);\n      visibility: visible;\n    }\n  }\n\n  .TableContainer {\n    margin-top: 40px;\n    @media only screen and (min-width: 768px) {\n      padding: 18px;\n      background: #fcfcfc;\n      border-radius: 15px;\n      margin-top: 24px;\n    }\n  }\n\n  .Table {\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: fixed;\n\n    border-radius: 8px;\n    overflow: hidden;\n  }\n\n  .IconCountry {\n    display: none;\n\n    @media only screen and (min-width: 768px) {\n      display: inline-flex;\n    }\n  }\n\n  .TableHeaderItem {\n    padding: 16px;\n    border-bottom: 1px solid #dbdbdb;\n    border-right: 1px solid #dbdbdb;\n    text-align: left;\n\n    font-weight: 500;\n    font-size: 16px;\n\n    overflow-wrap: break-word;\n\n    @media only screen and (min-width: 1440px) {\n      font-size: 20px;\n    }\n  }\n\n  .TableImagContainer {\n    @media only screen and (min-width: 768px) {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      justify-content: space-between;\n    }\n  }\n\n  .TableHeader {\n    background-color: #f2f2f2;\n  }\n\n  /* .WordList:nth-child(even) {\n    background-color: #f2f2f2;\n  } */\n\n  .WordList:nth-child(odd) {\n    background-color: #ffffff;\n  }\n'])),c,p),h=["title","titleId"];function m(){return m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},m.apply(this,arguments)}function g(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function x(n,e){var t=n.title,r=n.titleId,a=g(n,h);return i.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,u||(u=i.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 4.167v11.666M4.167 10h11.666"})))}var b,v=i.forwardRef(x),y=(t.p,["title","titleId"]);function w(){return w=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},w.apply(this,arguments)}function j(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function O(n,e){var t=n.title,r=n.titleId,a=j(n,y);return i.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,b||(b=i.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.333 10h13.334m0 0-3.334-3.333M16.667 10l-3.334 3.333"})))}var I,E,k=i.forwardRef(O),N=(t.p,["title","titleId"]);function P(){return P=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},P.apply(this,arguments)}function C(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function Z(n,e){var t=n.title,r=n.titleId,a=C(n,N);return i.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,I||(I=i.createElement("g",{clipPath:"url(#a)"},i.createElement("path",{fill:"#FFDA44",d:"M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"}),i.createElement("path",{fill:"#338AF3",d:"M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16"}))),E||(E=i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{fill:"#fff",d:"M0 0h32v32H0z"})))))}var L,M,S=i.forwardRef(Z),B=(t.p,["title","titleId"]);function T(){return T=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},T.apply(this,arguments)}function A(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function F(n,e){var t=n.title,r=n.titleId,a=A(n,B);return i.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,L||(L=i.createElement("g",{clipPath:"url(#a)"},i.createElement("path",{fill:"#F0F0F0",d:"M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"}),i.createElement("path",{fill:"#0052B4",d:"M3.308 6.259A15.942 15.942 0 0 0 .55 11.826h8.324L3.308 6.26ZM31.449 11.826a15.944 15.944 0 0 0-2.756-5.567l-5.568 5.567h8.324ZM.551 20.174a15.943 15.943 0 0 0 2.757 5.567l5.567-5.567H.55ZM25.741 3.308A15.943 15.943 0 0 0 20.174.55v8.324l5.567-5.567ZM6.259 28.692a15.944 15.944 0 0 0 5.567 2.757v-8.324L6.26 28.692ZM11.826.551A15.943 15.943 0 0 0 6.26 3.308l5.567 5.567V.55ZM20.174 31.449a15.946 15.946 0 0 0 5.567-2.757l-5.567-5.567v8.324ZM23.125 20.174l5.568 5.567a15.944 15.944 0 0 0 2.756-5.567h-8.324Z"}),i.createElement("path",{fill:"#D80027",d:"M31.865 13.913H18.087V.135a16.16 16.16 0 0 0-4.174 0v13.778H.135a16.16 16.16 0 0 0 0 4.174h13.778v13.778a16.166 16.166 0 0 0 4.174 0V18.087h13.778a16.166 16.166 0 0 0 0-4.174Z"}),i.createElement("path",{fill:"#D80027",d:"m20.174 20.174 7.14 7.14c.328-.329.641-.672.94-1.027l-6.113-6.113h-1.967ZM11.826 20.174l-7.14 7.14c.329.328.672.641 1.027.94l6.113-6.113v-1.967ZM11.826 11.826l-7.14-7.14c-.328.329-.641.672-.94 1.027l6.113 6.113h1.967ZM20.174 11.826l7.14-7.14a16.017 16.017 0 0 0-1.027-.94l-6.113 6.113v1.967Z"}))),M||(M=i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{fill:"#fff",d:"M0 0h32v32H0z"})))))}var R,H,z=i.forwardRef(F),W=(t.p,t(4420)),D=t(3604),q=t(763),V=["title","titleId"];function _(){return _=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_.apply(this,arguments)}function J(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function G(n,e){var t=n.title,r=n.titleId,a=J(n,V);return i.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,R||(R=i.createElement("path",{fill:"#121417",d:"m11.726 12 .94-.94L9.613 8l3.053-3.06-.94-.94-4 4 4 4Z"})),H||(H=i.createElement("path",{fill:"#121417",d:"m7.333 12 .94-.94L5.22 8l3.053-3.06-.94-.94-4 4 4 4Z"})))}var K,Q=i.forwardRef(G),U=(t.p,["title","titleId"]);function X(){return X=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},X.apply(this,arguments)}function Y(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function $(n,e){var t=n.title,r=n.titleId,a=Y(n,U);return i.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,K||(K=i.createElement("path",{fill:"#121417",d:"M6.94 4 6 4.94 9.053 8 6 11.06l.94.94 4-4-4-4Z"})))}var nn,en,tn=i.forwardRef($),rn=(t.p,["title","titleId"]);function an(){return an=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},an.apply(this,arguments)}function ln(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function on(n,e){var t=n.title,r=n.titleId,a=ln(n,rn);return i.createElement("svg",an({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,nn||(nn=i.createElement("path",{fill:"#85AA9F",d:"m4.274 4-.94.94L6.387 8l-3.053 3.06.94.94 4-4-4-4Z"})),en||(en=i.createElement("path",{fill:"#85AA9F",d:"m8.667 4-.94.94L10.78 8l-3.053 3.06.94.94 4-4-4-4Z"})))}var sn,cn=i.forwardRef(on),dn=(t.p,["title","titleId"]);function un(){return un=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},un.apply(this,arguments)}function pn(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function fn(n,e){var t=n.title,r=n.titleId,a=pn(n,dn);return i.createElement("svg",un({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,sn||(sn=i.createElement("path",{fill:"#121417",d:"m10.06 12 .94-.94L7.947 8 11 4.94 10.06 4l-4 4 4 4Z"})))}var hn,mn=i.forwardRef(fn),gn=(t.p,s.ZP.ul(hn||(hn=(0,o.Z)(["\n  /* flex-wrap: wrap; */\n  margin-top: 32px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n\n  .PageButton {\n    border: 1px solid rgba(18, 20, 23, 0.1);\n    border-radius: 8px;\n    min-width: 32px;\n    height: 32px;\n    cursor: pointer;\n\n    justify-content: center;\n    display: flex;\n    align-items: center;\n\n    font-weight: 600;\n    font-size: 13px;\n\n    &:hover {\n      background: #85aa9f;\n      color: #fff;\n    }\n  }\n"])))),xn=t(184);function bn(n){var e=n.data,t=n.formData,r=n.setFormData,l=Array.from({length:e.totalPages},(function(n,e){return e+1})),i=function(n){r((function(e){return(0,a.Z)((0,a.Z)({},e),{},{page:n})}))},o=t.page-1,s=Math.max(Math.min(o-Math.floor(1.5),l.length-3),0),c=l.slice(s,s+3);return(0,xn.jsxs)(gn,{children:[(0,xn.jsx)("li",{className:"PageButton",onClick:function(){return i(1)},children:(0,xn.jsx)(Q,{})}),(0,xn.jsx)("li",{className:"PageButton",onClick:function(){return t.page>1?i(t.page-1):null},children:(0,xn.jsx)(mn,{})}),s>0&&(0,xn.jsx)("li",{className:"PageButton",children:"..."},"startEllipsis"),c.map((function(n,e){return(0,xn.jsx)("li",{style:{background:n===t.page?"#85aa9f":"none",color:n===t.page?"#fcfcfc":"#121417"},className:"PageButton",onClick:function(){return i(n)},value:t.page,children:n},e)})),s+3<l.length&&(0,xn.jsx)("li",{className:"PageButton",children:"..."},"endEllipsis"),(0,xn.jsx)("li",{className:"PageButton",onClick:function(){return t.page<e.totalPages?i(t.page+1):null},children:(0,xn.jsx)(tn,{})}),(0,xn.jsx)("li",{className:"PageButton",onClick:function(){return i(e.totalPages)},children:(0,xn.jsx)(cn,{})})]})}var vn=t(9601);function yn(){var n=(0,W.I0)(),e=(0,i.useState)({filters:"",statistics:"",isIrregular:void 0,page:1}),t=(0,l.Z)(e,2),o=t[0],s=t[1],c=(0,i.useState)(!1),d=(0,l.Z)(c,2),u=d[0],p=d[1],h=((0,i.useEffect)((function(){var n=document.querySelector(".custom-input"),e=n.querySelector("input"),t=n.querySelector(".dropdown"),r=t.querySelectorAll("li"),a=function(){t.style.display="grid"},l=function(n){e.value=n.textContent,t.style.display="none"},i=function(e){n.contains(e.target)||(t.style.display="none")};return e.addEventListener("click",a),r.forEach((function(n){n.addEventListener("click",(function(){return l(n)}))})),document.addEventListener("click",i),function(){e.removeEventListener("click",a),r.forEach((function(n){return n.removeEventListener("click",l)})),document.removeEventListener("click",i)}}),[]),{CategoriesItem:["Verb","Participle","Noun","Adjective","Pronoun","Numerals","Adverb","Preposition","Conjuction","Phrasal verb","Functional phrase"]}).CategoriesItem;console.log(h);var m=(0,W.v9)((function(n){return n.data.words})),g=(0,W.v9)((function(n){return n.data.categories})),x=(0,W.v9)((function(n){return n.auth.token})),b=(0,i.useRef)((0,q.debounce)((function(e){n((0,D.d)(e))}),300));(0,i.useEffect)((function(){b.current(o),n((0,D.t)())}),[n,o]);var y=function(n){var e=n.target,t=e.name,l=e.value;s((0,a.Z)((0,a.Z)({},o),{},(0,r.Z)({},t,l.trim()))),console.log("values=>",o,u),console.log(x)},w=function(n){s((function(e){return(0,a.Z)((0,a.Z)({},e),{},{isIrregular:n})}))};return(0,xn.jsxs)(f,{children:[(0,xn.jsxs)("div",{className:"FilterContainer",children:[(0,xn.jsxs)("form",{className:"Form",children:[(0,xn.jsx)("div",{className:"SearchContainer",children:(0,xn.jsx)("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:o.filters,onChange:y})}),(0,xn.jsxs)("div",{className:"custom-input",children:[(0,xn.jsx)("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:o.statistics,onChange:y}),(0,xn.jsx)("ul",{className:"dropdown",children:g&&g.map((function(n){return(0,xn.jsx)("li",{className:"ListItem",onClick:function(){return e=n,s((function(n){return(0,a.Z)((0,a.Z)({},n),{},{statistics:e})})),void p("verb"===e);var e},children:n},n)}))})]}),(0,xn.jsxs)("ul",{className:"RadioButtonList",style:{display:u?"flex":"none"},children:[(0,xn.jsxs)("li",{className:"RadioButtonItem",children:[(0,xn.jsx)("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:function(){return w(!0)},value:o.isIrregular,checked:!0===o.isIrregular}),"Regular"]}),(0,xn.jsxs)("li",{className:"RadioButtonItem",children:[(0,xn.jsx)("input",{className:"RadioButton",id:"reason",name:"reason",type:"radio",onChange:function(){return w(!1)},value:o.isIrregular,checked:!1===o.isIrregular}),"Irregular"]})]})]}),(0,xn.jsxs)("div",{className:"CountContainer",children:[(0,xn.jsxs)("p",{className:"CountWord",children:["To study:",(0,xn.jsx)("span",{className:"NumberCountWord",children:m.results.length})]}),(0,xn.jsxs)("ul",{className:"ButtonList",children:[(0,xn.jsxs)("li",{className:"ButtonItem",onClick:function(){return n((0,vn.JM)())},children:["Add word ",(0,xn.jsx)(v,{})]}),(0,xn.jsxs)("li",{className:"ButtonItem",children:["Train oneself ",(0,xn.jsx)(k,{})]})]})]})]}),(0,xn.jsx)("div",{className:"TableContainer",children:(0,xn.jsxs)("table",{className:"Table",children:[(0,xn.jsx)("thead",{className:"TableHeader",children:(0,xn.jsxs)("tr",{className:"TableHeaderList",children:[(0,xn.jsx)("th",{className:"TableHeaderItem",children:(0,xn.jsxs)("div",{className:"TableImagContainer",children:["Word ",(0,xn.jsx)(z,{className:"IconCountry"})]})}),(0,xn.jsx)("th",{className:"TableHeaderItem",children:(0,xn.jsxs)("div",{className:"TableImagContainer",children:["Translation ",(0,xn.jsx)(S,{className:"IconCountry"})]})}),(0,xn.jsx)("th",{className:"TableHeaderItem",children:"Category"}),(0,xn.jsx)("th",{className:"TableHeaderItem",children:"Progress"})]})}),m.results&&m.results.map((function(n,e){var t=n.en,r=n.ua,a=n.category,l=n.isIrregular;return(0,xn.jsx)("tbody",{children:(0,xn.jsxs)("tr",{className:"WordList",children:[(0,xn.jsx)("td",{className:"TableHeaderItem",children:t}),(0,xn.jsx)("td",{className:"TableHeaderItem",children:r}),(0,xn.jsx)("td",{className:"TableHeaderItem",children:a}),(0,xn.jsx)("td",{className:"TableHeaderItem",children:l?"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438\u0439":"\u041d\u0435\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438\u0439"})]})},e)}))]})}),m.totalPages>1&&(0,xn.jsx)(bn,{data:m,formData:o,setFormData:s})]})}}}]);
//# sourceMappingURL=907.7ccb1cab.chunk.js.map