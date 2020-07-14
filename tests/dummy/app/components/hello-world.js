import Component from "@glimmer/component";
import csz from "csz";

const styles = csz`
background: papayawhip;
text-align:center;
padding: 4em;

h1 {
color: palevioletred;
font-size: 2em;
}`;

export default class HelloWorldComponent extends Component {
  styles = styles;
}
