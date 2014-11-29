(function(){function e(e){e.t="text0";var n={p:e.p.pop()};null!=e.si&&(n.i=e.si),null!=e.sd&&(n.d=e.sd),e.o=[n]}function n(e){e.p.push(e.o[0].p),null!=e.o[0].i&&(e.si=e.o[0].i),null!=e.o[0].d&&(e.sd=e.o[0].d),delete e.t,delete e.o}var i={exports:{}},t=i.exports;t._bootstrapTransform=function(e,n,i,t){var r=function(e,i,t,r){n(t,e,i,"left"),n(r,i,e,"right")},l=e.transformX=function(e,n){i(e),i(n);for(var o=[],p=0;n.length>p;p++){for(var d=n[p],f=[],s=0;e.length>s;){var a=[];if(r(e[s],d,f,a),s++,1!==a.length){if(0===a.length){for(var u=s;e.length>u;u++)t(f,e[u]);d=null;break}for(var v=l(e.slice(s),a),h=0;v[0].length>h;h++)t(f,v[0][h]);for(var c=0;v[1].length>c;c++)t(o,v[1][c]);d=null;break}d=a[0]}null!=d&&t(o,d),e=f}return[e,o]};e.transform=e.transform=function(e,i,t){if("left"!==t&&"right"!==t)throw Error("type must be 'left' or 'right'");return 0===i.length?e:1===e.length&&1===i.length?n([],e[0],i[0],t):"left"===t?l(e,i)[0]:l(i,e)[1]}};var r=i.exports={name:"text0",uri:"http://sharejs.org/types/textv0",create:function(e){if(null!=e&&"string"!=typeof e)throw Error("Initial data must be a string");return e||""}},l=function(e,n,i){return e.slice(0,n)+i+e.slice(n)},o=function(e){if("number"!=typeof e.p)throw Error("component missing position field");if("string"==typeof e.i==("string"==typeof e.d))throw Error("component needs an i or d field");if(0>e.p)throw Error("position cannot be negative")},p=function(e){for(var n=0;e.length>n;n++)o(e[n])};r.apply=function(e,n){var i;p(n);for(var t=0;n.length>t;t++){var r=n[t];if(null!=r.i)e=l(e,r.p,r.i);else{if(i=e.slice(r.p,r.p+r.d.length),r.d!==i)throw Error("Delete component '"+r.d+"' does not match deleted text '"+i+"'");e=e.slice(0,r.p)+e.slice(r.p+r.d.length)}}return e};var d=r._append=function(e,n){if(""!==n.i&&""!==n.d)if(0===e.length)e.push(n);else{var i=e[e.length-1];null!=i.i&&null!=n.i&&i.p<=n.p&&n.p<=i.p+i.i.length?e[e.length-1]={i:l(i.i,n.p-i.p,n.i),p:i.p}:null!=i.d&&null!=n.d&&n.p<=i.p&&i.p<=n.p+n.d.length?e[e.length-1]={d:l(n.d,i.p-n.p,i.d),p:n.p}:e.push(n)}};r.compose=function(e,n){p(e),p(n);for(var i=e.slice(),t=0;n.length>t;t++)d(i,n[t]);return i},r.normalize=function(e){var n=[];(null!=e.i||null!=e.p)&&(e=[e]);for(var i=0;e.length>i;i++){var t=e[i];null==t.p&&(t.p=0),d(n,t)}return n};var f=function(e,n,i){return null!=n.i?e>n.p||n.p===e&&i?e+n.i.length:e:n.p>=e?e:n.p+n.d.length>=e?n.p:e-n.d.length};r.transformCursor=function(e,n,i){for(var t="right"===i,r=0;n.length>r;r++)e=f(e,n[r],t);return e};var s=r._tc=function(e,n,i,t){if(o(n),o(i),null!=n.i)d(e,{i:n.i,p:f(n.p,i,"right"===t)});else if(null!=i.i){var r=n.d;n.p<i.p&&(d(e,{d:r.slice(0,i.p-n.p),p:n.p}),r=r.slice(i.p-n.p)),""!==r&&d(e,{d:r,p:n.p+i.i.length})}else if(n.p>=i.p+i.d.length)d(e,{d:n.d,p:n.p-i.d.length});else if(n.p+n.d.length<=i.p)d(e,n);else{var l={d:"",p:n.p};n.p<i.p&&(l.d=n.d.slice(0,i.p-n.p)),n.p+n.d.length>i.p+i.d.length&&(l.d+=n.d.slice(i.p+i.d.length-n.p));var p=Math.max(n.p,i.p),s=Math.min(n.p+n.d.length,i.p+i.d.length),a=n.d.slice(p-n.p,s-n.p),u=i.d.slice(p-i.p,s-i.p);if(a!==u)throw Error("Delete ops delete different text in the same region of the document");""!==l.d&&(l.p=f(l.p,i),d(e,l))}return e},a=function(e){return null!=e.i?{d:e.i,p:e.p}:{i:e.d,p:e.p}};r.invert=function(e){e=e.slice().reverse();for(var n=0;e.length>n;n++)e[n]=a(e[n]);return e},t._bootstrapTransform?t._bootstrapTransform(r,s,p,d):require("./helpers")._bootstrapTransform(r,s,p,d);var u=function(e){return"[object Array]"==Object.prototype.toString.call(e)},v=function(e){return JSON.parse(JSON.stringify(e))},h={name:"json0",uri:"http://sharejs.org/types/JSONv0"},c={};h.registerSubtype=function(e){c[e.name]=e},h.create=function(e){return void 0===e?null:v(e)},h.invertComponent=function(e){var n={p:e.p};return e.t&&c[e.t]&&(n.t=e.t,n.o=c[e.t].invert(e.o)),void 0!==e.si&&(n.sd=e.si),void 0!==e.sd&&(n.si=e.sd),void 0!==e.oi&&(n.od=e.oi),void 0!==e.od&&(n.oi=e.od),void 0!==e.li&&(n.ld=e.li),void 0!==e.ld&&(n.li=e.ld),void 0!==e.na&&(n.na=-e.na),void 0!==e.lm&&(n.lm=e.p[e.p.length-1],n.p=e.p.slice(0,e.p.length-1).concat([e.lm])),n},h.invert=function(e){for(var n=e.slice().reverse(),i=[],t=0;n.length>t;t++)i.push(h.invertComponent(n[t]));return i},h.checkValidOp=function(e){for(var n=0;e.length>n;n++)if(!u(e[n].p))throw Error("Missing path")},h.checkList=function(e){if(!u(e))throw Error("Referenced element not a list")},h.checkObj=function(e){if(e.constructor!==Object)throw Error("Referenced element not an object (it was "+JSON.stringify(e)+")")},h.apply=function(n,i){h.checkValidOp(i),i=v(i);for(var t={data:n},r=0;i.length>r;r++){var l=i[r];(null!=l.si||null!=l.sd)&&e(l);for(var o=null,p=null,d=t,f="data",s=0;l.p.length>s;s++){var a=l.p[s];if(o=d,p=f,d=d[f],f=a,null==o)throw Error("Path invalid")}if(l.t&&void 0!==l.o&&c[l.t])d[f]=c[l.t].apply(d[f],l.o);else if(void 0!==l.na){if("number"!=typeof d[f])throw Error("Referenced element not a number");d[f]+=l.na}else if(void 0!==l.li&&void 0!==l.ld)h.checkList(d),d[f]=l.li;else if(void 0!==l.li)h.checkList(d),d.splice(f,0,l.li);else if(void 0!==l.ld)h.checkList(d),d.splice(f,1);else if(void 0!==l.lm){if(h.checkList(d),l.lm!=f){var u=d[f];d.splice(f,1),d.splice(l.lm,0,u)}}else if(void 0!==l.oi)h.checkObj(d),d[f]=l.oi;else{if(void 0===l.od)throw Error("invalid / missing instruction in op");h.checkObj(d),delete d[f]}}return t.data},h.shatter=function(e){for(var n=[],i=0;e.length>i;i++)n.push([e[i]]);return n},h.incrementalApply=function(e,n,i){for(var t=0;n.length>t;t++){var r=[n[t]];e=h.apply(e,r),i(r,e)}return e};var g=h.pathMatches=function(e,n,i){if(e.length!=n.length)return!1;for(var t=0;e.length>t;t++)if(e[t]!==n[t]&&(!i||t!==e.length-1))return!1;return!0};if(h.append=function(i,t){if(t=v(t),0===i.length)return i.push(t),void 0;var r=i[i.length-1];if(null==t.si&&null==t.sd||null==r.si&&null==r.sd||(e(t),e(r)),g(t.p,r.p))if(t.t&&r.t&&t.t===r.t&&c[t.t]){if(r.o=c[t.t].compose(r.o,t.o),null!=t.si||null!=t.sd){for(var l=t.p,o=0;r.o.length-1>o;o++)t.o=[r.o.pop()],t.p=l.slice(),n(t),i.push(t);n(r)}}else null!=r.na&&null!=t.na?i[i.length-1]={p:r.p,na:r.na+t.na}:void 0!==r.li&&void 0===t.li&&t.ld===r.li?void 0!==r.ld?delete r.li:i.pop():void 0!==r.od&&void 0===r.oi&&void 0!==t.oi&&void 0===t.od?r.oi=t.oi:void 0!==r.oi&&void 0!==t.od?void 0!==t.oi?r.oi=t.oi:void 0!==r.od?delete r.oi:i.pop():void 0!==t.lm&&t.p[t.p.length-1]===t.lm||i.push(t);else null==t.si&&null==t.sd||null==r.si&&null==r.sd||(n(t),n(r)),i.push(t)},h.compose=function(e,n){h.checkValidOp(e),h.checkValidOp(n);for(var i=v(e),t=0;n.length>t;t++)h.append(i,n[t]);return i},h.normalize=function(e){var n=[];e=u(e)?e:[e];for(var i=0;e.length>i;i++){var t=e[i];null==t.p&&(t.p=[]),h.append(n,t)}return n},h.commonLengthForOps=function(e,n){var i=e.p.length,t=n.p.length;if((null!=e.na||e.t)&&i++,(null!=n.na||n.t)&&t++,0===i)return-1;if(0===t)return null;i--,t--;for(var r=0;i>r;r++){var l=e.p[r];if(r>=t||l!==n.p[r])return null}return i},h.canOpAffectPath=function(e,n){return null!=h.commonLengthForOps({p:n},e)},h.transformComponent=function(i,t,r,l){t=v(t);var o=h.commonLengthForOps(r,t),p=h.commonLengthForOps(t,r),d=t.p.length,f=r.p.length;if((null!=t.na||t.t)&&d++,(null!=r.na||r.t)&&f++,null!=p&&f>d&&t.p[p]==r.p[p])if(void 0!==t.ld){var s=v(r);s.p=s.p.slice(d),t.ld=h.apply(v(t.ld),[s])}else if(void 0!==t.od){var s=v(r);s.p=s.p.slice(d),t.od=h.apply(v(t.od),[s])}if(null!=o){var a=d==f,s=r;if(null==t.si&&null==t.sd||null==r.si&&null==r.sd||(e(t),s=v(r),e(s)),s.t&&c[s.t]){if(t.t&&t.t===s.t){var u=c[t.t].transform(t.o,s.o,l);if(u.length>0)if(null!=t.si||null!=t.sd)for(var g=t.p,m=0;u.length>m;m++)t.o=[u[m]],t.p=g.slice(),n(t),h.append(i,t);else t.o=u,h.append(i,t);return i}}else if(void 0!==r.na);else if(void 0!==r.li&&void 0!==r.ld){if(r.p[o]===t.p[o]){if(!a)return i;if(void 0!==t.ld){if(void 0===t.li||"left"!==l)return i;t.ld=v(r.li)}}}else if(void 0!==r.li)void 0!==t.li&&void 0===t.ld&&a&&t.p[o]===r.p[o]?"right"===l&&t.p[o]++:r.p[o]<=t.p[o]&&t.p[o]++,void 0!==t.lm&&a&&r.p[o]<=t.lm&&t.lm++;else if(void 0!==r.ld){if(void 0!==t.lm&&a){if(r.p[o]===t.p[o])return i;var g=r.p[o],y=t.p[o],b=t.lm;(b>g||g===b&&b>y)&&t.lm--}if(r.p[o]<t.p[o])t.p[o]--;else if(r.p[o]===t.p[o]){if(d>f)return i;if(void 0!==t.ld){if(void 0===t.li)return i;delete t.ld}}}else if(void 0!==r.lm)if(void 0!==t.lm&&d===f){var y=t.p[o],b=t.lm,w=r.p[o],O=r.lm;if(w!==O)if(y===w){if("left"!==l)return i;t.p[o]=O,y===b&&(t.lm=O)}else y>w&&t.p[o]--,y>O?t.p[o]++:y===O&&w>O&&(t.p[o]++,y===b&&t.lm++),b>w?t.lm--:b===w&&b>y&&t.lm--,b>O?t.lm++:b===O&&(O>w&&b>y||w>O&&y>b?"right"===l&&t.lm++:b>y?t.lm++:b===w&&t.lm--)}else if(void 0!==t.li&&void 0===t.ld&&a){var y=r.p[o],b=r.lm;g=t.p[o],g>y&&t.p[o]--,g>b&&t.p[o]++}else{var y=r.p[o],b=r.lm;g=t.p[o],g===y?t.p[o]=b:(g>y&&t.p[o]--,g>b?t.p[o]++:g===b&&y>b&&t.p[o]++)}else if(void 0!==r.oi&&void 0!==r.od){if(t.p[o]===r.p[o]){if(void 0===t.oi||!a)return i;if("right"===l)return i;t.od=r.oi}}else if(void 0!==r.oi){if(void 0!==t.oi&&t.p[o]===r.p[o]){if("left"!==l)return i;h.append(i,{p:t.p,od:r.oi})}}else if(void 0!==r.od&&t.p[o]==r.p[o]){if(!a)return i;if(void 0===t.oi)return i;delete t.od}}return h.append(i,t),i},t._bootstrapTransform?t._bootstrapTransform(h,h.transformComponent,h.checkValidOp,h.append):require("./helpers")._bootstrapTransform(h,h.transformComponent,h.checkValidOp,h.append),r===void 0)var r="undefined"!=typeof require?require("./text0"):window.ottypes.text;h.registerSubtype(r),i.exports=h;var m=window.ottypes=window.ottypes||{},y=i.exports;m[y.name]=y,y.uri&&(m[y.uri]=y)})();
(function(){
(function(){var r={exports:{}},e=r.exports;e.name="text",e.uri="http://sharejs.org/types/textv1",e.create=function(r){if(null!=r&&"string"!=typeof r)throw Error("Initial data must be a string");return r||""};var t=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)},n=function(r){if(!t(r))throw Error("Op must be an array of components");for(var e=null,n=0;r.length>n;n++){var o=r[n];switch(typeof o){case"object":if(!("number"==typeof o.d&&o.d>0))throw Error("Object components must be deletes of size > 0");break;case"string":if(!(o.length>0))throw Error("Inserts cannot be empty");break;case"number":if(!(o>0))throw Error("Skip components must be >0");if("number"==typeof e)throw Error("Adjacent skip components should be combined")}e=o}if("number"==typeof e)throw Error("Op has a trailing skip")},o=function(r){return function(e){return e&&0!==e.d?0===r.length?r.push(e):typeof e==typeof r[r.length-1]?"object"==typeof e?r[r.length-1].d+=e.d:r[r.length-1]+=e:r.push(e):void 0}},s=function(r){var e=0,t=0,n=function(n,o){if(e===r.length)return-1===n?null:n;var s,i=r[e];return"number"==typeof i?-1===n||n>=i-t?(s=i-t,++e,t=0,s):(t+=n,n):"string"==typeof i?-1===n||"i"===o||n>=i.length-t?(s=i.slice(t),++e,t=0,s):(s=i.slice(t,t+n),t+=n,s):-1===n||"d"===o||n>=i.d-t?(s={d:i.d-t},++e,t=0,s):(t+=n,{d:n})},o=function(){return r[e]};return[n,o]},i=function(r){return"number"==typeof r?r:r.length||r.d},a=function(r){return r.length>0&&"number"==typeof r[r.length-1]&&r.pop(),r};e.normalize=function(r){for(var e=[],t=o(e),n=0;r.length>n;n++)t(r[n]);return a(e)},e.apply=function(r,e){if("string"!=typeof r)throw Error("Snapshot should be a string");n(e);for(var t=[],o=0;e.length>o;o++){var s=e[o];switch(typeof s){case"number":if(s>r.length)throw Error("The op is too long for this document");t.push(r.slice(0,s)),r=r.slice(s);break;case"string":t.push(s);break;case"object":r=r.slice(s.d)}}return t.join("")+r},e.transform=function(r,e,t){if("left"!=t&&"right"!=t)throw Error("side ("+t+") must be 'left' or 'right'");n(r),n(e);for(var c=[],f=o(c),u=s(r),l=u[0],h=u[1],p=0;e.length>p;p++){var b,g,m=e[p];switch(typeof m){case"number":for(b=m;b>0;)g=l(b,"i"),f(g),"string"!=typeof g&&(b-=i(g));break;case"string":"left"===t&&"string"==typeof h()&&f(l(-1)),f(m.length);break;case"object":for(b=m.d;b>0;)switch(g=l(b,"i"),typeof g){case"number":b-=g;break;case"string":f(g);break;case"object":b-=g.d}}}for(;m=l(-1);)f(m);return a(c)},e.compose=function(r,e){n(r),n(e);for(var t=[],c=o(t),f=s(r)[0],u=0;e.length>u;u++){var l,h,p=e[u];switch(typeof p){case"number":for(l=p;l>0;)h=f(l,"d"),c(h),"object"!=typeof h&&(l-=i(h));break;case"string":c(p);break;case"object":for(l=p.d;l>0;)switch(h=f(l,"d"),typeof h){case"number":c({d:h}),l-=h;break;case"string":l-=h.length;break;case"object":c(h)}}}for(;p=f(-1);)c(p);return a(t)};var c=function(r,e){for(var t=0,n=0;e.length>n;n++){var o=e[n];if(t>=r)break;switch(typeof o){case"number":if(t+o>=r)return r;t+=o;break;case"string":t+=o.length,r+=o.length;break;case"object":r-=Math.min(o.d,r-t)}}return r};e.transformSelection=function(r,e,t){var n=0;if(t){for(var o=0;e.length>o;o++){var s=e[o];switch(typeof s){case"number":n+=s;break;case"string":n+=s.length}}return n}return"number"==typeof r?c(r,e):[c(r[0],e),c(r[1],e)]},e.transformCursor=e.transformSelection,e.selectionEq=function(r,e){return null!=r[0]&&r[0]===r[1]&&(r=r[0]),null!=e[0]&&e[0]===e[1]&&(e=e[0]),r===e||null!=r[0]&&null!=e[0]&&r[0]===e[0]&&r[1]==e[1]};var f=window.ottypes=window.ottypes||{},u=r.exports;f[u.name]=u,u.uri&&(f[u.uri]=u)})();// Text document API for the 'text' type.

