describe("todo list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/redux-todo");
  });
  it("add item in todo", () => {
    const newItem = "test";
    cy.get(".matterWrap .matter").then((list) => {
      const listLength = list.length;
      cy.get(".add > div > input").type(newItem);
      cy.get(".add > div > button").click();
      cy.get(".matterWrap .matter").should("have.length", listLength + 1);
    });
  });
  it("del item", () => {
    const newItem = "test";
    cy.get(".matterWrap .matter").as("abc");
    cy.get(".add > div > input").type(newItem);
    cy.get(".add > div > button").click();
    cy.get("@abc").last().find("svg").click();
    cy.get("@abc")
      .last()
      .invoke("text")
      .then((text) => {
        expect(text).not.to.include(newItem);
      });
  });
});
