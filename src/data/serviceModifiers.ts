/**
 * Service Modifiers Configuration
 * Handles routing for URLs like:
 * - /services/best-digital-presence/peddapuram/andhra-pradesh/india/
 * - /services/digital-presence/peddapuram/andhra-pradesh/india/
 */

export interface ServiceModifier {
  key: string;
  label: string;
  titlePrefix: string;
  description: string;
  searchTerm: string;
}

export const SERVICE_MODIFIERS: Record<string, ServiceModifier> = {
  best: {
    key: "best",
    label: "Best",
    titlePrefix: "Best",
    description: "Premium & Most Recommended",
    searchTerm: "best",
  },
  premium: {
    key: "premium",
    label: "Premium",
    titlePrefix: "Premium",
    description: "High-end & Advanced Solutions",
    searchTerm: "premium",
  },
  affordable: {
    key: "affordable",
    label: "Affordable",
    titlePrefix: "Affordable",
    description: "Budget-friendly & Cost-effective",
    searchTerm: "affordable",
  },
  cheapest: {
    key: "cheapest",
    label: "Cheapest",
    titlePrefix: "Cheapest",
    description: "Most economical option",
    searchTerm: "cheapest",
  },
  expensive: {
    key: "expensive",
    label: "Expensive",
    titlePrefix: "Premium",
    description: "Enterprise & Premium Grade",
    searchTerm: "expensive",
  },
  starter: {
    key: "starter",
    label: "Starter",
    titlePrefix: "Starter",
    description: "Perfect for beginners",
    searchTerm: "starter",
  },
  professional: {
    key: "professional",
    label: "Professional",
    titlePrefix: "Professional",
    description: "Enterprise-grade solutions",
    searchTerm: "professional",
  },
  advanced: {
    key: "advanced",
    label: "Advanced",
    titlePrefix: "Advanced",
    description: "Feature-rich & Comprehensive",
    searchTerm: "advanced",
  },
};

/**
 * Extracts modifier from service slug
 * Example: "best-digital-presence" → { modifier: "best", serviceSlug: "digital-presence" }
 */
export const extractServiceModifier = (slug: string): {
  modifier: ServiceModifier | null;
  serviceSlug: string;
} => {
  const parts = slug.split("-");

  // Check if first part is a modifier
  const firstPart = parts[0].toLowerCase();
  if (SERVICE_MODIFIERS[firstPart]) {
    const modifier = SERVICE_MODIFIERS[firstPart];
    const serviceSlug = parts.slice(1).join("-");
    return { modifier, serviceSlug };
  }

  // No modifier found, return the full slug as service slug
  return { modifier: null, serviceSlug: slug };
};

/**
 * Transforms service title based on modifier
 * Example: "Digital Presence" + "best" → "Best Digital Presence"
 */
export const getModifiedServiceTitle = (
  originalTitle: string,
  modifier: ServiceModifier | null
): string => {
  if (!modifier) return originalTitle;

  // Remove any existing prefix if present
  let title = originalTitle;
  Object.values(SERVICE_MODIFIERS).forEach((mod) => {
    if (title.startsWith(`${mod.titlePrefix} `)) {
      title = title.substring(mod.titlePrefix.length + 1);
    }
  });

  return `${modifier.titlePrefix} ${title}`;
};

/**
 * Transforms service description based on modifier
 */
export const getModifiedServiceDescription = (
  originalDescription: string,
  modifier: ServiceModifier | null,
  cityName?: string
): string => {
  if (!modifier) {
    return originalDescription;
  }

  const modifierInfo = modifier.description;
  if (cityName) {
    return `${modifierInfo}. ${originalDescription} in ${cityName}.`;
  }

  return `${modifierInfo}. ${originalDescription}`;
};

/**
 * Generates canonical URL for a service with optional modifier
 */
export const generateServiceUrl = (
  serviceSlug: string,
  modifier: ServiceModifier | null,
  cityPath: string[]
): string => {
  const slug = modifier
    ? `${modifier.key}-${serviceSlug}`
    : serviceSlug;
  
  return `/services/${slug}/${cityPath.join("/")}`;
};

/**
 * Gets all available modifier variations for a service
 */
export const getServiceVariations = (serviceSlug: string): Array<{
  slug: string;
  modifier: ServiceModifier;
  label: string;
}> => {
  return Object.values(SERVICE_MODIFIERS).map((modifier) => ({
    slug: `${modifier.key}-${serviceSlug}`,
    modifier,
    label: modifier.label,
  }));
};

/**
 * Validates if a modifier exists
 */
export const isValidModifier = (key: string): boolean => {
  return key.toLowerCase() in SERVICE_MODIFIERS;
};

/**
 * Gets modifier by key
 */
export const getModifierByKey = (key: string): ServiceModifier | null => {
  return SERVICE_MODIFIERS[key.toLowerCase()] || null;
};
