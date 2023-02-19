/* Question:
    Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
    The subjects for each class group are as follows:
    Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
    Social Science Subjects - Accounting, Commerce, Marketing, Geography
    Arts Subjects - Government, Economics, Literature, History
    General Subjects - English, Mathematics

    Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 
*/


// decalring and initializing variables
let general_Subjects = "English, Mathematics ";
let science_Subjects = "Physics, Chemistry, Biology, Technical Drawing";
let social_Science_Subjects = "Accounting, Commerce, Marketing, Geography";
let arts_Subjects = "Government, Economics, Literature, History";
let class_group = "";

//writing a function that will help a student determine the subjects they will be taking for the session using their class group
function school_subjects(class_group) {
    if (class_group == "art") {
        console.log("Your subjects are: " + general_Subjects + arts_Subjects);
    } else if (class_group == "science") {
        console.log("Your subjects are: " + general_Subjects + science_Subjects);
    } else if (class_group == "social-science") {
        console.log(
            "Your subjects are: " + general_Subjects + social_Science_Subjects
        );
    } else {
        console.log("Your subjects are: " + general_Subjects);
    }
}


// calling the function to help Bolatito determine the subjects she will be taking for the session using her class group
school_subjects("art");



/*Question:
    Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
    “The number (pwr) is the power of 2 nearest to (num).”

    If there are two candidate values, display the smaller one. For example, 2 and 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

    For example,
    If num = 40, pwr = 32. Then you log to your console in this format:
    “The number 32 is the power of 2 nearest to 40.”

    If num = 50, pwr = 64.. Then you log to your console in this format:
    “The number 64 is the power of 2 nearest to 50.”
*/



let num = 65;
let pwr = 0;

while(pwr < num){
    if(num - pwr < pwr / 2){
        return pwr;
    };
    pwr *= 2;
};
return pwr;

console.log("The number" + pwr + " is the power of 2 nearest to " + num)