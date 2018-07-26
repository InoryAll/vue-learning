/**
 * 基于ajax的封装类
 */
import $ from 'jquery';

class ajaxRequest {
  static createAjaxRequest(options) {
    return function (payload, successCallback, errorCallBack) {
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

module.exports = ajaxRequest;
