interface Feature {
  title: string;
  description: string;
}

export interface FeatureListSectionProps {
  _type: 'featureListSection'
  features: Feature[];
}