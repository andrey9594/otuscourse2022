import { shallowMount } from "@vue/test-utils";
import FindInput from "./FindInput";

describe("FindInput.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FindInput);
  });

  it("renders FindInput", () => {
    expect(wrapper.isVisible()).toBe(true);

    const button = wrapper.get('[class="find"]');
    button.trigger("click");
  });
});
