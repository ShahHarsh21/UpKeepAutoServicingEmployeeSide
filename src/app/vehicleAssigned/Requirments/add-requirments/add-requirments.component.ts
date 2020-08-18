import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Product } from 'src/app/class/product_class';
import { VehicleAssignedDataService } from '../../vehicle-assigned-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-requirments',
  templateUrl: './add-requirments.component.html',
  styleUrls: ['./add-requirments.component.css']
})
export class AddRequirmentsComponent implements OnInit {
  displayedColumns:string[]=['check','product_image','product_name','product_price','product_description','product_color'];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  productarr:string[]=[];
  vehicle_Assigned_id : number = 0;
  product_image : string []=[];
  constructor(public _Act_routs : ActivatedRoute,public _productData :VehicleAssignedDataService,public _routs : Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.vehicle_Assigned_id = this._Act_routs.snapshot.params['vehicle_assigned_id'];
    console.log(this.vehicle_Assigned_id);
    this._productData.getAllProduct().subscribe(
      (productData : Product[])=>{
        console.log(productData);
        this.dataSource.data = productData;
      }
    );

    this._productData.getAllImages().subscribe(
      (productImages : any[])=>{
        console.log(productImages);
        this.productarr = productImages;
        // this.productarr = environment.url + '/Images/Product_image/' + productImages[0];
      }
    );
  }
  oncheckboxchange(row)
  {
    if(this.productarr.find(x => x == row.product_id))
    {
      this.productarr.splice(this.productarr.indexOf(row.product_id),1);
      // console.log(this.productarr);
    }
    else
    {
      this.productarr.push(row.product_id);
      // console.log(this.productarr);
    }
  }
  onRequirmentSubmit()
  {
    console.log(this.vehicle_Assigned_id);
    this._productData.updateAssignedVehicle(this.vehicle_Assigned_id,this.productarr.toString()).subscribe(
      (Data :any)=>{
        console.log(Data);
        this._routs.navigate(['/nav/vehicleAssigned/']);
      }
    );
  }
  onCancle()
  {
    this._routs.navigate(['/nav/vehicleAssigned/']);
  }
}
