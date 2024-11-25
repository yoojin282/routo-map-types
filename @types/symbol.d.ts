/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export interface Symbol {
    anchor?: routo.maps.Point | null;

    fillColor?: string | null;

    fillOpacity?: number | null;

    labelOrigin?: routo.maps.Point | null;

    path: routo.maps.SymbolPath | string;

    rotation?: number | null;

    scale?: number | null;

    strokeColor?: string | null;

    strokeOpacity?: number | null;

    strokeWeight?: number | null;
  }

  export enum SymbolPath {
    BACKWARD_CLOSED_ARROW = 0.0,

    BACKWARD_OPEN_ARROW = 1.0,

    CIRCLE = 2.0,

    FORWARD_CLOSED_ARROW = 3.0,

    FORWARD_OPEN_ARROW = 4.0,
  }
}
