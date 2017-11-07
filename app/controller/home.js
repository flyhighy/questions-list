'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    * test() {
    	this.ctx.body = 'hi, test egg';
    }
  }
  return HomeController;
};
