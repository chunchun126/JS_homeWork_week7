(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d3e462a"],{"057f":function(t,e,o){var a=o("fc6a"),n=o("241c").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?r(t):n(a(t))}},1799:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",{attrs:{"aria-label":"Page navigation"}},[o("ul",{staticClass:"pagination pagination-sm justify-content-end"},[o("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[o("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,a){return o("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===e}},[o("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])})),o("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[o("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},n=[],s={data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{getPages:function(t){this.$emit("emit-pages",t)}}},i=s,r=o("2877"),c=Object(r["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports},"4de4":function(t,e,o){"use strict";var a=o("23e7"),n=o("b727").filter,s=o("1dde"),i=o("ae40"),r=s("filter"),c=i("filter");a({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}},"746f":function(t,e,o){var a=o("428f"),n=o("5135"),s=o("e538"),i=o("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:s.f(t)})}},"8c58":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),o("div",{staticClass:"container-fluid mt-4"},[o("div",{staticClass:"text-right mb-3"},[o("button",{staticClass:"btn btn-outline-success btn-sm",attrs:{type:"button"},on:{click:function(e){return t.openCouponModal("new")}}},[o("i",{staticClass:"fas fa-plus mr-2"}),t._v("新增優惠券 ")])]),o("table",{staticClass:"table table-striped table-hover"},[t._m(0),o("tbody",t._l(t.coupons,(function(e,a){return o("tr",{key:e.id},[o("td",[t._v(t._s(a+1))]),o("td",[t._v(t._s(e.title))]),o("td",[t._v(t._s(e.percent))]),o("td",[t._v(t._s(e.deadline.datetime))]),o("td",[o("div",{staticClass:"custom-control custom-switch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.enabled,expression:"item.enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.enabled)?t._i(e.enabled,null)>-1:e.enabled},on:{change:[function(o){var a=e.enabled,n=o.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&t.$set(e,"enabled",a.concat([i])):r>-1&&t.$set(e,"enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(e,"enabled",s)},function(o){return t.updateCouponsEnabled(e)}]}}),o("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[e.enabled?o("strong",{staticClass:"text-success"},[t._v("啟用中")]):o("span",{staticClass:"text-muted"},[t._v("尚未啟用")])])])]),o("td",{staticClass:"text-center"},[o("div",{staticClass:"btn-group"},[o("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(o){return t.openCouponModal("edit",e)}}},[o("i",{staticClass:"fas fa-pen"})]),o("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.openCouponModal("dele",e)}}},[o("i",{staticClass:"fas fa-trash-alt"})])])])])})),0)]),o("pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getCoupons}}),o("coupon-modal",{ref:"CouponModal",attrs:{"temp-coupon":t.tempCoupon},on:{"emit-update-coupon":t.updateCoupons}}),o("dele-coupon-modal",{ref:"DeleCouponModal",attrs:{"temp-coupon":t.tempCoupon},on:{"dele-coupon":t.deleCoupon}})],1)],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("#")]),o("th",{attrs:{scope:"col"}},[t._v("名稱")]),o("th",{attrs:{scope:"col"}},[t._v("折扣百分比")]),o("th",{attrs:{scope:"col"}},[t._v("到期日")]),o("th",{attrs:{scope:"col"}},[t._v("是否啟用")]),o("th",{attrs:{scope:"col"}},[t._v("編輯")])])])}],s=(o("99af"),o("5530")),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(0),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("標題")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"coupon_code"}},[t._v("優惠碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{id:"coupon_code",type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"due_date"}},[t._v("到期日")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{id:"due_date",type:"date"},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"due_time"}},[t._v("到期時間")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.due_time,expression:"due_time"}],staticClass:"form-control",attrs:{id:"due_time",type:"time",step:"1"},domProps:{value:t.due_time},on:{input:function(e){e.target.composing||(t.due_time=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"price"}},[t._v("折扣百分比")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入折扣數量"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.enabled,expression:"tempCoupon.enabled"}],staticClass:"form-check-input",attrs:{id:"enabled",type:"checkbox"},domProps:{value:t.tempCoupon.enabled,checked:Array.isArray(t.tempCoupon.enabled)?t._i(t.tempCoupon.enabled,t.tempCoupon.enabled)>-1:t.tempCoupon.enabled},on:{change:function(e){var o=t.tempCoupon.enabled,a=e.target,n=!!a.checked;if(Array.isArray(o)){var s=t.tempCoupon.enabled,i=t._i(o,s);a.checked?i<0&&t.$set(t.tempCoupon,"enabled",o.concat([s])):i>-1&&t.$set(t.tempCoupon,"enabled",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.tempCoupon,"enabled",n)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"enabled"}},[t._v("是否啟用")])])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 關閉 ")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v(" 確定 ")])])])])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(" 建立優惠券 ")]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],c={data:function(){return{due_date:"",due_time:""}},props:["tempCoupon"],methods:{updateCoupon:function(){var t="".concat(this.due_date," ").concat(this.due_time);this.$emit("emit-update-coupon",t),console.log("內元件",t)}}},l=c,u=o("2877"),d=Object(u["a"])(l,i,r,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal fade",attrs:{id:"deleCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content border-0"},[t._m(0),o("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),o("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 優惠券 "),o("br"),o("small",[t._v("(刪除後將無法恢復)")]),t._v("。 ")]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleCoupon}},[t._v("確認刪除")])])])])])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header bg-danger text-white"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[o("span",[t._v("刪除優惠卷")])]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],b={data:function(){return{}},props:["tempCoupon"],methods:{deleCoupon:function(){this.$emit("dele-coupon")}}},v=b,g=Object(u["a"])(v,f,m,!1,null,null,null),h=g.exports,C=o("1799"),_={name:"Coupons",components:{CouponModal:p,DeleCouponModal:h,Pagination:C["a"]},props:["token"],data:function(){return{isLoading:!1,isNew:!1,coupons:{},newDeadline:"",pagination:{},tempCoupon:{title:"",code:"",percent:80,enabled:!1,deadline_at:""}}},created:function(){this.getCoupons()},methods:{getCoupons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/coupons?page=").concat(e);this.$http.get(o).then((function(e){t.isLoading=!1,console.log("取優惠券 成功",e),t.coupons=e.data.data,t.pagination=e.data.meta.pagination})).catch((function(e){t.isLoading=!1,console.log("取優惠券 失敗",e.response)}))},openCouponModal:function(t,e){switch(t){case"new":this.tempCoupon={},this.isNew=!0,$("#couponModal").modal("show");break;case"edit":this.tempCoupon=Object(s["a"])({},e),$("#couponModal").modal("show");break;case"dele":this.tempCoupon=Object(s["a"])({},e),$("#deleCouponModal").modal("show");break;default:break}},updateCoupons:function(t){var e=this;this.isLoading=!0;var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/coupon"),a="post";this.isNew||(o="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/coupon/").concat(this.tempCoupon.id),a="patch"),this.tempCoupon.deadline_at=t,console.log("外元件",t),this.$http[a](o,this.tempCoupon).then((function(t){e.isLoading=!1,$("#couponModal").modal("hide"),console.log("更新優惠券 成功",t),e.getCoupons()})).catch((function(t){e.isLoading=!1,$("#couponModal").modal("hide"),console.log("更新優惠券 失敗",t.response)}))},updateCouponsEnabled:function(t){var e=this;this.isLoading=!0;var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/coupon/").concat(t.id);this.$http.patch(o,t).then((function(t){e.isLoading=!1,console.log("更新優惠券 成功",t)})).catch((function(t){e.isLoading=!1,console.log("更新優惠券 失敗",t.response)}))},deleCoupon:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/coupon/").concat(this.tempCoupon.id);this.$http.delete(e).then((function(e){t.isLoading=!1,$("#deleCouponModal").modal("hide"),console.log("刪除優惠券 成功",e),t.getCoupons()})).catch((function(e){t.isLoading=!1,$("#deleCouponModal").modal("hide"),console.log("刪除優惠券 失敗",e.response)}))}}},y=_,w=Object(u["a"])(y,a,n,!1,null,null,null);e["default"]=w.exports},a4d3:function(t,e,o){"use strict";var a=o("23e7"),n=o("da84"),s=o("d066"),i=o("c430"),r=o("83ab"),c=o("4930"),l=o("fdbf"),u=o("d039"),d=o("5135"),p=o("e8b5"),f=o("861d"),m=o("825a"),b=o("7b0b"),v=o("fc6a"),g=o("c04e"),h=o("5c6c"),C=o("7c73"),_=o("df75"),y=o("241c"),w=o("057f"),O=o("7418"),k=o("06cf"),x=o("9bf2"),P=o("d1e7"),j=o("9112"),$=o("6eeb"),M=o("5692"),L=o("f772"),S=o("d012"),N=o("90e3"),E=o("b622"),D=o("e538"),A=o("746f"),J=o("d44e"),F=o("69f3"),T=o("b727").forEach,I=L("hidden"),Q="Symbol",W="prototype",q=E("toPrimitive"),z=F.set,B=F.getterFor(Q),G=Object[W],H=n.Symbol,K=s("JSON","stringify"),R=k.f,U=x.f,V=w.f,X=P.f,Y=M("symbols"),Z=M("op-symbols"),tt=M("string-to-symbol-registry"),et=M("symbol-to-string-registry"),ot=M("wks"),at=n.QObject,nt=!at||!at[W]||!at[W].findChild,st=r&&u((function(){return 7!=C(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,o){var a=R(G,e);a&&delete G[e],U(t,e,o),a&&t!==G&&U(G,e,a)}:U,it=function(t,e){var o=Y[t]=C(H[W]);return z(o,{type:Q,tag:t,description:e}),r||(o.description=e),o},rt=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,o){t===G&&ct(Z,e,o),m(t);var a=g(e,!0);return m(o),d(Y,a)?(o.enumerable?(d(t,I)&&t[I][a]&&(t[I][a]=!1),o=C(o,{enumerable:h(0,!1)})):(d(t,I)||U(t,I,h(1,{})),t[I][a]=!0),st(t,a,o)):U(t,a,o)},lt=function(t,e){m(t);var o=v(e),a=_(o).concat(mt(o));return T(a,(function(e){r&&!dt.call(o,e)||ct(t,e,o[e])})),t},ut=function(t,e){return void 0===e?C(t):lt(C(t),e)},dt=function(t){var e=g(t,!0),o=X.call(this,e);return!(this===G&&d(Y,e)&&!d(Z,e))&&(!(o||!d(this,e)||!d(Y,e)||d(this,I)&&this[I][e])||o)},pt=function(t,e){var o=v(t),a=g(e,!0);if(o!==G||!d(Y,a)||d(Z,a)){var n=R(o,a);return!n||!d(Y,a)||d(o,I)&&o[I][a]||(n.enumerable=!0),n}},ft=function(t){var e=V(v(t)),o=[];return T(e,(function(t){d(Y,t)||d(S,t)||o.push(t)})),o},mt=function(t){var e=t===G,o=V(e?Z:v(t)),a=[];return T(o,(function(t){!d(Y,t)||e&&!d(G,t)||a.push(Y[t])})),a};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),o=function(t){this===G&&o.call(Z,t),d(this,I)&&d(this[I],e)&&(this[I][e]=!1),st(this,e,h(1,t))};return r&&nt&&st(G,e,{configurable:!0,set:o}),it(e,t)},$(H[W],"toString",(function(){return B(this).tag})),$(H,"withoutSetter",(function(t){return it(N(t),t)})),P.f=dt,x.f=ct,k.f=pt,y.f=w.f=ft,O.f=mt,D.f=function(t){return it(E(t),t)},r&&(U(H[W],"description",{configurable:!0,get:function(){return B(this).description}}),i||$(G,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),T(_(ot),(function(t){A(t)})),a({target:Q,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var o=H(e);return tt[e]=o,et[o]=e,o},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!r},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:pt}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),a({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(b(t))}}),K){var bt=!c||u((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));a({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,o){var a,n=[t],s=1;while(arguments.length>s)n.push(arguments[s++]);if(a=e,(f(e)||void 0!==t)&&!rt(t))return p(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!rt(e))return e}),n[1]=e,K.apply(null,n)}})}H[W][q]||j(H[W],q,H[W].valueOf),J(H,Q),S[I]=!0},dbb4:function(t,e,o){var a=o("23e7"),n=o("83ab"),s=o("56ef"),i=o("fc6a"),r=o("06cf"),c=o("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,o,a=i(t),n=r.f,l=s(a),u={},d=0;while(l.length>d)o=n(a,e=l[d++]),void 0!==o&&c(u,e,o);return u}})},e439:function(t,e,o){var a=o("23e7"),n=o("d039"),s=o("fc6a"),i=o("06cf").f,r=o("83ab"),c=n((function(){i(1)})),l=!r||c;a({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},e538:function(t,e,o){var a=o("b622");e.f=a}}]);
//# sourceMappingURL=chunk-2d3e462a.64bc94a0.js.map