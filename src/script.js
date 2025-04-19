
// NAVIGATION SCROLL DISPLAY .......................................................................
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
            body.classList.remove('scroll-up');
            return;
      }

      if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-up');
            body.classList.add('scroll-down');
      } else if (
            currentScroll < lastScroll && body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-down');
            body.classList.add('scroll-up');
      }

      lastScroll = currentScroll;

      // console.log(window.pageYOffset);
})




// AOS ..............................................................................................
AOS.init();




// GSAP LETTER DOT SCROLL ANIMATION .................................................................
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, Flip);

let matchMedia = gsap.matchMedia();

let letterDot1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 0,
        end: '+=300 80%',
        scrub: true,
      //   markers: true
      }
    }); 
            // MOBILE + TABLET + DESK 1366-> fly off .............................................
            // mobiles ...........................................
            matchMedia.add("(min-width: 200px) and (max-width: 767px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-60px', y: '200px'}, 
                                    {x: '50px', y: '300px'}, 
                                    {x: '-200px', y: '600px'},
                              ]}
                        }, 
                  );
            });
            //  tablets ............................................
            matchMedia.add("(min-width: 768px) and (max-width: 1279px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-60px', y: '200px'}, 
                                    {x: '20px', y: '400px'}, 
                                    {x: '-350px', y: '600px'},
                              ]}
                        }, 
                  );
            });
            // tablets LG + desk XS ......................................
            matchMedia.add("(min-width: 1280px) and (max-width: 1366px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-60px', y: '30px'}, 
                                    {x: '20px', y: '400px'}, 
                                    {x: '-350px', y: '350px'},
                              ]}
                        }, 
                  );
            });
            // DESKTOP -> connect to subtitle .............................................
            // DESK SM - 1440x900 .............................................
            matchMedia.add("(min-width: 1367px) and (max-width: 1440px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-100px', y: '100px'}, 
                                    {x: '0px', y: '400px'}, 
                                    {x: '-64px', y: '728px'},
                              ]}
                        }, 
                  );
            });
            // DESK 1536x864 ...................................................
            matchMedia.add("(min-width: 1441px) and (max-width: 1536px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-100px', y: '100px'}, 
                                    {x: '0px', y: '400px'}, 
                                    {x: '-55px', y: '692px'},
                              ]}
                        }, 
                  );
            });
            // DESK MD - 1600x900 ...............................................
            matchMedia.add("(min-width: 1537px) and (max-width: 1600px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-100px', y: '100px'}, 
                                    {x: '0px', y: '400px'}, 
                                    {x: '-82px', y: '721px'},
                              ]}
                        }, 
                  );
            });
            // DESK LG - 1920x1080 ............................................
            matchMedia.add("(min-width: 1920px) and (max-width: 1920px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-100px', y: '100px'}, 
                                    {x: '0px', y: '400px'}, 
                                    {x: '180px', y: '703px'},
                              ]}
                        }, 
                  );
            });
            // DESK XL - 2560x1440 ............................................
            matchMedia.add("(min-width: 1921px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-50px', y: '200px'}, 
                                    {x: '50px', y: '610px'}, 
                                    {x: '285px', y: '894px'},
                              ]}
                        }, 
                  );
            });



//  CLICK TO ENLARGE: IMG GALLERY
const images = document.querySelectorAll('.img-click');
const lightbox = document.querySelector('.lightbox');
const imgMain = document.querySelector('.lightbox img');
const arrowL = document.querySelector('.arrow-left');
const arrowD = document.querySelector('.arrow-right');

let imgIndex = 0;

// opening lightbox
images.forEach(img => {
      img.addEventListener('click', e => {
            imgMain.src = e.target.src;
            imgIndex = [...images].indexOf(img);

            lightbox.classList.toggle('hide');
            setTimeout(() => {
                  lightbox.style.opacity = "1";
            }, 10);
      });
});


