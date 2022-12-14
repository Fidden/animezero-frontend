export function removeEmpty(obj: Record<string, any>) {
    return Object.fromEntries(Object.entries(obj).filter(([, v]) => v != undefined && v != '' && v !== null && v !== 'undefined' && v));
}
