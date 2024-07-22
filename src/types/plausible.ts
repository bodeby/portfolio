export interface PlausibleStats {
  results: Results;
}

export interface Results {
  bounce_rate: BounceRate;
  pageviews: Pageviews;
  visit_duration: VisitDuration;
  visitors: Visitors;
}

export interface BounceRate {
  value: number;
}

export interface Pageviews {
  value: number;
}

export interface VisitDuration {
  value: number;
}

export interface Visitors {
  value: number;
}
