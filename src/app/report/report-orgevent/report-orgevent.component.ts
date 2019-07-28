import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-orgevent',
  templateUrl: './report-orgevent.component.html',
  styleUrls: ['./report-orgevent.component.css']
})
export class ReportOrgEventComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData = [];
  organisationId;
  gridHeight = window.innerHeight;

  constructor(private reportService: ReportService, private ref: ChangeDetectorRef) { 
  this.columnDefs = [
        {headerName: 'Organisation Name', field: 'orgName' },
        {headerName: 'Organisation Id', field: 'orgId' },
        {headerName: 'Event Name', field: 'eventName'},
        {headerName: 'Event Description', field: 'eventDesc'},
        {headerName: 'Sign Up No', field: 'signupCount'},
        {headerName: 'Status', field: 'status'},
        {headerName: 'Start Time', field: 'startTime'},
        {headerName: 'End Time', field: 'endTime'},

    ];
    this.defaultColDef = { sortable: true };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getOrgEventReport();
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

  getOrgEventReport(){
    const _this = this;
    
    this.reportService.getOrgEvent(_this.organisationId).subscribe(data =>{
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

  submit() {
    this.getOrgEventReport();
  }

}
