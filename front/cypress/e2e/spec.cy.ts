describe("Fork&Folly general tests", () => {
  //proper screen size
  beforeEach(() => {
    cy.viewport(1400, 900);

    //get data
    cy.intercept(
      "GET",
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    ).as("getMeals");

    cy.visit("/");
    cy.wait("@getMeals");
  });

  //----------------------------------------------------------------------------
  it("Add/Remove items works", () => {
    //adding items works:
    cy.get("#orderSelectedDish").click();
    cy.get('[data-test="selectedcontent"]').children().should("have.length", 1);

    //removing items works:
    cy.get('[data-test="dishicon"]').click();
    cy.get('[data-test="selectedcontent"]').children().should("have.length", 0);
  });

  //----------------------------------------------------------------------------
  it("Changing dish works", () => {
    //check current dish name
    cy.get('[data-test="selectedDishtitle"]')
      .invoke("text")
      .then((text) => {
        cy.get(".item").eq(2).click();
        cy.get('[data-test="selectedDishtitle"]')
          .invoke("text")
          .should("not.equal", text);
      });
  });

  //----------------------------------------------------------------------------
  it("Check pricing texts", () => {
    //check current dish price
    cy.get('[data-test="selectedDishPrice"]')
      .invoke("text")
      .should("have.length.lessThan", 7);

    //check ttoal dishes price
    cy.get('[data-test="orderPrice"]')
      .invoke("text")
      .should("have.length.lessThan", 7);
  });
});
