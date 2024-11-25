/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Rectangle extends routo.maps.MVCObject {
    /**
     * A rectangle overlay.
     *
     * Access by calling `const {Rectangle} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(opts?: routo.maps.RectangleOptions | null);
    /**
     * Returns the bounds of this rectangle.
     */
    getBounds(): routo.maps.LatLngBounds | null;
    /**
     * Returns whether this rectangle can be dragged by the user.
     */
    getDraggable(): boolean;
    /**
     * Returns whether this rectangle can be edited by the user.
     */
    getEditable(): boolean;
    /**
     * Returns the map on which this rectangle is displayed.
     */
    getMap(): routo.maps.Map | null;
    /**
     * Returns whether this rectangle is visible on the map.
     */
    getVisible(): boolean;
    /**
     * Sets the bounds of this rectangle.
     */
    setBounds(
      bounds: routo.maps.LatLngBounds | null | routo.maps.LatLngBoundsLiteral
    ): void;
    /**
     * If set to <code>true</code>, the user can drag this rectangle over the
     * map.
     */
    setDraggable(draggable: boolean): void;
    /**
     * If set to <code>true</code>, the user can edit this rectangle by dragging
     * the control points shown at the corners and on each edge.
     */
    setEditable(editable: boolean): void;
    /**
     * Renders the rectangle on the specified map. If map is set to
     * <code>null</code>, the rectangle will be removed.
     */
    setMap(map: routo.maps.Map | null): void;
    setOptions(options: routo.maps.RectangleOptions | null): void;
    /**
     * Hides this rectangle if set to <code>false</code>.
     */
    setVisible(visible: boolean): void;
  }
  /**
   * RectangleOptions object used to define the properties that can be set on a
   * Rectangle.
   */
  export interface RectangleOptions {
    /**
     * The bounds.
     */
    bounds?: routo.maps.LatLngBounds | routo.maps.LatLngBoundsLiteral | null;
    /**
     * Indicates whether this <code>Rectangle</code> handles mouse events.
     * @defaultValue <code>true</code>
     */
    clickable?: boolean | null;
    /**
     * If set to <code>true</code>, the user can drag this rectangle over the
     * map.
     * @defaultValue <code>false</code>
     */
    draggable?: boolean | null;
    /**
     * If set to <code>true</code>, the user can edit this rectangle by dragging
     * the control points shown at the corners and on each edge.
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
     * Map on which to display Rectangle.
     */
    map?: routo.maps.Map | null;
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
     * Whether this rectangle is visible on the map.
     * @defaultValue <code>true</code>
     */
    visible?: boolean | null;
    /**
     * The zIndex compared to other polys.
     */
    zIndex?: number | null;
  }
}
