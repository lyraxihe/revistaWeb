
$(document).ready(function()
{
    /* ========================================================= */
    // HEADER

    // menuItem hover
    let menuItems = $("section .menu_flex a");
    menuItems.hover(function()
    {
        $(this).toggleClass("hover_menuItem");
    })

    // suscribeButton hover
    let suscribeButton = $(".suscribeButton");
    suscribeButton.hover(function()
    {
        suscribeButton.toggleClass("hover_Button");
    })
    /* ========================================================= */
});
