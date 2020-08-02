import Component from "@glimmer/component";
import csz from "csz";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class DynamicButtonComponent extends Component {
  @tracked red = false;

  getStyles() {
    return csz`
  button {
    background: ${this.red ? "red" : "green"};
    color: white;
  }`;
  }

  @tracked styles = this.getStyles();
  @action updateRed() {
    this.red = !this.red;
    this.styles = this.getStyles();
  }
}
