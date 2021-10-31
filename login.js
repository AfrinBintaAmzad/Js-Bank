// console.log('please type anything')   //link kora ta thik ache kina eita check kortesi//
const loginButton=document.getElementById('login-submit'); //Button ta ke dhore niye eshe logginButton variable e rekhe dilam
loginButton.addEventListener('click',function(){  //ki kaj korbe oita bujhanor jonne ei line //.addeventListener hocche shekhane amar duita jinish parameter pathaite hoi.ekta hocche ki ghotona ghotbe ebong arekta hocche oi ghotonar shapekkhe ki kaj korte hobe


    // console.log('login button clicked')       //check korlam je kaj kortese kina
    const userEmail=document.getElementById('user-email').value;
    const userPassword=document.getElementById('user-password').value;
    // console.log(userEmail,userPassword);     //Check korlam je duita input field kaj korche kina

    if(userEmail=="afrin@gmail.com" && userPassword == "5678"){
        window.location.href=('banking.html');
    }
    else{
       alert('Your Entered Email or Password Is Not Correct'); //bootstrap er modal theke aro shundor modal use korte hobe
    }
    
})