// The API implements the standard text API methods. In particular:
//
// - getLength() returns the length of the document in characters
// - getText() returns a string of the document
// - insert(pos, text, [callback]) inserts text at position pos in the document
// - remove(pos, length, [callback]) removes length characters at position pos
//
// Events are implemented by just adding the appropriate methods to your
// context object.
// onInsert(pos, text): Called when text is inserted.
// onRemove(pos, length): Called when text is removed.

var _types = (typeof require !== 'undefined') ?
  require('ottypes') : window.ottypes;

_types['http://sharejs.org/types/textv1'].api = {
  provides: {text: true},

  // Returns the number of characters in the string
  getLength: function() { return this.getSnapshot().length; },


  // Returns the text content of the document
  get: function() { return this.getSnapshot(); },

  getText: function() {
    console.warn("`getText()` is deprecated; use `get()` instead.");
    return this.get();
  },

  // Insert the specified text at the given position in the document
  insert: function(pos, text, callback) {
    return this.submitOp([pos, text], callback);
  },

  remove: function(pos, length, callback) {
    return this.submitOp([pos, {d:length}], callback);
  },

  // When you use this API, you should implement these two methods
  // in your editing context.
  //onInsert: function(pos, text) {},
  //onRemove: function(pos, removedLength) {},

  _onOp: function(op) {
    var pos = 0;
    var spos = 0;
    for (var i = 0; i < op.length; i++) {
      var component = op[i];
      switch (typeof component) {
        case 'number':
          pos += component;
          spos += component;
          break;
        case 'string':
          if (this.onInsert) this.onInsert(pos, component);
          pos += component.length;
          break;
        case 'object':
          if (this.onRemove) this.onRemove(pos, component.d);
          spos += component.d;
      }
    }
  }
};
(function(){function e(e){e.t="text0";var n={p:e.p.pop()};null!=e.si&&(n.i=e.si),null!=e.sd&&(n.d=e.sd),e.o=[n]}function n(e){e.p.push(e.o[0].p),null!=e.o[0].i&&(e.si=e.o[0].i),null!=e.o[0].d&&(e.sd=e.o[0].d),delete e.t,delete e.o}var i={exports:{}},t=i.exports;t._bootstrapTransform=function(e,n,i,t){var r=function(e,i,t,r){n(t,e,i,"left"),n(r,i,e,"right")},l=e.transformX=function(e,n){i(e),i(n);for(var o=[],p=0;n.length>p;p++){for(var d=n[p],f=[],s=0;e.length>s;){var a=[];if(r(e[s],d,f,a),s++,1!==a.length){if(0===a.length){for(var u=s;e.length>u;u++)t(f,e[u]);d=null;break}for(var v=l(e.slice(s),a),h=0;v[0].length>h;h++)t(f,v[0][h]);for(var c=0;v[1].length>c;c++)t(o,v[1][c]);d=null;break}d=a[0]}null!=d&&t(o,d),e=f}return[e,o]};e.transform=e.transform=function(e,i,t){if("left"!==t&&"right"!==t)throw Error("type must be 'left' or 'right'");return 0===i.length?e:1===e.length&&1===i.length?n([],e[0],i[0],t):"left"===t?l(e,i)[0]:l(i,e)[1]}};var r=i.exports={name:"text0",uri:"http://sharejs.org/types/textv0",create:function(e){if(null!=e&&"string"!=typeof e)throw Error("Initial data must be a string");return e||""}},l=function(e,n,i){return e.slice(0,n)+i+e.slice(n)},o=function(e){if("number"!=typeof e.p)throw Error("component missing position field");if("string"==typeof e.i==("string"==typeof e.d))throw Error("component needs an i or d field");if(0>e.p)throw Error("position cannot be negative")},p=function(e){for(var n=0;e.length>n;n++)o(e[n])};r.apply=function(e,n){var i;p(n);for(var t=0;n.length>t;t++){var r=n[t];if(null!=r.i)e=l(e,r.p,r.i);else{if(i=e.slice(r.p,r.p+r.d.length),r.d!==i)throw Error("Delete component '"+r.d+"' does not match deleted text '"+i+"'");e=e.slice(0,r.p)+e.slice(r.p+r.d.length)}}return e};var d=r._append=function(e,n){if(""!==n.i&&""!==n.d)if(0===e.length)e.push(n);else{var i=e[e.length-1];null!=i.i&&null!=n.i&&i.p<=n.p&&n.p<=i.p+i.i.length?e[e.length-1]={i:l(i.i,n.p-i.p,n.i),p:i.p}:null!=i.d&&null!=n.d&&n.p<=i.p&&i.p<=n.p+n.d.length?e[e.length-1]={d:l(n.d,i.p-n.p,i.d),p:n.p}:e.push(n)}};r.compose=function(e,n){p(e),p(n);for(var i=e.slice(),t=0;n.length>t;t++)d(i,n[t]);return i},r.normalize=function(e){var n=[];(null!=e.i||null!=e.p)&&(e=[e]);for(var i=0;e.length>i;i++){var t=e[i];null==t.p&&(t.p=0),d(n,t)}return n};var f=function(e,n,i){return null!=n.i?e>n.p||n.p===e&&i?e+n.i.length:e:n.p>=e?e:n.p+n.d.length>=e?n.p:e-n.d.length};r.transformCursor=function(e,n,i){for(var t="right"===i,r=0;n.length>r;r++)e=f(e,n[r],t);return e};var s=r._tc=function(e,n,i,t){if(o(n),o(i),null!=n.i)d(e,{i:n.i,p:f(n.p,i,"right"===t)});else if(null!=i.i){var r=n.d;n.p<i.p&&(d(e,{d:r.slice(0,i.p-n.p),p:n.p}),r=r.slice(i.p-n.p)),""!==r&&d(e,{d:r,p:n.p+i.i.length})}else if(n.p>=i.p+i.d.length)d(e,{d:n.d,p:n.p-i.d.length});else if(n.p+n.d.length<=i.p)d(e,n);else{var l={d:"",p:n.p};n.p<i.p&&(l.d=n.d.slice(0,i.p-n.p)),n.p+n.d.length>i.p+i.d.length&&(l.d+=n.d.slice(i.p+i.d.length-n.p));var p=Math.max(n.p,i.p),s=Math.min(n.p+n.d.length,i.p+i.d.length),a=n.d.slice(p-n.p,s-n.p),u=i.d.slice(p-i.p,s-i.p);if(a!==u)throw Error("Delete ops delete different text in the same region of the document");""!==l.d&&(l.p=f(l.p,i),d(e,l))}return e},a=function(e){return null!=e.i?{d:e.i,p:e.p}:{i:e.d,p:e.p}};r.invert=function(e){e=e.slice().reverse();for(var n=0;e.length>n;n++)e[n]=a(e[n]);return e},t._bootstrapTransform?t._bootstrapTransform(r,s,p,d):require("./helpers")._bootstrapTransform(r,s,p,d);var u=function(e){return"[object Array]"==Object.prototype.toString.call(e)},v=function(e){return JSON.parse(JSON.stringify(e))},h={name:"json0",uri:"http://sharejs.org/types/JSONv0"},c={};h.registerSubtype=function(e){c[e.name]=e},h.create=function(e){return void 0===e?null:v(e)},h.invertComponent=function(e){var n={p:e.p};return e.t&&c[e.t]&&(n.t=e.t,n.o=c[e.t].invert(e.o)),void 0!==e.si&&(n.sd=e.si),void 0!==e.sd&&(n.si=e.sd),void 0!==e.oi&&(n.od=e.oi),void 0!==e.od&&(n.oi=e.od),void 0!==e.li&&(n.ld=e.li),void 0!==e.ld&&(n.li=e.ld),void 0!==e.na&&(n.na=-e.na),void 0!==e.lm&&(n.lm=e.p[e.p.length-1],n.p=e.p.slice(0,e.p.length-1).concat([e.lm])),n},h.invert=function(e){for(var n=e.slice().reverse(),i=[],t=0;n.length>t;t++)i.push(h.invertComponent(n[t]));return i},h.checkValidOp=function(e){for(var n=0;e.length>n;n++)if(!u(e[n].p))throw Error("Missing path")},h.checkList=function(e){if(!u(e))throw Error("Referenced element not a list")},h.checkObj=function(e){if(e.constructor!==Object)throw Error("Referenced element not an object (it was "+JSON.stringify(e)+")")},h.apply=function(n,i){h.checkValidOp(i),i=v(i);for(var t={data:n},r=0;i.length>r;r++){var l=i[r];(null!=l.si||null!=l.sd)&&e(l);for(var o=null,p=null,d=t,f="data",s=0;l.p.length>s;s++){var a=l.p[s];if(o=d,p=f,d=d[f],f=a,null==o)throw Error("Path invalid")}if(l.t&&void 0!==l.o&&c[l.t])d[f]=c[l.t].apply(d[f],l.o);else if(void 0!==l.na){if("number"!=typeof d[f])throw Error("Referenced element not a number");d[f]+=l.na}else if(void 0!==l.li&&void 0!==l.ld)h.checkList(d),d[f]=l.li;else if(void 0!==l.li)h.checkList(d),d.splice(f,0,l.li);else if(void 0!==l.ld)h.checkList(d),d.splice(f,1);else if(void 0!==l.lm){if(h.checkList(d),l.lm!=f){var u=d[f];d.splice(f,1),d.splice(l.lm,0,u)}}else if(void 0!==l.oi)h.checkObj(d),d[f]=l.oi;else{if(void 0===l.od)throw Error("invalid / missing instruction in op");h.checkObj(d),delete d[f]}}return t.data},h.shatter=function(e){for(var n=[],i=0;e.length>i;i++)n.push([e[i]]);return n},h.incrementalApply=function(e,n,i){for(var t=0;n.length>t;t++){var r=[n[t]];e=h.apply(e,r),i(r,e)}return e};var g=h.pathMatches=function(e,n,i){if(e.length!=n.length)return!1;for(var t=0;e.length>t;t++)if(e[t]!==n[t]&&(!i||t!==e.length-1))return!1;return!0};if(h.append=function(i,t){if(t=v(t),0===i.length)return i.push(t),void 0;var r=i[i.length-1];if(null==t.si&&null==t.sd||null==r.si&&null==r.sd||(e(t),e(r)),g(t.p,r.p))if(t.t&&r.t&&t.t===r.t&&c[t.t]){if(r.o=c[t.t].compose(r.o,t.o),null!=t.si||null!=t.sd){for(var l=t.p,o=0;r.o.length-1>o;o++)t.o=[r.o.pop()],t.p=l.slice(),n(t),i.push(t);n(r)}}else null!=r.na&&null!=t.na?i[i.length-1]={p:r.p,na:r.na+t.na}:void 0!==r.li&&void 0===t.li&&t.ld===r.li?void 0!==r.ld?delete r.li:i.pop():void 0!==r.od&&void 0===r.oi&&void 0!==t.oi&&void 0===t.od?r.oi=t.oi:void 0!==r.oi&&void 0!==t.od?void 0!==t.oi?r.oi=t.oi:void 0!==r.od?delete r.oi:i.pop():void 0!==t.lm&&t.p[t.p.length-1]===t.lm||i.push(t);else null==t.si&&null==t.sd||null==r.si&&null==r.sd||(n(t),n(r)),i.push(t)},h.compose=function(e,n){h.checkValidOp(e),h.checkValidOp(n);for(var i=v(e),t=0;n.length>t;t++)h.append(i,n[t]);return i},h.normalize=function(e){var n=[];e=u(e)?e:[e];for(var i=0;e.length>i;i++){var t=e[i];null==t.p&&(t.p=[]),h.append(n,t)}return n},h.commonLengthForOps=function(e,n){var i=e.p.length,t=n.p.length;if((null!=e.na||e.t)&&i++,(null!=n.na||n.t)&&t++,0===i)return-1;if(0===t)return null;i--,t--;for(var r=0;i>r;r++){var l=e.p[r];if(r>=t||l!==n.p[r])return null}return i},h.canOpAffectPath=function(e,n){return null!=h.commonLengthForOps({p:n},e)},h.transformComponent=function(i,t,r,l){t=v(t);var o=h.commonLengthForOps(r,t),p=h.commonLengthForOps(t,r),d=t.p.length,f=r.p.length;if((null!=t.na||t.t)&&d++,(null!=r.na||r.t)&&f++,null!=p&&f>d&&t.p[p]==r.p[p])if(void 0!==t.ld){var s=v(r);s.p=s.p.slice(d),t.ld=h.apply(v(t.ld),[s])}else if(void 0!==t.od){var s=v(r);s.p=s.p.slice(d),t.od=h.apply(v(t.od),[s])}if(null!=o){var a=d==f,s=r;if(null==t.si&&null==t.sd||null==r.si&&null==r.sd||(e(t),s=v(r),e(s)),s.t&&c[s.t]){if(t.t&&t.t===s.t){var u=c[t.t].transform(t.o,s.o,l);if(u.length>0)if(null!=t.si||null!=t.sd)for(var g=t.p,m=0;u.length>m;m++)t.o=[u[m]],t.p=g.slice(),n(t),h.append(i,t);else t.o=u,h.append(i,t);return i}}else if(void 0!==r.na);else if(void 0!==r.li&&void 0!==r.ld){if(r.p[o]===t.p[o]){if(!a)return i;if(void 0!==t.ld){if(void 0===t.li||"left"!==l)return i;t.ld=v(r.li)}}}else if(void 0!==r.li)void 0!==t.li&&void 0===t.ld&&a&&t.p[o]===r.p[o]?"right"===l&&t.p[o]++:r.p[o]<=t.p[o]&&t.p[o]++,void 0!==t.lm&&a&&r.p[o]<=t.lm&&t.lm++;else if(void 0!==r.ld){if(void 0!==t.lm&&a){if(r.p[o]===t.p[o])return i;var g=r.p[o],y=t.p[o],b=t.lm;(b>g||g===b&&b>y)&&t.lm--}if(r.p[o]<t.p[o])t.p[o]--;else if(r.p[o]===t.p[o]){if(d>f)return i;if(void 0!==t.ld){if(void 0===t.li)return i;delete t.ld}}}else if(void 0!==r.lm)if(void 0!==t.lm&&d===f){var y=t.p[o],b=t.lm,w=r.p[o],O=r.lm;if(w!==O)if(y===w){if("left"!==l)return i;t.p[o]=O,y===b&&(t.lm=O)}else y>w&&t.p[o]--,y>O?t.p[o]++:y===O&&w>O&&(t.p[o]++,y===b&&t.lm++),b>w?t.lm--:b===w&&b>y&&t.lm--,b>O?t.lm++:b===O&&(O>w&&b>y||w>O&&y>b?"right"===l&&t.lm++:b>y?t.lm++:b===w&&t.lm--)}else if(void 0!==t.li&&void 0===t.ld&&a){var y=r.p[o],b=r.lm;g=t.p[o],g>y&&t.p[o]--,g>b&&t.p[o]++}else{var y=r.p[o],b=r.lm;g=t.p[o],g===y?t.p[o]=b:(g>y&&t.p[o]--,g>b?t.p[o]++:g===b&&y>b&&t.p[o]++)}else if(void 0!==r.oi&&void 0!==r.od){if(t.p[o]===r.p[o]){if(void 0===t.oi||!a)return i;if("right"===l)return i;t.od=r.oi}}else if(void 0!==r.oi){if(void 0!==t.oi&&t.p[o]===r.p[o]){if("left"!==l)return i;h.append(i,{p:t.p,od:r.oi})}}else if(void 0!==r.od&&t.p[o]==r.p[o]){if(!a)return i;if(void 0===t.oi)return i;delete t.od}}return h.append(i,t),i},t._bootstrapTransform?t._bootstrapTransform(h,h.transformComponent,h.checkValidOp,h.append):require("./helpers")._bootstrapTransform(h,h.transformComponent,h.checkValidOp,h.append),r===void 0)var r="undefined"!=typeof require?require("./text0"):window.ottypes.text;h.registerSubtype(r),i.exports=h;var m=window.ottypes=window.ottypes||{},y=i.exports;m[y.name]=y,y.uri&&(m[y.uri]=y)})();// JSON document API for the 'json0' type.

