const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    if (grade >= 95.00 && grade <= 100.00){
      return "O: Outstanding";
    } else if (grade >= 90.00 && grade <= 94.99){
      return "V: Very Good";
    } else if (grade >= 85.00 && grade <= 89.99){
      return "G: Good";
    } else if (grade >= 80.00 && grade <= 84.99){
      return "S: Satisfactory";
    } else if (grade >= 75.00 && grade <= 79.99){
      return "N: Needs Improvement";
    } else{
      return "D: Did not Meet Expectations";
    }
  }
}

module.exports = functions;
