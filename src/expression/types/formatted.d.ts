import type { Color } from '../../expression/types/color';
import type { ResolvedImage } from '../types/resolved_image';
export declare const VERTICAL_ALIGN_OPTIONS: readonly ["bottom", "center", "top"];
export type VerticalAlign = typeof VERTICAL_ALIGN_OPTIONS[number];
export declare class FormattedSection {
    text: string;
    image: ResolvedImage | null;
    scale: number | null;
    fontStack: string | null;
    textColor: Color | null;
    verticalAlign: VerticalAlign | null;
    constructor(text: string, image: ResolvedImage | null, scale: number | null, fontStack: string | null, textColor: Color | null, verticalAlign: VerticalAlign | null);
}
export declare class Formatted {
    sections: Array<FormattedSection>;
    constructor(sections: Array<FormattedSection>);
    static fromString(unformatted: string): Formatted;
    isEmpty(): boolean;
    static factory(text: Formatted | string): Formatted;
    toString(): string;
}
