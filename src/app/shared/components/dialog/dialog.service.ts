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


  open(childComponent: ComponentType<any>, config: OpenConfiguration): MatDialogRef<DialogComponent> {

    const dialogInstance: MatDialogRef<DialogComponent> = this.dialog.open(
      DialogComponent,
      {
        width: config.fullScreen ? (config.width || '100vw') : '400px',
        height: config.fullScreen ? (config.heigth || '100vh') : '400px',
        panelClass: config.fullScreen ? 'app-dialog full-screen-dialog' : 'app-dialog',
      }
    );

    dialogInstance.componentInstance.childComponentType = childComponent;

    dialogInstance.componentInstance.actions = config.actions;

    dialogInstance.componentInstance.title = config.title;

    dialogInstance.componentInstance.context = config.context;

    return dialogInstance;

  }
}