(function() {
  var __slice = [].slice;
  var _types = typeof require !== 'undefined' ? require('ottypes') : window.ottypes;
  var _type = _types['http://sharejs.org/types/JSONv0'];

  // Helpers

  function depath(path) {
    if (path.length === 1 && path[0].constructor === Array) {
      return path[0];
    } else {
      return path;
    }
  }

  function traverse(snapshot, path) {
    var key = 'data';
    var elem = { data: snapshot };

    for (var i = 0; i < path.length; i++) {
      elem = elem[key];
      key = path[i];
      if (typeof elem === 'undefined') {
        throw new Error('bad path');
      }
    }

    return {
      elem: elem,
      key: key
    };
  }

  function pathEquals(p1, p2) {
    if (p1.length !== p2.length) {
      return false;
    }
    for (var i = 0; i < p1.length; ++i) {
      if (p1[i] !== p2[i]) {
        return false;
      }
    }
    return true;
  }

  function containsPath(p1, p2) {
    if (p1.length < p2.length) return false;
    return pathEquals( p1.slice(0,p2.length), p2);
  }

  // does nothing, used as a default callback
  function nullFunction() {}

  // given a path represented as an array or a number, normalize to an array
  // whole numbers are converted to integers.
  function normalizePath(path) {
    if (path instanceof Array) {
      return path;
    }
    if (typeof(path) == "number") {
      return [path];
    }
    // if (typeof(path) == "string") {
    //   path = path.split(".");
    //   var out = [];
    //   for (var i=0; i<path.length; i++) {
    //     var part = path[i];
    //     if (String(parseInt(part, 10)) == part) {
    //       out.push(parseInt(part, 10));
    //     } else {
    //       out.push(part);
    //     }
    //   }
    //   return out;
    // }
  }

  // helper for creating functions with the method signature func([path],arg1,arg2,...,[cb])
  // populates an array of arguments with a default path and callback
  function normalizeArgs(obj, args, func, requiredArgsCount){
    args = Array.prototype.slice.call(args);
    var path_prefix = obj.path || [];

    if (func.length > 1 && typeof args[args.length-1] !== 'function') {
      args.push(nullFunction);
    }

    if (args.length < (requiredArgsCount || func.length)) {
      args.unshift(path_prefix);
    } else {
      args[0] = path_prefix.concat(normalizePath(args[0]));
    }

    return func.apply(obj,args);
  }


  // SubDoc
  // this object is returned from context.createContextAt()

  var SubDoc = function(context, path) {
    this.context = context;
    this.path = path || [];
  };

  SubDoc.prototype._updatePath = function(op){
    console.log("UPDATEPATH", op);
    for (var i = 0; i < op.length; i++) {
      var c = op[i];
      if(c.lm !== undefined && containsPath(this.path,c.p)){
        var new_path_prefix = c.p.slice(0,c.p.length-1);
        new_path_prefix.push(c.lm);
        this.path = new_path_prefix.concat(this.path.slice(new_path_prefix.length));
      }
    }
  };

  SubDoc.prototype.createContextAt = function() {
    var path = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return this.context.createContextAt(this.path.concat(depath(path)));
  };

  SubDoc.prototype.get = function(path) {
    return normalizeArgs(this, arguments, function(path){
      return this.context.get(path);
    });
  };

  SubDoc.prototype.set = function(path, value, cb) {
    return normalizeArgs(this, arguments, function(path, value, cb){
      return this.context.set(path, value, cb);
    });
  };

  SubDoc.prototype.insert = function(path, value, cb) {
    return normalizeArgs(this, arguments, function(path, value, cb){
      return this.context.insert(path, value, cb);
    });
  };

  SubDoc.prototype.remove = function(path, len, cb) {
    return normalizeArgs(this, arguments, function(path, len, cb) {
      return this.context.remove(path, len, cb);
    }, 2);
  };

  SubDoc.prototype.push = function(path, value, cb) {
    return normalizeArgs(this, arguments, function(path, value, cb) {
        var _ref = traverse(this.context.getSnapshot(), path);
        var len = _ref.elem[_ref.key].length;
        path.push(len);
      return this.context.insert(path, value, cb);
    });
  };

  SubDoc.prototype.move = function(path, from, to, cb) {
    return normalizeArgs(this, arguments, function(path, from, to, cb) {
      console.log("sd MOVE");
      return this.context.move(path, from, to, cb);
    });
  };

  SubDoc.prototype.add = function(path, amount, cb) {
    return normalizeArgs(this, arguments, function(path, amount, cb) {
      return this.context.add(path, amount, cb);
    });
  };

  SubDoc.prototype.on = function(event, cb) {
    return this.context.addListener(this.path, event, cb);
  };

  SubDoc.prototype.removeListener = function(l) {
    return this.context.removeListener(l);
  };

  SubDoc.prototype.getLength = function(path) {
    return normalizeArgs(this, arguments, function(path) {
      return this.context.getLength(path);
    });
  };

  // DEPRECATED
  SubDoc.prototype.getText = function(path) {
    return normalizeArgs(this, arguments, function(path) {
      return this.context.getText(path);
    });
  };

  // DEPRECATED
  SubDoc.prototype.deleteText = function(path, pos, length, cb) {
    return normalizeArgs(this, arguments, function(path, pos, length, cb) {
      return this.context.deleteText(path, length, pos, cb);
    });
  };

  SubDoc.prototype.destroy = function() {
    this.context._removeSubDoc(this);
  };


  // JSON API methods
  // these methods are mixed in to the context return from doc.createContext()

  _type.api = {

    provides: {
      json: true
    },

    _fixComponentPaths: function(c) {
      if (!this._listeners) {
        return;
      }
      if (c.na !== undefined || c.si !== undefined || c.sd !== undefined) {
        return;
      }

      var to_remove = [];
      var _ref = this._listeners;

      for (var i = 0; i < _ref.length; i++) {
        var l = _ref[i];
        var dummy = {
          p: l.path,
          na: 0
        };
        var xformed = _type.transformComponent([], dummy, c, 'left');
        if (xformed.length === 0) {
          to_remove.push(i);
        } else if (xformed.length === 1) {
          l.path = xformed[0].p;
        } else {
          throw new Error("Bad assumption in json-api: xforming an 'na' op will always result in 0 or 1 components.");
        }
      }

      to_remove.sort(function(a, b) {
        return b - a;
      });

      var _results = [];
      for (var j = 0; j < to_remove.length; j++) {
        i = to_remove[j];
        _results.push(this._listeners.splice(i, 1));
      }

      return _results;
    },

    _fixPaths: function(op) {
      var _results = [];
      for (var i = 0; i < op.length; i++) {
        var c = op[i];
        _results.push(this._fixComponentPaths(c));
      }
      return _results;
    },

    _submit: function(op, callback) {
      this._fixPaths(op);
      return this.submitOp(op, callback);
    },

    _addSubDoc: function(subdoc){
      this._subdocs || (this._subdocs = []);
      this._subdocs.push(subdoc);
    },

    _removeSubDoc: function(subdoc){
      this._subdocs || (this._subdocs = []);
      for(var i = 0; i < this._subdocs.length; i++){
        if(this._subdocs[i] === subdoc) this._subdocs.splice(i,1);
        return;
      }
    },

    _updateSubdocPaths: function(op){
      this._subdocs || (this._subdocs = []);
      for(var i = 0; i < this._subdocs.length; i++){
        this._subdocs[i]._updatePath(op);
      }
    },

    createContextAt: function() {
      var path = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      var subdoc =  new SubDoc(this, depath(path));
      this._addSubDoc(subdoc);
      return subdoc;
    },

    get: function(path) {
      if (!path) return this.getSnapshot();
      return normalizeArgs(this,arguments,function(path){
        var _ref = traverse(this.getSnapshot(), path);
        return _ref.elem[_ref.key];
      });
    },

    set: function(path, value, cb) {
      return normalizeArgs(this, arguments, function(path, value, cb) {
        var _ref = traverse(this.getSnapshot(), path);
        var elem = _ref.elem;
        var key = _ref.key;
        var op = {
          p: path
        };

        if (elem.constructor === Array) {
          op.li = value;
          if (typeof elem[key] !== 'undefined') {
            op.ld = elem[key];
          }
        } else if (typeof elem === 'object') {
          op.oi = value;
          if (typeof elem[key] !== 'undefined') {
            op.od = elem[key];
          }
        } else {
          throw new Error('bad path');
        }

        return this._submit([op], cb);
      });
    },

    remove: function(path, len, cb) {
      return normalizeArgs(this, arguments, function(path, len, cb) {
        if (!cb && len instanceof Function) {
          cb = len;
          len = null;
        }
        // if there is no len argument, then we are removing a single item from either a list or a hash
        var _ref, elem, op, key;
        if (len === null || len === undefined) {
          _ref = traverse(this.getSnapshot(), path);
          elem = _ref.elem;
          key = _ref.key;
          op = {
            p: path
          };

          if (typeof elem[key] === 'undefined') {
            throw new Error('no element at that path');
          }

          if (elem.constructor === Array) {
            op.ld = elem[key];
          } else if (typeof elem === 'object') {
            op.od = elem[key];
          } else {
            throw new Error('bad path');
          }
          return this._submit([op], cb);
        } else {
          var pos;
          pos = path.pop();
          _ref = traverse(this.getSnapshot(), path);
          elem = _ref.elem;
          key = _ref.key;
          if (typeof elem[key] === 'string') {
            op = {
              p: path.concat(pos),
              sd: _ref.elem[_ref.key].slice(pos, pos + len)
            };
            return this._submit([op], cb);
          } else if (elem[key].constructor === Array) {
            var ops = [];
            for (var i=pos; i<pos+len; i++) {
              ops.push({
                p: path.concat(pos),
                ld: elem[key][i]
              });
            }
            return this._submit(ops, cb);
          } else {
            throw new Error('element at path does not support range');
          }
        }
      }, 2);
    },

    insert: function(path, value, cb) {
      return normalizeArgs(this, arguments, function(path, value, cb) {
        var pos = path.pop();
        var _ref = traverse(this.getSnapshot(), path);
        var elem = _ref.elem;
        var key = _ref.key;
        var op = {
          p: path.concat(pos)
        };

        if (elem[key].constructor === Array) {
          op.li = value;
        } else if (typeof elem[key] === 'string') {
          op.si = value;
        }
        return this._submit([op], cb);
      });
    },

    move: function(path, from, to, cb) {
      return normalizeArgs(this, arguments, function(path, from, to, cb) {
        var self = this;
        var op = [
          {
            p: path.concat(from),
            lm: to
          }
        ];

        return this._submit(op, function(){
          self._updateSubdocPaths(op);
          if(cb) cb.apply(cb, arguments);
        });
      });
    },

    push: function(path, value, cb) {
      return normalizeArgs(this, arguments, function(path, value, cb) {
        var _ref = traverse(this.getSnapshot(), path);
        var len = _ref.elem[_ref.key].length;
        path.push(len);
        return this.insert(path, value, cb);
      });
    },

    add: function(path, amount, cb) {
      return normalizeArgs(this, arguments, function(path, value, cb) {
        var op = [
          {
            p: path,
            na: amount
          }
        ];
        return this._submit(op, cb);
      });
    },

    getLength: function(path) {
        return normalizeArgs(this, arguments, function(path) {
          return this.get(path).length;
        });
    },

    getText: function(path) {
      return normalizeArgs(this, arguments, function(path) {
        console.warn("Deprecated. Use `get()` instead");
        return this.get(path);
      });
    },

    deleteText: function(path, length, pos, cb) {
      return normalizeArgs(this, arguments, function(path, length, pos, cb) {
        console.warn("Deprecated. Use `remove(path, length, cb)` instead");
        var _ref = traverse(this.getSnapshot(), path);
        var op = [
          {
            p: path.concat(pos),
            sd: _ref.elem[_ref.key].slice(pos, pos + length)
          }
        ];

        return this._submit(op, cb);
      });
    },

    addListener: function(path, event, cb) {
      return normalizeArgs(this, arguments, function(path, value, cb) {
        var listener = {
          path: path,
          event: event,
          cb: cb
        };
        this._listeners || (this._listeners = []);
        this._listeners.push(listener);
        return listener;
      });
    },

    removeListener: function(listener) {
      if (!this._listeners) {
        return;
      }
      var i = this._listeners.indexOf(listener);
      if (i < 0) {
        return false;
      }
      this._listeners.splice(i, 1);
      return true;
    },

    _onOp: function(op) {
      for (var i = 0; i < op.length; i++) {
        var c = op[i];
        this._fixComponentPaths(c);

        if(c.lm !== undefined) {
          this._updateSubdocPaths([c]);
        }

        var match_path = c.na === undefined ? c.p.slice(0, c.p.length - 1) : c.p;

        for (var l = 0; l < this._listeners.length; l++) {
          var listener = this._listeners[l];
          var cb = listener.cb;

          if (pathEquals(listener.path, match_path)) {
            switch (listener.event) {
              case 'insert':
                if (c.li !== undefined && c.ld === undefined) {
                  cb(c.p[c.p.length - 1], c.li);
                } else if (c.oi !== undefined && c.od === undefined) {
                  cb(c.p[c.p.length - 1], c.oi);
                } else if (c.si !== undefined) {
                  cb(c.p[c.p.length - 1], c.si);
                }
                break;
              case 'delete':
                if (c.li === undefined && c.ld !== undefined) {
                  cb(c.p[c.p.length - 1], c.ld);
                } else if (c.oi === undefined && c.od !== undefined) {
                  cb(c.p[c.p.length - 1], c.od);
                } else if (c.sd !== undefined) {
                  cb(c.p[c.p.length - 1], c.sd);
                }
                break;
              case 'replace':
                if (c.li !== undefined && c.ld !== undefined) {
                  cb(c.p[c.p.length - 1], c.ld, c.li);
                } else if (c.oi !== undefined && c.od !== undefined) {
                  cb(c.p[c.p.length - 1], c.od, c.oi);
                }
                break;
              case 'move':
                if (c.lm !== undefined) {
                  cb(c.p[c.p.length - 1], c.lm);
                }
                break;
              case 'add':
                if (c.na !== undefined) {
                  cb(c.na);
                }
            }
          }

          if (_type.canOpAffectPath(c, listener.path) && listener.event === 'child op') {
            var child_path = c.p.slice(listener.path.length);
            cb(child_path, c);
          }
        }
      }
    }
  };

}).call(this);
// This file is included at the top of the compiled client JS.

// All the modules will just add stuff to exports, and it'll all get exported.
var exports = window.sharejs = {version: '0.7.0-alpha13'};

// This is a simple rewrite of microevent.js. I've changed the
// function names to be consistent with node.js EventEmitter.
//
// microevent.js is copyright Jerome Etienne, and licensed under the MIT license:
// https://github.com/jeromeetienne/microevent.js

var MicroEvent = function() {};

MicroEvent.prototype.on = function(event, fn) {
  var events = this._events = this._events || {};
  (events[event] = events[event] || []).push(fn);
};

MicroEvent.prototype.removeListener = function(event, fn) {
  var events = this._events = this._events || {};
  var listeners = events[event] = events[event] || [];

  // Sadly, no IE8 support for indexOf.
  var i = 0;
  while (i < listeners.length) {
    if (listeners[i] === fn) {
      listeners[i] = undefined;
    }
    i++;
  }

  // Compact the list when no event handler is actually running.
  setTimeout(function() {
    events[event] = [];
    var fn;
    for (var i = 0; i < listeners.length; i++) {
      // Only add back event handlers which exist.
      if ((fn = listeners[i])) events[event].push(fn);
    }
  }, 0);
};

MicroEvent.prototype.emit = function(event) {
  var events = this._events;
  var args = Array.prototype.splice.call(arguments, 1);

  if (!events || !events[event]) {
    if (event == 'error') {
      if (console) {
        console.error.apply(console, args);
      }
    }
    return;
  }

  var listeners = events[event];
  for (var i = 0; i < listeners.length; i++) {
    if (listeners[i]) {
      listeners[i].apply(this, args);
    }
  }
};

MicroEvent.prototype.once = function(event, fn) {
  var listener, _this = this;
  this.on(event, listener = function() {
    _this.removeListener(event, listener);
    fn.apply(_this, arguments);
  });
};

MicroEvent.mixin = function(obj) {
  var proto = obj.prototype || obj;
  proto.on = MicroEvent.prototype.on;
  proto.removeListener = MicroEvent.prototype.removeListener;
  proto.emit = MicroEvent.prototype.emit;
  proto.once = MicroEvent.prototype.once;
  return obj;
};

if (typeof module !== "undefined") module.exports = MicroEvent;

var types;
if (typeof require !== "undefined") {
  types = require('ottypes');
} else {
  types = window.ottypes;
}

exports.registerType = function(type) {
  if (type.name) types[type.name] = type;
  if (type.uri) types[type.uri] = type;
};var types;

if (typeof require !== "undefined") {
  types = require('ottypes');
  MicroEvent = require('./microevent');
} else {
  types = window.ottypes;
}

/**
 * A Doc is a client's view on a sharejs document.
 *
 * It is is uniquely identified by its `name` and `collection`.  Documents
 * should not be created directly. Create them with Connection.get()
 *
 *
 *
 * Subscriptions
 * -------------
 *
 * We can subscribe a document to stay in sync with the server.
 *   doc.subscribe(function(error) {
 *     doc.state // = 'ready'
 *     doc.subscribed // = true
 *   })
 * The server now sends us all changes concerning this document and these are
 * applied to our snapshot. If the subscription was successful the initial
 * snapshot and version sent by the server are loaded into the document.
 *
 * To stop listening to the changes we call `doc.unsubscribe()`.
 *
 * If we just want to load the data but not stay up-to-date, we call
 *   doc.fetch(function(error) {
 *     doc.snapshot // sent by server
 *   })
 *
 * TODO What happens when the document does not exist yet.
 *
 *
 *
 * Editing documents
 * ------------------
 *
 * To edit a document we have to create an editing context
 *   context = doc.context()
 * The context is an object exposing the type API of the documents OT type.
 *   doc.type = 'text'
 *   context.insert(0, 'In the beginning')
 *   doc.snapshot // 'In the beginning...'
 *
 * If a operation is applied on the snapshot the `_onOp` on the context is
 * called. The type implementation then usually triggers a corresponding event.
 *
 *
 *
 *
 * Events
 * ------
 *
 * You can use doc.on(eventName, callback) to subscribe to the following events:
 * - `before op (op, localContext)` Fired before an operation is applied to the
 *   snapshot. The document is already in locked state, so it is not allowed to
 *   submit further operations. It may be used to read the old snapshot just
 *   before applying an operation. The callback is passed the operation and the
 *   editing context if the operation originated locally and `false` otherwise
 * - `after op (op, localContext)` Fired after an operation has been applied to
 *   the snapshot. The arguments are the same as for `before op`
 * - `op (op, localContext)` The same as `after op` unless incremental updates
 *   are enabled. In this case it is fired after every partial operation with
 *   this operation as the first argument. When fired the document is in a
 *   locked state which only allows reading operations.
 * - `subscribed (error)` The document was subscribed
 * - `unsubscribed (error)` The document was unsubscribed
 * - `created (localContext)` The document was created. That means its type was
 *   set and it has some initial data.
 * - `del (localContext, snapshot)` Fired after the document is deleted, that is
 *   the snapshot is null. It is passed the snapshot before delteion as an
 *   arguments
 * - `error`
 *
 * TODO rename `op` to `after partial op`
 */
var Doc = exports.Doc = function(connection, collection, name) {
  this.connection = connection;

  this.collection = collection;
  this.name = name;

  this.version = this.type = null;
  this.snapshot = undefined;

  // **** State in document:
 
  // The action the document tries to perform with the server
  //
  // - subscribe
  // - unsubscribe
  // - fetch
  // - submit: send an operation
  this.action = null;
 
  // The data the document object stores can be in one of the following three states:
  //   - No data. (null) We honestly don't know whats going on.
  //   - Floating ('floating'): we have a locally created document that hasn't
  //     been created on the server yet)
  //   - Live ('ready') (we have data thats current on the server at some version).
  this.state = null;

  // Our subscription status. Either we're subscribed on the server, or we aren't.
  this.subscribed = false;
  // Either we want to be subscribed (true), we want a new snapshot from the
  // server ('fetch'), or we don't care (false).  This is also used when we
  // disconnect & reconnect to decide what to do.
  this.wantSubscribe = false;
  // This list is used for subscribe and unsubscribe, since we'll only want to
  // do one thing at a time.
  this._subscribeCallbacks = [];


  // *** end state stuff.

  // This doesn't provide any standard API access right now.
  this.provides = {};

  // The editing contexts. These are usually instances of the type API when the
  // document is ready for edits.
  this.editingContexts = [];
  
  // The op that is currently roundtripping to the server, or null.
  //
  // When the connection reconnects, the inflight op is resubmitted.
  //
  // This has the same format as an entry in pendingData, which is:
  // {[create:{...}], [del:true], [op:...], callbacks:[...], src:, seq:}
  this.inflightData = null;

  // All ops that are waiting for the server to acknowledge @inflightData
  // This used to just be a single operation, but creates & deletes can't be composed with
  // regular operations.
  //
  // This is a list of {[create:{...}], [del:true], [op:...], callbacks:[...]}
  this.pendingData = [];

  // The OT type of this document.
  //
  // The document also responds to the api provided by the type
  this.type = null
};

