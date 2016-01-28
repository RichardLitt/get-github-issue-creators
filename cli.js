#!/usr/bin/env node
'use strict'

const meow = require('meow')
const getGithubIssueCreators = require('./')
const Promise = require('bluebird')
const gitconfig = require('gitconfiglocal')
const pify = require('pify')
const ghauth = Promise.promisify(require('ghauth'))
const authOptions = {
  configName: 'ghIssueCreators',
  note: 'Get GitHub Issue Creators',
  userAgent: 'ghIssueCreators',
  scope: ['repo']
}

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

Promise.try(() => {
  return pify(gitconfig)(process.cwd())
}).then(config => {
  if (config && config.remote && config.remote.origin && config.remote.origin.url) {
    return config.remote.origin.url.split(':')[1].split('.git')[0].split('/')
  }
}).then((res) => {
  if (res && cli.input.length === 0) {
    cli.input[0] = res[0]
    cli.flags['repo'] = res[1]
  }
  return ghauth(authOptions)
}).then((authData) => {
  return getGithubIssueCreators(cli.input[0], cli.flags, authData.token)
}).map(function (response) {
  console.log(response)
})
