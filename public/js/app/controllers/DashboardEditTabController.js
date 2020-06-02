/* Setup Home page controller */
angular.module('BotApp').controller('DashboardEditTabController', ['$rootScope', '$scope', '$state', '$http', '$window', '$cookies', '$timeout', 'API_URL', '$localStorage', function ($rootScope, $scope, $state, $http, $window, $cookies, $timeout, API_URL, $localStorage) {

    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    let tab_id = $state.params.tab_id || 0;

    let tabs = JSON.parse($localStorage.tabs);


    $scope.tab = [];
    $scope.element = [];
    $scope.question_nodes = [];
    $scope.reply_nodes = [];
    $scope.tab_clone = [];
    if (tabs.find(x => x.index == tab_id)) {
        angular.copy(tabs.find(x => x.index == tab_id), $scope.tab);
        angular.copy(tabs.find(x => x.index == tab_id), $scope.tab_clone);
        angular.copy($scope.tab.question_nodes, $scope.question_nodes);
        angular.copy($scope.tab.reply_nodes, $scope.reply_nodes);
    }


    $scope.add_text_node = function () {
        let node = {
            'type': 0,
            'content': '',
        }
        $scope.question_nodes.push(node);

    }
    $scope.add_input_node = function () {
        let node = {
            'type': 1,
            'content': '',
        }
        $scope.question_nodes.push(node);
        angular.copy($scope.question_nodes, $scope.tab.question_nodes);
        var tab = $rootScope.tabs.find(x => x.index == $scope.tab.index);
        tab.question_nodes = $scope.tab.question_nodes;
        $localStorage.tabs = JSON.stringify($rootScope.tabs);
    }
    $scope.add_reply_node = function () {
        let node = {
            'content': '',
            'go_to': '',
        }
        $scope.reply_nodes.push(node);
    }
}]);
