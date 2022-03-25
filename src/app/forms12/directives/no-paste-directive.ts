import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[noPasteInput]'
})
export class BlockPasteDirective {

  constructor() { }

  /**
   * It will not allow copy paste
   *
   *  @example
   *  <input noPasteInput matInput placeholder="search">
   */

  @HostListener("paste", ["$event"]) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

}
