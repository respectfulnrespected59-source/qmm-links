// The Autonomous Studio: lesson pages. Copy buttons on every command + the Lesson 2 unlock.
// The key is made by the student's own Claude Code (see /course/key/):
//   QMM- + first 8 hex chars (uppercase) of SHA-256("qmm-lesson-2:" + email, lowercased, no spaces)
// This page recomputes it in the browser. It is a motivational gate, not security: the point is that their crew
// made it. Self-check value: you@example.com -> QMM-5E539FC3 (also printed on the key page).
(function () {
  'use strict';

  var SALT = 'qmm-lesson-2:';
  var LESSON_2 = '/course/lesson-2-3c842e2f/';
  var STORE = 'qmm-course-lesson-2';
  var ENDPOINT = 'https://formsubmit.co/ajax/respectfulnrespected59@gmail.com';
  var SUBJECT = 'The Autonomous Studio: Lesson 2 unlocked';
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var COPIED_MS = 1600;

  // ---------- copy buttons ----------
  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  function copy(button) {
    var text = button.parentElement.querySelector('code').textContent;
    var done = function (ok) {
      button.textContent = ok ? 'Copied' : 'Select it';
      button.classList.toggle('done', ok);
      setTimeout(function () { button.textContent = 'Copy'; button.classList.remove('done'); }, COPIED_MS);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
    } else {
      done(fallbackCopy(text));
    }
  }

  document.querySelectorAll('.cmd .copy').forEach(function (button) {
    button.addEventListener('click', function () { copy(button); });
  });

  // ---------- the unlock ----------
  var form = document.getElementById('unlock-form');
  if (!form) return;
  var status = form.parentElement.querySelector('.status');
  var unlocked = document.getElementById('unlocked');
  var link = document.getElementById('lesson-2-link');

  function normEmail(value) { return String(value || '').replace(/\s+/g, '').toLowerCase(); }
  function normKey(value) {
    var key = String(value || '').replace(/\s+/g, '').toUpperCase();
    return key.indexOf('QMM-') === 0 ? key : 'QMM-' + key;
  }

  /** @returns {Promise<string>} the key this email should have, e.g. QMM-5E539FC3 */
  function keyFor(email) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(SALT + email)).then(function (buf) {
      var hex = Array.prototype.map.call(new Uint8Array(buf).slice(0, 4), function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
      return 'QMM-' + hex.toUpperCase();
    });
  }

  function setStatus(message, kind) {
    status.textContent = message;
    status.className = 'status' + (kind ? ' ' + kind : '');
  }

  function remember() {
    try { localStorage.setItem(STORE, '1'); } catch (err) { /* private window: unlock still works this visit */ }
  }

  function wasUnlocked() {
    try { return localStorage.getItem(STORE) === '1'; } catch (err) { return false; }
  }

  function showUnlocked() {
    link.href = LESSON_2;
    unlocked.hidden = false;
    form.parentElement.hidden = true;
  }

  // Tells the owner someone unlocked (how many installs we've driven). Best effort by design: the student already
  // proved the install, so a failed notification must never take the unlock away from them.
  function notify(email) {
    var body = JSON.stringify({ _subject: SUBJECT, _template: 'table', form: 'unlock', email: email });
    fetch(ENDPOINT, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: body })
      .catch(function () { /* see above: the unlock stands either way */ });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = normEmail(form.email.value);
    var key = normKey(form.key.value);
    if (!EMAIL_RE.test(email)) { setStatus('Add the email you gave Claude first.', 'err'); form.email.focus(); return; }
    if (!/^QMM-[0-9A-F]{8}$/.test(key)) { setStatus('A key looks like QMM- and 8 letters or numbers, e.g. QMM-1A2B3C4D.', 'err'); form.key.focus(); return; }
    if (!(window.crypto && crypto.subtle)) { setStatus('This browser can\'t check keys. Open this page in Chrome, Edge, Safari or Firefox.', 'err'); return; }
    keyFor(email).then(function (expected) {
      if (key !== expected) {
        setStatus('That key doesn\'t match this email. Use the exact email you gave Claude, or ask it to make the key again.', 'err');
        return;
      }
      remember();
      notify(email);
      showUnlocked();
    }, function () {
      setStatus('Something went wrong checking the key. Refresh the page and try again.', 'err');
    });
  });

  if (wasUnlocked()) showUnlocked();
})();
