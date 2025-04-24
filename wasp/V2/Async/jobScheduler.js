//Problem: Design a job scheduler that can handle asynchronous jobs with different priorities and enforce a maximum concurrency limit.
// The scheduler should be able to add jobs, execute them based on priority, and respect the concurrency limit.

class Job {
    constructor(id, priority, task) {
      this.id = id;
      this.priority = priority;
      this.task = task;
    }
  
    async run() {
      console.log(`🚀 Running Job ID: ${this.id}, Priority: ${this.priority}`);
      await this.task();
      console.log(`✅ Finished Job ID: ${this.id}`);
    }
  }
  
  class JobScheduler {
    constructor(concurrencyLimit = 2) {
      this.concurrencyLimit = concurrencyLimit;
      this.runningCount = 0;
      this.queue = []; // Queue of jobs (sorted by priority)
    }
  
    addJob(job) {
      this.queue.push(job);
      this.queue.sort((a, b) => b.priority - a.priority); // Keep highest priority first
      this.runNext();
    }
  
    runNext() {
      while (this.runningCount < this.concurrencyLimit && this.queue.length > 0) {
        const job = this.queue.shift();
        this.runningCount++;
  
        job.run()
          .catch((err) => console.error(` Error in Job ${job.id}`, err))
          .finally(() => {
            this.runningCount--;
            this.runNext(); // Try to fill freed slot
          });
      }
    }
  }
  

  const createJob = (id, priority) =>
    new Job(id, priority, () =>
      new Promise((res) => {
        console.log(`>>> Starting job ${id}`);
        setTimeout(() => {
          console.log(`<<< Done job ${id}`);
          res();
        }, 1000);
      })
    );
  
  const scheduler = new JobScheduler(2); // Max 2 concurrent jobs
  
  scheduler.addJob(createJob(1, 1));
  scheduler.addJob(createJob(2, 2));
  scheduler.addJob(createJob(3, 3));
  scheduler.addJob(createJob(4, 1));