import { tableDisplayFormats } from "./constants";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | JsonObject;
export type JsonObject = { [key: string]: JsonValue };

export type TableDisplayForma = (typeof tableDisplayFormats)[number];

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone?: string;
  demandCreateTenant?: string;
  telegram?: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  avatar: string | null;
  tenantId?: number;
  tenant: {
    id: number;
    name: string;
    key: string;
  };
};

export type ManyResponse<T> = {
  results: T[];
  totalResult: number;
};

export type FindManyParams = {
  pagination?: {
    page: number;
    perPage: number;
  };
  where?: Record<string, unknown>;
  orderBy?: Record<string, "desc" | "asc"> | string;
  include?: Record<string, unknown>;
  select?: Record<string, unknown> | string[];
};

export type FindByIdParams = {
  include?: Record<string, unknown>;
  select?: Record<string, unknown>;
};

export type HistoryType = {
  serial: string;
  date: Date;
  createdAt: Date;
  [key: string]: string | number | Date | boolean;
};

export type Mapping = {
  telemetryName: string;
  displayName?: string;
  displayFormat?: TableDisplayForma;
};

export type TableWidgetData = {
  serial?: string;
  showTimeStamp?: boolean;
  mappings?: Mapping[];
};

export type Widget = {
  attributes?: JsonObject;
};

export type ChartTelemetry = {
  serial: string;
  name: string;
  label?: string;
  unit?: string;
  color?: string;
  area?: boolean;
};


export type ChartsWidgetData = {
  serial: string;
  name: string;
  label?: string;
  unit?: string;
  color?: string;
  area?: boolean;
  type: "line" | "bar";
}

export type LastTelemetry = {
  id: string;
  deviceId: number;
  name: string;
  value: string | number | boolean | JsonObject;
  createdAt: Date;
};

export type TDateRange = {
  from: Date;
  to?: Date;
}  | undefined;
