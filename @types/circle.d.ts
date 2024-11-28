/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Circle extends routo.maps.MVCObject {
    constructor(
      circleOrCircleOptions?:
        | routo.maps.Circle
        | null
        | routo.maps.CircleLiteral
        | routo.maps.CircleOptions
    );

    getBounds(): routo.maps.LatLngBounds;
    getCenter(): routo.maps.LatLng;
    getDraggable(): boolean;
    getEditable(): boolean;
    getMap(): routo.maps.Map | null;
    getRadius(): number;

    setCenter(center: routo.maps.LatLng | routo.maps.LatLngLiteral): void;
    setClickable(clickable: boolean): void;
    setDraggable(draggable: boolean): void;
    setEditable(editable: boolean): void;
    setMap(map: routo.maps.Map | null): void;
    setOptions(options: routo.maps.CircleOptions | null): void;
    setRadius(radius: number): void;
    setZIndex(zIndex: number): void;
  }
  /**
   * Object literal which represents a circle.
   */
  export interface CircleLiteral extends routo.maps.CircleOptions {
    /**
     * The center of the Circle.
     */
    center: routo.maps.LatLng | routo.maps.LatLngLiteral;
    /**
     * The radius in meters on the Earth&#39;s surface.
     */
    radius: number;
  }
  /**
   * CircleOptions object used to define the properties that can be set on a
   * Circle.
   */
  export interface CircleOptions {
    center?: routo.maps.LatLng | routo.maps.LatLngLiteral | null;
    clickable?: boolean | null;
    draggable?: boolean | null;
    editable?: boolean | null;
    fillColor?: string | null;
    fillOpacity?: number | null;
    map?: routo.maps.Map | null;
    radius?: number | null;
    strokeColor?: string | null;
    strokeOpacity?: number | null;
    strokePosition?: routo.maps.StrokePosition | null;
    strokeWeight?: number | null;
    visible?: boolean | null;
    zIndex?: number | null;
  }
}
