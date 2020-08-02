import { NgsChipConfigurationService } from './ngs-chip-config.service';
import { NgsChipDirective } from './ngs-chip.directive';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgsChipContainerComponent } from './ngs-chip-container.component';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NgsChipContainerComponent,
    NgsChipDirective
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgsChipContainerComponent,
    NgsChipDirective
  ],
  providers: [
    NgsChipConfigurationService
  ]
})
export class NgsChipContainerModule {
  static forRoot(config?: NgsChipConfigurationService): ModuleWithProviders {
    return {
      ngModule: NgsChipContainerModule,
      providers: [
        {
          provide: NgsChipConfigurationService,
          useValue: config ?? {
            maxChipCount: null
          }
        }
      ]
    };
  }
}
