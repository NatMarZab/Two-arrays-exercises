class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        const mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            const list1 = lists[i];
            const list2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(list1, list2));
        }

        lists = mergedLists;
    }

    return lists[0];
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        const selectedList = l1.val < l2.val ? l1 : l2;
        current.next = selectedList;
        selectedList === l1 ? (l1 = l1.next) : (l2 = l2.next);
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

// Example usage
const input = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
];

const mergedList = mergeKLists(input);
const outputArray = linkedListToArray(mergedList);

console.log(outputArray);

function linkedListToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}
