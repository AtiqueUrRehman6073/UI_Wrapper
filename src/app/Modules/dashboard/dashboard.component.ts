import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { Patient } from 'src/app/Models/Patient';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { MasterApiService } from 'src/services/masterApiService/master-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent {
  title = 'FHIR-UI';
  showLoader: boolean = true;
  showAlert: boolean = false;
  showInExcel: boolean = false;
  alertType: string = 'alert alert-dismissible fade show';
  alertMessage: string = '';
  patientList: Array<Patient> = [];
  colHeaders: Array<string> = [];
  hotid: string = 'gridId';
  licenseKey = "non-commercial-and-evaluation";
  gridSettings: Handsontable.GridSettings = {};
  private hotRegisterer = new HotTableRegisterer();



  msgs:Array<any> = new Array<any>()



  constructor(private apiService: MasterApiService,private messageService:MessageService) { }
  ngOnInit() {
    // this.tempArray = ['One','Two','Three','Four'];
    // this.cols = ['ColsOne','ColsTwo','ColsThree','ColsFour'];
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
      colWidths: [150, 200, 100, 100, 100, 100, 110, 120, 150, 70, 60, 300],
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
        'Name', 'Email', 'Gender', 'Marital S', 'Language', 'DOB', 'Cell Phone', 'Work Phone', 'City', 'State', 'Zip', 'Address'
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
      this.patientList.forEach(element => {
        element.Address = element.Address == null ? "(--)" : element.Address;
        element.DateOfBirth = element.DateOfBirth == null ? "(--)" : element.DateOfBirth.split('T')[0];
        element.FirstName = element.FirstName == null ? element.LastName == null ? "(--)" : element.LastName : element.FirstName;
        element.EmailAddress = element.EmailAddress == null ? "(--)" : element.EmailAddress;
        element.Gender = element.Gender == null ? "(--)" : element.Gender;
        element.MaritalStatus = element.MaritalStatus == null ? "(--)" : element.MaritalStatus;
        element.Languages = element.Languages == null ? "(--)" : element.Languages;
        element.CellPhone = element.CellPhone == null ? "(--)" : element.CellPhone;
        element.BusinessPhone = element.BusinessPhone == null ? "(--)" : element.BusinessPhone;
        element.City = element.City == null ? "(--)" : element.City;
        element.State = element.State == null ? "(--)" : element.State;
        element.Zip = element.Zip == null ? "(--)" : element.Zip;
      });
      this.showLoader = false;
      //this.ViewInExcel();
      this.alertType = this.alertType + ' alert-success';
      clearInterval(calc);
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
      this.alertMessage = this.patientList.length + ' Records Loaded Successfully ! Time taken : ' + timer + ' milliseconds.';
      this.messageService.add({sticky: true,severity:'success', summary:'API Response', detail:this.patientList.length+' Records Loaded successfully ! Time taken : ' + timer + ' milliseconds.'});
      this.showAlert = true;
    }, (error: any) => {
      this.alertType = this.alertType + ' alert-danger';
      this.alertMessage = error.message;
      this.showAlert = true;
      this.showLoader = false;
    });
  }
  ViewInExcel() {
    this.showInExcel = true;
    //if(this.hotRegisterer.getInstance(this.hotid).isEmptyRow(1)){
    //debugger;
    setTimeout(() => {
      if (this.hotRegisterer.getInstance(this.hotid).countEmptyRows() <= 3) {
        this.hotRegisterer.getInstance(this.hotid).updateSettings({ data: this.patientList });
      }
    }, 100);
  }
  CloseExcel() {
    this.showInExcel = false;
  }
}
