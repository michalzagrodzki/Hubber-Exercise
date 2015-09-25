#Programming assignment

Create a list view that show users from GitHub. And a user detail page that shows details for one GitHub user. 

##List view:
The list view should show: name, id, avatar (image), etc

It should be possible to navigate to a user detail page by clicking on a user in the list.
It should be possible to navigate to the users GitHub page by clicking on the avatar.
The list view should highlight users who are hireable.

##Detail view:
Things to show: name, id, avatar, list of followers (with name, id, avatar...), created date, modified date 


##Apis to use
```
//returns 30 first users
https://api.github.com/users

//returns 30 users after the 30 first
https://api.github.com/users?since=30 

//Return user by login
https://api.github.com/users/login

```

##Should use:
- Angular
- moment.js to display properly formatted dates
 

Fork this repo and have fun 
