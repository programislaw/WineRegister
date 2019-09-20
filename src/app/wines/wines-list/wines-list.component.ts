import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine.model';
import { Subscription } from 'rxjs';
import { WineService } from 'src/app/services/wine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wines-list',
  templateUrl: './wines-list.component.html',
  styleUrls: ['./wines-list.component.css']
})
export class WinesListComponent implements OnInit {
  wines: Wine [];

  private subscription: Subscription;

  constructor(private wineService: WineService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    //this.wineService.getWines();
    this.subscription = this.wineService.winesChanges.subscribe(
      (wines: Wine []) => {
        this.wines = wines;
      }
    );
  }

  onNew() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSelectRow() {
    console.log('onSelectRow');
  }

  deleteItem(id: number) {
    this.wineService.deleteWine(id);
    this.wines = this.wineService.getWines();
  }

}
