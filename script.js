/* CourtSync website script. No need to edit this to change the text. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 768) setMenu(false); });
  }
  // Menu above nav bar so the toggle stays clickable
  if (menu) menu.style.zIndex = '40';

  // Scroll reveals, once per element
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Tagline: words go from muted to full colour one at a time
  var tl = document.querySelector('[data-reveal-words]');
  if (tl) {
    var text = tl.textContent.trim().split(/\s+/);
    tl.setAttribute('aria-label', text.join(' '));
    tl.textContent = '';
    var words = text.map(function (w, i) {
      var s = document.createElement('span');
      s.className = 'tl-word';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = w + (i < text.length - 1 ? ' ' : '');
      tl.appendChild(s);
      return s;
    });
    if (reduce || !('IntersectionObserver' in window)) {
      words.forEach(function (s) { s.classList.add('on'); });
    } else {
      // A word turns on when it passes a line 40 percent up from the bottom of the screen
      var wo = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting || en.boundingClientRect.top < 0) {
            en.target.classList.add('on'); wo.unobserve(en.target);
          }
        });
      }, { rootMargin: '0px 0px -40% 0px' });
      words.forEach(function (s) { wo.observe(s); });
    }
  }

  // Current section in the nav
  var links = document.querySelectorAll('.nav-links a');
  if ('IntersectionObserver' in window && links.length) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && en.target.id === 'top') {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
        } else if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[en.target.id].setAttribute('aria-current', 'location');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).concat(['top']).forEach(function (id) { var el = document.getElementById(id); if (el) so.observe(el); });
  }

  // Demo video: shows a play button only when a YouTube code is set in index.html
  var fig = document.getElementById('video-box');
  var play = document.getElementById('play-btn');
  if (fig && play) {
    var id = (fig.getAttribute('data-video-id') || '').trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
      play.hidden = false;
      play.addEventListener('click', function () {
        var box = document.createElement('div');
        box.className = 'video-frame';
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&playsinline=1&rel=0';
        f.title = 'CourtSync demo video';
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        box.appendChild(f);
        fig.appendChild(box);
        play.remove();
      });
    }
  }
})();
