webpackJsonp([3],{306:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(307),f=a(s),d=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1},n}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,n=[],a=[];if(t.alerts.length>0){var r=f.default["level_"+t.alerts[0].level_no];n.push(c.default.createElement("div",{className:f.default.alertContent,key:"alert"},c.default.createElement("i",{className:r},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var l=0;l<=t.forecastDayList.length-1;l++){var o=t.forecastDayList[l];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=f.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),a.push(c.default.createElement("li",{className:f.default.item,key:l},c.default.createElement("span",{className:f.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:f.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:f.default.temp},o.Ftemp_high),c.default.createElement("i",{className:f.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:f.default.wea},o.Fcondition_day),c.default.createElement("span",{className:f.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}else a.push(c.default.createElement("li",{className:f.default.item,key:l},c.default.createElement("span",{className:f.default.week},"无"),c.default.createElement("span",{className:f.default.date},"无"),c.default.createElement("span",{className:f.default.temp},"无"),c.default.createElement("i",{className:f.default.icon},"无"),c.default.createElement("span",{className:f.default.wea},"无"),c.default.createElement("span",{className:f.default.wind},"无"),c.default.createElement("b",{className:f.default.level},"无")))}var s=f.default.hide;return s=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.head},c.default.createElement("logo",{className:f.default.logo}),c.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:s},c.default.createElement("div",{className:f.default.title},c.default.createElement("div",{className:f.default.alert},n,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),c.default.createElement("div",{className:f.default.items},c.default.createElement("ul",null,a))))}}]),t}(i.Component);t.default=d},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(302),f=n(309),d=a(f),p=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1},n}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,n=d.default.home,a=d.default.download;switch(t){case"/":n=d.default.homeCur;break;case"/downlaod":a=d.default.downloadCur;break;default:n=d.default.home,a=d.default.download}var r=d.default.hide;return r=this.state.display?d.default.show:d.default.hide,c.default.createElement("div",{className:d.default.nav},c.default.createElement(s.Link,{to:"/",className:n}),c.default.createElement(s.Link,{to:"/download",className:a}),c.default.createElement("button",{className:d.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:r},c.default.createElement("ul",{className:d.default.items},c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/download"},"下载")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/about"},"关于墨迹")))))}}]),t}(i.Component);t.default=p},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e.data)return o.default.createElement("banner",{className:i.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var l=n(300),o=a(l),u=n(311),i=a(u);t.default=r},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(317),f=a(s),d=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={display:!1,top:null},n._handleScroll=n.handleScroll.bind(n),n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=d},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},320:function(e,t,n){e.exports=n(295)(258)},332:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(303),f=n(306),d=a(f),p=n(308),m=a(p),h=n(316),_=a(h),y=n(310),w=a(y),b=n(333),v=a(b),E=n(335),N=a(E),g=n(336),O=n(339),j=a(O),k=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,g.newsPost)(1))}},{key:"render",value:function(){var e=this.props,t=e.forecast,n=e.news,a=e.route;return console.log(this.props),n.banner?c.default.createElement("div",{className:j.default.box},c.default.createElement(d.default,{data:t}),c.default.createElement(m.default,{router:a.path}),c.default.createElement(w.default,{data:n.data.banner}),c.default.createElement(v.default,{data:n.news.items}),c.default.createElement(N.default,{page:n.page_no}),c.default.createElement(_.default,null)):c.default.createElement("div",null,"loading")}}]),t}(i.Component),P=function(e){var t=e.news,n=e.forecast;return{news:t,forecast:n}};t.default=(0,s.connect)(P)(k)},333:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(334),f=a(s),d=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=n.props.data;return n.state={list:a},n}return o(t,e),u(t,[{key:"render",value:function(){for(var e=this.props.data,t=[],n=0;n<=e.length-1;n++){var a=e[n],r=[],l=new Date(1e3*a.update_time).toLocaleString().substr(0,10).replace(/\//g,"-"),o="/news/"+a.id;""!==a.img&&r.push(c.default.createElement("img",{src:a.img,alt:"pic",key:n})),t.push(c.default.createElement("li",{className:f.default.item,key:a.id},c.default.createElement("p",{className:f.default.title},c.default.createElement("a",{href:o},a.title," 【",l,"】")),c.default.createElement("p",{className:f.default.text},a.content),c.default.createElement("p",{className:f.default.img},r)))}return c.default.createElement("div",{className:f.default.newsList},c.default.createElement("ul",null,t))}}]),t}(i.Component);t.default=d},334:function(e,t){e.exports={newsList:"NewsList_newsList",item:"NewsList_item",title:"NewsList_title",text:"NewsList_text",img:"NewsList_img"}},335:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(300),c=a(i),s=n(303),f=n(336),d=n(338),p=a(d),m=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:1},n}return o(t,e),u(t,[{key:"_getList",value:function(){var e=this.state.page+1,t=this.props.dispatch;t((0,f.newsPost)(e)),this.setState({page:e})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:p.default.newsNext,onClick:function(){return e._getList()}},c.default.createElement("span",null,"查看更多"))}}]),t}(i.Component);t.default=(0,s.connect)()(m)},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.newsPost=t.newsReceive=t.newsRequest=void 0,n(320);var a=n(337),r=t.newsRequest=function(e){return{type:a.NEWS_REQUEST,amount:e}},l=t.newsReceive=function(e,t){return{type:a.NEWS_RECEIVE,amount:e,data:t}};t.newsPost=function(e){return function(t){return t(r(e)),fetch("http://0.0.0.0:9527/api/news?page_no="+e).then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(n){t(l(e,n))}).catch(function(e){return console.log("parsing failed",e)})}}},338:function(e,t){e.exports={newsNext:"NewsNext_newsNext",AreportNext:"NewsNext_AreportNext"}},339:function(e,t){e.exports={box:"News_box"}}});
//# sourceMappingURL=news_2e682.js.map