
module.exports = uniqWith

function uniqWith (pred, list) {
  return list.reduce((acc, item, i) => {
    return hasDuplicates(list, i, (x) => pred(x, item))
      ? acc
      : acc.concat([item])
  }, [])
}

function hasDuplicates (list, pointer, pred) {
  return list.slice(pointer + 1, list.length).some(pred)
}
