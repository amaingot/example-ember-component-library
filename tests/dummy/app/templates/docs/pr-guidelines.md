# PR Title Formatting

We have very precise rules over how our PR titles can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the PR titles to **generate the change log**.

## Goals
 - allow generating the changelog by script
 - provide better information when browsing the history

### PR Titles === Master Commit Messages
This repo only allows PRs to be merged by using the "Squash and Merge" method. This allows us to
have consistent commit messages on the master branch. The commit history on the master branch is what
dictates when to deploy and also the changelog. The title of the PR is what dictates the git commit
message on the master branch.

### Master Branch Commit Format 
Each commit message consists of a **header**, a **body** and a **footer**. When merging your PR, you
can change the body and footer of the commit. The header has a special format that includes a **type**,
a **scope** and a **subject**:

```
{type}({scope}): {subject}
    ## blank line
{body}
    ## blank line
{footer}
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the PR title cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the PR reverts a previous commit, the title should begin with `revert: `, followed by the header
of the reverted commit.
In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit
being reverted.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change. It is best if we refer to the
component that has been changed.

You can use `*` when the change affects more than a single scope.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference tickets that this commit closes.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the PR title is then used for this.
