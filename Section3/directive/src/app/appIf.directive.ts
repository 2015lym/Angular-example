import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appIf]' })
export class AppIfDirective {

  private showView: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appIf(condition: boolean) {
    if (!condition && !this.showView) {
      this.viewContainer.clear();
      this.showView = false;
    } else if (condition && this.showView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.showView = true;
    }
  }
}
