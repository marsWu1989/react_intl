webpackJsonp([7],{306:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(300),c=l(o),i=a(307),f=l(i),s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return u(t,e),d(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],l=[];if(t.alerts.length>0){var n=f.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:f.default.alertContent,key:"alert"},c.default.createElement("i",{className:n},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var u=t.forecastDayList[r];if(t.forecastaqi[u.Fpredict_date]){var d=t.forecastaqi[u.Fpredict_date].desc,o=f.default["level_"+t.forecastaqi[u.Fpredict_date].level];d.length>2&&(d=d.substring(0,2)),l.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},t.forecastaqi[u.Fpredict_date].week),c.default.createElement("span",{className:f.default.date},t.forecastaqi[u.Fpredict_date].day),c.default.createElement("span",{className:f.default.temp},u.Ftemp_high),c.default.createElement("i",{className:f.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+u.Ficon_day+".png",alt:u.Ficon_day})),c.default.createElement("span",{className:f.default.wea},u.Fcondition_day),c.default.createElement("span",{className:f.default.wind},u.Fwind_dir_day),c.default.createElement("b",{className:o},d)))}else l.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},"无"),c.default.createElement("span",{className:f.default.date},"无"),c.default.createElement("span",{className:f.default.temp},"无"),c.default.createElement("i",{className:f.default.icon},"无"),c.default.createElement("span",{className:f.default.wea},"无"),c.default.createElement("span",{className:f.default.wind},"无"),c.default.createElement("b",{className:f.default.level},"无")))}var i=f.default.hide;return i=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.head},c.default.createElement("logo",{className:f.default.logo}),c.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:i},c.default.createElement("div",{className:f.default.title},c.default.createElement("div",{className:f.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),c.default.createElement("div",{className:f.default.items},c.default.createElement("ul",null,l))))}}]),t}(o.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(300),c=l(o),i=a(302),f=a(309),s=l(f),m=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return u(t,e),d(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,l=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/downlaod":l=s.default.downloadCur;break;default:a=s.default.home,l=s.default.download}var n=s.default.hide;return n=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.nav},c.default.createElement(i.Link,{to:"/",className:a}),c.default.createElement(i.Link,{to:"/download",className:l}),c.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:n},c.default.createElement("ul",{className:s.default.items},c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/download"},"下载")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/about"},"关于墨迹")))))}}]),t}(o.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e.data)return u.default.createElement("banner",{className:o.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=l(r),d=a(311),o=l(d);t.default=n},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(300),c=l(o),i=a(317),f=l(i),s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return u(t,e),d(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(o.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},320:function(e,t,a){e.exports=a(295)(258)},363:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.router,a=c.default.about,l=c.default.road,n=c.default.report,r=c.default.biz,o=c.default.brand,i=c.default.join;switch(t){case"/about":a=c.default.aboutCur;break;case"/road":l=c.default.roadCur;break;case"/report":n=c.default.reportCur;break;case"/biz":r=c.default.bizCur;break;case"/brand":o=c.default.brandCur;break;case"/join":i=c.default.joinCur;break;default:a=c.default.aboutCur}return u.default.createElement("div",{className:c.default.Anav},u.default.createElement("ul",null,u.default.createElement("li",{className:a},u.default.createElement(d.Link,{to:"/about"},"关于墨迹")),u.default.createElement("li",{className:l},u.default.createElement(d.Link,{to:"/road"},"墨迹之路")),u.default.createElement("li",{className:n},u.default.createElement(d.Link,{to:"/report"},"墨迹动态")),u.default.createElement("li",{className:r},u.default.createElement(d.Link,{to:"/biz"},"商务合作")),u.default.createElement("li",{className:o},u.default.createElement(d.Link,{to:"/brand"},"品牌案例")),u.default.createElement("li",{className:i},u.default.createElement(d.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=l(r),d=a(302),o=a(364),c=l(o);t.default=n},364:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},372:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(300),c=l(o),i=a(303),f=a(306),s=l(f),m=a(308),_=l(m),p=a(310),E=l(p),h=a(363),v=l(h),b=a(373),y=l(b),N=a(316),w=l(N),k=a(375),O=l(k),j=a(438),C=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),d(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,j.roadPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.road,l=e.route;return a.data.banner?c.default.createElement("div",{className:O.default.box},c.default.createElement(s.default,{data:t}),c.default.createElement(_.default,null),c.default.createElement(E.default,{data:a.data.banner}),c.default.createElement(v.default,{router:l.path}),c.default.createElement(y.default,null),c.default.createElement(w.default,null)):c.default.createElement("div",null,"loading")}}]),t}(o.Component),A=function(e){var t=e.road,a=e.forecast;return{road:t,forecast:a}};t.default=(0,i.connect)(A)(C)},373:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return u.default.createElement("div",{className:o.default.AroadYear},u.default.createElement("div",{className:o.default.dashline}),u.default.createElement("ul",{className:o.default.list},u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",{className:o.default.blue},"2016"),u.default.createElement("dd",{className:o.default.month_en_blue},"J u n"),u.default.createElement("dd",{className:o.default.month_cn_blue},"/ 0 6")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2016})),u.default.createElement("p",null,"墨迹注册用户过5亿，月活跃用户过1亿，在同类软件市场占有率达53.9%。 空气果2诞生，推出不同版本，增加了甲醛功能。践行“天气+”， 以气象大数据为基础，将天气作为入口，提供给用户更多生活化、场景化的服务。")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",null,"2015"),u.default.createElement("dd",{className:o.default.month_en},"D e c"),u.default.createElement("dd",{className:o.default.month_cn},"/ 1 2")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2015})),u.default.createElement("p",null,"基于上空气果一代的优势，迭代推出空气果1S。 交互更好、传感器精度更高、系统更稳定。截至12月底， 墨迹天气积累用户达4.7亿，每天超过5亿次的天气查询需求。")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",null,"2014"),u.default.createElement("dd",{className:o.default.month_en},"D e c"),u.default.createElement("dd",{className:o.default.month_cn},"/ 1 2")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2014_12})),u.default.createElement("p",null,"逐步积累了4亿用户，自动适配多种语言，用户覆盖包括中国大陆、港澳台，日韩及东南亚、欧美等全球各地用户。")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",{className:o.default.blue},"2014"),u.default.createElement("dd",{className:o.default.month_en_blue},"  M a y"),u.default.createElement("dd",{className:o.default.month_cn_blue},"/ 0 5")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2014_5})),u.default.createElement("p",null,"墨迹天气将软件延伸到硬件，首次发布空气检测智能硬件——空气果。 不仅提供户外的天气信息还关心用户室内空气质量， 室内和室外的结合，将人们的生活场景描述的更加完整化。")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",null,"2013")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2013})),u.default.createElement("p",null,"首创时景天气——实时天气照片的众包平台。 通过智能识别，根据照片信息自动进行天气信息校正， 实现了UGC辅助PGC，PGC指导UGC的良性循环。")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",null,"2012"),u.default.createElement("dd",{className:o.default.month_en},"  D e c"),u.default.createElement("dd",{className:o.default.month_cn},"/ 1 2")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2012})),u.default.createElement("p",null,"注册用户过1亿")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",null,"2011")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2011})),u.default.createElement("p",null,"IPhone版本上线，短短2个月下载用户破400万，获中国手机软件评选TOP9。 同年联合中国气象频道率先推出灾害预警，成为用户获取气象灾害信息的新渠道。")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",{className:o.default.blue},"2010")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2010})),u.default.createElement("p",null,"北京墨迹风云科技股份有限公司成立，当年墨迹天气ＡＰＰ获得腾讯年度最佳生活应用第一名。")),u.default.createElement("li",{className:o.default.item},u.default.createElement("dl",null,u.default.createElement("dt",{className:o.default.blue},"2009"),u.default.createElement("dd",{className:o.default.month_en_blue},"  M a y"),u.default.createElement("dd",{className:o.default.month_cn_blue},"/ 0 5")),u.default.createElement("div",{className:o.default.icon},u.default.createElement("div",{className:o.default.i_2009})),u.default.createElement("p",null,"墨迹天气发布第一个版本。"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=l(r),d=a(374),o=l(d);t.default=n},374:function(e,t){e.exports={item:"AroadYear_item",AroadYear:"AroadYear_AroadYear",dashline:"AroadYear_dashline",month_en:"AroadYear_month_en",month_en_blue:"AroadYear_month_en_blue",month_cn:"AroadYear_month_cn",month_cn_blue:"AroadYear_month_cn_blue",icon:"AroadYear_icon",img:"AroadYear_img",i_2016:"AroadYear_i_2016",i_2015:"AroadYear_i_2015",i_2014_12:"AroadYear_i_2014_12",i_2014_5:"AroadYear_i_2014_5",i_2013:"AroadYear_i_2013",i_2012:"AroadYear_i_2012",i_2011:"AroadYear_i_2011",i_2010:"AroadYear_i_2010",i_2009:"AroadYear_i_2009",line:"AroadYear_line",blue:"AroadYear_blue"}},375:function(e,t){e.exports={box:"Aroad_box"}},438:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.roadPost=t.roadReceive=t.roadRequest=void 0,a(320);var l=a(437),n=t.roadRequest=function(){return{type:l.ROAD_REQUEST}},r=t.roadReceive=function(e){return{type:l.ROAD_RECEIVE,data:e}};t.roadPost=function(){return function(e){return e(n()),fetch("http://0.0.0.0:9527/api/road/").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){e(r(t))}).catch(function(e){return console.log("parsing failed",e)})}}}});
//# sourceMappingURL=Aroad_33e4a.js.map