import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  @ViewChild('first', {static: false}) one:ElementRef;
  @ViewChild('second', {static: false}) two:ElementRef;
  @ViewChild('third', {static: false}) three:ElementRef;
  @ViewChild('fourth', {static: false}) four:ElementRef;
  @ViewChild('fifth', {static: false}) five:ElementRef;

  @HostListener('window:scroll', ['$event']) function() {
      console.log(window.pageYOffset);
      let scroller = window.pageYOffset

        if(scroller >= 200 && scroller <= 400){
          console.log(this.one);
          this.rendered.setStyle(this.one.nativeElement,'transition','1s linear');
          this.rendered.setStyle(this.one.nativeElement,'opacity','1');
        }
        if(scroller >= 400 && scroller <= 600){
          console.log(this.one);
          this.rendered.setStyle(this.two.nativeElement,'transition','1s linear');
          this.rendered.setStyle(this.two.nativeElement,'opacity','1');
        }
        if(scroller >= 1000 && scroller <=1200){
          console.log(this.one);
          this.rendered.setStyle(this.three.nativeElement,'transition','1s linear');
          this.rendered.setStyle(this.three.nativeElement,'opacity','1');
        }
        if(scroller >= 1500 && scroller <= 1700){
          console.log(this.one);
          this.rendered.setStyle(this.four.nativeElement,'transition','1s linear');
          this.rendered.setStyle(this.four.nativeElement,'opacity','1');
        }
        if(scroller >= 2000){
          console.log(this.one);
          this.rendered.setStyle(this.five.nativeElement,'transition','1s linear');
          this.rendered.setStyle(this.five.nativeElement,'opacity','1');
        }

  }  

  constructor(private rendered: Renderer2) { }

  ngOnInit() {
  }

}
