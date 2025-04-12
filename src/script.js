
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
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

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
            // MOB MIN - 360x800 .............................................
            matchMedia.add("(min-width: 200px) and (max-width: 360px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-60px', y: '200px'}, 
                                    {x: '50px', y: '410px'}, 
                                    {x: '-11px', y: '701px'},
                              ]}
                        }, 
                  );
            });
            // MOB XS - 375x812 ...............................................
            matchMedia.add("(min-width: 361px) and (max-width: 375px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-60px', y: '200px'}, 
                                    {x: '50px', y: '410px'}, 
                                    {x: '-6px', y: '712px'},
                              ]}
                        }, 
                  );
            });
            // MOB XS - 390x844 ...............................................
            matchMedia.add("(min-width: 376px) and (max-width: 390px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-60px', y: '200px'}, 
                                    {x: '50px', y: '410px'}, 
                                    {x: '-6px', y: '744px'},
                              ]}
                        }, 
                  );
            });
                        // matchMedia.add("(max-width: 393px) and (min-height: 852px)", () => {
                        //       letterDot1.fromTo('.ld-1', 
                        //             {x: 0, y: 0}, 
                        //             { ease: 'none', motionPath:
                        //                   { path: [
                        //                         {x: '-60px', y: '200px'}, 
                        //                         {x: '50px', y: '410px'}, 
                        //                         {x: '-6px', y: '752px'},
                        //                   ]}
                        //             }, 
                        //       );
                        // });
                        // matchMedia.add("(max-width: 393px) and (min-height: 873px)", () => {
                        //       letterDot1.fromTo('.ld-1', 
                        //             {x: 0, y: 0}, 
                        //             { ease: 'none', motionPath:
                        //                   { path: [
                        //                         {x: '-60px', y: '200px'}, 
                        //                         {x: '50px', y: '410px'}, 
                        //                         {x: '-6px', y: '772px'},
                        //                   ]}
                        //             }, 
                        //       );
                        // });

            // MOB SM - 412x915, 414x896 ......................................
            matchMedia.add("(min-width: 394px) and (max-width: 414px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-60px', y: '200px'}, 
                                    {x: '50px', y: '410px'}, 
                                    {x: '-24px', y: '784px'},
                              ]}
                        }, 
                  );
            });

            // TABLETS - PORTRAIT 768x1024, 810/820x1180, 1024x1366 ............
            matchMedia.add("(min-width: 415px) and (max-width: 768px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-80px', y: '200px'}, 
                                    {x: '0px', y: '620px'}, 
                                    {x: '-14px', y: '878px'},
                              ]}
                        }, 
                  );
            });
            matchMedia.add("(min-width: 769px) and (max-width: 992px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-100px', y: '200px'}, 
                                    {x: '0px', y: '820px'}, 
                                    {x: '-12px', y: '1034px'},
                              ]}
                        }, 
                  );
            });
            matchMedia.add("(min-width: 993px) and (max-width: 1024px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-100px', y: '200px'}, 
                                    {x: '0px', y: '820px'}, 
                                    {x: '-20px', y: '1074px'},
                              ]}
                        }, 
                  );
            });


            // TABLETS - landscape 1024x576  ...................
            // matchMedia.add("(min-width: 993px) and (max-width: 1200px)", () => {
            //       letterDot1.fromTo('.ld-1', 
            //             {x: 0, y: 0}, 
            //             { ease: 'none', motionPath:
            //                   { path: [
            //                         {x: '-100px', y: '100px'}, 
            //                         {x: '0px', y: '400px'}, 
            //                         {x: '-24px', y: '615px'},
            //                   ]}
            //             }, 
            //       );
            // });


            // DESK XS - 1280x720, 1366x768 ...................................
            matchMedia.add("(min-width: 1025px) and (max-width: 1366px)", () => {
                  letterDot1.fromTo('.ld-1', 
                        {x: 0, y: 0}, 
                        { ease: 'none', motionPath:
                              { path: [
                                    {x: '-100px', y: '100px'}, 
                                    {x: '0px', y: '400px'}, 
                                    {x: '-18px', y: '615px'},
                              ]}
                        }, 
                  );
            });
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
$('#year').text(new Date().getFullYear());

