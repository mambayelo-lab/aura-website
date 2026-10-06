/** Visualisation sobre du modèle : chaînes de valeur → capacités → applications qui s'assemblent (SVG + CSS, sans librairie). */
export function ModelWeave({ labels }: { labels: { chains: string; caps: string; apps: string } }) {
  const chains = [70, 170, 270];
  const caps = [40, 100, 160, 220, 280];
  const apps = [70, 150, 230];
  const links: [number, number, number][] = [
    [0, 0, 1], [0, 1, 0], [1, 2, 1], [1, 3, 2], [2, 4, 2], [2, 3, 0],
  ];
  return (
    <figure className="ax-weave" aria-hidden>
      <svg viewBox="0 0 420 340" role="presentation">
        <defs>
          <linearGradient id="axw-g" x1="0" x2="1">
            <stop offset="0" stopColor="#a5a8ff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {links.map(([a, c, p], i) => (
          <g key={i} className="axw-link" style={{ animationDelay: `${0.6 + i * 0.25}s` }}>
            <path d={`M100 ${chains[a]} C160 ${chains[a]} 150 ${caps[c]} 200 ${caps[c]}`} />
            <path d={`M250 ${caps[c]} C300 ${caps[c]} 290 ${apps[p]} 330 ${apps[p]}`} />
          </g>
        ))}
        {chains.map((y, i) => (
          <g key={`c${i}`} className="axw-node axw-chain" style={{ animationDelay: `${i * 0.12}s` }}>
            <rect x="10" y={y - 18} width="90" height="36" rx="10" />
          </g>
        ))}
        {caps.map((y, i) => (
          <g key={`k${i}`} className="axw-node axw-cap" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
            <rect x="200" y={y - 16} width="50" height="32" rx="8" />
            {i === 1 && <text x="244" y={y - 6} className="axw-star">✦</text>}
          </g>
        ))}
        {apps.map((y, i) => (
          <g key={`a${i}`} className="axw-node axw-app" style={{ animationDelay: `${0.9 + i * 0.12}s` }}>
            <circle cx="350" cy={y} r="20" />
          </g>
        ))}
        <text x="55" y="325" className="axw-label">{labels.chains}</text>
        <text x="225" y="325" className="axw-label">{labels.caps}</text>
        <text x="350" y="325" className="axw-label">{labels.apps}</text>
      </svg>
    </figure>
  );
}
