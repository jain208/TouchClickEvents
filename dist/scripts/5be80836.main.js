console.log("'Allo 'Allo!"),function(a,b){function c(a,b){b=b?b:"";var c='<div class="message '+b+'">'+a+"</div>";console.log(b),h.html(h.html()+c)}function d(){c("Expanding!!","red"),j.removeClass("collapsed").promise().done(function(){k.addClass("appButtonSelected"),j.animate({top:0})})}function e(){c("Collapsing!!","red"),j.addClass("collapsed").promise().done(function(){k.removeClass("appButtonSelected"),j.animate({top:-300})})}function f(){return!j.hasClass("collapsed")}function g(){return j.hasClass("collapsed")}var h=a(".log");c(b.touch?"touch enabled!!":"touch not enabled!!");var i=(b.touch,"#app-promo"),j=a(i),k=a(".flightapps"),l=b.touch?"touchstart":"click";if(j.addClass("collapsed"),b.touch||k.on("click",function(){c("Clicked!!","blue"),g()?d():e()}),b.touch){k.on("touchstart",function(){c("touch start!!","blue")});var m;k.on("touchmove",function(a){var b=a.originalEvent.touches?a.originalEvent.touches[0].pageY:a.pageY;b>m?g()&&d():f()&&e(),m=b,console.log(a),c("touch move!!","blue")}),k.on("touchend",function(){})}a(document).on(l,function(b){b.target;b.target!=k.get(0)&&f()&&(console.log(a(b.target)),a(b.target).parents("#app-promo").length||e())}),a("#clearLog").on("click",function(){h.empty()})}(window.jQuery,window.Modernizr);