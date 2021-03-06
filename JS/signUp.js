// Starts functions
function characterPage() {
    defaultPage();
    addEventListeners();
}


function addEventListeners() {


    const registerSubmitBtn = document.getElementById('registerSubmitBtn').addEventListener('click', registerStorage);    
    const signInSubmitBtn = document.getElementById('signInSubmitBtn').addEventListener('click', signInStorage);    
}

function openHowToPlayArea() {
    document.getElementById("howToPlayDiv").style.display = 'unset';
    document.getElementById("registerDiv").style.display = 'none';
    document.getElementById("registerDiv").style.display = 'none';
}

function openRegisterArea() {
    document.getElementById("registerDiv").style.display = 'unset';
    document.getElementById("howToPlayDiv").style.display = 'none';
    document.getElementById("signInDiv").style.display = 'none';
}

function openSignInArea() {
    document.getElementById("signInDiv").style.display = 'unset';
    document.getElementById("howToPlayDiv").style.display = 'none';
    document.getElementById("registerDiv").style.display = 'none';
}


//------------Register----------

// Register user and saves in local storage
function registerStorage() {

    let users;
    let pws;
    
    // Gets elements from HTML
    let createUsername = document.getElementById('createUsername');
    let createPw = document.getElementById('createPw');
    
    // Asks user to create username and password 
    if (createUsername.value.length == 0 && createPw.value.length == 0){
        alert('Please fill in email and password');
    } else {
        // Store
        localStorage.setItem('createUsername', createUsername.value);
        localStorage.setItem('createPw', createPw.value);
        alert('acc created');
        
        // Hides and shows pages if registerSubmitBtn is pressed
        document.getElementById('registerAreaBtn').style.display = 'none'; 
        document.getElementById('registerAreaBtn').style.display = 'none'; 
        document.getElementById('signInAreaBtn').style.display = 'none'; 
        document.getElementById('registerDiv').style.display = 'none'; 
        document.getElementById('signInDiv').style.display = 'none'; 
        document.getElementById('welcomeDiv').style.display = 'unset'; 

        // Retrieves
        document.getElementById("welcomePhrase").innerHTML = localStorage.getItem("createUsername");
    }
   
}

//--------------Sign In---------------
// Checks if username and pw is matching with local storage
function signInStorage() {
    var createUsername = localStorage.getItem('createUsername');
    var createPw = localStorage.getItem('createPw');
    
    var username = document.getElementById('username');
    var pw = document.getElementById('pw');
    
    if (username.value == createUsername && pw.value == createPw) {
        alert('You are logged in.');
        
        // Hides and shows pages if signInSubmitBtn is pressed
        document.getElementById('registerAreaBtn').style.display = 'none'; 
        document.getElementById('registerAreaBtn').style.display = 'none'; 
        document.getElementById('signInAreaBtn').style.display = 'none'; 
        document.getElementById('registerDiv').style.display = 'none'; 
        document.getElementById('signInDiv').style.display = 'none'; 
        document.getElementById('welcomeDiv').style.display = 'unset';  
    } else {
        alert('Error on login');
    }
    
    // Retrieves
    document.getElementById("welcomePhrase").innerHTML = localStorage.getItem("createUsername");
}


