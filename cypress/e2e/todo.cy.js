describe("todo list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/redux-todo");
  });
  it("get second contain text", () => {
    cy.get(".matterWrap .matter").eq(1).should("contain.text", "Learn Golang");
  });
  it("add item in todo", () => {
    const newItem = "test";
    cy.get(".matterWrap .matter").then((list) => {
      const listLength = list.length;
      cy.get(".add > div > input").type(newItem);
      cy.get(".add > div > button").click();
      cy.get(".matterWrap .matter").should("have.length", listLength + 2);
      cy.get(".matterWrap .matter").last().should("contain.text", newItem);
    });
  });

  it("del item", () => {
    const newItem = "test";
    cy.get(".matterWrap .matter").as("abc");
    cy.get(".add > div > input").type(newItem);
    cy.get(".add > div > button").click();
    cy.get("@abc").last().find("svg").click();
    cy.get("@abc").last().should("not.contain", newItem);
  });
});
