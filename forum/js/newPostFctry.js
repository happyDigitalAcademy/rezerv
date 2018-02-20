
app.factory('newPostFctry',['$http','$q',
    function($http,$q){
      return{

           postFunction: function(intID,top,desc,cate)
           {

             var dataDef = $q.defer();

             var postData = {

               'InternID': intID,
               'Topic': top,
               'Description': desc,
               'Categories' : cate

             };
                 console.log('This is factory object'+ postData);


             $http.post('http://team4external.thedigitalacademy.co.za/XavTech/API/Save_Question.php', postData)


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
