import { Directive, Input, ElementRef, Renderer2, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDynamicButtons]'
})
export class DynamicButtonsDirective implements OnChanges {
  @Input('appDynamicButtons') dynamicButton!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.dynamicButton)
    if (changes['dynamicButton']?.currentValue) {
      this.setTypeButton(this.dynamicButton);
    }
  }
  
  private setTypeButton(type: string): void {
    switch (type) {
      case 'float':
        this.renderButtons('mat-raised-button');
        break;

      case 'confirm':
        this.renderButtons('mat-flat-button');
        break;

      case 'cancel':
        this.renderButtons('mat-stroked-button');
        break;
    
      default:
        this.renderButtons('');
        break;
    }
  }
  
  private renderButtons(type: string) {
    this.renderer.setAttribute(this.el.nativeElement, type, '');
  }
}
