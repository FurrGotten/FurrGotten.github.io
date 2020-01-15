(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

},{}],2:[function(require,module,exports){
'use strict';

var _webfontloader = require('webfontloader');

var WebFont = _interopRequireWildcard(_webfontloader);

var _MainMenuState = require('states/MainMenuState.js');

var _MainMenuState2 = _interopRequireDefault(_MainMenuState);

var _GamePlatformState = require('states/GamePlatformState.js');

var _GamePlatformState2 = _interopRequireDefault(_GamePlatformState);

var _EndGameStateWin = require('states/EndGameStateWin.js');

var _EndGameStateWin2 = _interopRequireDefault(_EndGameStateWin);

var _EndGameStateLose = require('states/EndGameStateLose.js');

var _EndGameStateLose2 = _interopRequireDefault(_EndGameStateLose);

var _TutorialState = require('states/TutorialState.js');

var _TutorialState2 = _interopRequireDefault(_TutorialState);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 1090, 1100, Phaser.AUTO, 'content', null));

        WebFont.load({
            google: {
                families: ['Fredoka One']
            }
        });
        _this.state.add('MainMenuState', _MainMenuState2.default, false);
        _this.state.add('GamePlatformState', _GamePlatformState2.default, false);
        _this.state.add('EndGameStateWin', _EndGameStateWin2.default, false);
        _this.state.add('EndGameStateLose', _EndGameStateLose2.default, false);
        _this.state.add('TutorialState', _TutorialState2.default, false);
        switch (sessionStorage.getItem('curState')) {
            case 'GamePlatformState':
                _this.state.start('GamePlatformState');
                break;
            case 'EndGameStateWin':
                _this.state.start('EndGameStateWin');
                break;
            case 'EndGameStateLose':
                _this.state.start('EndGameStateLose');
                break;
            case 'TutorialState':
                _this.state.start('TutorialState');
                break;
            default:
                _this.state.start('MainMenuState');
        }
        return _this;
    }

    return Game;
}(Phaser.Game);

