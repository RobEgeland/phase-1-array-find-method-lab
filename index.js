function superbowlWin(array) {
    let result = undefined
    for (let item of array) {
        if (item.result === 'W') {
            result = item.year
            break
        }
    }
    return result
}

record.find(superbowlWin)
