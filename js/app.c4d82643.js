(function(t){function e(e){for(var a,s,l=e[0],c=e[1],i=e[2],d=0,v=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"02b8":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"0911":function(t,e,n){},"34d7":function(t,e,n){"use strict";n("b5fd")},"3a18":function(t,e,n){"use strict";n("0911")},6506:function(t,e,n){t.exports=n.p+"img/chainsaw-man.c42eddc5.gif"},"85ec":function(t,e,n){},b5fd:function(t,e,n){},badc:function(t,e,n){"use strict";n("02b8")},cd49:function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container main-content",attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in",duration:300}},[n("router-view")],1)],1)},o=[],s=a["a"].extend({data:function(){return{}}}),l=s,c=(n("034f"),n("2877")),i=Object(c["a"])(l,r,o,!1,null,null,null),u=i.exports,d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("router-link",{attrs:{to:{name:"home"},id:"back-link"}},[t._v("Back")]),n("h1",{staticClass:"title-section"},[t._v("Contact")]),n("h2",[t._v("You can find me on:")]),n("div",{staticClass:"contact-block"},[t._v(" * "),n("a",{attrs:{href:t.contact.links.htb,target:"_blank"}},[t._v("HackTheBox")]),n("br"),n("br"),t._v(" * "),n("a",{attrs:{href:t.contact.links.github,target:"_blank"}},[t._v("Github")]),n("br"),n("br"),t._v(" * "),n("a",{attrs:{href:t.contact.links.twitter,target:"_blank"}},[t._v("Twitter")]),n("br"),n("br"),t._v(" * "),n("a",{attrs:{href:t.contact.links.telegram,target:"_blank"}},[t._v("Telegram")]),n("br"),n("br")]),n("br"),n("h2",[t._v("Email:")]),n("p",{staticClass:"contact-block"},[t._v(" <"+t._s(t.contact.email)+"> -- "),n("a",{attrs:{href:"./publickey.asc"}},[t._v("PGP PUBLIC KEY")])])],1)},b=[],f={email:"sukennzx@gmail.com",links:{htb:"https://app.hackthebox.eu/profile/323852",twitter:"https://twitter.com/sukennzx",github:"https://github.com/sukenn",telegram:"https://t.me/sukennzx",blog:"https://blog.sukenn.xyz"}},_=a["a"].extend({data:function(){return{contact:f}}}),p=_,h=(n("badc"),Object(c["a"])(p,v,b,!1,null,null,null)),m=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section text-center"},[a("img",{staticClass:"margin-bottom",attrs:{src:n("6506"),width:"400",height:"auto",alt:""}}),a("h1",{staticClass:"title-section"},[t._v(" Hugo "),a("a",{attrs:{href:t.contact.links.twitter,target:"_blank"}},[t._v("@sukenn")])]),a("p",[t._v("Backend developer, cyber security student and ctf player...")]),a("ul",{staticClass:"links"},[a("li",[a("router-link",{attrs:{to:{name:"about-me"}}},[t._v("About me")])],1),a("li",[a("router-link",{attrs:{to:{name:"tools"}}},[t._v("Tools")])],1),a("li",[a("a",{attrs:{href:t.contact.links.blog,target:"_blank"}},[t._v("Blog")])]),a("li",[a("router-link",{attrs:{to:{name:"contact"}}},[t._v("Contact")])],1)])])},k=[],y=a["a"].extend({data:function(){return{contact:f}}}),C=y,x=(n("ee90"),Object(c["a"])(C,g,k,!1,null,null,null)),w=x.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("router-link",{attrs:{to:{name:"home"},id:"back-link"}},[t._v("Back")]),n("h1",{staticClass:"title-section"},[t._v("About me")]),t._m(0),t._m(1),t._m(2)],1)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-block"},[n("h2",[t._v("Skills & Interests")]),n("table",[n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Languages")])]),n("td",[t._v("Python, Javascript, PHP, C, etc")])]),n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Good at")])]),n("td",[t._v("Software development, Web, CTF, Pentest")])]),n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Interested in")])]),n("td",[t._v("Cyber security, Bug bounty, Binary exploitation")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-block"},[n("h2",[t._v("Experience")]),n("td",[t._v(" In general I have 2.5+ years of experience working as Software Developer ")]),n("br"),n("table",[n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Nodejs Backend Developer")])]),n("td",[t._v("Express, Nestjs, PostgreSQL, MongoDB, etc")]),n("td",[t._v("Jul 2020 - Present")])]),n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Python Fullstack Developer")])]),n("td",[t._v("Django, PostgreSQL, Jinja, Angular, etc")]),n("td",[t._v("Set 2019 - Jul 2020")])]),n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Java Fullstack Intern")])]),n("td",[t._v("SpringMVC, JSF, PostgreSQL, etc")]),n("td",[t._v("Apr 2019 - Set 2019")])]),n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Nodejs Fullstack Intern")])]),n("td",[t._v("Express, MongoDB, Handlebars, etc")]),n("td",[t._v("Feb 2019 - Apr 2019")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-block"},[n("h2",[t._v("Education")]),n("table",[n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Professional Pentest Bootcamp")])]),n("td",[t._v("Desec Security")]),n("td",[t._v("Dec 2020 - Present")])]),n("tr",[n("td",{staticClass:"bold"},[n("strong",[t._v("Information System Bachelor")])]),n("td",[t._v("JN University Center (UNIJUAZEIRO)")]),n("td",[t._v("Feb 2017 - Dec 2020 (4y)")])])])])}],O=a["a"].extend({data:function(){return{}}}),S=O,E=(n("3a18"),Object(c["a"])(S,P,j,!1,null,null,null)),B=E.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("router-link",{attrs:{to:{name:"home"},id:"back-link"}},[t._v("Back")]),n("h1",{staticClass:"title-section"},[t._v("Tools")]),n("p",[t._v(" You can find my open source tools on "),n("a",{attrs:{href:t.contact.links.github,target:"_blank"}},[t._v("Github")]),t._v(". ")]),t._l(t.tools,(function(e,a){return n("div",{key:a,staticClass:"category"},[n("h2",[t._v(t._s(e.title))]),n("ul",{staticClass:"list"},t._l(e.tools,(function(e,a){return n("li",{key:a},[n("a",{staticClass:"post",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])])})),0)])}))],2)},J=[],$=[{title:"CTF / Pentest",tools:[{title:"Reverse shell as a service",url:"https://revshell.sukenn.xyz"},{title:"Reverse shell payload generator",url:"https://github.com/sukenn/reverse-shell-generator"}]},{title:"Others",tools:[{title:"Cyberdrop downloader (all images, all videos and multiple albums)",url:"https://github.com/sukenn/cyberdrop-downloader"}]}],D=a["a"].extend({data:function(){return{contact:f,tools:$}}}),F=D,T=(n("34d7"),Object(c["a"])(F,I,J,!1,null,null,null)),M=T.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section text-center"},[n("h1",[t._v("404 Not Found")]),n("p",[n("router-link",{attrs:{to:{name:"home"},id:"back-link"}},[t._v("Back to home")])],1)])},N=[],z=a["a"].extend({data:function(){return{}}}),L=z,G=Object(c["a"])(L,A,N,!1,null,null,null),H=G.exports;a["a"].use(d["a"]);var U=[{path:"/",name:"home",component:w},{path:"/contact",name:"contact",component:m},{path:"/about-me",name:"about-me",component:B},{path:"/tools",name:"tools",component:M},{path:"/404",name:"not-found",component:H},{path:"/*",redirect:"/404"}],Q=new d["a"]({mode:"history",routes:U});e["default"]=new a["a"]({router:Q,render:function(t){return t(u)}}).$mount("#app")},e2c1:function(t,e,n){},ee90:function(t,e,n){"use strict";n("e2c1")}});
//# sourceMappingURL=app.c4d82643.js.map