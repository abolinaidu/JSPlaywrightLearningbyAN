class BasePage {
    constructor(pageName)
    {
        this.pageName = pageName;
    }
    openPage()
    {
        console.log("Opening Page" + this.pageName);
    }       
    closePage()
    {
        console.log("Closing Page" + this.pageName);
    }
}

class HomePage extends BasePage {
  //  constructor()    { 
    //console.log("Home Page Constructor");    
    }


let page = new HomePage();
page.openPage();
page.closePage();