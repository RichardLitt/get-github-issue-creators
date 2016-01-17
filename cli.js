#!/usr/bin/env node
'use strict'

var meow = require('meow')
var getGithubIssueCreators = require('./')
var Promise = require('bluebird')

var cli = meow([`
  Usage
    $ get-github-issue-creators [input]

  Options
    -r, --repo  Only for a specific repo. [Default: false]
    -s, --since Only since a specific time. [Default: false]

  Examples
    $ get-github-issue-creators
    unicorns & rainbows
    $ get-github-issue-creators ponies
    ponies & rainbows
`, {
  alias: {
    r: 'repo',
    s: 'since'
  }
}])

Promise.try(function () {
  return getGithubIssueCreators(cli.input[0], cli.flags)
}).then(function (response) {
  console.log(response)
})
