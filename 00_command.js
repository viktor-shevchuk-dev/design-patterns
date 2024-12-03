class RemoteControlInvoker {
  history = [];
  command = null;

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    if (this.command) {
      this.command.execute();
      this.history.push(this.command);
    } else {
      throw new Error('No command set.');
    }
  }

  pressUndo() {
    const command = this.history.pop();
    if (command) {
      command.unexecute();
    } else {
      throw new Error('No commands to undo.');
    }
  }
}

class ICommand {
  execute() {
    throw new Error('This method must be overridden');
  }
  unexecute() {
    throw new Error('This method must be overridden');
  }
}

class TelevisionOnCommand extends ICommand {
  television = null;

  constructor(television) {
    super();
    this.television = television;
  }

  execute() {
    this.television.on();
  }
  unexecute() {
    this.television.off();
  }
}

class TelevisionOffCommand extends ICommand {
  television = null;

  constructor(television) {
    super();
    this.television = television;
  }

  execute() {
    this.television.off();
  }
  unexecute() {
    this.television.on();
  }
}

class LightOnCommand extends ICommand {
  light = null;

  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.on();
  }
  unexecute() {
    this.light.off();
  }
}

class LightOffCommand extends ICommand {
  light = null;

  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.off();
  }
  unexecute() {
    this.light.on();
  }
}

class DimUpCommand extends ICommand {
  light = null;

  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.dimUp();
  }
  unexecute() {
    this.light.dimDown();
  }
}

class DimDownCommand extends ICommand {
  light = null;

  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.dimDown();
  }
  unexecute() {
    this.light.dimUp();
  }
}

class MacroCommand extends ICommand {
  commands = [];

  constructor(commands) {
    super();
    this.commands = commands;
  }

  execute() {
    this.commands.forEach((cmd) => cmd.execute());
  }

  unexecute() {
    [...this.commands].reverse().forEach((cmd) => cmd.unexecute());
  }
}

class LightReceiver {
  #dim = 0;

  on() {
    this.#dim = 4;
    console.log('Light is on!');
  }
  off() {
    this.#dim = 0;
    console.log('Light is off!');
  }
  dimDown() {
    this.#dim--;
    console.log('Bulb dim is at ' + this.#dim);
  }
  dimUp() {
    this.#dim++;
    console.log('Bulb dim is at ' + this.#dim);
  }
}

class TeleVisionReceiver {
  #volume = 0;

  on() {
    this.#volume = 4;
    console.log('TV is on!');
  }
  off() {
    this.#volume = 0;
    console.log('TV is off!');
  }
  volumeDown() {
    this.#volume--;
    console.log('TV volume is at ' + this.#volume);
  }
  volumeUp() {
    this.#volume++;
    console.log('TV volume is at ' + this.#volume);
  }
}

const remoteControlInvoker = new RemoteControlInvoker();
const light = new LightReceiver();
const television = new TeleVisionReceiver();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const dimUpCommand = new DimUpCommand(light);
const dimDownCommand = new DimDownCommand(light);
const televisionOnCommand = new TelevisionOnCommand(television);
const televisionOffCommand = new TelevisionOffCommand(television);

remoteControlInvoker.setCommand(lightOnCommand);
remoteControlInvoker.pressButton(); // Light is on!
remoteControlInvoker.setCommand(dimDownCommand);
remoteControlInvoker.pressButton(); // Bulb dim is at 3
remoteControlInvoker.pressButton(); // Bulb dim is at 2
// Undo the last command
remoteControlInvoker.pressUndo(); // Bulb dim is at 3

remoteControlInvoker.setCommand(televisionOnCommand);
remoteControlInvoker.pressButton(); // TV is on!

// Macro command
const allDevicesOffCommand = [lightOffCommand, televisionOffCommand];
const turnItAllOffRoutine = new MacroCommand(allDevicesOffCommand);
remoteControlInvoker.setCommand(turnItAllOffRoutine);
remoteControlInvoker.pressButton(); // Light is off! TV is off!
remoteControlInvoker.pressUndo(); // TV is on! Light is on!
