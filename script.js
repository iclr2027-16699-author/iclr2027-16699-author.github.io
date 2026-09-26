(() => {
  const dialog = document.querySelector('#figure-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  const title = dialog.querySelector('h2');
  const original = dialog.querySelector('.original-link');
  let opener;

  document.querySelectorAll('.figure-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      const source = link.querySelector('img');
      image.src = link.href;
      image.alt = source.alt;
      title.textContent = link.dataset.title;
      original.href = link.href;
      dialog.showModal();
      dialog.querySelector('.dialog-body').scrollTo(0, 0);
    });
  });
  dialog.querySelector('.close-button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus());
})();

(() => {
  const video = document.querySelector('#driving-video');
  if (!video) return;
  const choices = document.querySelectorAll('.video-choice');
  const title = document.querySelector('#video-title');
  const description = document.querySelector('#video-description');

  choices.forEach(button => {
    button.addEventListener('click', () => {
      if (button.getAttribute('aria-pressed') === 'true') return;
      video.pause();
      choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
      video.poster = `assets/videos/${button.dataset.video}.webp`;
      video.src = `assets/videos/${button.dataset.video}.mp4`;
      video.setAttribute('aria-label', button.dataset.title);
      title.textContent = button.dataset.title;
      description.textContent = button.dataset.description;
      video.querySelector('a').href = video.src;
      video.querySelector('a').textContent = `Open ${button.dataset.title.toLowerCase()}`;
      video.load();
      video.play().catch(() => {});
    });
  });
})();
