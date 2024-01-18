const shape = require('../index.js');

// Test cases for createSquareSVG function
describe('square', ()=> {
    test('should render square with black fill red text', ()=>{
        const squareSVG = shape.createSquareSVG('Hello', 'red', '#000000');
        const expectedSVG = `  <rect width="100%" height="100%" fill="#000000" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="48">Hello</text>`;
          expect(squareSVG == expectedSVG);
    }
    )
});
// Test cases for createCircleSVG function
describe('circle', ()=> {
    test('should render circle with black fill red text', ()=>{
        const circleSVG = shape.createCircleSVG('Hello', 'red', '#000000');
        const expectedSVG = `
        <svg height="300" width="200">
          <circle cx="100" cy="150" r="100" fill="#000000" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="48">Hello</text>
        </svg>
      `;
          expect(circleSVG == expectedSVG);
    }
    )
});
// Test cases for createTriangleSVG function
describe('triangle', ()=> {
    test('should render triangle with black fill red text', ()=>{
        const triangleSVG = shape.createTriangleSVG('Hello', 'red', '#000000');
        const expectedSVG = ` <polygon points="100, 10 200, 300 0, 300" fill="#FF0000" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="48">Hello</text>`;
          expect(triangleSVG == expectedSVG);
    }
    )
});
