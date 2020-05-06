interface MessageAdapter {
  adapt(message: string): object;
}

class ApiAdapter implements MessageAdapter {
  adapt(message: string): object {
    return { type: 'api', message };
  }
}

class SOAAdapter implements MessageAdapter {
  adapt(message: string): object {
    return { type: 'soa', message };
  }
}

class MessageConsumer {
  private adapter: MessageAdapter;

  constructor(adapter: MessageAdapter) {
    this.adapter = adapter;
  }

  public onMessage(message: string): object {
    return this.adapter.adapt(message);
  }
}

const messageConsumerApi = new MessageConsumer(new ApiAdapter());
const messageConsumerSOA = new MessageConsumer(new SOAAdapter());

const responses = [messageConsumerApi, messageConsumerSOA].map((messageConsumer: MessageConsumer) => {
  return messageConsumer.onMessage('example message');
});

console.log(responses);
