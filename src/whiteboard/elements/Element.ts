class CanvasElement {
  public isDrawing: boolean = false;
  beginDrawing(e?: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    const canvas: HTMLCanvasElement | null =
      document.querySelector("#whiteboard");
    const ctx = canvas?.getContext("2d");
    this.isDrawing = true;
    console.log("begin");
    this.draw(e);
  }

  draw(e?: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    const canvas: HTMLCanvasElement | null =
      document.querySelector("#whiteboard");
    const ctx = canvas?.getContext("2d");
    if (!this.isDrawing || !ctx || !e) {
      return;
    }
    console.log("draw");
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo((e as any).nativeEvent.offsetX, (e as any).nativeEvent.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo((e as any).nativeEvent.offsetX, (e as any).nativeEvent.offsetY);
  }

  endDrawing(e?: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    const canvas: HTMLCanvasElement | null =
      document.querySelector("#whiteboard");
    const ctx = canvas?.getContext("2d");
    if (!ctx) {
      return;
    }
    this.isDrawing = false;
    console.log("end");
    ctx.beginPath();
  }
}

export default CanvasElement;
