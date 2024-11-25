/// <reference path="index.d.ts" />
declare namespace routo.maps.drawing {
  export enum OverlayType {
    CIRCLE = 'circle',
    MARKER = 'marker',
    POLYGON = 'polygon',
    POLYLINE = 'polyline',
    RECTANGLE = 'rectangle',
  }

  export interface DrawingControlOptions {
    drawingModes?: routo.maps.drawing.OverlayType[] | null;
    position?: routo.maps.ControlPosition | null;
  }

  export interface DrawingManagerOptions {
    /**
     * Options to apply to any new circles created with this
     * <code>DrawingManager</code>. The <code>center</code> and
     * <code>radius</code> properties are ignored, and the <code>map</code>
     * property of a new circle is always set to the
     * <code>DrawingManager</code>&#39;s map.
     */
    circleOptions?: routo.maps.CircleOptions | null;
    /**
     * The enabled/disabled state of the drawing control.
     * @defaultValue <code>true</code>
     */
    drawingControl?: boolean | null;
    /**
     * The display options for the drawing control.
     */
    drawingControlOptions?: routo.maps.drawing.DrawingControlOptions | null;
    /**
     * The <code>DrawingManager</code>&#39;s drawing mode, which defines the
     * type of overlay to be added on the map. Accepted values are
     * <code>'marker'</code>, <code>'polygon'</code>, <code>'polyline'</code>,
     * <code>'rectangle'</code>, <code>'circle'</code>, or <code>null</code>. A
     * drawing mode of <code>null</code> means that the user can interact with
     * the map as normal, and clicks do not draw anything.
     */
    drawingMode?: routo.maps.drawing.OverlayType | null;
    /**
     * The <code>Map</code> to which the <code>DrawingManager</code> is
     * attached, which is the <code>Map</code> on which the overlays created
     * will be placed.
     */
    map?: routo.maps.Map | null;
    /**
     * Options to apply to any new markers created with this
     * <code>DrawingManager</code>. The <code>position</code> property is
     * ignored, and the <code>map</code> property of a new marker is always set
     * to the <code>DrawingManager</code>&#39;s map.
     */
    markerOptions?: routo.maps.MarkerOptions | null;
    /**
     * Options to apply to any new polygons created with this
     * <code>DrawingManager</code>. The <code>paths</code> property is ignored,
     * and the <code>map</code> property of a new polygon is always set to the
     * <code>DrawingManager</code>&#39;s map.
     */
    polygonOptions?: routo.maps.PolygonOptions | null;
    /**
     * Options to apply to any new polylines created with this
     * <code>DrawingManager</code>. The <code>path</code> property is ignored,
     * and the <code>map</code> property of a new polyline is always set to the
     * <code>DrawingManager</code>&#39;s map.
     */
    polylineOptions?: routo.maps.PolylineOptions | null;
    /**
     * Options to apply to any new rectangles created with this
     * <code>DrawingManager</code>. The <code>bounds</code> property is ignored,
     * and the <code>map</code> property of a new rectangle is always set to the
     * <code>DrawingManager</code>&#39;s map.
     */
    rectangleOptions?: routo.maps.RectangleOptions | null;
  }

  export class DrawingManager extends routo.maps.MVCObject {
    constructor(options?: routo.maps.drawing.DrawingManagerOptions | null);

    clear(): void;

    getDrawingMode(): routo.maps.drawing.OverlayType | null;

    getMap(): routo.maps.Map | null;

    setDrawingMode(drawingMode: routo.maps.drawing.OverlayType | null): void;

    setMap(map: routo.maps.Map | null): void;

    setOptions(options: routo.maps.drawing.DrawingManagerOptions | null): void;
  }
}
