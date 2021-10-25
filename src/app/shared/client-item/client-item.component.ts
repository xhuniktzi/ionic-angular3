import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/common/client';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss'],
})
export class ClientItemComponent implements OnInit {
  @Input() client: Client = undefined;
  constructor() {}

  ngOnInit() {}
}
