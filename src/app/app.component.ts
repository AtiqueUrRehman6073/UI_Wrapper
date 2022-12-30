import { MasterApiService } from './../services/master-api.service';
import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FHIR-UI';
  showLoader: boolean = true;
  showAlert: boolean = false;
  showInExcel: boolean = false;
  alertType: string = 'alert alert-dismissible fade show';
  alertMessage: string = '';
  patientList: Array<any> = [];
  colHeaders: Array<string> = [];
  hotid: string = 'gridId';
  licenseKey = "non-commercial-and-evaluation";
  gridSettings: Handsontable.GridSettings = {};
  private hotRegisterer = new HotTableRegisterer();
  constructor(private apiService: MasterApiService) { }
  ngOnInit() {
    this.hotid = 'gridId';
    this.InitializeGridControls();
    this.colHeaders = [
      'Name', 'Email', 'Gender', 'Marital-S', 'Language', 'DOB', 'Cell-Phone', 'Business-Phone', 'City', 'State', 'Zip', 'Address'
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
      mergeCells: false,
      minRows: 3,
      width: '100%',
      height: 800,
      dropdownMenu: true,
      contextMenu: true,
      manualRowMove: true,
      manualRowResize: true,
      manualColumnMove: true,
      manualColumnResize: true,
      filters: true,
      fillHandle: {
        direction: 'vertical',
        autoInsertRow: true
      },
      rowHeaders: true,
      data: [],
      rowHeights: 23,
      colWidths: [150, 150, 75, 95, 90, 120, 105, 135, 55, 65, 55, 300],
      columns: [
        {
          data: 'FirstName',
          type: 'text'
        },
        {
          data: 'EmailAddress',
          type: 'text'
        },
        {
          data: 'Gender',
          type: 'text'
        },
        {
          data: 'MaritalStatus',
          type: 'text'
        },
        {
          data: 'Languages',
          type: 'text'
        },
        {
          data: 'DateOfBirth',
          type: 'text'
        },
        {
          data: 'CellPhone',
          type: 'text'
        },
        {
          data: 'BusinessPhone',
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
  ViewInExcel() {
    this.showInExcel = true;
    setTimeout(() => {
      this.hotRegisterer.getInstance(this.hotid).updateSettings({ data: this.patientList });
    }, 1000);
  }

}
