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
    .module('horizon.dashboard.project.nlbaasv2.loadbalancers')
    .controller('nLBaaSEditPoolWizardController', EditPoolWizardController);

  EditPoolWizardController.$inject = [
    '$scope',
    '$routeParams',
    '$q',
    'horizon.dashboard.project.nlbaasv2.workflow.model',
    'horizon.dashboard.project.nlbaasv2.workflow.workflow',
    'horizon.framework.util.i18n.gettext'
  ];

  /**
   * @ngdoc controller
   * @name EditPoolWizardController
   *
   * @description
   * Controller for the LBaaS v2 edit pool wizard.
   *
   * @param $scope The angular scope object.
   * @param $routeParams The angular $routeParams service.
   * @param $q The angular service for promises.
   * @param model The LBaaS V2 workflow model service.
   * @param workflowService The LBaaS V2 workflow service.
   * @param gettext The horizon gettext function for translation.
   * @returns undefined
   */

  function EditPoolWizardController($scope, $routeParams, $q, model, workflowService, gettext) {
    var scope = $scope;
    var defer = $q.defer();
    var loadbalancerId = $routeParams.loadbalancerId;
    scope.model = model;
    scope.submit = scope.model.submit;
    scope.workflow = workflowService(
        gettext('Update Pool'),
        'fa fa-pencil', ['pool'],
        defer.promise);
    scope.model.initialize(
        'pool', scope.launchContext.id, loadbalancerId).then(addSteps).then(ready);

    function addSteps() {
      var steps = scope.model.visibleResources;
      steps.map(getStep).forEach(function addStep(step) {
        if (!stepExists(step.id)) {
          scope.workflow.append(step);
        }
      });
    }

    function getStep(id) {
      return scope.workflow.allSteps.filter(function findStep(step) {
        return step.id === id;
      })[0];
    }

    function stepExists(id) {
      return scope.workflow.steps.some(function exists(step) {
        return step.id === id;
      });
    }

    function ready() {
      defer.resolve();
    }
  }

})();
