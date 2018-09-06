import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class LocalFirebaseService {

  firebaseDb;
  public authStatus: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor() {
    console.log('LocalDatabaseService FirebaseDriver started');
    this.startFirebase();
  }

  private startFirebase() {

    firebase.initializeApp(environment.firebase_config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authStatus.next(user);
      } else {
        this.authStatus.next(false);
      }
    });

    this.firebaseDb = firebase.firestore();

  }

}
