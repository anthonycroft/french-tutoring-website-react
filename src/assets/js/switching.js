// This line of code creates a modal, and prevents the modal from being closed by clicking off it.
var myModal = new bootstrap.Modal(document.getElementById('myModal'), { backdrop:"static", keyboard: false});


    // Check to see if the user has visited the site before/chosen a styling theme.
    var themeCheck = localStorage.getItem('theme');
    // This condition checks whether there is any value for "theme" currently saved in localStorage. It shows the modal if there is no value saved.
    if(themeCheck == null) {
        myModal.show();
    }

       // This section changes the value of the theme based on which button is clicked.
    $('[name=styling]').on('click', function(event){
        console.log(event.target.value);
        selectedRadioBtn = Number(event.target.value);
        console.log(`selectedRadioBtn: ${selectedRadioBtn}`)
        
        theme = localStorage.getItem('theme');
    });

        // Close button event listener for the modal. Takes the default of "French for Fun" choice selection.
    $('#close-modal').on('click', function(event){
        selectedRadioBtn = 3;
        console.log(`selectedRadioBtn: ${selectedRadioBtn}`);
        youtubeApiCall(selectedRadioBtn);
        GetImage(imageSearchTermsBase);
        checkTheme(selectedRadioBtn);
        localStorage.setItem('theme', selectedRadioBtn);
        theme = localStorage.getItem('theme');
    });

    // This event listener results in the chosen theme being saved and stored, and the modal being hidden.
    $('#save-modal').on('click', function(){
        console.log(`selectedRadioBtn: ${selectedRadioBtn}`);
        if(selectedRadioBtn != undefined) {
            console.log(`selectedRadioBtn: ${selectedRadioBtn}`);
            localStorage.setItem('theme', selectedRadioBtn);
            myModal.hide();
            // this runs the function to grab the relevant Youtube video dependent on the user's selection of French for Business, French For Kids,
            // or French for Fun.
            // youtubeApiCall(selectedRadioBtn);
            // This runs the unSplash API call to grab the relevant image based on theme selection.
            if (selectedRadioBtn === 1) {
                // GetImage(imageSearchTermsBusiness);
                window.location = "business.html";
            }
            if (selectedRadioBtn === 2) {
                // GetImage(imageSearchTermsCartoons);
                window.location = "kids.html";
            }
                // GetImage(imageSearchTermsBase);
        
            // This function makes sure that the theme-switching navbar has the correct anchor element being styled with the class of "active".
            checkTheme(selectedRadioBtn);
            // THis line simply updates the global "theme" variable. 
            theme = localStorage.getItem('theme');
            var themeNum = Number(theme);
        console.log(`themeNum: ${themeNum}`);
        var selectedLandingPage = arrayOfPageUrls[themeNum - 1];
        console.log(`selectedLandingPage: ${selectedLandingPage}`);
        window.location = selectedLandingPage.toString();
        }
    });
    

    // this section of code carries over the redirect from the previous time, so whatever is the current stored value of theme, which could have been
    // updated by the user with the theme-switching buttons, this will carry over to when the browser window is reopened.
    var checkingTheme = localStorage.getItem('theme');

    if(checkingTheme == "1") {
        window.location = "business.html";
    }
    if(checkingTheme == "2") {
        window.location = "kids.html";
    }
    
     
