/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export interface TrafficLayerOptions {
    autoRefresh?: boolean | null;
    map?: routo.maps.Map | null;
    theme?: string | null; // milk, black
  }

  export class TrafficLayer {
    constructor(opts?: TrafficLayerOptions | null);

    getMap(): routo.maps.Map;
    setMap(map: routo.maps.Map): void;
    setOptions(options: TrafficLayerOptions): void;
    setVisible(visible: boolean): void;
  }
}
