function init() {
    if($("#firepad-container").length) { 
   
    //// Initialize Firebase.
    //// TODO: replace with your Firebase project configuration.
    var config = {
      apiKey: "AIzaSyDxFdXRVvisLjT562S18MZdPGtD7acOV4A",
      authDomain: "litlab.firebaseapp.com",
      databaseURL: "https://litlab.firebaseio.com"
    };
    firebase.initializeApp(config);

    //// Get Firebase Database reference.
    var firepadRef = getExampleRef();

    //// Create CodeMirror (with lineWrapping on).
    var codeMirror = CodeMirror(document.getElementById('firepad-container'), { lineWrapping: true });

    //// Create Firepad (with rich text toolbar and shortcuts enabled).
    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
        { richTextToolbar: true, richTextShortcuts: true });

    //// Initialize contents.
    firepad.on('ready', function() {
      if (firepad.isHistoryEmpty()) {
        firepad.setHtml('Write something here...');
      }
    });
  } else {return}
}

  // Helper to get hash from end of URL or generate a random one.
  function getExampleRef() {
    var ref = firebase.database().ref();
    var url = window.location.pathname
    ref = ref.child(url);
    if (typeof console !== 'undefined') {
      console.log('Firebase data: ', ref.toString());
    }
    return ref;
  }
 
