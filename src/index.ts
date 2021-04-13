enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
