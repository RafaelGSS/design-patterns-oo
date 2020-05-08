/*
 * Proxy (middleware)
 *
 * Proxy is a structural design pattern that provides an object that acts as a substitute
 * for a real service object used by a client. A proxy receives client request, does some work
 * (ACL, Caching) and then passes the request to a service object
 */
interface HandlerRequest {
  request(): void;
}

class Controller implements HandlerRequest {
  public request(): void {
    console.log('Controller Handling request');
  }
}

class ProxyController implements HandlerRequest {
  private controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  public request(): void {
    console.log('ProxyController handling request');
    if (this.checkAccess()) {
      this.controller.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    return true;
  }

  private logAccess(): void {
    console.log('ProxyController logging access');
  }
}

const proxy = new ProxyController(new Controller());
proxy.request();
