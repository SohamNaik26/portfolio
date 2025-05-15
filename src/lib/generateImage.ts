// Function to generate SVG data URL for placeholders
function generateImageDataUrl(
  title: string,
  color: string,
  width = 800,
  height = 600
) {
  const firstLetter = title.charAt(0).toUpperCase();
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='${
    Math.min(width, height) / 2
  }' fill='white'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;
}

// Generate a project image placeholder with a color based on ID
export function generateProjectImageUrl(
  id: string,
  title: string,
  width?: number,
  height?: number
): string {
  const colors = [
    "#3b82f6", // blue-500
    "#10b981", // emerald-500
    "#ef4444", // red-500
    "#0ea5e9", // sky-500
    "#8b5cf6", // violet-500
    "#ec4899", // pink-500
    "#f97316", // orange-500
    "#eab308", // yellow-500
  ];
  // Simple hash function to pick a color based on the ID
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash % colors.length);
  const color = colors[colorIndex];

  return generateImageDataUrl(title, color, width, height);
}

// Generate a blog image placeholder (can be adapted if specific logic is needed)
export function generateBlogImageUrl(
  id: string,
  title: string,
  width?: number,
  height?: number
): string {
  // Using the same logic as projects for now, can be customized
  return generateProjectImageUrl(id, title, width, height);
}
