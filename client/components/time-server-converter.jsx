function serverDateFormatter(serverTimestamp) {
  // console.log(serverTimestamp);
  const date = new Date(serverTimestamp);
  const dayNum = date.getDay();
  const monthNum = date.getMonth();
  const dayDate = date.getDate();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const daysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  return `${daysOfWeek[dayNum]}, ${dayDate} ${months[monthNum]} | `;
}

function serverTimeFormatter(serverTimestamp) {
  // console.log(serverTimestamp);
  const time = new Date(serverTimestamp);
  const formattedTime = time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  return formattedTime;
}

export { serverDateFormatter, serverTimeFormatter };
