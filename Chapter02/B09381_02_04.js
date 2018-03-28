var GreetingModule = (function () {
  return {
    container: document.querySelector('#greet'),
    render: function () {
      this.container.innerHTML = 'Hi, there';
    },
    destroy: function () {
      this.container.innerHTML = '';
    }
  };
}());
