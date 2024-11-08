import { style } from "@angular/animations";
import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    standalone:true,
    selector: '[setBackground]'
})
export class SetBackground implements OnInit{

    // @Input('setBackground') backColor: String = '#36454F';
    // @Input() textColor: String = 'White';

    @Input('setBackground') changeBackAndTextColor: { backColor: String; textColor: String; }

    constructor(private element: ElementRef, private renderer: Renderer2){}

    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeBackAndTextColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeBackAndTextColor.textColor);
    }
}
