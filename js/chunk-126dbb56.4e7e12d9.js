(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-126dbb56"],{"1b62":function(t,a,s){"use strict";s.d(a,"a",(function(){return e}));const e={computed:{tabLength(){return document.getElementsByClassName("van-tab").length}},methods:{onSwipeLeft(){this.active<this.tabLength-1&&(this.active=this.active+1)},onSwipeRight(){this.active>0&&(this.active=this.tabLength-2)}}}},"56b0":function(t,a,s){},"7d0b":function(t,a,s){t.exports=s.p+"img/photo.742131a1.png"},"974d":function(t,a,s){"use strict";s("56b0")},de79:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("v-touch",{staticClass:"touch",on:{swipeleft:function(a){return t.onSwipeLeft()},swiperight:function(a){return t.onSwipeRight()}}},[a("navbar",{staticClass:"top-nav",attrs:{isBack:!1}},[a("van-tabs",{attrs:{slot:"title"},slot:"title",model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[a("van-tab",{attrs:{title:"推荐"}}),a("van-tab",{attrs:{title:"附近"}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("van-icon",{attrs:{name:"filter-o"}})],1)],1),0==t.active?a("div",[a("div",{staticClass:"user"},t._l(t.userList,(function(s,e){return a("div",{key:e,staticClass:"user-item",on:{click:function(a){return t.toUser(s)}}},[a("div",{staticClass:"user-item-info"},[a("p",[t._v(t._s(s.name))]),a("p",[t._v(t._s(s.distance)+"km / "+t._s(s.address))])])])})),0)]):t._e(),1==t.active?a("div",[a("ComList",{staticClass:"nearbyList",attrs:{list:t.list,isClick:!0},on:{handleClick:t.toUser}})],1):t._e()],1)],1)},i=[],n=(s("14d9"),s("1b62")),c=s("7d0b"),r=s.n(c),o={mixins:[n["a"]],data(){return{active:"0",list:[{name:"Williason Davwew",message:"24岁 / 爱美食 / 爱旅行",distance:"3.3"},{name:"Williason Davwew",message:"24岁 / 爱美食 / 爱旅行",distance:"3.3"},{name:"Williason Davwew",message:"24岁 / 爱美食 / 爱旅行",distance:"3.3"},{name:"Williason Davwew",message:"24岁 / 爱美食 / 爱旅行",distance:"3.3"}],userList:[{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"苟富贵",distance:1.8,address:"北京",age:23,total:7880},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868},{src:r.a,name:"廖东",distance:1.4,address:"上海",age:24,total:9868}]}},methods:{toUser(t){this.$router.push({name:"user",params:t})}}},d=o,l=(s("974d"),s("2877")),u=Object(l["a"])(d,e,i,!1,null,"67a5161c",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-126dbb56.4e7e12d9.js.map