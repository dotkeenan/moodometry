function TimeConverter(timestamp) {
  // days and months start at 0 index. compensate
  const dayNum = timestamp.getDay();
  const monthNum = timestamp.getMonth();
  const dayDate = timestamp.getDate();
  const time = timestamp.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return `${daysOfWeek[dayNum]} ${months[monthNum]} ${dayDate}th, ${time}`;

}

export default TimeConverter;
