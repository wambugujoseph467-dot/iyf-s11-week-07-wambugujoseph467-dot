export function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2)}`;
}

export function capitalize(text) {
    if (!text) {
        return '';
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}
