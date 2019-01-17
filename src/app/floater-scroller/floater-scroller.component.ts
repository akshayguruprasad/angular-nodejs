import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-floater-scroller',
  templateUrl: './floater-scroller.component.html',
  styleUrls: ['./floater-scroller.component.css']
})
export class FloaterScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function () {
      $(".icon").click(() => {
        $(".icon").toggleClass('active');
        $(".menu").toggleClass('active');
        $(".menu-options").toggleClass('active');
      });
    
    
      $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

    });
    $(window).scroll(function () {
      var height = $(window).scrollTop();
      if (height > 100) {
        $('#back2Top').fadeIn();
      } else {
        $('#back2Top').fadeOut();
      }
    });

  }

}
