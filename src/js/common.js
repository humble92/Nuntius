// A $( document ).ready() block.
$( document ).ready(function() {
    $("#userpic").on("click", function(e) {         // Logout button listener
        var promise = firebase.auth().signOut();          // Firebase Authenticated User Signout 
        promise.then(function(){
            window.location.href='/';
        });
    });
});
