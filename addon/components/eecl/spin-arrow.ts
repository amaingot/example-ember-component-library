import Component from '@ember/component';
import layout from 'example-ember-component-library/templates/components/eecl/spin-arrow';

/**
  Pretty cool component, right?

  To use it, you could enter the following in your template:

  ```handlebars
  {{eecl/spin-arrow count=2}}
  ```
*/
export default class SpinArrow extends Component {
  public static layout = layout;
}
