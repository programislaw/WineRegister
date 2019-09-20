import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wine } from 'src/app/model/wine.model';
import { Router, ActivatedRoute } from '@angular/router';
import { WineService } from 'src/app/services/wine.service';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})
export class WineItemComponent implements OnInit {

  @Input() wine: Wine;
  @Input() id: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor(private wineService: WineService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEdit(id: number) {
    this.router.navigate([this.id + '/edit'], {relativeTo: this.route});
  }

  onView(id: number) {
    this.router.navigate( [this.id + '/view'], {relativeTo: this.route});
  }

  onDelete(id: number) {
    this.delete.emit(this.id);
  }
}
