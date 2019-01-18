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
    let toggler = document.getElementsByClassName("caret");
let i=0;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
   closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


}
