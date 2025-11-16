## 🎯 Interview Questions - Blog Task

1. What are some differences between interfaces and types in TypeScript?

Answer:

**Interfaces:**
- Can be extended using `extends` keyword
- Can be merged (declaration merging) - multiple declarations with the same name are automatically merged
- Only describe object shapes
- Better for defining object structures and class contracts
- Syntax: `interface User { name: string; }`

**Types:**
- Can be combined using intersections (`&`) and unions (`|`)
- Cannot be merged - redeclaring a type causes an error
- Can represent primitives, unions, tuples, and more complex types
- More flexible for creating utility types and complex type operations
- Syntax: `type User = { name: string; }`

**Key Difference Example:**
```typescript
// Interface - can be extended and merged
interface Person {
  name: string;
}
interface Person {
  age: number;  // Merged with above
}

// Type - supports unions and intersections
type ID = string | number;
type User = { name: string } & { age: number };
``` 





2. What is the use of the `keyof` keyword in TypeScript? Provide an example.
3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
4. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.
5. Provide an example of using **union** and **intersection** types in TypeScript.