/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export enum ControlPosition {
    BLOCK_END_INLINE_CENTER = 0.0,

    BLOCK_END_INLINE_END = 1.0,

    BLOCK_END_INLINE_START = 2.0,

    BLOCK_START_INLINE_CENTER = 3.0,

    BLOCK_START_INLINE_END = 4.0,

    BLOCK_START_INLINE_START = 5.0,

    BOTTOM_CENTER = 6.0,

    BOTTOM_LEFT = 7.0,

    BOTTOM_RIGHT = 8.0,

    INLINE_END_BLOCK_CENTER = 9.0,

    INLINE_END_BLOCK_END = 10.0,

    INLINE_END_BLOCK_START = 11.0,

    INLINE_START_BLOCK_CENTER = 12.0,

    INLINE_START_BLOCK_END = 13.0,

    INLINE_START_BLOCK_START = 14.0,

    LEFT_BOTTOM = 15.0,

    LEFT_CENTER = 16.0,

    LEFT_TOP = 17.0,

    RIGHT_BOTTOM = 18.0,

    RIGHT_CENTER = 19.0,

    RIGHT_TOP = 20.0,

    TOP_CENTER = 21.0,

    TOP_LEFT = 22.0,

    TOP_RIGHT = 23.0,
  }

  export interface FullscreenControlOptions {
    position?: ControlPosition | null;
  }

  export class MapTypeRegistry extends routo.maps.MVCObject {
    set(id: string, mapType: any): void;
  }

  export interface MapRestriction {
    latLngBounds: routo.maps.LatLngBounds | routo.maps.LatLngBoundsLiteral;

    strictBounds?: boolean;
  }

  export interface ScaleControlOptions {
    style?: ScaleControlStyle | null;
  }

  export enum ScaleControlStyle {
    DEFAULT = 0.0,
  }

  export interface ZoomControlOptions {
    position?: ControlPosition | null;
  }

  export interface MapTypeStyle {
    elementType?: string | null;

    featureType?: string | null;

    stylers: object[];
  }

  export enum MapTypeId {
    ROADMAP_HALF_BASIC = 'Roadmap_Half_Basic',
    ROADMAP_HALF_BLACK = 'Roadmap_Half_Black',
    ROADMAP_IMAGE_BASIC = 'Roadmap_Image_Basic',
    SATELLITE = 'Satellite',
    HYBRID = 'Hybrid',
    ROADMAP_VECTOR_BASIC = 'Roadmap_Vector_Basic',
    ROADMAP_VECTOR_BLACK = 'Roadmap_Vector_Black',
  }

  export interface LocationControlOptions {
    markerImageUrl: String;
    position: Object;
  }

  export interface MapOptions {
    center?: routo.maps.LatLng | null | routo.maps.LatLngLiteral;

    clickableIcons?: boolean | null;

    disableDoubleClickZoom?: boolean | null;

    draggableCursor?: string | null;

    draggingCursor?: string | null;

    fullscreenControl?: boolean | null;

    fullscreenControlOptions?: FullscreenControlOptions | null;

    heading?: number | null;

    isFractionalZoomEnabled?: boolean | null;

    keyboardShortcuts?: boolean | null;

    mapTypeId?: string | null;

    maxZoom?: number | null;

    minZoom?: number | null;

    noClear?: boolean | null;

    restriction?: MapRestriction | null;

    scaleControl?: boolean | null;

    scaleControlOptions?: ScaleControlOptions | null;

    scrollwheel?: boolean | null;

    styles?: MapTypeStyle[] | null;

    zoom?: number | null;

    zoomControl?: boolean | null;

    zoomControlOptions?: ZoomControlOptions | null;

    enableRotation?: boolean | null;
    stopZoomInOut?: boolean | null;
    locationControl?: boolean | null;
    locationControlOptions?: LocationControlOptions | null;
  }

  export class Map extends routo.maps.MVCObject {
    constructor(target: HTMLElement, opts?: MapOptions);

    controls: routo.maps.MVCArray<HTMLElement>[];

    data: routo.maps.Data;

    fitBounds(
      bounds: routo.maps.LatLngBounds | routo.maps.LatLngBoundsLiteral,
      padding?: number | routo.maps.Padding
    ): void;

    getBounds(): routo.maps.LatLngBounds | undefined;

    getCenter(): routo.maps.LatLng | undefined;

    getClickableIcons(): boolean | undefined;

    getDiv(): HTMLElement;

    getHeading(): number | undefined;

    getHeadingInteractionEnabled(): boolean | null;

    getMapTypeId(): string | undefined;

    getTilt(): number | undefined;

    getTiltInteractionEnabled(): boolean | null;

    getZoom(): number | undefined;

    mapTypes: routo.maps.MapTypeRegistry;

    panBy(x: number, y: number): void;

    panTo(latLng: routo.maps.LatLng | routo.maps.LatLngLiteral): void;

    panToBounds(
      latLngBounds: routo.maps.LatLngBounds | routo.maps.LatLngBoundsLiteral,
      padding?: number | routo.maps.Padding
    ): void;
    setCenter(latlng: routo.maps.LatLng | routo.maps.LatLngLiteral): void;

    setClickableIcons(value: boolean): void;

    setHeading(heading: number): void;

    setHeadingInteractionEnabled(headingInteractionEnabled: boolean): void;
    setMapTypeId(mapTypeId: string): void;
    setOptions(options: routo.maps.MapOptions | null): void;

    setTilt(tilt: number): void;

    setTiltInteractionEnabled(tiltInteractionEnabled: boolean): void;

    setZoom(zoom: number): void;

    static readonly DEMO_MAP_ID: string;
  }
}
