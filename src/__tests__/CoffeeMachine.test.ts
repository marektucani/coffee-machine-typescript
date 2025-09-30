import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money inserted", () => {
    const machine = new CoffeeMachine();
    const moneyNeeded = 2
    const moneyInserted = 2
    const drink = new Drink("Coffee", moneyNeeded, false, 0, "small");
    const result = machine.serve(drink, moneyInserted, false, 10)

    expect(result).toBe("Serving Coffee (small)");
  });

  it("should give a 20% discount durring happy hours", () => {
    const machine = new CoffeeMachine();
    const HappyHour = 16;
    const drink = new Drink("Coffee", 2, false, 0, "small");
    const result = machine.serve(drink, 1.60, true, HappyHour)

    expect(result).toBe("Serving Coffee (small)");
  });

  it("should give an error because sugar limit was reached", () => {
    const machine = new CoffeeMachine();
    const Sugar = 6;
    const drink = new Drink("Coffee", 2, false, Sugar, "small");
    const result = machine.serve(drink, 2, true,  10)

    expect(result).toBe("Error: too much sugar");
  });

  it("should add sugar cubes with no extra price", () => {
    const machine = new CoffeeMachine();
    const Sugar = 1;
    const drink = new Drink("Coffee", 2, false, Sugar, "small");
    const result = machine.serve(drink, 2, true, 10)

    expect(result).toBe("Serving Coffee (small)");
  });
  
  it("should give change is you inserted more money than needed", () => {
    const machine = new CoffeeMachine();
    const price = 2
    const input = 2.20
    const drink = new Drink("Coffee", price, false, 0, "small");
    const result = machine.serve(drink, input, false, 10)

    expect(result).toBe("Serving Coffee (small) with change 0.20");
  });

  it("should give a coffee for free if loyalty card is active", () => {
    const machine = new CoffeeMachine();
    const loyaltyCard = true;
    const drink5 = new Drink("Coffee", 2, false, 0, "small");

    machine.serve(drink5, 2, loyaltyCard, 10)
    machine.serve(drink5, 2, loyaltyCard, 10)
    machine.serve(drink5, 2, loyaltyCard, 10)
    machine.serve(drink5, 2, loyaltyCard, 10)
    const result = machine.serve(drink5, 0, loyaltyCard, 10)

    expect(result).toBe("Serving Coffee (small)");

  });
});
