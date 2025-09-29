import { Drink } from "../src/Drink";
import { CoffeeMachine } from "../src/CoffeeMachine";

describe("CoffeeMachine", () => {
  let machine: CoffeeMachine;

  beforeEach(() => {
    machine = new CoffeeMachine();
  });

  it("should serve coffee if exact money inserted", () => {
    const drink = new Drink("Coffee", 2, false, 0, "small");
    expect(machine.serve(drink, 2, false, 10)).toBe("Serving Coffee (small)");
  });

  it("should not serve if not enough money", () => {
    const drink = new Drink("Tea", 1.5, false, 0, "small");
    expect(machine.serve(drink, 1, false, 10)).toBe("Not enough money");
  });

  it("should apply loyalty discount on 5th drink", () => {
    const drink = new Drink("Coffee", 2, false, 0, "small");
    for (let i = 0; i < 4; i++) {
      machine.serve(drink, 2, true, 10);
    }
    expect(machine.serve(drink, 0, true, 10)).toBe("Serving Coffee (small)");
  });

  it("should return error if sugar > 5", () => {
    const drink = new Drink("Latte", 3.5, true, 6, "medium");
    expect(machine.serve(drink, 5, false, 10)).toBe("Error: too much sugar");
  });
});