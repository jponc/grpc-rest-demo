type Config = {
  port: string;
};

export const getConfig = (): Config => {
  return {
    port: getEnv("PORT"),
  };
};

const getEnv = (key: string): string => {
  if (process.env[key] === undefined) {
    throw new Error(`Env ${key} not found`);
  }

  return process.env[key] as string;
};
