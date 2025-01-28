// Navbar Section

function toggleMenu() {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
}

// signup 
// const signupTab = document.getElementById('signup-tab');
// const loginTab = document.getElementById('login-tab');
// const signupForm = document.getElementById('signup-form');
// const loginForm = document.getElementById('login-form');

// signupTab.addEventListener('click', () => {
//     signupTab.classList.add('active');
//     loginTab.classList.remove('active');
//     signupForm.classList.remove('hidden');
//     loginForm.classList.add('hidden');
// });

// loginTab.addEventListener('click', () => {
//     loginTab.classList.add('active');
//     signupTab.classList.remove('active');
//     loginForm.classList.remove('hidden');
//     signupForm.classList.add('hidden');
// });

// const signupButton = document.getElementById('signup-button');
// const loginButton = document.getElementById('login-button');

// signupButton.addEventListener('click', () => {
//     const name = document.getElementById('signup-name').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     if (name && email && password) {
//         console.log('Signup Successful:', { name, email, password });
//         localStorage.setItem('user', JSON.stringify({ name, email, password }));
//         Swal.fire({
//             title: "Success!",
//             text: "Signup Successful!",
//             icon: "success"
//         });
//         document.getElementById('signup-name').value = "";
//         document.getElementById('signup-email').value = "";
//         document.getElementById('signup-password').value = "";
//     } else {
//         Swal.fire({
//             title: "Error!",
//             text: "Please fill out all fields.",
//             icon: "error"
//         });
//     }
// });

// loginButton.addEventListener('click', () => {
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//         console.log('Login Successful:', { email });
//         Swal.fire({
//             title: "Success!",
//             text: "Login Successful!",
//             icon: "success"
//         });
//         localStorage.removeItem('user');
//         document.getElementById('login-email').value = "";
//         document.getElementById('login-password').value = "";
//     } else {
//         Swal.fire({
//             title: "Error!",
//             text: "Invalid email or password.",
//             icon: "error"
//         });
//     }
// });