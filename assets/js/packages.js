/**
 * Package filter tabs – switch between Family / School & College / Corporate
 */
(function () {
  var tabs = document.querySelectorAll('.filter-tabs [role="tab"]');
  var panels = document.querySelectorAll('.package-panel');

  function setActiveTab(activeTab) {
    var filter = activeTab.getAttribute('data-filter');
    tabs.forEach(function (tab) {
      var isSelected = tab === activeTab;
      tab.setAttribute('aria-selected', isSelected);
      tab.setAttribute('aria-pressed', isSelected);
    });
    panels.forEach(function (panel) {
      var match = panel.getAttribute('data-type') === filter;
      panel.hidden = !match;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setActiveTab(tab);
    });
    tab.addEventListener('keydown', function (e) {
      var idx = Array.prototype.indexOf.call(tabs, tab);
      var next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        next = tabs[idx + 1] || tabs[0];
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        next = tabs[idx - 1] || tabs[tabs.length - 1];
      }
      if (next) {
        e.preventDefault();
        next.focus();
        setActiveTab(next);
      }
    });
  });

  // Open correct panel from hash (e.g. packages.html#school)
  var hash = window.location.hash.slice(1);
  if (hash === 'school' || hash === 'corporate') {
    var tab = document.querySelector('.filter-tabs [data-filter="' + hash + '"]');
    if (tab) setActiveTab(tab);
  }
})();
