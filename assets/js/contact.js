/**
 * Contact form: on submit, show success message and open mailto with prefilled body.
 * For Formspree: change form action to https://formspree.io/f/YOUR_ID and remove mailto logic.
 */
(function () {
  var form = document.getElementById('contact-form');
  var successEl = document.getElementById('form-success');
  var whatsappLink = document.getElementById('whatsapp-link');

  if (!form) return;

  // Prefill WhatsApp link from URL params or form
  var whatsappBase = 'https://wa.me/919876543210'; // TODO: Replace with your WhatsApp number (no + or spaces)
  function updateWhatsAppLink() {
    if (!whatsappLink) return;
    var params = new URLSearchParams(window.location.search);
    var destEl = document.getElementById('destination');
    var datesEl = document.getElementById('dates');
    var destination = params.get('destination') || (destEl && destEl.value) || '[destination]';
    var dates = params.get('dates') || (datesEl && datesEl.value) || '[dates]';
    var text = "Hi Annapurna Tourism, I'd like a quote for " + destination + " on " + dates + ".";
    whatsappLink.href = whatsappBase + '?text=' + encodeURIComponent(text);
  }

  var destEl = document.getElementById('destination');
  var datesEl = document.getElementById('dates');
  if (destEl) { destEl.addEventListener('change', updateWhatsAppLink); destEl.addEventListener('input', updateWhatsAppLink); }
  if (datesEl) { datesEl.addEventListener('change', updateWhatsAppLink); datesEl.addEventListener('input', updateWhatsAppLink); }

  // Prefill destination from ?package= or ?destination=
  var params = new URLSearchParams(window.location.search);
  var pkg = params.get('package');
  var destParam = params.get('destination');
  if (destParam && destEl) destEl.value = destParam;
  if (pkg && destEl && !destEl.value) {
    destEl.value = pkg.replace(/-family|-school|-corporate/g, '').replace(/-/g, ' ');
  }
  updateWhatsAppLink();

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = (document.getElementById('name') && document.getElementById('name').value) || '';
    var phone = (document.getElementById('phone') && document.getElementById('phone').value) || '';
    var email = (document.getElementById('email') && document.getElementById('email').value) || '';
    var travelType = (document.getElementById('travel-type') && document.getElementById('travel-type').value) || '';
    var destination = (document.getElementById('destination') && document.getElementById('destination').value) || '';
    var dates = (document.getElementById('dates') && document.getElementById('dates').value) || '';
    var travelers = (document.getElementById('travelers') && document.getElementById('travelers').value) || '';
    var budget = (document.getElementById('budget') && document.getElementById('budget').value) || '';
    var message = (document.getElementById('message') && document.getElementById('message').value) || '';

    var body = 'Name: ' + name + '\nPhone: ' + phone + '\nEmail: ' + email + '\nTravel type: ' + travelType +
      '\nDestination: ' + destination + '\nDates: ' + dates + '\nTravelers: ' + travelers + '\nBudget: ' + budget +
      '\n\nMessage:\n' + message;

    // TODO: Replace with your contact email
    var mailto = 'mailto:info@annapurnatourism.com?subject=Annapurna%20Tourism%20-%20Inquiry&body=' + encodeURIComponent(body);

    if (successEl) {
      successEl.classList.add('visible');
      successEl.focus();
    }
    window.location.href = mailto;
  });
})();
