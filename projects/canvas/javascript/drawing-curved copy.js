/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
// class DrawingCircle extends PaintFunction {
//   // This class extends the PaintFunction class
//   // You are only passing one instance here

//   constructor(contextReal) {
//     super();
//     this.context = contextReal;
//   }

//   // On mouse down, ensure that the pen has these features
//   onMouseDown(coord, event) {
//     // Fill in the color
//     this.context.strokeStyle = "#df4b26";
//     // Kind of line
//     this.context.lineJoin = "round";
//     // Width of line
//     this.context.lineWidth = 5;
//     // Drawing the line here
//     this.context.beginPath();
//     this.context.moveTo(coord[0], coord[1]);
//   }
//   // Clicking and removing your mouse
//   onDragging(coord, event) {
//     this.draw(coord[0], coord[1]);
//   }

//   onMouseMove() {}
//   onMouseUp() {}
//   onMouseLeave() {}
//   onMouseEnter() {}

//   draw(x, y) {
//     //
//     this.context.lineTo(x, y);
//     // Draw the line onto the page
//     this.context.stroke();
//   }
// }



//drawing circle

class DrawingCurved extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.strokeStyle = userColor;
    this.contextReal.strokeStyle = userColor;
  }

  onDragging(coord, event)
  {
    // Allows you to actually draw out your squares
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
    // this.contextDraft.fillRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    this.contextDraft.lineWidth = 5;
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.quadraticCurveTo(640, 360, coord[0], coord[1]);
    this.contextDraft.stroke();

  }

  onMouseMove() {}

  // Committing the element to the canvas
  onMouseUp(coord)
  {
    // Clearing the rectangle first
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    // this.contextReal.fillRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    this.contextReal.lineWidth = 5;
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.quadraticCurveTo(640, 360, coord[0], coord[1]);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}


