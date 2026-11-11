// Motion is an enhancement: `html.motion` is only set when the visitor has not asked for reduced
// motion (see Layout.astro), and nothing is hidden unless this script runs.
const REVEAL = [
  '.section-head > *', '.band__head > *', '.phones:not(.hero__phones) > *', '.freela__item', '.rise > *',
  '.other__title', '.other__list li', '.backend__item', '.agents__member', '.agents__subtitle', '.agents__tile',
  '.about__grid > *', '.title', '.skills__subtitle', '.experience__item', '.skills__columns > *',
  '.education__item', '.contact__inner > *',
].join(', ');
const STAGGER_MS = 90;
const MAX_STEPS = 4;

if (document.documentElement.classList.contains('motion')) {
  // Whatever is already on screen (or above it, after a reload mid-page) stays as it is.
  let pending = [...document.querySelectorAll<HTMLElement>(REVEAL)].filter((element) => element.getBoundingClientRect().top >= window.innerHeight);
  for (const element of pending) {
    const step = Math.min([...element.parentElement!.children].indexOf(element), MAX_STEPS);
    element.style.setProperty('--reveal-delay', `${step * STAGGER_MS}ms`);
    element.dataset.reveal = '';
  }

  // Checked on scroll rather than with an observer, so an anchor jump or a fast flick
  // cannot leave anything it passed still hidden.
  let queued = false;
  const check = () => {
    queued = false;
    const line = window.innerHeight * 0.9;
    pending = pending.filter((element) => {
      if (element.getBoundingClientRect().top > line) return true;
      element.classList.add('is-visible');
      return false;
    });
    if (!pending.length) removeEventListener('scroll', onScroll);
  };
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(check);
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });

  // The mascots only move while their section is on screen.
  const team = document.querySelector('.agents__team');
  if (team) {
    new IntersectionObserver(([entry]) => team.classList.toggle('is-live', entry.isIntersecting)).observe(team);
  }

  // A tap or click makes a mascot jump once.
  for (const member of document.querySelectorAll<HTMLElement>('.agents__member')) {
    const art = member.querySelector<HTMLElement>('.agents__mascot > *');
    if (!art) continue;
    member.addEventListener('click', () => {
      art.classList.remove('is-jumping');
      void art.offsetWidth;
      art.classList.add('is-jumping');
    });
    art.addEventListener('animationend', () => art.classList.remove('is-jumping'));
  }
}
