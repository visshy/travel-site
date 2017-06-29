import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }
    
    events(){
        // Clicking the open modal button 'Get in Touch'
        this.openModalButton.click(this.openModal.bind(this));
        // Clicking the close 'X' modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        // pushes any key to close the modal
        $(document).keyup(this.keyPressHandler.bind(this));
        
    }
    
    keyPressHandler(e){
        if(e.keyCode == 27){ // keycode fro Esc key is 27
            this.closeModal(); 
        }
    }
    
    openModal(){
        this.modal.addClass("modal--is-visible");
        return false; //this will prevent the default behaviour of scrolling up when you click the button. The default behaviour is because of the "#" in the 'href' of the link 'Get in Touch'
    }
    
    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
    
}

export default Modal;