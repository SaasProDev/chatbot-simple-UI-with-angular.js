/* Setup Home page controller */
angular.module('BotApp').controller('DashboardCreateTabController', ['$rootScope', '$scope', '$state', '$http', '$window', '$cookies', '$timeout', 'API_URL', '$localStorage', function ($rootScope, $scope, $state, $http, $window, $cookies, $timeout, API_URL, $localStorage) {

    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    $scope.save = function () {
        if ($scope.tab_title == undefined) {
            return;
        }
        let new_tab = {
            'title': $scope.tab_title,
            'index': parseInt($rootScope.tabs.length + 1),
            'question_nodes': [],
            'reply_nodes': []
        }
        $scope.tab_title = '';
        $rootScope.tabs.push(new_tab);


        $localStorage.tabs = JSON.stringify($rootScope.tabs);
    }
}]);
