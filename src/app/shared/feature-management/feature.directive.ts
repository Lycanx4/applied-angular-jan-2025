import {
  Directive,
  inject,
  input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureService } from './feature-service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[feature]',
  standalone: true,
})
export class FeatureDirective implements OnInit, OnDestroy {
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);
  private featureService = inject(FeatureService);
  private subscription?: Subscription;

  public feature = input.required<string>();

  ngOnInit(): void {
    this.subscription = this.featureService
      .getEnabledFeatures()
      .subscribe((features) => {
        this.updateView(features.includes(this.feature()));
      });
  }
  private updateView(shouldCreate: boolean): void {
    if (shouldCreate) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
