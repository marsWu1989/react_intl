webpackJsonp([3],{306:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(307),f=a(s),d=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1},n}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,n=[],a=[];if(t.alerts.length>0){var l=f.default["level_"+t.alerts[0].level_no];n.push(c.default.createElement("div",{className:f.default.alertContent,key:"alert"},c.default.createElement("i",{className:l},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];console.log(o);var u=t.forecastaqi[o.Fpredict_date].desc,i=f.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),a.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:f.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:f.default.temp},o.Ftemp_high),c.default.createElement("i",{className:f.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:f.default.wea},o.Fcondition_day),c.default.createElement("span",{className:f.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}var s=f.default.hide;return s=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.head},c.default.createElement("logo",{className:f.default.logo}),c.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:s},c.default.createElement("div",{className:f.default.title},c.default.createElement("div",{className:f.default.alert},n,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),c.default.createElement("div",{className:f.default.items},c.default.createElement("ul",null,a))))}}]),t}(i.Component);t.default=d},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(302),f=n(309),d=a(f),p=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1},n}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,n=d.default.home,a=d.default.download;switch(t){case"/":n=d.default.homeCur;break;case"/downlaod":a=d.default.downloadCur;break;default:n=d.default.home,a=d.default.download}var l=d.default.hide;return l=this.state.display?d.default.show:d.default.hide,c.default.createElement("div",{className:d.default.nav},c.default.createElement(s.Link,{to:"/",className:n}),c.default.createElement(s.Link,{to:"/downlaod",className:a}),c.default.createElement("button",{className:d.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:l},c.default.createElement("ul",{className:d.default.items},c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/downlaod"},"下载")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/about"},"关于墨迹")))))}}]),t}(i.Component);t.default=p},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(300),r=a(l),o=n(311),u=a(o),i=function(){return r.default.createElement("banner",{className:u.default.banner})};t.default=i},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(317),f=a(s),d=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1,top:null},n._handleScroll=n.handleScroll.bind(n),n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=d},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},327:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return o.default.createElement("div",{className:E.default.box},o.default.createElement(c.default,{data:e.data.forecast}),o.default.createElement(f.default,null),o.default.createElement(h.default,null),o.default.createElement(w.default,{data:e.data.news.items}),o.default.createElement(y.default,{page:e.data.news.page_no}),o.default.createElement(p.default,null))}Object.defineProperty(t,"__esModule",{value:!0});var r=n(300),o=a(r),u=n(303),i=n(306),c=a(i),s=n(308),f=a(s),d=n(316),p=a(d),m=n(310),h=a(m),_=n(328),w=a(_),v=n(330),y=a(v),b=n(335),E=a(b);t.default=(0,u.connect)(function(e){return{data:e}})(l)},328:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(329),f=a(s),d=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=n.props.data;return n.state={list:a},n}return o(t,e),u(t,[{key:"render",value:function(){for(var e=this.props.data,t=[],n=0;n<=e.length-1;n++){var a=e[n],l=[],r=new Date(1e3*a.update_time).toLocaleString().substr(0,10).replace(/\//g,"-"),o="/news/"+a.id;""!==a.img&&l.push(c.default.createElement("img",{src:a.img,alt:"pic"})),t.push(c.default.createElement("li",{className:f.default.item},c.default.createElement("p",{className:f.default.title},c.default.createElement("a",{href:o},a.title," 【",r,"】")),c.default.createElement("p",{className:f.default.text},a.content),c.default.createElement("p",{className:f.default.img},l)))}return c.default.createElement("div",{className:f.default.newsList},c.default.createElement("ul",null,t))}}]),t}(i.Component);t.default=d},329:function(e,t){e.exports={newsList:"NewsList_newsList",item:"NewsList_item",title:"NewsList_title",text:"NewsList_text",img:"NewsList_img"}},330:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(303),f=n(331),d=n(334),p=a(d),m=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:1},n}return o(t,e),u(t,[{key:"_getList",value:function(){var e=this.state.page+1,t=this.props.dispatch;t((0,f.newsPost)(e)),this.setState({page:e})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:p.default.newsNext,onClick:function(){return e._getList()}},"查看更多")}}]),t}(i.Component);t.default=(0,s.connect)()(m)},331:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.newsPost=t.newsReceive=t.newsRequest=void 0;var l=n(332),r=a(l),o=n(333),u=t.newsRequest=function(e){return{type:o.NEWS_REQUEST,amount:e}},i=t.newsReceive=function(e,t){return{type:o.NEWS_RECEIVE,amount:e,data:t}};t.newsPost=function(e){return function(t){return t(u(e)),(0,r.default)("http://www.mojitest.com/gw/getNewsList?page_no="+e+"&page_length=5&callback=123").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(n){t(i(e,n))}).catch(function(e){return console.log("parsing failed",e)})}}},332:function(e,t,n){var a,l,r;!function(n,o){l=[t,e],a=o,r="function"==typeof a?a.apply(t,l):a,!(void 0!==r&&(e.exports=r))}(this,function(e,t){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function a(e){try{delete window[e]}catch(t){window[e]=void 0}}function l(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}function r(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=e,u=t.timeout||o.timeout,i=t.jsonpCallback||o.jsonpCallback,c=void 0;return new Promise(function(o,s){var f=t.jsonpCallbackFunction||n(),d=i+"_"+f;window[f]=function(e){o({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),l(d),a(f)},r+=r.indexOf("?")===-1?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+r+i+"="+f),p.id=d,document.getElementsByTagName("head")[0].appendChild(p),c=setTimeout(function(){s(new Error("JSONP request to "+e+" timed out")),a(f),l(d)},u)})}var o={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};t.exports=r})},334:function(e,t){e.exports={newsNext:"NewsNext_newsNext"}},335:function(e,t){e.exports={box:"News_box"}}});
//# sourceMappingURL=news_d39b6.js.map