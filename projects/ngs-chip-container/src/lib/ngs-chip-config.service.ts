import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NgsChipConfigurationService {
	public maxChipCount?: number;
	public maxCharCount?: number;
	public tooltipLinebreak?: boolean;
	public expandable?: boolean;
}
