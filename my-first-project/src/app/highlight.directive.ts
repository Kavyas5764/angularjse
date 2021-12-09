import { Directive,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { 
    el.nativeElement.style.color="blue";
  }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','khaki');
    this.renderer.setStyle(this.el.nativeElement,'font-size','35px');
    this.renderer.setStyle(this.el.nativeElement,'font-family','Sans-serif');

  }


//   @HostBinding("style.backgroundColor")bgcolor;
// @HostListener('mouseenter') mouseEnter(){
//   this.changeColor("orange");
//   this,this.bgcolor="pink"
// }
// changeColor(color){
//   this.el.nativeElement.style.color=color;
// }
// @HostListener('mouseleave') mouseLeave(){
//   this.changeLeaveColor("green")
// }
// changeLeaveColor(color){
//   this.el.nativeElement.style.color=color;
// }

}
