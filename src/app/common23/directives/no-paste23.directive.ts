import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[noPasteInput]'
})
export class NoPaste23Directive {

  constructor() { }

  /**
   * It will not allow copy paste
   *
   *  @example
   *  <input noPasteInput matInput placeholder="search">
   */

  @HostListener("paste", ["$event"]) 
  blockPaste(e: KeyboardEvent) {
    console.log('blockPaste executed');
    e.preventDefault();
  }

}