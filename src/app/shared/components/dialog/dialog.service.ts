import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';
import { DialogComponent } from './dialog.component';
import { OpenConfiguration } from './dialog.models';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }


  open(childComponent: ComponentType<any>, config: OpenConfiguration) {

    const dialogInstance: MatDialogRef<any> = this.dialog.open(
      DialogComponent,
      {
        width: config.width || '100vw',
        height: config.heigth || '100vh',
        panelClass: 'full-screen-dialog'
      }
    );

    dialogInstance.componentInstance.childComponentType = childComponent;

    dialogInstance.componentInstance.actions = config.actions;

    dialogInstance.componentInstance.title = config.title;

    dialogInstance.componentInstance.context = config.context;

    return dialogInstance;

  }
}