// closing lightbox - outside
window.addEventListener('click', e => {
      if(e.target.classList.contains('lightbox')) {
            
            lightbox.classList.toggle('hide');
            setTimeout(() => {
                  lightbox.style.opacity = "1";
            }, 300);
      }
});
            // closing lightbox - inside
            imgMain.addEventListener('click', () => {
                  lightbox.classList.toggle('hide');
                  setTimeout(() => {
                        lightbox.style.opacity = "1";
                  }, 300);

            })

// prev - next
arrowL.addEventListener('click', () => {
      imgIndex--;
      if (imgIndex < 0) {
            imgIndex = images.length -1;
      }
      imgMain.src = images[imgIndex].src;
});
arrowD.addEventListener('click', () => {
      imgIndex++;
      if (imgIndex > images.length -1) {
            imgIndex = 0;
      }
      imgMain.src = images[imgIndex].src;
});








// 1. odabir svih click-imagea + event na njih -> array 1
// 2. definition array 2 -> sve img full
// 3. pairing indices from array 1 to indices in array 2
//  4. event = toggle class hide za overlay i za img full
//  5. next previous funcionality u 1 galeriji

// const imgClick = document.querySelectorAll('.img-click');
// const imgFull = document.querySelectorAll('.img-full');

// console.log(imgClick);


// const image = document.querySelector('.click-img');
// const imageFull = document.querySelector('.img-full');
// const overlay = document.getElementById('overlay');

// image.forEach(item => {
//       item.addEventListener('click', () => {
        
//             imageFull.classList.toggle('hide');
//             overlay.classList.toggle('hide');
//       })
// })



// var imgs = document.getElementsByClassName('myImg');
// var modals= document.getElementsByClassName('myModal');
// var contImgs = document.getElementsByClassName('img01');
// var captions = document.getElementsByClassName('caption');

// /* This is the keypoint: Put the related operations of zooming in on the image 
// into a loop, then get each image element in turn to complete the zoom operation */

// for (let i = 0; i <imgs.length; i++) {
//     console.log('imgs.length'+imgs.length);

//     var img=imgs[i];
//     var modal=modals[i];
//     var contImg=contImgs[i];
//     var caption=captions[i];
//     img.onclick = function () {
//         console.log('111');
//         modal.style.display = 'block';
//         contImg.src = img.src
//         console.log(contImg.src,'srccc');
//         caption.innerHTML = img.alt
//     }
//     var closeBox = document.getElementsByClassName('close')[i];
//     closeBox.onclick = function () {
//         modal.style.display = 'none';
//     }
// }


// const image = document.querySelector('.click-img');
// const imageFull = document.querySelector('.img-full');
// const overlay = document.getElementById('overlay');

// image.addEventListener('click', () => {
//       imageFull.classList.toggle('show');
//       overlay.classList.toggle('hide'); 
// });

//             // click on self or overlay to close:
//             imageFull.addEventListener('click', (event) => {
//                   event.target.classList.toggle('show');
//                   overlay.classList.toggle('hide');
//             });
//             overlay.addEventListener('click', (event) => {
//                   event.target.classList.toggle('hide');
//                   imageFull.classList.toggle('show');
//             });


            //  ne radi na 2.slici


            // click on self to close:
            // function hide(event) {
            //       event.target.classList.toggle('show');
            // }
            
            // imageFull.addEventListener('click', hide, false);





// COPY TO CLIPBOARD ..............................................................
const copyButton = document.querySelector('.btn-copy');
const clickCopy = document.querySelector('#click-to-copy');

clickCopy.addEventListener('click', () => {
      let copied = 'ivana.supljika@gmail.com';

      navigator.clipboard.writeText(`${copied}`).then(() => {
            const label = document.querySelector('.copy-label');
            const originalLabel = label.textContent;

            copyButton.disabled = true;
            label.textContent = '\u2713';

            setTimeout(() => {
                  copyButton.disabled = false;
                  label.textContent = originalLabel;
            }, 2500);
      });
});





// CURRENT YEAR .................................................................
// $('#year').text(new Date().getFullYear());
document.getElementById('year').innerHTML = new Date().getFullYear();

