webpackJsonp([1],{305:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(303),s=a(306),f=n(s),m=a(308),p=n(m),h=a(310),_=n(h),v=a(312),E=n(v),y=a(314),b=n(y),w=a(316),N=n(w),g=a(318),O=n(g),x=a(319),k=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,x.indexNewsPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.indexNews,n=e.route;return console.log(a),a.data?c.default.createElement("div",{className:O.default.box},c.default.createElement(f.default,{data:t}),c.default.createElement(p.default,{router:n.path}),c.default.createElement(_.default,{data:a.data.banner}),c.default.createElement(E.default,null),c.default.createElement(b.default,{data:a.data.news}),c.default.createElement(N.default,null)):c.default.createElement("div",null,"loading")}}]),t}(i.Component),j=function(e){var t=e.indexNews,a=e.forecast;return{indexNews:t,forecast:a}};t.default=(0,d.connect)(j)(k)},306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(307),s=n(d),f=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=s.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:s.default.alertContent,key:"alert"},c.default.createElement("i",{className:l},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=s.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(c.default.createElement("li",{className:s.default.item,key:r},c.default.createElement("span",{className:s.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:s.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:s.default.temp},o.Ftemp_high),c.default.createElement("i",{className:s.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:s.default.wea},o.Fcondition_day),c.default.createElement("span",{className:s.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}else n.push(c.default.createElement("li",{className:s.default.item,key:r},c.default.createElement("span",{className:s.default.week},"无"),c.default.createElement("span",{className:s.default.date},"无"),c.default.createElement("span",{className:s.default.temp},"无"),c.default.createElement("i",{className:s.default.icon},"无"),c.default.createElement("span",{className:s.default.wea},"无"),c.default.createElement("span",{className:s.default.wind},"无"),c.default.createElement("b",{className:s.default.level},"无")))}var d=s.default.hide;return d=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.head},c.default.createElement("logo",{className:s.default.logo}),c.default.createElement("div",{className:s.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:d},c.default.createElement("div",{className:s.default.title},c.default.createElement("div",{className:s.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:s.default.more},"更多")),c.default.createElement("div",{className:s.default.items},c.default.createElement("ul",null,n))))}}]),t}(i.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(302),s=a(309),f=n(s),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=f.default.home,n=f.default.download;switch(t){case"/":a=f.default.homeCur;break;case"/downlaod":n=f.default.downloadCur;break;default:a=f.default.home,n=f.default.download}var l=f.default.hide;return l=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.nav},c.default.createElement(d.Link,{to:"/",className:a}),c.default.createElement(d.Link,{to:"/download",className:n}),c.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:l},c.default.createElement("ul",{className:f.default.items},c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/download"},"下载")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/about"},"关于墨迹")))))}}]),t}(i.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e)return o.default.createElement("banner",{className:i.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(311),i=n(u);t.default=l},311:function(e,t){e.exports={banner:"Banner_banner"}},312:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),r=n(l),o=a(313),u=n(o),i=function(){return r.default.createElement("div",{className:u.default.weather},r.default.createElement("title",{className:u.default.title}),r.default.createElement("phone",{className:u.default.phone}),r.default.createElement("div",{className:u.default.desc},r.default.createElement("div",{className:u.default.time},r.default.createElement("b",null,"分钟级"),r.default.createElement("span",null,"短时预报分钟")),r.default.createElement("div",{className:u.default.KM},r.default.createElement("b",null,"公里级"),r.default.createElement("span",null,"预报范围缩小到1公里")),r.default.createElement("div",{className:u.default.AI},r.default.createElement("b",null,"AI智能"),r.default.createElement("span",null,"机械学习技术结合",r.default.createElement("br",null),"传统数值模式系统")),r.default.createElement("div",{className:u.default.view},r.default.createElement("b",null,"可视化"),r.default.createElement("span",null,"全球数据预报可视化",r.default.createElement("br",null),"世界领先模式同化系统"))))};t.default=i},313:function(e,t){e.exports={desc:"IndexWeather_desc",weather:"IndexWeather_weather",title:"IndexWeather_title",phone:"IndexWeather_phone",time:"IndexWeather_time",KM:"IndexWeather_KM",AI:"IndexWeather_AI",view:"IndexWeather_view"}},314:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data.data,a=[];if(t)for(var n=0;n<t.length;n++){var l=t[n];a.push(o.default.createElement("li",{className:i.default.item,key:n},o.default.createElement("p",{className:i.default.pic},o.default.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("img",{src:l.img,alt:"pic"}))),o.default.createElement("p",{className:i.default.text},o.default.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},l.title),o.default.createElement("b",null,l.date),o.default.createElement("span",null,l.description))))}return o.default.createElement("div",{className:i.default.info},o.default.createElement("title",{className:i.default.title}),o.default.createElement("div",{className:i.default.more},"更多资讯"),o.default.createElement("div",{className:i.default.list},o.default.createElement("ul",null,a)))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(315),i=n(u);t.default=l},315:function(e,t){e.exports={info:"IndexInfo_info",title:"IndexInfo_title",more:"IndexInfo_more",list:"IndexInfo_list",item:"IndexInfo_item",pic:"IndexInfo_pic",text:"IndexInfo_text"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(317),s=n(d),f=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=s.default.hide;return t=this.state.display?s.default.show:s.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},318:function(e,t){e.exports={box:"Home_box"}},319:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.indexNewsPost=t.indexNewsReceive=t.indexNewsRequest=void 0,a(320);var n=a(321),l=t.indexNewsRequest=function(e){return{type:n.INDEXNEWS_REQUEST,amount:e}},r=t.indexNewsReceive=function(e,t){return{type:n.INDEXNEWS_RECEIVE,amount:e,data:t}};t.indexNewsPost=function(e){return function(t){return t(l(e)),fetch("http://0.0.0.0:9527/api").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(a){t(r(e,a))}).catch(function(e){return console.log("parsing failed",e)})}}},320:function(e,t,a){e.exports=a(295)(258)}});
//# sourceMappingURL=index_0a36d.js.map