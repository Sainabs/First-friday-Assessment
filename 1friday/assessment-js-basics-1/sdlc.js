// In this section you will answer some work through
// problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development
    // Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

// 1. Planning
// 2. Analysis of Requirements
// 3. Design
// 4. Implementation
// 5. Testing & Integration
// 6. Maintain
let softwareDevelopmentLifecycle = ["1.Planning", "2.Analysis of Requirements", "3.Design", "4.Implementation", "5.Testing & Integration", "6. Maintain"]

for (let i=0;i<softwareDevelopmentLifecycle.length; i++){
    console.log(softwareDevelopmentLifecycle[i])
}

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development 
    Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "Planning - This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
const AnalysisOfRequirements = "Analysis of Requirements - The second step is gathering all the specifications and details required to build an application, like researching and determining the needs of end-users, defining system requirements and evaluating prototypes. Finding what’s needed like authentication, data tracking,  payments systems for the application"
const Design = "Design - The third step is roadmapping the application stages like creating a framework structure for developers to follow throughout the application lifecycle. "
const Implementation = "Implementation - The fourth step is building the application, writing the code, coding out based on the design and framework structures decided for the application."
const TestingAndIntegration = "Testing and Integration - The fifth step is making sure the end-user experience doesn’t result in problems, by testing the application for bugs or defects that need to be tracked, fixed, and then retested. The information system is compiled and integrated with list of systems required and launched users to install and use."
const Maintain = "Maintain - The sixth step is managing the database, fixing application issues reported by users, and implementing changes after deployment."

console.log(planning)
console.log(AnalysisOfRequirements)
console.log(Design)
console.log(Implementation)
console.log(TestingAndIntegration)
console.log(Maintain)