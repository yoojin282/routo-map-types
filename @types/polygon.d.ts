/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Polygon extends routo.maps.MVCObject {
    /**
     * A polygon (like a polyline) defines a series of connected coordinates in
     * an ordered sequence. Additionally, polygons form a closed loop and define
     * a filled region. See the samples in the developer&#39;s guide, starting
     * with a <a
     * href="https://developers.google.com/maps/documentation/javascript/examples/polygon-simple">simple
     * polygon</a>, a <a
     * href="https://developers.google.com/maps/documentation/javascript/examples/polygon-hole">polygon
     * with a hole</a>, and more. Note that you can also use the <a
     * href="#Data.Polygon">Data layer</a> to create a polygon. The Data layer
     * offers a simpler way of creating holes because it handles the order of
     * the inner and outer paths for you.
     *
     * Access by calling `const {Polygon} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(opts?: routo.maps.PolygonOptions | null);
    /**
     * Returns whether this shape can be dragged by the user.
     */
    getDraggable(): boolean;
    /**
     * Returns whether this shape can be edited by the user.
     */
    getEditable(): boolean;
    /**
     * Returns the map on which this shape is attached.
     */
    getMap(): routo.maps.Map | null;
    /**
     * Retrieves the first path.
     */
    getPath(): routo.maps.MVCArray<routo.maps.LatLng>;
    /**
     * Retrieves the paths for this polygon.
     */
    getPaths(): routo.maps.MVCArray<routo.maps.MVCArray<routo.maps.LatLng>>;
    /**
     * Returns whether this poly is visible on the map.
     */
    getVisible(): boolean;
    /**
     * If set to <code>true</code>, the user can drag this shape over the map.
     * The <code>geodesic</code> property defines the mode of dragging.
     */
    setDraggable(draggable: boolean): void;
    /**
     * If set to <code>true</code>, the user can edit this shape by dragging the
     * control points shown at the vertices and on each segment.
     */
    setEditable(editable: boolean): void;
    /**
     * Renders this shape on the specified map. If map is set to
     * <code>null</code>, the shape will be removed.
     */
    setMap(map: routo.maps.Map | null): void;
    setOptions(options: routo.maps.PolygonOptions | null): void;
    /**
     * Sets the first path. See <em><code><a
     * href="#PolygonOptions">PolygonOptions</a></code></em> for more details.
     */
    setPath(
      path:
        | routo.maps.MVCArray<routo.maps.LatLng>
        | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
    ): void;
    /**
     * Sets the path for this polygon.
     */
    setPaths(paths: routo.maps.MVCArray<any> | any[]): void;
    /**
     * Hides this poly if set to <code>false</code>.
     */
    setVisible(visible: boolean): void;
  }
  /**
   * PolygonOptions object used to define the properties that can be set on a
   * Polygon.
   */
  export interface PolygonOptions {
    /**
     * Indicates whether this <code>Polygon</code> handles mouse events.
     * @defaultValue <code>true</code>
     */
    clickable?: boolean | null;
    /**
     * If set to <code>true</code>, the user can drag this shape over the map.
     * The <code>geodesic</code> property defines the mode of dragging.
     * @defaultValue <code>false</code>
     */
    draggable?: boolean | null;
    /**
     * If set to <code>true</code>, the user can edit this shape by dragging the
     * control points shown at the vertices and on each segment.
     * @defaultValue <code>false</code>
     */
    editable?: boolean | null;
    /**
     * The fill color. All CSS3 colors are supported except for extended named
     * colors.
     */
    fillColor?: string | null;
    /**
     * The fill opacity between 0.0 and 1.0
     */
    fillOpacity?: number | null;
    /**
     * When <code>true</code>, edges of the polygon are interpreted as geodesic
     * and will follow the curvature of the Earth. When <code>false</code>,
     * edges of the polygon are rendered as straight lines in screen space. Note
     * that the shape of a geodesic polygon may appear to change when dragged,
     * as the dimensions are maintained relative to the surface of the earth.
     * @defaultValue <code>false</code>
     */
    geodesic?: boolean | null;
    /**
     * Map on which to display Polygon.
     */
    map?: routo.maps.Map | null;
    /**
     * The ordered sequence of coordinates that designates a closed loop. Unlike
     * polylines, a polygon may consist of one or more paths. As a result, the
     * paths property may specify one or more arrays of <code>LatLng</code>
     * coordinates. Paths are closed automatically; do not repeat the first
     * vertex of the path as the last vertex. Simple polygons may be defined
     * using a single array of <code>LatLng</code>s. More complex polygons may
     * specify an array of arrays. Any simple arrays are converted into <code><a
     * href="#MVCArray">MVCArray</a></code>s. Inserting or removing
     * <code>LatLng</code>s from the <code>MVCArray</code> will automatically
     * update the polygon on the map.
     */
    paths?: routo.maps.MVCArray<any> | any[] | null;
    /**
     * The stroke color. All CSS3 colors are supported except for extended named
     * colors.
     */
    strokeColor?: string | null;
    /**
     * The stroke opacity between 0.0 and 1.0
     */
    strokeOpacity?: number | null;
    /**
     * The stroke position.
     * @defaultValue {@link google.maps.StrokePosition.CENTER}
     */
    strokePosition?: routo.maps.StrokePosition | null;
    /**
     * The stroke width in pixels.
     */
    strokeWeight?: number | null;
    /**
     * Whether this polygon is visible on the map.
     * @defaultValue <code>true</code>
     */
    visible?: boolean | null;
    /**
     * The zIndex compared to other polys.
     */
    zIndex?: number | null;
  }
}
