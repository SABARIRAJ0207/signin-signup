1. Register Form => Local JSON file write for every user (Store it in Array of objects).
2. Login Form => Check whether the user in the json file (Array of objects).
3. Once User Logged in =>  Show Profile Page along with logout Option.



const UserList = [
    {
        id:1,
        name: 'Test',
        emailAddress: 'test@gmail.com',
        password: '12345'
    },
    {
        id:2,
        name: 'Test',
        emailAddress: 'test@gmail.com',
        password: '12345'
    },
    {
        id:3,
        name: 'Test',
        emailAddress: 'test@gmail.com',
        password: '12345'
    },
    {
        id:4,
        name: 'Test',
        emailAddress: 'test@gmail.com',
        password: '12345'
    },
];

#New Data Push => UserList.push({})
#Get the data => UserList.filter(i => i.id === 1);