MicroEvent.mixin(Doc);

/**
 * Unsubscribe and remove all editing contexts
 */
Doc.prototype.destroy = function(callback) {
  var doc = this;
  this.unsubscribe(function() {
    // Don't care if there's an error unsubscribing.

    setTimeout(function() {
      // There'll probably be nothing here seeing as how we just unsubscribed.
      for (var i = 0; i < doc._subscribeCallbacks.length; i++) {
        doc._subscribeCallbacks[i]('Document destroyed');
      }
      doc._subscribeCallbacks.length = 0;
    }, 0);

    doc.connection._destroyDoc(doc);
    doc.removeContexts();
    if (callback) callback();
  });
};


// ****** Manipulating the document snapshot, version and type.

// Set the document's type, and associated properties. Most of the logic in
// this function exists to update the document based on any added & removed API
// methods.
//
// @param newType OT type provided by the ottypes library or its name or uri
Doc.prototype._setType = function(newType) {
  if (typeof newType === 'string') {
    if (!types[newType]) throw new Error("Missing type " + newType);
    newType = types[newType];
  }
  this.removeContexts();

  // Set the new type
  this.type = newType;

  // If we removed the type from the object, also remove its snapshot.
  if (!newType) {
    this.provides = {};
    this.snapshot = undefined;
  } else if (newType.api) {
    // Register the new type's API.
    this.provides = newType.api.provides;
  }
};

// Injest snapshot data. This data must include a version, snapshot and type.
// This is used both to ingest data that was exported with a webpage and data
// that was received from the server during a fetch.
//
// @param data.v    version
// @param data.data
// @param data.type
// @fires ready
Doc.prototype.ingestData = function(data) {
  if (this.state) {
    if (typeof console !== "undefined") console.warn('Ignoring attempt to ingest data in state', this.state);
    return;
  }
  if (typeof data.v !== 'number') throw new Error('Missing version in ingested data');


  this.version = data.v;
  // data.data is what the server will actually send. data.snapshot is the old
  // field name - supported now for backwards compatibility.
  this.snapshot = data.data;
  this._setType(data.type);

  this.state = 'ready';
  this.emit('ready');
};

// Get and return the current document snapshot.
Doc.prototype.getSnapshot = function() {
  return this.snapshot;
};

// The callback will be called at a time when the document has a snapshot and
// you can start applying operations. This may be immediately.
Doc.prototype.whenReady = function(fn) {
  if (this.state === 'ready') {
    fn();
  } else {
    this.once('ready', fn);
  }
};

Doc.prototype.hasPending = function() {
  return this.action != null || this.inflightData != null || !!this.pendingData.length;
};


// **** Helpers for network messages

// Send a message to the connection from this document.
Doc.prototype._send = function(message) {
  message.c = this.collection;
  message.d = this.name;
  this.connection.send(message);
};

// This function exists so connection can call it directly for bulk subscribes.
// It could just make a temporary object literal, thats pretty slow.
Doc.prototype._handleSubscribe = function(err, data) {
  if (err && err !== 'Already subscribed') {
    if (console) console.error("Could not subscribe: " + err);
    this.emit('error', err);
    // There's probably a reason we couldn't subscribe. Don't retry.
    this._setWantSubscribe(false, null, err)
  } else {
    if (data) this.ingestData(data);
    this.subscribed = true;
    this.emit('subscribe');
    this._finishSub(true);
  }

  this._clearAction('subscribe');
};

// This is called by the connection when it receives a message for the document.
Doc.prototype._onMessage = function(msg) {
  if (!(msg.c === this.collection && msg.d === this.name)) {
    // This should never happen - its a sanity check for bugs in the connection code.
    throw new Error("Got message for wrong document.");
  }

  // msg.a = the action.
  switch (msg.a) {
    case 'fetch':
      // We're done fetching. This message has no other information.
      if (msg.data) this.ingestData(msg.data);
      this._finishSub('fetch', msg.error);
      if (this.wantSubscribe === 'fetch') this.wantSubscribe = false;
      this._clearAction('fetch');
      break;

    case 'sub':
      // Subscribe reply.
      this._handleSubscribe(msg.error, msg.data);
      break;

    case 'unsub':
      // Unsubscribe reply
      this.subscribed = false;
      this.emit('unsubscribe');

      this._finishSub(false, msg.error);
      this._clearAction('unsubscribe');
      break;

    case 'ack':
      // Acknowledge a locally submitted operation.
      //
      // Usually we do nothing here - all the interesting logic happens when we
      // get sent our op back in the op stream (which happens even if we aren't
      // subscribed). However, if the op doesn't get accepted, we still need to
      // clear some state.
      //
      // If the message error is 'Op already submitted', that means we've
      // resent an op that the server already got. It will also be confirmed
      // normally.
      if (msg.error && msg.error !== 'Op already submitted') {
        // The server has rejected an op from the client for some reason.
        // We'll send the error message to the user and try to roll back the change.
        if (this.inflightData) {
          console.warn('Operation was rejected (' + msg.error + '). Trying to rollback change locally.');
          this._tryRollback(this.inflightData);
          this._clearInflightOp(msg.error);
        } else {
          // I managed to get into this state once. I'm not sure how it happened.
          // The op was maybe double-acknowledged?
          if (console) console.warn('Second acknowledgement message (error) received', msg, this);
        }
      }
      break;

    case 'op':
      if (this.inflightData &&
          msg.src === this.inflightData.src &&
          msg.seq === this.inflightData.seq) {
        // This one is mine. Accept it as acknowledged.
        this._opAcknowledged(msg);
        break;
      }

      if (msg.v < this.version) {
        // This will happen naturally in the following (or similar) cases:
        //
        // Client is not subscribed to document.
        // -> client submits an operation (v=10)
        // -> client subscribes to a query which matches this document. Says we
        //    have v=10 of the doc.
        //
        // <- server acknowledges the operation (v=11). Server acknowledges the
        //    operation because the doc isn't subscribed
        // <- server processes the query, which says the client only has v=10.
        //    Server subscribes at v=10 not v=11, so we get another copy of the
        //    v=10 operation.
        //
        // In this case, we can safely ignore the old (duplicate) operation.
        break;
      }
      
      if (msg.v > this.version) {
        // If we get in here, it means we missed an operation from the server,
        // or operations are being sent to the client out of order. This
        // *should* never happen, but it currently does because of a bug in the
        // way the query code & doc class interact. If you have a document at
        // an old version (and not subscribed), when the document matches a
        // query the query will send the client a snapshot of the document
        // instead of the operations in between.
        console.warn("Client got future operation from the server",
            this.collection, this.name, msg);
        break;
      }

      if (this.inflightData) xf(this.inflightData, msg);

      for (var i = 0; i < this.pendingData.length; i++) {
        xf(this.pendingData[i], msg);
      }

      this.version++;
      this._otApply(msg, false);
      break;

    case 'meta':
      if (console) console.warn('Unhandled meta op:', msg);
      break;

    default:
      if (console) console.warn('Unhandled document message:', msg);
      break;
  }
};

// Called whenever (you guessed it!) the connection state changes. This will
// happen when we get disconnected & reconnect.
Doc.prototype._onConnectionStateChanged = function(state, reason) {
  if (state === 'connecting') {
    if (this.inflightData) {
      this._sendOpData();
    } else {
      this.flush();
    }
  } else if (state === 'connected') {
    // We go into the connected state once we have a sessionID. We can't send
    // new ops until then, so we need to flush again.
    this.flush();
  } else if (state === 'disconnected') {
    this.action = null;
    this.subscribed = false;
    if (this.subscribed) this.emit('unsubscribed');
  }
};




// ****** Dealing with actions

Doc.prototype._clearAction = function(expectedAction) {
  if (this.action !== expectedAction) {
    console.warn('Unexpected action ' + this.action + ' expected: ' + expectedAction);
  }
  this.action = null;
  this.flush();

  if (!this.hasPending()) {
    this.emit('nothing pending');
  }
};



// Send the next pending op to the server, if we can.
//
// Only one operation can be in-flight at a time. If an operation is already on
// its way, or we're not currently connected, this method does nothing.
Doc.prototype.flush = function() {
  if (!this.connection.canSend || this.action) return;

  var opData;
  // Pump and dump any no-ops from the front of the pending op list.
  while (this.pendingData.length && isNoOp(opData = this.pendingData[0])) {
    var callbacks = opData.callbacks;
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i](opData.error);
    }
    this.pendingData.shift();
  }

  // We consider sending operations before considering subscribing because its
  // convenient in access control code to not need to worry about subscribing
  // to documents that don't exist.
  if (!this.paused && this.pendingData.length && this.connection.state === 'connected') {
    // Try and send any pending ops. We can't send ops while in 
    this.inflightData = this.pendingData.shift();

    // This also sets action to 'submit'.
    this._sendOpData();
  } else if (this.subscribed && !this.wantSubscribe) {
    this.action = 'unsubscribe';
    this._send({a:'unsub'});
  } else if (!this.subscribed && this.wantSubscribe === 'fetch') {
    this.action = 'fetch';
    this._send(this.state === 'ready' ? {a:'fetch', v:this.version} : {a:'fetch'});
  } else if (!this.subscribed && this.wantSubscribe) {
    this.action = 'subscribe';
    // Special send method needed for bulk subscribes on reconnect.
    this.connection.sendSubscribe(this.collection, this.name, this.state === 'ready' ? this.version : null);
  }
};


// ****** Subscribing, unsubscribing and fetching

// These functions iare copied into the query class as well, so be careful making
// changes here.

// Value is true, false or 'fetch'.
Doc.prototype._setWantSubscribe = function(value, callback, err) {
  if (this.subscribed === this.wantSubscribe &&
      (this.subscribed === value || value === 'fetch' && this.subscribed)) {
    if (callback) callback(err);
    return;
  }
  
  if (!this.wantSubscribe !== !value) {
    // Call all the current subscribe/unsubscribe callbacks.
    for (var i = 0; i < this._subscribeCallbacks.length; i++) {
      // Should I return an error here? What happened is the user unsubcribed
      // with a callback then resubscribed straight after. Does that mean the
      // unsubscribe failed?
      this._subscribeCallbacks[i](err);
    }
    this._subscribeCallbacks.length = 0;
  }

  // If we want to subscribe, don't weaken it to a fetch.
  if (value !== 'fetch' || this.wantSubscribe !== true)
    this.wantSubscribe = value;

  if (callback) this._subscribeCallbacks.push(callback);
  this.flush();
};

// Open the document. There is no callback and no error handling if you're
// already connected.
//
// Only call this once per document.
Doc.prototype.subscribe = function(callback) {
  this._setWantSubscribe(true, callback);
};

// Unsubscribe. The data will stay around in local memory, but we'll stop
// receiving updates.
Doc.prototype.unsubscribe = function(callback) {
  this._setWantSubscribe(false, callback);
};

// Call to request fresh data from the server.
Doc.prototype.fetch = function(callback) {
  this._setWantSubscribe('fetch', callback);
};

// Called when our subscribe, fetch or unsubscribe messages are acknowledged.
Doc.prototype._finishSub = function(value, error) {
  if (value === this.wantSubscribe) {
    for (var i = 0; i < this._subscribeCallbacks.length; i++) {
      this._subscribeCallbacks[i](error);
    }
    this._subscribeCallbacks.length = 0;
  }
};


// Operations


// ************ Dealing with operations.

// Helper function to set opData to contain a no-op.
var setNoOp = function(opData) {
  delete opData.op;
  delete opData.create;
  delete opData.del;
};

var isNoOp = function(opData) {
  return !opData.op && !opData.create && !opData.del;
}

// Try to compose data2 into data1. Returns truthy if it succeeds, otherwise falsy.
var tryCompose = function(type, data1, data2) {
  if (data1.create && data2.del) {
    setNoOp(data1);
  } else if (data1.create && data2.op) {
    // Compose the data into the create data.
    var data = (data1.create.data === undefined) ? type.create() : data1.create.data;
    data1.create.data = type.apply(data, data2.op);
  } else if (isNoOp(data1)) {
    data1.create = data2.create;
    data1.del = data2.del;
    data1.op = data2.op;
  } else if (data1.op && data2.op && type.compose) {
    data1.op = type.compose(data1.op, data2.op);
  } else {
    return false;
  }
  return true;
};

// Transform server op data by a client op, and vice versa. Ops are edited in place.
var xf = function(client, server) {
  // In this case, we're in for some fun. There are some local operations
  // which are totally invalid - either the client continued editing a
  // document that someone else deleted or a document was created both on the
  // client and on the server. In either case, the local document is way
  // invalid and the client's ops are useless.
  //
  // The client becomes a no-op, and we keep the server op entirely.
  if (server.create || server.del) return setNoOp(client);
  if (client.create) throw new Error('Invalid state. This is a bug.');

  // The client has deleted the document while the server edited it. Kill the
  // server's op.
  if (client.del) return setNoOp(server);

  // We only get here if either the server or client ops are no-op. Carry on,
  // nothing to see here.
  if (!server.op || !client.op) return;

  // They both edited the document. This is the normal case for this function -
  // as in, most of the time we'll end up down here.
  //
  // You should be wondering why I'm using client.type instead of this.type.
  // The reason is, if we get ops at an old version of the document, this.type
  // might be undefined or a totally different type. By pinning the type to the
  // op data, we make sure the right type has its transform function called.
  if (client.type.transformX) {
    var result = client.type.transformX(client.op, server.op);
    client.op = result[0];
    server.op = result[1];
  } else {
    //console.log('xf', JSON.stringify(client.op), JSON.stringify(server.op));
    var _c = client.type.transform(client.op, server.op, 'left');
    var _s = client.type.transform(server.op, client.op, 'right');
    client.op = _c; server.op = _s;
    //console.log('->', JSON.stringify(client.op), JSON.stringify(server.op));
  }
};

/**
 * Applies the operation to the snapshot
 *
 * If the operation is create or delete it emits `create` or `del`.  Then the
 * operation is applied to the snapshot and `op` and `after op` are emitted.  If
 * the type supports incremental updates and `this.incremental` is true we fire
 * `op` after every small operation.
 *
 * This is the only function to fire the above mentioned events.
 *
 * @private
 */
Doc.prototype._otApply = function(opData, context) {
  this.locked = true;

  if (opData.create) {
    // If the type is currently set, it means we tried creating the document
    // and someone else won. client create x server create = server create.
    var create = opData.create;
    this._setType(create.type);
    this.snapshot = this.type.create(create.data);

    // This is a bit heavyweight, but I want the created event to fire outside of the lock.
    this.once('unlock', function() {
      this.emit('create', context);
    });
  } else if (opData.del) {
    // The type should always exist in this case. del x _ = del
    var oldSnapshot = this.snapshot;
    this._setType(null);
    this.once('unlock', function() {
      this.emit('del', context, oldSnapshot);
    });
  } else if (opData.op) {
    if (!this.type) throw new Error('Document does not exist');

    var type = this.type;

    var op = opData.op;
    
    // The context needs to be told we're about to edit, just in case it needs
    // to store any extra data. (text-tp2 has this constraint.)
    for (var i = 0; i < this.editingContexts.length; i++) {
      var c = this.editingContexts[i];
      if (c != context && c._beforeOp) c._beforeOp(opData.op);
    }

    this.emit('before op', op, context);

    // This exists so clients can pull any necessary data out of the snapshot
    // before it gets changed.  Previously we kept the old snapshot object and
    // passed it to the op event handler. However, apply no longer guarantees
    // the old object is still valid.
    //
    // Because this could be totally unnecessary work, its behind a flag. set
    // doc.incremental to enable.
    if (this.incremental && type.incrementalApply) {
      var _this = this;
      type.incrementalApply(this.snapshot, op, function(o, snapshot) {
        _this.snapshot = snapshot;
        _this.emit('op', o, context);
      });
    } else {
      // This is the most common case, simply applying the operation to the local snapshot.
      this.snapshot = type.apply(this.snapshot, op);
      this.emit('op', op, context);
    }
  }
  // Its possible for none of the above cases to match, in which case the op is
  // a no-op. This will happen when a document has been deleted locally and
  // remote ops edit the document.


  this.locked = false;
  this.emit('unlock');

  if (opData.op) {
    var contexts = this.editingContexts;
    // Notify all the contexts about the op (well, all the contexts except
    // the one which initiated the submit in the first place).
    // NOTE Handle this with events?
    for (var i = 0; i < contexts.length; i++) {
      var c = contexts[i];
      if (c != context && c._onOp) c._onOp(opData.op);
    }
    for (var i = 0; i < contexts.length; i++) {
      if (contexts.remove) contexts.splice(i--, 1);
    }

    return this.emit('after op', opData.op, context);
  }
};



// ***** Sending operations


// Actually send op data to the server.
Doc.prototype._sendOpData = function() {
  var d = this.inflightData;

  if (this.action) throw new Error('invalid state ' + this.action + ' for sendOpData');
  this.action = 'submit';

  var msg = {a:'op', v:this.version};
  if (d.src) {
    msg.src = d.src;
    msg.seq = d.seq;
  }

  if (d.op) msg.op = d.op;
  if (d.create) msg.create = d.create;
  if (d.del) msg.del = d.del;

  msg.c = this.collection;
  msg.d = this.name;

  this.connection.sendOp(msg);
   
  // The first time we send an op, its id and sequence number is implicit.
  if (!d.src) {
    d.src = this.connection.id;
    d.seq = this.connection.seq++;
  }
};


// Queues the operation for submission to the server and applies it locally.
//
// Internal method called to do the actual work for submitOp(), create() and del().
// @private
//
// @param opData
// @param [opData.op]
// @param [opData.del]
// @param [opData.create]
// @param [context] the editing context
// @param [callback] called when operation is submitted
Doc.prototype._submitOpData = function(opData, context, callback) {
  //console.log('submit', JSON.stringify(opData), 'v=', this.version);

  if (typeof context === 'function') {
    callback = context;
    context = true; // The default context is true.
  }
  if (context == null) context = true;

  var error = function(err) {
    if (callback) callback(err);
    else if (console) console.warn('Failed attempt to submitOp:', err);
  };

  if (this.locked) {
    return error("Cannot call submitOp from inside an 'op' event handler");
  }

  // The opData contains either op, create, delete, or none of the above (a no-op).
  if (opData.op) {
    if (!this.type) return error('Document has not been created');
    // Try to normalize the op. This removes trailing skip:0's and things like that.
    if (this.type.normalize) opData.op = this.type.normalize(opData.op);
  }

  if (!this.state) {
    this.state = 'floating';
  }

  opData.type = this.type;
  opData.callbacks = [];

  // If the type supports composes, try to compose the operation onto the end
  // of the last pending operation.
  var operation;
  var previous = this.pendingData[this.pendingData.length - 1];

  if (previous && tryCompose(this.type, previous, opData)) {
    operation = previous;
  } else {
    operation = opData;
    this.pendingData.push(opData);
  }
  if (callback) operation.callbacks.push(callback);

  this._otApply(opData, context);

  // The call to flush is in a timeout so if submitOp() is called multiple
  // times in a closure all the ops are combined before being sent to the
  // server. It doesn't matter if flush is called a bunch of times.
  var _this = this;
  setTimeout((function() { _this.flush(); }), 0);
};


