function swap(items, i, j) {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}

function shiftDownLeft(items, i, j) {
    const leftChild = 2 * j + 1;
    swap(items, j, leftChild);
    const leftGrandChild = 2 * leftChild + 1;
    if (leftGrandChild >= i) { // Left child has no left child
        if (i > 1) { // There are still out of place elements
            swap(items, i - 1, 0)
            const newParams = new URLSearchParams({
                items: JSON.stringify(items),
                i: i - 1,
                j: 0
            });
            location.assign(`/two/left.html?${newParams}`)
        } else { // No more out of place elements
            const newParams = new URLSearchParams({
                items: JSON.stringify(items)
            });
            location.assign(`/list.html?${newParams}`);
        }
    } else { // Left child has a left child
        const newParams = new URLSearchParams({
            items: JSON.stringify(items),
            i: i,
            j: leftChild
        });
        location.assign(`/two/left.html?${newParams}`);
    }
}

function shiftDownRight(items, i, j) {
    const rightChild = 2 * j + 2;
    swap(items, j, rightChild);
    const rightGrandChild = 2 * rightChild + 1;
    if (rightGrandChild >= i) { // Right child has no left child
        if (i > 1) { // There are still out of place elements
            swap(items, i - 1, 0)
            const newParams = new URLSearchParams({
                items: JSON.stringify(items),
                i: i - 1,
                j: 0
            });
            location.assign(`/two/left.html?${newParams}`)
        } else { // No more out of place elements
            const newParams = new URLSearchParams({
                items: JSON.stringify(items)
            });
            location.assign(`/list.html?${newParams}`);
        }
    } else { // Left child has a left child
        const newParams = new URLSearchParams({
            items: JSON.stringify(items),
            i: i,
            j: rightChild
        });
        location.assign(`/two/left.html?${newParams}`);
    }
}

function stay(items, i) {
    if (i > 1) { // There are still out of place elements
        swap(items, i - 1, 0)
        const newParams = new URLSearchParams({
            items: JSON.stringify(items),
            i: i - 1,
            j: 0
        });
        location.assign(`/two/left.html?${newParams}`)
    } else { // No more out of place elements
        const newParams = new URLSearchParams({
            items: JSON.stringify(items)
        });
        location.assign(`/list.html?${newParams}`);
    }
}