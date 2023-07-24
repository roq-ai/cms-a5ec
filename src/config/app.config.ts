interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Super Admin'],
  customerRoles: [],
  tenantRoles: ['Content Manager', 'Super Admin'],
  tenantName: 'Tenant',
  applicationName: 'CMS',
  addOns: ['file', 'notifications', 'chat'],
};
