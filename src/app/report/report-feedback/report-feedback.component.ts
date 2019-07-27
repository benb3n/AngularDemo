import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-feedback',
  templateUrl: './report-feedback.component.html',
  styleUrls: ['./report-feedback.component.scss']
})
export class ReportFeedbackComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData = [];
  eventId;

  constructor(private reportService: ReportService) { 
  this.columnDefs = [
        {headerName: 'User Id', field: 'userId' },
        {headerName: 'Event Status', field: 'status'},
        {headerName: 'Feedback', field: 'feedback'}
    ];
    this.defaultColDef = { sortable: true };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getFeedback();
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

  getFeedback(){
    const _this = this;
    this.reportService.getEventFeedback(_this.eventId).subscribe(data =>{
     // _this.gridApi.setRowData(data);
     _this.rowData = data;
    })
  }

  submit(){
    this.getFeedback();
  }

  getHeight(): number {
    return window.innerHeight - 3 ;
  }
 
  getWidth(): number {
    return window.innerWidth - 2 ;
  }
 

  	
  

}
