import CanvasElement from "../Element";

class CanvasImage extends CanvasElement {
  onMouseDown(e: any) {
    console.log("override");
  }
}

export default CanvasImage;
