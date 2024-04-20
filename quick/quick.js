function getCurrentItems() {
    return JSON.parse(new URLSearchParams(location.search).get('current'));
}

function swap(list, a, b) {
    list = list.slice();
    const temp = list[a];
    list[a] = list[b];
    list[b] = temp;
    return list;
}