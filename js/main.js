
$(document).ready(function()
{   
    /* ========================================================= */
    // HEADER

    /* --------------------------------------------------------- */
    // menuItem hover
    let menuItems = $("section .menu_flex a");
    menuItems.hover(function()
    {
        $(this).addClass("hover_menuItem");
    }, function()
    {
        $(this).removeClass("hover_menuItem");
    })
    /* --------------------------------------------------------- */

    /* --------------------------------------------------------- */
    // suscribeButton hover
    let suscribeButton = $(".suscribeButton");
    suscribeButton.hover(function()
    {
        suscribeButton.toggleClass("hover_suscribeButton");
    })
    /* --------------------------------------------------------- */

    /* --------------------------------------------------------- */
    // suscribeForm

    // Suscribe Button
    let suscribeForm   = $(".suscribeForm");
    suscribeButton.click(function(event)
    {
        event.stopPropagation();
        
        suscribeForm[0].reset();
        suscribeForm   .toggleClass('showMenuSuscribe');
        menuFlex       .removeClass('showMenuFlex');
    });

    // LogIn Button
    $(".logInButton").click(function()
    {
        let suscribeEmailText = $(".suscribeEmailText_input").val().trim();
        let passwordText = $(".passwordText_input").val().trim();

        if (suscribeEmailText === "" || passwordText === "")
        {
            alert("ERROR.\nPlease, fill all the fields before logging in.");
        }
        else
        {
            alert("Log In successfully");
        }

        suscribeForm[0].reset();

        suscribeForm.removeClass('showMenuSuscribe');
    });

    // Form's fields
    $(".suscribeForm input").focus(function() {
        $(this).addClass("input_focus");
    });
    
    $(".suscribeForm input").blur(function() {
        $(this).removeClass("input_focus");
    });

    // LogIn Button
    let logInButton = $(".logInButton");
    logInButton.hover(function()
    {
        logInButton.toggleClass("hover_logInButton");
    });

    // Click outside form
    $(document).click(function(event) {
        if (!$(event.target).closest(".suscribeForm, .suscribeButton, .menuButton, #menu").length) {
            $(".suscribeForm").removeClass("showMenuSuscribe");
            $("#menu .menu_flex").removeClass("showMenuFlex");
        }
    });
    /* --------------------------------------------------------- */

    /* --------------------------------------------------------- */
    // Menu Button (low resolution)
    let menuButton = $(".menuButton");
    let menuFlex   = $(".menu_flex");

    menuButton.click(function()
    {
        menuFlex    .toggleClass('showMenuFlex');
        suscribeForm.removeClass('showMenuSuscribe');
    });
    /* --------------------------------------------------------- */

    /* --------------------------------------------------------- */
    // Social Media Logos
    let socialMediaLogos = $("footer .socialMedia a img");
    socialMediaLogos.hover(function()
    {
        $(this).toggleClass("hover_socialMediaLogo");
    })
    /* --------------------------------------------------------- */

    /* --------------------------------------------------------- */
    // Form's fields
    $(".contactUs_form input, .contactUs_form textarea").focus(function() {
        $(this).addClass("input_focus");
    });
    
    $(".contactUs_form input, .contactUs_form textarea").blur(function() {
        $(this).removeClass("input_focus");
    });
    /* --------------------------------------------------------- */

    /* --------------------------------------------------------- */
    // sendMessageButton hover
    let sendMessageButton = $(".sendMessageButton");
    sendMessageButton.hover(function()
    {
        sendMessageButton.toggleClass("hover_sendMessageButton");
    })

    sendMessageButton.click(function()
    {
        let nameText = $(".nameText_input").val().trim();
        let emailText = $(".emailText_input").val().trim();
        let messageText = $(".messageText_input").val().trim();

        if (nameText === "" || emailText === "" || messageText === "")
        {
            alert("ERROR.\nPlease, fill all the fields before sending the message.");
        }
        else
        {
            alert("Message sent successfully");
        }

        $(".contactUs_form")[0].reset();
    })
    /* --------------------------------------------------------- */
    /* ========================================================= */



    /* ========================================================= */
    // MAIN (INDEX.HTML)

    /* --------------------------------------------------------- */
    // sendMessageButton hover

    let slideShowLeftImgs = $(".infiniteSlideShow_left .image-container");
    slideShowLeftImgs.hover(function()
    {
        $(this).toggleClass("hoverSlideShowImg");
        $(".infiniteSlideShow_left").toggleClass("stopAnimation");

    })

    let slideShowRightImgs = $(".infiniteSlideShow_right .image-container");
    slideShowRightImgs.hover(function()
    {
        $(this).toggleClass("hoverSlideShowImg");
        $(".infiniteSlideShow_right").toggleClass("stopAnimation");

    })
    /* --------------------------------------------------------- */
    /* ========================================================= */
});
