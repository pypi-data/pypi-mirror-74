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
(function() {
  'use strict';

  angular
    .module('horizon.dashboard.project.nlbaasv2.members')
    .controller('nLBaaSMembersTableController', MembersTableController);

  MembersTableController.$inject = [
    'horizon.app.core.openstack-service-api.nlbaasv2',
    'horizon.dashboard.project.nlbaasv2.members.actions.rowActions',
    'horizon.dashboard.project.nlbaasv2.members.actions.batchActions',
    '$routeParams',
    'horizon.dashboard.project.nlbaasv2.loadbalancers.service',
    'horizon.dashboard.project.nlbaasv2.members.service'
  ];

  /**
   * @ngdoc controller
   * @name MembersTableController
   *
   * @description
   * Controller for the LBaaS v2 members table. Serves as the focal point for table actions.
   *
   * @param api The LBaaS V2 service API.
   * @param rowActions The pool members row actions service.
   * @param batchActions The members batch actions service.
   * @param $routeParams The angular $routeParams service.
   * @param loadBalancersService The LBaaS v2 load balancers service.
   * @param membersService The LBaaS v2 members service.
   * @returns undefined
   */

  function MembersTableController(
      api, rowActions, batchActions, $routeParams, loadBalancersService, membersService
  ) {
    var ctrl = this;
    ctrl.items = [];
    ctrl.src = [];
    ctrl.loading = true;
    ctrl.error = false;
    ctrl.checked = {};
    ctrl.loadbalancerId = $routeParams.loadbalancerId;
    ctrl.listenerId = $routeParams.listenerId;
    ctrl.poolId = $routeParams.poolId;
    ctrl.rowActions = rowActions.init(ctrl.loadbalancerId, ctrl.poolId);
    ctrl.batchActions = batchActions.init(ctrl.loadbalancerId);
    ctrl.operatingStatus = loadBalancersService.operatingStatus;
    ctrl.provisioningStatus = loadBalancersService.provisioningStatus;

    init();

    ////////////////////////////////

    function init() {
      ctrl.src = [];
      ctrl.loading = true;
      ctrl.error = false;
      api.getMembers(ctrl.poolId).then(success, fail);
    }

    function success(response) {
      ctrl.src = response.data.items;
      ctrl.loading = false;
      membersService.associateMemberStatuses(
          ctrl.loadbalancerId,
          ctrl.listenerId,
          ctrl.poolId,
          ctrl.src);
    }

    function fail(/*response*/) {
      ctrl.src = [];
      ctrl.loading = false;
      ctrl.error = true;
    }

  }

})();
