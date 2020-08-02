import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngsChip]'
})
export class NgsChipDirective  {
  @Input('ngsChip') value: string;

  constructor(
    public templateRef: TemplateRef<any>
    ) {
      // this.chip = this._chip;
    }
}
