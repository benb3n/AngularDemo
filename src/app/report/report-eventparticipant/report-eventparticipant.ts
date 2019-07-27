import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.css']
})
export class ReportUserComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData = [];
  gridHeight = window.innerHeight;

  constructor(private reportService: ReportService, private ref: ChangeDetectorRef) { 
  this.columnDefs = [
        {headerName: 'Nationality', field: 'nationality' },
        {headerName: 'Gender', field: 'gender' },
        {headerName: 'Birth Date', field: 'birthDate'},
        {headerName: 'Region', field: 'region'},
    ];
    this.defaultColDef = { sortable: true };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getUserReports();
    params.api.sizeColumnsToFit();
  }
    
  ngOnInit() {
  }

  onBtExport() {
    var params = {
      skipHeader: false,
      columnGroups: false,
      skipFooters: true,
      skipGroups: false,
      skipPinnedTop: true,
      skipPinnedBottom: true,
      allColumns: true,
      onlySelected: false,
      suppressQuotes: false,
      fileName: "testing"
    };
    this.gridApi.exportDataAsCsv(params);
  }

  getUserReports(){
    const _this = this;
    const userId="1"
    this.reportService.getUserEvents(userId).subscribe(data =>{
     // _this.gridApi.setRowData(data);
     _this.rowData = data;
    })
  }

  onResize(){
    this.gridHeight = window.innerHeight;
    this.gridApi.sizeColumnsToFit();
    this.ref.detectChanges();

  }

  getHeight(): number {
    return window.innerHeight - 3 ;
  }
 
  getWidth(): number {
    return window.innerWidth - 2 ;
  }

}
