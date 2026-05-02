import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Click me",
      },
    });
    expect(wrapper.text()).toContain("Click me");
  });

  it("applies primary style to button by default", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes()).toContain("primary");
  });
});
