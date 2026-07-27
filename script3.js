const form = document.getElementById('contact-form');

const inputs = form.querySelectorAll('input, textarea');

// Load saved values
inputs.forEach(function (input) {
    const saved = sessionStorage.getItem('form_' + input.name);

    if (saved) {
        input.value = saved;
    }

    input.addEventListener('input', function () {
        sessionStorage.setItem('form_' + input.name, input.value);
    });
});

// Submit
form.addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Form submitted successfully!');

    inputs.forEach(function (input) {
        sessionStorage.removeItem('form_' + input.name);
    });

    form.reset();
});
