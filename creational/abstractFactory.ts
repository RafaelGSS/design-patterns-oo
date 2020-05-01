/*
 * Abstract Factory
 *
 * Is a creational design pattern that lets you produce families of related objects without
 * specifying their concrete classes
 */

// Chairs
interface IChair {
  hasLegs(): boolean;
  sitOn(): void;
}

class VictorianChair implements IChair {
  hasLegs(): boolean {
    return true;
  }

  sitOn(): void {
    console.log('SitOn VictorianChair');
  }
}

class ModernChair implements IChair {
  hasLegs(): boolean {
    return false;
  }

  sitOn(): void {
    console.log('SitOn ModernChair');
  }
}

// Sofas
interface ISofa {
  sleepOn(): void;
}

class VictorianSofa implements ISofa {
  sleepOn(): void {
    console.log('SleepOn VictorianSofa');
  }
}

class ModernSofa implements ISofa {
  sleepOn(): void {
    console.log('SleepOn ModernSofa');
  }
}

// Factories
interface IFurnitureFactory {
  createChair(): IChair;
  createSofa(): ISofa;
}

class VictorianFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new VictorianChair();
  }

  createSofa(): ISofa {
    return new VictorianSofa();
  }
}

class ModernFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new ModernChair();
  }

  createSofa(): ISofa {
    return new ModernSofa();
  }
}

const isModern = true;
let fornitureFactory: IFurnitureFactory;

if (isModern) {
  fornitureFactory = new ModernFurnitureFactory();
} else {
  fornitureFactory = new VictorianFurnitureFactory();
}

fornitureFactory.createChair().sitOn();
fornitureFactory.createSofa().sleepOn();
