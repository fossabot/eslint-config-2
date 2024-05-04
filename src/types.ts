import { config as configFactory } from 'typescript-eslint';

export type { ConfigWithExtends } from 'typescript-eslint';

export type PropType<T, K extends keyof T> = T[K];

export type Config = ReturnType<typeof configFactory>[number];

export type Rules = PropType<Config, 'rules'>;
