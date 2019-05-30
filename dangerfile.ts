import { fail, message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Files in this PR: \n - ' + modifiedMD);

const commitTypes = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'chore',
];

const components = ['spin-arrow'];

const prTitleRegex = new RegExp(
  '^(' + commitTypes.join('|') + ')(' + components.join('|') + '||):s.*$'
);
const correctlyFormattedPrTitle = danger.github.pr.title.match(prTitleRegex);

if (correctlyFormattedPrTitle === null) {
  fail('Your PR title should be correctly formatted.');
} else {
  message('Your PR title is correctly formatted! Good job!');
}
