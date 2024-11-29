/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Traffic {
    static trafficRead(json: Object[]): Object[];
    static drawRouteLineByTraffic(
      map: routo.maps.Map,
      jsonTraffic: Object[]
    ): void;
  }
}
