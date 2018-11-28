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
            firebase.database().ref("users/"+user.uid).update(
            {
                uid: uid,
                name:displayName,
                email:email,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                emailVerified: emailVerified,
                providerData: providerData
            }).then(function(){
                window.location.href='main.html';
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

initApp();