// 👇️ add data 👇️
let username = "Aung Linn Khant";
let usernameInNav = username; //change  username  to  ""  if user want to add logo to navbar
let job = "photographer";
let aboutme = "I proved talented since young, studying arts at the local Arts School since 11 and by 15 was already using my first camera. Certified photographer from 2015, I am showing creativity and continuous improvement."
let facebook = "";
let instagram = "";
let email = "aunglinnkhant@gmail.com";
let twitter ="";
let telegram = "";
let phone ="+959273822";

// End


// Don't Touch
let noskill = "<div class='grid-ite'> </div>";
let threedmodeling = "<div class='grid-item'> <span> <h3>3D Modeling</h3> </span> <img src='images/icons/3D Modeling.png'/> </div>";
let threedrendering = "<div class='grid-item'> <span> <h3>3D Rendering</h3> </span> <img src='images/icons/3D Rendering.png'/> </div>";
let animation = "<div class='grid-item'> <span> <h3>Animation</h3> </span> <img src='images/icons/Animation.png'/> </div>";
let architecture = "<div class='grid-item'> <span> <h3>Architecture</h3> </span> <img src='images/icons/Architecture.png'/> </div>";
let contentwriting = "<div class='grid-item'> <span> <h3>Content Writing</h3> </span> <img src='images/icons/Content Writing.png'/> </div>";
let creative = "<div class='grid-item'> <span> <h3>Creative</h3> </span> <img src='images/icons/Creative.png'/> </div>";
let fashion = "<div class='grid-item'> <span> <h3>Fashion</h3> </span> <img src='images/icons/Fashion.png'/> </div>";
let graphicdesign = "<div class='grid-item'> <span> <h3>Graphic Design</h3> </span> <img src='images/icons/Graphic Design.png'/> </div>";
let illustration = "<div class='grid-item'> <span> <h3>Illustration</h3> </span> <img src='images/icons/Illustration.png'/> </div>";
let jewelrydesign = "<div class='grid-item'> <span> <h3>Jewelry Design</h3> </span> <img src='images/icons/Jewelry Design.png'/> </div>";
let logodesign = "<div class='grid-item'> <span> <h3>Logo Design</h3> </span> <img src='images/icons/Logo Design.png'/> </div>";
let photoediting = "<div class='grid-item'> <span> <h3>Photo Editing</h3> </span> <img src='images/icons/Photo Editing.png'/> </div>";
let photography = "<div class='grid-item'> <span> <h3>Photography</h3> </span> <img src='images/icons/Photography.png'/> </div>";
let photoshop = "<div class='grid-item'> <span> <h3>Photoshop</h3> </span> <img src='images/icons/Photoshop.png'/> </div>";
let programming = "<div class='grid-item'> <span> <h3>Programming</h3> </span> <img src='images/icons/Programming.png'/> </div>";
let videoediting = "<div class='grid-item'> <span> <h3>Video Editing</h3> </span> <img src='images/icons/Video Editing.png'/> </div>";

//veriables
const nameid = document.getElementById("name");
const nameinheroid = document.getElementById("nameinhero");
const aboutmeid = document.getElementById("aboutme");
const jobid = document.getElementById("job");
const skill1id = document.getElementById("skill1");
const skill2id = document.getElementById("skill2");
const skill3id = document.getElementById("skill3");
const skill4id = document.getElementById("skill4");
const skill5id = document.getElementById("skill5");
const skill6id = document.getElementById("skill6");
const footerid = document.getElementById("footer_text");
const footernameid = document.getElementById("footername");
const facebookid = document.getElementById("facebook");
const instagramid = document.getElementById("instagram");
const emailid = document.getElementById("email");
const twitterid = document.getElementById("twitter");
const telegramid = document.getElementById("telegram");
const facebookheroid = document.getElementById("facebookhero");
const instagramheroid = document.getElementById("instagramhero");
const emailheroid = document.getElementById("emailhero");
const twitterheroid = document.getElementById("twitterhero");
const telegramheroid = document.getElementById("telegramhero");
const phoneid = document.getElementById("phone");
const contactmeid = document.getElementById("contactme");
// End Don't Touch




// 👇️ add skills to html 👇️
// write -noskill- if there is no skill
skill1id.innerHTML = videoediting;
skill2id.innerHTML = photoshop;
skill3id.innerHTML = illustration;
skill4id.innerHTML = threedmodeling;
skill5id.innerHTML = programming;
skill6id.innerHTML = graphicdesign;
// End  





//  add details to html 
nameid.innerHTML = "<img src='images/logo.png' class='toplogo' onerror='this.style.display = `none`'></img>" + usernameInNav;
nameinheroid.innerHTML = "hi, I'm "+ username;
footernameid.innerHTML = username;
jobid.innerHTML = "I am a "+ job +".";
aboutmeid.innerHTML = aboutme;
facebookid.href = facebook; 
instagramid.href = instagram; 
emailid.href = "mailto:"+email; 
twitterid.href = twitter; 
telegramid.href = telegram; 
facebookheroid.href = facebook; 
instagramheroid.href = instagram; 
emailheroid.href = "mailto:"+email; 
twitterheroid.href = twitter; 
telegramheroid.href = telegram; 
phoneid.innerHTML = phone; 
contactmeid.href = "mailto:"+email;

//change web title
document.title = username;


/*popup
$(function () {
    "use strict";
    
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".imageshow").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    
    $("span, .overlay").click(function () {
        $(".imageshow").fadeOut();
    });
    
});
*/




$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});