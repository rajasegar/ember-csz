ember-csz
==============================================================================

![Build and Deploy](https://github.com/rajasegar/ember-csz/workflows/Build%20and%20Deploy/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-csz/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-csz?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ember-csz.svg?style=flat)](https://npmjs.org/package/ember-csz "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-csz.svg?branch=master)](http://emberobserver.com/addons/ember-csz)

Ember template helpers for [csz](https://github.com/lukejacksonn/csz), 
a Runtime CSS-Modules with SASS like pre-processing.


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
```hbs
<button class={{this.styles}} type="button">
  {{yield}}
</button>
```

#### Using the component

```hbs
<MyButton @primary=true>Primary</MyButton>
<MyButton>Normal</MyButton>
```

## Inline usage in templates

```hbs
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
