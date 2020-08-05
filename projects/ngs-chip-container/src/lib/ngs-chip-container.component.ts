import { NgsChipConfigurationService } from './ngs-chip-config.service';
import { Component, ContentChildren, QueryList, AfterViewInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, NgZone } from '@angular/core';
import { NgsChipDirective } from './ngs-chip.directive';

@Component({
	selector: 'ngs-chip-container',
	template: `
		<ng-container *ngFor="let chip of maxChipArray">
			<ng-container *ngTemplateOutlet="chip.templateRef"></ng-container>
		</ng-container>
		<ng-container *ngIf="moreChipCount > 0">
			<mat-chip [matTooltip]="moreChipLabel" [matTooltipClass]="{'chip-container-tooltip': addTooltipLinebreak}" (click)="onExpand()">+ {{moreChipCount}} More</mat-chip>
		</ng-container>
	`,
	styles: [
		`.chip-container-tooltip {
			white-space: pre-line !important;
		}`
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgsChipContainerComponent implements AfterViewInit {

	@Input() maxChipCount: number = null;
	@Input() maxCharCount: number = null;
	@Input() tooltipLinebreak: boolean = false;
	@Input() expandable: boolean = false;
	@ContentChildren(NgsChipDirective) chips: QueryList<NgsChipDirective>;
	chipCount: number = 0;
	moreChipCount: number = 0;
	moreChipLabel: string = '';
	isExpanded: boolean = false;
	maxChipArray: NgsChipDirective[] = [];

	get addTooltipLinebreak(): boolean {
		return this.tooltipLinebreak !== false || this.config?.tooltipLinebreak;
	}
	get isExpandable(): boolean {
		return this.expandable !== false || this.config?.expandable;
	}

	constructor(
		private config: NgsChipConfigurationService,
		private cdr: ChangeDetectorRef,
		private zone: NgZone
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
		this.zone.runOutsideAngular(() => {
			this.chipCount = this.chips.length;
			this.maxChipArray = this.chips?.toArray().slice(0, this.getMaxChipCount()) ?? [];
			this.moreChipLabel = (this.chips?.toArray().slice(this.getMaxChipCount())?.map((item: NgsChipDirective) => item.value)?.join(this.addTooltipLinebreak ? ' \n ' : ' ● ')) ?? '';
			this.moreChipCount = this.chipCount - this.getMaxChipCount();
		})
		this.cdr.detectChanges();
		if (this.isExpanded) this.onExpand();
	}

	private getMaxChipCount(): number {
		if (this.maxChipCount != null) {
			return this.maxChipCount;
		} else if (this.maxCharCount != null) {
			return this.getMaxChipCountByChar(this.maxCharCount);
		} else if (this.config?.maxChipCount != null) {
			return this.config?.maxChipCount;
		} else if (this.config?.maxCharCount != null) {
			return this.getMaxChipCountByChar(this.config?.maxCharCount);
		} else {
			return this.chipCount;
		}
	}

	getMaxChipCountByChar(maxCharCount: number): number {
		if (maxCharCount < 8) throw new Error('Ngs-Chip-Container: Maximum of 8 Characters are Required');

		let currentChipCount: number = -1;
		let currentCharCount: number = 0;

		const chipValues: string[] = this.chips?.map((item: NgsChipDirective) => item.value);

		if (chipValues != null && chipValues.join().length < maxCharCount) {
			return chipValues.length + 1;
		}

		if (chipValues != null && chipValues.length > 0) {
			for (const [index, chip] of chipValues.entries()) {
				if ((chip.length + currentCharCount) > (maxCharCount - 8)) {
					break;
				} else {
					currentChipCount = index;
					currentCharCount += chip.length;
				}
			}
		}

		return currentChipCount + 1;
	}

	onExpand(): void {
		if (!this.isExpandable) return;

		this.zone.runOutsideAngular(() => {
			this.isExpanded = true;
			this.maxChipArray = this.chips?.toArray() ?? [];
			this.moreChipCount = 0;
		})
		this.cdr.detectChanges();
	}
}
