import { inject } from '@angular/core';
import { FeatureService } from './feature-service';
import { CanMatchFn } from '@angular/router';
import { map } from 'rxjs';

export const canMatchFeature =
  (feature: string): CanMatchFn =>
  () => {
    const featureService = inject(FeatureService);
    return featureService
      .getEnabledFeatures()
      .pipe(map((r) => r.includes(feature)));
  };
