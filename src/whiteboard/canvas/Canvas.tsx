import CanvasImage from "../elements/CanvasImage/CanvasImage";
import Drawing from "../elements/Drawing/Drawing";
import CanvasElement from "../elements/Element";
import { TODOElement } from "../elements/types";
import useCurrentElement from "../hooks/useCurrentElement";

const Canvas = () => {
  //const element: TODOElement = useCurrentElement();
  const element: any = new CanvasImage();

  return (
    <div>
      <canvas
        id="whiteboard"
        style={{
          border: "1px solid blue",
        }}
        width={500}
        height={500}
        onMouseDown={(e) => element.onMouseDown(e)}
        onMouseUp={(e) => element.onMouseUp(e)}
        onMouseMove={(e) => element.onMouseMove(e)}
      />
    </div>
  );
};

export default Canvas;
