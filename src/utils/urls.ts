import { loginUrl } from "../../discovery.config";

export const getLoginUrl = (returnUrl: string) => {
  const returnParam = encodeURIComponent(`${returnUrl}`);

  return `${loginUrl}?returnUrl=${returnParam}`;
};
