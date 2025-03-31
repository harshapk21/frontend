class ObserverPattern {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  emit(event, message) {
    this.events[event].forEach((cb) => cb(message));
  }
}

const obp = new ObserverPattern();

const clickListener1 = (message) => console.log("clicked CL1", message);

const clickListener2 = (message) => console.log("clicked CL2", message);

const clickListener3 = (message) => console.log("clicked CL3", message);

obp.on("click", clickListener1);
obp.on("click", clickListener2);
obp.on("click", clickListener3);
document.addEventListener("click", () => {
  obp.emit("click", "user has clicked");
});


/**
 * 1)might be useful when a user click is subscribed by multiple helper function present at different files , 2) you can give checkout/plugins eventing mechanism example as well.
 * above example is singleton class variant , we can do it multi-instances as well , just pass instance instead of fn in on fn param & in emit instead of cb(message) , do instance.invoke(message);
 */
