import { describe, expect, test } from "vitest";
import { collectUrls, pickRandom } from "../src/lib/bookmarks";

const sample: any[] = [
  { children: [
      { url: "https://www.python.org" },
      { url: "javascript:alert('hi')" },
      { children: [
          { url: "https://www.bbc.com" },
          { url: "https://www.bbc.com" }
      ]}
  ]}
];

describe("collectUrls", () => {
  test("filters non-http and dedupes", () => {
    const urls = collectUrls(sample);
    expect(urls.sort()).toEqual(["https://www.bbc.com","https://www.python.org"].sort());
  });
});

describe("pickRandom", () => {
  test("throws on empty", () => {
    expect(() => pickRandom([])).toThrow();
  });
  test("deterministic with injected RNG", () => {
    const fixed = { random: () => 0 }; // always index 0
    const result = pickRandom([1,2,3], fixed as any);
    expect(result).toBe(1);
  });
});
