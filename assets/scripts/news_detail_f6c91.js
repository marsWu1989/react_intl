webpackJsonp([4],{306:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(300),c=a(u),d=n(307),s=a(d),f=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1},n}return r(t,e),i(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,n=[],a=[];if(t.alerts.length>0){var l=s.default["level_"+t.alerts[0].level_no];n.push(c.default.createElement("div",{className:s.default.alertContent},c.default.createElement("i",{className:l},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var o=0;o<=t.forecastDayList.length-1;o++){var r=t.forecastDayList[o],i=t.forecastaqi[r.Fpredict_date].desc,u=s.default["level_"+t.forecastaqi[r.Fpredict_date].level];t.forecastaqi[r.Fpredict_date].desc.length>2&&(i=t.forecastaqi[r.Fpredict_date].desc.substring(0,2)),a.push(c.default.createElement("li",{className:s.default.item,key:o},c.default.createElement("span",{className:s.default.week},t.forecastaqi[r.Fpredict_date].week),c.default.createElement("span",{className:s.default.date},t.forecastaqi[r.Fpredict_date].day),c.default.createElement("span",{className:s.default.temp},r.Ftemp_high),c.default.createElement("i",{className:s.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+r.Ficon_day+".png",alt:r.Ficon_day})),c.default.createElement("span",{className:s.default.wea},r.Fcondition_day),c.default.createElement("span",{className:s.default.wind},r.Fwind_dir_day),c.default.createElement("b",{className:u},i)))}console.log(a);var d=s.default.hide;return d=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.head},c.default.createElement("logo",{className:s.default.logo}),c.default.createElement("div",{className:s.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:d},c.default.createElement("div",{className:s.default.title},c.default.createElement("div",{className:s.default.alert},n,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:s.default.more},"更多")),c.default.createElement("div",{className:s.default.items},c.default.createElement("ul",null,a))))}}]),t}(u.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(300),c=a(u),d=n(302),s=n(309),f=a(s),m=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1},n}return r(t,e),i(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.nav},c.default.createElement(d.Link,{to:"/",className:f.default.home}),c.default.createElement(d.Link,{to:"/downlaod",className:f.default.download}),c.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:t},c.default.createElement("ul",{className:f.default.items},c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/downlaod"},"下载")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"天气服务")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"关于墨迹")))))}}]),t}(u.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",download:"Nav_download",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},316:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(300),c=a(u),d=n(317),s=a(d),f=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1,top:null},n._handleScroll=n.handleScroll.bind(n),n}return r(t,e),i(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentDidUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){document.body.scrollTop=0,this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=s.default.hide;return t=this.state.display?s.default.show:s.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(u.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},332:function(e,t,n){var a,l,o;!function(n,r){l=[t,e],a=r,o="function"==typeof a?a.apply(t,l):a,!(void 0!==o&&(e.exports=o))}(this,function(e,t){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function a(e){try{delete window[e]}catch(t){window[e]=void 0}}function l(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}function o(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=e,i=t.timeout||r.timeout,u=t.jsonpCallback||r.jsonpCallback,c=void 0;return new Promise(function(r,d){var s=t.jsonpCallbackFunction||n(),f=u+"_"+s;window[s]=function(e){r({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),l(f),a(s)},o+=o.indexOf("?")===-1?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+o+u+"="+s),m.id=f,document.getElementsByTagName("head")[0].appendChild(m),c=setTimeout(function(){d(new Error("JSONP request to "+e+" timed out")),a(s),l(f)},i)})}var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};t.exports=o})},336:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return r.default.createElement("div",{className:v.default.detail},r.default.createElement(c.default,{data:e.data.forecast}),r.default.createElement(s.default,null),r.default.createElement(m.default,{detail:e.data.detail,id:e.params.id}),r.default.createElement(h.default,null))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(300),r=a(o),i=n(303),u=n(306),c=a(u),d=n(308),s=a(d),f=n(337),m=a(f),p=n(316),h=a(p),_=n(341),v=a(_);t.default=(0,i.connect)(function(e){return{data:e}})(l)},337:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(300),c=a(u),d=n(303),s=n(338),f=n(340),m=a(f),p=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:1},n}return r(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,s.detailPost)(this.props.id))}},{key:"render",value:function(){var e=[],t=this.props.detail.data;return""!==t.img&&e.push(c.default.createElement("img",{src:t.img,alt:"pic"})),c.default.createElement("div",{className:m.default.info},c.default.createElement("p",{className:m.default.text,dangerouslySetInnerHTML:{__html:t.content}}))}}]),t}(u.Component);t.default=(0,d.connect)()(p)},338:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.detailPost=t.detailReceive=t.detailRequest=void 0;var l=n(332),o=a(l),r=n(339),i=t.detailRequest=function(e){return{type:r.DETAIL_REQUEST,amount:e}},u=t.detailReceive=function(e,t){return{type:r.DETAIL_RECEIVE,amount:e,data:t}};t.detailPost=function(e){return function(t){return t(i(e)),(0,o.default)("http://www.mojitest.com/gw/getNewsInfo?id="+e+"&callback=123").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(n){t(u(e,n.data))}).catch(function(e){return console.log("parsing failed",e)})}}},340:function(e,t){e.exports={info:"NewsInfo_info",time:"NewsInfo_time",text:"NewsInfo_text"}},341:function(e,t){e.exports={detail:"NewsDetail_detail"}}});
//# sourceMappingURL=news_detail_f6c91.js.map