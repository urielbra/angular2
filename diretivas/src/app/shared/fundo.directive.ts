import { Directive, ElementRef, Renderer  } from '@angular/core';

@Directive({
  selector: '[ngFundo]'
  //selector: 'button[ngFundo]' se quiser restringeir
})
export class FundoDirective {

  cor:string = 'orange'

  constructor( private _elementRef: ElementRef , private _renderer: Renderer) { 
  	console.log(this._elementRef)

  	this._elementRef.nativeElement.style.backgroundColor = this.cor;
  	this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color',this.cor); //Ambas fazem a mesma coisa
  	
  }


}
