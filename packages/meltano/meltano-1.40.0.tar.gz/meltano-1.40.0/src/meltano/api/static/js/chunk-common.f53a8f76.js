(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"134b":function(t,e,r){"use strict";r("28a5");e["a"]=function(){return window.FLASK||{appUrl:"http://localhost:5000",oauthServiceUrl:"http://localhost:5000/-/oauth",oauthServiceProviders:"all".split(",").filter(Boolean),isNotificationEnabled:!1,isReadonlyEnabled:!1,isAnonymousReadonlyEnabled:!1,isSendAnonymousUsageStats:!1,projectId:"none",version:"source"}}},"21e3":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("2ef0"),a=Object(n["property"])("name")},"37d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("2b0e"),a=r("0284"),s=r.n(a);function o(t){var e=t.id,r=t.router,a="hasDisabledTracking"in localStorage&&"true"===localStorage.getItem("hasDisabledTracking");a||n["default"].use(s.a,{id:e,router:r,set:[{field:"dimension1",value:n["default"].prototype.$flask.projectId},{field:"dimension2",value:n["default"].prototype.$flask.version}]})}},"441e":function(t,e,r){"use strict";r("8e6e"),r("456d"),r("7514");var n=r("bd86"),a=(r("7f7f"),r("ac6a"),r("75fc")),s=r("5171"),o=r("97c3");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={computed:{getIsDateAttribute:function(){return o["a"]},getHasValidDateRange:function(){return s["d"]},dateAttributes:function(){var t=this,e=[],r=this.report.fullDesign,n=r.joins||[],s=[r].concat(Object(a["a"])(n)).map((function(t){return t.relatedTable}));return s.forEach((function(r){var n=r.name,a=r.columns;a.forEach((function(r){t.getIsDateAttribute(r)&&e.push(i({sourceName:n},r))}))})),e},getFilters:function(){var t=this;return function(e){var r=t.report.queryPayload.filters||{},n=r.columns||[];return n.filter((function(t){return t.key?t.key===e.key:t.sourceName===e.sourceName&&t.name===e.name}))}},dateRanges:function(){var t=this;return this.dateAttributes.map((function(e){var r=t.getFilters(e);return Object(s["c"])(r,t.report.queryPayload.today).absoluteDateRange}))},dateRange:function(){var t=this;return this.dateRanges.find((function(e){return t.getHasValidDateRange(e)}))},hasDateRange:function(){return this.dateRange&&Object(s["d"])(this.dateRange)},dateRangeLabel:function(){return Object(s["b"])(this.dateRange)}}};e["a"]=u},4678:function(t,e,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=s(t);return r(e)}function s(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="4678"},"4e02":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));r("0d6d");var n=r("bc3a"),a=r.n(n),s=r("fa7d"),o=Object.freeze({COLUMN:"column",AGGREGATE:"aggregate",TIMEFRAME:"timeframe"}),c=Object.freeze({DATE:"date",STRING:"string",TIME:"time"});e["c"]={getTable:function(t){return a.a.get(s["a"].apiUrl("repos/tables","".concat(t)))},getTopic:function(t,e){return a.a.get(s["a"].apiUrl("repos","".concat(t,"/").concat(e)))},index:function(t,e,r){return a.a.get(s["a"].apiUrl("repos/designs","".concat(t,"/").concat(e,"/").concat(r)))}}},5171:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"d",(function(){return l})),r.d(e,"e",(function(){return d})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return b})),r.d(e,"h",(function(){return g}));r("4917"),r("7514"),r("0d6d");var n=r("c1df"),a=r.n(n),s=r("fa7d"),o=Object.freeze({PERIODS:{DAYS:{NAME:"d",LABEL:"Days"},MONTHS:{NAME:"m",LABEL:"Months",IS_DISABLED:!0},YEARS:{NAME:"y",LABEL:"Years",IS_DISABLED:!0}},SIGNS:{LAST:{NAME:"-",LABEL:"Last"},NEXT:{NAME:"+",LABEL:"Next"}}});function c(t,e){var r=t.find((function(t){return"greater_or_equal_than"===t.expression})),n=t.find((function(t){return"less_or_equal_than"===t.expression})),a=r&&f(r.value)&&n&&f(n.value),s=a?r.value:null,o=a?n.value:null,c=r?i(r.value,e):null,u=n?i(n.value,e):null,l={start:c,end:u},d={start:s,end:o},b=h();return{isRelative:a,absoluteDateRange:l,relativeDateRange:d,priorCustomDateRange:b}}function i(t,e){var r=f(t),n=r?p(t,e):t;return s["a"].getDateFromYYYYMMDDString(n)}function u(t){if(!l(t))return"None";var e=s["a"].formatDateStringYYYYMMDD(t.start),r=s["a"].formatDateStringYYYYMMDD(t.end);return"".concat(e," - ").concat(r)}function l(t){return t.start&&t.end}function f(t){return/[+-]\d*[dmy]/.test(t)}function d(t){return t===o.SIGNS.LAST.NAME}function h(){return{start:null,end:null}}function b(t){var e=t.start,r=t.end,n=g(e),a=g(r),s=Math.abs(n.number),o=Math.abs(a.number),c=s>o?"start":"end";return t[c]}function g(t){var e=t.match(/([+-])(\d*)([dmy])/),r=e[1],n=e[2],a=e[3];return{sign:r,number:n,period:a}}function p(t,e){var r=g(t),n=r.sign,o=r.number,c=r.period,i=d(n)?"subtract":"add",u=a()(e)[i](o,c);return s["a"].formatDateStringYYYYMMDD(u.toDate())}},5605:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns is-gapless"},[r("section",{staticClass:"column is-full"},[r("div",{staticClass:"box-transparent box is-radiusless is-shadowless"},[t._t("default")],2)])])},a=[],s={name:"RouterViewLayout"},o=s,c=r("2877"),i=Object(c["a"])(o,n,a,!1,null,"c8d7b7d0",null);e["a"]=i.exports},6266:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("0d6d");var n=Object.freeze({AREA:{configType:"line",icon:"chart-area",label:"Area",type:"AreaChart"},HORIZONTAL_BAR:{configType:"horizontalBar",icon:"meltano-custom-chart-horizontal-bar",label:"Horizontal Bar",type:"BarChart"},LINE:{configType:"line",icon:"chart-line",label:"Line",type:"LineChart"},SCATTER:{configType:"line",icon:"meltano-custom-chart-scatter",label:"Scatter",type:"ScatterChart"},VERTICAL_BAR:{configType:"bar",icon:"chart-bar",label:"Vertical Bar",type:"VerticalBarChart"}})},"63e7":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("0d6d");var n=r("bc3a"),a=r.n(n),s=r("fa7d"),o=Object.freeze({DASHBOARD:"dashboard",REPORT:"report"});e["b"]={generate:function(t){return a.a.post(s["a"].apiUrl("embeds","embed"),t)},load:function(t,e){var r=s["a"].apiUrl("embeds/embed",t);return e&&(r+="?today=".concat(e)),a.a.get(r)}}},"8ef6":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}]},[r(t.chartType,{tag:"component",attrs:{"chart-type":t.chartType,results:t.results,"result-aggregates":t.resultAggregates}})],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("canvas",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}],ref:"chart",attrs:{height:"200"}})},o=[],c=(r("6762"),r("2fdb"),r("ac6a"),r("456d"),r("7514"),r("30ef")),i=r.n(c),u=r("fa7d"),l={data:function(){return{chart:!1,config:{type:"horizontalBar",data:{labels:[],datasets:[{label:"",data:[],backgroundColor:"rgba(103, 58, 183, 0.2)",borderColor:"rgba(103, 58, 183, 0.2)",borderWidth:2}]},options:{scales:{xAxes:[{ticks:{beginAtZero:!0}}],yAxes:[{ticks:{beginAtZero:!0,callback:function(t,e,r){var n=r.length,a=20,s=parseInt(n/a,10);return r.length>a?e%s===0?t:"":t}}}]}}}}},props:["chartType","results","resultAggregates"],methods:{createChart:function(){var t=this.$refs.chart.getContext("2d");this.chart=new i.a(t,this.config),this.updateChart()},changeType:function(){var t=this.$refs.chart.getContext("2d");this.config.type=this.chartType,this.chart.destroy(),this.chart=new i.a(t,this.config),this.updateChart()},chartLabel:function(t){var e=this.resultAggregates.find((function(e){return e.id===t})),r=this.resultAggregates.filter((function(t){return t.label===e.label})).length>1;return r?"".concat(e.label," [Source: ").concat(e.source,"]"):e.label},updateChart:function(){var t=this;if(this.results.length){this.chart.data.labels=[],this.chart.data.datasets=[];var e=Object.keys(this.results[0]),r=this.resultAggregates.map((function(t){return t.id})),n=u["a"].difference(e,r),a={};this.results.forEach((function(r){var s=[];e.forEach((function(e,o){if(n.includes(e))s.push(r[e]);else{var c=u["a"].getColor(o);a[e]||(a[e]={label:t.chartLabel(e),data:[],backgroundColor:c.backgroundColor,borderColor:c.borderColor,borderWidth:1},"LineChart"===t.chartType&&(a[e].fill=!1),"ScatterChart"===t.chartType&&(a[e].showLine=!1)),a[e].data.push(r[e])}})),s=u["a"].truncate(s.join("-")),t.chart.data.labels.push(s)})),Object.keys(a).forEach((function(e){t.chart.data.datasets.push(a[e])})),this.chart.update()}}},watch:{results:function(){this.updateChart()},chartType:function(){this.changeType()}}},f=l,d=r("6266"),h={name:"AreaChart",mixins:[f],mounted:function(){this.config.type=d["a"].AREA.configType,this.createChart()}},b=h,g=r("2877"),p=Object(g["a"])(b,s,o,!1,null,null,null),m=p.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("canvas",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}],ref:"chart",attrs:{height:"200"}})},v=[],y={name:"BarChart",mixins:[f],mounted:function(){this.config.type=d["a"].HORIZONTAL_BAR.configType,this.createChart()}},w=y,O=Object(g["a"])(w,j,v,!1,null,null,null),A=O.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("canvas",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}],ref:"chart",attrs:{height:"200"}})},C=[],S={name:"LineChart",mixins:[f],mounted:function(){this.config.type=d["a"].LINE.configType,this.createChart()}},T=S,E=Object(g["a"])(T,D,C,!1,null,null,null),k=E.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("canvas",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}],ref:"chart",attrs:{height:"200"}})},x=[],L={name:"ScatterChart",mixins:[f],mounted:function(){this.config.type=d["a"].SCATTER.configType,this.createChart()}},R=L,M=Object(g["a"])(R,Y,x,!1,null,null,null),z=M.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("canvas",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}],ref:"chart",attrs:{height:"200"}})},N=[],_={name:"VerticalBarChart",mixins:[f],mounted:function(){this.config.type=d["a"].VERTICAL_BAR.configType,this.createChart()}},B=_,P=Object(g["a"])(B,I,N,!1,null,null,null),U=P.exports,V={name:"Chart",components:{AreaChart:m,BarChart:A,LineChart:k,ScatterChart:z,VerticalBarChart:U},props:{chartType:{type:String,required:!0},resultAggregates:{type:Array,required:!0},results:{type:Array,required:!0}}},Z=V,F=Object(g["a"])(Z,n,a,!1,null,null,null);e["a"]=F.exports},"97c3":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("4e02");function a(t){return t.type===n["a"].DATE||t.type===n["a"].TIME}},d706:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"101.508",height:"20",viewBox:"0 0 101.508 20"}},[r("g",{attrs:{id:"meltano-logo-with-text",transform:"translate(-20 -29)"}},[r("path",{attrs:{id:"Combined-Shape",d:"M39.695,49H21.79A1.841,1.841,0,0,1,20,47.113V30.887A1.841,1.841,0,0,1,21.79,29a1.745,1.745,0,0,1,1.267.554l9.162,9.668,6.165-6.978a1.749,1.749,0,0,1,1.31-.6,1.841,1.841,0,0,1,1.79,1.887V47.113A1.841,1.841,0,0,1,39.695,49Zm-16.83-2.83h3.217l3.979-4.5-7.2-7.572Zm7.366,0h8.032V37.113Z",fill:"#464acb","fill-rule":"evenodd"}}),r("path",{attrs:{id:"Meltano-Copy",d:"M173.413,62.611l-3.078-10.033h-.079q.166,3.062.166,4.085v5.948H168V49.822h3.691l3.026,9.78h.052l3.21-9.78h3.691V62.611h-2.527V56.558q0-.429.013-.988t.118-2.974h-.079l-3.3,10.016Zm14.955-8.065a1.692,1.692,0,0,0-1.329.538,2.49,2.49,0,0,0-.551,1.526h3.743a2.224,2.224,0,0,0-.516-1.526A1.747,1.747,0,0,0,188.369,54.546Zm.376,8.24a5.046,5.046,0,0,1-3.691-1.3,4.936,4.936,0,0,1-1.329-3.691,5.429,5.429,0,0,1,1.229-3.8,4.375,4.375,0,0,1,3.4-1.343,4.306,4.306,0,0,1,3.227,1.181,4.468,4.468,0,0,1,1.154,3.263v1.295h-6.306a2.568,2.568,0,0,0,.673,1.776,2.369,2.369,0,0,0,1.767.639,7.332,7.332,0,0,0,1.67-.184,8.356,8.356,0,0,0,1.644-.586V62.1a6.262,6.262,0,0,1-1.5.52A9.426,9.426,0,0,1,188.745,62.786Zm8.466-.175h-2.667V49h2.667Zm6.559-1.951a5.781,5.781,0,0,0,1.679-.306V62.34a5.986,5.986,0,0,1-2.449.446,3,3,0,0,1-2.331-.809,3.523,3.523,0,0,1-.73-2.427V54.835h-1.277V53.706l1.469-.892.77-2.064h1.705v2.082h2.737v2h-2.737V59.55a1.042,1.042,0,0,0,.319.84A1.259,1.259,0,0,0,203.77,60.661Zm9.507,1.951-.516-1.33h-.07a3.94,3.94,0,0,1-1.386,1.177,4.479,4.479,0,0,1-1.858.328,3,3,0,0,1-2.217-.8,3.091,3.091,0,0,1-.809-2.292,2.581,2.581,0,0,1,1.089-2.3,6.308,6.308,0,0,1,3.284-.818l1.7-.052v-.429a1.33,1.33,0,0,0-1.522-1.487,6.933,6.933,0,0,0-2.755.709l-.883-1.8a7.947,7.947,0,0,1,3.743-.884,4.662,4.662,0,0,1,3.017.857,3.169,3.169,0,0,1,1.049,2.607v6.517Zm-.787-4.531-1.032.035a3.3,3.3,0,0,0-1.732.42,1.319,1.319,0,0,0-.568,1.172q0,1.128,1.294,1.128a2.05,2.05,0,0,0,1.482-.534,1.875,1.875,0,0,0,.555-1.417Zm14.063,4.531h-2.667V56.9a2.744,2.744,0,0,0-.376-1.588,1.368,1.368,0,0,0-1.2-.529,1.8,1.8,0,0,0-1.618.748,4.639,4.639,0,0,0-.5,2.48v4.6h-2.667v-9.78h2.038l.359,1.251h.149a2.819,2.819,0,0,1,1.229-1.072,4.183,4.183,0,0,1,1.78-.363,3.419,3.419,0,0,1,2.589.923,3.7,3.7,0,0,1,.883,2.664Zm4.513-4.907a4.105,4.105,0,0,0,.477,2.2,1.7,1.7,0,0,0,1.552.744,1.677,1.677,0,0,0,1.535-.739,4.165,4.165,0,0,0,.468-2.2,4.04,4.04,0,0,0-.472-2.178,2.008,2.008,0,0,0-3.087,0A4.037,4.037,0,0,0,231.066,57.7Zm6.76,0a5.256,5.256,0,0,1-1.259,3.735,4.566,4.566,0,0,1-3.507,1.347,4.9,4.9,0,0,1-2.484-.617,4.1,4.1,0,0,1-1.653-1.771,5.954,5.954,0,0,1-.577-2.694,5.227,5.227,0,0,1,1.251-3.726,4.592,4.592,0,0,1,3.516-1.33,4.932,4.932,0,0,1,2.484.612,4.086,4.086,0,0,1,1.653,1.758A5.9,5.9,0,0,1,237.826,57.7Z",transform:"translate(-116.319 -15.398)",fill:"#464acb","fill-rule":"evenodd"}})])])},a=[],s={name:"Logo"},o=s,c=r("2877"),i=Object(c["a"])(o,n,a,!1,null,null,null);e["a"]=i.exports},d85b:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{class:{grayscale:t.isGrayscale},attrs:{src:t.connectorLogoUrl,alt:""}})},a=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"ConnectorLogo",props:{connector:{type:String,required:!0,default:""},type:{type:String,default:"extractors"},isGrayscale:{type:Boolean,default:!1}},computed:i({},Object(o["c"])("plugins",["getPluginLogoUrl"]),{connectorLogoUrl:function(){return this.getPluginLogoUrl(this.type,this.connector)}})},l=u,f=r("2877"),d=Object(f["a"])(l,n,a,!1,null,null,null);e["a"]=d.exports},fa7d:function(t,e,r){"use strict";var n=r("768b"),a=(r("28a5"),r("75fc")),s=(r("a481"),r("6b54"),r("7618")),o=(r("7f7f"),r("ac4d"),r("8a81"),r("ac6a"),r("0d6d"),r("6762"),r("2fdb"),r("2ef0")),c=r.n(o),i=r("134b"),u=r("c1df"),l=r.n(u),f=r("21e3"),d=/(?:tap-|target-)?(.*)/,h=/(password|private|secret|token)/,b=/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,g=Object(i["a"])();e["a"]={root:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return g.appUrl?"".concat(g.appUrl).concat(t):t},apiRoot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return this.root("/api/v1".concat(t))},apiUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[t,e].join("/");return this.apiRoot().concat(r)},docsUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1?arguments[1]:void 0;return e=e?"#".concat(e):"","https://meltano.com/docs".concat(t,".html").concat(e)},downloadBlobAsFile:function(t,e){var r=window.URL.createObjectURL(new Blob([t])),n=document.createElement("a");n.href=r,n.setAttribute("download",e),document.body.appendChild(n),n.click(),document.body.removeChild(n)},getConnectorLogoUrl:function(t){t="postgresql"===t?"postgres":t;var e=d.exec(t)[1];return"/static/logos/".concat(e,"-logo.png")},getIsSubRouteOf:function(t,e){return 0===e.indexOf(t)},scrollToBottom:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;this.scrollToTarget(t,t.scrollHeight)},scrollToTarget:function(t,e){t.scrollTo({top:e,left:0,behavior:"smooth"})},scrollToTop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;this.scrollToTarget(t,0)},colors:{backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]},getColor:function(t){var e=this.colors.backgroundColor.length;return{backgroundColor:this.colors.backgroundColor[t%e],borderColor:this.colors.borderColor[t%e]}},difference:function(t,e){return t.filter((function(t){return!e.includes(t)})).concat(e.filter((function(e){return!t.includes(e)})))},deepFreeze:function(t){var e=Object.getOwnPropertyNames(t),r=!0,n=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var i=o.value,u=t[i];t[i]=u&&"object"===Object(s["a"])(u)?this.deepFreeze(u):u}}catch(l){n=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}return Object.freeze(t)},capitalize:function(t){if(!t)return"";var e=t.toString();return e.charAt(0).toUpperCase()+e.slice(1)},extractFileNameFromPath:function(t){return t.replace(/^.*[\\\/]/,"")},hyphenate:function(t,e){if(!t)return"";var r="".concat(e,"-")||!1;return r+=t.toLowerCase().replace(/\s\s*/g,"-"),r},inferInputType:function(t){return h.test(t)?"password":"text"},isValidEmail:function(t){return b.test(t)},jsDashify:function(t,e){return t&&e?this.hyphenate(e,"js-".concat(t.toLowerCase())):""},key:function(){for(var t=function(t){return t["name"]||String(t)},e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.map(t).join(":")},pretty:function(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch(e){return t}},requiredConnectorSettingsKeys:function(t,e){return e?c.a.intersection.apply(c.a,Object(a["a"])(e)):t.map(f["a"])},singularize:function(t){if(!t)return"";var e=t.toString(),r=e[e.length-1];return"s"===r.toLowerCase()&&(e=e.slice(0,-1)),e},snowflakeAccountParser:function(t){var e="snowflakecomputing.com",r=t.indexOf(e),n="";if(r>-1){var a=t.slice(0,r+e.length);a.indexOf("http")>-1&&(a=a.slice(a.indexOf("//")+2)),n=a.split(".")[0]}return n},titleCase:function(t){return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},truncate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>e?"".concat(t.substring(0,e),"..."):t},underscoreToSpace:function(t){return t.replace(/_/g," ")},dateIso8601:function(t){return"".concat(new Date(t).toISOString().split(".")[0],"Z")},dateIso8601Nullable:function(t){return t?this.dateIso8601(t):null},getFirstOfMonthAsYYYYMMDD:function(){var t=new Date,e=new Date(t.getFullYear(),t.getMonth(),1);return this.formatDateStringYYYYMMDD(e)},getInputDateMeta:function(){return{min:"2000-01-01",pattern:"[0-9]{4}-[0-9]{2}-[0-9]{2}",today:this.formatDateStringYYYYMMDD(new Date)}},getIsDateStringInFormatYYYYMMDD:function(t){var e=/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(t);return e},getDateFromYYYYMMDDString:function(t){var e=t.slice(0,10);if(this.getIsDateStringInFormatYYYYMMDD(e)){var r=e.split("-"),a=Object(n["a"])(r,3),s=a[0],o=a[1],c=a[2];return new Date(parseInt(s),parseInt(o)-1,parseInt(c))}return null},formatDateStringYYYYMMDD:function(t){var e=new Date(t),r=new Date(e.getTime()-6e4*e.getTimezoneOffset());return r.toISOString().split("T")[0]},momentFromNow:function(t){return l()(t).fromNow()},momentFormatlll:function(t){return l()(t).format("lll")},momentHumanizedDuration:function(t,e){var r=new l.a(t),n=new l.a(e),a=l.a.duration(n.diff(r)),s=function(t,e){return t?"".concat(t," ").concat(e," "):""},o=s(a.days(),"days"),c=s(a.hours(),"hours"),i=s(a.minutes(),"min"),u=s(a.seconds(),"sec");return"".concat(o).concat(c).concat(i).concat(u)},copyToClipboard:function(t){var e;t.select(),t.setSelectionRange(0,99999);try{e=document.execCommand("copy")}catch(r){e=!1}finally{document.getSelection().removeAllRanges()}return e}}}}]);
//# sourceMappingURL=chunk-common.f53a8f76.js.map