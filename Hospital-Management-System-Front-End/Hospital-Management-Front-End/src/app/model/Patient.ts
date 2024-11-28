export class Patient {
  public id: number=0;
  public name: string;
  public nic:string;
  public address: string;
  public bloodGroup: string;
  public category: string;
  public gender: string;
  public contact: string;
  public note: string;
  public age: string;
  public allergies: string;
  public email: string;
  constructor( name: string,nic:string, address: string, bloodGroup: string, category: string, gender: string, contact: string, note: string, age: string, allergies: string, email: string) {
    this.name = name;
    this.nic=nic;
    this.address = address;
    this.bloodGroup = bloodGroup;
    this.category = category;
    this.gender = gender;
    this.contact = contact;
    this.note = note;
    this.age = age;
    this.allergies = allergies;
    this.email = email;
  }
  public setId(id:number){
    this.id=id;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getAddress(): string {
    return this.address;
  }
  public getBloodGroup(): string {
    return this.bloodGroup;
  }
  public getCategory(): string {
    return this.category;
  }
  public getGender(): string {
    return this.gender;
  }
  public getContact(): string {
    return this.contact;
  }
  public getNote(): string {
    return this.note;
  }
  public getAge(): string {
    return this.age;
  }
  public getAllergies(): string {
    return this.allergies;
  }
}
