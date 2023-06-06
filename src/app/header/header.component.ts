import { Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  menuType: string = 'default';
  
  @ViewChild('defaultMenu') defaultMenu!: ElementRef;
  @ViewChild('sellerMenu') sellerMenu!: ElementRef;
   @ViewChild('userMenu') userMenu!: ElementRef;

   toggleMenu() {

    this.isMenuOpen = !this.isMenuOpen;

    // add or remove the 'open' class based on the current menu type
    if (this.isMenuOpen) {
      switch (this.menuType) {
        case 'default':

          this.defaultMenu?.nativeElement.classList.add('open');
          break;
        case 'seller':

          this.sellerMenu?.nativeElement.classList.add('open');
          break;
        case 'user':

          this.userMenu?.nativeElement.classList.add('open');
          break;
      }
    } else {
      switch (this.menuType) {
        case 'default':

          this.defaultMenu?.nativeElement.classList.remove('open');
          break;
        case 'seller':

          this.sellerMenu?.nativeElement.classList.remove('open');
          break;
        case 'user':

          this.userMenu?.nativeElement.classList.remove('open');
          break;
      }
    }
  }


}
