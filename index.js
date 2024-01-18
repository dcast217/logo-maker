const fs = require('fs');
const inquirer = require('inquirer');

// Function to create the SVG content for a square
function createSquareSVG(text, textColor, shapeColor) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>
  `;
}

// Function to create the SVG content for a circle
function createCircleSVG(text, textColor, shapeColor) {
  return `
    <svg height="300" width="200">
      <circle cx="100" cy="150" r="100" fill="${shapeColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>
  `;
}

// Function to create the SVG content for a triangle
function createTriangleSVG(text, textColor, shapeColor) {
  return `
    <svg height="300" width="200">
      <polygon points="100, 10 200, 300 0, 300" fill="${shapeColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>
  `;
}

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for the shape color:',
    },
  ])
  .then((answers) => {
    let svgContent = '';

    // Determine the shape chosen by the user and generate the corresponding SVG content
    if (answers.shape === 'square') {
      svgContent = createSquareSVG(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.shape === 'circle') {
      svgContent = createCircleSVG(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.shape === 'triangle') {
      svgContent = createTriangleSVG(answers.text, answers.textColor, answers.shapeColor);
    }

    // Save the SVG content to a file
    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error creating logo.svg:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
module.exports = { createSquareSVG, createCircleSVG, createTriangleSVG };
