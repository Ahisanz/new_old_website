import axios from 'axios';


if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    document.getElementById('body').innerHTML = "";
    document.getElementById('body').innerHTML = `
    <div id="ie-only">
        <h1>OH NO!</h1>
        <p>I'm sorry that this website is not fully supported in Internet Explorer</p>
        <p>but...</p>
        <p>I can share some information about me</p>
        <h2>I'm Ana Sanz, Frontend Developer</h2>
        <img src="images/IMG_20200729_002055_2p.jpg" style="width: auto; height:250px"  alt="Photo of Ana Sanz (me)"/>
        <p class="about">Self and quick learner, organized, versatile, curious and dedicated. Passionate about technology innovations, sci-fi, games, books, human history, ecology, gastronomy. Since 2012 working as freelancer on Graphic/WebDesign and Frontend.</p>
        <p>If you want to know more about me, feel free to download my CV, check my Linkedin or send me a email</p>
        <a href="images/cvi_ana_sanz_en.pdf">Download CV</a>
        <a href="https://www.linkedin.com/in/ana-claudia-sanz/">Linkedin</a>
        <a href="mailto: anaclaulp@gmail.com">anaclaulp@gmail.com</a>
        <h2>Thank you! Have a nice day!</h2>
    </div>
    `;
}

// TRANSLATE INTRO ON CLICK
var devToggle = document.getElementById('dev-toggle');
var photoToggle = document.getElementById('photo-toggle');
var devSec = document.getElementById('dev-sec');
var photoSec = document.getElementById('photo-sec');
var mainDev = document.getElementById('dev-intro');
var mainPhoto = document.getElementById('photo-intro');
var introToggle = document.querySelectorAll('.intro-toggle');
var secMenu = document.querySelectorAll('.sec-menu');
var menuSec = document.getElementById('menu-sec');



