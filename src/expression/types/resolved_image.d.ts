export type ResolvedImageOptions = {
    name: string;
    available: boolean;
};
export declare class ResolvedImage {
    name: string;
    available: boolean;
    constructor(options: ResolvedImageOptions);
    toString(): string;
    static fromString(name: string): ResolvedImage | null;
}
