import { MasterApiService } from './../services/master-api.service';
import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FHIR-UI';
  showLoader: boolean = true;
  showAlert: boolean = false;
  showInExcel: boolean = true;
  alertType: string = 'alert alert-dismissible fade show';
  alertMessage: string = '';
  patientList: Array<any> = [];
  colHeaders: Array<string> = [];
  licenseKey = "non-commercial-and-evaluation";
  gridSettings: Handsontable.GridSettings = {};
  constructor(private apiService: MasterApiService) { }
  ngOnInit() {
    this.InitializeGridControls();
    this.colHeaders = [
      'Name', 'Email', 'Gender', 'Marital S', 'Language', 'DOB', 'Cell Phone', 'Business Phone', 'City', 'State', 'Zip', 'Address'
    ];
    setTimeout(() => {
      this.showLoader = false;
    }, 450);
  }

  CloseAlert() {
    this.showAlert = false;
  }

  InitializeGridControls() {
    this.gridSettings = {
      //licenseKey: this.licenseKey,
      //mergeCells: true,
      //search: true,
      minSpareRows: 1,
      stretchH: 'all',
      //rowHeaders: true,
      minRows: 3,
      width: '100%',
      height: 300,
      customBorders: true,
      dropdownMenu: true,
      contextMenu:true,
      //multiColumnSorting: true,
      //filters: true,
      manualRowMove: true,
      manualColumnMove: true,
      manualRowResize: true,
      manualColumnResize: true,
      allowInsertRow: true,
      fillHandle: {
        direction: 'vertical',
        autoInsertRow: true
      },
      data: [],
      rowHeights: 23,
      colWidths: 32,
      viewportColumnRenderingOffset: 27,
      viewportRowRenderingOffset: 'auto',
      outsideClickDeselects: true,
      preventOverflow: 'horizontal',
      renderAllRows: true,
      columns: [
        {
          data: 'Name',
          type: 'text'
        },
        {
          data: 'Email',
          type: 'text'
        },
        {
          data: 'Gender',
          type: 'text'
        },
        {
          data: 'Marital St',
          type: 'text'
        },
        {
          data: 'Language',
          type: 'text'
        },
        {
          data: 'DOB',
          type: 'text'
        },
        {
          data: 'Cell',
          type: 'text'
        },
        {
          data: 'Business Phone',
          type: 'text'
        },
        {
          data: 'City',
          type: 'text'
        },
        {
          data: 'State',
          type: 'text'
        },
        {
          data: 'Zip',
          type: 'text'
        },
        {
          data: 'Address',
          type: 'text'
        },
      ],
      colHeaders: [
        'Name', 'Email', 'Gender', 'Marital S', 'Language', 'DOB', 'Cell Phone', 'Business Phone', 'City', 'State', 'Zip', 'Address'
      ]
    }
  }
  GetAllPatients() {
    let timer = 0;
    let calc = setInterval(() => {
      timer = timer + 1;
    }, 1);
    this.showLoader = true;
    this.apiService.GetAllData().subscribe((reponse: any) => {
      this.patientList = reponse;
      this.showLoader = false;
      this.alertType = this.alertType + ' alert-success';
      clearInterval(calc);
      this.alertMessage = this.patientList.length + ' Records Loaded Successfully ! Time taken : ' + timer + ' milliseconds.';
      this.showAlert = true;
    }, (error: any) => {
      this.alertType = this.alertType + ' alert-danger';
      this.alertMessage = 'Something went wrong : ' + error;
      this.showAlert = true;
    });
  }

}
