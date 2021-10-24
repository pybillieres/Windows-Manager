class WindowsManager{

    constructor(windowsArray){
        this.windowsArray = windowsArray;
        this.zIndexArray = {};//tableau associatif car autrement addeventlistener pose pb
        this.Init();
    }

    Init(){
        for(let i = 0; i<this.windowsArray.length; i++){
            this.zIndexArray[this.windowsArray[i]] = i + 1;
        }
        console.log(this.zIndexArray);
        this.Listener();
    }

    Listener(){
        
        for(const property in this.zIndexArray){
            document.getElementById(property).addEventListener("click", function(){this.Activate(property)}.bind(this));
        }

    }


    Activate(element){
        var actualIndex = this.zIndexArray[element];//recupere valeur du zindex actuel de l'éléement cible

            this.zIndexArray[element] = this.windowsArray.length;//nouveau zindex de l'element cible

            for(const property in this.zIndexArray){
                if(property != element){//si pas element cible
                    if(this.zIndexArray[property] > actualIndex){
                        this.zIndexArray[property] = this.zIndexArray[property] - 1; //PLUTOT UTILISER DECREMENTATION
                    }

                }
            }

        console.log(this.zIndexArray);
        this.Organize();
    }

    Organize(){
        //creer boucle pour définir les Zindex en fonction de la longueur du tableau


        for(const property in this.zIndexArray){

            document.getElementById(property).style.zIndex = this.zIndexArray[property];
        }
    }

}
