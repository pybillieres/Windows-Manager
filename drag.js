class Drag {

    constructor(objectId, targetId) {
        this.objectId = objectId;//id de la zone d'action
        this.object;
        this.targetId = targetId;//id de l'objet à déplacer
        this.target;
        this.initX;
        this.initY;
        this.initXCursor;
        this.initYCursor;
        this.onDrag = false;
        this.Init();
    }


    Init() {
        this.object = document.getElementById(this.objectId);
        this.target = document.getElementById(this.targetId);
        this.initX = parseFloat(getComputedStyle(this.target).left);
        this.initY = parseFloat(getComputedStyle(this.target).top);
        this.Listener();
    }

    Listener() {
        this.object.addEventListener("mousedown", function () { this.startDrag() }.bind(this));
        this.object.addEventListener("mousemove", function () { this.Drag() }.bind(this));
        this.object.addEventListener("mouseup", function () { this.endDrag() }.bind(this));
    }

    startDrag() {
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

    endDrag() {
        console.log("end");
        this.onDrag = false;

    }
}
