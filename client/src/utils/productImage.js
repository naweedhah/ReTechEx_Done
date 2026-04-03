const API_BASE =
  import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:3000';

const CATEGORY_THEME = {
  laptops: {
    bgStart: '#1d4ed8',
    bgEnd: '#0f766e',
    label: 'Laptop',
  },
  smartphones: {
    bgStart: '#7c3aed',
    bgEnd: '#2563eb',
    label: 'Phone',
  },
  wearables: {
    bgStart: '#db2777',
    bgEnd: '#7c3aed',
    label: 'Wearable',
  },
  tablets: {
    bgStart: '#0891b2',
    bgEnd: '#2563eb',
    label: 'Tablet',
  },
  accessories: {
    bgStart: '#ea580c',
    bgEnd: '#ca8a04',
    label: 'Accessory',
  },
  default: {
    bgStart: '#334155',
    bgEnd: '#0f766e',
    label: 'Refurbished Tech',
  },
};

function buildFallbackSvg(product = {}) {
  const theme = CATEGORY_THEME[product.category] || CATEGORY_THEME.default;
  const title = String(product.name || theme.label).slice(0, 32);
  const subtitle = `${product.brand || 'ReTechExchange'} • ${theme.label}`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.bgStart}" />
          <stop offset="100%" stop-color="${theme.bgEnd}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" rx="40" />
      <circle cx="1000" cy="160" r="140" fill="rgba(255,255,255,0.10)" />
      <circle cx="180" cy="760" r="200" fill="rgba(255,255,255,0.08)" />
      <rect x="90" y="90" width="1020" height="720" rx="36" fill="rgba(15,23,42,0.18)" stroke="rgba(255,255,255,0.18)" />
      <rect x="110" y="140" width="240" height="68" rx="18" fill="rgba(255,255,255,0.16)" />
      <text x="135" y="185" fill="#ffffff" font-size="34" font-family="Arial, sans-serif" font-weight="700">${escapeXml(theme.label.toUpperCase())}</text>
      <text x="110" y="360" fill="#ffffff" font-size="72" font-family="Arial, sans-serif" font-weight="700">${escapeXml(title)}</text>
      <text x="110" y="430" fill="rgba(255,255,255,0.86)" font-size="34" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="110" y="710" fill="rgba(255,255,255,0.92)" font-size="30" font-family="Arial, sans-serif">Certified reused electronics</text>
      <text x="110" y="760" fill="rgba(255,255,255,0.70)" font-size="28" font-family="Arial, sans-serif">Circular marketplace preview</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function getProductImageSrc(product = {}) {
  const imagePath = product.images?.[0] || product.imageUrl || '';

  if (imagePath) {
    return imagePath.startsWith('http')
      ? imagePath
      : `${API_BASE}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
  }

  return buildFallbackSvg(product);
}
