/// <reference path="index.d.ts" />

declare namespace routo.maps {
  export class LatLng {
    constructor(
      latOrLatLngOrLatLngLiteral: number | LatLngLiteral | LatLng,
      lngOrNoClampNoWrap?: number | boolean | null,
      noClampNoWrap?: boolean
    );

    equals(other: LatLng | null): boolean;

    lat(): number;

    lng(): number;

    toJSON(): LatLngLiteral;

    toString(): string;

    toUrlValue(precision?: number): string;
  }

  export interface LatLngLiteral {
    lat: number;

    lng: number;
  }
}
