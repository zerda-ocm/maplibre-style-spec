import { Point2D } from '../point2d';
export type RingWithArea<T extends Point2D> = T[] & {
    area?: number;
};
/**
 * Classifies an array of rings into polygons with outer rings and holes
 * @param rings - the rings to classify
 * @param maxRings - the maximum number of rings to include in a polygon, use 0 to include all rings
 * @returns an array of polygons with internal rings as holes
 */
export declare function classifyRings<T extends Point2D>(rings: RingWithArea<T>[], maxRings?: number): RingWithArea<T>[][];
