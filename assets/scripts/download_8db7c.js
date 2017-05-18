webpackJsonp([2],{306:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),c=l(d),i=a(307),s=l(i),f=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],l=[];if(t.alerts.length>0){var n=s.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:s.default.alertContent,key:"alert"},c.default.createElement("i",{className:n},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,d=s.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),l.push(c.default.createElement("li",{className:s.default.item,key:r},c.default.createElement("span",{className:s.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:s.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:s.default.temp},o.Ftemp_high),c.default.createElement("i",{className:s.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:s.default.wea},o.Fcondition_day),c.default.createElement("span",{className:s.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:d},u)))}else l.push(c.default.createElement("li",{className:s.default.item,key:r},c.default.createElement("span",{className:s.default.week},"无"),c.default.createElement("span",{className:s.default.date},"无"),c.default.createElement("span",{className:s.default.temp},"无"),c.default.createElement("i",{className:s.default.icon},"无"),c.default.createElement("span",{className:s.default.wea},"无"),c.default.createElement("span",{className:s.default.wind},"无"),c.default.createElement("b",{className:s.default.level},"无")))}var i=s.default.hide;return i=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.head},c.default.createElement("logo",{className:s.default.logo}),c.default.createElement("div",{className:s.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:i},c.default.createElement("div",{className:s.default.title},c.default.createElement("div",{className:s.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:s.default.more},"更多")),c.default.createElement("div",{className:s.default.items},c.default.createElement("ul",null,l))))}}]),t}(d.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),c=l(d),i=a(302),s=a(309),f=l(s),m=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=f.default.home,l=f.default.download;switch(t){case"/":a=f.default.homeCur;break;case"/download":l=f.default.downloadCur;break;default:a=f.default.home,l=f.default.download}var n=f.default.hide;return n=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.nav},c.default.createElement(i.Link,{to:"/",className:a}),c.default.createElement(i.Link,{to:"/download",className:l}),c.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:n},c.default.createElement("ul",{className:f.default.items},c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/download"},"下载")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/about"},"关于墨迹"))),c.default.createElement("div",{className:f.default.bg})))}}]),t}(d.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items",bg:"Nav_bg"}},310:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e.data)return o.default.createElement("banner",{className:d.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=l(r),u=a(311),d=l(u);t.default=n},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),c=l(d),i=a(317),s=l(i),f=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=s.default.hide;return t=this.state.display?s.default.show:s.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(d.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},320:function(e,t,a){e.exports=a(295)(258)},322:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={domain:"http://0.0.0.0:9527",static:""};t.default=a},323:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),c=l(d),i=a(303),s=a(306),f=l(s),m=a(308),p=l(m),h=a(316),_=l(h),E=a(310),v=l(E),b=a(324),w=l(b),y=a(326),N=l(y),j=a(328),O=l(j),g=a(330),D=l(g),k=a(331),P=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,k.downloadPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.download,l=e.route;return a.data.banner?c.default.createElement("div",{className:D.default.box},c.default.createElement(f.default,{data:t}),c.default.createElement(p.default,{router:l.path}),c.default.createElement(v.default,{data:a.data.banner}),c.default.createElement(w.default,null),c.default.createElement(N.default,null),c.default.createElement(O.default,null),c.default.createElement(_.default,null)):c.default.createElement("div",null,"loading")}}]),t}(d.Component),H=function(e){var t=e.download,a=e.forecast;return{download:t,forecast:a}};t.default=(0,i.connect)(H)(P)},324:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(300),r=l(n),o=a(325),u=l(o),d=function(){return r.default.createElement("div",{className:u.default.Dphone},r.default.createElement("div",{className:u.default.title},"手机版"),r.default.createElement("div",{className:u.default.items},r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.iphone},r.default.createElement("icon",{className:u.default.icon}),r.default.createElement("b",null,"iPhone v6.3.0"),r.default.createElement("span",null,"发布日期：2017.03.22")),r.default.createElement("a",{href:"http://mojichina.com/mjchann/channel.php?url=http://itunes.apple.com/cn/app/mo-ji-tian-qi-guan-fang/id434209233?mt=8&channelid=9001&userid=",className:u.default.btuBlue},"立即下载")),r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.android},r.default.createElement("icon",{className:u.default.icon}),r.default.createElement("b",null,"Android v6.3.1"),r.default.createElement("span",null,"发布日期：2017.04.06")),r.default.createElement("a",{href:"http://download.moji001.com/download/MojiWeather-V6.0301.02-release-c8888.apk",className:u.default.btuBlue},"立即下载")),r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.winPhone},r.default.createElement("b",null,"Windows Phone 1.5"),r.default.createElement("span",null,"发布日期：2014.08.14")),r.default.createElement("a",{href:"http://www.windowsphone.com/zh-cn/store/app/%E5%A2%A8%E8%BF%B9%E5%A4%A9%E6%B0%94/735c6168-9ec9-46bb-ab1d-fc6ae573cff3",className:u.default.btuNoBg},"立即下载")),r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.symbian},r.default.createElement("b",null,"Symbian OS v6.0"),r.default.createElement("span",null,"发布日期：2012.11.06")),r.default.createElement("a",{href:"http://download.moji001.com/download/MJWeather_S60V3_6.0_signed.sis",className:u.default.btuNoBg},"立即下载"))),r.default.createElement("pic",{className:u.default.pic}))};t.default=d},325:function(e,t){e.exports={items:"Dphone_items",Dphone:"Dphone_Dphone",title:"Dphone_title",item:"Dphone_item",iphone:"Dphone_iphone",android:"Dphone_android",btuBlue:"Dphone_btuBlue",btuNoBg:"Dphone_btuNoBg",pic:"Dphone_pic"}},326:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(300),r=l(n),o=a(327),u=l(o),d=function(){return r.default.createElement("div",{className:u.default.Dpad},r.default.createElement("div",{className:u.default.title},"Pad版"),r.default.createElement("div",{className:u.default.items},r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.ipad},r.default.createElement("icon",{className:u.default.icon}),r.default.createElement("b",null,"iPad v2.8.1"),r.default.createElement("span",null,"发布日期：2014.07.07")),r.default.createElement("a",{href:"http://mojichina.com/mjchann/channel.php?url=http://itunes.apple.com/cn/app//id487161848?mt=8&channelid=10001&userid=",className:u.default.btu},"立即下载")),r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.win},r.default.createElement("icon",{className:u.default.icon}),r.default.createElement("b",null,"Windows 8 v2.2"),r.default.createElement("span",null,"发布日期：2014.04.01")),r.default.createElement("a",{href:"http://download.moji001.com/download/MoWeatherInstall_2.0.1.3.exe",className:u.default.btu},"立即下载"))),r.default.createElement("pic",{className:u.default.pic}))};t.default=d},327:function(e,t){e.exports={items:"Dpad_items",Dpad:"Dpad_Dpad",title:"Dpad_title",item:"Dpad_item",ipad:"Dpad_ipad",win:"Dpad_win",btu:"Dpad_btu",pic:"Dpad_pic"}},328:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(300),r=l(n),o=a(329),u=l(o),d=function(){return r.default.createElement("div",{className:u.default.Dinter},r.default.createElement("div",{className:u.default.title},"国际版"),r.default.createElement("div",{className:u.default.items},r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.iphone},r.default.createElement("icon",{className:u.default.icon}),r.default.createElement("b",null,"iPhone v2.4"),r.default.createElement("span",null,"发布日期：2014.08.14")),r.default.createElement("a",{href:"http://moji.com/mjchann/channel.php?url=https://itunes.apple.com/us/app/moweather/id635166892?mt=8&channelid=6666&userid=",className:u.default.btu},"立即下载")),r.default.createElement("div",{className:u.default.item},r.default.createElement("p",{className:u.default.and},r.default.createElement("icon",{className:u.default.icon}),r.default.createElement("b",null,"Android v1.4"),r.default.createElement("span",null,"发布日期：2014.07.31")),r.default.createElement("a",{href:"http://download.moji001.com/download/MoWeather-V1.40.05-C7000.apk",className:u.default.btu},"立即下载"))),r.default.createElement("pic",{className:u.default.pic}))};t.default=d},329:function(e,t){e.exports={items:"Dinter_items",Dinter:"Dinter_Dinter",title:"Dinter_title",item:"Dinter_item",iphone:"Dinter_iphone",and:"Dinter_and",btu:"Dinter_btu",pic:"Dinter_pic"}},330:function(e,t){e.exports={box:"Download_box"}},331:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.downloadPost=t.downloadReceive=t.downloadRequest=void 0,a(320);var n=a(332),r=a(322),o=l(r),u=t.downloadRequest=function(){return{type:n.DOWNLOAD_REQUEST}},d=t.downloadReceive=function(e){return{type:n.DOWNLOAD_RECEIVE,data:e}};t.downloadPost=function(){return function(e){return e(u()),fetch(o.default.domain+"/api/download").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){e(d(t))}).catch(function(e){return console.log("parsing failed",e)})}}}});
//# sourceMappingURL=download_8db7c.js.map