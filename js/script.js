(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));

  function activate(id, moveFocus) {
    tabs.forEach(function (tab) {
      var selected = tab.dataset.tab === id;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.tabIndex = selected ? 0 : -1;
      if (selected && moveFocus) tab.focus();
    });

    panels.forEach(function (panel) {
      var match = panel.id === 'tab-' + id;
      panel.hidden = !match;
    });
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      activate(tab.dataset.tab, false);
    });

    tab.addEventListener('keydown', function (e) {
      var newIndex = null;
      if (e.key === 'ArrowRight') newIndex = (index + 1) % tabs.length;
      if (e.key === 'ArrowLeft') newIndex = (index - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') newIndex = 0;
      if (e.key === 'End') newIndex = tabs.length - 1;
      if (newIndex !== null) {
        e.preventDefault();
        activate(tabs[newIndex].dataset.tab, true);
      }
    });
  });
})();
