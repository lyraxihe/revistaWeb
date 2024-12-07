
$(document).ready(function()
{
    /* ========================================================= */
    // HEADER

    /* --------------------------------------------------------- */
    // menuItem hover
    let menuItems = $("section .menu_flex a");
    menuItems.hover(function()
    {
        $(this).toggleClass("hover_menuItem");
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
});
