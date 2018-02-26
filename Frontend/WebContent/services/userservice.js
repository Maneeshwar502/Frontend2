/**
 *  to make server side calls
 */
app.factory('UserService',function($http)
{
	var userService={}	
	userService.registerUser=registerUser;
	
	console.log("service method called")
	function registerUser(user)
	{		
		console.log("registration start")
		return $http.post("http://localhost:2015/Middleware/registeruser",user)	
		console.log("perfectly called")
	}		
	userService.login=login;
	console.log("login method called")
	function login(user)
	{
		console.log("userservice->login")
		console.log("user")
		return $http.post("http://localhost:2015/Middleware/login",user)
	}
	userService.logout=logout;
	function logout(){
		return $http.put("http://localhost:2015/Middleware/logout")
	}	
	userService.getUser=getUser;
	function getUser(){
		return $http.get("http://localhost:2015/Middleware/getuser")
	}
	userService.updateUserProfile=updateUserProfile;
	function updateUserProfile(user){
		console.log("edit->profile")
		console.log("edited")
		return $http.put("http://localhost:2015/Middleware/updateuser",user)
	}
	return userService;
})




