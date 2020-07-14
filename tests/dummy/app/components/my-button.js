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
