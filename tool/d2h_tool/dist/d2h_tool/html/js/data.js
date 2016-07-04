var app = angular.module('angularjs-starter', ["ngSanitize"]);

app.controller('SimpleController', function($scope) {
	// Accessing administrator’s functions - Add organization
		$scope.addOrganization= "Enter the name for the organization that you are adding.";
		
	// Assigning Roles
	// Assigning Roles - Enter the name for the role 
		$scope.enterNameRole= "Enter the name for the role that you are adding.";
	// Assigning Roles - Visible for all child organization
		$scope.visibleForChildOrg= "<b>Visible for all child organization</b> – check this box if you want to make this configuration visible to the sub- organizations.";
	
		// Adding Users 
	// Adding Users - Enter user’s e-mail address
		$scope.EnterUsersEmail= "Enter user’s e-mail address here.";
	// Adding Users - Enter the password
		$scope.enterPassword= "Enter the password that you want to set for the user. The user will use this password when he logs in to the UMS application.";
	// Adding Users - Confirm the password
		$scope.confirmPassword= "Confirm the password by entering it here again.";
	// Adding Users - Enter user’s first name
		$scope.userFirstName= "Enter user’s first name.";
	// Adding Users - Enter user’s Last name
		$scope.userLastName= "Enter user’s Last name.";
	// Adding Users - Click the Add Combination button
		$scope.addCombinationBtn= "Click the Add Combination button to assign the selected role to the user that you are adding.";
	// Adding Users - It means that user will have this role 
		$scope.defaultRole= "It means that user will have this role associated with him as a default role.";
		
	//Configuring Message to Send Alerts
	//Configuring Message to Send Alerts - Enter a title for the message
		$scope.enterMessageTitle= "Enter a title for the message. The title can indicate what the message is about. Example – Water Service Disruption. This may be the same for all the channels configured.";
	//Configuring Message to Send Alerts - Check the Visible for all child organizations
		$scope.visibleForChidOrgBox= "Check the <b>Visible for all child organizations</b> box, if you want to make this message visible to the sub-organizations.";
	//Configuring Message to Send Alerts - Enter the contents of the message
		$scope.enterContentMessage= "Enter the contents of the message to be sent."; 
	//Configuring Message to Send Alerts - The contents that you have typed
		$scope.typedContent= "The contents that you have typed in the <b>Main content</b> field are copied in this field. You can edit them or keep them as they are."; 

	
	//Configuring Channels to Send Alerts
	//Configuring Channels to Send Alerts - Enter the recipient name.
		$scope.enterRecipientName= "Enter the recipient name."; 
	//Configuring Channels to Send Alerts - Visible for all child organization
		$scope.allChildOrgChannels= "Visible for all child organization – check this box if you want to make this configuration visible to the sub- organizations."; 
	//Configuring Channels to Send Alerts - Enter the text for the message
		$scope.enterMessageText= "Enter the text for the message.";
	//Configuring Channels to Send Alerts - Select the relevant option from Number or Text
		$scope.selectRelevantOption= "Select the relevant option from Number or Text."; 
	//Configuring Channels to Send Alerts - Enter the no. of lines in the message here
		$scope.numberOfLines= "Enter the no. of lines in the message here. It cannot be more than 200." 
	//Configuring Channels to Send Alerts - Enter the number of days of the validity
		$scope.enterNumberOfDays= "Enter the number of days of the validity of the message and the time till which it is valid."; 
		
	
		
	//Setting up Areas on the Map to Send Alerts
	//Setting up Areas on the Map to Send Alerts - Set default map view
		$scope.setDefaultMapView= "Using this option, you can centre the map around a defined location.";
	//Setting up Areas on the Map to Send Alerts - Enter the name that you want to specify for the new area
		$scope.nameOfArea= "Enter the name that you want to specify for the new area."; 
	//Setting up Areas on the Map to Send Alerts - Check the Visible for all child organizations box
		$scope.visibleChildSubOrg= "Check the <b>Visible for all child organizations</b> box, if you want to make this area visible to the sub-organizations."; 
});

