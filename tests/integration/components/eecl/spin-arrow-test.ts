import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | eecl/spin-arrow', function(hooks): void {
  setupRenderingTest(hooks);

  test('it renders', async function(assert): Promise<void> {
    await render(hbs`{{eecl/spin-arrow}}`);
    const foundNode = find('*');
    const foundContent =
      foundNode && foundNode.textContent && foundNode.textContent.trim();

    // There needs to be a trim here
    assert.equal(foundContent, '');
  });
});
