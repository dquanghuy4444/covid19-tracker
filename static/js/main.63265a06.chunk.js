(this.webpackJsonpexp_train_reacthook_materialui_chartsjs_covid19tracker=this.webpackJsonpexp_train_reacthook_materialui_chartsjs_covid19tracker||[]).push([[0],{14:function(e,t,a){e.exports={container:"App_container__3MVg3",image:"App_image__Q9cmm"}},16:function(e,t,a){e.exports={container:"Cards_container__1G6kr",card:"Cards_card__2WNhR",infected:"Cards_infected__3NeOg",recovered:"Cards_recovered__1_yIT",deaths:"Cards_deaths__21hBX"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(66),o=a.n(c),s=a(9),i=a.n(s),u=a(12),l=a(67),d=a(68),p=a(80),m=a(78),f=a(14),v=a.n(f),h=a(224),_=a(16),y=a.n(_),g=a(228),b=a(225),E=a(226),C=a(69),x=a.n(C),w=a(70),k=a.n(w);var O=function(e){var t=e.title,a=e.value,n=e.lastUpdate,c=e.description,o=e.style,s=k()(y.a.card,o);return r.a.createElement(h.a,{item:!0,component:g.a,xs:12,md:3,className:s},r.a.createElement(b.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(n).toDateString()),r.a.createElement(E.a,{variant:"body2"},c)))};var j=function(e){var t=e.data;return r.a.createElement("div",{className:v.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(O,{title:"Infected",value:t.confirmed,lastUpdate:t.lastUpdate,description:"Number of active cases of COVID-19",style:y.a.infected}),r.a.createElement(O,{title:"Recovered",value:t.recovered,lastUpdate:t.lastUpdate,description:"Number of recoveries from COVID-19",style:y.a.recovered}),r.a.createElement(O,{title:"Deaths",value:t.deaths,lastUpdate:t.lastUpdate,description:"Number of deaths caused by COVID-19",style:y.a.deaths})))},N=a(94),U="https://covid19.mathdro.id/api",D=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=U,t&&(a="".concat(U,"/countries/").concat(t),console.log(t)),e.prev=2,e.next=5,N.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("".concat(U,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=a(75);var V=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country,s=a?r.a.createElement(S.Bar,{width:"500",height:"200",data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return r.a.createElement("div",{className:v.a.container},o?s:null)},B=a(79),A=a(229),M=a(227),R=a(76),W=a.n(R),J=function(e){var t=e.onChangeCountry,a=Object(n.useState)([]),c=Object(B.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(A.a,{className:W.a.formControl},r.a.createElement(M.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"United States"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},P=a(77),G=a.n(P),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeCountry=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:a=e.sent,n.setState({data:a,country:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:{},country:""},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return t.confirmed?r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{className:v.a.image,src:G.a,alt:"COVID-19"}),r.a.createElement(j,{data:t}),r.a.createElement(J,{onChangeCountry:this.onChangeCountry}),r.a.createElement(V,{data:t,country:a})):r.a.createElement("h2",{style:{textAlign:"center"}},"Loading ....")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__Zro0y"}},77:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},82:function(e,t,a){e.exports=a(206)}},[[82,1,2]]]);
//# sourceMappingURL=main.63265a06.chunk.js.map