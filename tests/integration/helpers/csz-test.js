import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Helper | csz", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function (assert) {
    this.set("inputValue", "1234");

    await render(hbs`{{csz inputValue}}`);

    assert.ok(this.element.textContent.trim().includes("csz-"));
  });
});
