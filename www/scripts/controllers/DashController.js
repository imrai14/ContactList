angular.module('SahuSoft')
	.controller('DashCtrl', function ($scope, $location, $rootScope) {
		$scope.contactDeatilsWidth = window.innerHeight;

			$scope.contactArrayLists = [
				{
					name : "Shubham Rai",
					post : "Manager",
					flag : true,
					haha : '12',
					img : 'images/people.jpg',
					fan : true
 				},
				{
					name : "Yuvraj Singh",
					post : "Project Manager",
					flag : false,
					img : 'images/yuvraj.jpeg'
				},
				{
					name : "Sachin Tendulkar",
					post : "Great Man",
					flag : true,
					img : 'images/sachin.jpg'
				},
				{
					name : "Virat  Kohli",
					post : "Vice President",
					flag : false,
					img : 'images/virat.jpg'
				},
				{
					name : "Anil Kumble",
					post : "CEO",
					flag : true,
					img : 'images/anil.jpg'
				},
				{
					name : "Zaheer Khan",
					post : "Cricketer",
					flag : false,
					img : 'images/zaheer.jpg'
				},
				{
					name : "Sania Mirza",
					post : "Tennis Player",
					flag : true,
					img : 'images/sania.jpg'
				},
				{
					name : "Saina Nehwal",
					post : "Associate",
					flag : false,
					img : 'images/saina.jpg'
				},
				{
					name : "Pradeep Kumar",
					post : "Software Engg",
					flag : false,
					img : 'images/people2.jpg',
					fan : true
				},
				{
					name : "Rakesh Kumar",
					post : "Software Engg",
					flag : true,
					img : 'images/people3.jpg',
					fan : true
				},
				{
					name : "Raj Kumar",
					post : "Software Engg",
					flag : false,
					img : 'images/people4.jpg',
					fan : true
				},

			]

			$scope.teamLists = [
				{
					name : 'Barcelona',
					gameType : 'FootBall',
					img : 'images/barcelona.gif'
				},
				{
					name : 'Manchestar United',
					gameType : 'FootBall',
					img : 'images/manchestar.jpg'
				},
				{
					name : 'RCB',
					gameType : 'Cricket',
					img : 'images/rcb.png'

				}
			]
			
			$scope.showModal = function(name){
				$scope.name = name;
				$('#myModal').modal('show') 
			}

			$scope.saveAddedDetails = function(uDetial, name){
				localStorage.setItem(name, JSON.stringify(uDetial));
				uDetial.email = "";
				uDetial.location = "";
				$('#myModal').modal('hide') 
				
			}

			$scope.fetchDetails = function(name, img){
				console.log(localStorage.getItem(name));
				if(localStorage.getItem(name) && localStorage.getItem(name) != undefined){
					$rootScope.details = JSON.parse(localStorage.getItem(name));
					$rootScope.img = img;
					$location.path('/contactDetails')
				}else{
					console.log('in');
					$location.path('/contactDetails')
					$rootScope.details = false;
					
				}
				
				
			}

			$scope.checkBoxClicked = function(index){
				$('.icon'+index).addClass('backGround')
				console.log($('.icon'+index).hasClass('backGround'));
				if($('.icon'+index).hasClass('backGround')){
					$('.iconPlus'+index).toggleClass('hide')
					if($('.iconPlus'+index).hasClass('hide')){
						$('.icon'+index).removeClass('backGround')
					}
	
				}

			}

			

		    $scope.tab = 1;

		    $scope.setTab = function(newTab){
		      $scope.tab = newTab;
		    };

		    $scope.isSet = function(tabNum){
		      return $scope.tab === tabNum;
		    };


		

	})