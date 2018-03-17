import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {


    //jQuery is required to run this code
    $(document).ready(function () {

      scaleVideoContainer();

      initBannerVideoSize('.video-container .poster img');
      initBannerVideoSize('.video-container .filter');
      initBannerVideoSize('.video-container video');

      $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
      });

    });

    function scaleVideoContainer() {

      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height', unitHeight);

    }

    function initBannerVideoSize(element) {

      $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
      });

      scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element) {

      var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

      // console.log(windowHeight);

      $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

          $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

      });
    }


  }






  ngOnInit() {

    try {


      // Set the date we're counting down to
      //var countDownDate = new Date("Fri Apr 27 2018 06:00:00").getTime();
      var countDownDate = new Date("4/27/2018 06:00:00").getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.expired = false;
        if (document.getElementById("days") === null) {
          return
        }

        document.getElementById("days").innerHTML = days.toString();
        document.getElementById("hours").innerHTML = hours.toString();;
        document.getElementById("minutes").innerHTML = minutes.toString();;
        document.getElementById("seconds").innerHTML = seconds.toString();;

        // Display the result in the element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text 
        if (distance < 0) {
          clearInterval(x);
          this.expired = true;
          // document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);


    } catch (error) {

    }
  }

}
