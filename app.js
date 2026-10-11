'use strict';
const projects = {
  hashemi: { name: 'مطعم هاشمي', en: 'Hashemi Restaurant', path: 'hashemi-restaurant' },
  city: { name: 'بطاطا المدينة — City Fries', en: 'City Fries', path: 'city-fries' },
  mzmz: { name: 'مزمز — MZMZ', en: 'MZMZ', path: 'mzmz-restaurant' },
  huna: { name: 'هُنا الروابي', en: 'Huna Alrawabi', path: 'huna.alrawabi-resturant' }
};
const dialog = document.querySelector('#preview');
const frame = document.querySelector('#project-frame');
let trigger;
let currentUrl;
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    trigger = button;
    currentUrl = `https://codexa-jo7.github.io/${project.path}/`;
    const name = window.siteLanguage === 'en' ? project.en : project.name;
    document.querySelector('#preview-title').textContent = name;
    frame.title = window.siteLanguage === 'en' ? `Preview: ${name}` : `معاينة موقع ${name}`;
    frame.src = currentUrl;
    dialog.showModal();
    document.body.classList.add('modal-open');
    document.querySelector('#close-preview').focus();
  });
});
document.querySelector('#close-preview').addEventListener('click', () => dialog.close());
document.querySelector('#reload').addEventListener('click', () => { if (currentUrl) frame.src = currentUrl; });
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => {
  frame.removeAttribute('src');
  currentUrl = undefined;
  document.body.classList.remove('modal-open');
  trigger?.focus();
});
