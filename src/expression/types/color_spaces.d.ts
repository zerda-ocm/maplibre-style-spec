/**
 * @param r Red component 0..1
 * @param g Green component 0..1
 * @param b Blue component 0..1
 * @param alpha Alpha component 0..1
 */
export type RGBColor = [r: number, g: number, b: number, alpha: number];
/**
 * @param h Hue as degrees 0..360
 * @param s Saturation as percentage 0..100
 * @param l Lightness as percentage 0..100
 * @param alpha Alpha component 0..1
 */
export type HSLColor = [h: number, s: number, l: number, alpha: number];
/**
 * @param h Hue as degrees 0..360
 * @param c Chroma 0..~230
 * @param l Lightness as percentage 0..100
 * @param alpha Alpha component 0..1
 */
export type HCLColor = [h: number, c: number, l: number, alpha: number];
/**
 * @param l Lightness as percentage 0..100
 * @param a A axis value -125..125
 * @param b B axis value -125..125
 * @param alpha Alpha component 0..1
 */
export type LABColor = [l: number, a: number, b: number, alpha: number];
export declare function rgbToLab([r, g, b, alpha]: RGBColor): LABColor;
export declare function labToRgb([l, a, b, alpha]: LABColor): RGBColor;
export declare function rgbToHcl(rgbColor: RGBColor): HCLColor;
export declare function hclToRgb([h, c, l, alpha]: HCLColor): RGBColor;
export declare function hslToRgb([h, s, l, alpha]: HSLColor): RGBColor;
