/*global $,document, jQuery, alert*/
 
$(document).ready(function(){
    
    var sa = 0;
    
    $(".main .up-cf .categories h6").click(function(){
        
        $(".main .up-cf .categories .up-in").slideToggle();
        
        sa = sa +180;
       
        $(".main .up-cf .categories h6 .fa").css({
           
            "transform":'rotate(' + sa + 'deg)',
            "transition":"all 0.1s linear"
        });

    });
    
    $(".main .filter").click(function(){
        
        $(".main .up-o").css({
            
           "right":"0px",
            "transition":"all 0.4s ease-in-out"
            
        });  
        
    });
    
     $(".main .up-o .apply, .main .up-o .fa-times").click(function(){
        
        $(".main .up-o").css({
            
           "right":"-600px",
            "transition":"all 0.4s ease-in-out"
            
        });  
        
    });
    
   
    
      var ke = $(window).width();
    
    $(window).scroll(function(){
      
        ke = $(window).width();
        if(ke < 576)
        {
            
       if($(window).scrollTop() > 160)
           {
               $(".up-cf").css({
                   
                   "position":"fixed",
                   "top":"0px"
                   
               });
               
               $(".main .up-cf .categories .up-in, .main .up-o").css({
                   "top":"36px"
               });
           }
        else
            {
                  var tn = $(window).scrollTop();
                  var ho = 202-tn-0.5;
                 $(".up-cf").css({
                   
                  "position":"absolute",    
                   "top":"0px"
                   
                 });
                
                $(".main .up-cf .categories .up-in, .main .up-o").css({
                   "top":ho
               });
               
            }
    }
    });
    
          
     var sr,
         tpara,
         tspan,
         size,
         tparaNumber = 0;
         var count,
             ty;
    
     $(".z").on("click",function(){
        
          $(".mycart").fadeToggle();
         
         
     });
    
   $(".s, .m, .l").click(function()
  {
      
       
        sr = $(this).parent().parent().parent().prev().children().filter(".active").children().filter(".one").attr("src");
       
         tpara = $(this).parent().prev().prev().text();
       
          
        tspan = $(this).parent().parent().prev().text();
       
        if($(this).hasClass("s"))
            {
                size ="Size : Small";
            }
       else if($(this).hasClass("m"))
           {
               size ="Size : Medium";
           }
       else
           {
               size ="Size : Large";
           }
  
   
    'use strict';  
      
   var myDiv = document.getElementById("topp"),
    
    myNewElement = document.createElement("div"),
    
    myDivOne = document.createElement("div"),
    
    myDivTwo = document.createElement("div"),
      
    myPaOne = document.createElement("p"),
      
    myTextParagraph = document.createTextNode(tpara),  
      
    myTextSpan = document.createTextNode(tspan),
       
    myTextSpanTwo = document.createTextNode(size),   
      
    mySpanOne = document.createElement("span"),
       
    mySpanTwo = document.createElement("span"),   
    
    myImage = document.createElement("img"),
       
    myIcon = document.createElement("i"),
          
    myAttrElement = document.createAttribute("class"),
    
    myAttrDivOne = document.createAttribute("class"),
    
    myAttrDivTwo = document.createAttribute("class"),  
    
    myAttrImage = document.createAttribute("src"),
      
    myAttrPone = document.createAttribute("class"),
      
    myAttrSpanOne = document.createAttribute("class"),
       
    myAttrSpanTwo = document.createAttribute("class"),
       
    myAttrIcon = document.createAttribute("class");   

    myAttrElement.value = "gg";

    myAttrDivOne.value = "cart-product-image";

    myAttrDivTwo.value = "product-info";

    myAttrImage.value = sr;
       
    myAttrPone.value = "pmenu";
       
    myAttrSpanOne.value = "smenu";
       
    myAttrSpanTwo.value = "smenu";
       
    myAttrIcon.value = "fa fa-trash trash";   
       
    myPaOne.appendChild(myTextParagraph);
    
    mySpanOne.appendChild(myTextSpan);
       
    mySpanTwo.appendChild(myTextSpanTwo);   

    myNewElement.setAttributeNode(myAttrElement);

    myDivOne.setAttributeNode(myAttrDivOne);
  
    myDivTwo.setAttributeNode(myAttrDivTwo);

    myImage.setAttributeNode(myAttrImage);
       
    myPaOne.setAttributeNode(myAttrPone);
       
    mySpanOne.setAttributeNode(myAttrSpanOne);
       
    mySpanTwo.setAttributeNode(myAttrSpanTwo);
       
    myIcon.setAttributeNode(myAttrIcon);   
          
    myDivOne.appendChild(myImage);
       
    myDivTwo.appendChild(myPaOne);
       
    myDivTwo.appendChild(mySpanOne);
       
    myDivTwo.appendChild(mySpanTwo);   

    myDivTwo.appendChild(myIcon);   
       
    myNewElement.appendChild(myDivOne);
      
    myNewElement.appendChild(myDivTwo);  

    myDiv.appendChild(myNewElement);
       
    /* ****************** */ 
    
     count = Array.from(document.querySelectorAll('.nav .mycart .topp .gg'));
    
     $(".counter-product").text(count.length);
       
     if(parseInt($(".counter-product").text()) === 0)
        {
            $(".bag-empty").addClass("active");
        }
    else
        {
            $(".bag-empty").removeClass("active");
        }   
   
        /* ****************** */ 
       
    
          ty = Array.from(document.querySelectorAll('.nav .mycart .topp .gg .product-info .pmenu'));
       
        for(var i=ty.length-1;i<ty.length;i++)
            {
                re = $(ty[i]).text().substr(1);
                tparaNumber = tparaNumber+ parseInt(re);
            }  
       
        $(".total-number").text(tparaNumber);
       
        if(tparaNumber < 140)
            {
       
                  $(".psn").text(140 - tparaNumber);
            }
       
       else {
          $(".bottom-div p:first-child").text("Free shipping worldwide");
          
           
       }
       
          /* ****************** */     
          
         $(".trash").on("click",function(){
         
            $(this).parent().parent().remove();
               
            count = Array.from(document.querySelectorAll('.nav .mycart .topp .gg'));
            $(".counter-product").text(count.length); 
               
            if(parseInt($(".counter-product").text()) === 0)
             {
               $(".bag-empty").addClass("active");
             }
               
        ty = Array.from(document.querySelectorAll('.nav .mycart .topp .gg .product-info .pmenu'));
       
               tparaNumber = 0;
               
        for(var i=0;i<ty.length;i++)
            {
                re = $(ty[i]).text();
                tparaNumber = tparaNumber + parseInt(re.substr(1));  
            }
             
          $(".total-number").text(tparaNumber);
         
            if(tparaNumber < 140)
            {
                $(".bottom-div p:first-child").text("ADD $" + (140 - tparaNumber) + " OF ITEMS TO ENJOY FREE STANDARD SHIPPING");
            }
            
          else {
          $(".bottom-div p:first-child").text("Free shipping worldwide");
 
            }
 
         });
         
  });
    
 
   
     /* ****************** */  
    
    if(parseInt($(".counter-product").text()) === 0)
        {
            $(".bag-empty").addClass("active");
        }
    else
        {
            $(".bag-empty").removeClass("active");
        }
    
  /* ****************** */        
    
    
    
    var a = Array.from(document.querySelectorAll('.main .aside .categories ul li'));
    var b = Array.from(document.querySelectorAll('.main .aside .choose-color span'));
    var c = Array.from(document.querySelectorAll('.main .all-products .container > div'));
    var os = Array.from(document.querySelectorAll('.main .all-products .container .active .i .span-number'));

        
     $(".main .aside .categories ul li, .main .aside .choose-color span").on("click",function(){
         
          $(".sliderStatus").text("110");
         
         $(".main .aside .aside-price input.range").replaceWith("<input class=range type=range min=0 max=110 value=110 step=1 onchange=rangeSlider(this.value)>");
         
     });
    
     $(".main .aside .categories ul li").on("click",function(){
         
          $(".main .select-cate").text($(this).text());
         
     });
    
          $(".aside-price, .apply").on("click",function(){
          
            os = Array.from(document.querySelectorAll('.main .all-products .container .active .i .span-number'));
              
            for(var i=0;i<os.length;i++)
             {
               if(parseInt($(".sliderStatus").text()) < parseInt($(os[i]).text()))
                 {
                   $(os[i]).parent().parent().parent().parent().parent().addClass("hidden");
                 }
               else
                {
                   $(os[i]).parent().parent().parent().parent().parent().removeClass("hidden");
                }
                  
             }
        
         });
    
   
    
    
    
    $(".categories ul li").click(function(){
        
         var x = $(this).index();
          
         for(var i=0;i<c.length;i++)
         {
             $(c[i]).removeClass("active");
             $(c[i]).addClass("hidden");
             $(a[i]).removeClass("active1");
         }
        
       $(".main .all-products .container .col-sm-6").removeClass("hidden");
        
         for(var i=0;i<c.length;i++)
            {
                if(i === x)
                    {
                        $(c[i]).removeClass("hidden");
                        $(c[i]).addClass("active");
                        $(a[i]).addClass("active1");
                    }
            }
       
    });
    
    
    $(".choose-color span").on("click",function(){
         var n;
        for(var i=0;i<a.length;i++)
            {
                if($(a[i]).hasClass("active1"))
                    {
                        n = $(a[i]);
                    }
            }
        
        if($(n).hasClass("women") && $(this).hasClass("blue"))
            {
                for(var i=0;i<c.length;i++)
                 {
                   $(c[i]).addClass("hidden");        
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .women-blue").removeClass("hidden");
                $(".all-products .women-blue").addClass("active");
            }
        
          else if($(n).hasClass("women") && $(this).hasClass("green"))
            {
                for(var i=0;i<c.length;i++)
                 {
                     $(c[i]).addClass("hidden");
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .women-green").removeClass("hidden");
                $(".all-products .women-green").addClass("active");
            }
        
          else if($(n).hasClass("women") && $(this).hasClass("red"))
            {
                for(var i=0;i<c.length;i++)
                 {
                     $(c[i]).addClass("hidden");
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .women-red").removeClass("hidden");
                $(".all-products .women-red").addClass("active");
            }
        
          else if($(n).hasClass("women") && $(this).hasClass("yellow"))
            {
                for(var i=0;i<c.length;i++)
                 {
                     $(c[i]).addClass("hidden");
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .women-yellow").removeClass("hidden");
                $(".all-products .women-yellow").addClass("active");
            }
        
          else if($(n).hasClass("women") && $(this).hasClass("black"))
            {
                for(var i=0;i<c.length;i++)
                 {
                     $(c[i]).addClass("hidden");
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .women-black").removeClass("hidden");
                $(".all-products .women-black").addClass("active");
            }
        
          else if($(n).hasClass("women") && $(this).hasClass("orange"))
            {
                for(var i=0;i<c.length;i++)
                 {
                     $(c[i]).addClass("hidden");
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .women-orange").removeClass("hidden");
                $(".all-products .women-orange").addClass("active");
            }
        
        
        else if($(n).hasClass("men") && $(this).hasClass("blue"))
            {
                for(var i=0;i<c.length;i++)
                 {
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .men-blue").removeClass("hidden");
                $(".all-products .men-blue").addClass("active");
            }
        else if($(n).hasClass("men") && $(this).hasClass("green"))
            {
                for(var i=0;i<c.length;i++)
                 {
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .men-green").removeClass("hidden");
                $(".all-products .men-green").addClass("active");
            }
        else if($(n).hasClass("men") && $(this).hasClass("red"))
            {
                for(var i=0;i<c.length;i++)
                 {
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .men-red").removeClass("hidden");
                $(".all-products .men-red").addClass("active");
            }
        
        else if($(n).hasClass("men") && $(this).hasClass("yellow"))
            {
                for(var i=0;i<c.length;i++)
                 {
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .men-yellow").removeClass("hidden");
                $(".all-products .men-yellow").addClass("active");
            }
        
        else if($(n).hasClass("men") && $(this).hasClass("black"))
            {
                for(var i=0;i<c.length;i++)
                 {
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .men-black").removeClass("hidden");
                $(".all-products .men-black").addClass("active");
            }
        
        else if($(n).hasClass("men") && $(this).hasClass("orange"))
            {
                for(var i=0;i<c.length;i++)
                 {
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .men-orange").removeClass("hidden");
                $(".all-products .men-orange").addClass("active");
            }
        
        else
            {
               for(var i=0;i<c.length;i++)
                 {
                     $(c[i]).addClass("hidden"); 
                   $(c[i]).removeClass("active");
                 }
                
                $(".all-products .no-product").removeClass("hidden");
                $(".all-products .no-product").addClass("active"); 
            }
        
    });
    
    /* ****************** */ 
    
    
      var v = Array.from(document.querySelectorAll('.main .all-products .product .container-image-group'));    
                   
     $(".span-color").click(function()
        {
         
           for(var k=0;k<v.length;k++)
               {
                   $(v[k]).removeClass("act");
               }
         
           $(this).parent().prev().addClass("act");
         
         
           var r = Array.from(document.querySelectorAll('.main .all-products .product .act > div'));
         
                         
         if($(this).hasClass("color-one"))
          {
            for(var i=0;i<r.length;i++)
                {
                   if($(r[i]).hasClass("image-group-one"))
                       {
                           $(r[i]).addClass("active");
                           $(r[i]).removeClass("hidden");
                       }
                    else 
                    {
                    $(r[i]).removeClass("active");
                    }
                    
                }
          }
        
         else if($(this).hasClass("color-two"))
          {
            for(var i=0;i<r.length;i++)
                {
                   if($(r[i]).hasClass("image-group-two"))
                       {
                           $(r[i]).addClass("active");
                           $(r[i]).removeClass("hidden");
                       
                       }
                    else 
                    {
                    $(r[i]).removeClass("active");
                    }
                   
                }
           }
        
         else if($(this).hasClass("color-three"))
          {
            for(var i=0;i<r.length;i++)
                {
                   if($(r[i]).hasClass("image-group-three"))
                       {
                           $(r[i]).addClass("active");
                           $(r[i]).removeClass("hidden");
                       }
                    else 
                    {
                    $(r[i]).removeClass("active");
                    }
                }
           }
        
         else if($(this).hasClass("color-four"))
          {
            for(var i=0;i<r.length;i++)
                {
                   if($(r[i]).hasClass("image-group-four"))
                       {
                           $(r[i]).addClass("active");
                           $(r[i]).removeClass("hidden");
                       }
                    else 
                    {
                    $(r[i]).removeClass("active");
                    }
                }
           }
                             
        
    });
    
    /* ****************** */ 
    
    
    $(".main-span i").on("click",function(){
        
        $(this).prev().fadeToggle();  
        
    });
    
    /* ****************** */ 
    
    /* Start ScrollTop */
    
    $(window).on("scroll",function(){
        
       if($(window).scrollTop() > 100)
           {
                $(".scrolltop").fadeIn();
           }
        else
            {
                $(".scrolltop").fadeOut();
            }
        
    });
    
    $(".scrolltop").on("click",function(){
        
        $("html,body").animate({scrollTop:0},550);
        
    });
    
    
   $("html,body").animate({scrollTop:0}, 200);
    
    var vi = Array.from(document.querySelectorAll('.main .all-products .col-sm-6'));
    
    var ut = $(window).width();
     
    for(var i=0;i<vi.length;i++)
    {
      if(ut >= 390 && ut < 576)
        {
            $(vi[i]).addClass("col-6");
        }
      else
        {
            $(vi[i]).removeClass("col-6");
        }
    }
    
});
  

   // Loading Elements
    $(window).on("load",function()
                   {
    $(".loading-overlay .spinner").fadeOut(1700,
    function()
    {          
        
       $("body").css("overflow","auto");
        
      $(this).parent().fadeOut(1700,
       function()
       {             
       
           $(this).remove();
                            
         });                                                                             
    });
        
    });