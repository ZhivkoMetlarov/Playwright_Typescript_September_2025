// Type Alias declaration 

type EmployeeName = string;  // declare with type, use it to combine several possible types (number, string, boolen tec.)
type EmployeeId = number;
type EmployeePosition = string;

type Result = string | number | null;

let data: Result = 'Test';

let responseData: Result = 20;

let printSum: Result = 50;

// type alias with string literals

type PaymentMethod = "cash" | "card" | "crypto";

function paymentDetails(amount: number, method: PaymentMethod) {
    console.log(`Payment ${amount}$ by ${method}`)
}

paymentDetails(20, "cash");

// type alias in interface

type ID = string | number;
type Status = "Open" | "In Progress" | "Done";

interface Ticket {
    id: ID;
    tittle: string;
    status: Status;
}

interface Email {
    id:ID;
    message: string;
}

const email ={
    id: 10,
    message: "Hello! i am Peter",

}

const ticket = {
    id: 1,
    tittle: 'Send Email',
    status: 'Done',
};

