# get-github-issue-creators [![Build Status](https://travis-ci.org/RichardLitt/get-github-issue-creators.svg?branch=master)](https://travis-ci.org/RichardLitt/get-github-issue-creators)

[![Greenkeeper badge](https://badges.greenkeeper.io/RichardLitt/get-github-issue-creators.svg)](https://greenkeeper.io/)

> Get a list of GitHub issue creators from an organization or repo


## Install

```
$ npm install --save get-github-issue-creators
```


## Usage

```js
const getGithubIssueCreators = require('get-github-issue-creators');

getGithubIssueCreators('RichardLitt', {
    since: '2016-01-15T00:20:24Z',
    until: '2016-01-20T00:20:24Z',
    repo: 'get-github-issue-creators'
  });
//=> 'RichardLitt'
```


## API

### getGithubIssueCreators(input, [options])

#### org

Type: `string`

The organization or user to scour for issues. If not set, it will grab the
user and repository of the current git directory, and use that user and that
repository as options.

#### options.since

Type: `string`

The ISO date from which to get issues that have been made.

#### options.until

Type: `string`

The ISO date to which to get issues that have been made.

#### options.repo

Type: `string`

A repo to search for issues from.


## CLI

```
$ npm install --global get-github-issue-creators
```

```
$ get-github-issue-creators --help

  Usage
    $ get-github-issue-creators [input]

  Options
    -r, --repo  Only for a specific repo. [Default: false]
    -s, --since Only since a specific time. [Default: false]
    -u, --until Only to a specific time. [Default: false]

  Examples
    $ get-github-issue-creators
    RichardLitt
    $ get-github-issue-creators RichardLitt --repo=get-github-issue-creators --since=2016-01-15T00:01:01Z --until=2016-01-20T00:01:05Z
    RichardLitt

```


## License

MIT © [Richard Littauer](http://burntfen.com)
