/**
 * The sampling function is different from throttling as throttling limits
the execution of the function once in a given amount of time while
sampling limits the execution by executing function once in a given
number of calls.
 */


const throttle = (func, limit) => {
    let lastRan = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastRan >= limit) {
        func(...args);
        lastRan = now;
      }
    };
  };
  
  // Example usage
  const logMessage = () => console.log("Logged at:", new Date().toLocaleTimeString());
  
  const throttledLog = throttle(logMessage, 2000);
  
  // Simulate rapid calls
  setInterval(throttledLog, 500);
  