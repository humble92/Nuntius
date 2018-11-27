// Load this script file at the beginning of all HTML files, before body
// <script src="setup_firebase.js"></script>

(function(){
    // Insert your firebase init script here.
    // You can find it from firebase console "add project" .
    // Begin init code
    
    (function(){  
    var config = {
        apiKey: "AIzaSyAZBESlhxBgfiPMAETSwUciulyP-awv56s",
        authDomain: "nuntius-6e5fd.firebaseapp.com",
        databaseURL: "https://nuntius-6e5fd.firebaseio.com",
        projectId: "nuntius-6e5fd",
        storageBucket: "nuntius-6e5fd.appspot.com",
        messagingSenderId: "392115579080"
    };
    firebase.initializeApp(config);
        

    // End of init code
    
    // Add following line to get a unique (global) ref to the the database,
    // so that when we need to use the database later, 
    // we can create a locally scoped reference.
    app_firebase = firebase; 
})();

