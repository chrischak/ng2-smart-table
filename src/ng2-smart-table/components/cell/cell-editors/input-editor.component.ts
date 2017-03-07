import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'input-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <div class="form-group has-feedback" [class.has-error]="field.errors && (field.dirty || field.touched)" style="margin-bottom: 0;">
      <input #field="ngModel"
        [ngClass]="inputClass"
        class="form-control"
        [(ngModel)]="cell.newValue"
        [name]="cell.getId()"
        [placeholder]="cell.getTitle()"
        [disabled]="!cell.isEditable()"
        (click)="onClick.emit($event)"
        (keydown.enter)="onEdited.emit($event)"
        (keydown.esc)="onStopEditing.emit()"
        [required]="cell.getColumn().getConfig()?.required"
        [minlength]="cell.getColumn().getConfig()?.minLength"
        [maxlength]="cell.getColumn().getConfig()?.maxLength"
        [pattern]="cell.getColumn().getConfig()?.pattern">
      <div *ngIf="field.errors && (field.dirty || field.touched)">
        <i class="ion-alert-circled form-control-feedback" style="pointer-events: auto; cursor: pointer; margin-top: 0;"
            tooltip="Поле обязательно для заполнения"
            placement="bottom"
            *ngIf="field.errors.required"></i>          
        <i class="ion-alert-circled form-control-feedback" style="pointer-events: auto; cursor: pointer; margin-top: 0;"
            tooltip="Поле должно содержать не менее {{field.errors.minlength.requiredLength}} знаков"
            placement="bottom"
            *ngIf="field.errors.minlength"></i>          
        <i class="ion-alert-circled form-control-feedback" style="pointer-events: auto; cursor: pointer; margin-top: 0;"
            tooltip="Поле должно содержать не более {{field.errors.maxlength.requiredLength}} знаков"
            placement="bottom"
            *ngIf="field.errors.maxlength"></i>          
        <i class="ion-alert-circled form-control-feedback" style="pointer-events: auto; cursor: pointer; margin-top: 0;"
            tooltip="Значение поля не соответствует образцу"
            placement="bottom"
            *ngIf="field.errors.pattern"></i>
      </div>
    </div>
    `,
})
export class InputEditorComponent extends DefaultEditor {
  constructor() {
    super();
  }
}
