/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Data extends routo.maps.MVCObject {
    constructor(options?: routo.maps.Data.DataOptions | null);
    add(feature?: Data.Feature | null | Data.FeatureOptions): Data.Feature;
    addGeoJson(
      geoJson: object,
      options?: Data.GeoJsonOptions | null
    ): Data.Feature[];
    contains(feature: Data.Feature): boolean;
    forEach(callback: (a: Data.Feature) => void): void;
    getControlPosition(): routo.maps.ControlPosition;
    getControls(): string[] | null;
    getDrawingMode(): string | null;
    getFeatureById(id: number | string): Data.Feature | undefined;
    getMap(): routo.maps.Map | null;
    getStyle(): Data.StylingFunction | Data.StyleOptions | null;
    loadGeoJson(
      url: string,
      options?: Data.GeoJsonOptions | null,
      callback?: (a: Data.Feature[]) => void
    ): void;
    overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
    remove(feature: Data.Feature): void;
    revertStyle(feature?: Data.Feature | null): void;
    setControlPosition(controlPosition: routo.maps.ControlPosition): void;
    setControls(controls: string[] | null): void;
    setDrawingMode(drawingMode: string | null): void;
    setMap(map: routo.maps.Map | null): void;
    setStyle(style: Data.StylingFunction | Data.StyleOptions | null): void;
    toGeoJson(callback: (a: object) => void): void;
  }
}

declare namespace routo.maps.Data {
  export interface DataOptions {
    controlPosition?: routo.maps.ControlPosition;
    controls?: string[] | null;
    drawingMode?: string | null;
    featureFactory?: ((a: Geometry) => Feature) | null;
    map: routo.maps.Map;
    style?: routo.maps.Data.StylingFunction | routo.maps.Data.StyleOptions;
  }

  export class Point implements routo.maps.Data.Geometry {
    constructor(latLng: routo.maps.LatLng | routo.maps.LatLngLiteral);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    get(): routo.maps.LatLng;
    getType(): string;
  }

  export interface GeoJsonOptions {
    idPropertyName?: string | null;
  }

  export interface Geometry {
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    getType(): string;
  }

  export class GeometryCollection implements Geometry {
    constructor(
      elements: (Geometry | routo.maps.LatLng | routo.maps.LatLngLiteral)[]
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    getArray(): Geometry[];
    getAt(n: number): Geometry;
    getLength(): number;
    getType(): string;
  }

  export interface StyleOptions {
    clickable?: boolean;
    cursor?: string;
    draggable?: boolean;
    editable?: boolean;
    fillColor?: string;
    fillOpacity?: number;
    icon?: string | routo.maps.Icon | routo.maps.Symbol;
    icons?: routo.maps.IconSequence[];
    label?: string | routo.maps.MarkerLabel;
    opacity?: number;
    shape?: routo.maps.MarkerShape;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    title?: string;
    visible?: boolean;
    zIndex?: number;
  }
  export type StylingFunction = (a: Feature) => StyleOptions;

  export class Polygon implements routo.maps.Data.Geometry {
    constructor(
      elements: (
        | routo.maps.Data.LinearRing
        | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
      )[]
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    getArray(): routo.maps.Data.LinearRing[];
    getAt(n: number): routo.maps.Data.LinearRing;
    getLength(): number;
    getType(): string;
  }

  export class LinearRing implements routo.maps.Data.Geometry {
    constructor(elements: (routo.maps.LatLng | routo.maps.LatLngLiteral)[]);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    getArray(): routo.maps.LatLng[];
    getAt(n: number): routo.maps.LatLng;
    getLength(): number;
    getType(): string;
  }

  export class LineString implements routo.maps.Data.Geometry {
    constructor(elements: (routo.maps.LatLng | routo.maps.LatLngLiteral)[]);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    getArray(): routo.maps.LatLng[];
    getAt(n: number): routo.maps.LatLng;
    getLength(): number;
    getType(): string;
  }

  export class MultiLineString implements routo.maps.Data.Geometry {
    constructor(
      elements: (
        | routo.maps.Data.LineString
        | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
      )[]
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    getArray(): routo.maps.Data.LineString[];
    getAt(n: number): routo.maps.Data.LineString;
    getLength(): number;
    getType(): string;
  }

  export class MultiPoint implements routo.maps.Data.Geometry {
    constructor(elements: (routo.maps.LatLng | routo.maps.LatLngLiteral)[]);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    getArray(): routo.maps.LatLng[];
    getAt(n: number): routo.maps.LatLng;
    getLength(): number;
    getType(): string;
  }

  export class MultiPolygon implements routo.maps.Data.Geometry {
    constructor(
      elements: (
        | routo.maps.Data.Polygon
        | (
            | routo.maps.Data.LinearRing
            | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
          )[]
      )[]
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;

    getArray(): routo.maps.Data.Polygon[];

    getAt(n: number): routo.maps.Data.Polygon;

    getLength(): number;

    getType(): string;
  }
}
