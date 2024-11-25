/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class InfoWindow extends routo.maps.MVCObject {
    constructor(opts?: routo.maps.InfoWindowOptions | null);

    close(): void;

    focus(): void;
    getContent(): string | Element | null | Text | undefined;
    getHeaderContent(): string | Element | null | Text | undefined;
    getHeaderDisabled(): boolean | undefined;
    getPosition(): routo.maps.LatLng | null | undefined;
    getZIndex(): number;

    isOpen: boolean;

    open(
      options?: routo.maps.InfoWindowOpenOptions | null | routo.maps.Map,
      anchor?: routo.maps.MVCObject | null
    ): void;

    setContent(content?: string | Element | null | Text): void;

    setHeaderContent(headerContent?: string | Element | null | Text): void;

    setHeaderDisabled(headerDisabled?: boolean | null): void;
    setOptions(options?: routo.maps.InfoWindowOptions | null): void;

    setPosition(
      position?: routo.maps.LatLng | null | routo.maps.LatLngLiteral
    ): void;

    setZIndex(zIndex: number): void;
  }

  export interface InfoWindowOpenOptions {
    anchor?: routo.maps.MVCObject | null;

    map?: routo.maps.Map | null;

    shouldFocus?: boolean | null;
  }

  export interface InfoWindowOptions {
    ariaLabel?: string | null;

    content?: string | Element | Text | null;

    disableAutoPan?: boolean | null;

    headerContent?: string | Element | Text | null;

    headerDisabled?: boolean | null;

    maxWidth?: number | null;

    minWidth?: number | null;

    pixelOffset?: routo.maps.Size | null;

    position?: routo.maps.LatLng | routo.maps.LatLngLiteral | null;

    zIndex?: number | null;
  }
}
