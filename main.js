// navbar scroll start
let nav = document.querySelector(".navigation-wrap");

if (nav) {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
      nav.classList.add("scroll-on");
    } else {
      nav.classList.remove("scroll-on");
    }
  };
}
// navbar scroll end


// counter start
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id);
      let current = start;
      let range = end - start;
      let increment = range > 0 ? 1 : -1;
      let step = Math.abs(Math.floor(duration / range));
      
      let timer  = setInterval(() => {
        current += increment;
        obj.textContent = current;
        
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          clearInterval(timer);
          obj.textContent = end;
        }
      }, step);
    }
  
    counter("count-1", 0, 30, 3000);
    counter("count-2", 100, 300, 2500);
    counter("count-3", 0, 8, 3000);
  });  
// counter end
