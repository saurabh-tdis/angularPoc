import { Component, OnInit } from '@angular/core';
import { Users } from '../Model/user.model';


@Component({
  selector: 'app-array-practice',
  templateUrl: './array-practice.component.html',
  styleUrls: ['./array-practice.component.scss']
})
export class ArrayPracticeComponent implements OnInit {
  UsersData: Users = new Users();
  newUser: Users[] = []
  Data: any
  profileData:any
  
  
  constructor() { }

  ngOnInit(): void {
    this.Data = localStorage.getItem('prince');
    this.profileData = JSON.parse(this.Data); 
    console.log(this.profileData,"uyfuyf");
    
    
    // For Geeting Name with start letter 
    let result = this.profileData.filter((f:any) => f.name.toLowerCase().startsWith('r'))
    console.log(result);

    // for geeting country with name first letter

    let countryCheck = this.profileData.filter((f: any) => f.address.country.toLowerCase().startsWith('n'))
    console.log(countryCheck);
    
    // For Getting All Address country
    this.profileData.map((a: any) => {
      console.log(a.address.country, "sdf");
    });


  // For Creating New Object
    
    let arr2 = this.profileData.map((v: any) => ({ name: v.name, email: v.email, country: v.address.country, strret: v.address.street }));

    console.log(arr2);

  

    
   

  }

  onSubmit() {
    console.log(this.UsersData);
    this.newUser.push(this.UsersData)
    localStorage.setItem('prince', JSON.stringify(this.newUser)); 
    this.profileData.push(this.UsersData)
    this.UsersData = new Users()
  }
}
