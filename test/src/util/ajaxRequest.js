/**
 * 基于ajax的封装类
 */
/* eslint-disable */
import $ from 'jquery';

class ajaxRequest {
  static createAjaxRequest(options) {
    return (payload, successCallback, errorCallBack) => {
      $.ajax({
        url: options.url,
        type: options.method,
        contentType: 'application/x-www-form-urlencoded',
        data: payload,
        success(data) {
          successCallback && successCallback(data);
        },
        error(err) {
          errorCallBack && errorCallBack(err);
        },
      });
    };
  }
}

export default ajaxRequest;
