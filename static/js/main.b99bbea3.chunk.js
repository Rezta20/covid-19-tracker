(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),s=a(6),i=a.n(s),u=a(11),d=a(71),l=a(72),j=a(81),p=a(80),f=a(30),b=a.n(f),h=a(14),v=a.n(h),x=a(31),m=a.n(x),O=a(226),g=a(230),y=a(227),_=a(228),C=a(2),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(C.jsx)("div",{className:v.a.container,children:Object(C.jsxs)(O.a,{container:!0,spacing:3,justify:"center",children:[Object(C.jsx)(O.a,{item:!0,component:g.a,xs:12,md:3,className:m()(v.a.card,v.a.infected),children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(_.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(C.jsx)(_.a,{variant:"h5",children:Object(C.jsx)(b.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(C.jsx)(_.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsx)(_.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(C.jsx)(O.a,{item:!0,component:g.a,xs:12,md:3,className:m()(v.a.card,v.a.recovered),children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(_.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(C.jsx)(_.a,{variant:"h5",children:Object(C.jsx)(b.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(C.jsx)(_.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsxs)(_.a,{variant:"body2",children:[" ","Number of recoveries from COVID-19"," "]})]})}),Object(C.jsx)(O.a,{item:!0,component:g.a,xs:12,md:3,className:m()(v.a.card,v.a.deaths),children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(_.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(C.jsx)(_.a,{variant:"h5",children:Object(C.jsx)(b.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(C.jsx)(_.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsxs)(_.a,{variant:"body2",children:[" ","Number of deaths caused by COVID-19"," "]})]})})]})}):"Loading..."},k=a(29),D=a(32),N=a.n(D),S="https://covid19.mathdro.id/api",I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(45),U=a(78),E=a.n(U),G=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=e.country,s=Object(n.useState)([]),d=Object(k.a)(s,2),l=d[0],j=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=l.length?Object(C.jsx)(A.Line,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,f=a?Object(C.jsx)(A.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,r.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return Object(C.jsxs)("div",{className:E.a.container,children:[o?f:p," "]})},P=a(231),z=a(229),J=a(79),L=a.n(J),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(k.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(C.jsx)(P.a,{className:L.a.formControl,children:Object(C.jsxs)(z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(C.jsx)("option",{value:"global",children:"Global"}),c.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e},t)}))]})})},Q=a(33),R=a.n(Q),q=a.p+"static/media/corona.0070934e.png",W=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,console.log(n),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(C.jsxs)("div",{className:R.a.container,children:[Object(C.jsxs)("div",{className:R.a.title,children:["C",Object(C.jsx)("img",{className:R.a.image,src:q,alt:"coronaImage"}),"VID-19"]}),Object(C.jsx)(w,{data:t}),Object(C.jsx)(M,{handleCountryChange:this.handleCountryChange}),Object(C.jsx)(G,{data:t,country:a})]})}}]),a}(r.a.Component);o.a.render(Object(C.jsx)(W,{}),document.getElementById("root"))},33:function(e,t,a){e.exports={container:"App_container__1MQN3",title:"App_title__-GfWs",image:"App_image__3byI1"}},78:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},79:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}}},[[208,1,2]]]);
//# sourceMappingURL=main.b99bbea3.chunk.js.map