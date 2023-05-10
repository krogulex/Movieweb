"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[867,802,460],{8704:function(e,s,n){n.r(s),n.d(s,{default:function(){return g}});var t,i=n(9439),a=n(4608),r=n(7689),c=n(2791),o=n(168),l=n(9128),d=n(1087),h=n(6444),u=n(184),m=(0,h.ZP)(d.rU)(t||(t=(0,o.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #e1a126;\n  }\n"]))),v=function(e){var s=e.to,n=e.from;return(0,u.jsxs)(m,{to:s,children:[(0,u.jsx)(l.jTe,{size:"24"}),"Back to ",""===n.slice(1)?"Home":n.slice(1,6)]})},f=n(5652),x=n(1247),j=n(7802),_=n(4436),p=n(3e3),g=function(){var e,s,n=(0,r.UO)().id,t=(0,c.useState)(null),o=(0,i.Z)(t,2),l=o[0],d=o[1],h=null!==(e=null===(s=(0,r.TH)().state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/";(0,c.useEffect)((function(){m(n)}),[]);var m=function(e){(0,a.Y5)(e).then((function(e){d(e.data)})).catch((function(e){return console.log(e)}))};return(0,u.jsxs)("div",{className:"movie-details__all",children:[(0,u.jsx)(v,{to:h.from,from:h.from,children:"Back to products"}),l?(0,u.jsxs)("div",{className:"movie-details__content",children:[(0,u.jsx)("div",{className:"movie-details__poster",children:l.poster_path?(0,u.jsx)("img",{className:"movie-details__posters",src:"https://image.tmdb.org/t/p/w500"+l.poster_path,alt:"..."}):(0,u.jsx)("img",{className:"movie-details__posters",src:f,alt:"..."})}),(0,u.jsxs)("div",{className:"movie-details__describe",children:[(0,u.jsxs)("h2",{children:[l.original_title," ",l.release_date.split("-")[0]]}),(0,u.jsxs)("p",{className:"user-score",children:["User score: ",Math.floor(10*l.vote_average),"%",(0,u.jsx)("svg",{className:"icon user-score__icon",children:(0,u.jsx)("use",{href:"".concat(_.Z,"#icon-star")})})]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:l.overview?l.overview:"No overview"}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:l.genres?l.genres.map((function(e){return e.name})).join(", "):"No genres"})]}),(0,u.jsx)(x.default,{}),(0,u.jsx)(j.default,{}),(0,u.jsx)(r.j3,{}),(0,u.jsx)(p.$,{})]}):(0,u.jsx)("div",{})]})}},1247:function(e,s,n){n.r(s);var t=n(9439),i=n(2791),a=n(7689),r=n(9447),c=n(6605),o=(n(4676),n(5880),n(4608)),l=n(184);s.default=function(){var e=(0,a.UO)().id,s=(0,i.useState)(null),n=(0,t.Z)(s,2),d=n[0],h=n[1];(0,i.useEffect)((function(){u(e)}),[]);var u=function(e){(0,o.Y5)(e,"/credits").then((function(e){h(e.data.cast)})).catch((function(e){return console.log(e)}))};return(0,l.jsx)("div",{className:"cast",children:d&&0!==d.length?(0,l.jsxs)("div",{className:"cast__content",children:[(0,l.jsxs)("h2",{children:["Cast - ",d.length]}),(0,l.jsxs)("p",{children:[" ",d.length<9?"":"Swipe right to see more..."]}),(0,l.jsx)(r.tq,{slidesPerView:"auto",spaceBetween:10,grabCursor:!0,modules:[c.tl,c.W_],breakpoints:{640:{slidesPerView:5,spaceBetween:15},768:{slidesPerView:4,spaceBetween:20},1024:{slidesPerView:6,spaceBetween:25}},className:"mySwiper",children:d.map((function(e,s){return(0,l.jsxs)(r.o5,{id:e.id,children:[e.profile_path?(0,l.jsx)("img",{className:"cast-img",src:"https://image.tmdb.org/t/p/w500"+e.profile_path,alt:"No images"}):(0,l.jsx)("img",{className:"cast-img",src:"https://joadre.com/wp-content/uploads/2019/02/no-image.jpg",alt:"No images"}),(0,l.jsxs)("div",{className:"cast__overlay",children:[(0,l.jsx)("p",{className:"cast__name",children:e.name}),(0,l.jsx)("p",{className:"cast__character",children:e.character})]})]},s)}))})]}):(0,l.jsxs)("div",{className:"cast__content",children:[(0,l.jsx)("h2",{children:"Cast"}),(0,l.jsx)("p",{children:"No Cast yet..."})]})})}},3e3:function(e,s,n){n.d(s,{$:function(){return a}});var t=n(4436),i=n(184),a=function(){return(0,i.jsx)("footer",{children:(0,i.jsxs)("h5",{className:"footer__slogan",children:[(0,i.jsx)("svg",{className:"icon footer__icon",children:(0,i.jsx)("use",{href:"".concat(t.Z,"#icon-movieweb")})}),"MOVIEWEB - The best page for movie enthusiast!"]})})}},7802:function(e,s,n){n.r(s);var t=n(9439),i=n(2791),a=n(7689),r=n(4608),c=n(4436),o=n(184);s.default=function(){var e=(0,a.UO)().id,s=(0,i.useState)(null),n=(0,t.Z)(s,2),l=n[0],d=n[1];(0,i.useEffect)((function(){h(e)}),[]);var h=function(e){(0,r.Y5)(e,"/reviews").then((function(e){d(e.data.results)})).catch((function(e){return console.log(e)}))};return(0,o.jsx)("div",{className:"reviews",children:l&&0!==l.length?(0,o.jsxs)("div",{children:[(0,o.jsxs)("h2",{children:["Reviews - ",l.length]}),(0,o.jsx)("ul",{className:"review__list",children:l.map((function(e){return(0,o.jsxs)("li",{className:"review__item",children:[(0,o.jsxs)("p",{className:"review__user",children:[(0,o.jsx)("svg",{className:"icon",children:(0,o.jsx)("use",{href:"".concat(c.Z,"#icon-person")})}),"@",e.author]}),(0,o.jsxs)("h5",{className:"review__user",children:[(0,o.jsx)("svg",{className:"icon",children:(0,o.jsx)("use",{href:"".concat(c.Z,"#icon-star")})}),e.author_details.rating?e.author_details.rating:"-","/10"]}),(0,o.jsx)("div",{id:e.id,className:"review__text ".concat(e.id),dangerouslySetInnerHTML:{__html:e.content}}),(0,o.jsx)("button",{className:"review__button ".concat(e.id),onClick:function(){return function(e){var s=document.getElementsByClassName(e);s[0].classList.contains("read-more")?(s[0].classList.remove("read-more"),s[1].innerHTML="Read More"):(s[0].classList.add("read-more"),s[1].innerHTML="Read Less")}(e.id)},children:"Read more"}),(0,o.jsx)("div",{className:"review__line"})]},e.id)}))})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Reviews"}),(0,o.jsx)("p",{children:" no reviews yet..."})]})})}},5652:function(e,s,n){e.exports=n.p+"static/media/no-image.3c8a503ee6a67e461a08.jpg"}}]);
//# sourceMappingURL=867.c4ec36e8.chunk.js.map