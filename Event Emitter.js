class EventEmitter {
    constructor() {
      this.events = {};
    }
    
    subscribe(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      
      const eventListener = { callback };
      this.events[eventName].push(eventListener);
      
      return {
        unsubscribe: () => {
          const index = this.events[eventName].indexOf(eventListener);
          if (index > -1) {
            this.events[eventName].splice(index, 1);
            return undefined;
          }
        }
      };
    }
    
    emit(eventName, args = []) {
      const eventListeners = this.events[eventName];
      if (!eventListeners) {
        return [];
      }
      
      return eventListeners.map((eventListener) => {
        return eventListener.callback(...args);
      });
    }
  }