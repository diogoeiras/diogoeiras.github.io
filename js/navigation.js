function switchTab(tab){
    $( "#about" ).addClass( "hidden" );
    $( "#portfolio" ).addClass( "hidden" );
    $( "#contact" ).addClass( "hidden" );
    $( "#about-nav" ).removeClass( "active" );
    $( "#portfolio-nav" ).removeClass( "active" );
    $( "#contact-nav" ).removeClass( "active" );
    
    switch(tab){
        case "about":
            $( "#about" ).removeClass( "hidden" );
            $( "#about-nav" ).addClass( "active" );
            break;
        case "portfolio":
            $( "#portfolio" ).removeClass( "hidden" );
            $( "#portfolio-nav" ).addClass( "active" );
            break;
        case "contact":
            $( "#contact" ).removeClass( "hidden" );
            $( "#contact-nav" ).addClass( "active" );
            break;
    }
}