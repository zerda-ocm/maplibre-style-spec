export declare class Collator {
    locale: string | null;
    sensitivity: 'base' | 'accent' | 'case' | 'variant';
    collator: Intl.Collator;
    constructor(caseSensitive: boolean, diacriticSensitive: boolean, locale: string | null);
    compare(lhs: string, rhs: string): number;
    resolvedLocale(): string;
}
