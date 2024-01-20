import CanvasElement from "../elements/Element";
import { TODOElement } from "../elements/types";
import useCurrentElement from "../hooks/useCurrentElement";

const Canvas = () => {
  //const element: TODOElement = useCurrentElement();
  const element = new CanvasElement();

  return (
    <div>
      <canvas
        id="whiteboard"
        style={{
          border: "1px solid blue",
        }}
        width={500}
        height={500}
        onMouseDown={(e) => element.beginDrawing(e)}
        onMouseUp={(e) => element.endDrawing(e)}
        onMouseMove={(e) => element.draw(e)}
      />
    </div>
  );
};

export default Canvas;
