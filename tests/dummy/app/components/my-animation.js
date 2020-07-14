import Component from "@glimmer/component";
import csz from "csz";

export default class MyAnimationComponent extends Component {
  styles = csz`
 display: inline-block;
      animation: rotate 2s linear infinite;
      padding: 2rem 1rem;
      font-size: 1.2rem;
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`;
}
