import { FeatureListSectionProps } from "./sections/FeatureListSection.type";
import { HeroSectionProps } from "./sections/HeroSection.type";
import { TextImageSectionProps } from "./sections/TextImageSection.type";

export type SectionProps =  HeroSectionProps | TextImageSectionProps | FeatureListSectionProps;

export interface PageRendererProps {
  sections?: SectionProps[];
} 