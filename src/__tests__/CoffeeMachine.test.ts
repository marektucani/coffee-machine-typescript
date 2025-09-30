import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money inserted", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 10)).toBe("Serving Coffee (small)");
  });

  
});

describe("small drink prices", () => {
  it("small coffee costs 2€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");

    const result = machine.serve(drink,2,false,10)

    expect(result).toBe("Serving Coffee (small)")
  });

  it("small tea costs 1.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Tea", 1.5, false, 0, "small");

    const result = machine.serve(drink,1.5,false,10)

    expect(result).toBe("Serving Tea (small)")
  });

  it("small chocolate costs 2.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Chocolate", 2.5, false, 0, "small");

    const result = machine.serve(drink,2.5,false,10)

    expect(result).toBe("Serving Chocolate (small)")
  });

  it("small Capuccino costs 3€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Capuccino", 3, false, 0, "small");

    const result = machine.serve(drink,3,false,10)

    expect(result).toBe("Serving Capuccino (small)")
  });

  it("small Latte costs 3.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 0, "small");

    const result = machine.serve(drink,3.5,false,10)

    expect(result).toBe("Serving Latte (small)")
  });
  


  
});




describe("medium drink prices", () => {
  it("medium coffee costs 2€ + 0.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "medium");

    const result = machine.serve(drink,2.5,false,10)

    expect(result).toBe("Serving Coffee (medium)")
  });

  it("medium tea costs 1.5€ + 0.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Tea", 1.5, false, 0, "medium");

    const result = machine.serve(drink,2,false,10)

    expect(result).toBe("Serving Tea (medium)")
  });

  it("medium chocolate costs 2.5€ + 0.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Chocolate", 2.5, false, 0, "medium");

    const result = machine.serve(drink,3,false,10)

    expect(result).toBe("Serving Chocolate (medium)")
  });

  it("medium Capuccino costs 3€ + 0.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Capuccino", 3, false, 0, "medium");

    const result = machine.serve(drink,3.5,false,10)

    expect(result).toBe("Serving Capuccino (medium)")
  });

  it("medium Latte costs 3.5€ + 0.5€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 0, "medium");

    const result = machine.serve(drink,4,false,10)

    expect(result).toBe("Serving Latte (medium)")
  });
  

  

  
});


describe("large drink prices", () => {
  it("large coffee costs 2€ + 1€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "large");

    const result = machine.serve(drink,3,false,10)

    expect(result).toBe("Serving Coffee (large)")
  });

  it("large tea costs 1.5€ + 1€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Tea", 1.5, false, 0, "large");

    const result = machine.serve(drink,2.5,false,10)

    expect(result).toBe("Serving Tea (large)")
  });

  it("large chocolate costs 2.5€ + 1€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Chocolate", 2.5, false, 0, "large");

    const result = machine.serve(drink,3.5,false,10)

    expect(result).toBe("Serving Chocolate (large)")
  });

  it("large Capuccino costs 3€ + 1€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Capuccino", 3, false, 0, "large");

    const result = machine.serve(drink,4,false,10)

    expect(result).toBe("Serving Capuccino (large)")
  });

  it("large Latte costs 3.5€ + 1€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 0, "large");

    const result = machine.serve(drink,4.5,false,10)

    expect(result).toBe("Serving Latte (large)")
  });
  

  

  
});

describe("added content", () => {
  it("milk adds 0.2€", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, true, 0, "small");

    const result = machine.serve(drink,3.7,false,10)

    expect(result).toBe("Serving Latte (small)")

  });

  it("up to 2 sugarcubes dont add anything", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 2, "small");

    const result = machine.serve(drink,3.5,false,10)

    expect(result).toBe("Serving Latte (small)")

  });

  it("over 2 sugarcubes add 0.1€ each", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 4, "small");

    const result = machine.serve(drink,3.7,false,10)

    expect(result).toBe("Serving Latte (small)")

  });

  it("machine cancan't serve over 5 sugarcubes", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 6, "small");

    const result = machine.serve(drink,4.1,false,10)

    expect(result).toBe("Error: too much sugar")

  });
});

describe("change return and not enought money", () => {
  it("machine return correct amount of change", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 0, "small");

    const result = machine.serve(drink,3.8,false,10)

    expect(result).toBe("Serving Latte (small) with change 0.30")

  });

  it("machine returns no change", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 0, "small");

    const result = machine.serve(drink,3.5,false,10)

    expect(result).toBe("Serving Latte (small)")
  });


  it("machine doesnt sell drink while not enought money", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 0, "small");

    const result = machine.serve(drink,3.4,false,10)

    expect(result).toBe("Not enough money")
  });

});

describe("loyalty card", () => {
  it("every 5th drink is free", () =>{
    const machine = new CoffeeMachine();
    const drink = new Drink("Latte", 3.5, false, 0, "small");

    const result = machine.serve(drink,3.5,true,10)

    expect(result).toBe("Serving Latte (small)")

  });
});

