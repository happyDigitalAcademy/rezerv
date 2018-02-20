
app.controller('getTopicCtrl',['$scope','getTopicFctry',
function ($scope,getTopicFctry) {

  $scope.topics= function ()
  {


    var topicParam = getTopicFctry.topicFunction();

    topicParam.then(
      function (result) {
        console.log(result);

        console.log(result.data[0].internID);

        $scope.tabelData = result.data;

        console.log($scope.tabelData);

    },function (error) {
      console.log(error);

    })
  }
}]);
