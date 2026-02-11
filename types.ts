// Added React import to provide the React namespace required for React.ReactNode
import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}