// *** Client OT entrypoints.

// Submit an operation to the document.
//
// @param operation handled by the OT type
// @param [context] editing context
// @param [callback] called after operation submitted
//
// @fires before op, op, after op
Doc.prototype.submitOp = function(op, context, callback) {
  this._submitOpData({op: op}, context, callback);
};

// Create the document, which in ShareJS semantics means to set its type. Every
// object implicitly exists in the database but has no data and no type. Create
// sets the type of the object and can optionally set some initial data on the
// object, depending on the type.
//
// @param type  OT type
// @param data  initial
// @param context  editing context
// @param callback  called when operation submitted
Doc.prototype.create = function(type, data, context, callback) {
  if (typeof data === 'function') {
    // Setting the context to be the callback function in this case so _submitOpData
    // can handle the default value thing.
    context = data;
    data = undefined;
  }

  var op = {create: {type:type, data:data}};
  if (this.type) {
    if (callback) callback('Document already exists', this._opErrorContext(op));
    return 
  }

  this._submitOpData(op, context, callback);
};

// Delete the document. This creates and submits a delete operation to the
// server. Deleting resets the object's type to null and deletes its data. The
// document still exists, and still has the version it used to have before you
// deleted it (well, old version +1).
//
// @param context   editing context
// @param callback  called when operation submitted
Doc.prototype.del = function(context, callback) {
  if (!this.type) {
    if (callback) callback('Document does not exist');
    return;
  }

  this._submitOpData({del: true}, context, callback);
};


// Stops the document from sending any operations to the server.
Doc.prototype.pause = function() {
  this.paused = true;
};

// Continue sending operations to the server
Doc.prototype.resume = function() {
  this.paused = false;
  this.flush();
};


// *** Receiving operations


// This will be called when the server rejects our operations for some reason.
// There's not much we can do here if the OT type is noninvertable, but that
// shouldn't happen too much in real life because readonly documents should be
// flagged as such. (I should probably figure out a flag for that).
//
// This does NOT get called if our op fails to reach the server for some reason
// - we optimistically assume it'll make it there eventually.
Doc.prototype._tryRollback = function(opData) {
  // This is probably horribly broken.
  if (opData.create) {
    this._setType(null);

    // I don't think its possible to get here if we aren't in a floating state.
    if (this.state === 'floating')
      this.state = null;
    else
      console.warn('Rollback a create from state ' + this.state);

  } else if (opData.op && opData.type.invert) {
    opData.op = opData.type.invert(opData.op);

    // Transform the undo operation by any pending ops.
    for (var i = 0; i < this.pendingData.length; i++) {
      xf(this.pendingData[i], opData);
    }

    // ... and apply it locally, reverting the changes.
    // 
    // This operation is applied to look like it comes from a remote context.
    // I'm still not 100% sure about this functionality, because its really a
    // local op. Basically, the problem is that if the client's op is rejected
    // by the server, the editor window should update to reflect the undo.
    this._otApply(opData, false);
  } else if (opData.op || opData.del) {
    // This is where an undo stack would come in handy.
    this._setType(null);
    this.version = null;
    this.state = null;
    this.subscribed = false;
    this.emit('error', "Op apply failed and the operation could not be reverted");

    // Trigger a fetch. In our invalid state, we can't really do anything.
    this.fetch();
    this.flush();
  }
};

Doc.prototype._opErrorContext = function(op) {
  return {
    collection: this.collection,
    name: this.name,
    opData: op || this.inflightData
  };
};

Doc.prototype._clearInflightOp = function(error) {
  var callbacks = this.inflightData.callbacks;
  var context = this._opErrorContext();
  // There's no nice way to pass this context back to the caller - I settled on
  // using simple strings for error messages, and now this is hurting me. I'll
  // fix this API in sharejs 0.8.
  for (var i = 0; i < callbacks.length; i++) {
    callbacks[i](error || this.inflightData.error, context);
  }

  this.inflightData = null;
  this._clearAction('submit');

  if (!this.pendingData.length) {
    // This isn't a very good name.
    this.emit('nothing pending');
  }
};

// This is called when the server acknowledges an operation from the client.
Doc.prototype._opAcknowledged = function(msg) {
  // Our inflight op has been acknowledged, so we can throw away the inflight data.
  // (We were only holding on to it incase we needed to resend the op.)
  if (!this.state) {
    throw new Error('opAcknowledged called from a null state. This should never happen.');
  } else if (this.state === 'floating') {
    if (!this.inflightData.create) throw new Error('Cannot acknowledge an op.');

    // Our create has been acknowledged. This is the same as ingesting some data.
    this.version = msg.v;
    this.state = 'ready';
    var _this = this;
    setTimeout(function() { _this.emit('ready'); }, 0);
  } else {
    // We already have a snapshot. The snapshot should be at the acknowledged
    // version, because the server has sent us all the ops that have happened
    // before acknowledging our op.

    // This should never happen - something is out of order.
    if (msg.v !== this.version)
      throw new Error('Invalid version from server. This can happen when you submit ops in a submitOp callback.');
  }
  
  // The op was committed successfully. Increment the version number
  this.version++;

  this._clearInflightOp();
};


// Creates an editing context
//
// The context is an object responding to getSnapshot(), submitOp() and
// destroy(). It also has all the methods from the OT type mixed in.
// If the document is destroyed, the detach() method is called on the context.
Doc.prototype.createContext = function() {
  var type = this.type;
  if (!type) throw new Error('Missing type');

  // I could use the prototype chain to do this instead, but Object.create
  // isn't defined on old browsers. This will be fine.
  var doc = this;
  var context = {
    getSnapshot: function() {
      return doc.snapshot;
    },
    submitOp: function(op, callback) {
      doc.submitOp(op, context, callback);
    },
    destroy: function() {
      if (this.detach) {
        this.detach();
        // Don't double-detach.
        delete this.detach;
      }
      // It will be removed from the actual editingContexts list next time
      // we receive an op on the document (and the list is iterated through).
      //
      // This is potentially dodgy, allowing a memory leak if you create &
      // destroy a whole bunch of contexts without receiving or sending any ops
      // to the document.
      //
      // NOTE Why can't we destroy contexts immediately?
      delete this._onOp;
      this.remove = true;
    },

    // This is dangerous, but really really useful for debugging. I hope people
    // don't depend on it.
    _doc: this,
  };

  if (type.api) {
    // Copy everything else from the type's API into the editing context.
    for (var k in type.api) {
      context[k] = type.api[k];
    }
  } else {
    context.provides = {};
  }

  this.editingContexts.push(context);

  return context;
};


/**
 * Destroy all editing contexts
 */
Doc.prototype.removeContexts = function() {
  for (var i = 0; i < this.editingContexts.length; i++) {
    this.editingContexts[i].destroy();
  }
  this.editingContexts.length = 0;
};
var Doc, Query;
if (typeof require !== 'undefined') {
  Doc = require('./doc').Doc;
  Query = require('./query').Query;
  MicroEvent = require('./microevent');
} else {
  Doc   = exports.Doc;
  Query = exports.Query
}


/**
 * Handles communication with the sharejs server and provides queries and
 * documents.
 *
 * We create a connection with a socket object
 *   connection = new sharejs.Connection(sockset)
 * The socket may be any object handling the websocket protocol. See the
 * documentation of bindToSocket() for details. We then wait for the connection
 * to connect
 *   connection.on('connected', ...)
 * and are finally able to work with shared documents
 *   connection.get('food', 'steak') // Doc 
 *
 * @param socket @see bindToSocket
 */
var Connection = exports.Connection = function (socket) {
  // Map of collection -> docName -> doc object for created documents.
  // (created documents MUST BE UNIQUE)
  this.collections = {};

  // Each query is created with an id that the server uses when it sends us
  // info about the query (updates, etc).
  //this.nextQueryId = (Math.random() * 1000) |0;
  this.nextQueryId = 1;

  // Map from query ID -> query object.
  this.queries = {};

  // State of the connection. The correspoding events are emmited when this
  // changes. Available states are:
  // - 'connecting'   The connection has been established, but we don't have our
  //                  client ID yet
  // - 'connected'    We have connected and recieved our client ID. Ready for data.
  // - 'disconnected' The connection is closed, but it will reconnect automatically.
  // - 'stopped'      The connection is closed, and should not reconnect.
  this.state = 'disconnected'

  // This is a helper variable the document uses to see whether we're currently
  // in a 'live' state. It is true if we're connected, or if you're using
  // browserchannel and connecting.
  this.canSend = false

  // Reset some more state variables.
  this.reset();

  this.debug = false;

  // I'll store the most recent 100 messages so when errors occur we can see
  // what happened.
  this.messageBuffer = [];

  this.bindToSocket(socket);
}
MicroEvent.mixin(Connection);


/**
 * Use socket to communicate with server
 *
 * Socket is an object that can handle the websocket protocol. This method
 * installs the onopen, onclose, onmessage and onerror handlers on the socket to
 * handle communication and sends messages by calling socket.send(msg). The
 * sockets `readyState` property is used to determine the initaial state.
 *
 * @param socket Handles the websocket protocol
 * @param socket.readyState
 * @param socket.close
 * @param socket.send
 * @param socket.onopen
 * @param socket.onclose
 * @param socket.onmessage
 * @param socket.onerror
 */
Connection.prototype.bindToSocket = function(socket) {
  if (this.socket) {
    delete this.socket.onopen
    delete this.socket.onclose
    delete this.socket.onmessage
    delete this.socket.onerror
  }

  // TODO: Check that the socket is in the 'connecting' state.

  this.socket = socket;
  // This logic is replicated in setState - consider calling setState here
  // instead.
  this.state = (socket.readyState === 0 || socket.readyState === 1) ? 'connecting' : 'disconnected';
  this.canSend = this.state === 'connecting' && socket.canSendWhileConnecting;

  var connection = this

  socket.onmessage = function(msg) {
    var data = msg.data;

    // Fall back to supporting old browserchannel 1.x API which implemented the
    // websocket API incorrectly. This will be removed at some point
    if (!data) data = msg;
    
    // Some transports don't need parsing.
    if (typeof data === 'string') data = JSON.parse(data);

    if (connection.debug) console.log('RECV', JSON.stringify(data));

    connection.messageBuffer.push({
      t: (new Date()).toTimeString(),
      recv:JSON.stringify(data)
    });
    while (connection.messageBuffer.length > 100) {
      connection.messageBuffer.shift();
    }

    try {
      connection.handleMessage(data);
    } catch (e) {
      connection.emit('error', e);
      // We could also restart the connection here, although that might result
      // in infinite reconnection bugs.
      throw e;
    }
  }

  socket.onopen = function() {
    connection._setState('connecting');
  };

  socket.onerror = function(e) {
    // This isn't the same as a regular error, because it will happen normally
    // from time to time. Your connection should probably automatically
    // reconnect anyway, but that should be triggered off onclose not onerror.
    // (onclose happens when onerror gets called anyway).
    connection.emit('connection error', e);
  };

  socket.onclose = function(reason) {
    connection._setState('disconnected', reason);
    if (reason === 'Closed' || reason === 'Stopped by server') {
      connection._setState('stopped', reason);
    }
  };
};


/**
 * @param {object} msg
 * @param {String} msg.a action
 */
Connection.prototype.handleMessage = function(msg) {
  // Switch on the message action. Most messages are for documents and are
  // handled in the doc class.
  switch (msg.a) {
    case 'init':
      // Client initialization packet. This bundle of joy contains our client
      // ID.
      if (msg.protocol !== 0) throw new Error('Invalid protocol version');
      if (typeof msg.id != 'string') throw new Error('Invalid client id');

      this.id = msg.id;
      this._setState('connected');
      break;

    case 'qfetch':
    case 'qsub':
    case 'q':
    case 'qunsub':
      // Query message. Pass this to the appropriate query object.
      var query = this.queries[msg.id];
      if (query) query._onMessage(msg);
      break;

    case 'bs':
      // Bulk subscribe response. The responses for each document are contained within.
      var result = msg.s;
      for (var cName in result) {
        for (var docName in result[cName]) {
          var doc = this.get(cName, docName);
          if (!doc) {
            if (console) console.error('Message for unknown doc. Ignoring.', msg);
            break;
          }

          var msg = result[cName][docName];
          if (typeof msg === 'object') {
            doc._handleSubscribe(msg.error, msg);
          } else {
            // The msg will be true if we simply resubscribed.
            doc._handleSubscribe(null, null);
          }
        }
      }
      break;

    default:
      // Document message. Pull out the referenced document and forward the
      // message.
      var collection, docName, doc;
      if (msg.d) {
        collection = this._lastReceivedCollection = msg.c;
        docName = this._lastReceivedDoc = msg.d;
      } else {
        collection = msg.c = this._lastReceivedCollection;
        docName = msg.d = this._lastReceivedDoc;
      }

      this.get(collection, docName)._onMessage(msg);
  }
};


Connection.prototype.reset = function() {
  this.id = this.lastError =
    this._lastReceivedCollection = this._lastReceivedDoc =
    this._lastSentCollection = this._lastSentDoc = null;

  this.seq = 1;
};


// Set the connection's state. The connection is basically a state machine.
Connection.prototype._setState = function(newState, data) {
  if (this.state === newState) return;

  // I made a state diagram. The only invalid transitions are getting to
  // 'connecting' from anywhere other than 'disconnected' and getting to
  // 'connected' from anywhere other than 'connecting'.
  if ((newState === 'connecting' && (this.state !== 'disconnected' && this.state !== 'stopped'))
      || (newState === 'connected' && this.state !== 'connecting')) {
    throw new Error("Cannot transition directly from " + this.state + " to " + newState);
  }

  this.state = newState;
  this.canSend = (newState === 'connecting' && this.socket.canSendWhileConnecting) || newState === 'connected';

  if (newState === 'disconnected') this.reset();

  this.emit(newState, data);

  // & Emit the event to all documents & queries. It might make sense for
  // documents to just register for this stuff using events, but that couples
  // connections and documents a bit much. Its not a big deal either way.
  this.opQueue = [];
  this.bsStart();
  for (var c in this.collections) {
    var collection = this.collections[c];
    for (var docName in collection) {
      collection[docName]._onConnectionStateChanged(newState, data);
    }
  }


  // Its important that operations are resent in the same order that they were
  // originally sent. If we don't sort, an op with a high sequence number will
  // convince the server not to accept any ops with earlier sequence numbers.
  this.opQueue.sort(function(a, b) { return a.seq - b.seq; });
  for (var i = 0; i < this.opQueue.length; i++) {
    this.send(this.opQueue[i]);
  }

  this.opQueue = null;
  this.bsEnd();
  
  // Its important that query resubscribes are sent after documents to make sure
  // the server knows all the documents we're subscribed to when it issues the
  // queries internally.

  // No bulk subscribe for queries yet.
  for (var id in this.queries) {
    this.queries[id]._onConnectionStateChanged(newState, data);
  }
};

// So, there's an awful error case where the client sends two requests (which
// fail), then reconnects. The documents could have _onConnectionStateChanged
// called in the wrong order and the operations then get sent with reversed
// sequence numbers. This causes the server to incorrectly reject the second
// sent op. So we need to queue the operations while we're reconnecting and
// resend them in the correct order.
Connection.prototype.sendOp = function(data) {
  if (this.opQueue) {
    this.opQueue.push(data);
  } else {
    this.send(data);
  }
};

Connection.prototype.bsStart = function() {
  this.subscribeData = {};
};

Connection.prototype.bsEnd = function() {
  // Only send bulk subscribe if not empty. Its weird using a for loop for
  // this, but it works pretty well.
  for (var __unused in this.subscribeData) { 
    this.send({a:'bs', s:this.subscribeData});
    break;
  }

  this.subscribeData = null;
};

// This is called by the document class when the document wants to subscribe.
// We could just send a subscribe message, but during reconnect that causes a
// bajillion messages over browserchannel. During reconnect we'll aggregate,
// similar to sendOp.
Connection.prototype.sendSubscribe = function(collection, name, v) {
  if (this.subscribeData) {
    var data = this.subscribeData;
    if (!data[collection]) data[collection] = {};

    data[collection][name] = v || null;
  } else {
    var msg = {a:'sub', c:collection, d:name};
    if (v != null) msg.v = v;
    this.send(msg);
  }
};


/**
 * Sends a message down the socket
 */
Connection.prototype.send = function(msg) {
  if (this.debug) console.log("SEND", JSON.stringify(msg));
  this.messageBuffer.push({t:Date.now(), send:JSON.stringify(msg)});
  while (this.messageBuffer.length > 100) {
    this.messageBuffer.shift();
  }

  if (msg.d) { // The document the message refers to. Not set for queries.
    var collection = msg.c;
    var docName = msg.d;
    if (collection === this._lastSentCollection && docName === this._lastSentDoc) {
      delete msg.c;
      delete msg.d;
    } else {
      this._lastSentCollection = collection;
      this._lastSentDoc = docName;
    }
  }

  if (!this.socket.canSendJSON)
    msg = JSON.stringify(msg);
  
  this.socket.send(msg);
};


/**
 * Closes the socket and emits 'disconnected'
 */
Connection.prototype.disconnect = function() {
  this.socket.close();
};


/**
 * @deprecated
 */
Connection.prototype.getExisting = function(collection, name) {
  console.trace('getExisting is deprecated. Use get() instead');
  if (this.collections[collection]) return this.collections[collection][name];
};


/**
 * @deprecated
 */
Connection.prototype.getOrCreate = function(collection, name, data) {
  console.trace('getOrCreate is deprecated. Use get() instead');
  return this.get(collection, name, data);
};


/**
 * Get or create a document.
 *
 * @param collection
 * @param name
 * @param [data] ingested into document if created
 * @return {Doc}
 */
Connection.prototype.get = function(collection, name, data) {
  var collectionObject = this.collections[collection];
  if (!collectionObject)
    collectionObject = this.collections[collection] = {};

  var doc = collectionObject[name];
  if (!doc)
    doc = collectionObject[name] = new Doc(this, collection, name);

  // Even if the document isn't new, its possible the document was created
  // manually and then tried to be re-created with data (suppose a query
  // returns with data for the document). We should hydrate the document
  // immediately if we can because the query callback will expect the document
  // to have data.
  if (data && data.data !== undefined && !doc.state)
    doc.ingestData(data);

  return doc;
};


/**
 * Remove document from this.collections
 *
 * @private
 */
