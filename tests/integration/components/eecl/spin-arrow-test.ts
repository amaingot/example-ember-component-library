import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | eecl/spin-arrow', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{eecl/spin-arrow}}`);
    const foundNode = find('*');
    const foundContent = foundNode && foundNode.textContent && foundNode.textContent.trim();

    // There needs to be a trim here
    assert.equal(foundContent, '');
  });
});