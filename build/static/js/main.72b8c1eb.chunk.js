(this["webpackJsonpproject37_news-monkey"]=this["webpackJsonpproject37_news-monkey"]||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(17),s=c.n(n),i=c(10),r=c(7),l=c(2),o=c(13),j=c.n(o),d=c(18),b=c(19),u=(c(28),c(0));function h(e){var t=e.title,c=e.desc,a=e.image,n=e.url,s=e.date,i=e.source,r=Object(b.useSpeechSynthesis)().speak;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"card my-2",children:[Object(u.jsx)("span",{className:"badge position-absolute top-0 translate-middle badge rounded-pill bg-warning",children:i}),Object(u.jsx)("img",{src:a,className:"card-img-top",alt:"No pic available"}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("span",{className:"card-title",children:t}),Object(u.jsx)("p",{className:"card-text",children:c}),Object(u.jsxs)("p",{className:"card-text",children:["Published on ",new Date(s).toGMTString()]}),Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return r({text:t})},children:"Listen"}),Object(u.jsx)("button",{className:"btn-read btn btn-warning",onClick:function(e){e.preventDefault(),window.open(n,"_blank")},children:"Read More"})]})]})})}c(30);var x=c.p+"static/media/Loader.d6a322da.gif";function O(e){var t=e.category,c=e.country,n=Object(a.useState)(),s=Object(i.a)(n,2),r=s[0],l=s[1],o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,b="https://gnews.io/api/v4/top-headlines?country=".concat(c,"&lang=en&max=100&topic=").concat(t,"&token=").concat(o);return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,l(a.articles),document.title="News-Monkey | ".concat(t.toUpperCase());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,b]),r?Object(u.jsxs)("div",{className:"container my-3",children:[Object(u.jsxs)("h3",{className:"text-center",children:["Top Headlines - ",t.toUpperCase()]}),Object(u.jsx)("div",{className:"row",children:r.map((function(e){var t=!1,c="";return null!==e.description&&(e.description.length>=70?(c=e.description.slice(0,70),t=!0):c=e.description),t?Object(u.jsx)("div",{className:"col-md-4 newsItem",children:Object(u.jsx)(h,{title:e.title,desc:c+"...",image:e.image,url:e.url,date:e.publishedAt,source:e.source.name})},e.url):Object(u.jsx)("div",{className:"col-md-4 newsItem",children:Object(u.jsx)(h,{title:e.title,desc:e.description,image:e.image,url:e.url,date:e.publishedAt,source:e.source.name})},e.url)}))})]}):Object(u.jsx)("div",{id:"loader",children:Object(u.jsx)("img",{src:x,alt:"Loading..."})})}c(31),c(32);var m=c.p+"static/media/NewsMonkey.3422785b.png";function p(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{id:"NavBar",className:"navbar navbar-expand-lg fixed-top",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(r.b,{id:"logo",className:"navbar-brand",to:"/",children:Object(u.jsx)("img",{id:"logoImage",src:m,alt:"NewsMonkey"})}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsxs)("span",{className:"navbar-toggler-icon",children:[Object(u.jsx)("div",{className:"toggler"}),Object(u.jsx)("div",{className:"toggler"}),Object(u.jsx)("div",{className:"toggler"})]})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"nav-link",activeClassName:"active","aria-current":"page",exact:!0,to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/business",children:"Business"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/entertainment",children:"Entertainment"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/health",children:"Health"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/science",children:"Science"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/sports",children:"Sports"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/technology",children:"Technology"})})]})})]})})})}c(38);var v=function(){var e=Object(a.useState)(localStorage.getItem("country")||"us"),t=Object(i.a)(e,2),c=t[0],n=t[1];return localStorage.setItem("country",c),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsxs)(l.a,{exact:!0,path:"/",children:[Object(u.jsxs)("div",{className:"countryContainer",children:[Object(u.jsx)("label",{htmlFor:"country",children:Object(u.jsx)("h5",{id:"countryLabel",children:"Country:"})}),Object(u.jsxs)("select",{id:"country",onChange:function(e){return n(e.target.value)},value:c,children:[Object(u.jsx)("option",{value:"in",children:"India"}),Object(u.jsx)("option",{value:"us",children:"United States"}),Object(u.jsx)("option",{value:"au",children:"Australia"}),Object(u.jsx)("option",{value:"gb",children:"United Kingdom"}),Object(u.jsx)("option",{value:"ca",children:"Canada"}),Object(u.jsx)("option",{value:"ph",children:"Philippines"}),Object(u.jsx)("option",{value:"pk",children:"Pakistan"}),Object(u.jsx)("option",{value:"sg",children:"Singapore"})]})]}),Object(u.jsx)(O,{country:c,category:"general"},"home")]}),Object(u.jsx)(l.a,{exact:!0,path:"/business",children:Object(u.jsx)(O,{country:c,category:"business"},"business")}),Object(u.jsx)(l.a,{exact:!0,path:"/entertainment",children:Object(u.jsx)(O,{country:c,category:"entertainment"},"entertainment")}),Object(u.jsx)(l.a,{exact:!0,path:"/health",children:Object(u.jsx)(O,{country:c,category:"health"},"health")}),Object(u.jsx)(l.a,{exact:!0,path:"/sports",children:Object(u.jsx)(O,{country:c,category:"sports"},"sports")}),Object(u.jsx)(l.a,{exact:!0,path:"/science",children:Object(u.jsx)(O,{country:c,category:"science"},"science")}),Object(u.jsx)(l.a,{exact:!0,path:"/technology",children:Object(u.jsx)(O,{country:c,category:"technology"},"technology")})]})]})})};c(39);s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.72b8c1eb.chunk.js.map