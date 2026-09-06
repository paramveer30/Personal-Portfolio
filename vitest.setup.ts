import "@testing-library/jest-dom/vitest";

// jsdom is missing a couple of browser apis the components touch, stub them for tests
type MutableGlobal = {
  IntersectionObserver: unknown;
  matchMedia: unknown;
};

const g = globalThis as MutableGlobal;

if (typeof g.IntersectionObserver === "undefined") {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  g.IntersectionObserver = MockIntersectionObserver;
}

if (typeof g.matchMedia === "undefined") {
  // report reduced motion so animated components render their static state
  g.matchMedia = (query: string) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    },
  });
}
