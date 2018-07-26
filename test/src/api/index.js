/**
 * 主要接口
 */
import { ajaxRequest } from '../util/ajaxRequest';

export const getDataListApi = ajaxRequest.createAjaxRequest({
  utl: '../data/dataList.json',
  method: 'get',
});

export const getConfigApi = ajaxRequest.createAjaxRequest({
  utl: '../data/dataList.json',
  method: 'get',
});
