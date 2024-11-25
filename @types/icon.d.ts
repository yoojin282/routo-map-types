/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export interface Icon {
    anchor?: routo.maps.Point | null;

    labelOrigin?: routo.maps.Point | null;

    origin?: routo.maps.Point | null;

    scaledSize?: routo.maps.Size | null;

    size?: routo.maps.Size | null;

    url: string;
  }

  export interface IconSequence {
    fixedRotation?: boolean;

    icon?: routo.maps.Symbol | null;

    offset?: string;

    repeat?: string;
  }
}
