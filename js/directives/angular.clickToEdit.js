App.directive("clickToEdit", function () {
	var editorTemplate = '' +
        '<div class="click-to-edit">' +
            '<div ng-hide="view.editorEnabled">' +
                '{{value}} ' +
                '<button class="action-button edit-button" ng-click="enableEditor()">&#10000;</button>' +
            '</div>' +
            '<div ng-show="view.editorEnabled">' +
                '<input type="text" class="col-xs-8" ng-model="view.editableValue">' +
                '<button class="action-button save-button" href="#" ng-click="save()">&#10004;</button>' +
                '<button class="action-button cancel-button" ng-click="disableEditor()">&#10008;</button>' +
            '</div>' +
        '</div>';

    return {
        restrict: "A",
        replace: true,
        template: editorTemplate,
        scope: {
            value: "=clickToEdit",
        },
        link: function ($scope, element, attrs) {
        	
            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false
            };

            $scope.enableEditor = function() {
                $scope.view.editorEnabled = true;
                $scope.view.editableValue = $scope.value;
            };

            $scope.disableEditor = function() {
                $scope.view.editorEnabled = false;
            };

            $scope.save = function() {
                $scope.value = $scope.view.editableValue;
                $scope.disableEditor();
            };

        }
    };
});








