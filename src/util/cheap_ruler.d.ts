export declare class CheapRuler {
    private kx;
    private ky;
    constructor(lat: number);
    /**
     * Given two points of the form [longitude, latitude], returns the distance.
     *
     * @param a - point [longitude, latitude]
     * @param b - point [longitude, latitude]
     * @returns distance
     * @example
     * const distance = ruler.distance([30.5, 50.5], [30.51, 50.49]);
     * //=distance
     */
    distance(a: [number, number], b: [number, number]): number;
    /**
     * Returns an object of the form {point, index, t}, where point is closest point on the line
     * from the given point, index is the start index of the segment with the closest point,
     * and t is a parameter from 0 to 1 that indicates where the closest point is on that segment.
     *
     * @param line - an array of points that form the line
     * @param p - point [longitude, latitude]
     * @returns the nearest point, its index in the array and the proportion along the line
     * @example
     * const point = ruler.pointOnLine(line, [-67.04, 50.5]).point;
     * //=point
     */
    pointOnLine(line: [number, number][], p: [number, number]): {
        point: [number, number];
        index: number;
        t: number;
    };
    private wrap;
}
