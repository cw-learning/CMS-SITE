# Components Directory

This directory follows the **Atomic Design** methodology to create a scalable, maintainable component architecture.

## Structure

### 📦 Atoms (`/atoms`)
The smallest building blocks of the UI. These are basic, reusable components that cannot be broken down further.

- **Button**: Action buttons with multiple variants (primary, secondary, outline) and sizes
- **Heading**: Typography component for headings (h1-h6) with customizable styles
- **Text**: Text component for body text, subheadings, descriptions, and captions
- **Container**: Layout component for consistent max-width and centering
- **ResponsiveImage**: Wrapper around Next.js Image with responsive behavior

**Usage Example:**
```tsx
import { Button, Heading, Text } from '@/components/atoms'

<Button variant="primary" size="large" onClick={handleClick}>
  Click Me
</Button>
<Heading level="h2">Welcome</Heading>
<Text variant="body">This is body text</Text>
```

### 🧬 Molecules (`/molecules`)
Combinations of atoms that form more complex, functional components.

- **HeroSection**: Hero banner with heading, subheading, and background image
- **FeatureCard**: Individual feature card with title and description
- **FeatureListSection**: Grid of feature cards
- **TextImageSection**: Content section with text and image (left/right alignment)

**Usage Example:**
```tsx
import { HeroSection, FeatureListSection } from '@/components/molecules'

<HeroSection 
  heading="Welcome"
  subheading="Start building"
  backgroundImage={image}
/>
```

### 🦠 Organisms (`/organisms`)
Complex components composed of molecules and/or atoms. These represent distinct sections of the UI.

- **PageRenderer**: Dynamic component that renders different section types based on CMS data

**Usage Example:**
```tsx
import { PageRenderer } from '@/components/organisms'

<PageRenderer sections={pageSections} />
```

## Benefits

✅ **Reusability**: Components are built once and used everywhere  
✅ **Consistency**: Shared components ensure design consistency  
✅ **Maintainability**: Changes in one place affect all instances  
✅ **Scalability**: Easy to add new components following the same pattern  
✅ **Testability**: Isolated components are easier to test  
✅ **Developer Experience**: Clear hierarchy makes it easy to find and use components

## Best Practices

1. **Import from the appropriate level**: Import atoms directly, molecules use atoms, organisms use molecules
2. **Keep components pure**: Avoid side effects where possible
3. **Type everything**: All components have corresponding `.types.ts` files
4. **One responsibility**: Each component should do one thing well
5. **Composition over inheritance**: Build complex UIs by composing simple components

## Adding New Components

### Adding an Atom:
1. Create folder: `/atoms/ComponentName/`
2. Add files: `ComponentName.tsx`, `ComponentName.types.ts`, `index.ts`
3. Export from `/atoms/index.ts`

### Adding a Molecule:
1. Create folder: `/molecules/ComponentName/`
2. Import needed atoms
3. Add files: `ComponentName.tsx`, `ComponentName.types.ts`, `index.ts`
4. Export from `/molecules/index.ts`

### Adding an Organism:
1. Create folder: `/organisms/ComponentName/`
2. Import needed molecules/atoms
3. Add files: `ComponentName.tsx`, `ComponentName.types.ts`, `index.ts`
4. Export from `/organisms/index.ts`