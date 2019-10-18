import {config} from "@/config";

export function getProxiedWorkatoUrl(url, jwtToken) {
  return `${config.workatoOrigin}/direct_link?workato_dl_path=${encodeURIComponent(url)}&workato_dl_token=${encodeURIComponent(jwtToken)}`;
}

export function convertToWorkatoUrl(internalUrl) {
  return internalUrl.slice(config.workatoRoutesPrefix.length) || '/';
}

export function getInternalUrl(workatoUrl) {
  const workatoPart = workatoUrl === '/' ? '' : workatoUrl;
  return `${config.workatoRoutesPrefix}${workatoPart}`;
}
