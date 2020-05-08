/*
 * Facade
 *
 * Facade is structural design pattern that provides a simplified interface to a library,
 * a framework, or any other complex set of classes.
 */
class Subsystem1 {
  public operation(): void {
    console.log('Operation of Subsystem1');
  }
}

class Subsystem2 {
  public operation(): void {
    console.log('Operation of Subsystem2');
  }
}

class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subsystem1 = subsystem1;
    this.subsystem2 = subsystem2;
  }

  public operation(): void {
    // complex operation
    this.subsystem1.operation();
    this.subsystem2.operation();
  }
}

const facadeOperation = new Facade(new Subsystem1(), new Subsystem2());
facadeOperation.operation();
