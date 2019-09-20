import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine.model';
import { WineService } from '../services/wine.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() { }

}
