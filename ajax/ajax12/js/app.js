//intialition is get hub 
const github = new Github;
//intialition is ui
const ui = new UI;

//searh input githubfinder
const searchuser = document.getElementById('searchUser');
//search user addevent listener
searchuser.addEventListener('keyup', (e) => {


    const userText = e.target.value;
    if (userText != '') {
        console.log(userText);
    //make http call
        github.getuser(userText).then(data => {
            if (data.profile.message === 'not found') {

            } else {
                console.log(data);
                ui.showProfile(data.profile);
            }
        });
        // github.getuser(userText)
        //     .then(data => {
        //         if(data.profile.message === 'not found') {
        //         	//show alert
        //         }else {
        //         	// show profile
        //         	ui.showProfile(data.profile);
        //         	console.log(data);
        //         }
        //     })
    } else {
    	//clear profile

    }
});