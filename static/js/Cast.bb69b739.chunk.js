"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[709],{9087:function(r,t,e){e.r(t),e.d(t,{default:function(){return o}});var n=e(885),a=e(184),u=function(r){var t=r.name,e=r.character,n=r.img;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://e7.pngegg.com/pngimages/814/922/png-clipart-inside-out-sadness-http-404-error-message-web-browser-computer-servers-pixar-miscellaneous-pixar.png",alt:"",width:"100"}),(0,a.jsx)("p",{children:t}),(0,a.jsx)("p",{children:e})]})})},c=e(7658),s=e(2791),i=e(6871),o=function(){var r=(0,s.useState)([]),t=(0,n.Z)(r,2),e=t[0],o=t[1],p=(0,i.UO)().movieId;return(0,s.useEffect)((function(){(0,c.l$)(p).then((function(r){var t=r.cast;return o(t)}))}),[p]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:e.length&&e.map((function(r){return(0,a.jsx)(u,{name:r.name,character:r.character,img:r.profile_path},r.id)}))})})}},7658:function(r,t,e){e.d(t,{bp:function(){return p},dB:function(){return f},ku:function(){return o},l$:function(){return h},ug:function(){return m}});var n=e(5861),a=e(7757),u=e.n(a),c=e(4569),s={api_key:"7a4cd4317772102a9b88ef6a54b71590"},i=e.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:s}),o=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/trending/movie/day");case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("\n/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=Cast.bb69b739.chunk.js.map