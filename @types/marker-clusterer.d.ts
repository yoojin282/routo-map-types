/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export interface MarkerClusterOptions {
    map: routo.maps.Map;
    minZoom: number;
    maxZoom: number;
    minCount: number;
    markers: routo.maps.Marker[];
    gridSize: number;
    clusterStyles: any[];
    onClusterClick: Function;
  }

  export class MarkerClusterer extends routo.maps.MVCObject {
    constructor(markerClusterOptions: MarkerClusterOptions);

    addMarker(marker: routo.maps.Marker): void;
    addMarkers(markers: routo.maps.Marker[]): void;
    clearMarkers(): void;
    hideFeature_(feature: any): void;
    removeMarker(marker: routo.maps.Marker): void;
    removeMarkers(markers: routo.maps.Marker[]): void;
    render(): void;
    showFeature_(feature: any): void;
  }
}
