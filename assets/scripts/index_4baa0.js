webpackJsonp([1],{305:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(303),f=a(306),s=n(f),m=a(308),p=n(m),h=a(310),_=n(h),v=a(312),E=n(v),b=a(314),y=n(b),w=a(316),N=n(w),g=a(318),O=n(g),x=a(319),k=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,x.indexNewsPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.indexNews,n=e.route;return a.data.banner?i.default.createElement("div",{className:O.default.box},i.default.createElement(s.default,{data:t}),i.default.createElement(p.default,{router:n.path}),i.default.createElement(_.default,{data:a.data.banner}),i.default.createElement(E.default,null),i.default.createElement(y.default,{data:a.data.news}),i.default.createElement(N.default,null)):i.default.createElement("div",null,"loading")}}]),t}(d.Component),j=function(e){var t=e.indexNews,a=e.forecast;return{indexNews:t,forecast:a}};t.default=(0,c.connect)(j)(k)},306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(307),f=n(c),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=f.default["level_"+t.alerts[0].level_no];a.push(i.default.createElement("div",{className:f.default.alertContent,key:"alert"},i.default.createElement("i",{className:l},i.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),i.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,d=f.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(i.default.createElement("li",{className:f.default.item,key:r},i.default.createElement("span",{className:f.default.week},t.forecastaqi[o.Fpredict_date].week),i.default.createElement("span",{className:f.default.date},t.forecastaqi[o.Fpredict_date].day),i.default.createElement("span",{className:f.default.temp},o.Ftemp_high),i.default.createElement("i",{className:f.default.icon},i.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),i.default.createElement("span",{className:f.default.wea},o.Fcondition_day),i.default.createElement("span",{className:f.default.wind},o.Fwind_dir_day),i.default.createElement("b",{className:d},u)))}else n.push(i.default.createElement("li",{className:f.default.item,key:r},i.default.createElement("span",{className:f.default.week},"无"),i.default.createElement("span",{className:f.default.date},"无"),i.default.createElement("span",{className:f.default.temp},"无"),i.default.createElement("i",{className:f.default.icon},"无"),i.default.createElement("span",{className:f.default.wea},"无"),i.default.createElement("span",{className:f.default.wind},"无"),i.default.createElement("b",{className:f.default.level},"无")))}var c=f.default.hide;return c=this.state.display?f.default.show:f.default.hide,i.default.createElement("div",{className:f.default.head},i.default.createElement("logo",{className:f.default.logo}),i.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},i.default.createElement("b",null,t.city.name," ",t.city.pname),i.default.createElement("span",null,t.condition.Ftemp),i.default.createElement("i",null,i.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),i.default.createElement("div",{className:c},i.default.createElement("div",{className:f.default.title},i.default.createElement("div",{className:f.default.alert},a,i.default.createElement("b",null,t.time.monthG),i.default.createElement("span",null,"农历 ",t.time.monthN)),i.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),i.default.createElement("div",{className:f.default.items},i.default.createElement("ul",null,n))))}}]),t}(d.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(302),f=a(309),s=n(f),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,n=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/download":n=s.default.downloadCur;break;default:a=s.default.home,n=s.default.download}var l=s.default.hide;return l=this.state.display?s.default.show:s.default.hide,i.default.createElement("div",{className:s.default.nav},i.default.createElement(c.Link,{to:"/",className:a}),i.default.createElement(c.Link,{to:"/download",className:n}),i.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),i.default.createElement("div",{className:l,onClick:function(){return e.handleShowOrHide()}},i.default.createElement("ul",{className:s.default.items},i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/"},"首页")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/download"},"下载")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/tob"},"天气服务")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/news"},"资讯")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/about"},"关于墨迹"))),i.default.createElement("div",{className:s.default.bg})))}}]),t}(d.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items",bg:"Nav_bg"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e.data)return o.default.createElement("banner",{className:d.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(311),d=n(u);t.default=l},311:function(e,t){e.exports={banner:"Banner_banner"}},312:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),r=n(l),o=a(313),u=n(o),d=function(){return r.default.createElement("div",{className:u.default.weather},r.default.createElement("title",{className:u.default.title}),r.default.createElement("phone",{className:u.default.phone}),r.default.createElement("div",{className:u.default.desc},r.default.createElement("div",{className:u.default.time},r.default.createElement("b",null,"分钟级"),r.default.createElement("span",null,"短时预报分钟")),r.default.createElement("div",{className:u.default.KM},r.default.createElement("b",null,"公里级"),r.default.createElement("span",null,"预报范围缩小到1公里")),r.default.createElement("div",{className:u.default.AI},r.default.createElement("b",null,"AI智能"),r.default.createElement("span",null,"机械学习技术结合",r.default.createElement("br",null),"传统数值模式系统")),r.default.createElement("div",{className:u.default.view},r.default.createElement("b",null,"可视化"),r.default.createElement("span",null,"全球数据预报可视化",r.default.createElement("br",null),"世界领先模式同化系统"))))};t.default=d},313:function(e,t){e.exports={desc:"IndexWeather_desc",weather:"IndexWeather_weather",title:"IndexWeather_title",phone:"IndexWeather_phone",time:"IndexWeather_time",KM:"IndexWeather_KM",AI:"IndexWeather_AI",view:"IndexWeather_view"}},314:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data.data,a=[];if(t)for(var n=0;n<t.length;n++){var l=t[n];a.push(o.default.createElement("li",{className:i.default.item,key:n},o.default.createElement("p",{className:i.default.pic},o.default.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("img",{src:l.img,alt:"pic"}))),o.default.createElement("p",{className:i.default.text},o.default.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},l.title),o.default.createElement("b",null,l.date),o.default.createElement("span",null,l.description))))}return o.default.createElement("div",{className:i.default.info},o.default.createElement("title",{className:i.default.title}),o.default.createElement("div",{className:i.default.more},o.default.createElement(u.Link,{to:"/news"},"更多资讯")),o.default.createElement("div",{className:i.default.list},o.default.createElement("ul",null,a)))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(302),d=a(315),i=n(d);t.default=l},315:function(e,t){e.exports={info:"IndexInfo_info",title:"IndexInfo_title",more:"IndexInfo_more",list:"IndexInfo_list",item:"IndexInfo_item",pic:"IndexInfo_pic",text:"IndexInfo_text"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(317),f=n(c),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,i.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(d.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},318:function(e,t){e.exports={box:"Home_box"}},319:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.indexNewsPost=t.indexNewsReceive=t.indexNewsRequest=void 0,a(320);var l=a(321),r=a(322),o=n(r),u=t.indexNewsRequest=function(){return{type:l.INDEXNEWS_REQUEST}},d=t.indexNewsReceive=function(e){return{type:l.INDEXNEWS_RECEIVE,data:e}};t.indexNewsPost=function(){return function(e){return e(u()),fetch(o.default.domain+"/api").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){e(d(t))}).catch(function(e){return console.log("parsing failed",e)})}}},320:function(e,t,a){e.exports=a(295)(258)},322:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={domain:"http://0.0.0.0:9527",static:""};t.default=a}});
//# sourceMappingURL=index_4baa0.js.map