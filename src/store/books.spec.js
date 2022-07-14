import { setActivePinia, createPinia } from "pinia";
import { useBooksStore } from "@/store/books";

describe("books tests", () => {
  it("Commands with book store", () => {
    setActivePinia(createPinia());

    const booksStore = useBooksStore();

    const isbn = "someIsbn";
    const name = "title";
    const authors = ["author", "author2"];
    const description = "some description";
    const price = "123 RUB";
    const categories = ["category", "category2", "category3"];
    const imageLink = "imageLink";

    const addedBook = {
      isbn13: isbn,
      name: name,
      authors: authors,
      description: description,
      price: price,
      categories: categories,
      picture: imageLink,
    };

    booksStore.addBook(addedBook);

    expect(booksStore.books.length).toBe(1);

    const book = booksStore.books.at(0);
    expect(book.isbn13).toBe(isbn);
    expect(book.name).toBe(name);
    expect(book.authors).toEqual(authors);
    expect(book.description).toBe(description);
    expect(book.price).toBe(price);
    expect(book.categories).toEqual(categories);
    expect(book.picture).toBe(imageLink);

    booksStore.addBook(addedBook);

    expect(booksStore.books.length).toBe(2);

    booksStore.deleteByIndex(0);

    expect(booksStore.books.length).toBe(1);

    booksStore.addBook(addedBook);

    expect(booksStore.books.length).toBe(2);

    booksStore.clearAllBooks();

    expect(booksStore.books.length).toBe(0);
  });
});

//function createBook()
