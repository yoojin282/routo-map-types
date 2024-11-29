/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export interface ParkingLayerOptions {
    map?: routo.maps.Map | null;
    floorPosition: ControlPosition;
    clickCallback: Function;
    parkingLotId: string;
    floorInfos: Object;
    parkingLotNameCode: string;
    parkingFloor: string;
    parkingSlot: string;
    parkingZone: string;
  }
  export class ParkingLayer {
    constructor(opts?: ParkingLayerOptions | null);

    getFindParkingLotID(
      parkingLotNameCode: string,
      options: ParkingLayerOptions
    ): void;
    getMap(): routo.maps.Map;
    reset(): void;
    setMap(map: routo.maps.Map): void;
    setOptions(options: ParkingLayerOptions): void;
  }
}
