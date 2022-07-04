export class User{
  toJson(): unknown {
    throw new Error('Method not implemented.');
  }
    firstName :string;
    lastName: string;
    birthDate: number; 
    street: string;
    zipCode: number;
    city:string;

     constructor(obj?:any){
     
        this.firstName = obj ? obj.firstName : '';  // If else abfrage 
        this.lastName = obj ? obj.lastName: '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';

    
    }
}
