import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptService } from '@app/shared/services/script/script.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ScriptService]
})
export class ScriptServiceModule { }
