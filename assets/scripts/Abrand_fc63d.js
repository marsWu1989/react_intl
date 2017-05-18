webpackJsonp([10],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),d=n(i),c=a(307),f=n(c),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=f.default["level_"+t.alerts[0].level_no];a.push(d.default.createElement("div",{className:f.default.alertContent,key:"alert"},d.default.createElement("i",{className:l},d.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),d.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=f.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(d.default.createElement("li",{className:f.default.item,key:r},d.default.createElement("span",{className:f.default.week},t.forecastaqi[o.Fpredict_date].week),d.default.createElement("span",{className:f.default.date},t.forecastaqi[o.Fpredict_date].day),d.default.createElement("span",{className:f.default.temp},o.Ftemp_high),d.default.createElement("i",{className:f.default.icon},d.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),d.default.createElement("span",{className:f.default.wea},o.Fcondition_day),d.default.createElement("span",{className:f.default.wind},o.Fwind_dir_day),d.default.createElement("b",{className:i},u)))}else n.push(d.default.createElement("li",{className:f.default.item,key:r},d.default.createElement("span",{className:f.default.week},"无"),d.default.createElement("span",{className:f.default.date},"无"),d.default.createElement("span",{className:f.default.temp},"无"),d.default.createElement("i",{className:f.default.icon},"无"),d.default.createElement("span",{className:f.default.wea},"无"),d.default.createElement("span",{className:f.default.wind},"无"),d.default.createElement("b",{className:f.default.level},"无")))}var c=f.default.hide;return c=this.state.display?f.default.show:f.default.hide,d.default.createElement("div",{className:f.default.head},d.default.createElement("logo",{className:f.default.logo}),d.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},d.default.createElement("b",null,t.city.name," ",t.city.pname),d.default.createElement("span",null,t.condition.Ftemp),d.default.createElement("i",null,d.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),d.default.createElement("div",{className:c},d.default.createElement("div",{className:f.default.title},d.default.createElement("div",{className:f.default.alert},a,d.default.createElement("b",null,t.time.monthG),d.default.createElement("span",null,"农历 ",t.time.monthN)),d.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),d.default.createElement("div",{className:f.default.items},d.default.createElement("ul",null,n)),d.default.createElement("div",{className:f.default.bg,onClick:function(){return e.handleShowOrHide()}})))}}]),t}(i.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon",bg:"Header_bg"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),d=n(i),c=a(302),f=a(309),s=n(f),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,n=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/download":n=s.default.downloadCur;break;default:a=s.default.home,n=s.default.download}var l=s.default.hide;return l=this.state.display?s.default.show:s.default.hide,d.default.createElement("div",{className:s.default.nav},d.default.createElement(c.Link,{to:"/",className:a}),d.default.createElement(c.Link,{to:"/download",className:n}),d.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),d.default.createElement("div",{className:l,onClick:function(){return e.handleShowOrHide()}},d.default.createElement("ul",{className:s.default.items},d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/"},"首页")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/download"},"下载")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/tob"},"天气服务")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/news"},"资讯")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/about"},"关于墨迹"))),d.default.createElement("div",{className:s.default.bg})))}}]),t}(i.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items",bg:"Nav_bg"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e.data)return o.default.createElement("banner",{className:i.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(311),i=n(u);t.default=l},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),d=n(i),c=a(317),f=n(c),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,d.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},318:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return o.default.createElement("div",{className:i.default.loading})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(319),i=n(u);t.default=l},319:function(e,t){e.exports={loading:"Loading_loading"}},322:function(e,t,a){e.exports=a(295)(258)},324:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={domain:"http://0.0.0.0:9527",static:""};t.default=a},366:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.router,a=d.default.about,n=d.default.road,l=d.default.report,r=d.default.biz,i=d.default.brand,c=d.default.join;switch(t){case"/about":a=d.default.aboutCur;break;case"/road":n=d.default.roadCur;break;case"/report":l=d.default.reportCur;break;case"/biz":r=d.default.bizCur;break;case"/brand":i=d.default.brandCur;break;case"/join":c=d.default.joinCur;break;default:a=d.default.aboutCur}return o.default.createElement("div",{className:d.default.Anav},o.default.createElement("ul",null,o.default.createElement("li",{className:a},o.default.createElement(u.Link,{to:"/about"},"关于墨迹")),o.default.createElement("li",{className:n},o.default.createElement(u.Link,{to:"/road"},"墨迹之路")),o.default.createElement("li",{className:l},o.default.createElement(u.Link,{to:"/report"},"墨迹动态")),o.default.createElement("li",{className:r},o.default.createElement(u.Link,{to:"/biz"},"商务合作")),o.default.createElement("li",{className:i},o.default.createElement(u.Link,{to:"/brand"},"品牌案例")),o.default.createElement("li",{className:c},o.default.createElement(u.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(302),i=a(367),d=n(i);t.default=l},367:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},403:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),d=n(i),c=a(303),f=a(306),s=n(f),m=a(308),p=n(m),b=a(310),_=n(b),h=a(366),v=n(h),y=a(404),E=n(y),w=a(316),g=n(w),N=a(318),k=n(N),O=a(406),j=n(O),C=a(407),P=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,C.brandPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.brand,n=e.route;return a.data.data?d.default.createElement("div",{className:j.default.box},d.default.createElement(s.default,{data:t}),d.default.createElement(p.default,null),d.default.createElement(_.default,{data:a.data.banner}),d.default.createElement(v.default,{router:n.path}),d.default.createElement(E.default,{data:a.data.data}),d.default.createElement(g.default,null)):d.default.createElement(k.default,null)}}]),t}(i.Component),H=function(e){var t=e.brand,a=e.forecast;return{brand:t,forecast:a}};t.default=(0,c.connect)(H)(P)},404:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),d=n(i),c=a(405),f=n(c),s=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={width:0},a}return o(t,e),u(t,[{key:"getData",value:function(){var e=this.props.data.data.rows,t=[];for(var a in e)if({}.hasOwnProperty.call(e,a)){for(var n=[],l=[],r=e[a],o=0;o<r.img[1].length;o++)n.push(d.default.createElement("li",{key:r.img[1][o].id},d.default.createElement("i",null,d.default.createElement("img",{src:r.img[1][o].img,alt:r.img[1][o].desc}))));for(var u=0;u<r.img[2].length;u++)l.push(d.default.createElement("li",{key:r.img[2][u].id,ref:"img"},d.default.createElement("i",null,d.default.createElement("img",{src:r.img[2][u].img,alt:r.img[2][u].desc})),d.default.createElement("span",null,r.img[2][u].desc)));t.push(d.default.createElement("li",{key:r.id},d.default.createElement("div",{className:f.default.brandList},d.default.createElement("ul",null,n)),d.default.createElement("div",{className:f.default.title},r.title),d.default.createElement("div",{className:f.default.time},r.term_date),d.default.createElement("div",{className:f.default.desc},r.description),d.default.createElement("div",{className:f.default.activityList},d.default.createElement("ul",{ref:"picList",style:{width:this.initElWidth()[a]}},l))))}return t}},{key:"initElWidth",value:function(){var e=this.props.data.data.rows,t={};if(e)for(var a in e)if({}.hasOwnProperty.call(e,a)){var n=e[a];t[a]=150*n.img[2].length}return t}},{key:"render",value:function(){return d.default.createElement("div",{className:f.default.AbrandDetail,ref:"AbrandDetail"},d.default.createElement("ul",null,this.getData()))}}]),t}(i.Component);t.default=s},405:function(e,t){e.exports={brandList:"AbrandDetail_brandList",activityList:"AbrandDetail_activityList",AbrandDetail:"AbrandDetail_AbrandDetail",title:"AbrandDetail_title",time:"AbrandDetail_time",desc:"AbrandDetail_desc"}},406:function(e,t){e.exports={box:"Abrand_box"}},407:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.brandPost=t.brandReceive=t.brandRequest=void 0,a(322);var l=a(408),r=a(324),o=n(r),u=t.brandRequest=function(){return{type:l.BRAND_REQUEST}},i=t.brandReceive=function(e){return{type:l.BRAND_RECEIVE,data:e}};t.brandPost=function(){return function(e){return e(u()),fetch(o.default.domain+"/api/brand").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){e(i(t))}).catch(function(e){return console.log("parsing failed",e)})}}}});
//# sourceMappingURL=Abrand_fc63d.js.map