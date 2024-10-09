import { DeepReadonly } from 'ts-essentials';
const path = require('path');
const configPath = path.resolve(__dirname, './config.json');
const config = require(configPath);



type ConfigVars = DeepReadonly<typeof config>;
type Environment = keyof typeof config;

export class ConfigReader {
  private static readonly _envVars: ConfigVars = config;

  static getEnvVars(environment: Environment = process.env.env as Environment || 'qa'): Readonly<ConfigVars[Environment]> {
    const env = this._envVars[environment];
    if (!env) {
      throw new Error(`Invalid environment: ${env}`);
    }
    return Object.freeze(env);
  }

  static get LOGIN_URL(): string {
    return ConfigReader.getEnvVars().LOGIN_URL;
  }

  static get HOMEPAGE_URL(): string {
    return ConfigReader.getEnvVars().HOMEPAGE_URL;
  }

  static get USERNAME(): string {
    return ConfigReader.getEnvVars().USERNAME;
  }

  static get PASSWORD(): string {
    return ConfigReader.getEnvVars().PASSWORD;
  }
}
