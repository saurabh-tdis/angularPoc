import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Switch Case
   let targetId = 'btnDelete'

    switch (targetId) {
      case 'btnUpdate':
        console.log('Update');
        break;
      case 'btnDelete':
        console.log('Delete');
        break;
      case 'btnNew':
        console.log('New');
        break;
    };
  }

 // optional Parameter
  myUser(iu: IUser, email?:string) {
    console.log(iu.name);
  }

  //for object
  method() {
    let data = {name:'prince', id:'1234', email:'prince.gmail.com'}
  console.log(data);
  };

    
}
//for class
export class Users implements IUser{
  name: string = '';
  id: number = 0;

  display(): void{
    console.log(this.id);
    console.log(this.name);
  }
};

 //for interface
interface IUser{
  name: string ,
  id: number,
};
 var  UserData = new Users();
UserData.id = 101;
UserData.name = 'prince';

// for loop
for (let i = 0; i < 3; i++) {
  console.log("statement ." + i);
}

// for of loop
let arr = [10, 20, 30, 40];
for (var val of arr) {
  console.log(val); 
}

//for in loop
for (var index in arr) {
  console.log(index); 
  console.log(arr[index]); 
};


// While Loop
let i:number = 2;
while (i < 4) {
  console.log("statement." + i)
  i++;
}
//array from // copy of arry
arr = [1, 2, 3, 4];
let myarr = Array.from(arr,x => x+x);
console.log(myarr);

//array of // its covert into array
let p = 'prince'
const data: any = Array.of<any>(1, 2, 3, p, );
console.log(data);



