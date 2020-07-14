import Component from "@glimmer/component";
import csz from "csz";

const defaultTheme = {
  main: "palevioletred",
};

export default class ThemeButtonComponent extends Component {
  theme = this.args.theme || defaultTheme;
  styles = csz`
 font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
        background: white;
        color: ${this.theme.main};
        border: 2px solid ${this.theme.main};
`;
}
