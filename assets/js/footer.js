// footer
    // Get the bubbles container

document.addEventListener("DOMContentLoaded", function () {
    const bubblesContainer = document.querySelector('.bubbles');

    // Create bubbles
    for (let i = 0; i < 128; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
      bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
      bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
      bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
      bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
      bubblesContainer.appendChild(bubble);
    }

});

// function submitForm(event) {
//     event.preventDefault();

//     document.getElementById('nameError').innerText = '';
//     document.getElementById('emailError').innerText = '';
//     document.getElementById('messageError').innerText = '';

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let message = document.getElementById('message').value;

//     if (name.trim() === '') {
//         document.getElementById('nameError').innerText = 'Name is required';
//         return;
//     }

//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         document.getElementById('emailError').innerText = 'Invalid email address';
//         return;
//     }

 

//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
// }

function submitForm(event) {
    event.preventDefault();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    nameError.innerText = '';
    emailError.innerText = '';
    messageError.innerText = '';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '') {
        nameError.innerText = 'Name is required';
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerText = 'Invalid email address';
        return;
    }

    // Assuming the form is successfully submitted
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display success message
    successMessage.innerText = 'Form submitted successfully!';

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // You can also clear the errors if needed
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    // Clear success message after a delay (e.g., 3 seconds)
    setTimeout(() => {
        document.getElementById('successMessage').innerText = '';
    }, 3000);
}