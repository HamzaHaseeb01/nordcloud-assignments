At first install all the dependencies using (npm i or yarn add)

the project can be run using the following command (npm run dev)

unit testing is run using the following command (npm run test)

The main code file exit under the src/service/network.ts.In that file there are four functions in which (SuitableNetworkLocations()) is a main function, other function are fulfilling the functionaility of above function in order to reduce the complexity and enhance readability.

Unit testing is done using javascript testing frameword (JEST).There are two test cases under one test suite. first test case (it('should return result using static value for station and devices')) is without the input to test the static variables(stationLocation,devices) defined in network.ts.The second one (it('should return result match with dynamic input result')) is with input values (inputs are defined under the same foler in input.ts file).


This application is deployed on aws ec2 aws instance ()

I have also tested the api's using postman. For dynamic inputs you can passed the arguments in body.