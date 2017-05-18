webpackJsonp([11],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(307),f=n(d),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=f.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:f.default.alertContent,key:"alert"},c.default.createElement("i",{className:l},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=f.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:f.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:f.default.temp},o.Ftemp_high),c.default.createElement("i",{className:f.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:f.default.wea},o.Fcondition_day),c.default.createElement("span",{className:f.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}else n.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},"无"),c.default.createElement("span",{className:f.default.date},"无"),c.default.createElement("span",{className:f.default.temp},"无"),c.default.createElement("i",{className:f.default.icon},"无"),c.default.createElement("span",{className:f.default.wea},"无"),c.default.createElement("span",{className:f.default.wind},"无"),c.default.createElement("b",{className:f.default.level},"无")))}var d=f.default.hide;return d=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.head},c.default.createElement("logo",{className:f.default.logo}),c.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:d},c.default.createElement("div",{className:f.default.title},c.default.createElement("div",{className:f.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),c.default.createElement("div",{className:f.default.items},c.default.createElement("ul",null,n)),c.default.createElement("div",{className:f.default.bg,onClick:function(){return e.handleShowOrHide()}})))}}]),t}(i.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon",bg:"Header_bg"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(302),f=a(309),s=n(f),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,n=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/mjsoft":n=s.default.downloadCur;break;default:a=s.default.home,n=s.default.download}var l=s.default.hide;return l=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.nav},c.default.createElement(d.Link,{to:"/",className:a}),c.default.createElement(d.Link,{to:"/mjsoft",className:n}),c.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:l,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("ul",{className:s.default.items},c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/mjsoft"},"下载")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/about"},"关于墨迹"))),c.default.createElement("div",{className:s.default.bg})))}}]),t}(i.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items",bg:"Nav_bg"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e.data)return o.default.createElement("banner",{className:i.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(311),i=n(u);t.default=l},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(317),f=n(d),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},318:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return o.default.createElement("div",{className:i.default.loading})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(319),i=n(u);t.default=l},319:function(e,t){e.exports={loading:"Loading_loading"}},322:function(e,t,a){e.exports=a(295)(258)},324:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={domain:"http://192.168.20.210:9527",static:""};t.default=a},366:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.router,a=c.default.about,n=c.default.road,l=c.default.report,r=c.default.biz,i=c.default.brand,d=c.default.join;switch(t){case"/about":a=c.default.aboutCur;break;case"/culture":n=c.default.roadCur;break;case"/report":l=c.default.reportCur;break;case"/biz":r=c.default.bizCur;break;case"/mojibrand":i=c.default.brandCur;break;case"/job":d=c.default.joinCur;break;default:a=c.default.aboutCur}return o.default.createElement("div",{className:c.default.Anav},o.default.createElement("ul",null,o.default.createElement("li",{className:a},o.default.createElement(u.Link,{to:"/about"},"关于墨迹")),o.default.createElement("li",{className:n},o.default.createElement(u.Link,{to:"/culture"},"墨迹之路")),o.default.createElement("li",{className:l},o.default.createElement(u.Link,{to:"/report"},"墨迹动态")),o.default.createElement("li",{className:r},o.default.createElement(u.Link,{to:"/biz"},"商务合作")),o.default.createElement("li",{className:i},o.default.createElement(u.Link,{to:"/mojibrand"},"品牌案例")),o.default.createElement("li",{className:d},o.default.createElement(u.Link,{to:"/job"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(302),i=a(367),c=n(i);t.default=l},367:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},409:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(303),f=a(306),s=n(f),m=a(308),p=n(m),_=a(310),b=n(_),v=a(366),h=n(v),E=a(410),y=n(E),j=a(412),w=n(j),N=a(414),g=n(N),k=a(316),O=n(k),C=a(318),A=n(C),H=a(416),P=n(H),M=a(417),S=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,M.joinPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.join,n=e.route;return a.data.banner?c.default.createElement("div",{className:P.default.box},c.default.createElement(s.default,{data:t}),c.default.createElement(p.default,null),c.default.createElement(b.default,{data:a.data.banner}),c.default.createElement(h.default,{router:n.path}),c.default.createElement(y.default,null),c.default.createElement(w.default,{data:a.data.data}),c.default.createElement(g.default,null),c.default.createElement(O.default,null)):c.default.createElement(A.default,null)}}]),t}(i.Component),x=function(e){var t=e.join,a=e.forecast;return{join:t,forecast:a}};t.default=(0,d.connect)(x)(S)},410:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return o.default.createElement("div",{className:c.default.AjoinEnvironment},o.default.createElement("div",{className:c.default.img}),o.default.createElement("div",{className:c.default.title}),o.default.createElement("div",{className:c.default.desc},o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement("i",{className:c.default.number01}),o.default.createElement("p",{className:c.default.text},"整洁宽松的办公区，让你可以轻松高效的工作",o.default.createElement("br",null),"休闲舒适的休息区，让你的生活充满乐趣")),o.default.createElement("li",null,o.default.createElement("i",{className:c.default.number02}),o.default.createElement("p",{className:c.default.text},"富有竞争力的薪酬保障，弹性的工作时间",o.default.createElement("br",null),"五天工作日，每天8小时工作时间")),o.default.createElement("li",null,o.default.createElement("i",{className:c.default.number03}),o.default.createElement("p",{className:c.default.text},"完善的社会保障、住房公积金",o.default.createElement("br",null),"带薪年假、带薪病假10天",o.default.createElement("br",null),"工作所需的相关补助，如午餐补助等",o.default.createElement("br",null),"年底的绩效奖金")))),o.default.createElement("div",{className:c.default.mail},"简历发送至：",o.default.createElement(u.Link,{to:"mailto:hr@moji.com"},"hr@moji.com")))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(302),i=a(411),c=n(i);t.default=l},411:function(e,t){e.exports={AjoinEnvironment:"AjoinEnvironment_AjoinEnvironment",img:"AjoinEnvironment_img",title:"AjoinEnvironment_title",desc:"AjoinEnvironment_desc",number01:"AjoinEnvironment_number01",number02:"AjoinEnvironment_number02",number03:"AjoinEnvironment_number03",text:"AjoinEnvironment_text",mail:"AjoinEnvironment_mail"}},412:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=e.data.data,a=[],n=0;n<=t.length-1;n++){var l=t[n],r="/job/"+l.id;a.push(o.default.createElement("li",{className:i.default.IOS,key:l.id},o.default.createElement("h3",null,l.title),o.default.createElement("i",null,o.default.createElement("img",{src:l.img,alt:l.title})),o.default.createElement("a",{href:r},"查看职位")))}return o.default.createElement("div",{className:i.default.AjoinJob},o.default.createElement("div",{className:i.default.title}),o.default.createElement("div",{className:i.default.list},o.default.createElement("ul",null,a)))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(413),i=n(u);t.default=l},413:function(e,t){e.exports={list:"AjoinJob_list",AjoinJob:"AjoinJob_AjoinJob",title:"AjoinJob_title"}},414:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return o.default.createElement("div",{className:i.default.AjoinMap})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(415),i=n(u);t.default=l},415:function(e,t){e.exports={AjoinMap:"AjoinMap_AjoinMap"}},416:function(e,t){e.exports={box:"Ajoin_box"}},417:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.joinPost=t.joinReceive=t.joinRequest=void 0,a(322);var l=a(418),r=a(324),o=n(r),u=t.joinRequest=function(){return{type:l.JOIN_REQUEST}},i=t.joinReceive=function(e){return{type:l.JOIN_RECEIVE,data:e}};t.joinPost=function(){return function(e){return e(u()),fetch(o.default.domain+"/api/job/").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){console.log(t),e(i(t))}).catch(function(e){return console.log("parsing failed",e)})}}}});
//# sourceMappingURL=Ajoin_de768.js.map