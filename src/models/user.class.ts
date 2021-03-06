export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) {

    this.firstName = obj ? obj.firstName : '';  // If else abfrage 
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.email = obj ? obj.email : '';

  }

  public toJSON() {
    return {
      birthDate: this.birthDate,
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      email: this.email
    }
  }
}

