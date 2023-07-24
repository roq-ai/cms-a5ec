import { TenantInterface } from 'interfaces/tenant';
import { GetQueryInterface } from 'interfaces';

export interface PageInterface {
  id?: string;
  content: string;
  tenant_id?: string;
  created_at?: any;
  updated_at?: any;

  tenant?: TenantInterface;
  _count?: {};
}

export interface PageGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  tenant_id?: string;
}
