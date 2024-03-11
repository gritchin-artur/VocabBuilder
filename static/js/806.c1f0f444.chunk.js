"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{8551:function(A,n,e){e(2791);n.Z=e.p+"static/media/correct.a25809261aafd418fb0e80825e9754ba.svg"},2604:function(A,n,e){e(2791);n.Z=e.p+"static/media/error.047fff7d13be1e7ac4877a1b342482fb.svg"},2950:function(A,n,e){e(2791);n.Z=e.p+"static/media/eye-off.5b79f6604c00caac7ff440292afb980e.svg"},8284:function(A,n,e){e(2791);n.Z=e.p+"static/media/eye.561e8ec3e4f1072089624ee4031394db.svg"},806:function(A,n,e){e.r(n),e.d(n,{default:function(){return Z}});var i,a=e(7689),r=e(1087),t=e(168),s=e(7924),o=e(9506),l=e(3642),d=e(419),c=e(8284),m=e(2950),p=e(8551),u=e(2604),x=s.ZP.div(i||(i=(0,t.Z)(["\n  display: grid;\n  justify-content: center;\n\n  @media only screen and (min-width: 768px) {\n    background-image: url(",');\n    background-size: cover;\n    height: 100vh;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    margin-top: 50px;\n    display: grid;\n    grid-template-areas:\n      "f i"\n      "f l"\n      "f l"\n      "f l";\n  }\n\n  .ImgContainer {\n    display: grid;\n    justify-content: center;\n\n    @media only screen and (min-width: 768px) {\n      display: none;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      display: flex;\n    }\n  }\n\n  .RegisterImg {\n    background-image: url(',");\n    width: 247px;\n    height: 191px;\n\n    @media only screen and (min-width: 1440px) {\n      width: 498px;\n      height: 475px;\n      grid-area: i;\n      background-image: url(",');\n    }\n  }\n\n  .FormContainer {\n    padding: 15px 30px;\n    border-radius: 25px 25px 0 0;\n    background: rgba(133, 170, 159, 0.1);\n    height: 100vh;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 150px;\n      padding: 40px 60px;\n      border-radius: 30px;\n      max-width: 627px;\n      max-height: 591px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      grid-area: f;\n      margin-right: 70px;\n      margin-top: 0;\n    }\n  }\n\n  .Title {\n    font-weight: 600;\n    font-size: 30px;\n    line-height: 107%;\n    letter-spacing: -0.02em;\n    color: #121417;\n\n    @media only screen and (min-width: 768px) {\n      font-size: 53px;\n      line-height: 120%;\n    }\n  }\n\n  .Text {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    color: rgba(18, 20, 23, 0.8);\n    margin-top: 16px;\n\n    @media only screen and (min-width: 768px) {\n      font-size: 27px;\n      margin-top: 20px;\n    }\n  }\n\n  .Form {\n    margin-top: 16px;\n    display: grid;\n    gap: 18px;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 36px;\n    }\n  }\n\n  input {\n    box-sizing: border-box;\n    border: 1px solid rgba(18, 20, 23, 0.1);\n    border-radius: 15px;\n    padding: 16px 18px;\n    width: 100%;\n\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    color: #121417;\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n\n  .ButtonSubmit {\n    margin-top: 16px;\n    border-radius: 30px;\n    padding: 16px 18px;\n    background: #85aa9f;\n    border: none;\n\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 150%;\n    color: #fcfcfc;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 36px;\n    }\n  }\n\n  .NavLogIn {\n    justify-content: center;\n    display: flex;\n    margin-top: 32px;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 150%;\n    text-decoration: underline;\n    text-decoration-skip-ink: none;\n    color: rgba(18, 20, 23, 0.5);\n  }\n\n  .SkilsList {\n    display: none;\n\n    @media only screen and (min-width: 768px) {\n      display: flex;\n      justify-content: center;\n\n      & li {\n        display: inline-block;\n        margin-right: 15px;\n      }\n\n      & li:not(:last-child)::after {\n        content: "\xb7";\n        margin-left: 15px;\n      }\n    }\n\n    @media only screen and (min-width: 1440px) {\n      grid-area: l;\n    }\n  }\n\n  .Skil {\n    font-weight: 400;\n    font-size: 22px;\n    line-height: 150%;\n    text-align: center;\n    color: rgba(18, 20, 23, 0.8);\n  }\n\n  .DivInput {\n    position: relative;\n  }\n\n  .DivInput:hover .ShowPassword,\n  .DivInput:hover .HidePassword {\n    display: block;\n  }\n\n  .ErrorInput {\n    border: 1px solid #e74a3b;\n  }\n\n  .SuccessInput {\n    border: 1px solid #3cbc81;\n  }\n\n  .ShowPassword {\n    display: none;\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    background-image: url(',");\n  }\n\n  .HidePassword {\n    display: none;\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    background-image: url(",");\n  }\n\n  .ErrorText {\n    position: absolute;\n    color: red;\n    top: 60px;\n    left: 20px;\n    font-size: 12px;\n    align-items: flex-start;\n    display: flex;\n\n    &::before {\n      content: url(",");\n      display: inline-block;\n      margin-right: 5px;\n    }\n  }\n\n  .SuccessText {\n    position: absolute;\n    color: green;\n    top: 60px;\n    left: 20px;\n    font-size: 12px;\n    align-items: flex-start;\n    display: flex;\n\n    &::before {\n      content: url(",");\n      display: inline-block;\n      margin-right: 5px;\n    }\n  }\n"])),o,l,d,m.Z,c.Z,u.Z,p.Z),g=e(5705),h=e(6080),z=e(1199),f=e(4420),M=e(8724),k=e(184);function Z(){var A=(0,f.I0)(),n=(0,a.s0)(),e=(0,g.TA)({initialValues:{name:"",email:"",password:""},validationSchema:h.IY,onSubmit:function(e){A(M.Z.register(e)).then((function(A){A.payload.name&&n("/dictionary")}))}}),i=e.values,t=e.errors,s=e.touched,o=e.isValid,l=e.handleBlur,d=e.handleChange,c=e.handleSubmit,m=(0,z.n)(i,s,t),p=m.showPassword,u=m.getInputAlert,Z=m.getHidePassword,w=m.getInputClass;return(0,k.jsxs)(x,{children:[(0,k.jsx)("div",{className:"ImgContainer",children:(0,k.jsx)("div",{className:"RegisterImg"})}),(0,k.jsxs)("div",{className:"FormContainer",children:[(0,k.jsx)("h2",{className:"Title",children:"Register"}),(0,k.jsx)("p",{className:"Text",children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),(0,k.jsxs)("form",{className:"Form",children:[(0,k.jsxs)("div",{className:"DivInput",children:[(0,k.jsx)("input",{id:"registerName",name:"name",type:"text",placeholder:"Name",className:w("name"),onChange:d,value:i.name,onBlur:l}),u("name")]}),(0,k.jsxs)("div",{className:"DivInput",children:[(0,k.jsx)("input",{id:"registerEmail",name:"email",type:"email",placeholder:"Email",className:w("email"),onChange:d,value:i.email,onBlur:l}),u("email")]}),(0,k.jsxs)("div",{className:"DivInput",id:"password",children:[(0,k.jsx)("input",{id:"registerPassword",name:"password",placeholder:"Password",type:p?"text":"password",className:w("password"),onChange:d,value:i.password,onBlur:l}),u("password"),i.password&&Z()]}),(0,k.jsx)("button",{className:"ButtonSubmit",type:"submit",disabled:!o,onClick:c,children:"Register"})]}),(0,k.jsx)(r.OL,{className:"NavLogIn",to:"/login",children:"Login"})]}),(0,k.jsxs)("ul",{className:"SkilsList",children:[(0,k.jsx)("li",{className:"Skil",children:"Word"}),(0,k.jsx)("li",{className:"Skil",children:"Translation"}),(0,k.jsx)("li",{className:"Skil",children:"Grammar"}),(0,k.jsx)("li",{className:"Skil",children:"Progress"})]})]})}},1199:function(A,n,e){e.d(n,{n:function(){return t}});var i=e(9439),a=e(2791),r=e(184),t=function(A,n,e){var t=(0,a.useState)(!1),s=(0,i.Z)(t,2),o=s[0],l=s[1],d=function(){l((function(A){return!A}))};return{showPassword:o,getInputClass:function(i){return A[i]?n&&e[i]?"ErrorInput":"SuccessInput":""},getInputAlert:function(i){return A[i]?n&&e[i]?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"ErrorText",children:e[i]}),(0,r.jsx)("div",{className:"ImgError"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"SuccessText",children:"".concat(i," is correct")}),(0,r.jsx)("div",{className:"ImgCorrect"})]}):""},getHidePassword:function(){return(0,r.jsx)("div",{className:o?"HidePassword":"ShowPassword",onClick:d})}}}},6080:function(A,n,e){e.d(n,{IY:function(){return t},SB:function(){return o},_Q:function(){return l},b1:function(){return s}});var i=e(8007),a=/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,r=/^(?![A-Za-z])[\u0410-\u042f\u0406\u0404\u0407\u0490\u0491\u0430-\u044f\u0456\u0454\u0457\u02bc\s]+$/,t=i.Ry().shape({name:i.Z_().min(2,"Too Short!").max(30,"Too Long!").required("Required"),email:i.Z_().email("Invalid email").matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Must be @ and .com or any").required("Required"),password:i.Z_().min(7,"Must be at least 7 characters").max(50,"Too Long!").matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,"Must be min 6 A-z, 1 num, letter = 7").required("Required")}),s=i.Ry().shape({email:i.Z_().email("Invalid email").required("Required"),password:i.Z_().required("Required")}),o=(i.Ry().shape({reason:i.Z_().required("Required"),fullName:i.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:i.Z_().email("Invalid email").required("Required"),number:i.Z_().matches(/^\d+$/).min(5,"Too Short!").max(10,"Too Long!").required("Required")}),i.Ry().shape({en:i.Z_().matches(a,"Must be en letter").required("Required"),ua:i.Z_().matches(r,"Must be ua letter").required("Required"),category:i.Z_().required("Required")})),l=i.Ry().shape({en:i.Z_().matches(a,"Must be en letter").required("Required"),ua:i.Z_().matches(r,"Must be ua letter").required("Required")})},9506:function(A){A.exports="data:image/jpeg;base64,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"},419:function(A,n,e){A.exports=e.p+"static/media/registration-desctop.d2e91d2e25044b505a73.png"},3642:function(A,n,e){A.exports=e.p+"static/media/registration-mobile.cab3f1832a1e3f78e770.png"}}]);
//# sourceMappingURL=806.c1f0f444.chunk.js.map