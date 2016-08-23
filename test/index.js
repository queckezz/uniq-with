
const uniqWith = require('../src')
const test = require('tape')

test('remove duplicates', (t) => {
  const data = [1, 1, 4, 1, 2, 2]
  const uniqueData = uniqWith(
    (a, b) => a === b,
    data
  )

  t.equal(uniqueData.length, 3)
  t.end()
})

test('works with objects', (t) => {
  const data = [
    { id: 1 },
    { id: 5 },
    { id: 2 },
    { id: 2 },
    { id: 2 },
    { id: 5 }
  ]

  const uniqueData = uniqWith(
    (a, b) => a.id === b.id,
    data
  )

  t.equal(uniqueData.length, 3)
  t.end()
})