new Game();

},{"states/EndGameStateLose.js":3,"states/EndGameStateWin.js":4,"states/GamePlatformState.js":5,"states/MainMenuState.js":6,"states/TutorialState.js":7,"webfontloader":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var EndGameStateLose = function (_Phaser$State) {
	_inherits(EndGameStateLose, _Phaser$State);

	function EndGameStateLose() {
		_classCallCheck(this, EndGameStateLose);

		return _possibleConstructorReturn(this, (EndGameStateLose.__proto__ || Object.getPrototypeOf(EndGameStateLose)).apply(this, arguments));
	}

	_createClass(EndGameStateLose, [{
		key: 'preload',
		value: function preload() {
			this.load.image('background', 'assets/images/backgrounds/background.jpg');
			this.load.image('loseText', 'assets/images/text-timeup.png');
			this.load.image('playButton', 'assets/images/btn-play.png');
		}
	}, {
		key: 'create',
		value: function create() {
			var _this2 = this;

			var _world = this.world,
			    centerX = _world.centerX,
			    centerY = _world.centerY;

			sessionStorage.setItem('curState', 'EndGameStateLose');

			this.stage.backgroundColor = '#bbb980';
			var backgroundImage = this.add.sprite(0, 0, 'background');
			backgroundImage.height = 1100;
			var loseText = this.add.sprite(centerX, centerY, 'loseText');
			loseText.anchor.setTo(0.5, 0.5);
			backgroundImage.tint = 0xbbbbbb;
			var playButton = this.add.button(centerX, centerY + 170, 'playButton', function () {
				_this2.state.start('GamePlatformState', true, false, { score: 200 });
			});
			playButton.anchor.setTo(0.5, 0.5);
			playButton.onInputDown.add(this.tint, playButton);
			playButton.onInputUp.add(this.unTint, playButton);
			var backToMenu = this.add.text(centerX, 1000, 'back to main menu', { font: "80px Fredoka One", fill: "#FFFFFF", align: "center" });
			backToMenu.anchor.setTo(0.5);
			backToMenu.inputEnabled = true;
			backToMenu.events.onInputUp.add(function () {
				_this2.state.start('MainMenuState');
			}, this);
		}
	}, {
		key: 'tint',
		value: function tint() {
			this.tint = 0xbbbbbb;
			// sound.play('');
		}
	}, {
		key: 'unTint',
		value: function unTint() {
			this.tint = 0xFFFFFF;
			// sound.play('');
		}
	}]);

	return EndGameStateLose;
}(Phaser.State);

exports.default = EndGameStateLose;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var EndGameStateWin = function (_Phaser$State) {
	_inherits(EndGameStateWin, _Phaser$State);

	function EndGameStateWin() {
		_classCallCheck(this, EndGameStateWin);

		return _possibleConstructorReturn(this, (EndGameStateWin.__proto__ || Object.getPrototypeOf(EndGameStateWin)).apply(this, arguments));
	}

	_createClass(EndGameStateWin, [{
		key: 'preload',
		value: function preload() {
			this.load.image('background', 'assets/images/backgrounds/background.jpg');
			this.load.image('playButton', 'assets/images/btn-play.png');
		}
	}, {
		key: 'create',
		value: function create() {
			var _this2 = this;

			var _world = this.world,
			    centerX = _world.centerX,
			    centerY = _world.centerY;

			sessionStorage.setItem('curState', 'EndGameStateWin');

			this.stage.backgroundColor = '#fffcad';
			var backgroundImage = this.add.sprite(0, 0, 'background');
			backgroundImage.height = 1100;
			backgroundImage.tint = 0xbbbbbb;
			var playButton = this.add.button(centerX, centerY + 170, 'playButton', function () {
				_this2.state.start('GamePlatformState', true, false, { score: 200 });
			});
			playButton.anchor.setTo(0.5, 0.5);
			playButton.onInputDown.add(this.tint, playButton);
			playButton.onInputUp.add(this.unTint, playButton);
			var winText = this.add.text(centerX, centerY - 300, 'YOU WIN!', { font: "160px Fredoka One", fill: "#ffffff", align: "center" });
			winText.anchor.setTo(0.5, 0.5);
			var backToMenu = this.add.text(centerX, 1000, 'back to main menu', { font: "80px Fredoka One", fill: "#ffffff", align: "center" });
			backToMenu.anchor.setTo(0.5);
			backToMenu.inputEnabled = true;
			backToMenu.events.onInputUp.add(function () {
				_this2.state.start('MainMenuState');
			}, this);
		}
	}, {
		key: 'tint',
		value: function tint() {
			this.tint = 0xbbbbbb;
			// sound.play('');
		}
	}, {
		key: 'unTint',
		value: function unTint() {
			this.tint = 0xFFFFFF;
			// sound.play('');
		}
	}]);

	return EndGameStateWin;
}(Phaser.State);

exports.default = EndGameStateWin;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _helpers = require('./helpers');

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DONUT_SIZE = 100;
var ALLOWED_DONUT_TYPES = ['donut-01', 'donut-02', 'donut-03', 'donut-04', 'donut-05', 'donut-06'];

var LOSE_TIME = 300;
var WIN_SCORE = 300;

var backgroundMusic = void 0;
var backgroundMusicState = 'on';
var missSound = void 0;
var killSound = void 0;
var score = void 0;

var emitter = void 0;
var PARTICLES = ['particle-1', 'particle-2', 'particle-3'];

var selDonutIndex = void 0;

var GamePlatformState = function (_Phaser$State) {
    _inherits(GamePlatformState, _Phaser$State);

    function GamePlatformState() {
        _classCallCheck(this, GamePlatformState);

        return _possibleConstructorReturn(this, (GamePlatformState.__proto__ || Object.getPrototypeOf(GamePlatformState)).apply(this, arguments));
    }

    _createClass(GamePlatformState, [{
        key: 'preload',
        value: function preload() {
            this.load.image('background', 'assets/images/backgrounds/background.jpg');
            this.load.image('scoreTable', 'assets/images/bg-score.png');
            this.load.image('donut-01', 'assets/images/game/gem-01.png');
            this.load.image('donut-02', 'assets/images/game/gem-02.png');
            this.load.image('donut-03', 'assets/images/game/gem-03.png');
            this.load.image('donut-04', 'assets/images/game/gem-04.png');
            this.load.image('donut-05', 'assets/images/game/gem-05.png');
            this.load.image('donut-06', 'assets/images/game/gem-06.png');
            this.load.image('donut-07', 'assets/images/game/gem-07.png');
            this.load.image('donut-08', 'assets/images/game/gem-08.png');
            this.load.image('donut-09', 'assets/images/game/gem-09.png');
            this.load.image('donut-10', 'assets/images/game/gem-10.png');
            this.load.image('donut-11', 'assets/images/game/gem-11.png');
            this.load.image('donut-12', 'assets/images/game/gem-12.png');
            this.load.image('hand', 'assets/images/game/hand.png');
            this.load.image('mute', 'assets/images/btn-sfx.png');
            this.load.audio('soundTrack', 'assets/audio/background.mp3');
            this.load.audio('missSound', 'assets/audio/miss-sound.mp3');
            this.load.audio('killSound', 'assets/audio/kill.mp3');
            this.load.audio('select-1', 'assets/audio/select-1.mp3');
            this.load.audio('select-2', 'assets/audio/select-2.mp3');
            this.load.audio('select-3', 'assets/audio/select-3.mp3');
            this.load.audio('select-4', 'assets/audio/select-4.mp3');
            this.load.audio('select-5', 'assets/audio/select-5.mp3');
            this.load.audio('select-6', 'assets/audio/select-6.mp3');
            this.load.audio('select-7', 'assets/audio/select-7.mp3');
            this.load.audio('select-8', 'assets/audio/select-8.mp3');
            this.load.audio('select-9', 'assets/audio/select-9.mp3');
            this.load.image('particle-1', 'assets/images/particles/particle_ex1.png');
            this.load.image('particle-2', 'assets/images/particles/particle_ex2.png');
            this.load.image('particle-3', 'assets/images/particles/particle_ex3.png');
        }
    }, {
        key: 'create',
        value: function create() {
            var _this2 = this;

            var _world = this.world,
                centerX = _world.centerX,
                centerY = _world.centerY;

            sessionStorage.setItem('curState', 'GamePlatformState');

            this.stage.backgroundColor = '#fffcad';
            var backgroundImage = this.add.sprite(0, 0, 'background');
            backgroundImage.height = 1100;

            var scoreTable = this.add.sprite(centerX - 200, 10, 'scoreTable');
            scoreTable.anchor.setTo(0.5, 0);
            score = 0;
            var scoreText = this.add.text(centerX - 190, 70, '0', { font: "64px Fredoka One", fill: "#ff3030", align: "center" });

            var donuts = this.add.group();
            (0, _helpers.generateField)(donuts, ALLOWED_DONUT_TYPES);
            donuts.align(_helpers.FIELD_COLUMNS, -1, DONUT_SIZE, DONUT_SIZE);
            donuts.x = centerX - DONUT_SIZE * _helpers.FIELD_COLUMNS / 2;
            donuts.y = centerY + 100 - DONUT_SIZE * _helpers.FIELD_ROWS / 2;
            donuts.setAll('inputEnabled', true);
            donuts.setAll('input.useHandCursor', true);
            donuts.callAll('events.onInputDown.add', 'events.onInputDown', function (item) {
                _this2.clickHandler(item, scoreText);
            }, this);

            selDonutIndex = null;

            missSound = this.add.audio('missSound');
            backgroundMusic = this.add.audio('soundTrack');
            backgroundMusic.loop = true;
            backgroundMusic.play();

            var mute = this.add.button(900, 50, 'mute', function () {
                if (backgroundMusicState === 'on') {
                    backgroundMusic.stop();
                    backgroundMusicState = 'off';
                } else {
                    backgroundMusic.play();
                    backgroundMusicState = 'on';
                }
            });
            mute.onInputDown.add(this.tint, mute);
            mute.onInputUp.add(this.unTint, mute);

            this.time.events.add(Phaser.Timer.SECOND * LOSE_TIME, function () {
                _this2.state.start('EndGameStateLose');
                backgroundMusic.destroy();
                _this2.cache.removeSound('soundTrack');
            }, this);
            var rawSecondsTimer = LOSE_TIME;
            var timeText = this.add.text(centerX + 100, 100, (0, _helpers.formatTime)(rawSecondsTimer), { font: "64px Fredoka One", fill: "#ff3030", align: "center" });
            this.game.time.events.loop(Phaser.Timer.SECOND, function () {
                rawSecondsTimer--;
                timeText.setText((0, _helpers.formatTime)(rawSecondsTimer));
            }, this);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'clickHandler',
        value: function clickHandler(curDonut, scoreText) {
            var curDonutIndex = curDonut.parent.getChildIndex(curDonut);
            if (selDonutIndex === null) {
                // виділяємо елемент, якщо ще не виділенний
                curDonut.height = 120;
                curDonut.width = 120;
                curDonut.x -= 10;
                curDonut.y -= 10;
                selDonutIndex = curDonutIndex;
            } else if (curDonutIndex === selDonutIndex) {
                // знімаємо виділення, якщо клікаємо по вже виділеному елементу
                curDonut.height = 100;
                curDonut.width = 100;
                curDonut.x += 10;
                curDonut.y += 10;
                selDonutIndex = null;
            } else {
                // у будь-якому випадку знімаємо виділення з поточного виділеного елементу
                var selDonut = curDonut.parent.getChildAt(selDonutIndex);
                selDonut.height = 100;
                selDonut.width = 100;
                selDonut.x += 10;
                selDonut.y += 10;

                // перевіряємо чи можна зробити перестановку та робимо її
                var donutKeys = curDonut.parent.children.map(function (sprite) {
                    return sprite.key;
                });
                var removableIndexes = (0, _helpers.getRemovableDonuts)(donutKeys, selDonutIndex, curDonutIndex);
                if (!removableIndexes.length) {
                    // перестановка неможлива або елементи не сусідні, відтворюємо відповідний звук
                    missSound.play();
                } else {
                    // перестановка можлива, міняємо елементи місцями
                    var t = selDonut.key;
                    selDonut.loadTexture(curDonut.key);
                    curDonut.loadTexture(t);
                    // повторюємо поки є можливість видаляти елементи
                    var iter = 1;
                    while (removableIndexes.length) {
                        // для анімації потрібні самі елементи за вказаними індексами
                        var removableElements = removableIndexes.map(function (i) {
                            return curDonut.parent.getChildAt(i);
                        });
                        this.animateRemoval(removableElements, iter);
                        score += iter * removableIndexes.length;
                        scoreText.setText('' + score);
                        // замінити текстури в видалених елементів на нові рандомні
                        removableElements.forEach(function (el) {
                            return el.loadTexture(Phaser.ArrayUtils.getRandomItem(ALLOWED_DONUT_TYPES));
                        });
                        // перевірити чи можливе ще видалення після додання нових
                        donutKeys = curDonut.parent.children.map(function (sprite) {
                            return sprite.key;
                        });
                        removableIndexes = (0, _helpers.getRemovableDonuts)(donutKeys);
                        // маємо лише 9 звуків для кожної ітерації
                        if (iter <= 9) iter++;
                    }
                }
                selDonutIndex = null;
            }
            if (score >= WIN_SCORE) {
                this.state.start('EndGameStateWin');
                backgroundMusic.destroy();
                this.cache.removeSound('soundTrack');
            }
        }
    }, {
        key: 'animateRemoval',
        value: function animateRemoval(elements, iter) {
            // програвати на кожній ітерації вищий звук
            killSound = this.add.audio('select-' + iter);
            killSound.volume = 0.5;
            killSound.play();

            var middleElement = elements[Math.floor(elements.length / 2)];

            emitter = this.add.emitter(50, 50, 100);
            emitter.makeParticles(PARTICLES);
            middleElement.addChild(emitter);
            emitter.minParticleSpeed.setTo(-600, -600);
            emitter.maxParticleSpeed.setTo(600, 600);
            emitter.gravity = 0;
            emitter.start(true, 1000, null, 10);
        }
    }, {
        key: 'tint',
        value: function tint() {
            this.tint = 0xbbbbbb;
            // sound.play('');
        }
    }, {
        key: 'unTint',
        value: function unTint() {
            this.tint = 0xFFFFFF;
            // sound.play('');
        }
    }]);

    return GamePlatformState;
}(Phaser.State);

exports.default = GamePlatformState;

},{"./helpers":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MainMenuState = function (_Phaser$State) {
	_inherits(MainMenuState, _Phaser$State);

	function MainMenuState() {
		_classCallCheck(this, MainMenuState);

		return _possibleConstructorReturn(this, (MainMenuState.__proto__ || Object.getPrototypeOf(MainMenuState)).apply(this, arguments));
	}

	_createClass(MainMenuState, [{
		key: 'preload',
		value: function preload() {
			this.load.image('background', 'assets/images/backgrounds/background.jpg');
			this.load.image('bigDonut', 'assets/images/donut.png');
			this.load.image('bigShadow', 'assets/images/big-shadow.png');
			this.load.image('logo', 'assets/images/donuts_logo.png');
			this.load.image('playButton', 'assets/images/btn-play.png');
			this.load.image('soundControlButton', 'assets/images/btn-sfx.png');
		}
	}, {
		key: 'create',
		value: function create() {
			var _this2 = this;

			var _world = this.world,
			    centerX = _world.centerX,
			    centerY = _world.centerY;

			sessionStorage.setItem('curState', 'MainMenuState');

			this.stage.backgroundColor = '#fffcad';
			var backgroundImage = this.add.sprite(0, 0, 'background');
			backgroundImage.height = 1100;

			var bigDonutShadow = this.add.sprite(centerX, centerY, 'bigShadow');
			bigDonutShadow.anchor.setTo(0.5, 0.5);
			var bigDonut = this.add.sprite(centerX, centerY, 'bigDonut');
			bigDonut.anchor.setTo(0.5, 0.5);
			var logo = this.add.sprite(centerX, centerY - 150, 'logo');
			logo.anchor.setTo(0.5, 0.5);

			var playButton = this.add.button(centerX, centerY + 170, 'playButton', function () {
				_this2.state.start('GamePlatformState', true, false, { score: 200 });
			});
			playButton.anchor.setTo(0.5, 0.5);
			playButton.onInputDown.add(this.tint, playButton);
			playButton.onInputUp.add(this.unTint, playButton);

			var tutorButton = this.add.text(centerX, centerY + 300, 'tutorial', { font: "60px Fredoka One", fill: "#ffffff", align: "center" });
			tutorButton.anchor.setTo(0.5);
			tutorButton.inputEnabled = true;
			tutorButton.events.onInputUp.add(function () {
				_this2.state.start('TutorialState');
			}, this);
		}
	}, {
		key: 'tint',
		value: function tint() {
			this.tint = 0xbbbbbb;
			// sound.play('');
		}
	}, {
		key: 'unTint',
		value: function unTint() {
			this.tint = 0xFFFFFF;
			// sound.play('');
		}
	}]);

	return MainMenuState;
}(Phaser.State);

exports.default = MainMenuState;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TutorialState = function (_Phaser$State) {
	_inherits(TutorialState, _Phaser$State);

	function TutorialState() {
		_classCallCheck(this, TutorialState);

		return _possibleConstructorReturn(this, (TutorialState.__proto__ || Object.getPrototypeOf(TutorialState)).apply(this, arguments));
	}

	_createClass(TutorialState, [{
		key: 'preload',
		value: function preload() {
			this.load.image('background', 'assets/images/backgrounds/background.jpg');
			this.load.image('playButton', 'assets/images/btn-play.png');
		}
	}, {
		key: 'create',
		value: function create() {
			var _this2 = this;

			var _world = this.world,
			    centerX = _world.centerX,
			    centerY = _world.centerY;

			sessionStorage.setItem('curState', 'TutorialState');

			this.stage.backgroundColor = '#fffcad';
			var backgroundImage = this.add.sprite(0, 0, 'background');
			backgroundImage.height = 1100;

			var tutorHeader = this.add.text(centerX, 100, 'TUTORIAL', { font: "100px Fredoka One", fill: "#000000", align: "center" });
			tutorHeader.anchor.setTo(0.5, 0.5);
			var tutorPart1 = this.add.text(centerX, 200, 'In the main menu press "play"', { font: "60px Fredoka One", fill: "#000000", align: "center" });
			tutorPart1.anchor.setTo(0.5, 0.5);
			var tutorPart2 = this.add.text(centerX, 300, 'Now, when you are on the playground, do following:', { font: "40px Fredoka One", fill: "#000000", align: "center" });
			tutorPart2.anchor.setTo(0.5, 0.5);
			var tutorPart3 = this.add.text(centerX, 400, 'You need to mach 3 or more donuts in line', { font: "50px Fredoka One", fill: "#000000", align: "center" });
			tutorPart3.anchor.setTo(0.5, 0.5);
			var tutorPart4 = this.add.text(centerX, 500, 'Choose one donut by clicking on him', { font: "60px Fredoka One", fill: "#000000", align: "center" });
			tutorPart4.anchor.setTo(0.5, 0.5);
			var tutorPart5 = this.add.text(centerX, 600, 'Click on a close donut to try a mach', { font: "60px Fredoka One", fill: "#000000", align: "center" });
			tutorPart5.anchor.setTo(0.5, 0.5);
			var tutorPart6 = this.add.text(centerX, 700, 'For every mach you get points, more in one go - better', { font: "40px Fredoka One", fill: "#000000", align: "center" });
			tutorPart6.anchor.setTo(0.5, 0.5);
			var tutorPart7 = this.add.text(centerX, 800, 'Get to 300 and YOU will WIN!', { font: "60px Fredoka One", fill: "#000000", align: "center" });
			tutorPart7.anchor.setTo(0.5, 0.5);
			var backToMenu = this.add.text(centerX, 1000, 'back to main menu', { font: "80px Fredoka One", fill: "#000000", align: "center" });
			backToMenu.anchor.setTo(0.5);
			backToMenu.inputEnabled = true;
			backToMenu.events.onInputUp.add(function () {
				_this2.state.start('MainMenuState');
			}, this);
		}
	}, {
		key: 'tint',
		value: function tint() {
			this.tint = 0xbbbbbb;
			// sound.play('');
		}
	}, {
		key: 'unTint',
		value: function unTint() {
			this.tint = 0xFFFFFF;
			// sound.play('');
		}
	}]);

	return TutorialState;
}(Phaser.State);

exports.default = TutorialState;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateField = generateField;
exports.getRemovableDonuts = getRemovableDonuts;
exports.formatTime = formatTime;

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }return arr2;
    } else {
        return Array.from(arr);
    }
}

