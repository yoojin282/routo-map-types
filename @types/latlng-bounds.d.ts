/// <reference path="index.d.ts" />

declare namespace routo.maps {
  export class LatLngBounds {
    constructor(
      swOrLatLngBounds?:
        | routo.maps.LatLng
        | null
        | routo.maps.LatLngLiteral
        | LatLngBounds
        | LatLngBoundsLiteral,
      ne?: routo.maps.LatLng | null | routo.maps.LatLngLiteral
    );

    contains(latLng: routo.maps.LatLng | routo.maps.LatLngLiteral): boolean;

    equals(other: LatLngBounds | null | LatLngBoundsLiteral): boolean;

    extend(point: routo.maps.LatLng | routo.maps.LatLngLiteral): LatLngBounds;

    getCenter(): routo.maps.LatLng;

    getNorthEast(): routo.maps.LatLng;

    getSouthWest(): routo.maps.LatLng;

    intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;

    isEmpty(): boolean;

    toJSON(): LatLngBoundsLiteral;

    toSpan(): routo.maps.LatLng;

    toString(): string;

    toUrlValue(precision?: number): string;

    union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;

    static readonly MAX_BOUNDS: LatLngBounds;
  }

  export interface LatLngBoundsLiteral {
    east: number;

    north: number;

    south: number;

    west: number;
  }
}
