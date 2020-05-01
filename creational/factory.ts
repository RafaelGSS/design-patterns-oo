/*
 * Factory Method
 *
 * Provide an interface for creating objects in a superclass, but allows
 * subclasses to alter the type of objects that will be created
 *
 */
interface ITransport {
  run(): void;
}

class Truck implements ITransport {
  run(): void {
    console.log('Running Truck');
  }
}

class Sea implements ITransport {
  run(): void {
    console.log('Running Sea');
  }
}

interface ILogistics {
  createTransport(): ITransport;
}

class RoadLogistics implements ILogistics {
  createTransport(): ITransport {
    return new Truck();
  }
}

class SeaLogistics implements ILogistics {
  createTransport(): ITransport {
    return new Sea();
  }
}

const logistics: ILogistics[] = [
  new SeaLogistics(),
  new RoadLogistics()
];

for (const logisticFactory of logistics) {
  const transport = logisticFactory.createTransport();
  transport.run();
}
