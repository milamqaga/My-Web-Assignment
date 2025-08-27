// main.js - small helpers: update year and basic form handling
document.addEventListener('DOMContentLoaded', () => {
  // Set copyright years on all pages
  const years = [ 'year','year2','year3','year4','year5' ];
  const y = new Date().getFullYear();
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // Basic client-side form handling (placeholder)
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      const out = document.getElementById('formMsg');
      if (!name || !email || !msg) {
        out.textContent = 'Please complete all required fields.';
        return;
      }
      out.textContent = 'Thank you — your enquiry was recorded (demo).';
      enquiryForm.reset();
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const out = document.getElementById('contactMsg');
      out.textContent = 'Thanks — message sent (demo).';
      contactForm.reset();
    });
  }
});
