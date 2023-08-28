//MENU HIDE/SHOW

jQuery('.menu').hide();

jQuery('.menu-backdrop').hide();

jQuery('.open-menu').on("click", function(){
    
    jQuery('.visible').show();
    
});


jQuery('.close-button').on("click", function(){
    
    jQuery('.visible').hide();
    
});




//MODAL LEADS FORM

jQuery('.cta-btn').on("click", function(){
    
    jQuery('.subscribe-form-overlay').show();
    
});

jQuery('.first-form-close').on("click", function(){
    
    jQuery('.subscribe-form-overlay').hide();
    
})


jQuery('#sent').on("click", function(){
    jQuery('.subscribe-1').hide();
    jQuery('.thank-you').show();
})



jQuery('#ok').on("click", function(){
    
    jQuery('.subscribe-form-overlay').hide();
    
})







