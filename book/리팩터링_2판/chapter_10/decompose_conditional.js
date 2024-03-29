// before
function decomposeCondition () {
  if(!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)){
    charge = quantity * plan.summerRate;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceChage;
  }
}

//after
function decomposeConditionAfter() {
  if(summer()){
    charge = summerCharge()
  } else {
    charge = regularCharge()
  }
  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
  }
  function summerCharge() {
    return quantity * plan.summerRate;
  }
  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceChage;
  }
}