/*
 * Decorator
 *
 * Decorator is structural design pattern that lets you attach new behaviors to objects
 * by placing these objects inside special wrapper object that contains the behaviors.
*/

interface Notifier {
  send(message: string): void;
}

abstract class BaseDecorator implements Notifier {
  protected wrapper: Notifier;

  constructor(wrapper?: Notifier) {
    this.wrapper = wrapper;
  }

  send(message: string): void {
    if (this.wrapper) {
      return this.wrapper.send(message);
    }
  }
}

class SMSDecorator extends BaseDecorator {
  constructor() {
    super();
  }

  send(message: string): void {
    super.send(message);
    console.log('SMS message: ' + message);
  }
}

class FacebookDecorator extends BaseDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }

  send(message: string): void {
    super.send(message);
    console.log('Facebook message: ' + message);
  }
}

class SlackDecorator extends BaseDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }

  send(message: string): void {
    super.send(message);
    console.log('Slack message: ' + message);
  }
}

const isToFacebook = true;
const isToSlack = true;

let notifier = new SMSDecorator();

if (isToFacebook) {
  notifier = new FacebookDecorator(notifier);
}

if (isToSlack) {
  notifier = new SlackDecorator(notifier);
}

notifier.send('Example message');