var FIELD_COLUMNS = exports.FIELD_COLUMNS = 10;
var FIELD_ROWS = exports.FIELD_ROWS = 8;

function removeDuplicates(donuts, donutTypes, row, column) {
    var filtered = [].concat(_toConsumableArray(donutTypes));
    // Don't repeat donuts indexes horizontally more than two times
    if (column > 1) {
        var prevKey = donuts[donuts.length - 1].key;
        var prevPrevKey = donuts[donuts.length - 2].key;
        if (prevKey === prevPrevKey) filtered = filtered.filter(function (index) {
            return index !== prevKey;
        });
    }
    // Don't repeat donuts indexes vertically more than two times
    if (row > 1) {
        var upperKey = donuts[(row - 1) * FIELD_COLUMNS + column].key;
        var upperUpperKey = donuts[(row - 2) * FIELD_COLUMNS + column].key;
        if (upperKey === upperUpperKey) filtered = filtered.filter(function (index) {
            return index !== upperKey;
        });
    }
    return filtered;
}
// заповнюємо ігрове поле, слідкуючі, що ніякі 3 або більше однакових елемента не генерувалися підряд
// donutTypes містить масив тих елементів, які можна розмістити на полі
function generateField(donutsGroup, donutTypes) {
    for (var i = 0; i < FIELD_ROWS; i++) {
        for (var j = 0; j < FIELD_COLUMNS; j++) {
            var randomKey = Phaser.ArrayUtils.getRandomItem(removeDuplicates(donutsGroup.children, donutTypes, i, j));
            donutsGroup.create(0, 0, randomKey);
        }
    }
}

