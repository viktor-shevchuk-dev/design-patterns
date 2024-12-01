class Button {
  click() {
    throw new Error('This method must be implemented by subclass');
  }
}
class Modal {
  render() {
    throw new Error('This method must be implemented by subclass');
  }
}

class LinuxButton extends Button {
  click() {
    console.log('Linux specific button rendered');
  }
}
class LinuxModal extends Modal {
  render() {
    console.log('Linux specific modal rendered');
  }
}
class MacButton extends Button {
  click() {
    console.log('Mac specific button rendered');
  }
}
class MacModal extends Modal {
  render() {
    console.log('Mac specific modal rendered');
  }
}
class WindowsButton extends Button {
  click() {
    console.log('Windows specific button rendered');
  }
}
class WindowsModal extends Modal {
  render() {
    console.log('Windows specific modal rendered');
  }
}

class UIFactory {
  createButton() {
    throw new Error('This method must be implemented by subclass');
  }
  createModal() {
    throw new Error('This method must be implemented by subclass');
  }
}

class LinuxFactory extends UIFactory {
  createButton() {
    return new LinuxButton();
  }

  createModal() {
    return new LinuxModal();
  }
}
class MacFactory extends UIFactory {
  createButton() {
    return new MacButton();
  }

  createModal() {
    return new MacModal();
  }
}
class WindowsFactory extends UIFactory {
  createButton() {
    return new WindowsButton();
  }

  createModal() {
    return new WindowsModal();
  }
}

const linuxFactory = new LinuxFactory();
const button = linuxFactory.createButton();
const modal = linuxFactory.createModal();
button.click();
modal.render();
