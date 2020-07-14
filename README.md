ember-csz
==============================================================================

Ember template helpers for [csz](https://github/com/lukejohsonn/csz), a Runtime CSS-Modules with SASS like preprocessing


Installation
------------------------------------------------------------------------------

```
ember install ember-csz
```


Usage
------------------------------------------------------------------------------

### CSS-in-JS with components

#### component.js

```js
import Component from "@glimmer/component";
import csz from "csz";

export default class MyButtonComponent extends Component {
  styles = csz`
    background: ${this.args.primary ? "palevioletred" : "white"};
    color: ${this.args.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
}

```

#### template.hbs
```
<button class={{this.styles}} type="button">
  {{yield}}
</button>
```


```hbs
<MyButton @primary=true>Primary</MyButton>
<MyButton>Normal</MyButton>
```

## Inline usage in templates
```
<div class={{ csz "text-align:center;"}}>Hello World</div>
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
