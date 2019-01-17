import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-floater-menu',
  templateUrl: './floater-menu.component.html',
  styleUrls: ['./floater-menu.component.css']
})
export class FloaterMenuComponent implements OnInit {

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
  }

}
