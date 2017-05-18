webpackJsonp([4],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(307),s=n(d),f=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return r(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=s.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:s.default.alertContent,key:"alert"},c.default.createElement("i",{className:l},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var o=0;o<=t.forecastDayList.length-1;o++){var r=t.forecastDayList[o];if(console.log(r),r.length<=0){var u=t.forecastaqi[r.Fpredict_date].desc,i=s.default["level_"+t.forecastaqi[r.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(c.default.createElement("li",{className:s.default.item,key:o},c.default.createElement("span",{className:s.default.week},t.forecastaqi[r.Fpredict_date].week),c.default.createElement("span",{className:s.default.date},t.forecastaqi[r.Fpredict_date].day),c.default.createElement("span",{className:s.default.temp},r.Ftemp_high),c.default.createElement("i",{className:s.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+r.Ficon_day+".png",alt:r.Ficon_day})),c.default.createElement("span",{className:s.default.wea},r.Fcondition_day),c.default.createElement("span",{className:s.default.wind},r.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}else n.push(c.default.createElement("li",{className:s.default.item,key:o},c.default.createElement("span",{className:s.default.week},"无"),c.default.createElement("span",{className:s.default.date},"无"),c.default.createElement("span",{className:s.default.temp},"无"),c.default.createElement("i",{className:s.default.icon},"无"),c.default.createElement("span",{className:s.default.wea},"无"),c.default.createElement("span",{className:s.default.wind},"无"),c.default.createElement("b",{className:s.default.level},"无")))}var d=s.default.hide;return d=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.head},c.default.createElement("logo",{className:s.default.logo}),c.default.createElement("div",{className:s.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:d},c.default.createElement("div",{className:s.default.title},c.default.createElement("div",{className:s.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:s.default.more},"更多")),c.default.createElement("div",{className:s.default.items},c.default.createElement("ul",null,n))))}}]),t}(i.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(302),s=a(309),f=n(s),m=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return r(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=f.default.home,n=f.default.download;switch(t){case"/":a=f.default.homeCur;break;case"/downlaod":n=f.default.downloadCur;break;default:a=f.default.home,n=f.default.download}var l=f.default.hide;return l=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.nav},c.default.createElement(d.Link,{to:"/",className:a}),c.default.createElement(d.Link,{to:"/downlaod",className:n}),c.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:l},c.default.createElement("ul",{className:f.default.items},c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/downlaod"},"下载")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/about"},"关于墨迹")))))}}]),t}(i.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(317),s=n(d),f=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return r(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=s.default.hide;return t=this.state.display?s.default.show:s.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},332:function(e,t,a){var n,l,o;!function(a,r){l=[t,e],n=r,o="function"==typeof n?n.apply(t,l):n,!(void 0!==o&&(e.exports=o))}(this,function(e,t){"use strict";function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function l(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}function o(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=e,u=t.timeout||r.timeout,i=t.jsonpCallback||r.jsonpCallback,c=void 0;return new Promise(function(r,d){var s=t.jsonpCallbackFunction||a(),f=i+"_"+s;window[s]=function(e){r({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),l(f),n(s)},o+=o.indexOf("?")===-1?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+o+i+"="+s),m.id=f,document.getElementsByTagName("head")[0].appendChild(m),c=setTimeout(function(){d(new Error("JSONP request to "+e+" timed out")),n(s),l(f)},u)})}var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};t.exports=o})},336:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return r.default.createElement("div",{className:v.default.detail},r.default.createElement(c.default,{data:e.data.forecast}),r.default.createElement(s.default,null),r.default.createElement(m.default,{detail:e.data.detail,id:e.params.id}),r.default.createElement(h.default,null))}Object.defineProperty(t,"__esModule",{value:!0});var o=a(300),r=n(o),u=a(303),i=a(306),c=n(i),d=a(308),s=n(d),f=a(337),m=n(f),p=a(316),h=n(p),_=a(341),v=n(_);t.default=(0,u.connect)(function(e){return{data:e}})(l)},337:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(303),s=a(338),f=a(340),m=n(f),p=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={page:1},a}return r(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,s.detailPost)(this.props.id))}},{key:"render",value:function(){var e=[],t=this.props.detail.data;return""!==t.img&&e.push(c.default.createElement("img",{src:t.img,alt:"pic"})),c.default.createElement("div",{className:m.default.info},c.default.createElement("p",{className:m.default.text,dangerouslySetInnerHTML:{__html:t.content}}))}}]),t}(i.Component);t.default=(0,d.connect)()(p)},338:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.detailPost=t.detailReceive=t.detailRequest=void 0;var l=a(332),o=n(l),r=a(339),u=t.detailRequest=function(e){return{type:r.DETAIL_REQUEST,amount:e}},i=t.detailReceive=function(e,t){return{type:r.DETAIL_RECEIVE,amount:e,data:t}};t.detailPost=function(e){return function(t){return t(u(e)),(0,o.default)("http://www.mojitest.com/gw/getNewsInfo?id="+e+"&callback=123").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(a){t(i(e,a.data))}).catch(function(e){return console.log("parsing failed",e)})}}},340:function(e,t){e.exports={info:"NewsInfo_info",time:"NewsInfo_time",text:"NewsInfo_text"}},341:function(e,t){e.exports={detail:"NewsDetail_detail"}}});
//# sourceMappingURL=news_detail_23c39.js.map