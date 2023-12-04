"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7663],{77663:function(e,t,n){n.r(t),n.d(t,{fcl:function(){return c}});var r={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},o={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},u={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},a={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},i=/[+\-*&^%:=<>!|\/]/;function tokenBase(e,t){var n=e.next();if(/[\d\.]/.test(n))return"."==n?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==n?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==n||"("==n){if(e.eat("*"))return t.tokenize=tokenComment,tokenComment(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(i.test(n))return e.eatWhile(i),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var c=e.current().toLowerCase();return r.propertyIsEnumerable(c)||o.propertyIsEnumerable(c)||u.propertyIsEnumerable(c)?"keyword":a.propertyIsEnumerable(c)?"atom":"variable"}function tokenComment(e,t){for(var n,r=!1;n=e.next();){if(("/"==n||")"==n)&&r){t.tokenize=tokenBase;break}r="*"==n}return"comment"}function Context(e,t,n,r,o){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=o}function pushContext(e,t,n){return e.context=new Context(e.indented,t,n,null,e.context)}function popContext(e){if(e.context.prev)return"end_block"==e.context.type&&(e.indented=e.context.indented),e.context=e.context.prev}let c={name:"fcl",startState:function(e){return{tokenize:null,context:new Context(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;var r=(t.tokenize||tokenBase)(e,t);if("comment"==r)return r;null==n.align&&(n.align=!0);var a=e.current().toLowerCase();return o.propertyIsEnumerable(a)?pushContext(t,e.column(),"end_block"):u.propertyIsEnumerable(a)&&popContext(t),t.startOfLine=!1,r},indent:function(e,t,n){if(e.tokenize!=tokenBase&&null!=e.tokenize)return 0;var r=e.context,o=u.propertyIsEnumerable(t);return r.align?r.column+(o?0:1):r.indented+(o?0:n.unit)},languageData:{commentTokens:{line:"//",block:{open:"(*",close:"*)"}}}}}}]);