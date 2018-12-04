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
                    
                    //Save user info in Session Storage
                    var user = {'uid': uid, 'name':displayName, 'email':email};
                    sessionStorage.setItem('user', JSON.stringify(user));

                });
            } else {
                // Page is redirected.
                window.location.href='/';
            }
        }, function(error) {
            console.log(error);
        });
    };
    
    window.addEventListener('load', function() {
        initApp()
    });    
    
    $("#logout").on("click", function(e) {         // Logout button listener
        var promise = firebase.auth().signOut();          // Firebase Authenticated User Signout 
        promise.then(function(){
            window.location.href='/';
        });
    });

});
