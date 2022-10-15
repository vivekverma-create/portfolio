(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(20),n=s.n(a),r=s(11),l=(s(27),s(59)),j=s(60),o=s(61),d=s(0);function m(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"/",className:"logo",children:"Vivek."}),Object(d.jsx)("div",{className:"itemContainer",children:Object(d.jsxs)("a",{href:"tel:+61481152128",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:"+61 481 152 128"})]})}),Object(d.jsx)("div",{className:"itemContainer",children:Object(d.jsxs)("a",{href:"mailto:vivekverma326@gmail.com",children:[Object(d.jsx)(j.a,{className:"icon"}),Object(d.jsx)("span",{children:"vivekverma326@gmail.com"})]})}),Object(d.jsx)("div",{className:"itemContainer",children:Object(d.jsxs)("a",{href:"https://www.linkedin.com/in/vivek-au/",children:[Object(d.jsx)(o.a,{className:"icon"}),Object(d.jsx)("span",{children:"in/vivek-au"})]})})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}s(33);var h=s(13);function b(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(h.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["(Developer)","(Engineer)","(Tech Enthusiast)"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/vivekverma-create/images/main/vivek2.png",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Hi There, I'm"}),Object(d.jsx)("h1",{children:"Vivek"}),Object(d.jsx)("h3",{children:Object(d.jsx)("span",{ref:e})})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(34);function g(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(d.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:s})}s(35);var u=[{id:1,title:"RailRoad Ink",img:"assets/railroad-ink.jpg",link:"https://drive.google.com/file/d/1LhyKG5dDLSPy-_b4rLi6Tf5mkKTH3Iw3/view?usp=sharing"},{id:2,title:"Car Classification",img:"assets/car-classification.png",link:"http://ai.stanford.edu/~jkrause/cars/car_dataset.html"}],p=[{id:1,title:"GovHack 2021",img:"assets/transport_govhack.JPG",link:"https://github.com/vivekverma-create/GovHack"},{id:2,title:"NBA Stats Explorer",img:"assets/NBA.jpg",link:"http://visualise-data.herokuapp.com/"},{id:3,title:"SP500 Stocks",img:"assets/stocks.jpg",link:"http://visualise-data.herokuapp.com/"},{id:4,title:"Covid-19",img:"assets/covid.jpg",link:"http://visualise-data.herokuapp.com/"},{id:5,title:"Data Checker",img:"assets/data-checker.jpg",link:"http://visualise-data.herokuapp.com/"}],O=[{id:1,title:"Quadcopter",img:"assets/quad.j`pg"},{id:2,title:"Electric Plane",img:"assets/toyPlane.jpg"},{id:3,title:"Engine Plane",img:"assets/aero-modelling.jpg"}],v=[{id:1,title:"Smart Switch",img:"assets/smart-switch.jpg",link:"https://drive.google.com/file/d/1qlJgkzuUviXgQJih1Yrd_tQJAyRDvjFI/view?usp=sharing"},{id:2,title:"ThermoElectric Generator",img:"assets/electronics.jpg",link:"https://drive.google.com/drive/folders/1Kp46KhNzk5uCoK2JoHyo4EcnQH3qpQiU?usp=sharing"}],x=[{id:1,title:"Spider",img:"assets/spider.jpg",link:"https://drive.google.com/drive/folders/1ix6A_YXMDQ6nEaSUkTy0yWG4GQVxCIMb?usp=sharing"},{id:2,title:"Navigator",img:"assets/robotics.jpg"}],f=[{id:1,title:"Magnesium Ferrite",img:"assets/paper.jpg",link:"https://drive.google.com/file/d/1IE4PM76iqLMkhn1zOetgLZpy1DxQuQ7i/view?usp=sharing"},{id:2,title:"Multi-Ferroics",img:"assets/research.jpg",link:"https://drive.google.com/file/d/1AmlO6vKtbiUg35LK2CfYLYJ9zEKDljbc/view?usp=sharing"}];function k(){var e=Object(i.useState)("web"),t=Object(r.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)([]),n=Object(r.a)(a,2),l=n[0],j=n[1];return Object(i.useEffect)((function(){switch(s){case"programming":j(u);break;case"web":j(p);break;case"aeromodelling":j(O);break;case"electronics":j(v);break;case"robotics":j(x);break;case"research":j(f);break;default:j(p)}}),[s]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"web",title:"Web App"},{id:"programming",title:"Programming"},{id:"aeromodelling",title:"Aeromodelling"},{id:"electronics",title:"Electronics"},{id:"robotics",title:"Robotics"},{id:"research",title:"Research"}].map((function(e){return Object(d.jsx)(g,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:l.map((function(e){return Object(d.jsx)("a",{href:e.link,target:"_blank",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:e.img,alt:""}),Object(d.jsx)("h3",{children:e.title})]})})}))})]})}s(36);function N(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],a=[{id:"1",icon:"./assets/globe.png",title:"Insta Award",desc:" ",img:"https://raw.githubusercontent.com/vivekverma-create/images/main/insta%20award%202.png"},{id:"2",icon:"./assets/globe.png",title:"Team Award",desc:" ",img:"https://raw.githubusercontent.com/vivekverma-create/images/main/Team%20Award.jpg"},{id:"3",icon:"./assets/globe.png",title:"Infosys Insta Award",desc:" ",img:"https://raw.githubusercontent.com/vivekverma-create/images/main/InstaAward.png"},{id:"4",icon:"./assets/mobile.png",title:"Gov Hack 2021",desc:" ",img:"https://raw.githubusercontent.com/vivekverma-create/images/main/GovHack2021.jpg"},{id:"5",icon:"./assets/writing.png",title:"Certificate",desc:"New Relic Programmability",img:"https://raw.githubusercontent.com/vivekverma-create/images/main/New_Relic_Programmability.jpg"},{id:"6",icon:"./assets/writing.png",title:"Certificate",desc:"New Relic Observability",img:"https://raw.githubusercontent.com/vivekverma-create/images/main/New_Relic_Fullstack.jpg"}],n=function(e){c("left"===e?s>0?s-1:2:s<a.length-1?s+1:0)};return Object(d.jsxs)("div",{className:"awards",id:"awards",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:a.map((function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"leftContainer",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:e.icon,alt:""})}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("p",{children:e.desc})]})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/vivekverma-create/images/main/arrow.png",className:"arrow left",alt:"",onClick:function(){return n("left")}}),Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/vivekverma-create/images/main/arrow.png",className:"arrow right",alt:"",onClick:function(){return n()}})]})}s(37);function w(){return Object(d.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(d.jsx)("h1",{children:"Testimonials"}),Object(d.jsx)("div",{className:"container",children:[{id:1,name:"Tom",title:"Senior Developer",img:"assets/tom.jpeg",icon:"assets/twitter.png",desc:"Writing....."},{id:2,name:"Alex",title:"Co-Founder XYZ",img:"assets/alex.jpeg",icon:"assets/youtube.png",desc:"Writing...... ",featured:!0},{id:3,name:"Martin",title:"CEO",img:"assets/martin.jpeg",icon:"assets/linkedin.png",desc:"Writing...... "}].map((function(e){return Object(d.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(d.jsx)("img",{className:"user",src:e.img,alt:""}),Object(d.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(d.jsx)("div",{className:"center",children:e.desc}),Object(d.jsxs)("div",{className:"bottom",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("h4",{children:e.title})]})]})}))})]})}s(38);var C=s(21);function y(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact."}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),C.a.sendForm("service_67olw5a","template_uhs2uyp",e.target,"user_ZBIhxVbq6TsXbY98uVjZb").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(d.jsx)("input",{type:"text",placeholder:"Name",name:"name",required:!0}),Object(d.jsx)("input",{type:"email",placeholder:"Email",name:"email",required:!0}),Object(d.jsx)("textarea",{placeholder:"Message",name:"message",required:!0}),Object(d.jsx)("button",{type:"submit",children:"Send"}),s&&Object(d.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(39),s(40);function S(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#awards",children:"Awards"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}s(41);function E(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(h.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["You are amazing","You are the best"]})}),[]),Object(d.jsxs)("div",{className:"parents",id:"parents",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"assets/MomandDad.jpg"})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Mom and Dad,"}),Object(d.jsx)("h2",{children:"Be strong now, "}),Object(d.jsx)("h2",{children:"because things will get better."}),Object(d.jsx)("h2",{children:"It might be stormy now,"}),Object(d.jsx)("h2",{children:" but it can't rain forever."}),Object(d.jsx)("br",{}),Object(d.jsx)("h3",{children:Object(d.jsx)("span",{ref:e})})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}var A=s(14),M=s(3);var I=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(m,{menuOpen:s,setMenuOpen:c}),Object(d.jsx)(A.a,{children:Object(d.jsxs)(M.c,{children:[Object(d.jsxs)(M.a,{path:"/",children:[Object(d.jsx)(S,{menuOpen:s,setMenuOpen:c}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(b,{}),Object(d.jsx)(k,{}),Object(d.jsx)(N,{}),Object(d.jsx)(y,{})]})]}),Object(d.jsx)(M.a,{path:"/contact",children:Object(d.jsx)("div",{className:"sections",children:Object(d.jsx)(y,{})})}),Object(d.jsx)(M.a,{path:"/testimonial",children:Object(d.jsx)("div",{className:"sections",children:Object(d.jsx)(w,{})})}),Object(d.jsx)(M.a,{path:"/Parents",children:Object(d.jsx)("div",{className:"sections",children:Object(d.jsx)(E,{})})})]})})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A.b,{children:Object(d.jsx)(I,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ac0dd9ad.chunk.js.map