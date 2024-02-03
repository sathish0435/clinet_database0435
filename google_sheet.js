const scriptURL = 'https://script.google.com/macros/s/AKfycbwiIBv7zlf81vj_pVFOSqjfXwZvUHgECITLQdezbPn0dxBOydkSjMB-a8nNmK3DNm8jYQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})