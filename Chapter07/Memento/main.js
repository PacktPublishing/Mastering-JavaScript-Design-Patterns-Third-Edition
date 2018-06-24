const painter = new Painter({ line: new LineEditor() });

// Draw a square
painter.commands.line.onMouseDown({ clientX: 0, clientY: 0});
painter.commands.line.onMouseUp({ clientX: 200, clientY: 0});

painter.commands.line.onMouseDown({ clientX: 200, clientY: 0});
painter.commands.line.onMouseUp({ clientX: 200, clientY: 200});

painter.commands.line.onMouseDown({ clientX: 200, clientY: 200});
painter.commands.line.onMouseUp({ clientX: 0, clientY: 200});

painter.commands.line.onMouseDown({ clientX: 0, clientY: 200});
painter.commands.line.onMouseUp({ clientX: 0, clientY: 0});

// Undo the square
painter.commands.line.undo();
painter.commands.line.undo();
painter.commands.line.undo();
painter.commands.line.undo();