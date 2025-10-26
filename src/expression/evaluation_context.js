import { Color } from './types/color';
const geometryTypes = ['Unknown', 'Point', 'LineString', 'Polygon'];
export class EvaluationContext {
    constructor() {
        this.globals = null;
        this.feature = null;
        this.featureState = null;
        this.formattedSection = null;
        this._parseColorCache = new Map();
        this.availableImages = null;
        this.canonical = null;
    }
    id() {
        return this.feature && 'id' in this.feature ? this.feature.id : null;
    }
    geometryType() {
        return this.feature ? typeof this.feature.type === 'number' ? geometryTypes[this.feature.type] : this.feature.type : null;
    }
    geometry() {
        return this.feature && 'geometry' in this.feature ? this.feature.geometry : null;
    }
    canonicalID() {
        return this.canonical;
    }
    properties() {
        return this.feature && this.feature.properties || {};
    }
    parseColor(input) {
        let cached = this._parseColorCache.get(input);
        if (!cached) {
            cached = Color.parse(input);
            this._parseColorCache.set(input, cached);
        }
        return cached;
    }
}
