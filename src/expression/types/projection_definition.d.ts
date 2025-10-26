export declare class ProjectionDefinition {
    readonly from: string;
    readonly to: string;
    readonly transition: number;
    constructor(from: string, to: string, transition: number);
    static interpolate(from: string, to: string, t: number): ProjectionDefinition;
    static parse(input?: any): ProjectionDefinition;
}
