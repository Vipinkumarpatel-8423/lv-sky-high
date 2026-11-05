
import type { MetadataRoute } from "next";

const SITE_URL = "https://lvskyhigh.com";

const staticRoutes = [
  "",
  "/india-tours",
  "/international",
  "/honeymoon",
  "/about",
  "/contact",
  "/destinations",
];

const destinationRoutes = [
  "/destinations/united-kingdom",
  "/destinations/singapore",
  "/destinations/maldives",
  "/destinations/thailand",
  "/destinations/kerala",
  "/destinations/dubai",
  "/destinations/bali",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...destinationRoutes];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : staticRoutes.includes(route)
          ? 0.8
          : 0.7,
  }));
}