Connection.prototype._destroyDoc = function(doc) {
  var collectionObject = this.collections[doc.collection];
  if (!collectionObject) return;

  delete collectionObject[doc.name];

  // Delete the collection container if its empty. This could be a source of
  // memory leaks if you slowly make a billion collections, which you probably
  // won't do anyway, but whatever.
  if (!hasKeys(collectionObject))
    delete this.collections[doc.collection];
};
 

function hasKeys(object) {
  for (var key in object) return true;
  return false;
};


// Helper for createFetchQuery and createSubscribeQuery, below.
Connection.prototype._createQuery = function(type, collection, q, options, callback) {
  if (type !== 'fetch' && type !== 'sub')
    throw new Error('Invalid query type: ' + type);

  if (!options) options = {};
  var id = this.nextQueryId++;
  var query = new Query(type, this, id, collection, q, options, callback);
  this.queries[id] = query;
  query._execute();
  return query;
};

// Internal function. Use query.destroy() to remove queries.
Connection.prototype._destroyQuery = function(query) {
  delete this.queries[query.id];
};

// The query options object can contain the following fields:
//
// docMode: What to do with documents that are in the result set. Can be
//   null/undefined (default), 'fetch' or 'subscribe'. Fetch mode indicates
//   that the server should send document snapshots to the client for all query
//   results. These will be hydrated into the document objects before the query
//   result callbacks are returned. Subscribe mode gets document snapshots and
//   automatically subscribes the client to all results. Note that the
//   documents *WILL NOT* be automatically unsubscribed when the query is
//   destroyed. (ShareJS doesn't have enough information to do that safely).
//   Beware of memory leaks when using this option.
//
// poll: Forcably enable or disable polling mode. Polling mode will reissue the query
//   every time anything in the collection changes (!!) so, its quite
//   expensive.  It is automatically enabled for paginated and sorted queries.
//   By default queries run with polling mode disabled; which will only check
//   changed documents to test if they now match the specified query.
//   Set to false to disable polling mode, or true to enable it. If you don't
//   specify a poll option, polling mode is enabled or disabled automatically
//   by the query's backend.
//
// backend: Set the backend source for the query. You can attach different
//   query backends to livedb and pick which one the query should hit using
//   this parameter.
//
// results: (experimental) Initial list of resultant documents. This is
//   useful for rehydrating queries when you're using autoFetch / autoSubscribe
//   so the server doesn't have to send over snapshots for documents the client
//   already knows about. This is experimental - the API may change in upcoming
//   versions.

// Create a fetch query. Fetch queries are only issued once, returning the
// results directly into the callback.
//
// The index is specific to the source, but if you're using mongodb it'll be
// the collection to which the query is made.
// The callback should have the signature function(error, results, extraData)
// where results is a list of Doc objects.
Connection.prototype.createFetchQuery = function(index, q, options, callback) {
  return this._createQuery('fetch', index, q, options, callback);
};

// Create a subscribe query. Subscribe queries return with the initial data
// through the callback, then update themselves whenever the query result set
// changes via their own event emitter.
//
// If present, the callback should have the signature function(error, results, extraData)
// where results is a list of Doc objects.
Connection.prototype.createSubscribeQuery = function(index, q, options, callback) {
  return this._createQuery('sub', index, q, options, callback);
};
/* This contains the textarea binding for ShareJS. This binding is really
 * simple, and a bit slow on big documents (Its O(N). However, it requires no
 * changes to the DOM and no heavy libraries like ace. It works for any kind of
 * text input field.
 *
 * You probably want to use this binding for small fields on forms and such.
 * For code editors or rich text editors or whatever, I recommend something
 * heavier.
 */


/* applyChange creates the edits to convert oldval -> newval.
 *
 * This function should be called every time the text element is changed.
 * Because changes are always localised, the diffing is quite easy. We simply
 * scan in from the start and scan in from the end to isolate the edited range,
 * then delete everything that was removed & add everything that was added.
 * This wouldn't work for complex changes, but this function should be called
 * on keystroke - so the edits will mostly just be single character changes.
 * Sometimes they'll paste text over other text, but even then the diff
 * generated by this algorithm is correct.
 *
 * This algorithm is O(N). I suspect you could speed it up somehow using regular expressions.
 */
var applyChange = function(ctx, oldval, newval) {
  // Strings are immutable and have reference equality. I think this test is O(1), so its worth doing.
  if (oldval === newval) return;

  var commonStart = 0;
  while (oldval.charAt(commonStart) === newval.charAt(commonStart)) {
    commonStart++;
  }

  var commonEnd = 0;
  while (oldval.charAt(oldval.length - 1 - commonEnd) === newval.charAt(newval.length - 1 - commonEnd) &&
      commonEnd + commonStart < oldval.length && commonEnd + commonStart < newval.length) {
    commonEnd++;
  }

  if (oldval.length !== commonStart + commonEnd) {
    ctx.remove(commonStart, oldval.length - commonStart - commonEnd);
  }
  if (newval.length !== commonStart + commonEnd) {
    ctx.insert(commonStart, newval.slice(commonStart, newval.length - commonEnd));
  }
};

// Attach a textarea to a document's editing context.
//
// The context is optional, and will be created from the document if its not
// specified.
window.sharejs.Doc.prototype.attachTextarea = function(elem, ctx) {
  if (!ctx) ctx = this.createContext();

  if (!ctx.provides.text) throw new Error('Cannot attach to non-text document');

  elem.value = ctx.get();

  // The current value of the element's text is stored so we can quickly check
  // if its been changed in the event handlers. This is mostly for browsers on
  // windows, where the content contains \r\n newlines. applyChange() is only
  // called after the \r\n newlines are converted, and that check is quite
  // slow. So we also cache the string before conversion so we can do a quick
  // check incase the conversion isn't needed.
  var prevvalue;

  // Replace the content of the text area with newText, and transform the
  // current cursor by the specified function.
  var replaceText = function(newText, transformCursor) {
    if (transformCursor) {
      var newSelection = [transformCursor(elem.selectionStart), transformCursor(elem.selectionEnd)];
    }

    // Fixate the window's scroll while we set the element's value. Otherwise
    // the browser scrolls to the element.
    var scrollTop = elem.scrollTop;
    elem.value = newText;
    prevvalue = elem.value; // Not done on one line so the browser can do newline conversion.
    if (elem.scrollTop !== scrollTop) elem.scrollTop = scrollTop;

    // Setting the selection moves the cursor. We'll just have to let your
    // cursor drift if the element isn't active, though usually users don't
    // care.
    if (newSelection && window.document.activeElement === elem) {
      elem.selectionStart = newSelection[0];
      elem.selectionEnd = newSelection[1];
    }
  };

  replaceText(ctx.get());


  // *** remote -> local changes

  ctx.onInsert = function(pos, text) {
    var transformCursor = function(cursor) {
      return pos < cursor ? cursor + text.length : cursor;
    };

    // Remove any window-style newline characters. Windows inserts these, and
    // they mess up the generated diff.
    var prev = elem.value.replace(/\r\n/g, '\n');
    replaceText(prev.slice(0, pos) + text + prev.slice(pos), transformCursor);
  };

  ctx.onRemove = function(pos, length) {
    var transformCursor = function(cursor) {
      // If the cursor is inside the deleted region, we only want to move back to the start
      // of the region. Hence the Math.min.
      return pos < cursor ? cursor - Math.min(length, cursor - pos) : cursor;
    };

    var prev = elem.value.replace(/\r\n/g, '\n');
    replaceText(prev.slice(0, pos) + prev.slice(pos + length), transformCursor);
  };


  // *** local -> remote changes

  // This function generates operations from the changed content in the textarea.
  var genOp = function(event) {
    // In a timeout so the browser has time to propogate the event's changes to the DOM.
    setTimeout(function() {
      if (elem.value !== prevvalue) {
        prevvalue = elem.value;
        applyChange(ctx, ctx.get(), elem.value.replace(/\r\n/g, '\n'));
      }
    }, 0);
  };

  var eventNames = ['textInput', 'keydown', 'keyup', 'select', 'cut', 'paste'];
  for (var i = 0; i < eventNames.length; i++) {
    var e = eventNames[i];
    if (elem.addEventListener) {
      elem.addEventListener(e, genOp, false);
    } else {
      elem.attachEvent('on' + e, genOp);
    }
  }

  ctx.detach = function() {
    for (var i = 0; i < eventNames.length; i++) {
      var e = eventNames[i];
      if (elem.removeEventListener) {
        elem.removeEventListener(e, genOp, false);
      } else {
        elem.detachEvent('on' + e, genOp);
      }
    }
  };

  return ctx;
};

var Doc;
if (typeof require !== 'undefined') {
  Doc = require('./doc').Doc;
}

// Queries are live requests to the database for particular sets of fields.
//
// The server actively tells the client when there's new data that matches
// a set of conditions.
var Query = exports.Query = function(type, connection, id, collection, query, options, callback) {
  // 'fetch' or 'sub'
  this.type = type;

  this.connection = connection;
  this.id = id;
  this.collection = collection;

  // The query itself. For mongo, this should look something like {"data.x":5}
  this.query = query;

  // Resultant document action for the server. Fetch mode will automatically
  // fetch all results. Subscribe mode will automatically subscribe all
  // results. Results are never unsubscribed.
  this.docMode = options.docMode; // undefined, 'fetch' or 'sub'.
  if (this.docMode === 'subscribe') this.docMode = 'sub';

  // Do we repoll the entire query whenever anything changes? (As opposed to
  // just polling the changed item). This needs to be enabled to be able to use
  // ordered queries (sortby:) and paginated queries. Set to undefined, it will
  // be enabled / disabled automatically based on the query's properties.
  this.poll = options.poll;

  // The backend we actually hit. If this isn't defined, it hits the snapshot
  // database. Otherwise this can be used to hit another configured query
  // index.
  this.backend = options.backend || options.source;

  // A list of resulting documents. These are actual documents, complete with
  // data and all the rest. If fetch is false, these documents will not
  // have any data. You should manually call fetch() or subscribe() on them.
  //
  // Calling subscribe() might be a good idea anyway, as you won't be
  // subscribed to the documents by default.
  this.knownDocs = options.knownDocs || [];
  this.results = [];

  // Do we have some initial data?
  this.ready = false;

  this.callback = callback;
};
Query.prototype.action = 'qsub';

// Helper for subscribe & fetch, since they share the same message format.
//
// This function actually issues the query.
Query.prototype._execute = function() {
  if (!this.connection.canSend) return;

  if (this.docMode) {
    var collectionVersions = {};
    // Collect the version of all the documents in the current result set so we
    // don't need to be sent their snapshots again.
    for (var i = 0; i < this.knownDocs.length; i++) {
      var doc = this.knownDocs[i];
      // If we're subscribed, the server already knows which version of the doc
      // we have.
      if (!doc.subscribed && doc.action !== 'subscribe') {
        var c = collectionVersions[doc.collection] = collectionVersions[doc.collection] || {};
        c[doc.name] = doc.version;
      }
    }
  }

  var msg = {
    a: 'q' + this.type,
    id: this.id,
    c: this.collection,
    o: {},
    q: this.query,
  };

  if (this.docMode) {
    msg.o.m = this.docMode === 'sub' ? 'fetch' : this.docMode;
    // This should be omitted if empty, but whatever.
    msg.o.vs = collectionVersions;
  }
  if (this.backend != null) msg.o.b = this.backend;
  if (this.poll !== undefined) msg.o.p = this.poll;

  this.connection.send(msg);
};

// Make a list of documents from the list of server-returned data objects
Query.prototype._dataToDocs = function(data) {
  var results = [];
  var lastType;
  this.connection.bsStart();
  for (var i = 0; i < data.length; i++) {
    var docData = data[i];

    // Types are only put in for the first result in the set and every time the type changes in the list.
    if (docData.type) {
      lastType = docData.type;
    } else {
      docData.type = lastType;
    }

    var doc = this.connection.get(docData.c || this.collection, docData.d, docData);
    // Force the document to know its subscribed if we're in docmode:subscribe.
    if (this.docMode === 'sub') {
      doc.subscribe();
    }
    results.push(doc);
  }
  this.connection.bsEnd();
  return results;
};

// Destroy the query object. Any subsequent messages for the query will be
// ignored by the connection. You should unsubscribe from the query before
// destroying it.
Query.prototype.destroy = function() {
  if (this.connection.canSend && this.type === 'sub') {
    this.connection.send({a:'qunsub', id:this.id});
  }

  this.connection._destroyQuery(this);
};

Query.prototype._onConnectionStateChanged = function(state, reason) {
  if (this.connection.state === 'connecting') {
    this._execute();
  }
};

// Internal method called from connection to pass server messages to the query.
Query.prototype._onMessage = function(msg) {
  if ((msg.a === 'qfetch') !== (this.type === 'fetch')) {
    if (console) console.warn('Invalid message sent to query', msg, this);
    return;
  }

  if (msg.error) this.emit('error', msg.error);

  switch (msg.a) {
    case 'qfetch':
      var results = msg.data ? this._dataToDocs(msg.data) : undefined;
      if (this.callback) this.callback(msg.error, results, msg.extra);
      // Once a fetch query gets its data, it is destroyed.
      this.connection._destroyQuery(this);
      break;

    case 'q':
      // Query diff data (inserts and removes)
      if (msg.diff) {
        // We need to go through the list twice. First, we'll ingest all the
        // new documents and set them as subscribed.  After that we'll emit
        // events and actually update our list. This avoids race conditions
        // around setting documents to be subscribed & unsubscribing documents
        // in event callbacks.
        for (var i = 0; i < msg.diff.length; i++) {
          var d = msg.diff[i];
          if (d.type === 'insert') d.values = this._dataToDocs(d.values);
        }

        for (var i = 0; i < msg.diff.length; i++) {
          var d = msg.diff[i];
          switch (d.type) {
            case 'insert':
              var newDocs = d.values;
              Array.prototype.splice.apply(this.results, [d.index, 0].concat(newDocs));
              this.emit('insert', newDocs, d.index);
              break;
            case 'remove':
              var howMany = d.howMany || 1;
              var removed = this.results.splice(d.index, howMany);
              this.emit('remove', removed, d.index);
              break;
            case 'move':
              var howMany = d.howMany || 1;
              var docs = this.results.splice(d.from, howMany);
              Array.prototype.splice.apply(this.results, [d.to, 0].concat(docs));
              this.emit('move', docs, d.from, d.to);
              break;
          }
        }
      }

      if (msg.extra) {
        this.emit('extra', msg.extra);
      }
      break;
    case 'qsub':
      // This message replaces the entire result set with the set passed.
      if (!msg.error) {
        var previous = this.results;

        // Then add everything in the new result set.
        this.results = this.knownDocs = this._dataToDocs(msg.data);
        this.extra = msg.extra;

        this.ready = true;
        this.emit('change', this.results, previous);
      }
      if (this.callback) {
        this.callback(msg.error, this.results, this.extra);
        delete this.callback;
      }
      break;
  }
};

// Change the thing we're searching for. This isn't fully supported on the
// backend (it destroys the old query and makes a new one) - but its
// programatically useful and I might add backend support at some point.
Query.prototype.setQuery = function(q) {
  if (this.type !== 'sub') throw new Error('cannot change a fetch query');

  this.query = q;
  if (this.connection.canSend) {
    // There's no 'change' message to send to the server. Just resubscribe.
    this.connection.send({a:'qunsub', id:this.id});
    this._execute();
  }
};

var MicroEvent;
if (typeof require !== 'undefined') {
  MicroEvent = require('./microevent');
}

