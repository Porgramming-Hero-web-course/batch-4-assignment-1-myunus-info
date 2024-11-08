// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
{
  type Circle = {
    shape: 'circle';
    radius: number;
  };

  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (inputShape: Shape): number => {
    if (inputShape.shape === 'circle') {
      const circleArea = parseFloat((Math.PI * inputShape.radius ** 2).toFixed(2));
      return circleArea;
    } else if (inputShape.shape === 'rectangle') {
      const rectangleArea = inputShape.height * inputShape.width;
      return rectangleArea;
    } else {
      throw new Error('Invalid shape provided!');
    }
  };
}
