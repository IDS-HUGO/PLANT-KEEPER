import { Component, OnInit } from '@angular/core';
import { CareService } from '../../core/services/care.service';
import { Care } from '../../core/models/care';

@Component({
  selector: 'app-care-list',
  templateUrl: './care-list.component.html',
})
export class CareListComponent implements OnInit {
  cares: Care[] = [];

  constructor(private careService: CareService) {}

  ngOnInit() {
    this.careService.getCareRecords(1).subscribe((data) => {
      this.cares = data;
    });
  }
}
