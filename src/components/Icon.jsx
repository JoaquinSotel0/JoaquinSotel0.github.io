const paths = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  diagonal: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  down: (
    <>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </>
  ),
  up: (
    <>
      <path d="M12 20V4M6 10l6-6 6 6" />
    </>
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="5" r="3" />
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M6 8v8m0-4c7 0 12 0 12-3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  terminal: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="3" />
      <path d="m6 8 4 4-4 4m7 0h5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M6 18 18 6" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-2-1-2 4-.5 7-2 7-6 0-2-1-3-2-4 0-1 0-3-.5-4-2 0-3 1-4 1a15 15 0 0 0-5 0C8 2 7 1 5 1c-.5 1-.5 3-.5 4C3 6 3 8 3 10c0 4 3 5.5 7 6-.7.5-1 1-1 2v4" />
    </>
  ),
};

export default function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.code}
    </svg>
  );
}
