export default {
    fileName: `/lib.es2015.core.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\ndeclare type PropertyKey=string|number|symbol;interface Array<T>{find<S extends T>(predicate:(this:void,value:T,index:number,obj:T[])=>value is S,thisArg?:any):S|undefined;find(predicate:(value:T,index:number,obj:T[])=>boolean,thisArg?:any):T|undefined;findIndex(predicate:(value:T,index:number,obj:T[])=>boolean,thisArg?:any):number;fill(value:T,start?:number,end?:number):this;copyWithin(target:number,start:number,end?:number):this;}interface ArrayConstructor{from<T>(arrayLike:ArrayLike<T>):T[];from<T,U>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>U,thisArg?:any):U[];of<T>(...items:T[]):T[];}interface DateConstructor{new(value:Date):Date;}interface Function{readonly name:string;}interface Math{clz32(x:number):number;imul(x:number,y:number):number;sign(x:number):number;log10(x:number):number;log2(x:number):number;log1p(x:number):number;expm1(x:number):number;cosh(x:number):number;sinh(x:number):number;tanh(x:number):number;acosh(x:number):number;asinh(x:number):number;atanh(x:number):number;hypot(...values:number[]):number;trunc(x:number):number;fround(x:number):number;cbrt(x:number):number;}interface NumberConstructor{readonly EPSILON:number;isFinite(number:number):boolean;isInteger(number:number):boolean;isNaN(number:number):boolean;isSafeInteger(number:number):boolean;readonly MAX_SAFE_INTEGER:number;readonly MIN_SAFE_INTEGER:number;parseFloat(string:string):number;parseInt(string:string,radix?:number):number;}interface Object{hasOwnProperty(v:PropertyKey):boolean;propertyIsEnumerable(v:PropertyKey):boolean;}interface ObjectConstructor{assign<T,U>(target:T,source:U):T&U;assign<T,U,V>(target:T,source1:U,source2:V):T&U&V;assign<T,U,V,W>(target:T,source1:U,source2:V,source3:W):T&U&V&W;assign(target:object,...sources:any[]):any;getOwnPropertySymbols(o:any):symbol[];is(value1:any,value2:any):boolean;setPrototypeOf(o:any,proto:object|null):any;getOwnPropertyDescriptor(o:any,propertyKey:PropertyKey):PropertyDescriptor|undefined;defineProperty(o:any,propertyKey:PropertyKey,attributes:PropertyDescriptor):any;}interface ReadonlyArray<T>{find<S extends T>(predicate:(this:void,value:T,index:number,obj:ReadonlyArray<T>)=>value is S,thisArg?:any):S|undefined;find(predicate:(value:T,index:number,obj:ReadonlyArray<T>)=>boolean,thisArg?:any):T|undefined;findIndex(predicate:(value:T,index:number,obj:ReadonlyArray<T>)=>boolean,thisArg?:any):number;}interface RegExp{readonly flags:string;readonly sticky:boolean;readonly unicode:boolean;}interface RegExpConstructor{new(pattern:RegExp,flags?:string):RegExp;(pattern:RegExp,flags?:string):RegExp;}interface String{codePointAt(pos:number):number|undefined;includes(searchString:string,position?:number):boolean;endsWith(searchString:string,endPosition?:number):boolean;normalize(form:"NFC"|"NFD"|"NFKC"|"NFKD"):string;normalize(form?:string):string;repeat(count:number):string;startsWith(searchString:string,position?:number):boolean;anchor(name:string):string;big():string;blink():string;bold():string;fixed():string;fontcolor(color:string):string;fontsize(size:number):string;fontsize(size:string):string;italics():string;link(url:string):string;small():string;strike():string;sub():string;sup():string;}interface StringConstructor{fromCodePoint(...codePoints:number[]):string;raw(template:TemplateStringsArray,...substitutions:any[]):string;}`
};