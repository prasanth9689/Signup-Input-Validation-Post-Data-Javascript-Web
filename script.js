
const button = document.getElementById('signUpButton');

button.addEventListener('click', function () {


    var mUserName = document.getElementById('name').value;
    var mEmail = document.getElementById('email').value;
    var mPassword = document.getElementById('password').value;
    

    if (mUserName.trim() == '') {
        var mUserName = document.getElementById('name');
        mUserName.focus();
        mUserName.scrollIntoView();
        document.getElementById( 'error-username' ).style.display = 'block';
        return;
    } 
    
    if(mUserName.length < 5){
        alert("Username must be at least 3 characters long!.");
        return;
    }
    if(mEmail.trim() == ''){
        var mEmail = document.getElementById('email');
        mEmail.focus();
        mEmail.scrollIntoView();
        document.getElementById( 'error-email' ).style.display = 'block';
        return;
    }
    if(mEmail.trim() == ''){
        var mEmail = document.getElementById('email');
        mEmail.focus();
        mEmail.scrollIntoView();
        document.getElementById( 'error-email' ).style.display = 'block';
        return;
    }
    if(mPassword.trim() == ''){
        var mPassword = document.getElementById('password');
        mPassword.focus();
        mPassword.scrollIntoView();
        document.getElementById( 'error-password' ).style.display = 'block';
        return;
    }


    var button = document.getElementById("actionButton");
    var textView = document.getElementById("text");

    textView.style.display = "none";

    progressCircle.classList.remove("hidden");

    postApi();

});


const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

userName.addEventListener("input", function() {
    document.getElementById("name").className = document.getElementById("name").className.replace(" error", "");
    document.getElementById( 'error-username' ).style.display = 'none';
});

email.addEventListener("input", function() {
    document.getElementById("email").className = document.getElementById("email").className.replace(" error", "");
    document.getElementById( 'error-email' ).style.display = 'none';
});

password.addEventListener("input", function() {
    document.getElementById("password").className = document.getElementById("password").className.replace(" error", "");
    document.getElementById( 'error-password' ).style.display = 'none';
});

function postApi(){
    alert("inner called postApi");

    document.getElementById('myForm').addEventListener('submit', function(event) {
    var formData = new FormData(this); // Create FormData object

    console.log(formData);

    fetch('https://skyblue.co.in/hi.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {

        textView.style.display = "block";
        progressCircle.classList.add("hidden");

        document.getElementById('response').innerText = data; // Display response from the server
    })
    .catch(error => console.error('Error:', error));
});

}




// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     var formData = new FormData(this); // Create FormData object

//     fetch('your-server-endpoint-url', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('response').innerText = data; // Display response from the server
//     })
//     .catch(error => console.error('Error:', error));
// });


// function showProgress() {
//     var button = document.getElementById("actionButton");
//     var textView = document.getElementById("text");

//     textView.style.display = "none";

//     progressCircle.classList.remove("hidden");
//         setTimeout(function() {
//         textView.style.display = "block";
//         progressCircle.classList.add("hidden");
//     }, 3000);
// }
