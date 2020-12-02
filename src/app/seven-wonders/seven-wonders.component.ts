import { Component, OnInit } from '@angular/core';
import { Miracle } from '../miracle';
import { WondersServise } from '../WondersServise';

@Component({
  selector: 'app-seven-wonders',
  templateUrl: './seven-wonders.component.html',
  styleUrls: ['./seven-wonders.component.scss']
})
export class SevenWondersComponent implements OnInit {

  constructor(private wondersServise:WondersServise) { }
  wonders:Miracle[];
  ngOnInit(): void {
    this.wonders=this.wondersServise.getData();
  }

}
