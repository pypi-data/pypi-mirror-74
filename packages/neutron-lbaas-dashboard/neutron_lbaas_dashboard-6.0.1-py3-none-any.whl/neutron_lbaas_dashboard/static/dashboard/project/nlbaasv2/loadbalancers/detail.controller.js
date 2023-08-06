/*
 * Copyright 2015 IBM Corp.
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
(function() {
  'use strict';

  angular
    .module('horizon.dashboard.project.nlbaasv2.loadbalancers')
    .controller('nLBaaSLoadBalancerDetailController', LoadBalancerDetailController);

  LoadBalancerDetailController.$inject = [
    'horizon.app.core.openstack-service-api.nlbaasv2',
    'horizon.dashboard.project.nlbaasv2.loadbalancers.actions.rowActions',
    'horizon.dashboard.project.nlbaasv2.loadbalancers.service',
    '$routeParams',
    '$window',
    '$scope'
  ];

  /**
   * @ngdoc controller
   * @name LoadBalancerDetailController
   *
   * @description
   * Controller for the LBaaS v2 load balancers detail page.
   *
   * @param api The LBaaS v2 API service.
   * @param rowActions The load balancer row actions service.
   * @param loadBalancersService The LBaaS v2 load balancers service.
   * @param $routeParams The angular $routeParams service.
   * @param $window Angular's reference to the browser window object.
   * @param $scope The angular scope object.
   * @returns undefined
   */

  function LoadBalancerDetailController(
    api, rowActions, loadBalancersService, $routeParams, $window, $scope
  ) {
    var ctrl = this;

    ctrl.loading = true;
    ctrl.error = false;
    ctrl.actions = rowActions.actions;
    ctrl.operatingStatus = loadBalancersService.operatingStatus;
    ctrl.provisioningStatus = loadBalancersService.provisioningStatus;
    ctrl.listenersTabActive = $window.listenersTabActive;

    init();

    ////////////////////////////////

    function init() {
      ctrl.loadbalancer = null;
      ctrl.loading = true;
      ctrl.error = false;
      api.getLoadBalancer($routeParams.loadbalancerId, true).then(success, fail);
    }

    function success(response) {
      ctrl.loadbalancer = response.data;
      ctrl.loading = false;
    }

    function fail(/*response*/) {
      ctrl.loadbalancer = null;
      ctrl.loading = false;
      ctrl.error = true;
    }

    // Save the active state of the listeners tab in the global window object so it can stay
    // active after reloading the route following an action.
    $scope.$watch(function() {
      return ctrl.listenersTabActive;
    }, function(active) {
      $window.listenersTabActive = active;
    });

  }

})();