MicroEvent.mixin(Query);

})();
(function UMDish(name, context, definition) {  context[name] = definition.call(context);  if (typeof module !== "undefined" && module.exports) {    module.exports = context[name];  } else if (typeof define == "function" && define.amd) {    define(function reference() { return context[name]; });  }})("Primus", this, function Primus() {/*globals require, define */
'use strict';

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} once Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Holds the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  if (!this._events || !this._events[event]) return [];
  if (this._events[event].fn) return [this._events[event].fn];

  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
    ee[i] = this._events[event][i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  if (!this._events || !this._events[event]) return false;

  var listeners = this._events[event]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Functon} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
  if (!this._events || !this._events[event]) return this;

  var listeners = this._events[event]
    , events = [];

  if (fn) {
    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
      events.push(listeners);
    }
    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
        events.push(listeners[i]);
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[event] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[event];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[event];
  else this._events = {};

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

/**
 * Context assertion, ensure that some of our public Primus methods are called
 * with the correct context to ensure that
 *
 * @param {Primus} self The context of the function.
 * @param {String} method The method name.
 * @api private
 */
function context(self, method) {
  if (self instanceof Primus) return;

  var failure = new Error('Primus#'+ method + '\'s context should called with a Primus instance');

  if ('function' !== typeof self.listeners || !self.listeners('error').length) {
    throw failure;
  }

  self.emit('error', failure);
}

//
// Sets the default connection URL, it uses the default origin of the browser
// when supported but degrades for older browsers. In Node.js, we cannot guess
// where the user wants to connect to, so we just default to localhost.
//
var defaultUrl;

try {
  if (location.origin) {
    defaultUrl = location.origin;
  } else {
    defaultUrl = location.protocol +'//'+ location.hostname + (location.port ? ':'+ location.port : '');
  }
} catch (e) {
  defaultUrl = 'http://127.0.0.1';
}

/**
 * Primus in a real-time library agnostic framework for establishing real-time
 * connections with servers.
 *
 * Options:
 * - reconnect, configuration for the reconnect process.
 * - manual, don't automatically call `.open` to start the connection.
 * - websockets, force the use of WebSockets, even when you should avoid them.
 * - timeout, connect timeout, server didn't respond in a timely manner.
 * - ping, The heartbeat interval for sending a ping packet to the server.
 * - pong, The heartbeat timeout for receiving a response to the ping.
 * - network, Use network events as leading method for network connection drops.
 * - strategy, Reconnection strategies.
 * - transport, Transport options.
 * - url, uri, The URL to use connect with the server.
 *
 * @constructor
 * @param {String} url The URL of your server.
 * @param {Object} options The configuration.
 * @api public
 */
function Primus(url, options) {
  if (!(this instanceof Primus)) return new Primus(url, options);
  if ('function' !== typeof this.client) {
    var message = 'The client library has not been compiled correctly, ' +
      'see https://github.com/primus/primus#client-library for more details';
    return this.critical(new Error(message));
  }

  if ('object' === typeof url) {
    options = url;
    url = options.url || options.uri || defaultUrl;
  } else {
    options = options || {};
  }

  var primus = this;

  // The maximum number of messages that can be placed in queue.
  options.queueSize = 'queueSize' in options ? options.queueSize : Infinity;

  // Connection timeout duration.
  options.timeout = 'timeout' in options ? options.timeout : 10e3;

  // Stores the back off configuration.
  options.reconnect = 'reconnect' in options ? options.reconnect : {};

  // Heartbeat ping interval.
  options.ping = 'ping' in options ? options.ping : 25000;

  // Heartbeat pong response timeout.
  options.pong = 'pong' in options ? options.pong : 10e3;

  // Reconnect strategies.
  options.strategy = 'strategy' in options ? options.strategy : [];

  // Custom transport options.
  options.transport = 'transport' in options ? options.transport : {};

  primus.buffer = [];                           // Stores premature send data.
  primus.writable = true;                       // Silly stream compatibility.
  primus.readable = true;                       // Silly stream compatibility.
  primus.url = primus.parse(url || defaultUrl); // Parse the URL to a readable format.
  primus.readyState = Primus.CLOSED;            // The readyState of the connection.
  primus.options = options;                     // Reference to the supplied options.
  primus.timers = {};                           // Contains all our timers.
  primus.attempt = null;                        // Current back off attempt.
  primus.socket = null;                         // Reference to the internal connection.
  primus.latency = 0;                           // Latency between messages.
  primus.stamps = 0;                            // Counter to make timestamps unqiue.
  primus.disconnect = false;                    // Did we receive a disconnect packet?
  primus.transport = options.transport;         // Transport options.
  primus.transformers = {                       // Message transformers.
    outgoing: [],
    incoming: []
  };

  //
  // Parse the reconnection strategy. It can have the following strategies:
  //
  // - timeout: Reconnect when we have a network timeout.
  // - disconnect: Reconnect when we have an unexpected disconnect.
  // - online: Reconnect when we're back online.
  //
  if ('string' === typeof options.strategy) {
    options.strategy = options.strategy.split(/\s?\,\s?/g);
  }

  if (false === options.strategy) {
    //
    // Strategies are disabled, but we still need an empty array to join it in
    // to nothing.
    //
    options.strategy = [];
  } else if (!options.strategy.length) {
    options.strategy.push('disconnect', 'online');

    //
    // Timeout based reconnection should only be enabled conditionally. When
    // authorization is enabled it could trigger.
    //
    if (!this.authorization) options.strategy.push('timeout');
  }

  options.strategy = options.strategy.join(',').toLowerCase();

  //
  // Only initialise the EventEmitter interface if we're running in a plain
  // browser environment. The Stream interface is inherited differently when it
  // runs on browserify and on Node.js.
  //
  if (!Stream) EventEmitter.call(primus);

  //
  // Force the use of WebSockets, even when we've detected some potential
  // broken WebSocket implementation.
  //
  if ('websockets' in options) {
    primus.AVOID_WEBSOCKETS = !options.websockets;
  }

  //
  // Force or disable the use of NETWORK events as leading client side
  // disconnection detection.
  //
  if ('network' in options) {
    primus.NETWORK_EVENTS = options.network;
  }

  //
  // Check if the user wants to manually initialise a connection. If they don't,
  // we want to do it after a really small timeout so we give the users enough
  // time to listen for `error` events etc.
  //
  if (!options.manual) primus.timers.open = setTimeout(function open() {
    primus.clearTimeout('open').open();
  }, 0);

  primus.initialise(options);
}

/**
 * Simple require wrapper to make browserify, node and require.js play nice.
 *
 * @param {String} name The module to require.
 * @returns {Object|Undefined} The module that we required.
 * @api private
 */
Primus.require = function requires(name) {
  if ('function' !== typeof require) return undefined;

  return !('function' === typeof define && define.amd)
    ? require(name)
    : undefined;
};

//
// It's possible that we're running in Node.js or in a Node.js compatible
// environment such as browserify. In these cases we want to use some build in
// libraries to minimize our dependence on the DOM.
//
var Stream, parse;

try {
  Primus.Stream = Stream = Primus.require('stream');
  parse = Primus.require('url').parse;

  //
  // Normally inheritance is done in the same way as we do in our catch
  // statement. But due to changes to the EventEmitter interface in Node 0.10
  // this will trigger annoying memory leak warnings and other potential issues
  // outlined in the issue linked below.
  //
  // @see https://github.com/joyent/node/issues/4971
  //
  Primus.require('util').inherits(Primus, Stream);
} catch (e) {
  Primus.Stream = EventEmitter;
  Primus.prototype = new EventEmitter();

  //
  // In the browsers we can leverage the DOM to parse the URL for us. It will
  // automatically default to host of the current server when we supply it path
  // etc.
  //
  parse = function parse(url) {
    var a = document.createElement('a')
      , data = {}
      , key;

    a.href = url;

    //
    // Transform it from a readOnly object to a read/writable object so we can
    // change some parsed values. This is required if we ever want to override
    // a port number etc. (as browsers remove port 443 and 80 from the URL's).
    //
    for (key in a) {
      if ('string' === typeof a[key] || 'number' === typeof a[key]) {
        data[key] = a[key];
      }
    }

    //
    // We need to make sure that the URL is properly encoded because IE doesn't
    // do this automatically.
    //
    data.href = encodeURI(decodeURI(data.href));

    //
    // If we don't obtain a port number (e.g. when using zombie) then try
    // and guess at a value from the 'href' value.
    //
    if (!data.port) {
      var splits = (data.href || '').split('/');
      if (splits.length > 2) {
        var host = splits[2]
          , atSignIndex = host.lastIndexOf('@');

        if (~atSignIndex) host = host.slice(atSignIndex + 1);

        splits = host.split(':');
        if (splits.length === 2) data.port = splits[1];
      }
    }

    //
    // IE quirk: The `protocol` is parsed as ":" or "" when a protocol agnostic
    // URL is used. In this case we extract the value from the `href` value.
    //
    if (!data.protocol || ':' === data.protocol) {
      data.protocol = data.href.substr(0, data.href.indexOf(':') + 1);
    }

    //
    // Safari 5.1.7 (windows) quirk: When parsing a URL without a port number
    // the `port` in the data object will default to "0" instead of the expected
    // "". We're going to do an explicit check on "0" and force it to "".
    //
    if ('0' === data.port) data.port = '';

    //
    // Browsers do not parse authorization information, so we need to extract
    // that from the URL.
    //
    if (~data.href.indexOf('@') && !data.auth) {
      var start = data.protocol.length + 2;
      data.auth = data.href.slice(start, data.href.indexOf(data.pathname, start)).split('@')[0];
    }

    return data;
  };
}

/**
 * Primus readyStates, used internally to set the correct ready state.
 *
 * @type {Number}
 * @private
 */
Primus.OPENING = 1;   // We're opening the connection.
Primus.CLOSED  = 2;   // No active connection.
Primus.OPEN    = 3;   // The connection is open.

/**
 * Are we working with a potentially broken WebSockets implementation? This
 * boolean can be used by transformers to remove `WebSockets` from their
 * supported transports.
 *
 * @type {Boolean}
 * @private
 */
Primus.prototype.AVOID_WEBSOCKETS = false;

/**
 * Some browsers support registering emitting `online` and `offline` events when
 * the connection has been dropped on the client. We're going to detect it in
 * a simple `try {} catch (e) {}` statement so we don't have to do complicated
 * feature detection.
 *
 * @type {Boolean}
 * @private
 */
Primus.prototype.NETWORK_EVENTS = false;
Primus.prototype.online = true;

try {
  if (
       Primus.prototype.NETWORK_EVENTS = 'onLine' in navigator
    && (window.addEventListener || document.body.attachEvent)
  ) {
    if (!navigator.onLine) {
      Primus.prototype.online = false;
    }
  }
} catch (e) { }

/**
 * The Ark contains all our plugins definitions. It's namespaced by
 * name => plugin.
 *
 * @type {Object}
 * @private
 */
Primus.prototype.ark = {};

/**
 * Return the given plugin.
 *
 * @param {String} name The name of the plugin.
 * @returns {Object|undefined} The plugin or undefined.
 * @api public
 */
Primus.prototype.plugin = function plugin(name) {
  context(this, 'plugin');

  if (name) return this.ark[name];

  var plugins = {};

  for (name in this.ark) {
    plugins[name] = this.ark[name];
  }

  return plugins;
};

/**
 * Checks if the given event is an emitted event by Primus.
 *
 * @param {String} evt The event name.
 * @returns {Boolean} Indication of the event is reserved for internal use.
 * @api public
 */
Primus.prototype.reserved = function reserved(evt) {
  return (/^(incoming|outgoing)::/).test(evt)
  || evt in this.reserved.events;
};

/**
 * The actual events that are used by the client.
 *
 * @type {Object}
 * @public
 */
Primus.prototype.reserved.events = {
  readyStateChange: 1,
  reconnecting: 1,
  reconnected: 1,
  reconnect: 1,
  offline: 1,
  timeout: 1,
  online: 1,
  error: 1,
  close: 1,
  open: 1,
  data: 1,
  end: 1
};

/**
 * Initialise the Primus and setup all parsers and internal listeners.
 *
 * @param {Object} options The original options object.
 * @returns {Primus}
 * @api private
 */
Primus.prototype.initialise = function initialise(options) {
  var primus = this
    , start;

  primus.on('outgoing::open', function opening() {
    var readyState = primus.readyState;

    primus.readyState = Primus.OPENING;
    if (readyState !== primus.readyState) {
      primus.emit('readyStateChange', 'opening');
    }

    start = +new Date();
  });

  primus.on('incoming::open', function opened() {
    var readyState = primus.readyState
      , reconnect = primus.attempt;

    if (primus.attempt) primus.attempt = null;

    //
    // The connection has been openend so we should set our state to
    // (writ|read)able so our stream compatibility works as intended.
    //
    primus.writable = true;
    primus.readable = true;

    //
    // Make sure we are flagged as `online` as we've successfully opened the
    // connection.
    //
    if (!primus.online) {
      primus.online = true;
      primus.emit('online');
    }

    primus.readyState = Primus.OPEN;
    if (readyState !== primus.readyState) {
      primus.emit('readyStateChange', 'open');
    }

    primus.latency = +new Date() - start;

    primus.emit('open');
    if (reconnect) primus.emit('reconnected');

    primus.clearTimeout('ping', 'pong').heartbeat();

    if (primus.buffer.length) {
      var data = primus.buffer.slice()
        , length = data.length
        , i = 0;

      primus.buffer.length = 0;

      for (; i < length; i++) {
        primus._write(data[i]);
      }
    }
  });

  primus.on('incoming::pong', function pong(time) {
    primus.online = true;
    primus.clearTimeout('pong').heartbeat();

    primus.latency = (+new Date()) - time;
  });

  primus.on('incoming::error', function error(e) {
    var connect = primus.timers.connect
      , err = e;

    //
    // We're still doing a reconnect attempt, it could be that we failed to
    // connect because the server was down. Failing connect attempts should
    // always emit an `error` event instead of a `open` event.
    //
    if (primus.attempt) return primus.reconnect();

    //
    // When the error is not an Error instance we try to normalize it.
    //
    if ('string' === typeof e) {
      err = new Error(e);
    } else if (!(e instanceof Error) && 'object' === typeof e) {
      //
      // BrowserChannel and SockJS returns an object which contains some
      // details of the error. In order to have a proper error we "copy" the
      // details in an Error instance.
      //
      err = new Error(e.message || e.reason);
      for (var key in e) {
        if (e.hasOwnProperty(key)) err[key] = e[key];
      }
    }
    if (primus.listeners('error').length) primus.emit('error', err);

    //
    // We received an error while connecting, this most likely the result of an
    // unauthorized access to the server.
    //
    if (connect) {
      if (~primus.options.strategy.indexOf('timeout')) primus.reconnect();
      else primus.end();
    }
  });

  primus.on('incoming::data', function message(raw) {
    primus.decoder(raw, function decoding(err, data) {
      //
      // Do a "save" emit('error') when we fail to parse a message. We don't
      // want to throw here as listening to errors should be optional.
      //
      if (err) return primus.listeners('error').length && primus.emit('error', err);

      //
      // Handle all "primus::" prefixed protocol messages.
      //
      if (primus.protocol(data)) return;
      primus.transforms(primus, primus, 'incoming', data, raw);
    });
  });

  primus.on('incoming::end', function end() {
    var readyState = primus.readyState;

    //
    // This `end` started with the receiving of a primus::server::close packet
    // which indicated that the user/developer on the server closed the
    // connection and it was not a result of a network disruption. So we should
    // kill the connection without doing a reconnect.
    //
    if (primus.disconnect) {
      primus.disconnect = false;
      return primus.end();
    }

    //
    // Always set the readyState to closed, and if we're still connecting, close
    // the connection so we're sure that everything after this if statement block
    // is only executed because our readyState is set to `open`.
    //
    primus.readyState = Primus.CLOSED;
    if (readyState !== primus.readyState) {
      primus.emit('readyStateChange', 'end');
    }

    if (primus.timers.connect) primus.end();
    if (readyState !== Primus.OPEN) {
      return primus.attempt ? primus.reconnect() : false;
    }

    this.writable = false;
    this.readable = false;

    //
    // Clear all timers in case we're not going to reconnect.
    //
    for (var timeout in this.timers) {
      this.clearTimeout(timeout);
    }

    //
    // Fire the `close` event as an indication of connection disruption.
    // This is also fired by `primus#end` so it is emitted in all cases.
    //
    primus.emit('close');

    //
    // The disconnect was unintentional, probably because the server has
    // shutdown, so if the reconnection is enabled start a reconnect procedure.
    //
    if (~primus.options.strategy.indexOf('disconnect')) {
      return primus.reconnect();
    }

    primus.emit('outgoing::end');
    primus.emit('end');
  });

  //
  // Setup the real-time client.
  //
  primus.client();

  //
  // Process the potential plugins.
  //
  for (var plugin in primus.ark) {
    primus.ark[plugin].call(primus, primus, options);
  }

  //
  // NOTE: The following code is only required if we're supporting network
  // events as it requires access to browser globals.
  //
  if (!primus.NETWORK_EVENTS) return primus;

  /**
   * Handler for offline notifications.
   *
   * @api private
   */
  function offline() {
    if (!primus.online) return; // Already or still offline, bailout.

    primus.online = false;
    primus.emit('offline');
    primus.end();

    //
    // It is certainly possible that we're in a reconnection loop and that the
    // user goes offline. In this case we want to kill the existing attempt so
    // when the user goes online, it will attempt to reconnect freshly again.
    //
    primus.clearTimeout('reconnect');
    primus.attempt = null;
  }

  /**
   * Handler for online notifications.
   *
   * @api private
   */
  function online() {
    if (primus.online) return; // Already or still online, bailout

    primus.online = true;
    primus.emit('online');

    if (~primus.options.strategy.indexOf('online')) primus.reconnect();
  }

  if (window.addEventListener) {
    window.addEventListener('offline', offline, false);
    window.addEventListener('online', online, false);
  } else if (document.body.attachEvent){
    document.body.attachEvent('onoffline', offline);
    document.body.attachEvent('ononline', online);
  }

  return primus;
};

/**
 * Really dead simple protocol parser. We simply assume that every message that
 * is prefixed with `primus::` could be used as some sort of protocol definition
 * for Primus.
 *
 * @param {String} msg The data.
 * @returns {Boolean} Is a protocol message.
 * @api private
 */
Primus.prototype.protocol = function protocol(msg) {
  if (
       'string' !== typeof msg
    || msg.indexOf('primus::') !== 0
  ) return false;

  var last = msg.indexOf(':', 8)
    , value = msg.slice(last + 2);

  switch (msg.slice(8,  last)) {
    case 'pong':
      this.emit('incoming::pong', value);
    break;

    case 'server':
      //
      // The server is closing the connection, forcefully disconnect so we don't
      // reconnect again.
      //
      if ('close' === value) {
        this.disconnect = true;
      }
    break;

    case 'id':
      this.emit('incoming::id', value);
    break;

    //
    // Unknown protocol, somebody is probably sending `primus::` prefixed
    // messages.
    //
    default:
      return false;
  }

  return true;
};

/**
 * Execute the set of message transformers from Primus on the incoming or
 * outgoing message.
 * This function and it's content should be in sync with Spark#transforms in
 * spark.js.
 *
 * @param {Primus} primus Reference to the Primus instance with message transformers.
 * @param {Spark|Primus} connection Connection that receives or sends data.
 * @param {String} type The type of message, 'incoming' or 'outgoing'.
 * @param {Mixed} data The data to send or that has been received.
 * @param {String} raw The raw encoded data.
 * @returns {Primus}
 * @api public
 */
Primus.prototype.transforms = function transforms(primus, connection, type, data, raw) {
  var packet = { data: data }
    , fns = primus.transformers[type];

  //
  // Iterate in series over the message transformers so we can allow optional
  // asynchronous execution of message transformers which could for example
  // retrieve additional data from the server, do extra decoding or even
  // message validation.
  //
  (function transform(index, done) {
    var transformer = fns[index++];

    if (!transformer) return done();

    if (1 === transformer.length) {
      if (false === transformer.call(connection, packet)) {
        //
        // When false is returned by an incoming transformer it means that's
        // being handled by the transformer and we should not emit the `data`
        // event.
        //
        return;
      }

      return transform(index, done);
    }

    transformer.call(connection, packet, function finished(err, arg) {
      if (err) return connection.emit('error', err);
      if (false === arg) return;

      transform(index, done);
    });
  }(0, function done() {
    //
    // We always emit 2 arguments for the data event, the first argument is the
    // parsed data and the second argument is the raw string that we received.
    // This allows you, for example, to do some validation on the parsed data
    // and then save the raw string in your database without the stringify
    // overhead.
    //
    if ('incoming' === type) return connection.emit('data', packet.data, raw);

    connection._write(packet.data);
  }));

  return this;
};

/**
 * Retrieve the current id from the server.
 *
 * @param {Function} fn Callback function.
 * @returns {Primus}
 * @api public
 */
Primus.prototype.id = function id(fn) {
  if (this.socket && this.socket.id) return fn(this.socket.id);

  this._write('primus::id::');
  return this.once('incoming::id', fn);
};

/**
 * Establish a connection with the server. When this function is called we
 * assume that we don't have any open connections. If you do call it when you
 * have a connection open, it could cause duplicate connections.
 *
 * @returns {Primus}
 * @api public
 */
Primus.prototype.open = function open() {
  context(this, 'open');

  //
  // Only start a `connection timeout` procedure if we're not reconnecting as
  // that shouldn't count as an initial connection. This should be started
  // before the connection is opened to capture failing connections and kill the
  // timeout.
  //
  if (!this.attempt && this.options.timeout) this.timeout();

  this.emit('outgoing::open');
  return this;
};

/**
 * Send a new message.
 *
 * @param {Mixed} data The data that needs to be written.
 * @returns {Boolean} Always returns true as we don't support back pressure.
 * @api public
 */
Primus.prototype.write = function write(data) {
  context(this, 'write');
  this.transforms(this, this, 'outgoing', data);

  return true;
};

/**
 * The actual message writer.
 *
 * @param {Mixed} data The message that needs to be written.
 * @returns {Boolean} Successful write to the underlaying transport.
 * @api private
 */
Primus.prototype._write = function write(data) {
  var primus = this;

  //
  // The connection is closed, normally this would already be done in the
  // `spark.write` method, but as `_write` is used internally, we should also
  // add the same check here to prevent potential crashes by writing to a dead
  // socket.
  //
  if (Primus.OPEN !== primus.readyState) {
    //
    // If the buffer is at capacity, remove the first item.
    //
    if (this.buffer.length === this.options.queueSize) {
      this.buffer.splice(0, 1);
    }

    this.buffer.push(data);
    return false;
  }

  primus.encoder(data, function encoded(err, packet) {
    //
    // Do a "save" emit('error') when we fail to parse a message. We don't
    // want to throw here as listening to errors should be optional.
    //
    if (err) return primus.listeners('error').length && primus.emit('error', err);
    primus.emit('outgoing::data', packet);
  });

  return true;
};

/**
 * Send a new heartbeat over the connection to ensure that we're still
 * connected and our internet connection didn't drop. We cannot use server side
 * heartbeats for this unfortunately.
 *
 * @returns {Primus}
 * @api private
 */
Primus.prototype.heartbeat = function heartbeat() {
  var primus = this;

  if (!primus.options.ping) return primus;

  /**
   * Exterminate the connection as we've timed out.
   *
   * @api private
   */
  function pong() {
    primus.clearTimeout('pong');

    //
    // The network events already captured the offline event.
    //
    if (!primus.online) return;

    primus.online = false;
    primus.emit('offline');
    primus.emit('incoming::end');
  }

  /**
   * We should send a ping message to the server.
   *
   * @api private
   */
  function ping() {
    var value = +new Date();

    primus.clearTimeout('ping')._write('primus::ping::'+ value);
    primus.emit('outgoing::ping', value);
    primus.timers.pong = setTimeout(pong, primus.options.pong);
  }

  primus.timers.ping = setTimeout(ping, primus.options.ping);
  return this;
};

/**
 * Start a connection timeout.
 *
 * @returns {Primus}
 * @api private
 */
Primus.prototype.timeout = function timeout() {
  var primus = this;

  /**
   * Remove all references to the timeout listener as we've received an event
   * that can be used to determine state.
   *
   * @api private
   */
  function remove() {
    primus.removeListener('error', remove)
          .removeListener('open', remove)
          .removeListener('end', remove)
          .clearTimeout('connect');
  }

  primus.timers.connect = setTimeout(function expired() {
    remove(); // Clean up old references.

    if (primus.readyState === Primus.OPEN || primus.attempt) return;

    primus.emit('timeout');

    //
    // We failed to connect to the server.
    //
    if (~primus.options.strategy.indexOf('timeout')) primus.reconnect();
    else primus.end();
  }, primus.options.timeout);

  return primus.on('error', remove)
    .on('open', remove)
    .on('end', remove);
};

/**
 * Properly clean up all `setTimeout` references.
 *
 * @param {String} ..args.. The names of the timeout's we need clear.
 * @returns {Primus}
 * @api private
 */
Primus.prototype.clearTimeout = function clear() {
  for (var args = arguments, i = 0, l = args.length; i < l; i++) {
    if (this.timers[args[i]]) clearTimeout(this.timers[args[i]]);
    delete this.timers[args[i]];
  }

  return this;
};

/**
 * Exponential back off algorithm for retry operations. It uses an randomized
 * retry so we don't DDOS our server when it goes down under pressure.
 *
 * @param {Function} callback Callback to be called after the timeout.
 * @param {Object} opts Options for configuring the timeout.
 * @returns {Primus}
 * @api private
 */
Primus.prototype.backoff = function backoff(callback, opts) {
  opts = opts || {};

  var primus = this;

  //
  // Bailout when we already have a backoff process running. We shouldn't call
  // the callback then as it might cause an unexpected `end` event as another
  // reconnect process is already running.
  //
  if (opts.backoff) return primus;

  opts.maxDelay = 'maxDelay' in opts ? opts.maxDelay : Infinity;  // Maximum delay.
  opts.minDelay = 'minDelay' in opts ? opts.minDelay : 500;       // Minimum delay.
  opts.retries = 'retries' in opts ? opts.retries : 10;           // Allowed retries.
  opts.attempt = (+opts.attempt || 0) + 1;                        // Current attempt.
  opts.factor = 'factor' in opts ? opts.factor : 2;               // Back off factor.

  //
  // Bailout if we are about to make to much attempts. Please note that we use
  // `>` because we already incremented the value above.
  //
  if (opts.attempt > opts.retries) {
    callback(new Error('Unable to retry'), opts);
    return primus;
  }

  //
  // Prevent duplicate back off attempts using the same options object.
  //
  opts.backoff = true;

  //
  // Calculate the timeout, but make it randomly so we don't retry connections
  // at the same interval and defeat the purpose. This exponential back off is
  // based on the work of:
  //
  // http://dthain.blogspot.nl/2009/02/exponential-backoff-in-distributed.html
  //
  opts.timeout = opts.attempt !== 1
    ? Math.min(Math.round(
        (Math.random() + 1) * opts.minDelay * Math.pow(opts.factor, opts.attempt)
      ), opts.maxDelay)
    : opts.minDelay;

  primus.timers.reconnect = setTimeout(function delay() {
    opts.backoff = false;
    primus.clearTimeout('reconnect');

    callback(undefined, opts);
  }, opts.timeout);

  //
  // Emit a `reconnecting` event with current reconnect options. This allows
  // them to update the UI and provide their users with feedback.
  //
  primus.emit('reconnecting', opts);

  return primus;
};

/**
 * Start a new reconnect procedure.
 *
 * @returns {Primus}
 * @api private
 */
Primus.prototype.reconnect = function reconnect() {
  var primus = this;

  //
  // Try to re-use the existing attempt.
  //
  primus.attempt = primus.attempt || primus.clone(primus.options.reconnect);

  primus.backoff(function attempt(fail, backoff) {
    if (fail) {
      primus.attempt = null;
      return primus.emit('end');
    }

    //
    // Try to re-open the connection again.
    //
    primus.emit('reconnect', backoff);
    primus.emit('outgoing::reconnect');
  }, primus.attempt);

  return primus;
};

/**
 * Close the connection completely.
 *
 * @param {Mixed} data last packet of data.
 * @returns {Primus}
 * @api public
 */
Primus.prototype.end = function end(data) {
  context(this, 'end');

  if (this.readyState === Primus.CLOSED && !this.timers.connect) {
    //
    // If we are reconnecting stop the reconnection procedure.
    //
    if (this.timers.reconnect) {
      this.clearTimeout('reconnect');
      this.attempt = null;
      this.emit('end');
    }

    return this;
  }

  if (data !== undefined) this.write(data);

  this.writable = false;
  this.readable = false;

  var readyState = this.readyState;
  this.readyState = Primus.CLOSED;

  if (readyState !== this.readyState) {
    this.emit('readyStateChange', 'end');
  }

  for (var timeout in this.timers) {
    this.clearTimeout(timeout);
  }

  this.emit('outgoing::end');
  this.emit('close');
  this.emit('end');

  return this;
};

/**
 * Create a shallow clone of a given object.
 *
 * @param {Object} obj The object that needs to be cloned.
 * @returns {Object} Copy.
 * @api private
 */
Primus.prototype.clone = function clone(obj) {
  return this.merge({}, obj);
};

/**
 * Merge different objects in to one target object.
 *
 * @param {Object} target The object where everything should be merged in.
 * @returns {Object} Original target with all merged objects.
 * @api private
 */
Primus.prototype.merge = function merge(target) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0, l = args.length, key, obj; i < l; i++) {
    obj = args[i];

    for (key in obj) {
      if (obj.hasOwnProperty(key)) target[key] = obj[key];
    }
  }

  return target;
};

