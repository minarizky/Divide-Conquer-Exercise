// sorted-frequency.js
function sortedFrequency(arr, num) {
    function findFirst(arr, num) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
                return mid;
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    function findLast(arr, num) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
                return mid;
            } else if (arr[mid] <= num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    let firstIndex = findFirst(arr, num);
    if (firstIndex === -1) return -1;

    let lastIndex = findLast(arr, num);
    return lastIndex - firstIndex + 1;
}

module.exports = sortedFrequency;
