import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Branch } from 'src/app/common/branch';
import { BranchApiService } from 'src/app/data/branch-api.service';

@Component({
  selector: 'app-branch-picker',
  templateUrl: './branch-picker.component.html',
  styleUrls: ['./branch-picker.component.scss'],
})
export class BranchPickerComponent implements OnInit {
  results: Branch[] = [];
  name = '';

  constructor(
    private modalController: ModalController,
    private branchApi: BranchApiService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.branchApi.getAllBranches().subscribe({
      next: (data) => (this.results = data),
    });
  }

  search() {
    if (this.name === null || this.name.match(/^ *$/) != null) {
      this.branchApi.getAllBranches().subscribe({
        next: (data) => (this.results = data),
      });
    } else {
      this.branchApi.findBranchByName(this.name).subscribe({
        next: (data) => (this.results = data),
      });
    }
  }

  select(branch: Branch) {
    this.modalController.dismiss({
      value: branch,
    });
  }

  dismiss() {
    this.modalController.dismiss({
      value: null,
    });
  }
}
