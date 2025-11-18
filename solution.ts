// Problem 1:
type FormatValue = string | number | boolean;
function formatValue(value: FormatValue): FormatValue | undefined {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}

// Problem 2:
function getLength(value: string | any[]): number | undefined {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
}

// Problem 3:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// Problem 4:
type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4 && item.rating <= 5);
}

// Problem 5:
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

// Problem 6:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

// Problem 7:
function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  let newArray: (string | number)[] = [];
  let combinedArray = [...arr1, ...arr2];

  for (let i = 0; i < combinedArray.length; i++) {
    if (!newArray.includes(combinedArray[i])) {
      newArray.push(combinedArray[i]);
    }
  }
  return newArray;
}

// Problem 8:
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    if (
      product.discount !== undefined &&
      (product.discount < 0 || product.discount > 100)
    ) {
      throw new Error(
        `Invalid discount for ${product.name}: ${product.discount}. Discount must be between 0 and 100.`
      );
    }

    const productTotal = product.price * product.quantity;
    const discount = product.discount
      ? (productTotal * product.discount) / 100
      : 0;
    return total + (productTotal - discount);
  }, 0);
}
