webpackJsonp([1],{82:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(415),i=n(414),a=n(416),s=n(185),u=a([o,i]);e.exports=u,e.exports.touchStyles=s,e.exports.Mixin=r({},o,{onPinchStart:i.onPinchStart,onPinchMove:i.onPinchMove,onPinchEnd:i.onPinchEnd})},102:function(e,t,n){t=e.exports=n(59)(),t.push([e.id,"div.buildingList{font-size:0;background-color:#f0f0f0}div.buildingList>header{padding:.28125rem .3125rem;white-space:nowrap;border-bottom:.03125rem solid #ccc}div.buildingList>header>div{width:1.5625rem;height:.71875rem;line-height:.71875rem;color:#c80000;border:.03125rem solid #ccc;border-radius:.125rem;font-size:.375rem;display:inline-block;margin-right:.21875rem;text-align:center}div.buildingList>header>div>img{height:.375rem;margin-right:.1875rem}div.buildingList>header>input{width:7.34375rem;height:.71875rem;line-height:.71875rem;border:.03125rem solid #ccc;color:#969696;font-size:.34375rem;padding-left:.15625rem}div.buildingList>div.query{vertical-align:top;white-space:nowrap;height:1.09375rem;font-size:0;border-bottom:.03125rem solid #ccc}div.buildingList>div.query>div{color:#323232;border-left:2px solid #ccc;padding:.234375rem .3125rem;display:inline-block;font-size:.375rem;line-height:.625rem;width:2.671875rem}div.buildingList>div.query>div:first-child{border-left:0}div.buildingList>div.query>div>img{float:right;width:.21875rem;height:.21875rem;margin-left:.3125rem;margin-top:.203125rem;transition:transform .5s;-moz-transition:transform .5s;-webkit-transition:transform .5s}div.buildingList>div.query>div:hover>img{transform:rotate(180deg)}div.buildingList>ul{overflow:auto;background-clip:80%}div.buildingList>ul>footer{height:120px;color:#c80000;font-size:26px;line-height:120px;width:100%;bottom:0;left:0;text-align:center;z-index:10;position:relative}div.buildingList>ul>footer>div#cercle{height:40px;width:40px;display:inline-block;border-radius:50%;padding:10px;background:linear-gradient(#c80000,#ffecee);animation:rotateplane 1s infinite;-webkit-animation:rotateplane 1s infinite}div.buildingList>ul>footer>div#cercle>#cercleCache{height:40px;width:40px;position:absolute;border-radius:50%;background-color:#f0f0f0;z-index:5}@-webkit-keyframes rotateplane{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes rotateplane{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}div.buildingList>ul>a{display:block;height:6.25rem;position:relative;overflow:hidden;z-index:1}div.buildingList>ul>a>div{margin-top:-.9375rem}div.buildingList>ul>a>div>img{width:100%}div.buildingList>ul>a>footer{height:1.25rem;background:-webkit-gradient(linear,0 100%,0 0,from(rgba(0,0,0,.5)),to(hsla(0,0%,100%,0)));bottom:0;left:0;position:absolute;width:100%;padding-top:.78125rem}div.buildingList>ul>a>footer>div{padding:.109375rem .3125rem;line-height:.40625rem;height:.40625rem;font-size:.40625rem;color:#fff}div.buildingList>ul>a>footer>div>span.sm{font-size:.34375rem;color:#c8c8c8}div.buildingList>ul>a>footer>div>span.fr{float:right}div.buildingList>ul>div.dropDown{z-index:999;position:absolute;background-color:rgba(0,0,0,.8);width:100%;top:2.5rem;left:0;bottom:0;padding:0;font-size:.375rem;border:0}div.buildingList>ul>div.dropDown>div{height:7.5rem;font-size:0}div.buildingList>ul>div.dropDown>div>ul{height:6.25rem;overflow:auto;background-color:#fff;-webkit-overflow-scrolling:touch}div.buildingList>ul>div.dropDown>div>ul>li{-webkit-overflow-scrolling:touch;font-size:.375rem;padding-left:.3125rem;height:1.21875rem;line-height:1.21875rem;border-bottom:.03125rem solid #ccc}div.buildingList>ul>div.dropDown>div>ul.district{vertical-align:top;display:inline-block;overflow:auto;width:3.296875rem;border-right:.03125rem solid #ccc}div.buildingList>ul>div.dropDown>div>ul.district>li{height:1.25rem;border:0}div.buildingList>ul>div.dropDown>div>ul.district>li.active{background-color:#f0f0f0;color:#c80000}div.buildingList>ul>div.dropDown>div>ul.comm{vertical-align:top;display:inline-block;overflow:auto;width:6.671875rem}div.buildingList>ul>div.dropDown>div footer{height:1.21875rem;border-top:.03125rem solid #ccc;background-color:#f0f0f0;padding-left:.3125rem}",""])},135:function(e,t,n){var r=n(102);"string"==typeof r&&(r=[[e.id,r,""]]);var o=n(67)(r,{});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(102,function(){var t=n(102);"string"==typeof t&&(t=[[e.id,t,""]]),o(t)}),e.hot.dispose(function(){o()})},185:function(e,t){"use strict";var n={WebkitTapHighlightColor:"rgba(0,0,0,0)",WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none",cursor:"pointer"};e.exports=n},233:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0,s=c=void 0}},u=n(5),c=r(u),l=n(27),p=n(82),d=r(p),f=n(38),h=function(e){function t(){var e=this;o(this,n),s(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.areas=[{min:0,max:"不限"},{min:0,max:100},{min:100,max:200},{min:200,max:300},{min:300,max:500},{min:500,max:700},{min:700,max:1e3},{min:1e3,max:1500},{min:1500,max:2e3},{min:2e3,max:"不限"}],setTimeout(function(){e.__areaChange=function(e,t){this.props.onChange("area",t.target.innerText),e.max="不限"==e.max?null:e.max,this.props.setArea(e.min,e.max),this.props.fetchBuildings()}}.bind(this),600)}i(t,e),a(t,[{key:"_areaChange",value:function(e,t){this.__areaChange?this.__areaChange(e,t):t.stopPropagation()}},{key:"render",value:function(){var e=this,t=this.areas.map(function(t,n){return 0==n?c["default"].createElement(d["default"],{key:n,component:"li",onTap:e._areaChange.bind(e,t)},"不限"):1==n?c["default"].createElement(d["default"],{key:n,component:"li",onTap:e._areaChange.bind(e,t)},"100㎡以下"):c["default"].createElement(d["default"],{key:n,component:"li",onTap:e._areaChange.bind(e,t)},"不限"==t.max?0==t.min?"不限":"2000+":t.min+"-"+t.max,"㎡")});return c["default"].createElement("div",null,c["default"].createElement("ul",null,t))}}]);var n=t;return t=l.connect(function(e){return{}},function(e){return{setArea:function(t,n){return e(f.setArea(t,n))},fetchBuildings:function(){return e(f.fetchBuildings())}}})(t)||t}(c["default"].Component);t["default"]=h,e.exports=t["default"]},234:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0,s=c=void 0}},u=n(5),c=r(u),l=n(27);n(135);var p=n(136),d=r(p),f=n(111),h=r(f),v=n(38),m=n(82),g=r(m),y=n(233),b=r(y),_=n(236),E=r(_),N=n(235),O=r(N),C=n(492),D=r(C),w=n(43),x=n(221),P=r(x),T=n(493),M=(r(T),function(e){function t(){o(this,n),s(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.isAdd=!0,this.state={isOpen:!1,districtName:null,areaName:null,priceName:null,top:300,height:700}}i(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.buildings.length>0?this.refs.list.scrollTop=this.refs[this.props.building.id].parentElement.offsetTop:this.props.fetchBuildings(),this.setState({height:window.innerHeight-this.refs.list.offsetTop}),this.refs.list.onscroll=function(){window.innerHeight+this.refs.list.scrollTop+300>this.refs.list.lastChild.offsetTop&&this.isAdd&&(this.isAdd=!1,this.props.addBuildings())}.bind(this)}},{key:"render",value:function(){var e=function(e){switch(e.state.dropDown){case"district":return c["default"].createElement(O["default"],{onChange:e._handleChange.bind(e)});case"area":return c["default"].createElement(b["default"],{onChange:e._handleChange.bind(e)});case"price":return c["default"].createElement(E["default"],{onChange:e._handleChange.bind(e)});default:return null}}(this);this.props.buildings.length;return this.isAdd=!0,c["default"].createElement("div",{className:"buildingList"},c["default"].createElement("header",null,c["default"].createElement("div",null,c["default"].createElement("img",{src:P["default"]})," 地图"),c["default"].createElement("input",{placeholder:"请输入楼盘名称"})),c["default"].createElement("div",{className:"query",ref:"query"},c["default"].createElement("div",{onTouchStart:this._selectChange.bind(this,"district")},this.state.districtName||"区域"," ",c["default"].createElement("img",{src:D["default"]})),c["default"].createElement("div",{onTouchStart:this._selectChange.bind(this,"area")},this.state.areaName||"面积","  ",c["default"].createElement("img",{src:D["default"]})),c["default"].createElement("div",{onTouchStart:this._selectChange.bind(this,"price")},this.state.priceName||"租金"," ",c["default"].createElement("img",{src:D["default"]}))),c["default"].createElement("ul",{ref:"list",style:{height:this.state.height,overflow:this.state.isOpen?"hidden":"auto"}},this.props.buildings.map(function(e,t){return c["default"].createElement(w.Link,{to:"/houseDetail/"+e.buildingId,key:e.buildingId},c["default"].createElement(h["default"],{src:e.buildingImage,wrapper:c["default"].DOM.div,preloader:function(){return c["default"].createElement("img",{src:d["default"]})}}),c["default"].createElement("footer",{ref:e.buildingId},c["default"].createElement("div",null,c["default"].createElement("span",null,e.buildingName),c["default"].createElement("span",{className:"fr sm"},"套房源"),c["default"].createElement("span",{className:"fr"},e.suitableNum)),c["default"].createElement("div",null,c["default"].createElement("span",{className:"sm"},e.buildingAddress),c["default"].createElement("span",{className:"fr sm"},"元m",c["default"].createElement("sup",null,"2"),".天"),c["default"].createElement("span",{className:"fr"},e.averageRent))))}),this.state.isOpen?c["default"].createElement(g["default"],{ref:"dropDown",style:{top:this.state.top},component:"div",className:"dropDown",onTap:this._closeDropDown.bind(this)},e):null,c["default"].createElement("footer",null,this.props.isBottom?c["default"].createElement("div",{id:"cercle"},c["default"].createElement("div",{id:"cercleCache"})):c["default"].createElement("div",{id:"cercle"},c["default"].createElement("div",{id:"cercleCache"})))))}},{key:"_selectChange",value:function(e,t){this.setState({dropDown:e,isOpen:!0,top:this.refs.list.offsetTop})}},{key:"_closeDropDown",value:function(e){e.stopPropagation(),this.setState({isOpen:!1})}},{key:"_handleChange",value:function(e,t){switch(e){case"district":this.setState({districtName:t});break;case"area":this.setState({areaName:t});break;case"price":this.setState({priceName:t})}}}]);var n=t;return t=l.connect(function(e){return{buildings:e.building.buildings,isBottom:e.building.isBottom,building:e.building.building}},function(e){return{fetchBuildings:function(){return e(v.fetchBuildings())},addBuildings:function(){return e(v.addBuildings())}}})(t)||t}(c["default"].Component));t["default"]=M,e.exports=t["default"]},235:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0,s=c=void 0}},u=n(5),c=r(u),l=n(27);n(135);var p=n(38),d=n(82),f=r(d),h=function(e){function t(){var e=this;o(this,n),s(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.state={},setTimeout(function(){e.__handleDistrictTouch=function(e,t){e.id?(t.stopPropagation(),this.props.onChange("district",t.target.innerText),this.props.setCurrentDistrict(e.id),this.props.fetchComms(),this.setState({districtId:e.id})):(this.props.onChange("district",t.target.innerText),this.props.setCurrentDistrict(e.id),this.props.setCurrentComm(null),this.props.fetchBuildings())},e.__handleCommTouch=function(e,t){console.log(888),this.props.onChange("district",t.target.innerText),this.props.setCurrentComm(e.id),this.props.fetchBuildings()}}.bind(this),600)}i(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.fetchDistricts()}},{key:"_handleCommTouch",value:function(e,t){this.__handleCommTouch&&this.__handleCommTouch(e,t)}},{key:"_handleDistrictTouch",value:function(e,t){this.__handleDistrictTouch?this.__handleDistrictTouch(e,t):t.stopPropagation()}},{key:"render",value:function(){var e=this;return c["default"].createElement("div",null,c["default"].createElement("ul",{className:"district"},this.props.districts.map(function(t){return c["default"].createElement(f["default"],{key:t.id,component:"li",className:t.id==e.state.districtId?"active":null,onTap:e._handleDistrictTouch.bind(e,t)},t.name)})),this.state.districtId?c["default"].createElement("ul",{className:"comm"},this.props.comms.map(function(t){return c["default"].createElement(f["default"],{component:"li",key:t.id,onTap:e._handleCommTouch.bind(e,t)},t.name)})):null)}}]);var n=t;return t=l.connect(function(e){return{districts:e.query.city.districts,comms:e.query.city.district.comms}},function(e){return{fetchDistricts:function(){e(p.fetchDistricts())},fetchComms:function(){e(p.fetchComms())},setCurrentDistrict:function(t){return e(p.setCurrentDistrict(t))},setCurrentComm:function(t){return e(p.setCurrentComm(t))},fetchBuildings:function(){return e(p.fetchBuildings())}}})(t)||t}(c["default"].Component);t["default"]=h,e.exports=t["default"]},236:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0,s=c=void 0}},u=n(5),c=r(u),l=n(27);n(135);var p=n(82),d=r(p),f=n(38),h=function(e){function t(){var e=this;o(this,n),s(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.prices=[{min:0,max:"不限"},{min:0,max:1},{min:1,max:2},{min:2,max:3},{min:3,max:4},{min:4,max:5},{min:5,max:6},{min:6,max:7},{min:7,max:8},{min:8,max:9},{min:9,max:"不限"}],setTimeout(function(){e.__priceChange=function(e,t){this.props.onChange("price",t.target.innerText),e.max="不限"==e.max?null:e.max,this.props.setPrice(e.min,e.max),this.props.fetchBuildings()}}.bind(this),600)}i(t,e),a(t,[{key:"_priceChange",value:function(e,t){this.__priceChange?this.__priceChange(e,t):t.stopPropagation()}},{key:"render",value:function(){var e=this,t=this.prices.map(function(t,n){return 0==n?c["default"].createElement(d["default"],{key:n,component:"li",onTap:e._priceChange.bind(e,t)},"不限"):1==n?c["default"].createElement(d["default"],{key:n,component:"li",onTap:e._priceChange.bind(e,t)},"1元/㎡.天以下"):c["default"].createElement(d["default"],{key:n,component:"li",onTap:e._priceChange.bind(e,t)},"不限"==t.max?0==t.min?"不限":"9+":t.min+"-"+t.max,"元/㎡.天")});return c["default"].createElement("div",null,c["default"].createElement("ul",null,t))}}]);var n=t;return t=l.connect(function(e){return{}},function(e){return{setPrice:function(t,n){return e(f.setPrice(t,n))},fetchBuildings:function(){return e(f.fetchBuildings())}}})(t)||t}(c["default"].Component);t["default"]=h,e.exports=t["default"]},414:function(e,t,n){"use strict";function r(e){return{touches:Array.prototype.map.call(e,function(e){return{identifier:e.identifier,pageX:e.pageX,pageY:e.pageY}}),center:{x:(e[0].pageX+e[1].pageX)/2,y:(e[0].pageY+e[1].pageY)/2},angle:Math.atan()*(e[1].pageY-e[0].pageY)/(e[1].pageX-e[0].pageX)*180/Math.PI,distance:Math.sqrt(Math.pow(Math.abs(e[1].pageX-e[0].pageX),2)+Math.pow(Math.abs(e[1].pageY-e[0].pageY),2))}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(5),a={propTypes:{onPinchStart:i.PropTypes.func,onPinchMove:i.PropTypes.func,onPinchEnd:i.PropTypes.func},onPinchStart:function(e){this._initialTouch&&this.endTouch();var t=e.touches;this._initialPinch=r(t),this._initialPinch=o(this._initialPinch,{displacement:{x:0,y:0},displacementVelocity:{x:0,y:0},rotation:0,rotationVelocity:0,zoom:1,zoomVelocity:0,time:Date.now()}),this._lastPinch=this._initialPinch,this.props.onPinchStart&&this.props.onPinchStart(this._initialPinch,e)},onPinchMove:function(e){this._initialTouch&&this.endTouch();var t=e.touches;if(2!==t.length)return this.onPinchEnd(e);var n=r(t[0].identifier===this._initialPinch.touches[0].identifier&&t[1].identifier===this._initialPinch.touches[1].identifier?t:t[1].identifier===this._initialPinch.touches[0].identifier&&t[0].identifier===this._initialPinch.touches[1].identifier?t.reverse():t);n.displacement={x:n.center.x-this._initialPinch.center.x,y:n.center.y-this._initialPinch.center.y},n.time=Date.now();var o=n.time-this._lastPinch.time;n.displacementVelocity={x:(n.displacement.x-this._lastPinch.displacement.x)/o,y:(n.displacement.y-this._lastPinch.displacement.y)/o},n.rotation=n.angle-this._initialPinch.angle,n.rotationVelocity=n.rotation-this._lastPinch.rotation/o,n.zoom=n.distance/this._initialPinch.distance,n.zoomVelocity=(n.zoom-this._lastPinch.zoom)/o,this.props.onPinchMove&&this.props.onPinchMove(n,e),this._lastPinch=n},onPinchEnd:function(e){var t=o({},this._lastPinch);t.time=Date.now(),t.time-this._lastPinch.time>16&&(t.displacementVelocity=0,t.rotationVelocity=0,t.zoomVelocity=0),this.props.onPinchEnd&&this.props.onPinchEnd(t,e),this._initialPinch=this._lastPinch=null}};e.exports=a},415:function(e,t,n){"use strict";function r(e){return e?{pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY}:{}}var o=n(5),i=n(110),a={propTypes:{moveThreshold:o.PropTypes.number,activeDelay:o.PropTypes.number,pressDelay:o.PropTypes.number,pressMoveThreshold:o.PropTypes.number,preventDefault:o.PropTypes.bool,stopPropagation:o.PropTypes.bool,onTap:o.PropTypes.func,onPress:o.PropTypes.func,onTouchStart:o.PropTypes.func,onTouchMove:o.PropTypes.func,onTouchEnd:o.PropTypes.func,onMouseDown:o.PropTypes.func,onMouseUp:o.PropTypes.func,onMouseMove:o.PropTypes.func,onMouseOut:o.PropTypes.func},getDefaultProps:function(){return{activeDelay:0,moveThreshold:100,pressDelay:1e3,pressMoveThreshold:5}},getInitialState:function(){return{isActive:!1,touchActive:!1,pinchActive:!1}},componentWillUnmount:function(){this.cleanupScrollDetection(),this.cancelPressDetection(),this.clearActiveTimeout()},processEvent:function(e){this.props.preventDefault&&e.preventDefault(),this.props.stopPropagation&&e.stopPropagation()},onTouchStart:function(e){this.props.onTouchStart&&this.props.onTouchStart(e)===!1||(this.processEvent(e),window._blockMouseEvents=!0,1===e.touches.length?(this._initialTouch=this._lastTouch=r(e.touches[0]),this.initScrollDetection(),this.initPressDetection(e,this.endTouch),this._activeTimeout=setTimeout(this.makeActive,this.props.activeDelay)):this.onPinchStart&&(this.props.onPinchStart||this.props.onPinchMove||this.props.onPinchEnd)&&2===e.touches.length&&this.onPinchStart(e))},makeActive:function(){this.isMounted()&&(this.clearActiveTimeout(),this.setState({isActive:!0}))},clearActiveTimeout:function(){clearTimeout(this._activeTimeout),this._activeTimeout=!1},initScrollDetection:function(){this._scrollPos={top:0,left:0},this._scrollParents=[],this._scrollParentPos=[];for(var e=i.findDOMNode(this);e;)(e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth)&&(this._scrollParents.push(e),this._scrollParentPos.push(e.scrollTop+e.scrollLeft),this._scrollPos.top+=e.scrollTop,this._scrollPos.left+=e.scrollLeft),e=e.parentNode},calculateMovement:function(e){return{x:Math.abs(e.clientX-this._initialTouch.clientX),y:Math.abs(e.clientY-this._initialTouch.clientY)}},detectScroll:function(){for(var e={top:0,left:0},t=0;t<this._scrollParents.length;t++)e.top+=this._scrollParents[t].scrollTop,e.left+=this._scrollParents[t].scrollLeft;return!(e.top===this._scrollPos.top&&e.left===this._scrollPos.left)},cleanupScrollDetection:function(){this._scrollParents=void 0,this._scrollPos=void 0},initPressDetection:function(e,t){this.props.onPress&&(this._pressTimeout=setTimeout(function(){this.props.onPress(e),t()}.bind(this),this.props.pressDelay))},cancelPressDetection:function(){clearTimeout(this._pressTimeout)},onTouchMove:function(e){if(this._initialTouch){if(this.processEvent(e),this.detectScroll())return this.endTouch(e);this.props.onTouchMove&&this.props.onTouchMove(e),this._lastTouch=r(e.touches[0]);var t=this.calculateMovement(this._lastTouch);(t.x>this.props.pressMoveThreshold||t.y>this.props.pressMoveThreshold)&&this.cancelPressDetection(),t.x>this.props.moveThreshold||t.y>this.props.moveThreshold?this.state.isActive?this.setState({isActive:!1}):this._activeTimeout&&this.clearActiveTimeout():this.state.isActive||this._activeTimeout||this.setState({isActive:!0})}else this._initialPinch&&2===e.touches.length&&this.onPinchMove&&(this.onPinchMove(e),e.preventDefault())},onTouchEnd:function(e){var t=this;if(this._initialTouch){this.processEvent(e);var n,r=this.calculateMovement(this._lastTouch);r.x<=this.props.moveThreshold&&r.y<=this.props.moveThreshold&&this.props.onTap&&(e.preventDefault(),n=function(){var n=t._scrollParents.map(function(e){return e.scrollTop+e.scrollLeft}),r=t._scrollParentPos.some(function(e,t){return e!==n[t]});r||t.props.onTap(e)}),this.endTouch(e,n)}else this.onPinchEnd&&this._initialPinch&&e.touches.length+e.changedTouches.length===2&&(this.onPinchEnd(e),e.preventDefault())},endTouch:function(e,t){this.cancelPressDetection(),this.clearActiveTimeout(),e&&this.props.onTouchEnd&&this.props.onTouchEnd(e),this._initialTouch=null,this._lastTouch=null,t&&t(),this.state.isActive&&this.setState({isActive:!1})},onMouseDown:function(e){return window._blockMouseEvents?void(window._blockMouseEvents=!1):void(this.props.onMouseDown&&this.props.onMouseDown(e)===!1||(this.processEvent(e),this.initPressDetection(e,this.endMouseEvent),this._mouseDown=!0,this.setState({isActive:!0})))},onMouseMove:function(e){!window._blockMouseEvents&&this._mouseDown&&(this.processEvent(e),this.props.onMouseMove&&this.props.onMouseMove(e))},onMouseUp:function(e){!window._blockMouseEvents&&this._mouseDown&&(this.processEvent(e),this.props.onMouseUp&&this.props.onMouseUp(e),this.props.onTap&&this.props.onTap(e),this.endMouseEvent())},onMouseOut:function(e){!window._blockMouseEvents&&this._mouseDown&&(this.processEvent(e),this.props.onMouseOut&&this.props.onMouseOut(e),this.endMouseEvent())},endMouseEvent:function(){this.cancelPressDetection(),this._mouseDown=!1,this.setState({isActive:!1})},cancelTap:function(){this.endTouch(),this._mouseDown=!1},handlers:function(){return{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut}}};e.exports=a},416:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(5),i=n(185);e.exports=function(e){return o.createClass({displayName:"Tappable",mixins:e,propTypes:{component:o.PropTypes.any,className:o.PropTypes.string,classBase:o.PropTypes.string,style:o.PropTypes.object,disabled:o.PropTypes.bool},getDefaultProps:function(){return{component:"span",classBase:"Tappable"}},render:function(){var e=this.props,t=e.classBase+(this.state.isActive?"-active":"-inactive");e.className&&(t+=" "+e.className);var n={};r(n,i,e.style);var a=r({},e,{style:n,className:t,disabled:e.disabled,handlers:this.handlers},this.handlers());return delete a.onTap,delete a.onPress,delete a.onPinchStart,delete a.onPinchMove,delete a.onPinchEnd,delete a.moveThreshold,delete a.pressDelay,delete a.pressMoveThreshold,delete a.preventDefault,delete a.stopPropagation,delete a.component,o.createElement(e.component,a,e.children)}})}},492:function(e,t,n){e.exports=n.p+"25df54bf4058a7e26776916c7fd00708.png"},493:function(e,t,n){e.exports=n.p+"7da744f73c0112f11586c4e4469abf28.gif"}});