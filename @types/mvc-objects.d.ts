/// <reference path="index.d.ts" />

declare namespace routo.maps {
  export interface MapsEventListener {
    // instance: Object;
    // eventName: string;
    // handler: () => void;
    remove: () => void;
  }

  export class MVCObject {
    addListener(eventName: string, handler: Function): MapsEventListener;

    bindTo(
      key: string,
      target: MVCObject,
      targetKey?: string | null,
      noNotify?: boolean
    ): void;

    get(key: string): any;

    notify(key: string): void;

    set(key: string, value: unknown): void;

    setValues(values?: object | null): void;

    unbind(key: string): void;

    unbindAll(): void;
  }

  export class MVCArray<T = any> extends MVCObject {
    constructor(array?: T[] | null);

    clear(): void;

    forEach(callback: (a: T, b: number) => void): void;

    getArray(): T[];

    getAt(i: number): T;

    getLength(): number;

    insertAt(i: number, elem: T): void;

    pop(): T;

    push(elem: T): number;

    removeAt(i: number): T;

    setAt(i: number, elem: T): void;
  }
}
