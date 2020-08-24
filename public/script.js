// Ẩn hiện menu khi scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.background = "#fdcb6e";
      document.getElementById("navbar").style.transition = "0.5s";
    } else {
      document.getElementById("navbar").style.background = "#00000000";
    }
}

////   Hiệu ứng scroll
$(document).ready(function() {
    $(window).scroll(function() {
      // animate when scroll
      if ($(document).scrollTop() > 350) {
        document.getElementById("page2a").style.animation = "animateleft";
        document.getElementById("page2a").style.animationDuration = "1.5s";
        document.getElementById("page2b").style.animation = "animateright";
        document.getElementById("page2b").style.animationDuration = "1.5s";
      }
      
    // thư viện animation
      AOS.init();

      // nút icon scroll top
      if ($(document).scrollTop() > 460) {
        document.getElementById("spans").style.display = "block";
      } else {
        document.getElementById("spans").style.display = "none";
      }
    });
  });

// tab menu
$(document).ready(function(){

    $('.nav-link').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('.nav-link').removeClass('nav-link1');

      $(this).addClass('nav-link1');
      $("."+tab_id).addClass('nav-link1');
    })
	
    ////// slide-toggle mở rộng text
      // tab page 2
      $(".btn1").click(function(){
        $(".boxa p").slideToggle("slow");
      });
      document.getElementById("defaultOpenbtn").click();
      $(".btn2").click(function(){
        $(".boxa1 p").slideToggle("slow");
      });
      document.getElementById("defaultOpenbtn1").click();
      $(".btn3").click(function(){
        $(".boxa2 p").slideToggle("slow");
      });
      document.getElementById("defaultOpenbtn2").click();

      // tab page 4
      $(".btn4").click(function(){
        $(".boxa4 p").slideToggle("slow");
      });
      document.getElementById("defaultOpenbtn3").click();
      $(".btn5").click(function(){
        $(".boxa5 p").slideToggle("slow");
      });
      document.getElementById("defaultOpenbtn4").click();
      $(".btn6").click(function(){
        $(".boxa6a p").slideToggle("slow");
        $(".boxa6b p").slideToggle("slow");
      });
      document.getElementById("defaultOpenbtn5").click();
})


// tab page 2 -------------------------------------- W3school studying!
function openTab2(evt, tabName2) {
  var i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active2", "");
  }
  document.getElementById(tabName2).style.display = "block";
  evt.currentTarget.className += " active2";
  }
  // mặc định chọn nút khi chưa bấm:
  document.getElementById("defaultOpen2").click();



// tab page 4 -------------------------- W3school studying!
    function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    }
    // mặc định chọn nút khi chưa bấm:
    document.getElementById("defaultOpen").click();


    // Slide show W3school studying!
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
    }

    // form bắt lỗi:
function validateForm() {

    var ten = document.forms[0]["ten"].value;
    var email = document.forms[0]["email"].value;
    var sodt = document.forms[0]["sodt"].value;
    var soluong = document.forms[0]["soluong"].value;
    var mess = document.forms[0]["mess"].value;

        if (ten == "" || email == "" || sodt == "" || soluong == "") {
            document.getElementById('kq').innerHTML = "không được để trống";
            return false;
        }
}