/**
 * Parse the connection string.
 *
 * @type {Function}
 * @param {String} url Connection URL.
 * @returns {Object} Parsed connection.
 * @api private
 */
Primus.prototype.parse = parse;

/**
 * Parse a query string.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object} Parsed query string.
 * @api private
 */
Primus.prototype.querystring = function querystring(query) {
  var parser = /([^=?&]+)=([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
  );

  return result;
};

/**
 * Transform a query string object back in to string equiv.
 *
 * @param {Object} obj The query string object.
 * @returns {String}
 * @api private
 */
Primus.prototype.querystringify = function querystringify(obj) {
  var pairs = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.join('&');
};

/**
 * Generates a connection URI.
 *
 * @param {String} protocol The protocol that should used to crate the URI.
 * @returns {String|options} The URL.
 * @api private
 */
Primus.prototype.uri = function uri(options) {
  var url = this.url
    , server = []
    , qsa = false;

  //
  // Query strings are only allowed when we've received clearance for it.
  //
  if (options.query) qsa = true;

  options = options || {};
  options.protocol = 'protocol' in options ? options.protocol : 'http';
  options.query = url.search && 'query' in options ? (url.search.charAt(0) === '?' ? url.search.slice(1) : url.search) : false;
  options.secure = 'secure' in options ? options.secure : (url.protocol === 'https:' || url.protocol === 'wss:');
  options.auth = 'auth' in options ? options.auth : url.auth;
  options.pathname = 'pathname' in options ? options.pathname : this.pathname.slice(1);
  options.port = 'port' in options ? +options.port : +url.port || (options.secure ? 443 : 80);
  options.host = 'host' in options ? options.host : url.hostname || url.host.replace(':'+ url.port, '');

  //
  // Allow transformation of the options before we construct a full URL from it.
  //
  this.emit('outgoing::url', options);

  //
  // `url.host` might be undefined (e.g. when using zombie) so we use the
  // hostname and port defined above.
  //
  var host = (443 !== options.port && 80 !== options.port)
    ? options.host +':'+ options.port
    : options.host;

  //
  // We need to make sure that we create a unique connection URL every time to
  // prevent bfcache back forward cache of becoming an issue. We're doing this
  // by forcing an cache busting query string in to the URL.
  //
  var querystring = this.querystring(options.query || '');
  querystring._primuscb = +new Date() +'-'+ this.stamps++;
  options.query = this.querystringify(querystring);

  //
  // Automatically suffix the protocol so we can supply `ws` and `http` and it gets
  // transformed correctly.
  //
  server.push(options.secure ? options.protocol +'s:' : options.protocol +':', '');

  if (options.auth) server.push(options.auth +'@'+ host);
  else server.push(host);

  //
  // Pathnames are optional as some Transformers would just use the pathname
  // directly.
  //
  if (options.pathname) server.push(options.pathname);

  //
  // Optionally add a search query, again, not supported by all Transformers.
  // SockJS is known to throw errors when a query string is included.
  //
  if (qsa) server.push('?'+ options.query);
  else delete options.query;

  if (options.object) return options;
  return server.join('/');
};

/**
 * Simple emit wrapper that returns a function that emits an event once it's
 * called. This makes it easier for transports to emit specific events. The
 * scope of this function is limited as it will only emit one single argument.
 *
 * @param {String} event Name of the event that we should emit.
 * @param {Function} parser Argument parser.
 * @returns {Function} The wrapped function that will emit events when called.
 * @api public
 */
Primus.prototype.emits = function emits(event, parser) {
  var primus = this;

  return function emit(arg) {
    var data = parser ? parser.apply(primus, arguments) : arg;

    //
    // Timeout is required to prevent crashes on WebSockets connections on
    // mobile devices. We need to handle these edge cases in our own library
    // as we cannot be certain that all frameworks fix these issues.
    //
    setTimeout(function timeout() {
      primus.emit('incoming::'+ event, data);
    }, 0);
  };
};

/**
 * Register a new message transformer. This allows you to easily manipulate incoming
 * and outgoing data which is particularity handy for plugins that want to send
 * meta data together with the messages.
 *
 * @param {String} type Incoming or outgoing
 * @param {Function} fn A new message transformer.
 * @returns {Primus}
 * @api public
 */
Primus.prototype.transform = function transform(type, fn) {
  context(this, 'transform');

  if (!(type in this.transformers)) {
    return this.critical(new Error('Invalid transformer type'));
  }

  this.transformers[type].push(fn);
  return this;
};

/**
 * A critical error has occurred, if we have an `error` listener, emit it there.
 * If not, throw it, so we get a stack trace + proper error message.
 *
 * @param {Error} err The critical error.
 * @returns {Primus}
 * @api private
 */
Primus.prototype.critical = function critical(err) {
  if (this.listeners('error').length) {
    this.emit('error', err);
    return this;
  }

  throw err;
};

/**
 * Syntax sugar, adopt a Socket.IO like API.
 *
 * @param {String} url The URL we want to connect to.
 * @param {Object} options Connection options.
 * @returns {Primus}
 * @api public
 */
Primus.connect = function connect(url, options) {
  return new Primus(url, options);
};

//
// Expose the EventEmitter so it can be re-used by wrapping libraries we're also
// exposing the Stream interface.
//
Primus.EventEmitter = EventEmitter;

//
// These libraries are automatically are automatically inserted at the
// server-side using the Primus#library method.
//
Primus.prototype.client = function client() {
  var primus = this
    , socket;

  //
  // Select an available WebSocket factory.
  //
  var Factory = (function factory() {
    if ('undefined' !== typeof WebSocket) return WebSocket;
    if ('undefined' !== typeof MozWebSocket) return MozWebSocket;

    try { return Primus.require('ws'); }
    catch (e) {}

    return undefined;
  })();

  if (!Factory) return primus.critical(new Error(
    'Missing required `ws` module. Please run `npm install --save ws`'
  ));


  //
  // Connect to the given URL.
  //
  primus.on('outgoing::open', function opening() {
    primus.emit('outgoing::end');

    //
    // FireFox will throw an error when we try to establish a connection from
    // a secure page to an unsecured WebSocket connection. This is inconsistent
    // behaviour between different browsers. This should ideally be solved in
    // Primus when we connect.
    //
    try {
      var prot = primus.url.protocol === 'ws+unix:' ? 'ws+unix' : 'ws'
        , qsa = prot === 'ws';

      //
      // Only allow primus.transport object in Node.js, it will throw in
      // browsers with a TypeError if we supply to much arguments.
      //
      if (Factory.length === 3) {
        primus.socket = socket = new Factory(
          primus.uri({ protocol: prot, query: qsa }),   // URL
          [],                                           // Sub protocols
          primus.transport                              // options.
        );
      } else {
        primus.socket = socket = new Factory(primus.uri({
          protocol: prot,
          query: qsa
        }));
      }
    } catch (e) { return primus.emit('error', e); }

    //
    // Setup the Event handlers.
    //
    socket.binaryType = 'arraybuffer';
    socket.onopen = primus.emits('open');
    socket.onerror = primus.emits('error');
    socket.onclose = primus.emits('end');
    socket.onmessage = primus.emits('data', function parse(evt) {
      return evt.data;
    });
  });

  //
  // We need to write a new message to the socket.
  //
  primus.on('outgoing::data', function write(message) {
    if (!socket || socket.readyState !== Factory.OPEN) return;

    try { socket.send(message); }
    catch (e) { primus.emit('incoming::error', e); }
  });

  //
  // Attempt to reconnect the socket.
  //
  primus.on('outgoing::reconnect', function reconnect() {
    primus.emit('outgoing::open');
  });

  //
  // We need to close the socket.
  //
  primus.on('outgoing::end', function close() {
    if (!socket) return;

    socket.onerror = socket.onopen = socket.onclose = socket.onmessage = function () {};
    socket.close();
    socket = null;
  });
};
Primus.prototype.authorization = false;
Primus.prototype.pathname = "/primus";
Primus.prototype.encoder = function encoder(data, fn) {
  var err;

  try { data = JSON.stringify(data); }
  catch (e) { err = e; }

  fn(err, data);
};
Primus.prototype.decoder = function decoder(data, fn) {
  var err;

  if ('string' !== typeof data) return fn(err, data);

  try { data = JSON.parse(data); }
  catch (e) { err = e; }

  fn(err, data);
};
Primus.prototype.version = "2.4.12";

//
// Hack 1: \u2028 and \u2029 are allowed inside string in JSON. But JavaScript
// defines them as newline separators. Because no literal newlines are allowed
// in a string this causes a ParseError. We work around this issue by replacing
// these characters with a properly escaped version for those chars. This can
// cause errors with JSONP requests or if the string is just evaluated.
//
// This could have been solved by replacing the data during the "outgoing::data"
// event. But as it affects the JSON encoding in general I've opted for a global
// patch instead so all JSON.stringify operations are save.
//
if (
    'object' === typeof JSON
 && 'function' === typeof JSON.stringify
 && JSON.stringify(['\u2028\u2029']) === '["\u2028\u2029"]'
) {
  JSON.stringify = function replace(stringify) {
    var u2028 = /\u2028/g
      , u2029 = /\u2029/g;

    return function patched(value, replacer, spaces) {
      var result = stringify.call(this, value, replacer, spaces);

      //
      // Replace the bad chars.
      //
      if (result) {
        if (~result.indexOf('\u2028')) result = result.replace(u2028, '\\u2028');
        if (~result.indexOf('\u2029')) result = result.replace(u2029, '\\u2029');
      }

      return result;
    };
  }(JSON.stringify);
}

if (
     'undefined' !== typeof document
  && 'undefined' !== typeof navigator
) {
  //
  // Hack 2: If you press ESC in FireFox it will close all active connections.
  // Normally this makes sense, when your page is still loading. But versions
  // before FireFox 22 will close all connections including WebSocket connections
  // after page load. One way to prevent this is to do a `preventDefault()` and
  // cancel the operation before it bubbles up to the browsers default handler.
  // It needs to be added as `keydown` event, if it's added keyup it will not be
  // able to prevent the connection from being closed.
  //
  if (document.addEventListener) {
    document.addEventListener('keydown', function keydown(e) {
      if (e.keyCode !== 27 || !e.preventDefault) return;

      e.preventDefault();
    }, false);
  }

  //
  // Hack 3: This is a Mac/Apple bug only, when you're behind a reverse proxy or
  // have you network settings set to `automatic proxy discovery` the safari
  // browser will crash when the WebSocket constructor is initialised. There is
  // no way to detect the usage of these proxies available in JavaScript so we
  // need to do some nasty browser sniffing. This only affects Safari versions
  // lower then 5.1.4
  //
  var ua = (navigator.userAgent || '').toLowerCase()
    , parsed = ua.match(/.+(?:rv|it|ra|ie)[\/: ](\d+)\.(\d+)(?:\.(\d+))?/) || []
    , version = +[parsed[1], parsed[2]].join('.');

  if (
       !~ua.indexOf('chrome')
    && ~ua.indexOf('safari')
    && version < 534.54
  ) {
    Primus.prototype.AVOID_WEBSOCKETS = true;
  }
}
 return Primus; });