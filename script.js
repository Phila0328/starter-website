// Small script: set year and button actions
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('cta').addEventListener('click', function() {
  alert('Nice! You clicked the CTA — this site is ready to be edited.');
});

document.getElementById('scrollToFeatures').addEventListener('click', function() {
  const el = document.getElementById('features');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});