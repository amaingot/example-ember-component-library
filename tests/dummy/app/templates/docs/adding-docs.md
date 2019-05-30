# Adding a guides page

To create a guides page with the `docs-page` generator run this:

```bash
ember generate docs-page new-page
```

Guides pages can be either Handlebars `.hbs` files or Markdown `.md` templates. AddonDocs includes support for compiling your Markdown files to Handlebars templates at build time.

Since most guides contain written prose, the majority of your guides pages will end up being Markdown files.

The generator should have created

  - the **markdown file** in the `tests/dummy/app/templates/docs` directory
  - the **nav item entry** in `tests/dummy/app/templates/docs.md`
  - the **`route` entry** in `tests/dummy/app/router.js` _for non-`index` routes_

The markdown file that is generated will look something like this:

{{#docs-snippet name='markdown-subpage.md' title='tests/dummy/app/templates/docs/new-page.md' language='markdown'}}
  # New page

  New page content
{{/docs-snippet}}

Remember, the dummy site is a full Ember application and these components are just here to help you get going.
