const config={broswer :"Chrome",timeout:3000};
//modifying properties allowed
config.browser="Firefox";
config.timeout =5000;
config.retries=2;
console.log(config);

config.browser="Safari";
console.log(config);
//=================================

let  config1={browser :"Chrome",timeout:3000};
//modifying properties allowed
config1.browser="Firefox";
config1.timeout =3000;
config1.retries=1;
console.log(config1);

config1.browser="Safari";
console.log(config1);