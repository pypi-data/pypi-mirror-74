/*
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  angular
    .module('horizon.dashboard.project.nlbaasv2')
    .controller('nLBaaSMonitorDetailsController', MonitorDetailsController);

  MonitorDetailsController.$inject = [
    'horizon.dashboard.project.nlbaasv2.patterns',
    'horizon.framework.util.i18n.gettext'
  ];

  /**
   * @ngdoc controller
   * @name MonitorDetailsController
   * @description
   * The `MonitorDetailsController` controller provides functions for
   * configuring the health monitor step of the LBaaS wizard.
   * @param patterns The LBaaS v2 patterns constant.
   * @param gettext The horizon gettext function for translation.
   * @returns undefined
   */

  function MonitorDetailsController(patterns, gettext) {

    var ctrl = this;

    // Error text for invalid fields
    /* eslint-disable max-len */
    ctrl.intervalError = gettext('The health check interval must be greater than or equal to the timeout.');
    /* eslint-enable max-len */
    ctrl.retryError = gettext('The max retry count must be a number between 1 and 10.');
    ctrl.timeoutError = gettext('The timeout must be a number greater than or equal to 0.');
    ctrl.statusError = gettext('The expected status code is not valid.');
    ctrl.pathError = gettext('The URL path is not valid.');

    // HTTP status codes validation pattern
    ctrl.statusPattern = patterns.httpStatusCodes;
    ctrl.urlPathPattern = patterns.urlPath;
  }
})();
