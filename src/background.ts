import { collectUrls, pickRandom, type BNode } from "./lib/bookmarks";

async function allBookmarks(): Promise<BNode[]> {
  const tree = await chrome.bookmarks.getTree();
  return tree as unknown as BNode[];
}

async function openRandom() {
  const tree = await allBookmarks();
  const urls = collectUrls(tree);
  if (!urls.length) return;
  const pick = pickRandom(urls);
  await chrome.tabs.create({ url: pick, active: true });
}

chrome.runtime.onStartup.addListener(openRandom);
chrome.runtime.onInstalled.addListener(openRandom);
