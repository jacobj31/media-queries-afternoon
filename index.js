window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("logo").style.fontSize = "20px";
    document.getElementById("navbar").style.background='rgb(33,37,41)';
    document.getElementById("navbar").style.height='50px';
  } else {
    document.getElementById("logo").style.fontSize = "28px";
    document.getElementById("navbar").style.background='none';
    document.getElementById("navbar").style.height='80px';

  }
}

