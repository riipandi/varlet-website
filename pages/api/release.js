// const Octokit = require("@octokit/rest");
// const octokit = new Octokit();

export default (req, res) => {

  const date = new Date().toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')

  res.json({
    version: '1.1.0',
    release_date: date,
    filename: 'varlet-1.1.0.33551-x64.exe',
    file_url: 'https://github.com/riipandi/varlet/releases/download/v1.1.0/varlet-1.1.0.33551-x64.exe'
  })
}
