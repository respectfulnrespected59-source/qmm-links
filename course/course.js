// The Autonomous Studio: waitlist page behaviour.
// Signups go to Formsubmit.co, the same inbox /cui/network/ uses. That inbox was activated and
// PROVEN on 2026-09-16 (a real submit returned success:"true"). No key lives in this page.
// A signup only counts when Formsubmit answers success:"true"; anything else shows an error,
// never a fake "you're on the list".
(function () {
  'use strict';

  var ENDPOINT = 'https://formsubmit.co/ajax/respectfulnrespected59@gmail.com';
  var SUBJECT = 'The Autonomous Studio: new waitlist signup';
  var TIMEOUT_MS = 12000;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var FAIL_MSG = "That didn't go through. Try again in a minute, or DM us on Instagram @quantummelaninmedia.";
  var YT_ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

  /** @param {HTMLFormElement} form @returns {Record<string, string>} */
  function readForm(form) {
    var data = { _subject: SUBJECT, _template: 'table', form: form.id };
    Array.prototype.forEach.call(form.elements, function (el) {
      if (el.name && el.type !== 'submit') data[el.name] = el.value.trim();
    });
    return data;
  }

  function setStatus(form, message, kind) {
    var box = form.parentElement.querySelector('.status');
    box.textContent = message;
    box.className = 'status' + (kind ? ' ' + kind : '');
  }

  /** @returns {Promise<boolean>} true only when Formsubmit confirms the signup */
  function post(data) {
    var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS) : 0;
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (res) { return res.json(); })
      .then(function (body) { return Boolean(body) && String(body.success) === 'true'; })
      .finally(function () { clearTimeout(timer); });
  }

  function submit(event) {
    event.preventDefault();
    var form = event.target;
    var data = readForm(form);
    if (data._honey) { form.reset(); return; } // a bot filled the hidden field
    if (!EMAIL_RE.test(data.email || '')) {
      setStatus(form, 'Add a real email address first.', 'err');
      form.querySelector('input[type=email]').focus();
      return;
    }

    var button = form.querySelector('button[type=submit]');
    button.disabled = true;
    setStatus(form, 'Sending…', '');
    post(data)
      .then(function (ok) {
        if (!ok) { setStatus(form, FAIL_MSG, 'err'); return; }
        form.reset();
        setStatus(form, "You're on the list. Lesson 1 comes to " + data.email + " when it's ready.", 'ok');
      })
      .catch(function () { setStatus(form, FAIL_MSG, 'err'); })
      .finally(function () { button.disabled = false; });
  }

  // The player loads only when a receipt is pressed (youtube-nocookie), so the page itself sets
  // no third-party cookies and stays fast — the same pattern as /classes/.
  function playVideo(button) {
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' +
      encodeURIComponent(button.getAttribute('data-yt')) + '?autoplay=1&rel=0';
    frame.title = button.getAttribute('aria-label') || 'Video';
    frame.allow = YT_ALLOW;
    frame.allowFullscreen = true;
    button.parentElement.replaceChildren(frame);
  }

  ['hero-form', 'join-form'].forEach(function (id) {
    var form = document.getElementById(id);
    if (form) form.addEventListener('submit', submit);
  });
  document.querySelectorAll('[data-yt]').forEach(function (button) {
    button.addEventListener('click', function () { playVideo(button); });
  });
})();
