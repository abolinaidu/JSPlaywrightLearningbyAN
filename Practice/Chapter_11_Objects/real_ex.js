const Env = {
    Base_url : "https://staging.myapp.com",
    timeout :5000,
    retry:2,
    browser :"Chrome"
}

const Expected_response ={
    status :200,
    body :{
        user: {role: "admin",active:true}
    }
}