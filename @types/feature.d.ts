/// <reference path="index.d.ts" />
declare namespace routo.maps.Data {
  export class Feature {
    constructor(options?: FeatureOptions | null);

    forEachProperty(callback: (a: unknown, b: string) => void): void;

    getGeometry(): Geometry | null;

    getId(): number | string | undefined;

    getProperty(name: string): unknown;

    removeProperty(name: string): void;

    setGeometry(
      newGeometry:
        | Geometry
        | null
        | routo.maps.LatLng
        | routo.maps.LatLngLiteral
    ): void;

    setProperty(name: string, newValue: unknown): void;

    toGeoJson(callback: (a: object) => void): void;
  }

  export interface FeatureOptions {
    geometry?:
      | routo.maps.Data.Geometry
      | null
      | routo.maps.LatLng
      | routo.maps.LatLngLiteral;

    id?: number | string;

    properties?: object | null;
  }
}
