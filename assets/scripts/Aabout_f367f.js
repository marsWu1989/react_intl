webpackJsonp([6],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(307),f=n(d),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=f.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:f.default.alertContent,key:"alert"},c.default.createElement("i",{className:l},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=f.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:f.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:f.default.temp},o.Ftemp_high),c.default.createElement("i",{className:f.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:f.default.wea},o.Fcondition_day),c.default.createElement("span",{className:f.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}else n.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},"无"),c.default.createElement("span",{className:f.default.date},"无"),c.default.createElement("span",{className:f.default.temp},"无"),c.default.createElement("i",{className:f.default.icon},"无"),c.default.createElement("span",{className:f.default.wea},"无"),c.default.createElement("span",{className:f.default.wind},"无"),c.default.createElement("b",{className:f.default.level},"无")))}var d=f.default.hide;return d=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.head},c.default.createElement("logo",{className:f.default.logo}),c.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:d},c.default.createElement("div",{className:f.default.title},c.default.createElement("div",{className:f.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),c.default.createElement("div",{className:f.default.items},c.default.createElement("ul",null,n))))}}]),t}(i.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(302),f=a(309),s=n(f),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,n=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/downlaod":n=s.default.downloadCur;break;default:a=s.default.home,n=s.default.download}var l=s.default.hide;return l=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.nav},c.default.createElement(d.Link,{to:"/",className:a}),c.default.createElement(d.Link,{to:"/download",className:n}),c.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:l},c.default.createElement("ul",{className:s.default.items},c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/download"},"下载")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/about"},"关于墨迹")))))}}]),t}(i.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),r=n(l),o=a(311),u=n(o),i=function(e){return r.default.createElement("banner",{className:u.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})};t.default=i},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(317),f=n(d),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},320:function(e,t,a){e.exports=a(295)(258)},360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numPost=t.numReceive=t.numRequest=void 0,a(320);var n=a(361),l=t.numRequest=function(){return{type:n.NUM_REQUEST}},r=t.numReceive=function(e){return{type:n.NUM_RECEIVE,data:e}};t.numPost=function(){return function(e){return e(l()),fetch("http://0.0.0.0:9527/api/tob").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){e(r(t))}).catch(function(e){return console.log("parsing failed",e)})}}},362:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(303),f=a(306),s=n(f),m=a(308),p=n(m),_=a(310),h=n(_),b=a(363),v=n(b),y=a(365),E=n(y),w=a(367),N=n(w),O=a(369),k=n(O),j=a(316),C=n(j),g=a(371),P=n(g),A=a(360),M=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,A.numPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.num,n=e.route;return a.data?c.default.createElement("div",{className:P.default.box},c.default.createElement(s.default,{data:t}),c.default.createElement(p.default,null),c.default.createElement(h.default,null),c.default.createElement(v.default,{router:n.path}),c.default.createElement(E.default,null),c.default.createElement(N.default,null),c.default.createElement(k.default,{data:a}),c.default.createElement(C.default,null)):c.default.createElement("div",null,"loading")}}]),t}(i.Component),H=function(e){var t=e.num,a=e.forecast;return{num:t,forecast:a}};t.default=(0,d.connect)(H)(M)},363:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.router,a=c.default.about,n=c.default.road,l=c.default.report,r=c.default.biz,i=c.default.brand,d=c.default.join;switch(t){case"/about":a=c.default.aboutCur;break;case"/road":n=c.default.roadCur;break;case"/report":l=c.default.reportCur;break;case"/biz":r=c.default.bizCur;break;case"/brand":i=c.default.brandCur;break;case"/join":d=c.default.joinCur;break;default:a=c.default.aboutCur}return o.default.createElement("div",{className:c.default.Anav},o.default.createElement("ul",null,o.default.createElement("li",{className:a},o.default.createElement(u.Link,{to:"/about"},"关于墨迹")),o.default.createElement("li",{className:n},o.default.createElement(u.Link,{to:"/road"},"墨迹之路")),o.default.createElement("li",{className:l},o.default.createElement(u.Link,{to:"/report"},"墨迹动态")),o.default.createElement("li",{className:r},o.default.createElement(u.Link,{to:"/biz"},"商务合作")),o.default.createElement("li",{className:i},o.default.createElement(u.Link,{to:"/brand"},"品牌案例")),o.default.createElement("li",{className:d},o.default.createElement(u.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(302),i=a(364),c=n(i);t.default=l},364:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},365:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return o.default.createElement("div",{className:i.default.AaboutDetail},o.default.createElement("div",{className:i.default.title}),o.default.createElement("div",{className:i.default.text},o.default.createElement("p",null,"墨迹天气是由北京墨迹风云科技股份有限公司开发的查询天气信息的工具——墨迹天气（MoWeather）， 其合理的交互设计、强大的信息查询、精美的界面体验、稳定高效的运行速度，赢得了用户的青睐。 在6年时间内，墨迹天气已拥有超过5亿的注册用户，稳居各大APP排行榜第一阵营， 且持续占据天气类软件第一的位置，成为了人们生活的必备软件之一。"),o.default.createElement("p",null,"墨迹天气从Symbian平台发展至Android、iOS（iPhone及iPad）、Windows Phone、Windows8五大主流智能平台， 对各个平台做了特色性的操作及交互设计，让所有用户都能够方便的、高效的使用该软件。 墨迹天气不仅是一款具备天气预报精准、城市覆盖广而全、更新数据流量少、界面华丽等特点的天气软件， 更是一款独具创新的APP。2012年，墨迹发布的全新“时景”功能， 以一种全新的方式来交流天气、分享拍照带来的乐趣， 打破了用户对天气只能是数字的禁锢，墨迹“时景”实体化、图片化的天气展示给整个行业带来了一次新的变革， 开创了天气行业的新纪元。"),o.default.createElement("p",null,"墨迹天气提供最专业、最稳定的天气查询服务，让人们能够知晓天气变化， 提前做好出行计划。2013年， 墨迹天气陆续在Android、iOS、Windows Phone手机平台推出了国际版，提供了260万海外城市的天气信息， 真正的做到了让软件走出中国、走向世界！2014年，墨迹天气搭上了智能硬件的研发风潮， 设计并研发了针对室内室外温湿度、空气质量、气压等监测功能的智能家居设备，以软硬结合的方式， 把业务由宏观天气 扩展到微观的个人家居环境，打造环形移动互联网生活体验。")))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(366),i=n(u);t.default=l},366:function(e,t){e.exports={AaboutDetail:"AaboutDetail_AaboutDetail",title:"AaboutDetail_title",text:"AaboutDetail_text"}},367:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return o.default.createElement("div",{className:i.default.AaboutMap})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(368),i=n(u);t.default=l},368:function(e,t){e.exports={AaboutMap:"AaboutMap_AaboutMap"}},369:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(370),f=n(d),s=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"formatNum",value:function(){var e=this.props.data.data.data;e=e?e[0].num:null;var t=[];if(e){for(var a=/(\d+)(\d{3})/;a.test(e);)e=e.replace(a,"$1,$2");for(var n=0;n<e.length;n++)","!==e[n]?t.push(c.default.createElement("li",{className:f.default.count,key:n},e[n])):t.push(c.default.createElement("li",{className:f.default.default,key:n},e[n]))}return t}},{key:"render",value:function(){return c.default.createElement("div",{className:f.default.AaboutCount},c.default.createElement("h3",null,"墨迹天气实时请求数"),c.default.createElement("ul",null,this.formatNum()),c.default.createElement("h3",null,"墨迹天气API接口累计请求数"),c.default.createElement("ul",null,this.formatNum()))}}]),t}(i.Component);t.default=s},370:function(e,t){e.exports={AaboutCount:"AaboutCount_AaboutCount",count:"AaboutCount_count",default:"AaboutCount_default"}},371:function(e,t){e.exports={box:"Aabout_box"}}});
//# sourceMappingURL=Aabout_f367f.js.map