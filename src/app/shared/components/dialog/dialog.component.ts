import {
  Component,
  ViewChild,
  OnInit,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  ViewContainerRef,
  Output,
  EventEmitter
} from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { DialogAction } from './dialog.models';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  // CURRENT
  childComponentType: ComponentType<any>;

  childComponentInstance: any;

  actions: DialogAction[] = [];

  title: string;

  context: any = {};

  loaded: boolean;

  @ViewChild('childContainer', { read: ViewContainerRef }) childContainer: ViewContainerRef;

  @Output() child = new EventEmitter<any>();

  constructor(
    private factor: ComponentFactoryResolver,
    private dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit() {

    this.dialogRef.afterOpen()
      .toPromise()
      .then(this.factoryTheComponent);

  }

  private factoryTheComponent = () => {

    const componentFactory: ComponentFactory<any> = this.factor.resolveComponentFactory(this.childComponentType);

    const componentRef: ComponentRef<any> = this.childContainer.createComponent(componentFactory);

    this.childComponentInstance = componentRef.instance;

    this.child.emit(this.childComponentInstance);

    this.child.complete(); // unsubsribe subscribers

    this.appendContextToInstance(componentRef.instance, this.context);

    this.loaded = true;

  }

  private appendContextToInstance(instance: any, context: any) {

    if (instance && context) {

      Object.keys(context).forEach((key) => {

        instance[key] = this.context[key];

      });

    }

  }

}
