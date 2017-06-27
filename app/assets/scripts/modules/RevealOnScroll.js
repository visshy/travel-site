import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; /*waypoints is used to handle scroll events*/

class RevealOnScroll{
    constructor(els, offset){
        this.itemsToReveal = els; /*els is elements like featured-item or testimonial*/
        this.offsetPercent = offset;
        this.hideInitially();
        this.createWaypoints();        
    }
    
    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }
    
    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){ /*the 'each' function will help to create 4 waypoints for the 4 featured items*/
            var currentItem = this;
            new Waypoint({
                element: currentItem, /*the DOM element that we want to watch for*/
                handler: function(){
                    $(currentItem).addClass("reveal-item--is-visible");
                },/*what we want to happen when that element is scrolled to*/
                offset: that.offsetPercent /*This will help to fade in the feature item as soon as we start scrolling to it*/
            });
        });
    }
    
}

export default RevealOnScroll;