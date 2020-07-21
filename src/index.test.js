const { gradeClassifier } = require('./index');
const functions = require('./index');

// TODO: Write unit tests here
describe("Grade classifier", () => {
  test("When grade is between 95 - 100, should be classified as O", () => {
    // Arrange
    const gradeToClassify = 100;
    // Act  
    const letter = functions.gradeClassifier(gradeToClassify);
    // Assert 
    expect(letter).toEqual("O: Outstanding");
  });

  test("When grade is between 90 - 94.99, should be classified as V", () => {
    // Arrange
    const gradeToClassify = 94.99;
    // Act  
    const letter = functions.gradeClassifier(gradeToClassify);
    // Assert
    expect(letter).toEqual("V: Very Good");
  });

  test("When grade is between 89.99 - 85.00, should be classified as G", () => {
    // Arrange
    const gradeToClassify = 89.99;
    // Act  
    const letter = functions.gradeClassifier(gradeToClassify);
    // Assert
    expect(letter).toEqual("G: Good");
  });

  test("When grade is between 84.99 - 80, should be classified as S", () => {
    // Arrange
    const gradeToClassify = 84.99;
    // Act  
    const letter = functions.gradeClassifier(gradeToClassify);
    // Assert
    expect(letter).toEqual("S: Satisfactory");
  });

  test("When grade is between 79.99 - 75, should be classified as N", () => {
    // Arrange
    const gradeToClassify = 79.99;
    // Act  
    const letter = functions.gradeClassifier(gradeToClassify);
    // Assert
    expect(letter).toEqual("N: Needs Improvement");
  });

  test("When grade is below 74.99, should be classified as D", () => {
    // Arrange
    const gradeToClassify = 74.99;
    // Act  
    const letter = functions.gradeClassifier(gradeToClassify);
    // Assert
    expect(letter).toEqual("D: Did not Meet Expectations");
  });
});
