"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{7802:function(e,s,n){n.r(s);var i=n(9439),r=n(2791),t=n(7689),a=n(4608),c=n(4436),l=n(184);s.default=function(){var e=(0,t.UO)().id,s=(0,r.useState)(null),n=(0,i.Z)(s,2),o=n[0],d=n[1];(0,r.useEffect)((function(){u(e)}),[]);var u=function(e){(0,a.Y5)(e,"/reviews").then((function(e){d(e.data.results)})).catch((function(e){return console.log(e)}))};return(0,l.jsx)("div",{className:"reviews",children:o&&0!==o.length?(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:["Reviews - ",o.length]}),(0,l.jsx)("ul",{className:"review__list",children:o.map((function(e){return(0,l.jsxs)("li",{className:"review__item",children:[(0,l.jsxs)("p",{className:"review__user",children:[(0,l.jsx)("svg",{className:"icon",children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-person")})}),"@",e.author]}),(0,l.jsxs)("h5",{className:"review__user",children:[(0,l.jsx)("svg",{className:"icon",children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-star")})}),e.author_details.rating?e.author_details.rating:"-","/10"]}),(0,l.jsx)("div",{id:e.id,className:"review__text ".concat(e.id),dangerouslySetInnerHTML:{__html:e.content}}),(0,l.jsx)("button",{className:"review__button ".concat(e.id),onClick:function(){return function(e){var s=document.getElementsByClassName(e);s[0].classList.contains("read-more")?(s[0].classList.remove("read-more"),s[1].innerHTML="Read More"):(s[0].classList.add("read-more"),s[1].innerHTML="Read Less")}(e.id)},children:"Read more"}),(0,l.jsx)("div",{className:"review__line"})]},e.id)}))})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Reviews"}),(0,l.jsx)("p",{children:" no reviews yet..."})]})})}}}]);
//# sourceMappingURL=802.5e4057d2.chunk.js.map