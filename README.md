# Ngs Chip Container

This Library introduces an Intelligent way to hold Material Chips to make it only take the space needed.


## How to use

### Install

Run `npm install ngs-chip-container@latest` to install the latest version of Ngs Chip Container.

### Importing into Module with default Configuration

```typescript
@NgModule({
  imports: [
    NgsChipContainerModule.forRoot({
      maxChipCount: 3 // Default Number of chips to be shown
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
  <lib-ngs-chip-container>
      <mat-chip *ngsChip="Name1">{{Name1}}</mat-chip>
      <mat-chip *ngsChip="Name2">{{Name2}}</mat-chip>
      <mat-chip *ngsChip="Name3">{{Name3}}</mat-chip>
      <mat-chip *ngsChip="Name4">{{Name4}}</mat-chip>
  </lib-ngs-chip-container>
</mat-chip-list>
```

### Using In Component - with loops

```html
<mat-chip-list>
  <lib-ngs-chip-container>
    <ng-container *ngFor="let name of Names">
      <mat-chip *ngsChip="name">{{name}}</mat-chip>
    </ng-container>
  </lib-ngs-chip-container>
</mat-chip-list>
```

## Further help

Please contact me via filing an [Issue](https://github.com/srukshan98/SmartChipContainer/issues) or directly E-mail at [sachithrukshanmail@gmail.com](mailTo:sachithrukshanmail@gmail.com).
