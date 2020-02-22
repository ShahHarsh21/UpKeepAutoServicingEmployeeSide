export class vehicleAssignedModel {

  public constructor(
    public service_id : number,
    public vehicle_no: string,
    public fuel_tank : string,
    public meter_reading:number,
    public complaints :string,
    public user_name:string,
    public fk_user_id:number,
    public woker_id:number,
    public status:string,
    public remark:string,
    public vehicle_Assigned_id:number

    ) {
  }

}
