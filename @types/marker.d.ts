/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Marker extends routo.maps.MVCObject {
    constructor(opts?: routo.maps.MarkerOptions | null);

    getClickable(): boolean;

    getCursor(): string | null | undefined;

    getDraggable(): boolean;

    getIcon(): string | routo.maps.Icon | null | routo.maps.Symbol | undefined;

    getLabel(): routo.maps.MarkerLabel | null | string | undefined;

    getMap(): routo.maps.Map | null;

    getOpacity(): number | null | undefined;

    getPosition(): routo.maps.LatLng | null | undefined;

    getShape(): routo.maps.MarkerShape | null | undefined;

    getTitle(): string | null | undefined;

    getVisible(): boolean;

    getZIndex(): number | null | undefined;

    setClickable(flag: boolean): void;

    setCursor(cursor?: string | null): void;

    setDraggable(flag: boolean | null): void;

    setIcon(icon?: string | routo.maps.Icon | null | routo.maps.Symbol): void;

    setLabel(label?: string | routo.maps.MarkerLabel | null): void;

    setMap(map: routo.maps.Map | null): void;

    setOpacity(opacity?: number | null): void;

    setOptions(options: routo.maps.MarkerOptions | null): void;

    setPosition(
      latlng?: routo.maps.LatLng | null | routo.maps.LatLngLiteral
    ): void;

    setShape(shape?: routo.maps.MarkerShape | null): void;

    setTitle(title?: string | null): void;

    setVisible(visible: boolean): void;

    setZIndex(zIndex?: number | null): void;

    static readonly MAX_ZINDEX: number;
  }

  export interface MarkerLabel {
    className?: string;

    color?: string;

    fontFamily?: string;

    fontSize?: string;

    fontWeight?: string;

    text: string;
  }

  export interface MarkerOptions {
    anchorPoint?: routo.maps.Point | null;

    clickable?: boolean | null;

    collisionBehavior?: string | null;

    crossOnDrag?: boolean | null;

    cursor?: string | null;

    draggable?: boolean | null;

    icon?: string | routo.maps.Icon | null | routo.maps.Symbol;

    label?: string | routo.maps.MarkerLabel | null;

    map?: routo.maps.Map | null;

    opacity?: number | null;

    optimized?: boolean | null;

    position?: routo.maps.LatLng | null | routo.maps.LatLngLiteral;

    shape?: routo.maps.MarkerShape | null;

    title?: string | null;

    visible?: boolean | null;

    zIndex?: number | null;
  }

  export interface MarkerShape {
    coords: number[] | null;

    type: string;
  }
}
