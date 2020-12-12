class Zoom {
    constructor() {
        this.zoomBox = document.getElementById("zoomBox");
        this.midArea = document.getElementById("midArea");
        this.midImg = this.midArea.children[0];
        this.zoom = document.getElementById("zoom");
        this.bigArea = document.getElementById("bigArea");
        this.bigImg = this.bigArea.children[0];
        this.smallArea = document.getElementById("smallArea");
        this.smallImg = this.smallArea.children;
        this.init();
    }
    init() {
        this.midArea.onmouseover = () => {
            this.zoom.style.display = "block";
            this.bigArea.style.display = "block";
        }
        this.midArea.onmouseout = () => {
            this.zoom.style.display = "none";
            this.bigArea.style.display = "none";
        }
        this.midArea.onmousemove = (e) => {
            let evt = e || window.event;
            let x = evt.pageX - this.zoomBox.offsetLeft - this.zoom.offsetWidth / 2;
            let y = evt.pageY - this.zoomBox.offsetTop - this.zoom.offsetHeight / 2;

            let mx = this.midArea.offsetWidth - this.zoom.offsetWidth;
            let my = this.midArea.offsetHeight - this.zoom.offsetHeight;

            x = x <= 0 ? 0 : x >= mx ? mx : x;
            y = y <= 0 ? 0 : y >= my ? my : y;



            this.zoom.style.left = x + "px";
            this.zoom.style.top = y + "px";

            //大图移动
            this.bigImg.style.left = -this.zoom.offsetLeft * (this.bigImg.offsetWidth / this.midArea.offsetWidth) + "px";
            this.bigImg.style.top = -this.zoom.offsetTop * (this.bigImg.offsetHeight / this.midArea.offsetHeight) + "px";

        }

        for (let i = 0; i < this.smallImg.length; i++) {
            this.smallImg[i].onclick = () => {
                this.midImg.src = this.smallImg[i].src;
                this.bigImg.src = this.smallImg[i].src;
            }
        }

    }
}