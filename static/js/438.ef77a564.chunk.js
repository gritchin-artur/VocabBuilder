"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[438],{2438:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,a=t(4942),r=t(1413),o=t(9439),s=t(2791),d=t(3410),l=t(4420),p=t(3604),c=t(9373),u=t(763),x=t(9850),m=t(1087),h=t(6137),g=t(168),f=t(7924),b=t(8516),w=t(10),y=f.ZP.div(i||(i=(0,g.Z)(["\n  background: #f8f8f8;\n  height: 100vh;\n  padding: 32px 16px;\n\n  @media only screen and (min-width: 768px) {\n    padding: 64px 32px;\n  }\n\n  .FilterContainer {\n    @media only screen and (min-width: 1440px) {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n\n  .Form {\n    position: relative;\n    display: grid;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {\n      display: flex;\n    }\n  }\n\n  .CountContainer {\n    @media only screen and (min-width: 768px) {\n      display: flex;\n      align-items: end;\n      gap: 16px;\n\n      margin-top: 30px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 0;\n      align-items: center;\n    }\n  }\n\n  .SearchContainer {\n    position: relative;\n\n    &::after {\n      content: url(",");\n      position: absolute;\n      top: 14px;\n      right: 24px;\n    }\n  }\n\n  .custom-input {\n    position: relative;\n\n    &::after {\n      content: url(",');\n      position: absolute;\n      top: 14px;\n      right: 24px;\n    }\n  }\n\n  .Input {\n    border: 1px solid rgba(18, 20, 23, 0.1);\n    border-radius: 15px;\n    padding: 12px 24px;\n    width: 100%;\n    height: 48px;\n    box-sizing: border-box;\n\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: #121417;\n\n    &:focus {\n      border-color: transparent;\n      outline: none;\n    }\n  }\n\n  .Input[id="filters"] {\n    @media only screen and (min-width: 768px) {\n      width: 274px;\n    }\n  }\n\n  .Input[id="statistics"] {\n    @media only screen and (min-width: 768px) {\n      width: 164px;\n    }\n  }\n\n  .dropdown {\n    z-index: 1000;\n    position: absolute;\n    margin-top: 5px;\n    display: none;\n    gap: 8px;\n\n    border-radius: 15px;\n    padding: 12px 24px;\n    width: 343px;\n    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);\n    background: #fff;\n  }\n\n  .ListItem {\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    border-radius: 6px;\n\n    &:hover {\n      background-color: #85aa9f;\n    }\n  }\n\n  .CountWord {\n    margin-top: 50px;\n    font-weight: 500;\n    font-size: 14px;\n    color: rgba(18, 20, 23, 0.5);\n\n    align-items: center;\n    display: flex;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 0px;\n    }\n  }\n\n  .NumberCountWord {\n    font-weight: 500;\n    font-size: 20px;\n    color: #121417;\n  }\n\n  .ButtonList {\n    margin-top: 16px;\n    display: flex;\n    gap: 16px;\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 0;\n    }\n  }\n\n  .ButtonItem {\n    text-decoration: none;\n    display: flex;\n    gap: 8px;\n    cursor: pointer;\n    color: #121417;\n  }\n\n  .RadioButtonList {\n    position: absolute;\n    top: 120px;\n    display: grid;\n    gap: 34px;\n    left: 14px;\n\n    @media only screen and (min-width: 768px) {\n      position: static;\n      margin-left: 20px;\n    }\n  }\n\n  .RadioButtonItem {\n    position: relative;\n    display: flex;\n    gap: 8px;\n\n    font-weight: 400;\n    font-size: 12px;\n    text-align: center;\n    align-items: center;\n  }\n\n  .RadioButton {\n    height: 12px;\n    width: 12px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    outline: none;\n    cursor: pointer;\n\n    &:before {\n      content: "";\n      position: absolute;\n      top: 50%;\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      transform: translate(-50%, -50%);\n      background-color: #fff;\n      border: 3px solid #8a8a89;\n    }\n\n    &:checked:before {\n      border-color: #85aa9f;\n    }\n\n    &:checked::after {\n      content: "";\n      position: absolute;\n      top: 50%;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background-color: #85aa9f;\n      transform: translate(-50%, -50%);\n      visibility: visible;\n    }\n  }\n\n  .TableContainer {\n    margin-top: 40px;\n    @media only screen and (min-width: 768px) {\n      padding: 18px;\n      background: #fcfcfc;\n      border-radius: 15px;\n      margin-top: 24px;\n    }\n  }\n'])),b.Z,w.Z),v=t(184);function j(){var n=(0,l.I0)(),e=(0,s.useState)({filters:"",statistics:"",isIrregular:void 0,page:1}),t=(0,o.Z)(e,2),i=t[0],g=t[1],f=(0,s.useState)(!1),b=(0,o.Z)(f,2),w=b[0],j=b[1],C=(0,c._)().categories,N=(0,l.v9)((function(n){return n.data.allWords})),I=(0,s.useRef)((0,u.debounce)((function(e){n((0,p.dN)(e))}),300));(0,s.useEffect)((function(){I.current(i),n((0,p.tG)())}),[n,i,N]);var k=function(n){var e=n.target,t=e.name,o=e.value;g((0,r.Z)((0,r.Z)({},i),{},(0,a.Z)({},t,o.trim())))},Z=function(n){g((function(e){return(0,r.Z)((0,r.Z)({},e),{},{isIrregular:n})}))};return(0,v.jsxs)(y,{children:[(0,v.jsxs)("div",{className:"FilterContainer",children:[(0,v.jsxs)("form",{className:"Form",children:[(0,v.jsx)("div",{className:"SearchContainer",children:(0,v.jsx)("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:i.filters,onChange:k})}),(0,v.jsxs)("div",{className:"custom-input",children:[(0,v.jsx)("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:i.statistics,onChange:k}),(0,v.jsx)("ul",{className:"dropdown",children:C&&C.map((function(n){return(0,v.jsx)("li",{className:"ListItem",onClick:function(){return e=n,g((function(n){return(0,r.Z)((0,r.Z)({},n),{},{statistics:e})})),void j("verb"===e);var e},children:n},n)}))})]}),(0,v.jsxs)("ul",{className:"RadioButtonList",style:{display:w?"flex":"none"},children:[(0,v.jsxs)("li",{className:"RadioButtonItem",children:[(0,v.jsx)("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:function(){return Z(!0)},value:i.isIrregular,checked:!0===i.isIrregular}),"Regular"]}),(0,v.jsxs)("li",{className:"RadioButtonItem",children:[(0,v.jsx)("input",{className:"RadioButton",id:"reason",name:"reason",type:"radio",onChange:function(){return Z(!1)},value:i.isIrregular,checked:!1===i.isIrregular}),"Irregular"]})]})]}),(0,v.jsxs)("div",{className:"CountContainer",children:[(0,v.jsxs)("p",{className:"CountWord",children:["To study:",(0,v.jsx)("span",{className:"NumberCountWord",children:N.results&&N.results.length})]}),(0,v.jsx)("ul",{className:"ButtonList",children:(0,v.jsx)("li",{children:(0,v.jsxs)(m.OL,{className:"ButtonItem",to:"/training",children:["Train oneself ",(0,v.jsx)(d.r,{})]})})})]})]}),(0,v.jsx)("div",{className:"TableContainer",children:N&&(0,v.jsx)(h.i,{data:N})}),N.totalPages>1&&(0,v.jsx)(x.m,{data:N,formData:i,setFormData:g})]})}}}]);
//# sourceMappingURL=438.ef77a564.chunk.js.map