

app.controller('newPostCtrl',['$scope','newPostFctry',
function ($scope,newPostFctry) {

  $scope.clearAll = function(){
      $scope.topic = null;
      $scope.description= null;
      $scope.categories= null;
      console.log('All cleared');
  }

  $scope.postFunction= function (topic,description,categories)


  {

    console.log('myTopic : ' + topic);
    var intID= '456789';
    var top= topic;
    var desc= description;
    var cate= categories;

    console.log('InternID'+' '+ intID+' '+'Topic'+' '+ top+' '+'description'+ ' '+desc+' '+ 'categories'+' '+ cate);

    // alert9

    var postParam = newPostFctry.postFunction(intID,top,desc,cate)

    postParam.then(
      function (result) {
        console.log(result);
        // $scope.clearAll();
        alert('You started a new topic');

    },function (error) {
      console.log(error);

    });

  }
}]);
