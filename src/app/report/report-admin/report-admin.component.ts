import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-admin',
  templateUrl: './report-admin.component.html',
  styleUrls: ['./report-admin.component.scss']
})
export class ReportAdminComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData = [];
  startDate='';
  endDate='';

  constructor(private reportService: ReportService) { 
  this.columnDefs = [
        {headerName: 'Event Name', field: 'eventName' },
        {headerName: 'Event Description', field: 'eventDesc' },
        {headerName: 'Start Time', field: 'startTime'},
        {headerName: 'End Time', field: 'endTime'},
        {headerName: 'Minimum Participants', field: 'minPax'},
        {headerName: 'Maximum Participants', field: 'maxPax'},
        {headerName: 'Organiser ID', field: 'organiserId'},
        {headerName: 'Number of Signups', field: 'signupCount'},
        {headerName: 'Status', field: 'status'}
    ];
    this.defaultColDef = { sortable: true };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getAdminReports();
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

  getAdminReports(){
    const _this = this;
    console.log(this.startDate);
    console.log(this.endDate);
    this.reportService.getAllAdminEvents(_this.startDate, _this.endDate).subscribe(data =>{
     // _this.gridApi.setRowData(data);
     _this.rowData = data;
    })
  }

  getHeight(): number {
    return window.innerHeight - 3 ;
  }
 
  getWidth(): number {
    return window.innerWidth - 2 ;
  }

  submit(){
    console.log(this.startDate);
    console.log(this.endDate);
    this.getAdminReports();
  }
 

  	
  

}
