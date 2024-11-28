export class Appointment{
  public id:number=0;
  public type:string;
  public qr:string;
  public localdate:string;
  public description:string;
  public status:string;
  public roomNumber:number;
  public q_Number:number;
  public patientId:number;
  public adminId:number;

  constructor(type:string,qr:string,localdate:string,description:string,status:string,roomNumber:number,q_Number:number,patientId:number,adminId:number){
    this.type=type;
    this.qr=qr;
    this.localdate=localdate;
    this.description=description;
    this.status=status;
    this.roomNumber=roomNumber;
    this.q_Number=q_Number;
    this.patientId=patientId;
    this.adminId=adminId;
  }
}
