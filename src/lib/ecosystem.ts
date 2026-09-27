import ecosystem from "@/data/ecosystem.json";

export type EcosystemCategory = (typeof ecosystem.categories)[number];
export type EcosystemProduct = (typeof ecosystem.products)[number];
export type UserModule = (typeof ecosystem.userModules)[number];
export type PartnerRole = (typeof ecosystem.partnerRoles)[number];
export type PartnerModule = (typeof ecosystem.partnerModules)[number];
export type InternalModule = (typeof ecosystem.internalModules)[number];

export const categories = ecosystem.categories;
export const products = ecosystem.products;
export const userModules = ecosystem.userModules;
export const partnerRoles = ecosystem.partnerRoles;
export const partnerModules = ecosystem.partnerModules;
export const internalModules = ecosystem.internalModules;
export const journey = ecosystem.journey;

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug) ?? categories[0];
}

export function getCategoryProducts(category: string) {
  return products.filter((product) => product.category === category);
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id) ?? products[0];
}

export function getPartnerRole(slug: string) {
  return partnerRoles.find((role) => role.slug === slug) ?? partnerRoles[0];
}

export function getPartnerModule(slug?: string) {
  return partnerModules.find((module) => module.slug === slug) ?? partnerModules[0];
}

export function getUserModule(slug?: string) {
  return userModules.find((module) => module.slug === slug) ?? userModules[0];
}

export function getInternalModule(slug?: string) {
  return internalModules.find((module) => module.slug === slug) ?? internalModules[0];
}
