import Component from "@glimmer/component";
import csz from "csz";

export default class MyPseudoComponent extends Component {
  styles = csz`
 color: blue;
        &:hover {
          color: red; // <Thing> when hovered
        }
        & ~ & {
          background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
        }
        & + & {
          background: lime; // <Thing> next to <Thing>
        }
        &.something {
          background: orange; // <Thing> tagged with an additional CSS class ".something"
        }
        .something-else & {
          border: 1px solid; // <Thing> inside another element labeled ".something-else"
        }
`;
}
