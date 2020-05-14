abstract class SmartWorker {
  protected mediator: Mediator;

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  public abstract work(): void;
}

class Alarm extends SmartWorker {
  public work(): void {
    console.log('Alarm ring');
    this.mediator.notify(this, 'alarm');
  }
}

class CoffeeMachine extends SmartWorker {
  public work(): void {
    console.log('Making coffe');
    this.mediator.notify(this, 'coffe');
  }
}

class Mediator {
  private alarm: SmartWorker;

  private coffeeMachine: SmartWorker;


  constructor(alarm: SmartWorker, coffeeMachine: SmartWorker)  {
    this.alarm = alarm;
    this.alarm.setMediator(this);
    this.coffeeMachine = coffeeMachine;
    this.coffeeMachine.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'alarm') {
      console.log('Mediator reacts on Alarm');
      this.coffeeMachine.work();
    }

    if (event === 'coffe') {
      console.log('Mediator reacs on Coffe');
    }
  }
}

const coffeeMachine = new CoffeeMachine();
const alarm = new Alarm();
const mediator = new Mediator(alarm, coffeeMachine);

console.log('It is time!');
alarm.work();
