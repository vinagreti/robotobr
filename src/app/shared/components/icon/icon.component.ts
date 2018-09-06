import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewInit {

  icon: string;

  @Input() font: 'mat' | 'fas';

  @ViewChild('text') textElement: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        this.icon = this.textElement.nativeElement.textContent;
      } catch (error) { }
    }, 0);
  }

}
