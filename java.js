var index=1;
slider(1);



function pre(n){
    index=index-1;
    slider(index);
}
function post(n){
    index=index+1;
    slider(index);
}



function slider(n){
    var i;
    var x=document.getElementsByClassName("slideshow");
    if(n>x.length){
        index=1;
    }
    if(n<1){
        index=x.length;
    }
    
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    x[index-1].style.display="block";
}




$(document).ready(function(){
    $(".fd").click(function(){
        $(".register1").fadeIn();
       
    });
});
$(document).ready(function(){
    $(".icon").click(function(){
        $(".register1").hide();
    });
});

$(document).ready(function(){
    $(".fd").click(function(){
        $(".register2").hide();
        $(".login").show();
        $(".password_recovary").hide();
    })
})

$(document).ready(function(){
    $(".newresister").click(function(){
        $(".register2").show();
        $(".login").hide();
    });
});

$(document).ready(function(){
    $(".forgot_password").click(function(){
        $(".register2").hide();
        $(".login").hide();
        $(".password_recovary").show();
    });
});

$(document).ready(function(){
    $(".ourclass").click(function(){
        $(".navigation").toggle();
    });
});