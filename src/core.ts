import { config as configFactory } from 'typescript-eslint';

import type {
  Config,
  ConfigWithExtends,
} from './types';

export const withConfigs = (...userConfigs: ConfigWithExtends[]): Config[] => {
  // TypeError: Cannot destructure property 'extends' of 'configWithExtends' as it is undefined.
  return configFactory(...userConfigs.map(c => ({
    extends: [],
    ...c,
  })));
};
