document.getElementById('year').textContent = new Date().getFullYear();

// Return to this page with a thank-you note after the form is sent
const next = document.querySelector('input[name="_next"]');
next.value = location.href.split('#')[0].split('?')[0] + '?sent=1#contact';
if (new URLSearchParams(location.search).has('sent')) {
  const note = document.createElement('p');
  note.textContent = 'Thank you, your message has been sent. We will be in touch soon.';
  note.className = 'sent';
  document.querySelector('.contact form').replaceWith(note);
}

// Click a gallery image to view it full size
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.showModal();
  });
});
lightbox.addEventListener('click', () => lightbox.close());
