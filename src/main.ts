import "./style.css";

interface Employee {
  id: number;
  name: string;
  email: string;
  dep: string;
  hireDate: Date;
}

const fullEmployeeInfo: Employee = {
  id: 101,
  name: "Vasia",
  email: "lalala@mail.com",
  dep: "security",
  hireDate: new Date("2020-01-10"),
};

function displayInfo(
  fullEmployeeInfo: Employee
): Omit<Employee, "dep" | "hireDate" | "id"> {
  return {
    name: fullEmployeeInfo.name,
    email: fullEmployeeInfo.email,
  };
}
