export default {
    fileName: `/lib.es2015.iterable.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\n/// <reference path="lib.es2015.symbol.d.ts" />\ninterface SymbolConstructor{readonly iterator:symbol;}interface IteratorResult<T>{done:boolean;value:T;}interface Iterator<T>{next(value?:any):IteratorResult<T>;return?(value?:any):IteratorResult<T>;throw?(e?:any):IteratorResult<T>;}interface Iterable<T>{[Symbol.iterator]():Iterator<T>;}interface IterableIterator<T>extends Iterator<T>{[Symbol.iterator]():IterableIterator<T>;}interface Array<T>{[Symbol.iterator]():IterableIterator<T>;entries():IterableIterator<[number,T]>;keys():IterableIterator<number>;values():IterableIterator<T>;}interface ArrayConstructor{from<T,U=T>(iterable:Iterable<T>,mapfn?:(v:T,k:number)=>U,thisArg?:any):U[];}interface ReadonlyArray<T>{[Symbol.iterator]():IterableIterator<T>;entries():IterableIterator<[number,T]>;keys():IterableIterator<number>;values():IterableIterator<T>;}interface IArguments{[Symbol.iterator]():IterableIterator<any>;}interface Map<K,V>{[Symbol.iterator]():IterableIterator<[K,V]>;entries():IterableIterator<[K,V]>;keys():IterableIterator<K>;values():IterableIterator<V>;}interface ReadonlyMap<K,V>{[Symbol.iterator]():IterableIterator<[K,V]>;entries():IterableIterator<[K,V]>;keys():IterableIterator<K>;values():IterableIterator<V>;}interface MapConstructor{new<K,V>(iterable:Iterable<[K,V]>):Map<K,V>;}interface WeakMap<K extends object,V>{}interface WeakMapConstructor{new<K extends object,V>(iterable:Iterable<[K,V]>):WeakMap<K,V>;}interface Set<T>{[Symbol.iterator]():IterableIterator<T>;entries():IterableIterator<[T,T]>;keys():IterableIterator<T>;values():IterableIterator<T>;}interface ReadonlySet<T>{[Symbol.iterator]():IterableIterator<T>;entries():IterableIterator<[T,T]>;keys():IterableIterator<T>;values():IterableIterator<T>;}interface SetConstructor{new<T>(iterable:Iterable<T>):Set<T>;}interface WeakSet<T>{}interface WeakSetConstructor{new<T extends object>(iterable:Iterable<T>):WeakSet<T>;}interface Promise<T>{}interface PromiseConstructor{all<TAll>(values:Iterable<TAll|PromiseLike<TAll>>):Promise<TAll[]>;race<T>(values:Iterable<T|PromiseLike<T>>):Promise<T>;}declare namespace Reflect{function enumerate(target:object):IterableIterator<any>;}interface String{[Symbol.iterator]():IterableIterator<string>;}interface Int8Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Int8ArrayConstructor{new(elements:Iterable<number>):Int8Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Int8Array;}interface Uint8Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Uint8ArrayConstructor{new(elements:Iterable<number>):Uint8Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Uint8Array;}interface Uint8ClampedArray{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Uint8ClampedArrayConstructor{new(elements:Iterable<number>):Uint8ClampedArray;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Uint8ClampedArray;}interface Int16Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Int16ArrayConstructor{new(elements:Iterable<number>):Int16Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Int16Array;}interface Uint16Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Uint16ArrayConstructor{new(elements:Iterable<number>):Uint16Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Uint16Array;}interface Int32Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Int32ArrayConstructor{new(elements:Iterable<number>):Int32Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Int32Array;}interface Uint32Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Uint32ArrayConstructor{new(elements:Iterable<number>):Uint32Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Uint32Array;}interface Float32Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Float32ArrayConstructor{new(elements:Iterable<number>):Float32Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Float32Array;}interface Float64Array{[Symbol.iterator]():IterableIterator<number>;entries():IterableIterator<[number,number]>;keys():IterableIterator<number>;values():IterableIterator<number>;}interface Float64ArrayConstructor{new(elements:Iterable<number>):Float64Array;from(arrayLike:Iterable<number>,mapfn?:(v:number,k:number)=>number,thisArg?:any):Float64Array;}`
};