import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import BooksView from "./BooksView";
import ElementPlus from "element-plus";
import { useBooksStore } from "@/store/books";

describe("BooksView.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = mount(BooksView, {
      global: {
        plugins: [ElementPlus],
      },
    });
  });

  it("renders BooksView", async () => {
    console.log(wrapper.html());

    const findArea = wrapper.get('[class="find"]');
    findArea.setValue("query");

    const spy = jest.spyOn(wrapper.vm, "findBooks");

    const button = wrapper.find('[class="searchButton"]');
    button.trigger("click");

    await wrapper.vm.$findForText();

    expect(spy).toHaveBeenCalled();
    expect(wrapper.emitted().findBooks).toBeTruthy();
  });
});
