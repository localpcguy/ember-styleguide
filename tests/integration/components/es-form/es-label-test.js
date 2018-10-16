import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es form/es label', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{es-form/es-label}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#es-form/es-label}}
        template block text
      {{/es-form/es-label}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
