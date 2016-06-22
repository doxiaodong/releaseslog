const github = require('./auth-github').github;
const config = require('../config');

const _repo = github.getRepo(config.GITHUB_USER, config.GITHUB_REPO);

class repo {

  renderReleases(releases) {
    releases.forEach((release) => {
      this.text += `### [${release.name || 'None'}](${release.html_url})  \n`;
      this.text += `* tag: ${release.tag_name}  \n`;
      this.text += `* author: ${release.author.login}  \n`;
      this.text += `* time: ${new Intl.DateTimeFormat().format(new Date(release.published_at))}  \n`;
      this.text += `* note: \`\`\`${release.body || 'None'}\`\`\`  \n`;
      this.text += `\n`;
    });
    return this.text;
  }
  getReleases() {
    return _repo.listReleases()
    .then((res) => {
      return this.renderReleases(res.data);
    });

  }

  constructor() {
    this.text = `# ${config.GITHUB_REPO} Release Log  \n\n\n`;
  }

}

module.exports = new repo();
