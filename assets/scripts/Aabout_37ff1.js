webpackJsonp([6],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(307),f=n(c),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return u(t,e),o(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=f.default["level_"+t.alerts[0].level_no];a.push(i.default.createElement("div",{className:f.default.alertContent,key:"alert"},i.default.createElement("i",{className:l},i.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),i.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var u=t.forecastDayList[r];if(t.forecastaqi[u.Fpredict_date]){var o=t.forecastaqi[u.Fpredict_date].desc,d=f.default["level_"+t.forecastaqi[u.Fpredict_date].level];o.length>2&&(o=o.substring(0,2)),n.push(i.default.createElement("li",{className:f.default.item,key:r},i.default.createElement("span",{className:f.default.week},t.forecastaqi[u.Fpredict_date].week),i.default.createElement("span",{className:f.default.date},t.forecastaqi[u.Fpredict_date].day),i.default.createElement("span",{className:f.default.temp},u.Ftemp_high),i.default.createElement("i",{className:f.default.icon},i.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+u.Ficon_day+".png",alt:u.Ficon_day})),i.default.createElement("span",{className:f.default.wea},u.Fcondition_day),i.default.createElement("span",{className:f.default.wind},u.Fwind_dir_day),i.default.createElement("b",{className:d},o)))}else n.push(i.default.createElement("li",{className:f.default.item,key:r},i.default.createElement("span",{className:f.default.week},"无"),i.default.createElement("span",{className:f.default.date},"无"),i.default.createElement("span",{className:f.default.temp},"无"),i.default.createElement("i",{className:f.default.icon},"无"),i.default.createElement("span",{className:f.default.wea},"无"),i.default.createElement("span",{className:f.default.wind},"无"),i.default.createElement("b",{className:f.default.level},"无")))}var c=f.default.hide;return c=this.state.display?f.default.show:f.default.hide,i.default.createElement("div",{className:f.default.head},i.default.createElement("logo",{className:f.default.logo}),i.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},i.default.createElement("b",null,t.city.name," ",t.city.pname),i.default.createElement("span",null,t.condition.Ftemp),i.default.createElement("i",null,i.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),i.default.createElement("div",{className:c},i.default.createElement("div",{className:f.default.title},i.default.createElement("div",{className:f.default.alert},a,i.default.createElement("b",null,t.time.monthG),i.default.createElement("span",null,"农历 ",t.time.monthN)),i.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),i.default.createElement("div",{className:f.default.items},i.default.createElement("ul",null,n))))}}]),t}(d.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(302),f=a(309),s=n(f),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return u(t,e),o(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,n=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/downlaod":n=s.default.downloadCur;break;default:a=s.default.home,n=s.default.download}var l=s.default.hide;return l=this.state.display?s.default.show:s.default.hide,i.default.createElement("div",{className:s.default.nav},i.default.createElement(c.Link,{to:"/",className:a}),i.default.createElement(c.Link,{to:"/downlaod",className:n}),i.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),i.default.createElement("div",{className:l},i.default.createElement("ul",{className:s.default.items},i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/"},"首页")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/downlaod"},"下载")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/tob"},"天气服务")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/news"},"资讯")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/about"},"关于墨迹")))))}}]),t}(d.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),r=n(l),u=a(311),o=n(u),d=function(){return r.default.createElement("banner",{className:o.default.banner})};t.default=d},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(317),f=n(c),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return u(t,e),o(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,i.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(d.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},358:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data.tobNum.data.data[0]?e.data.tobNum.data.data[0].num:null;return u.default.createElement("div",{className:j.default.box},u.default.createElement(i.default,{data:e.data.forecast}),u.default.createElement(f.default,null),u.default.createElement(m.default,null),u.default.createElement(_.default,{router:e.route.path}),u.default.createElement(h.default,null),u.default.createElement(y.default,null),u.default.createElement(w.default,{num:t}),u.default.createElement(k.default,null))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=n(r),o=a(303),d=a(306),i=n(d),c=a(308),f=n(c),s=a(310),m=n(s),p=a(359),_=n(p),b=a(361),h=n(b),v=a(363),y=n(v),E=a(365),w=n(E),N=a(316),k=n(N),O=a(367),j=n(O);t.default=(0,o.connect)(function(e){return{data:e}})(l)},359:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.router,a=i.default.about,n=i.default.road,l=i.default.report,r=i.default.biz,d=i.default.brand,c=i.default.join;switch(t){case"/about":a=i.default.aboutCur;break;case"/road":n=i.default.roadCur;break;case"/report":l=i.default.reportCur;break;case"/biz":r=i.default.bizCur;break;case"/brand":d=i.default.brandCur;break;case"/join":c=i.default.joinCur;break;default:a=i.default.aboutCur}return u.default.createElement("div",{className:i.default.Anav},u.default.createElement("ul",null,u.default.createElement("li",{className:a},u.default.createElement(o.Link,{to:"/about"},"关于墨迹")),u.default.createElement("li",{className:n},u.default.createElement(o.Link,{to:"/road"},"墨迹之路")),u.default.createElement("li",{className:l},u.default.createElement(o.Link,{to:"/report"},"墨迹动态")),u.default.createElement("li",{className:r},u.default.createElement(o.Link,{to:"/biz"},"商务合作")),u.default.createElement("li",{className:d},u.default.createElement(o.Link,{to:"/brand"},"品牌案例")),u.default.createElement("li",{className:c},u.default.createElement(o.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=n(r),o=a(302),d=a(360),i=n(d);t.default=l},360:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},361:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return u.default.createElement("div",{className:d.default.AaboutDetail},u.default.createElement("div",{className:d.default.title}),u.default.createElement("div",null,u.default.createElement("p",null,"墨迹天气是由北京墨迹风云科技股份有限公司开发的查询天气信息的工具——墨迹天气（MoWeather）， 其合理的交互设计、强大的信息查询、精美的界面体验、稳定高效的运行速度，赢得了用户的青睐。 在6年时间内，墨迹天气已拥有超过5亿的注册用户，稳居各大APP排行榜第一阵营， 且持续占据天气类软件第一的位置，成为了人们生活的必备软件之一。"),u.default.createElement("p",null,"墨迹天气从Symbian平台发展至Android、iOS（iPhone及iPad）、Windows Phone、Windows8五大主流智能平台， 对各个平台做了特色性的操作及交互设计，让所有用户都能够方便的、高效的使用该软件。 墨迹天气不仅是一款具备天气预报精准、城市覆盖广而全、更新数据流量少、界面华丽等特点的天气软件， 更是一款独具创新的APP。2012年，墨迹发布的全新“时景”功能， 以一种全新的方式来交流天气、分享拍照带来的乐趣， 打破了用户对天气只能是数字的禁锢，墨迹“时景”实体化、图片化的天气展示给整个行业带来了一次新的变革， 开创了天气行业的新纪元。"),u.default.createElement("p",null,"墨迹天气提供最专业、最稳定的天气查询服务，让人们能够知晓天气变化， 提前做好出行计划。2013年， 墨迹天气陆续在Android、iOS、Windows Phone手机平台推出了国际版，提供了260万海外城市的天气信息， 真正的做到了让软件走出中国、走向世界！2014年，墨迹天气搭上了智能硬件的研发风潮， 设计并研发了针对室内室外温湿度、空气质量、气压等监测功能的智能家居设备，以软硬结合的方式， 把业务由宏观天气 扩展到微观的个人家居环境，打造环形移动互联网生活体验。")))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=n(r),o=a(362),d=n(o);t.default=l},362:function(e,t){e.exports={AaboutDetail:"AaboutDetail_AaboutDetail",title:"AaboutDetail_title"}},363:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return u.default.createElement("div",{className:d.default.AaboutMap})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=n(r),o=a(364),d=n(o);t.default=l},364:function(e,t){e.exports={AaboutMap:"AaboutMap_AaboutMap"}},365:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(366),f=n(c),s=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"formatNum",value:function(){for(var e=this.props.num,t=/(\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");for(var a=[],n=0;n<e.length;n++)","!==e[n]?a.push(i.default.createElement("li",{className:f.default.count,key:n},e[n])):a.push(i.default.createElement("li",{className:f.default.default,key:n},e[n]));return a}},{key:"render",value:function(){return i.default.createElement("div",{className:f.default.AaboutCount},i.default.createElement("h3",null,"墨迹天气实时请求数"),i.default.createElement("ul",null,this.formatNum()),i.default.createElement("h3",null,"墨迹天气API接口累计请求数"),i.default.createElement("ul",null,this.formatNum()))}}]),t}(d.Component);t.default=s},366:function(e,t){e.exports={AaboutCount:"AaboutCount_AaboutCount",count:"AaboutCount_count",default:"AaboutCount_default"}},367:function(e,t){e.exports={box:"Aabout_box"}}});
//# sourceMappingURL=Aabout_37ff1.js.map