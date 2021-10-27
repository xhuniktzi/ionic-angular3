import { Component, Input, OnInit } from '@angular/core';
import { Branch } from 'src/app/common/branch';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.scss'],
})
export class BranchItemComponent implements OnInit {
  @Input() branch: Branch = undefined;

  constructor() {}

  ngOnInit() {}
}
