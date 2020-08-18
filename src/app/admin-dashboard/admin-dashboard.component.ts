import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardserviceService } from '../dashboardservice.service';
import { map, throttleTime } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
// import { IntlService } from '@progress/kendo-angular-intl';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Product } from '../class/product_class';
import { VehicleAssignedDataService } from '../vehicleAssigned/vehicle-assigned-data.service';
// import { TopProducts } from '../top-products';



declare var require: any;
var dateFormat = require('dateformat');
var now = new Date();
class model {
  constructor(public kind: string, public share: number) { }
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  dataSource: MatTableDataSource<Product>;

  count = [];
  c = [];
  type = ['Assigned', 'Done'];
  // public monthOrderCount: any[] = [];
  // public orderData: any[] = [];
  // public months: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  // startyr: number = 2020;
  // public DonutData: any[] = [];
  // currentYear = now.getFullYear();
  // selectedYear: number = 2020;
  // yaerArray = [];
  customerCount: number;
  // TodaysCOH: number;
  // feedbackCount: number;
  // TodaysOrder: number;
  // public data: model[] = [];
  // public pieData: any[] = [];
  // public labelContent(e: any): string {
  //   return e.category;
  // }
  fk_worker_id : number ;
  a_count : number = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _assignedData : VehicleAssignedDataService,public serobj: DashboardserviceService) {
    // this.labelContent1 = this.labelContent1.bind(this);
    // this.dataSource = new MatTableDataSource();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {

    this.fk_worker_id = parseInt(localStorage.getItem('worker_id'));
    this.serobj.getRatioByWorkerId(this.fk_worker_id).subscribe(
      (dataCustomerCount: any) => {
        // console.log(dataCustomerCount);
        this.count = dataCustomerCount;
        console.log(this.count);
        for (let i= 0; i < dataCustomerCount.length; i++)
        {
          this.c.push(dataCustomerCount[i].Assigned);
          this.c.push(dataCustomerCount[i].Done);
        }
        console.log(this.c);

        this._assignedData.getWorkerAssignedData(this.fk_worker_id).subscribe(
          (Data : any)=>{
            this.a_count = Data.length;
            console.log(this.a_count);
          }
        );
      }
    );
  }
    // this.serobj.getTodaysCash().subscribe(
    //   (dataTodayCashCount: any) => {
    //     // console.log(dataCustomerCount);
    //     this.TodaysCOH = dataTodayCashCount[0].total;
    //   }
    // );
    // this.serobj.getTotalFeedback().subscribe(
    //   (dataFeedbackCount: any) => {
    //     // console.log(dataCustomerCount);
    //     this.feedbackCount = dataFeedbackCount[0].Feedbacks;
    //   }
    // );
    // this.serobj.getTodaysOrderCount().subscribe(
    //   (dataTodaysOrderCount: any) => {
    //     // console.log(dataCustomerCount);
    //     this.TodaysOrder = dataTodaysOrderCount[0].Today_Orders;
    //   }
    // );



    // this.onYearChange();
    // console.log(this.startyr, this.currentYear);
    // for (let y = this.startyr; y <= this.currentYear; y++) {
    //   this.yaerArray.push(y);
    // }
    // console.log(this.yaerArray);
    // this.serobj.getAllCustomer().subscribe((data1: any[]) => {
    //   this.count = data1;
    //   console.log(this.count);
    //   for (let i = 0; i < data1.length; i++) {
    //     this.c.push(this.count[i].simpleCustomer);
    //     this.c.push(this.count[i].memberCount);

    //     console.log(this.c);
    //   }
    // });
    // this.serobj.getStatus().subscribe((data3: any[]) => {
    //   this.DonutData = data3;
    //   console.log(this.DonutData);
    //   for (let i = 0; i < data3.length; i++) {
    //     this.pieData = [
    //       { category: 'Delivered', value: this.DonutData[i].Delivered },
    //       { category: 'Packing', value: this.DonutData[i].Packing },
    //       { category: 'On The Way', value: this.DonutData[i].On_The_Way },

    //     ];
    //   }
    // });

    // this.serobj.getTopProducts().subscribe(
    //   (data4: TopProducts[]) => {
    //     console.log(data4);
    //     this.topProductarr = data4;
    //     this.dataSource.data = this.topProductarr;
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;

    //   }
    // );

  // public labelContent1(args: LegendLabelsContentArgs): string
  // {
  //   return `${args.dataItem.category} value: ${this.intl.formatNumber(args.dataItem.value, '')}`;
  // }
  // public onYearChange(): void
  // {
  //   console.log(this.selectedYear);
  //   this.serobj.getOrder(this.selectedYear).subscribe((data2: any[]) => {
  //     this.monthOrderCount = data2;
  //     console.log(this.monthOrderCount);


  //     for (let j = 0; j < data2.length; j++) {

  //       this.orderData.push(this.monthOrderCount[j].COUNT);
  //     }
  //   });
  //   console.log(this.orderData, this.months);

  // }
}
