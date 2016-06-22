const GithubApi = require('github-api');
const GITHUB_TOKEN = require('../config').GITHUB_TOKEN;


exports.github = new GithubApi({
  token: GITHUB_TOKEN
});
