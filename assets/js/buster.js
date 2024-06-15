document.addEventListener("DOMContentLoaded", function() {
    //var elements = document.querySelectorAll('a.lightbox-youtube');
   var linkElements = document.querySelectorAll('a.buster');
   linkElements.forEach(lnk => {
        //if(lnk.classList.contains('buster')) {
            var url = lnk.getAttribute('href');
            url = url + "%3F" + Math.random();
            lnk.setAttribute('href',url);
            lnk.classList.remove('buster');
        //}
    });
});