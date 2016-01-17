import test from 'ava'
import fn from './'

test('from this repo', t => {
  return fn('RichardLitt', {
    since: '2016-01-17T04:29:11.301Z',
    repo: 'get-github-issue-creators'
  }).then(result => {
    t.same(result, [])
  })
})

test('without since', t => {
  return fn('RichardLitt', {
    repo: 'get-github-issue-creators'
  }).then(result => {
    t.same(result, ['RichardLitt'])
  })
})

test('from an organization repo', t => {
  return fn('ipfs', {
    repo: 'community'
  }).then(result => {
    t.pass()
    t.true(result.indexOf('RichardLitt') !== -1, 'RichardLitt is in issue creators')
  })
})