function changeClass(){
    event.preventDefault();

    scrollSmooth();

    [].forEach.call(introToggle, function (el) {
        el.classList.remove('slide-on');
    });
    [].forEach.call(secMenu, function(el) {
        el.classList.remove('selected');
    });

    if (this.id == 'dev-toggle' || this.id == 'dev-sec') {
        mainDev.classList.add('slide-on');
        devSec.classList.add('selected');
    } else {
        mainPhoto.classList.add('slide-on');
        photoSec.classList.add('selected');
    };
}
window.onload = function(){
    devToggle.addEventListener( 'click', changeClass);
    photoToggle.addEventListener( 'click', changeClass);
    devSec.addEventListener( 'click', changeClass);
    photoSec.addEventListener( 'click', changeClass);



    // SCROLLMAGIC CSS ANIMATION (DONT WORK IN IE9) D=
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger-intro"})
                            .setClassToggle("#animate-image, #animate-text, #big-only", "fade-in")
                            .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#menu-sec", offset: -200})
                .setClassToggle("#menu-sec","fade-in")
                .addTo(controller);

    // var scene3 = new ScrollMagic.Scene({triggerElement: "#main-gallery", offset: -150})
    //             .setClassToggle("#main-gallery","fade-in")
    //             .addTo(controller);
    
    // var scene4 = new ScrollMagic.Scene({triggerElement: "#contact", offset: -250})
    //             .setClassToggle("#contact","fade-in")
    //             .addTo(controller);
   
    var scene5 = new ScrollMagic.Scene({triggerElement: "#github", offset: -250})
                .setClassToggle("#github","fade-in")
                .addTo(controller);

    // GET DISPLAY GITHUB PROFILE
    function getUser() {
        axios.get('https://api.github.com/users/Ahisanz')
        .then(res => showProfile(res))
        .catch(err => showPreMade())
    };
    getUser()

    // Modal Opener Base 

//     var triggers = document.getElementsByClassName('box-content');
//     var btnArray = Array.from(triggers).entries();
//     var modals = document.getElementsByClassName('modal');
//     var closeBtns = document.getElementsByClassName('close-modal');

//     for (let [index, trigger] of btnArray) {
//         let triggerIndex = index;

//         function toggleModal() {
//             modals[triggerIndex].classList.toggle("show-modal");
//             var body = document.getElementById('body');
//             body.classList.toggle('modal-open');
//             if(this.classList.contains('box-content') && this.classList.contains('video')) {
//                 var videoId = trigger.id;
//                 var modalParent = document.getElementById('modal-' + triggerIndex +'');
//                 var videoIframe = '<iframe enablejsapi=1 src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>'
//                 modalParent.innerHTML = modalParent.innerHTML + videoIframe;
//             } else if (this.classList.contains('close-modal') && this.classList.contains('video')) {
//                 var modalParent = document.getElementById('modal-' + triggerIndex + '');
//                 modalParent.innerHTML = '';
//             }            

//         }
//         trigger.addEventListener("click", toggleModal);
//         closeBtns[triggerIndex].addEventListener("click", toggleModal);
//   }

    // HORIZONTAL SCROLL GALLERY ITEMS

    // const sliderGallery = document.querySelector('.box-in');
    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // sliderGallery.addEventListener('mousedown', (e) => {
    //     isDown = true;
    //     sliderGallery.classList.add('active');
    //     startX = e.pageX - sliderGallery.offsetLeft;
    //     scrollLeft = sliderGallery.scrollLeft;
    // });
    // sliderGallery.addEventListener('mouseleave', () => {
    //     isDown = false;
    //     sliderGallery.classList.remove('active');
    // });
    // sliderGallery.addEventListener('mouseup', () => {
    //     isDown = false;
    //     sliderGallery.classList.remove('active');   
    // });
    // sliderGallery.addEventListener('mousemove', (e) => {
    //     if(!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - sliderGallery.offsetLeft;
    //     const walk = (x - startX) * 3; //scroll-fast
    //     sliderGallery.scrollLeft = scrollLeft - walk;
    //     // console.log(walk);
    // });

    //GALLERY IMG SCROLL TEST
 
        // var imageIndex = 0; 
        // var galleryImages = document.getElementsByClassName('gallery-img'); 
        // var isMouseOverImage = false;  
        // var scrollImages = document.getElementById('photos-1'); 
        // var x, y; 
        // function noScroll() { 
        //     window.scrollTo(x, y); 
        // } 
   
        // scrollImages.addEventListener( 
        //         "mouseenter", function() { 
   
        //     x = window.pageXOffset; 
        //     y = window.pageYOffset; 
        //     window.addEventListener("scroll", noScroll); 
        //     isMouseOverImage = true; 
        // }); 
   
        // scrollImages.addEventListener( 
        //         "mouseleave", function() { 
        //     isMouseOverImage = false; 
        //     window.removeEventListener( 
        //                 "scroll", noScroll); 
        // }); 
    
        // scrollImages.addEventListener( 
        //             "wheel", function(e) { 
                              
        //     if (isMouseOverImage) { 
        //         var nextImageIndex; 
   
        //         if (e.deltaY > 0) 
        //             nextImageIndex = (imageIndex + 1) 
        //                              % galleryImages.length; 
        //         else
        //             nextImageIndex =  
        //                     (imageIndex - 1 
        //                     + galleryImages.length) 
        //                     % galleryImages.length; 
   
        //         galleryImages[imageIndex].classList.remove('show-photo'); 
        //         galleryImages[nextImageIndex].classList.add('show-photo'); 
        //         imageIndex = nextImageIndex; 
        //     } 
        // });    


}

// scrollSmooth Function
function scrollSmooth() {
    var target = document.getElementById('menu-sec');
        
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

// show GitHub Profile
function showProfile(res) {
    const data = res.data;
    document.getElementById('gh-profile').innerHTML = `
    <div>
        <img src="${data.avatar_url}" class="gh-img" alt="Photo of Ana Sanz (me)"/>
    </div>
    <div>
        <p class="gh-login">${data.login}</p>
        <a href="${data.html_url}" class="">Github Profile</a>
        <a href="https://github.com/Ahisanz/anasanz.github.io">Github Website Repository</a>
        <a href="https://github.com/Ahisanz/side_projects">Github Basics Projects Repository</a>
        <p id="gh-hirable" ></p>
    </div>
    `
    if(data.hirable = true){
        document.getElementById('gh-hirable').innerHTML = 'Hirable';
        document.getElementById('gh-hirable').classList.add('hirable')

    } else {
        document.getElementById('gh-hirable').innerHTML = 'Busy'
    }
}
function showPreMade() {
    document.getElementById('gh-profile').innerHTML = `

    <div>
        <p class="gh-login">Ahisanz</p>
        <a href="https://github.com/Ahisanz" class="">Github Profile</a>
        <a href="https://github.com/Ahisanz/anasanz.github.io">Github Website Repository</a>
        <a href="https://github.com/Ahisanz/side_projects">Github Basics Projects Repository</a>
        <p id="gh-hirable hirable" >Hirable</p>
    </div>
    `
}
