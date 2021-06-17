# <div align="center"> Angular Smart Chip Container </div>

![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/srukshan98)
[![GitHub issues](https://img.shields.io/github/issues/srukshan98/SmartChipContainer)](https://github.com/srukshan98/SmartChipContainer/issues)
[![GitHub license](https://img.shields.io/github/license/srukshan98/SmartChipContainer)](https://github.com/srukshan98/SmartChipContainer)
 

This Library introduces an Intelligent way to hold Material Chips to make it only take the space needed.

![Screenshot of Library in action](https://i.imgur.com/uZdbgNd.png)

## How to use

### Install

Run `npm install ngs-chip-container@latest` to install the latest version of Ngs Chip Container.

### Importing into Module with default Configuration

```typescript
@NgModule({
  imports: [
    NgsChipContainerModule.forRoot({
      maxChipCount: 3, // Default Number of chips to be shown
      tooltipLinebreak: true, // Default line break configuration for Tooltips
      maxCharCount: 3, // Default Number of characters for chips to be shown
      expandable: true // More chip will be expandable on click
    })
  ]
})
```

### Importing into Module without default Configuration

```typescript
@NgModule({
  imports: [
    NgsChipContainerModule
  ]
})
```

### Using In Component - Simple

```html
<mat-chip-list>
  <ngs-chip-container [maxChipCount]="3" tooltipLinebreak expandable> // optional component specific configuration
      <mat-chip *ngsChip="Name1">{{Name1}}</mat-chip>
      <mat-chip *ngsChip="Name2">{{Name2}}</mat-chip>
      <mat-chip *ngsChip="Name3">{{Name3}}</mat-chip>
      <mat-chip *ngsChip="Name4">{{Name4}}</mat-chip>
  </ngs-chip-container>
</mat-chip-list>
```

### Using In Component - with loops

```html
<mat-chip-list>
  <ngs-chip-container [maxCharCount]="50"> // optional component specific configuration
    <ng-container *ngFor="let name of Names">
      <mat-chip *ngsChip="name">{{name}}</mat-chip>
    </ng-container>
  </ngs-chip-container>
</mat-chip-list>
```

## Further help

Please contact me via filing an [Issue](https://github.com/srukshan98/SmartChipContainer/issues) or directly E-mail at [sachithrukshanmail@gmail.com](mailTo:sachithrukshanmail@gmail.com).

<p align="center">
	<a href="https://github.com/srukshan98"><img src="https://img.shields.io/github/followers/srukshan98.svg?label=GitHub&style=social" alt="GitHub Link"></a>
	<a href="https://twitter.com/srukshan98"><img src="https://img.shields.io/twitter/follow/srukshan98?label=Twitter&style=social" alt="Twitter"></a>
	<a href="https://www.linkedin.com/in/srukshan98"><img src="https://img.shields.io/badge/LinkedIn--_.svg?style=social&logo=linkedin" alt="LinkedIn"></a>
	<a href="https://www.patreon.com/srukshan98"><img src="https://img.shields.io/badge/Sponsors--_.svg?style=social&logo=github&logoColor=EA4AAA" alt="Sponsors"></a>
</p>

