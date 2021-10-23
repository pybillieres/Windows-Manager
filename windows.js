class Windows {

    constructor(objectId, targetId) {
        this.objectId = objectId;//id de la zone d'action pour le drag
        this.object; //zone d'action du drag
        this.targetId = targetId;//id de l'objet à déplacer
        this.target; //objet à dépacer
        this.initX; //position initial de l'objet
        this.initY; //idem
        this.initXCursor; //position initiale du curseur
        this.initYCursor; //idem
        this.onDrag = false;

        this.resizeAreaID = targetId + "_resize";
        this.resizeArea;
        this.initH; //hauteur de départ
        this.initW;//largeur de départ
        this.onResize = false;

        this.closeID = targetId + "_close";
        this.minimizeID = targetId + "_minimize";
        this.maximizeID = targetId + "_maximize";
        this.close;
        this.minimize;
        this.maximize;

        this.Init();
    }


    Init() {
        this.object = document.getElementById(this.objectId);//SIMPLIFIER EN METTANT CELA DANS LE CONSTRUCTOR
        this.target = document.getElementById(this.targetId);//SIMPLIFIER EN METTANT CELA DANS LE CONSTRUCTOR
        this.resizeArea = document.getElementById(this.resizeAreaID);//SIMPLIFIER EN METTANT CELA DANS LE CONSTRUCTOR
        this.close = document.getElementById(this.closeID);
        this.minimize = document.getElementById(this.minimizeID);
        this.maximize = document.getElementById(this.maximizeID);
        this.DragListener();
        this.ResizeListener();
        this.ButtonsListener();
    }



    // DRAG
    DragListener() {
        this.object.addEventListener("mousedown", function () { this.StartDrag() }.bind(this));
        document.addEventListener("mousemove", function () { this.Drag() }.bind(this));
        this.object.addEventListener("mouseup", function () { this.EndDrag() }.bind(this));
    }

    StartDrag() {
        this.initX = parseFloat(getComputedStyle(this.target).left);//NE PAS METTRE EN CONSTRUCTOR !!!
        this.initY = parseFloat(getComputedStyle(this.target).top);//NE PAS METTRE EN CONSTRUCTOR !!!
        this.initXCursor = event.clientX;
        this.initYCursor = event.clientY;
        this.onDrag = true;
    }

    Drag() {
        if (this.onDrag == true) {
            var diffX = event.clientX - this.initXCursor;
            this.target.style.left = this.initX + diffX + "px";
            var diffY = event.clientY - this.initYCursor;
            this.target.style.top = this.initY + diffY + "px";
        }
    }

    EndDrag() {
        if (this.onDrag == true) {
            this.onDrag = false;
        }
    }



    //RESIZE
    ResizeListener(){
        this.resizeArea.addEventListener("mousedown", function () { this.StartResize() }.bind(this));
        document.addEventListener("mousemove", function () { this.Resize() }.bind(this));
        this.resizeArea.addEventListener("mouseup", function () { this.EndResize() }.bind(this));
    }

    StartResize(){
        this.initH = parseFloat(getComputedStyle(this.target).height);//NE PAS METTRE EN CONSTRUCTOR !!!
        this.initW = parseFloat(getComputedStyle(this.target).width);//NE PAS METTRE EN CONSTRUCTOR !!!
        this.initXCursor = event.clientX;
        this.initYCursor = event.clientY;
        this.onResize = true;
    }

    Resize(){
        if(this.onResize == true){
            var diffX = event.clientX - this.initXCursor;
            var diffY = event.clientY - this.initYCursor;
            this.target.style.height = this.initH + diffY + "px";
            this.target.style.width = this.initW + diffX + "px";
        }

    }

    EndResize(){
        if(this.onResize == true){
            this.onResize = false;
        }
    }

    //BUTTONS
    ButtonsListener(){
        this.close.addEventListener("click", function () { this.Close() }.bind(this));
        this.minimize.addEventListener("click", function () { this.Minimize() }.bind(this));
        this.maximize.addEventListener("click", function () { this.Maximize() }.bind(this));
    }

    Close(){
        console.log("close");
    }

    Minimize(){
        console.log("minimize");
    }

    Maximize(){ 
        console.log("maximize");
    }


}
