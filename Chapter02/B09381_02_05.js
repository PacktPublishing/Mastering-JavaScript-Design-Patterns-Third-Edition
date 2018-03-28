(function (global) {
  var oContainer = null;
  function setContainer(oCont) {
    oContainer = oCont;
  }
  function addZero(nTime) {
    return nTime < 10? '0' + nTime : nTime;
  }
  function getFormattedTime(dTime) {
    return addZero(dTime.getHours()) + ':' + addZero(dTime.getMinutes()) + ':' + addZero(dTime.getSeconds());
  }
  function render() {
    oContainer.innerHTML = 'Test Module: ' + getFormattedTime(new Date());
  }
  function destroy() {
    oContainer.innerHTML = '';
  }
  global.pkt.time = {
    render: function (oContainer) {
      setContainer(oContainer);
      render();
    },
    destroy: function () {
      destroy();
    }
  };
}(this));
