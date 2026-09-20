import { socials } from "@/data/site";

const icons = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  Facebook: (
    <path
      d="M14.5 8.5H16V6h-2c-1.7 0-3 1.3-3 3v1.5H9V13h2v6h2.5v-6H15l.5-2.5h-2V9c0-.3.2-.5.5-.5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  TikTok: (
    <path
      d="M14 4c.3 1.8 1.4 3.1 3 3.4v2.3c-1.1 0-2.1-.3-3-.8v4.9a4.7 4.7 0 11-4.7-4.7c.2 0 .5 0 .7.05v2.4a2.3 2.3 0 101.6 2.2V4H14z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export default function Socials({ className = "", size = 22 }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chapter 1 on ${s.label}`}
          className="text-muted transition-colors hover:text-olive-deep"
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            {icons[s.label]}
          </svg>
        </a>
      ))}
    </div>
  );
}
