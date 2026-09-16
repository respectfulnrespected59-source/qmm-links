// Common Unity Network — landing behaviour.
// Signups go to Formsubmit.co (no account, no key in the page). The inbox must be
// activated ONCE by clicking the link Formsubmit emails on the first submission.
(function () {
  'use strict';

  var ENDPOINT = 'https://formsubmit.co/ajax/respectfulnrespected59@gmail.com';
  var SUBJECT = 'Common Unity Network — new member';
  var TOAST_MS = 3600;

  var toast = document.getElementById('toast');
  var toastTimer = 0;

  function showToast(message, isError) {
    toast.textContent = message;
    toast.classList.toggle('err', Boolean(isError));
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, TOAST_MS);
  }

  function readForm(form) {
    var data = { _subject: SUBJECT, _template: 'table' };
    Array.prototype.forEach.call(form.elements, function (el) {
      if (el.name && el.type !== 'submit') data[el.name] = el.value.trim();
    });
    return data;
  }

  function isValid(data) {
    if (data._honey) return false; // honeypot filled = bot
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) return false;
    if ('name' in data && !data.name) return false;
    if ('trade' in data && !data.trade) return false;
    return true;
  }

  function submit(event) {
    event.preventDefault();
    var form = event.target;
    var data = readForm(form);
    if (data._honey) { form.reset(); return; }
    if (!isValid(data)) { showToast('Add a real email (and your name and trade) first.', true); return; }

    var button = form.querySelector('button[type=submit]');
    button.disabled = true;
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) { return res.json(); })
      .then(function (body) {
        if (body && String(body.success) === 'true') {
          form.reset();
          showToast("You're on the block. ✊");
        } else {
          showToast('Could not send — email rob@quantummelaninmedia.com and we will add you by hand.', true);
        }
      })
      .catch(function () {
        showToast('Could not send — email rob@quantummelaninmedia.com and we will add you by hand.', true);
      })
      .finally(function () { button.disabled = false; });
  }

  ['hero-form', 'join-form'].forEach(function (id) {
    var form = document.getElementById(id);
    if (form) form.addEventListener('submit', submit);
  });

  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('stuck', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
