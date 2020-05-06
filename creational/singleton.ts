class Logger {
  private static logger: Logger | null = null;

  static get instance(): Logger {
    if (!Logger.logger) {
      Logger.logger = new Logger();
    }
    return Logger.logger;
  }

  public info(message: string) {
    console.info(message);
  }
}

Logger.instance.info('Hello from singleton');
