(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(65)},33:function(e,n,t){},34:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),u=t(25),o=t.n(u),i=(t(33),t(17)),c=(t(34),t(16)),l=t.n(c),s=function(){return l.a.get("/api/sensors/current").then(function(e){return e.data})},d=function(){return l.a.get("/api/sensors").then(function(e){return e.data})},h=t(27),f=(t(53),t(2)),m=function(e){return e.reduce(function(e,n){return e.y<n.y?e:n})},E=function(e){return e.reduce(function(e,n){return e.y>n.y?e:n})},y=function(e){var n=e.data,t=e.width,r=e.height;return a.a.createElement(f.h,{xType:"ordinal",yType:"linear",width:t,height:r},a.a.createElement(f.b,null),a.a.createElement(f.g,null),a.a.createElement(f.i,{yDomain:[m(n).y,E(n).y+50],y0:m(n).y}),a.a.createElement(f.e,{data:n}),a.a.createElement(f.c,{data:n.map(function(e){return Object(h.a)({},e,{label:Math.round(e.y).toString()})}),labelAnchorX:"middle"}))},w=function(e){var n=[];return e.forEach(function(e){var t=new Date(e.date);n.push({x:t.getHours(),y:e.sensor1})}),n},g=function(e,n){var t=[];return e.forEach(function(e){var n=new Date(e.date);t.push({x:n.getHours(),y:e.sensor2})}),t},b=function(e,n){var t=[];return e.forEach(function(e){var n=new Date(e.date);t.push({x:n.getHours(),y:e.sensor3})}),t},p=function(e,n){var t=[];return e.forEach(function(e){var n=new Date(e.date);t.push({x:n.getHours(),y:e.sensor4})}),t},v=function(e){var n=e.data,t=e.width,r=e.height;return a.a.createElement("div",null,a.a.createElement(f.a,{items:["Sensor 1","Sensor 2","Sensor 3","Sensor 4"],orientation:"horizontal"}),a.a.createElement(f.h,{width:t,height:r,yDomain:[-50,300],xType:"linear",yType:"linear"},a.a.createElement(f.g,null),a.a.createElement(f.i,null),a.a.createElement(f.b,null),a.a.createElement(f.f,null),a.a.createElement(f.d,{data:w(n)}),a.a.createElement(f.d,{data:g(n)}),a.a.createElement(f.d,{data:b(n)}),a.a.createElement(f.d,{data:p(n)})),";")},x=function(){var e=Object(r.useState)([""]),n=Object(i.a)(e,2),t=n[0],u=n[1],o=Object(r.useState)([""]),c=Object(i.a)(o,2),l=c[0],h=c[1];Object(r.useEffect)(function(){s().then(function(e){return u(e)})},[]),Object(r.useEffect)(function(){d().then(function(e){return h(e)})},[]);var f=[{y:Number(t.sensor1),x:"sensor 1"},{y:Number(t.sensor2),x:"sensor 2"},{y:Number(t.sensor3),x:"sensor 3"},{y:Number(t.sensor4),x:"sensor 4"}];return a.a.createElement("div",null,a.a.createElement("h1",null,"Some sensor data:"),a.a.createElement("div",null,a.a.createElement(y,{data:f,width:window.innerWidth/2.5,height:window.innerHeight/2})),a.a.createElement(v,{data:l,width:window.innerWidth/1.2,height:window.innerHeight/2.3}))};o.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.42d6357e.chunk.js.map