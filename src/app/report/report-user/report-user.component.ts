import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReportService } from '../report.service';
import { _ } from 'ag-grid-community';

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
  startDate = '';
  endDate='';

  constructor(private reportService: ReportService, private ref: ChangeDetectorRef) { 
  this.columnDefs = [
        {headerName: 'Event ID', field: 'eventId' },
        {headerName: 'Organiser ID', field: 'organiserId' },
        {headerName: 'Duration', field: 'Duration'},

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
    //TODO: take in userId from login
    const userId="1"
    this.reportService.getUserEvents(userId, _this.startDate, _this.endDate).subscribe(data =>{
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

  submit(){
    this.getUserReports();
  }

}
