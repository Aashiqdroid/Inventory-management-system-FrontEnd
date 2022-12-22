import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;
  radius:number=0;
  color: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
