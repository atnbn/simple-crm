import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { User } from 'src/models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date;

  constructor(private firestore: AngularFirestore) { }
  ngOnInit(): void {
  }


  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    this.firestore.collection('users').add(this.user.toJSON()).then((result: any)=>{
      console.log('Added user finished:', result)
    })
  

  }
}
