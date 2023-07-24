const mapping: Record<string, string> = {
  pages: 'page',
  tenants: 'tenant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
