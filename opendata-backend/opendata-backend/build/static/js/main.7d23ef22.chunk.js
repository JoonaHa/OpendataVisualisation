(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(65)},33:function(e,t,n){},34:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(25),o=n.n(u),c=(n(33),n(17)),i=(n(34),n(16)),s=n.n(i),l=function(){return s.a.get("/api/sensors/current").then(function(e){return e.data})},d=function(){return s.a.get("/api/sensors").then(function(e){return e.data})},f=n(27),h=(n(53),n(2)),m=function(e){return e.reduce(function(e,t){return e.y<t.y?e:t})},E=function(e){return e.reduce(function(e,t){return e.y>t.y?e:t})},y=function(e){var t=e.data,n=e.width,a=e.height;return r.a.createElement(h.h,{xType:"ordinal",width:n,height:a},r.a.createElement(h.b,null),r.a.createElement(h.g,null),r.a.createElement(h.i,{yDomain:[m(t).y,E(t).y],y0:m(t).y}),r.a.createElement(h.e,{data:t}),r.a.createElement(h.c,{data:t.map(function(e){return Object(f.a)({},e,{label:Math.round(e.y).toString()})}),labelAnchorX:"middle"}))},b=function(e){var t=[];return e.forEach(function(e){var n=new Date(e.date);t.push({x:n.getHours(),y:e.sensor1})}),t},g=function(e,t){var n=[];return e.forEach(function(e){var t=new Date(e.date);n.push({x:t.getHours(),y:e.sensor2})}),n},v=function(e,t){var n=[];return e.forEach(function(e){var t=new Date(e.date);n.push({x:t.getHours(),y:e.sensor3})}),n},w=function(e,t){var n=[];return e.forEach(function(e){var t=new Date(e.date);n.push({x:t.getHours(),y:e.sensor4})}),n},p=function(e){var t=e.data,n=e.width,a=e.height;return r.a.createElement("div",null,r.a.createElement(h.a,{items:["Sensor 1","Sensor 2","Sensor 3","Sensor 4"],orientation:"horizontal"}),r.a.createElement(h.h,{width:n,height:a,yDomain:[-50,300]},r.a.createElement(h.g,null),r.a.createElement(h.i,null),r.a.createElement(h.b,null),r.a.createElement(h.f,null),r.a.createElement(h.d,{data:b(t)}),r.a.createElement(h.d,{data:g(t)}),r.a.createElement(h.d,{data:v(t)}),r.a.createElement(h.d,{data:w(t)})),";")},x=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],u=t[1],o=Object(a.useState)([]),i=Object(c.a)(o,2),s=i[0],f=i[1];Object(a.useEffect)(function(){l().then(function(e){return u(e)})},[]),Object(a.useEffect)(function(){d().then(function(e){return f(e)})},[]);var h=[{y:Number(n.sensor1),x:"sensor 1"},{y:Number(n.sensor2),x:"sensor 2"},{y:Number(n.sensor3),x:"sensor 3"},{y:Number(n.sensor4),x:"sensor 4"}];return r.a.createElement("div",null,r.a.createElement("h1",null,"Some sensor data"),r.a.createElement("div",null,r.a.createElement(y,{data:h,width:500,height:300})),r.a.createElement(p,{data:s,width:600,height:300}))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7d23ef22.chunk.js.map