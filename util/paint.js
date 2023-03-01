function label(width, height, text) {
  const svgText = `
	<svg width="${width}px" height="${height}px">
	  <style>.title { fill: red; font-size: 30px }</style>
	  <text x="0px" y="${height}px" class="title">${text}</text>
	</svg>`;
  const svgBuffer = Buffer.from(svgText);
  return svgBuffer;
}

function annotations(annotations) {
  return annotations.reduce((array, annotation) => {
    const { xmin, ymin, xmax, ymax } = annotation.box;
    const color = "red";
    const thickness = 3;
    const x = xmin;
    const y = ymin;
    const width = xmax - xmin;
    const height = ymax - ymin;
    const rectangle = {
      input: Buffer.from(
        `<svg><rect width="${width}" height="${height}" stroke="${color}" stroke-width="${thickness}" fill="none"/></svg>`
      ),
      top: y,
      left: x,
    };
    const text = {
      input: label(width, 20, annotation?.label),
      top: ymax,
      left: xmin,
    };

    array.push(rectangle);
    array.push(text);
    return array;
  }, []);
}
export default { label, annotations };
