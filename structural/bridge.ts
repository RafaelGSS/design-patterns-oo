/*
 * Brige
 *
 * Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two
 * separate hierarchies—abstraction and implementation—which can be developed independently of each other.
 *
 */
interface Device {
  enable(): void;
  disable(): void;
  setVolume(percent: number): void;
  getVolume(): number;
  isEnabled(): boolean;
}

class Radio implements Device {
  private currentVolume: number;
  private enabled: boolean;

  constructor() {
    this.currentVolume = 0;
    this.enabled = true;
  }

  isEnabled(): boolean { return this.enabled; }
  getVolume(): number { return this.currentVolume; }

  enable(): void {
    console.info('Enabling Radio');
    this.enabled = true;
  }

  disable(): void {
    console.info('Disabling Radio');
    this.enabled = false;
  }

  setVolume(volume: number): void {
    this.currentVolume = volume;
  }
}

class TV implements Device {
  private currentVolume: number;
  private enabled: boolean;

  constructor() {
    this.currentVolume = 0;
    this.enabled = false;
  }

  isEnabled(): boolean { return this.enabled; }
  getVolume(): number { return this.currentVolume; }

  enable(): void {
    console.info('Enabling TV');
    this.enabled = true;
  }

  disable(): void {
    console.info('Disabling TV');
    this.enabled = false;
  }

  setVolume(volume: number): void {
    this.currentVolume = volume;
  }
}

class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 5);
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 5);
  }
}

class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  mute(): void {
    this.device.setVolume(0);
  }
}

const radioRemote = new RemoteControl(new Radio());
radioRemote.togglePower();
radioRemote.togglePower();
radioRemote.volumeUp();
radioRemote.volumeUp();
radioRemote.volumeDown();

const tvRemote = new RemoteControl(new TV());
tvRemote.togglePower();
tvRemote.togglePower();
tvRemote.volumeUp();
tvRemote.volumeUp();
tvRemote.volumeDown();

const tvAdvancedRemote = new AdvancedRemoteControl(new TV());
tvAdvancedRemote.togglePower();
tvAdvancedRemote.togglePower();
tvAdvancedRemote.volumeUp();
tvAdvancedRemote.volumeUp();
tvAdvancedRemote.volumeDown();
tvAdvancedRemote.mute();
