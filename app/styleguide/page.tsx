import React from 'react';
import { ColorShowcase } from '@/components/ui/color-showcase';

export const metadata = {
  title: 'Style Guide | Markov International',
  description: 'Design system and style guide for the Markov International website',
  robots: 'noindex, nofollow',
};

export default function StyleGuidePage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Markov International Style Guide</h1>
          <p className="text-lg text-muted-foreground">
            This guide demonstrates the standardized UI components and design patterns
            used throughout the Markov International website.
          </p>
        </div>

        <section id="colors">
          <h2 className="text-2xl font-bold mb-6 text-gradient">Colors</h2>
          <ColorShowcase />
        </section>

        <section id="typography" className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-gradient">Typography</h2>
          <div className="space-y-8 p-6 bg-card rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-semibold mb-3">Headings</h3>
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                  <p className="text-sm text-muted-foreground mt-1">text-4xl font-bold</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Heading 2</h2>
                  <p className="text-sm text-muted-foreground mt-1">text-3xl font-bold</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Heading 3</h3>
                  <p className="text-sm text-muted-foreground mt-1">text-2xl font-semibold</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Heading 4</h4>
                  <p className="text-sm text-muted-foreground mt-1">text-xl font-semibold</p>
                </div>
                <div>
                  <h5 className="text-lg font-medium">Heading 5</h5>
                  <p className="text-sm text-muted-foreground mt-1">text-lg font-medium</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Body Text</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg">Large Paragraph</p>
                  <p className="text-sm text-muted-foreground mt-1">text-lg</p>
                </div>
                <div>
                  <p>Regular Paragraph</p>
                  <p className="text-sm text-muted-foreground mt-1">Default text size</p>
                </div>
                <div>
                  <p className="text-sm">Small Text</p>
                  <p className="text-sm text-muted-foreground mt-1">text-sm</p>
                </div>
                <div>
                  <p className="text-xs">Extra Small Text</p>
                  <p className="text-sm text-muted-foreground mt-1">text-xs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Special Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gradient text-2xl font-bold">Gradient Text</p>
                  <p className="text-sm text-muted-foreground mt-1">text-gradient</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Muted Text</p>
                  <p className="text-sm text-muted-foreground mt-1">text-muted-foreground</p>
                </div>
                <div>
                  <p className="font-bold">Bold Text</p>
                  <p className="text-sm text-muted-foreground mt-1">font-bold</p>
                </div>
                <div>
                  <p className="italic">Italic Text</p>
                  <p className="text-sm text-muted-foreground mt-1">italic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="buttons" className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-gradient">Buttons</h2>
          <div className="space-y-8 p-6 bg-card rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-primary text-primary-foreground hover-state-primary rounded-md px-4 py-2 focus-visible-state">
                  Primary Button
                </button>
                <button className="bg-secondary text-secondary-foreground hover-state-secondary rounded-md px-4 py-2 focus-visible-state">
                  Secondary Button
                </button>
                <button className="bg-accent text-accent-foreground hover-state-accent rounded-md px-4 py-2 focus-visible-state">
                  Accent Button
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Gradient Buttons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-gradient-brand text-white rounded-md px-4 py-2 focus-visible-state transition-opacity hover:opacity-90">
                  Brand Gradient
                </button>
                <button className="bg-gradient-brand-dark text-white rounded-md px-4 py-2 focus-visible-state transition-opacity hover:opacity-90">
                  Dark Gradient
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-primary text-primary-foreground hover-state-primary rounded-md px-6 py-3 text-lg focus-visible-state">
                  Large
                </button>
                <button className="bg-primary text-primary-foreground hover-state-primary rounded-md px-4 py-2 focus-visible-state">
                  Medium
                </button>
                <button className="bg-primary text-primary-foreground hover-state-primary rounded-md px-3 py-1 text-sm focus-visible-state">
                  Small
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 