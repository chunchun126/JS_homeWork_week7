(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04602510"],{4510:function(t,s,e){"use strict";var a=e("55f0"),o=e.n(a);o.a},"55f0":function(t,s,e){},aa92:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),e("div",{staticClass:"container"},[e("form",{staticClass:"formLogin needs-validation",attrs:{novalidate:""},on:{submit:function(s){return s.preventDefault(),t.logIn(s)}}},[e("h1",{staticClass:"loginTitle h2 text-center mb-3"},[t._v("請先登入")]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"InputEmail1",placeholder:"Email address",required:""},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v("請輸入信箱")])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"InputPassword1",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v("請輸入密碼")])]),e("button",{staticClass:"btn btn-dark btn-block mb-3",attrs:{type:"submit"}},[t._v("登入")])])])],1)},o=[],i=(e("99af"),{data:function(){return{user:{email:"",password:""},isLoading:!1}},methods:{logIn:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/auth/login");this.$http.post(s,this.user).then((function(s){t.$bus.$emit("message:push","登入成功","success"),t.isLoading=!1;var e=s.data.expired,a=s.data.token;document.cookie="myToken=".concat(a,";expires=").concat(new Date(1e3*e),";"),console.log("寫入 token ".concat(a)),t.$router.push("/admin/products")})).catch((function(s){t.isLoading=!1,console.log(s.response),t.$router.push("/login")}))}}}),n=i,r=(e("4510"),e("2877")),c=Object(r["a"])(n,a,o,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-04602510.6ba0656e.js.map