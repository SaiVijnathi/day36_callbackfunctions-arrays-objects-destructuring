import { useEffect } from 'react';
import './App.css';

function App() {

  //structuring an object
  let sachinDetails = {
    firstName: "Sachin",
    lastName: "tendulkar",
    age: 55,
    email: "sachintendulkar@gmail.com",
    city: "Mumbai",
    telMarks: 91,
    hinMarks: 92,
    engMarks: 93,
    matMarks: 94,
    sciMarks: 95,
    socMarks: 96
  };

  console.log(sachinDetails.hinMarks);

  //Destructuring an object
  let {firstName:fn,lastName:ln,engMarks:em} = sachinDetails;
  console.log(fn);
  console.log(ln);
  console.log(em);

  let arjunDetails = {...sachinDetails};
  arjunDetails.firstName="Arjun";
  arjunDetails.age=25;
  console.log(arjunDetails);


  //structuring an array
  let dhoniDetails = ["Mahendra Singh","Dhoni",45,96,95,94,93,92,91];
  console.log(sachinDetails);
  console.log(dhoniDetails);
  console.log(dhoniDetails[7]);

  //destructuring an array
  let [firstName,,age] = dhoniDetails;
  console.log(firstName,age);

  let yuvrajDetails = [...dhoniDetails];
  yuvrajDetails[0]="Yuvraj";
  console.log(yuvrajDetails);



  let calculateResult = (telMarks,hinMarks,engMarks,matMarks,sciMarks,socMarks,passFn,failFn)=>{

    let passMarks = 35;
    if(telMarks>=passMarks &&
      hinMarks>=passMarks &&
      engMarks>=passMarks &&
      matMarks>=passMarks &&
      sciMarks>=passMarks &&
      socMarks>=passMarks
    ){
      passFn();
    }else{
      failFn();
    }
  };

  //callback functions
  calculateResult(91,92,93,14,95,96,()=>{
    console.log("Inside Pass Fn, Student passed in tenth");
  },()=>{
    console.log("Inside Fail Fn, Student failed in tenth");
  });

  return (
    <div className="App">
    <h1>Callback Functions, Arrays, Objects, Destructuring</h1>
    </div>
  );
}

export default App;
