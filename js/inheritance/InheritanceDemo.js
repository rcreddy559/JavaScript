var Job = function() {
  this.pay = true;
};

Job.prototype.print = function() {
  console.log(this.pay ? "Please hire me " : "no thank you");
};

const TechJob = function(title, pay) {
  Job.call(this);
  this.title = title;
  this.pay = pay;
};

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

TechJob.prototype.print = function() {
  console.log(
    this.pay ? "Job is great, please hir me " : "I wold rather learn javasritp"
  );
};

var softwarePosition1 = new TechJob("Javascript develoepr", true);
var softwarePosition2 = new TechJob("vd develoepr", false);

softwarePosition1.print();
softwarePosition2.print();
