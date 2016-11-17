_ini();


function _ini() {
  // document.getElementsByTagName("html")[0].style.display="hidden"; // Hide the page

  window.onload = function(e) {
    // console.log("Loaded for the first time");
    //document.getElementsByTagName("html")[0].style.display="block";
    if(window.location.href.indexOf("lequipe.fr") !== -1) {
      console.log("before")
      var elem = document.getElementsByTagName("div")[0];
      elem.style.display="none";
      console.log(elem);
    } else {
      // alert("None lequipe.fr");
      console.log("Ignoring ...")
    }
  };
}