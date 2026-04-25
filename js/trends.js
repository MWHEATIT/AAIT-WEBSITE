/* trends.js — dynamic RSS feed loader for trends.html */
(function () {
  'use strict';

  const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

  const FEEDS = [
    {
      name: 'Krebs on Security',
      url: 'https://krebsonsecurity.com/feed/',
      label: 'Cybersecurity',
      labelClass: 'cat-security',
    },
    {
      name: 'The Hacker News',
      url: 'https://feeds.feedburner.com/TheHackersNews',
      label: 'Security News',
      labelClass: 'cat-security',
    },
    {
      name: 'TechRepublic',
      url: 'https://www.techrepublic.com/rssfeeds/articles/',
      label: 'Tech Industry',
      labelClass: 'cat-cloud',
    },
  ];

  const PROXY = 'https://api.rss2json.com/v1/api.json';
  const ITEMS_PER_FEED = 3;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function stripHtml(str) {
    return String(str).replace(/<[^>]*>/g, '');
  }

  function formatDate(dateStr) {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (_) {
      return '';
    }
  }

  function isoDate(dateStr) {
    try {
      return new Date(dateStr).toISOString().split('T')[0];
    } catch (_) {
      return '';
    }
  }

  function readCache(key) {
    try {
      const raw = sessionStorage.getItem(key);
      if (!raw) return null;
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts > CACHE_TTL) {
        sessionStorage.removeItem(key);
        return null;
      }
      return data;
    } catch (_) {
      return null;
    }
  }

  function writeCache(key, data) {
    try {
      sessionStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
    } catch (_) {}
  }

  async function fetchFeed(feed) {
    const cacheKey = 'rss_' + encodeURIComponent(feed.url);
    const cached = readCache(cacheKey);
    if (cached) return { feed, items: cached };

    const apiUrl =
      PROXY +
      '?rss_url=' +
      encodeURIComponent(feed.url) +
      '&count=' +
      ITEMS_PER_FEED;

    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const json = await res.json();
    if (json.status !== 'ok') throw new Error('Feed error: ' + json.message);

    const items = json.items || [];
    writeCache(cacheKey, items);
    return { feed, items };
  }

  function renderSkeletons(container, count) {
    let html = '';
    for (let i = 0; i < count; i++) {
      html += `
        <div class="skeleton-card" aria-hidden="true">
          <div class="skeleton-img"></div>
          <div class="skeleton-line med"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>`;
    }
    container.innerHTML = html;
  }

  function renderArticleCard(item, feed) {
    const title = escapeHtml(item.title || 'Untitled');
    const excerpt = escapeHtml(stripHtml(item.description || item.content || '').slice(0, 160));
    const href = escapeHtml(item.link || '#');
    const dateDisplay = formatDate(item.pubDate);
    const dateIso = isoDate(item.pubDate);
    const label = escapeHtml(feed.label);
    const labelClass = escapeHtml(feed.labelClass);
    const source = escapeHtml(feed.name);

    return `
      <article class="article-card">
        <div class="article-img-placeholder" aria-hidden="true">
          <div class="article-img-tag">${escapeHtml(feed.label)}</div>
        </div>
        <div class="article-body">
          <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.5rem;">
            <span class="rss-badge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="19" r="3"/><path d="M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9"/></svg>
              ${source}
            </span>
            <span class="article-cat ${labelClass}">${label}</span>
          </div>
          <div class="article-meta">
            ${dateIso ? `<time datetime="${dateIso}">${dateDisplay}</time>` : ''}
          </div>
          <h3>${title}</h3>
          ${excerpt ? `<p class="article-excerpt">${excerpt}…</p>` : ''}
          <a href="${href}" class="link-cta" target="_blank" rel="noopener noreferrer"
             aria-label="Read full article: ${title}">
            Read More
            <svg class="arrow-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </article>`;
  }

  function renderError(container) {
    container.innerHTML = `
      <div class="rss-error">
        <h3>Industry news temporarily unavailable</h3>
        <p>Read the latest directly from our trusted sources:</p>
        <ul>
          <li><a href="https://krebsonsecurity.com" target="_blank" rel="noopener noreferrer">Krebs on Security</a></li>
          <li><a href="https://thehackernews.com" target="_blank" rel="noopener noreferrer">The Hacker News</a></li>
          <li><a href="https://www.techrepublic.com" target="_blank" rel="noopener noreferrer">TechRepublic</a></li>
        </ul>
      </div>`;
  }

  async function loadFeeds() {
    const container = document.getElementById('rssArticleGrid');
    if (!container) return;

    renderSkeletons(container, ITEMS_PER_FEED * FEEDS.length);

    const results = await Promise.allSettled(FEEDS.map(fetchFeed));

    const cards = [];
    for (const result of results) {
      if (result.status !== 'fulfilled') continue;
      const { feed, items } = result.value;
      for (const item of items) {
        cards.push(renderArticleCard(item, feed));
      }
    }

    if (cards.length === 0) {
      renderError(container);
      return;
    }

    container.innerHTML = cards.join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFeeds);
  } else {
    loadFeeds();
  }
})();