// знайти індекси всіх елементів які можна видалити
// на поточному полі або на полі яке виникає якщо переставити місцями елементи swapA i swapB
function getRemovableDonuts(donuts, swapA, swapB) {
    // створюємо копію ігрового поля щоб провести перевірку перед перстановкою swapA i swapB
    var donutsCopy = [].concat(_toConsumableArray(donuts));
    if (swapA && swapB) {
        // перевірка чи є елементи сусідніми для перестановки, якщо ні,
        // то перестановка неможлива і повертається порожній массив
        var diff = Math.abs(swapA - swapB);
        if (diff !== 1 && diff !== FIELD_COLUMNS) {
            return [];
        }
        var t = donutsCopy[swapA];
        donutsCopy[swapA] = donutsCopy[swapB];
        donutsCopy[swapB] = t;
    }
    // допоможній массив з нулів і одиниць, одиниці ставимо для елементів, які можна видалити
    var removeList = new Array(donuts.length).fill(0);
    for (var i = 0; i < FIELD_ROWS; i++) {
        for (var j = 0; j < FIELD_COLUMNS; j++) {
            var curIndex = i * FIELD_COLUMNS + j;
            // перевірка трьох сусідніх елементів по горизонталі
            if (j > 1 && donutsCopy[curIndex] === donutsCopy[curIndex - 1] && donutsCopy[curIndex] === donutsCopy[curIndex - 2]) {
                removeList[curIndex] = 1;
                removeList[curIndex - 1] = 1;
                removeList[curIndex - 2] = 1;
            }
            // перевірка трьох сусідніх елементів по вертикалі
            if (i > 1 && donutsCopy[curIndex] === donutsCopy[curIndex - FIELD_COLUMNS] && donutsCopy[curIndex] === donutsCopy[curIndex - FIELD_COLUMNS * 2]) {
                removeList[curIndex] = 1;
                removeList[curIndex - FIELD_COLUMNS] = 1;
                removeList[curIndex - FIELD_COLUMNS * 2] = 1;
            }
        }
    }
    // перетворюємо масив з одиниць і нулів в массив індексів потрібних нам елементів
    var retValue = [];
    removeList.forEach(function (v, i) {
        if (v) {
            retValue.push(i);
        }
    });
    return retValue;
}

function formatTime(sec) {
    var s = String(sec % 60).padStart(2, '0');
    var m = String(Math.floor(sec / 60)).padStart(2, '0');
    return m + ':' + s;
}

},{}]},{},[2])
//# sourceMappingURL=game.js.map
