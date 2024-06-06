function filterSortMap(array: any[], filter: any, sort: any, map: any) {
    const out = [];
    for (const item of array) {
        if (filter(item)) {
            out.push(map(item));
        }
    }
    return out.sort(sort);
}