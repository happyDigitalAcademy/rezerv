
app.factory('getTopicFctry',['$http','$q',
    function($http,$q){
      return{

           topicFunction: function()
           {

             var dataDef = $q.defer();

             var topicData = {



             };
                 console.log('This is factory object'+ topicData);


             $http.post('http://team4external.thedigitalacademy.co.za/XavTech/API/Retrieve_Questions.php', topicData)


             .then(function(data){
                    dataDef.resolve(data);
                })
                //When user infor is wrong it returns  an error

                .catch(function(data){
                    dataDef.reject(data);
                });

                //return the user data success or error

                return (dataDef.promise);

           }

        }
      }

]);
