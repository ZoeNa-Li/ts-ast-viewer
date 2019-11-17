export default {
    fileName: `/lib.dom.iterable.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\n/// <reference path="lib.dom.d.ts" />\ninterface DOMTokenList{[Symbol.iterator]():IterableIterator<string>;}interface FormData{entries():IterableIterator<[string,string|File]>;keys():IterableIterator<string>;values():IterableIterator<string|File>;[Symbol.iterator]():IterableIterator<string|File>;}interface Headers{[Symbol.iterator]():IterableIterator<[string,string]>;entries():IterableIterator<[string,string]>;keys():IterableIterator<string>;values():IterableIterator<string>;}interface NodeList{entries():IterableIterator<[number,Node]>;forEach(callbackfn:(value:Node,index:number,listObj:NodeList)=>void,thisArg?:any):void;keys():IterableIterator<number>;values():IterableIterator<Node>;[Symbol.iterator]():IterableIterator<Node>;}interface NodeListOf<TNode extends Node>{entries():IterableIterator<[number,TNode]>;forEach(callbackfn:(value:TNode,index:number,listObj:NodeListOf<TNode>)=>void,thisArg?:any):void;keys():IterableIterator<number>;values():IterableIterator<TNode>;[Symbol.iterator]():IterableIterator<TNode>;}interface URLSearchParams{entries():IterableIterator<[string,string]>;keys():IterableIterator<string>;values():IterableIterator<string>;[Symbol.iterator]():IterableIterator<[string,string]>;}`
};