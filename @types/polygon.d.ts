/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Polygon extends routo.maps.MVCObject {
    constructor(opts?: routo.maps.PolygonOptions | null);

    getBounds(): LatLngBounds;

    getDraggable(): boolean;

    getEditable(): boolean;

    getMap(): routo.maps.Map | null;

    getPath(): routo.maps.MVCArray<routo.maps.LatLng>;

    getPaths(): routo.maps.MVCArray<routo.maps.MVCArray<routo.maps.LatLng>>;

    getVisible(): boolean;

    setDraggable(draggable: boolean): void;

    setEditable(editable: boolean): void;

    setMap(map: routo.maps.Map | null): void;
    setOptions(options: routo.maps.PolygonOptions | null): void;

    // setPath(
    //   path:
    //     | routo.maps.MVCArray<routo.maps.LatLng>
    //     | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
    // ): void;

    setPaths(paths: routo.maps.MVCArray<any> | any[]): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  export interface PolygonOptions {
    clickable?: boolean | null;

    draggable?: boolean | null;

    editable?: boolean | null;

    fillColor?: string | null;

    fillOpacity?: number | null;

    geodesic?: boolean | null;

    map?: routo.maps.Map | null;

    paths?: routo.maps.MVCArray<any> | any[] | null;

    strokeColor?: string | null;

    strokeOpacity?: number | null;

    strokePosition?: routo.maps.StrokePosition | null;

    strokeWeight?: number | null;

    visible?: boolean | null;

    zIndex?: number | null;
  }
}
