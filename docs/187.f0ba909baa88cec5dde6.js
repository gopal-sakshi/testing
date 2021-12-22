"use strict";(self.webpackChunktesting=self.webpackChunktesting||[]).push([[187],{7187:(N,g,r)=>{r.r(g),r.d(g,{ServicesDIModule:()=>O});var p=r(8583),l=r(8926),t=r(3018),u=r(5618);const h=function(){return["di"]},y=function(){return["no-di"]},q=function(){return["di-inject"]},_=function(){return["token-types"]};let A=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-di"]],decls:9,vars:8,consts:[["fxLayout","column","fxLayoutGap","20px",1,"services-di-home"],[3,"routerLink"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"a",1),t._uU(2," DI "),t.qZA(),t.TgZ(3,"a",1),t._uU(4," No DI "),t.qZA(),t.TgZ(5,"a",1),t._uU(6," DI with @Inject, not @Injectable"),t.qZA(),t.TgZ(7,"a",1),t._uU(8," Token Types"),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.DdM(4,h)),t.xp6(2),t.Q6J("routerLink",t.DdM(5,y)),t.xp6(2),t.Q6J("routerLink",t.DdM(6,q)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,_)))},directives:[u.xw,u.SQ,l.yS],styles:[".services-di-home[_ngcontent-%COMP%]{color:#0ff}"]}),e})();class Z{constructor(){}log(n){console.log(n),console.log(n)}}class i{constructor(n,o,c){this.productID=n,this.name=o,this.price=c}}let T=(()=>{class e{constructor(o){this.LoggerTwiceServiceInstance=o}getProducts(){let o;return this.LoggerTwiceServiceInstance.log("getProducts called"),o=[new i(1,"Memory Card",500),new i(1,"Pen Drive",750),new i(1,"Power Bank",100)],this.LoggerTwiceServiceInstance.log(o),o}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(Z))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();function P(e,n){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.qZA()),2&e){const o=n.$implicit;t.xp6(2),t.Oqu(o.productID),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.price)}}let D=(()=>{class e{constructor(o){this.productTwiceService=o}getProducts(){this.products=this.productTwiceService.getProducts()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-di-inject"]],features:[t._Bn([T])],decls:15,vars:1,consts:[[1,"container"],["type","button",3,"click"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return c.getProducts()}),t._uU(2,"Get Products DI"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"table",3),t.TgZ(5,"thead"),t.TgZ(6,"tr"),t.TgZ(7,"th"),t._uU(8,"ID"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Price"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"tbody"),t.YNc(14,P,7,3,"tr",4),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(14),t.Q6J("ngForOf",c.products))},directives:[p.sg],styles:[""]}),e})(),m=(()=>{class e{constructor(){}log(o){console.log(o)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),s=(()=>{class e{constructor(o){this.loggerService=o}getProducts(){let o;return this.loggerService.log("getProducts called"),o=[new i(1,"Memory Card",500),new i(1,"Pen Drive",750),new i(1,"Power Bank",100)],this.loggerService.log(o),o}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(m))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();function S(e,n){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.qZA()),2&e){const o=n.$implicit;t.xp6(2),t.Oqu(o.productID),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.price)}}let k=(()=>{class e{constructor(o){this.productService=o}getProducts(){this.products=this.productService.getProducts()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-di"]],features:[t._Bn([s])],decls:15,vars:1,consts:[[1,"container"],["type","button",3,"click"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return c.getProducts()}),t._uU(2,"Get Products DI"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"table",3),t.TgZ(5,"thead"),t.TgZ(6,"tr"),t.TgZ(7,"th"),t._uU(8,"ID"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Price"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"tbody"),t.YNc(14,S,7,3,"tr",4),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(14),t.Q6J("ngForOf",c.products))},directives:[p.sg],styles:[""]}),e})();function F(e,n){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.qZA()),2&e){const o=n.$implicit;t.xp6(2),t.Oqu(o.productID),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.price)}}let C=(()=>{class e{constructor(){this.blah="random argument to prevent errors",this.productService=new s(this.blah)}getProducts(){this.products=this.productService.getProducts()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-no-di"]],decls:15,vars:1,consts:[[1,"container"],["type","button",3,"click"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return c.getProducts()}),t._uU(2,"Get Products"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"table",3),t.TgZ(5,"thead"),t.TgZ(6,"tr"),t.TgZ(7,"th"),t._uU(8,"ID"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Price"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"tbody"),t.YNc(14,F,7,3,"tr",4),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(14),t.Q6J("ngForOf",c.products))},directives:[p.sg],styles:[""]}),e})();const a=new t.OlP(""),f=(Object.freeze({someURL:"https://en.wikipedia.org/wiki/Elephant",IsDevleomentMode:!0}),function(e){console.log("doubleFunction says hello ",e+" "+e)}),v=function(e){console.log("'thriceFunction says hello ",e+" "+e+" "+e)};function I(e){return"Sakshi"===e?f(e):v(e)}function U(e){return"Sakshi"===e?f(e):v(e)}const w=[{path:"",component:A},{path:"no-di",component:C},{path:"di",component:k},{path:"di-inject",component:D},{path:"token-types",component:(()=>{class e{constructor(o,c,d,x,L){this.productServiceClassToken=o,this.someString=c,this.anotherString=d,this.localFactoryFunction=x,this.localFactoryFunctionUseValue=L}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(s),t.Y36("someStringToken"),t.Y36(a),t.Y36("myFunction"),t.Y36("myFunctionUseValue"))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-token-types"]],features:[t._Bn([s])],decls:7,vars:2,consts:[["fxLayout","column","fxLayoutGap","10px"]],template:function(o,c){1&o&&(t.TgZ(0,"p"),t._uU(1,"token-types works!"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div"),t._uU(6),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Oqu(c.someString),t.xp6(2),t.Oqu(c.anotherString))},directives:[u.xw,u.SQ],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(w)],l.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[m,Z,{provide:"someStringToken",useValue:"GopAL"},{provide:a,useValue:"Sakshii"},{provide:"myFunction",useFactory:U,deps:[a]},{provide:"myFunctionUseValue",useValue:I("Sakshi")}],imports:[[p.ez,b,u.ae]]}),e})()}}]);