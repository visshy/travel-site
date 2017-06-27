import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }
    
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this)); /* The 'bind' keyword will ensure 'this' from line no.11 binds to the 'this' from line no.17 */
        
    }
    
    toggleTheMenu(){
        
        this.menuContent.toggleClass("site-header__menu-content--is-visible"); 
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;
