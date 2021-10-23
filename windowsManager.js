class WindowsManager{

    constructor(windowsArray){
        this.windowsArrayInit = windowsArray;
        this.windowsArray;

        this.Init();
    }

    Init(){
        this.windowsArray = this.windowsArrayInit;
        this.Listener();
    }

    Listener(){
        //for(let i = 0; i<this.windowsArray.length; i++){
          //  console.log('i');
            //document.getElementById(this.windowsArray[i]).addEventListener("click", function () {this.Activate(i)}.bind(this));
        //}
        for(let i = 0; i<this.windowsArray.length; i++){
            console.log(i);
            console.log(this.windowsArray[i], 'test');
            document.getElementById(this.windowsArray[i]).addEventListener("click", function(){this.Activate(this.windowsArray[i], i)}.bind(this));
        }
    }


    Activate(element, i){
        console.log(element, i, "init");
        if(this.windowsArray[0] != element){
            this.windowsArray.splice(0, 0, element);
            console.log(this.windowsArray);
            //this.windowsArray.splice(i+1, 1);
            //console.log(this.windowsArray);
            
        }
        this.Organize();
    }

    Organize(){
        //creer boucle pour définir les Zindex en fonction de la longueur du tableau
        console.log(this.windowsArray, "organize");
        for(let i = 0; i<this.windowsArray.length; i++){
            document.getElementById(this.windowsArray[i]).style.zIndex = this.windowsArray.length - i;
        }
    }

}
