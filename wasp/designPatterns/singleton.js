class LoggerService {
  constructor() {
    if (!LoggerService.instance) {
      LoggerService.instance = this;
    }
    return LoggerService.instance;
  }
  property = 10;
  log(message) {
    console.log(message);
  }
}

/**
 * [LoggerService Instance]  
├── property: 10 (instance-specific)  
└── __proto__: LoggerService.prototype  
               └── log: [Function]  

[LoggerService.prototype]  
└── log: [Function]  
 */

/**
 * class LoggerService {
  property = 10; // Class field   
  (is equal to)
class LoggerService {
  constructor() {
    this.property = 10; // Assigned to `this` (the instance)
  }
}
}
 */


//console.log(new LoggerService() === new LoggerService()); // True

/**
 * Singleton design pattern is useful in cases like common caching across application, common logger service & also can be 
 * used in observer pattern.
 */
