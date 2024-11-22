// Definition for singly-linked list.
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummyHead = new ListNode(0); // Dummy head to simplify the code
  let current = dummyHead;

  // Loop through both linked lists
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Get the values of the nodes (if available), otherwise use 0
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;

    // Add the values and the carry from the previous step
    let sum = x + y + carry;

    // Update the carry for the next step
    carry = Math.floor(sum / 10);

    // Create a new node with the current digit and move the current pointer
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move the l1 and l2 pointers if possible
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  // Return the result starting from the node after dummyHead
  return dummyHead.next;
};

// Helper function to convert array to linked list
function arrayToList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array
function listToArray(node) {
  let arr = [];
  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}
