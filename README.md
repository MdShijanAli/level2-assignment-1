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

Answer:

The `keyof` keyword creates a union type of all the property names (keys) of an object type. It's super handy when you want to ensure you're only accessing properties that actually exist on an object.

**Example:**
```typescript
type User = {
  name: string;
  age: number;
  email: string;
};

// keyof User = "name" | "age" | "email"
type UserKeys = keyof User;

// Practical use - making sure we only access valid properties
function getProperty(user: User, key: keyof User) {
  return user[key];  // TypeScript knows this is safe
}

const user = { name: "John", age: 25, email: "john@example.com" };
console.log(getProperty(user, "name"));  // ✅ Works
// console.log(getProperty(user, "address"));  // ❌ Error: "address" doesn't exist
```

This prevents typos and ensures type safety when working with object properties dynamically.





3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

Answer:

These three types can be confusing at first, but they serve very different purposes:

**`any`** - The "I don't care" type. It basically turns off TypeScript's type checking. You can do anything with it, but you lose all type safety. I try to avoid this unless I'm dealing with legacy code or truly don't know what the type will be.

```typescript
let data: any = "hello";
data = 42;  // No problem
data.someMethod();  // TypeScript won't complain, but might crash at runtime
```

**`unknown`** - The safer version of `any`. It's like saying "I don't know what this is yet, but I'll check before using it." You have to narrow down the type before you can do anything with it.

```typescript
let value: unknown = getData();
// value.toUpperCase();  // ❌ Error - must check type first

if (typeof value === "string") {
  value.toUpperCase();  // ✅ Now it's safe
}
```

**`never`** - Represents values that never occur. It's used for functions that never return (like ones that throw errors or have infinite loops) or in exhaustive type checking.

```typescript
function throwError(message: string): never {
  throw new Error(message);
  // Never reaches the end
}

function infiniteLoop(): never {
  while (true) {}
}
```
4. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.

Answer:

Enums are really useful when you have a set of related constants that you want to group together. They make your code more readable and prevent typos since you get autocomplete for the values.

**Numeric Enum:**
By default, numeric enums start at 0 and auto-increment. You can also set custom values.

```typescript
enum OrderStatus {
  Pending,      // 0
  Processing,   // 1
  Shipped,      // 2
  Delivered     // 3
}

let currentStatus: OrderStatus = OrderStatus.Processing;
console.log(currentStatus);  // 1
```

**String Enum:**
With string enums, you explicitly set string values for each member. These are more readable in logs and debugging.

```typescript
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

function checkPermission(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access granted");
  }
}

checkPermission(UserRole.Admin);
```

I prefer string enums because they're easier to debug - when you see "ADMIN" in your logs, it's immediately clear what it means, versus seeing just a number like `0`.
5. Provide an example of using **union** and **intersection** types in TypeScript.

Answer:

**Union Types (`|`)** - "This OR that"
Union types let a value be one of several types. It's like saying "this variable can be either a string or a number."

```typescript
type ID = string | number;

function printId(id: ID) {
  console.log(`Your ID is: ${id}`);
}

printId(101);      // ✅ Works with number
printId("ABC123"); // ✅ Works with string
// printId(true);  // ❌ Error - boolean not allowed

// Real-world example
type Response = 
  | { success: true; data: string }
  | { success: false; error: string };

function handleResponse(response: Response) {
  if (response.success) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}
```

**Intersection Types (`&`)** - "This AND that"
Intersection types combine multiple types into one. The result must have all properties from all types.

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

// Combining both types
type StaffMember = Person & Employee;

const staff: StaffMember = {
  name: "Alice",
  age: 30,
  employeeId: "E123",
  department: "Engineering"
  // Must have ALL properties from both types
};
```

I use unions when something can be different types (like handling different API response formats), and intersections when I need to combine multiple type requirements into one (like adding authentication info to existing types).