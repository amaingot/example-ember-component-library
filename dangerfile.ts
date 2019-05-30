import { fail, message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Files in this PR: \n - ' + modifiedMD);

// eslint-disable-next-line no-undef
const branchName = process.env.CIRCLE_BRANCH;
message(`View the new documentation for this branch by visiting this site:
https://ember-ui-lib.hmm.dev/versions/${branchName}/`);

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

const componentRegex = components.map(c => `\\(${c}\\)`);

const prTitleRegex = new RegExp(
  '^(' + commitTypes.join('|') + ')(' + componentRegex.join('|') + '|):\\s.*$'
);
const correctlyFormattedPrTitle = danger.github.pr.title.match(prTitleRegex);

if (correctlyFormattedPrTitle === null) {
  fail(`Your PR title should be correctly formatted. Your PR title must follow this regex
    ${prTitleRegex.source}
  `);
} else {
  message('Your PR title is correctly formatted! Good job!');
}
