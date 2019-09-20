import { Component, OnInit, ViewChild } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Wine } from '../../model/wine.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-wine-edit',
  templateUrl: './wine-edit.component.html',
  styleUrls: ['./wine-edit.component.css']
})
export class WineEditComponent implements OnInit {

  constructor(private wineService: WineService, private route: ActivatedRoute, private router: Router) { }

  id: number;
  isEdit: boolean;
  isView: boolean;
  isNew: boolean;
  wineForm: FormGroup;
  nameCtr: FormControl;
  kindCtr: FormControl;
  volumeCtr: FormControl;
  subscription: Subscription;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isEdit = params['mode'] === 'edit';
        this.isView = params['mode'] === 'view';
        this.isNew = !this.isEdit && !this.isView;
        this.initForm();
      }
    );
  }

  initForm() {
    if (this.isEdit || this.isView) {
      const wine = this.wineService.getWine(this.id);
      this.initControls(wine.name, wine.kind, wine.volume);
    } else {
      this.initControls('', '', null);
    }
    this.wineForm = new FormGroup({
      'name': this.nameCtr,
      'kind': this.kindCtr,
      'volume': this.volumeCtr
    });
  }

  private initControls(name: String, kind: String, volume: number) {
    this.nameCtr = new FormControl(name, [Validators.required, Validators.minLength(3)]);
    this.kindCtr = new FormControl(kind, [Validators.required, Validators.minLength(3)]);
    this.volumeCtr = new FormControl(volume, Validators.required);
  }

  onSave() {
    if (!this.wineForm.invalid) {
    const wine = new Wine(
      this.wineForm.value['name'],
      this.wineForm.value['kind'],
      this.wineForm.value['volume']
    );
    if (this.isNew) {
      this.wineService.addWine(wine);
    } else if (this.isEdit) {
      this.wineService.editWine(this.id, wine);
    }
    this.navigateBack();
    }
  }

  onClose() {
    this.navigateBack();
  }

  onSubmit() {
  }

  private navigateBack() {
    this.router.navigate(['/wine-register-ui'], { relativeTo: this.route });
  }
}
