import "@testing-library/jest-dom/vitest";

// jsdom has no IntersectionObserver, give the reveal hook a harmless stub in tests
type MutableGlobal = { IntersectionObserver: unknown };

if (typeof (globalThis as MutableGlobal).IntersectionObserver === "undefined") {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  (globalThis as MutableGlobal).IntersectionObserver = MockIntersectionObserver;
}
