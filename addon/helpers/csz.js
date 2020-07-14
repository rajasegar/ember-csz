import { helper } from "@ember/component/helper";
import Csz from "csz";

export default helper(function csz(params /*, hash*/) {
  return Csz(params);
});
