import { describe, it, expect } from 'vitest';
import { formatPrice, capitalize } from './format.js';

describe('formatPrice', () => {
    it('formats whole dollars', () => {
        expect(formatPrice(500)).toBe('$5.00');
    });

    it('formats zero', () => {
        expect(formatPrice(0)).toBe('$0.00');
    });
});

describe('capitalize', () => {
    it('capitalizes the first letter', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('handles an empty string', () => {
        expect(capitalize('')).toBe('');
    });
});
