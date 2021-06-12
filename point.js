const distance = ({x: x1 = 0, y: y1 = 0}, {x: x2 = 0, y: y2 = 0}) => Math.sqrt((Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

point1 = {
  xj: 2 ,
  yq: 1
}

point2 = {
  xq: 15,
  yj: 8
}

console.log(distance(point1, point2));

const location = ({x, y}) => {
  if (x > 0 && y > 0) {
    return "The point is in the first quadrant.";
  } else if (x < 0 && y > 0) {
    return "The point is in the second quadrant.";
  } else if (x < 0 && y < 0) {
    return "The point is in the third quadrant.";
  } else if (x > 0 && y < 0) {
    return "The point is in the fourth quadrant.";
  } else if (x == 0 && y == 0) {
    return "The point is in the origin.";
  } else if (y == 0) {
    return "The point is in the x axis.";
  } else if (x == 0) {
    return "The point is in the y axis.";
  }
}

point3 = {
  x: 0,
  y: -10
} 

console.log(location(point3));
