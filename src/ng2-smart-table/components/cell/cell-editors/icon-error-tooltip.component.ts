import { Component, Input } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'icon-error-tooltip',
  template: `        
        <i class="{{icon || 'ion-alert-circled'}} form-control-feedback icon-error-tooltip" style="pointer-events: auto; cursor: pointer; margin-top: 0;"
            [tooltip]="content"
            [placement]="placement || 'bottom'"></i>
    `,
})
export class IconErrorTooltipComponent extends DefaultEditor {

    @Input() public icon: string = "ion-alert-circled";
    @Input() public content: string;
    @Input() public placement: string = "bottom";

  constructor() {
    super();
  }
}
