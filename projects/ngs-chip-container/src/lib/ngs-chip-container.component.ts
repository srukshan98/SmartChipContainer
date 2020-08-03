import { NgsChipConfigurationService } from './ngs-chip-config.service';
import { Component, ContentChildren, QueryList, AfterViewInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgsChipDirective } from './ngs-chip.directive';

@Component({
  selector: 'ngs-chip-container',
  template: `
    <ng-container *ngFor="let chip of maxChipArray">
      <ng-container *ngTemplateOutlet="chip.templateRef"></ng-container>
    </ng-container>
    <ng-container *ngIf="moreChipCount > 0">
      <mat-chip [matTooltip]="moreChipLabel">+ {{moreChipCount}} More</mat-chip>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgsChipContainerComponent implements AfterViewInit {

  @Input() maxChipCount: number = null;
  // @Input() maxCharCount: number = null;
  @ContentChildren(NgsChipDirective) chips: QueryList<NgsChipDirective>;
  chipCount: number = 0;
  moreChipCount: number = 0;
  moreChipLabel: string = '';

  maxChipArray: NgsChipDirective[] = [];

  constructor(
    private config: NgsChipConfigurationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {

      this.updateChipCount();
    });
    this.chips.changes.subscribe(() => {
      this.updateChipCount();
    });
  }

  updateChipCount(): void {
    this.chipCount = this.chips.length;
    this.maxChipArray = this.chips?.toArray().slice(0, this.getMaxChipCount()) ?? [];
    this.moreChipLabel = (this.chips?.toArray().slice(this.getMaxChipCount())?.map((item: NgsChipDirective) => item.value)?.join(' ● ')) ?? '';
    this.moreChipCount = this.chipCount - this.getMaxChipCount();
    this.cdr.markForCheck();
  }

  private getMaxChipCount(): number {
    return this.maxChipCount != null ? this.maxChipCount : (this.config?.maxChipCount != null ? this.config?.maxChipCount : this.chipCount);
  }

}
