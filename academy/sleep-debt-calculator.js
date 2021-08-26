// Sleep Debt Calculator without Loops, just Conditionals

const getSleepHours = day => {
  switch (day){
    case 'mon':
      return 3;
      break;
    case 'tue':
      return 4;
      break;
   case 'wed':
      return 5;
      break;
   case 'thu':
      return 6;
      break;
   case 'fri':
      return 7;
      break;
  case 'sat':
      return 8;
      break;
  case 'sun':
      return 7;
      break;                    
  };
};

const getActualSleepHours = () => {
  let sleepHoursSum = getSleepHours('mon');
  sleepHoursSum += getSleepHours('tue');
  sleepHoursSum += getSleepHours('wed');
  sleepHoursSum += getSleepHours('thu');
  sleepHoursSum += getSleepHours('fri');
  sleepHoursSum += getSleepHours('sat');
  sleepHoursSum += getSleepHours('sun');
  return sleepHoursSum;
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
      console.log('Got Perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours){
      console.log('Sleep more than need');
  } else {
      console.log('Should sleep more!!');
  };
};

calculateSleepDebt()
