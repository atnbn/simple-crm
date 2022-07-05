import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  user = new User();
  allUsers = []; // empty array ffor adding data

  constructor(public dialog : MatDialog , private firestore :AngularFirestore ) { }
  
  ngOnInit(): void {
    this.firestore
    .collection('users') // We get the Data from this Array
    .valueChanges({idField: 'customIdName'}) // If a value changes
    .subscribe((changes: any) =>  // value got added
    {
      console.log('Recived changes from db' , changes)
      this.allUsers = changes; // adding data to all.Users
    })
  }


  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }


  }
