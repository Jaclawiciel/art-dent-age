(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.9a2ec625.jpg"},13:function(e,t,a){e.exports=a(27)},18:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),o=(a(18),a(1)),l=a(2),u=a(5),s=a(3),h=a(7),d=a(4),m=(a(19),a(20),a(22),a(6)),v=a.n(m),b=a(8),f=a.n(b),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={patientBirthday:new Date("1996-08-30")},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.patientBirthday;return i.a.createElement("div",{className:"age-today"},i.a.createElement("h4",null,"WIEK NA DZISIAJ"),i.a.createElement(v.a,{value:t,onChange:function(t){e.setState({patientBirthday:t})}}),i.a.createElement("h3",null,"Wiek: ",i.a.createElement(f.a,{locale:"pl",diff:t.toString(),unit:"years"},new Date)))}}]),t}(n.Component),p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={patientBirthday:new Date("1996-08-30"),examinationDate:new Date},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.patientBirthday,a=this.state.examinationDate;return i.a.createElement("div",{className:"age-today"},i.a.createElement("h4",null,"WIEK NA DZIE\u0143 BADANIA"),"Data urodzenia:",i.a.createElement(v.a,{value:t,onChange:function(t){e.setState({patientBirthday:t})}}),i.a.createElement("br",null),"Data badania:",i.a.createElement(v.a,{value:a,onChange:function(t){e.setState({examinationDate:t})}}),i.a.createElement("h3",null,"Wiek: ",i.a.createElement(f.a,{locale:"pl",diff:t.toString(),unit:"years"},a.toString())))}}]),t}(n.Component),E=a(12),y=a.n(E),j=(n.Component,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).renderCurrentPage=function(){return"today"===this.state.currentPage?i.a.createElement(g,null):i.a.createElement(p,null)},e.state={currentPage:"today"},e.handleNavigation=e.handleNavigation.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleNavigation",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement("nav",null,i.a.createElement("button",{className:"today"===this.state.currentPage?"nav-btn active":"nav-btn",onClick:function(){return e.handleNavigation("today")}},"Wiek na dzisiaj"),i.a.createElement("button",{className:"past"===this.state.currentPage?"nav-btn active":"nav-btn",onClick:function(){return e.handleNavigation("past")}},"Wiek na dzie\u0144 badania")),this.renderCurrentPage())}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.0330ce76.chunk.js.map