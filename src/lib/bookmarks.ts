export type BNode = { title?: string; url?: string; children?: BNode[] };

export function collectUrls(nodes: BNode[]): string[] {
  const out: string[] = [];
  const walk = (n: BNode) => {
    if (n.url && /^https?:\/\//i.test(n.url)) out.push(n.url);
    (n.children || []).forEach(walk);
  };
  nodes.forEach(walk);
  return Array.from(new Set(out));
}

export function pickRandom<T>(arr: T[], rng = Math): T {
  if (!arr.length) throw new Error("No items");
  return arr[Math.floor(rng.random() * arr.length)];
}
