/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Polyline extends routo.maps.MVCObject {
    constructor(opts?: routo.maps.PolylineOptions | null);

    getDraggable(): boolean;

    getEditable(): boolean;

    getMap(): routo.maps.Map | null;

    getPath(): routo.maps.MVCArray<routo.maps.LatLng>;

    getVisible(): boolean;

    setDraggable(draggable: boolean): void;

    setEditable(editable: boolean): void;

    setMap(map: routo.maps.Map | null): void;
    setOptions(options: routo.maps.PolylineOptions | null): void;

    setPath(
      path:
        | routo.maps.MVCArray<routo.maps.LatLng>
        | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
    ): void;

    setVisible(visible: boolean): void;
  }

  export interface PolylineOptions {
    clickable?: boolean | null;

    draggable?: boolean | null;

    editable?: boolean | null;

    geodesic?: boolean | null;

    icons?: routo.maps.IconSequence[] | null;

    map?: routo.maps.Map | null;

    path?:
      | routo.maps.MVCArray<routo.maps.LatLng>
      | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
      | null;

    strokeColor?: string | null;

    strokeOpacity?: number | null;

    strokeWeight?: number | null;

    visible?: boolean | null;

    zIndex?: number | null;
  }
}
