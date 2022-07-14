describe("E2E", () => {
  it("Visit books page", () => {
    cy.visit("localhost:8080/books");
    cy.contains("h1", "Books");

    cy.get('[class="find"]').type("harry potter and the philos");

    cy.get('[class="searchButton"]').click();

    cy.contains("Rowling");
  }),
    it("Visit new book page", () => {
      cy.visit("localhost:8080/books/add");

      cy.get('[class="el-input__inner"]').eq(0).type("Some isbn");
      cy.get('[class="el-input__inner"]').eq(1).type("Vasiliy");
      cy.get('[class="el-input__inner"]').eq(2).type("Pupkin");
      cy.get('[class="el-input__inner"]').eq(3).type("Science");
      cy.get('[class="el-input__inner"]').eq(4).type("234 RUB");
      cy.get('[class="el-input__inner"]').eq(5).type("Sci");
      cy.get('[class="el-input__inner"]').eq(6).type("None");

      cy.get("button").contains("Submit").click();

      cy.wait(300);

      cy.get('[class="el-menu-item"]').contains("Books").click();

      cy.contains("Some isbn");
      cy.contains("Vasiliy");
      cy.contains("Pupkin");
      cy.contains("Science");
      cy.contains("234 RUB");
      cy.contains("Sci");
    });
});
