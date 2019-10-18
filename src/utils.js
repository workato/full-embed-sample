import {config} from "@/config";

export function getFullWorkatoUrl(path) {
  return `${config.workatoOrigin}${path}`;
}

export function convertToWorkatoUrl(internalUrl) {
  return internalUrl.slice(config.workatoRoutesPrefix.length) || '/';
}

export function getInternalUrl(workatoUrl) {
  const workatoPart = workatoUrl === '/' ? '' : workatoUrl;
  return `${config.workatoRoutesPrefix}${workatoPart}`;
}
