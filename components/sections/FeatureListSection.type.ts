interface Feature {
  _key: string;
  title: string;
  description: string;
}

export interface FeatureListSectionProps {
  _key: string
  _type: 'featureListSection'
  features: Feature[];
}