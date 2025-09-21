export const withBase = (p: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const left = base.endsWith("/") ? base.slice(0, -1) : base;
  const right = p.startsWith("/") ? p.slice(1) : p;
  return `${left}/${right}`;
};
