const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 500);
});
gsap.ticker.lagSmoothing(0);



function campAnimate() {
    document.addEventListener("DOMContentLoaded", function() {
        let campAfter = document.querySelector(".campAfter-sec");
        let lastCampSec = document.querySelector(".campSec.campScroll");
        let pinnedSec = gsap.utils.toArray(".campPinned");

        pinnedSec.forEach((section, index, sections) => {
            let img = section.querySelector(".campSec-cntnt");
            let nxtSec = sections[index + 1] || lastCampSec;
            // let endSclPnt = `top+=${nxtSec.offsetTop - section.offsetTop} top`;

            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: index === sections.length ? `+=${lastCampSec.offsetHeight / 2}` : campAfter.offsetTop - window.innerHeight,
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                }
            }) 
        })
    })
}
campAnimate();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween:10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
});



// function imageReveal() {
//     const initialClipPaths = [
//         "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
//         "polygon(33% 0%, 33% 0%, 33% 0%, 33% 0%)",
//         "polygon(66% 0%, 66% 0%, 66% 0%, 66% 0%)",
//         "polygon(0% 33%, 0% 33%, 0% 33%, 0% 33%)",
//         "polygon(33% 33%, 33% 33%, 33% 33%, 33% 33%)",
//         "polygon(66% 33%, 66% 33%, 66% 33%, 66% 33%)",
//         "polygon(0% 66%, 0% 66%, 0% 66%, 0% 66%)",
//         "polygon(33% 66%, 33% 66%, 33% 66%, 33% 66%)",
//         "polygon(66% 66%, 66% 66%, 66% 66%, 66% 66%)",
//     ];
//     const finalClipPaths = [
//         "polygon(0% 0%, 33.5% 0%, 33.5% 33%, 0% 33.5%)",
//         "polygon(33% 0%, 66.5% 0%, 66.5% 33%, 33% 33.5%)",
//         "polygon(66% 0%, 100% 0%, 100% 33%, 66% 33.5%)",
//         "polygon(0% 33%, 33.5% 33%, 33.5% 66%, 0% 66.5%)",
//         "polygon(33% 33%, 66.5% 33%, 66.5% 66%, 33% 66.5%)",
//         "polygon(66% 33%, 100% 33%, 100% 66%, 66% 66.5%)",
//         "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)",
//         "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)",
//         "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)",
//     ];
    
//     function createmask() {
//         const imgs = document.querySelectorAll(".topPickImg");
//         imgs.forEach((img, imgIndex)=>{
//             for (let i = 1; i <= 9; i++) {
//                 const mask = document.createElement("div");
//                 mask.classList.add("mask", `m-${i}`);
//                 img.appendChild(mask);
//             }
//         })
//     }
//     createmask();
    
//     const rows = gsap.utils.toArray(".imgRow");
    
//     rows.forEach((row) => {
//         const imgs = row.querySelectorAll(".topPickImg");
    
//             imgs.forEach((img)=>{
//             const masks = img.querySelectorAll(".mask");
    
//             masks.forEach((mask, index)=>{
//                 gsap.set(mask, {
//                     clipPath: initialClipPaths[index],
//                 });
//             });
    
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: row,
//                     start: "top 80%",
//                     end: "top 0%",
//                     duration: 2,
//                     scrub: true,
//                     // markers: true,
//                 },
//             });
    
//             const animateOrder = [
//                 [".m-1"],
//                 [".m-2", ".m-4"],
//                 [".m-3", ".m-5", ".m-7"],
//                 [".m-6", ".m-8"],
//                 [".m-9"],
//             ];
    
//             animateOrder.forEach((target, index) => {
//                 tl.to(target.map((cls) => img.querySelector(cls)), {
//                     clipPath: (i,el) => finalClipPaths[Array.from(masks).indexOf(el)],
//                         duration: 0.5,
//                         ease: "power2.out",
//                         stagger: 0.1,
//                     },index * 0.125
//                 );
//             });
//         });
//     });
// }
// imageReveal();




function faqAnimate() {
    const faqItems = document.querySelectorAll('.faq-item');
    let activeItem = null;

    faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        if (activeItem && activeItem !== item) {
        // Close the previously active item
        activeItem.classList.remove('active');
        gsap.to(activeItem.querySelector('.faq-answer'), { height: 0, duration: 0.5 });
        }

        // Open the current item
        item.classList.toggle('active');
        gsap.to(answer, { height: 'auto', duration: 0.5 });

        activeItem = item.classList.contains('active') ? item : null;
    });
    });
}
faqAnimate();




Totty.animateSvg("#curve", {
    ease: "elastic.out(1,0.3)",
    offsetLeft: 10,
    offsetRight: 10,
});





function aboutTxt() {

    let typeSplit = new SplitType('.aboutHead-big', {
    types: 'lines, words, chars',
    tagName: 'span'
    })

    gsap.from(typeSplit.words, {
        opacity: 0.2,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1,
            scrollTrigger: {
                trigger: '.aboutHead-big',
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                // markers: true,
            }
    })

}
aboutTxt();




let headRevaelTxt = document.querySelectorAll(".headReveal");
headRevaelTxt.forEach((txt) => {

    let typeSplit = new SplitType(txt, {
        types: 'lines, words, chars',
        tagName: 'span'
    })
      
    gsap.from(typeSplit.words, {
        y: '300%',
        opacity: 1,
        duration: 1,
        ease: 'power1.out',
        stagger: 0.1,
        
        scrollTrigger: {
          trigger: txt,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 2,
        }
      })
})





function loaderAnimate() {
    gsap.to(".loader-num", {
    innerText: 100, 
    snap: { innerText: 1 }, 
    duration: 5, 
    ease: "power1.out",
    onUpdate: function() {
      const currentValue = Math.round(this.targets()[0].innerText);
      document.querySelector(".loader-num").innerText = `${currentValue}%`; 
    },
    onComplete: loaderOut,
  });
  
  gsap.to(".loaderLine", {
    width: "100%", 
    duration: 5,
    ease: "power1.out"
  });


function loaderOut() {
    let loaderBxTop = document.querySelector(".loaderBx-top");
    let loaderBxbot = document.querySelector(".loaderBx-bot");

    let tl = gsap.timeline();
    tl.to(".loaderTxt", {
        opacity: 0,
        duration:0.5,
        onComplete: heroAnimate,
    })
    tl.to(loaderBxTop, {
        y: "-100%",
        duration: 1,
    }, "a")
    tl.to(loaderBxbot, {
        y: "100%",
        duration: 1,
    }, "a")
    tl.to(".loaderAnimate", {
        display: "none",
    })
}
}
loaderAnimate();


function heroAnimate() {
    let tl = gsap.timeline();
    tl.from(".heroHead-top", {
        opacity: 0,
        y: "-20px",
        duration: 1,
        delay: 1
    }, "a")
    tl.from(".heroBot-cntnt", {
        opacity: 0,
        y: "20px",
        duration: 1,
        delay: 1
    }, "a")
    tl.from(".imgRvl",  {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
    })
}
heroAnimate();
  