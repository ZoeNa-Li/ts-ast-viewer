export default {
    fileName: `/lib.dom.iterable.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\ninterface AudioParamMapextends ReadonlyMap<string ,AudioParam>{}interface AudioTrackList{[Symbol.iterator]():IterableIterator<AudioTrack>;}interface CSSRuleList{[Symbol.iterator]():IterableIterator<CSSRule>;}interface CSSStyleDeclaration{[Symbol.iterator]():IterableIterator<string >;}interface ClientRectList{[Symbol.iterator]():IterableIterator<ClientRect>;}interface DOMRectList{[Symbol.iterator]():IterableIterator<DOMRect>;}interface DOMStringList{[Symbol.iterator]():IterableIterator<string >;}interface DOMTokenList{[Symbol.iterator]():IterableIterator<string >;entries():IterableIterator<[number ,string ]>;keys():IterableIterator<number >;values():IterableIterator<string >;}interface DataTransferItemList{[Symbol.iterator]():IterableIterator<DataTransferItem>;}interface FileList{[Symbol.iterator]():IterableIterator<File>;}interface FormData{[Symbol.iterator]():IterableIterator<[string ,FormDataEntryValue]>;/**
};