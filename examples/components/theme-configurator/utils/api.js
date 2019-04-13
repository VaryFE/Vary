import Var from 'main/index.js';
import { post, get } from './ajax';

const { version } = Var;

const hostList = {
  local: 'http://localhost:3008/',
  alpha: 'https://ssr.alpha.elenet.me/var-theme-server/',
  production: 'https://ssr.elenet.me/var-theme-server/'
};

const host = hostList[process.env.FAAS_ENV] || hostList.production;

export const getVars = () => {
  return get(`${host}getVariable?version=${version}`);
};

export const updateVars = (data, cb) => {
  return post(`${host}updateVariable?version=${version}`, data, cb);
};
