// A $( document ).ready() block.
$( document ).ready(function() {
    
    initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var uid = user.uid;
                var phoneNumber = user.phoneNumber;
                var providerData = user.providerData;
                user.getIdToken().then(function(accessToken) {

                });
            } else {
                window.location.href='/';
                // User is signed out.
                //document.getElementById('sign-in-status').textContent = 'Signed out';
                //document.getElementById('sign-in').textContent = 'Sign in';
                //document.getElementById('account-details').textContent = null;
            }
        }, function(error) {
            console.log(error);
        });
    };
    
    window.addEventListener('load', function() {
        initApp()
    });    
    
    $("#userpic").on("click", function(e) {         // Logout button listener
        var promise = firebase.auth().signOut();          // Firebase Authenticated User Signout 
        promise.then(function(){
            window.location.href='/';
        });
    });

});
