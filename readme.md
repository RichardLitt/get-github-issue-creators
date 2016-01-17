# get-github-issue-creators [![Build Status](https://travis-ci.org/RichardLitt/get-github-issue-creators.svg?branch=master)](https://travis-ci.org/RichardLitt/get-github-issue-creators)

> Get a list of GitHub issue creators from an organization or repo


## Install

```
$ npm install --save get-github-issue-creators
```


## Usage

```js
const getGithubIssueCreators = require('get-github-issue-creators');

getGithubIssueCreators('unicorns');
//=> 'unicorns & rainbows'
```


## API

### getGithubIssueCreators(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global get-github-issue-creators
```

```
$ get-github-issue-creators --help

  Usage
    get-github-issue-creators [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ get-github-issue-creators
    unicorns & rainbows
    $ get-github-issue-creators ponies
    ponies & rainbows
```


## License

MIT © [Richard Littauer](http://burntfen.com)
