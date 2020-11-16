import React from 'react';
import DayPicker from 'react-day-picker';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
    this.getStats = this.getStats.bind(this);
    this.renderDay = this.renderDay.bind(this);
  }

  componentDidMount() {
    this.getStats();
  }

  getStats() {
    const request = async () => {
      await fetch('/api/stats')
        .then(result => {
          return result.json();
        })
        .then(entries => {
          const cop = [...entries];
          const day = [];
          const digitDay = [];
          const moodUrl = [];
          const month = [];
          const mood = [];
          const moodId = [];

          for (var z = 0; z < cop.length; z++) {
            day.push(cop[z].day);
            digitDay.push(cop[z].digitDay);
            moodUrl.push(cop[z].moodUrl);
            month.push(cop[z].month);
            mood.push(cop[z].mood);
            moodId.push(cop[z].moodId);
          }

          const newMood = [];

          for (var k = 0; k < mood.length; k++) {
            newMood.push([mood[k]]);
          }

          const dayz = [];
          for (var i = 0; i < digitDay.length; i++) {
            const peep = parseInt(digitDay[i]);
            dayz.push(peep);
          }
          const uniqueDayz = [...new Set(dayz)];
          const uniqueMood = [...new Set(mood)];

          var moodEmojeez = {};
          dayz.forEach((key, i) => (moodEmojeez[key] = moodUrl[i]));

          this.setState({
            render: true,
            moodId,
            mood,
            day,
            digitDay,
            moodUrl,
            month,
            moodEmojeez: moodEmojeez,
            uniqueDayz,
            uniqueMood,
            newMood
          });
        });
    };
    request();
  }

  renderDay(day) {
    let moods;
    if (!this.state.moodEmojeez) {
      moods = {
      };
    } else {
      var dayKey = this.state.uniqueDayz;
      var obj = {};
      dayKey.forEach((key, i) => (obj[key] = this.state.newMood[i]));
      moods = obj;
    }

    const date = day.getDate();
    const dateStyle = {
      position: 'absolute',
      color: 'white',
      bottom: 0,
      right: 0,
      fontSize: 20
    };
    const cellStyle = {
      height: 60,
      width: 30,
      position: 'relative'
    };
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {moods[date] &&
          moods[date].map((name, i) => (
            <div key={i}>
              <img src={'/images/moods/laugh-beam-regular.svg'}></img>{name}
            </div>
          ))}
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="calendar-body">
          <DayPicker
            canChangeMonth={false}
            renderDay={this.renderDay}
          />
        </div>
      </>
    );
  }
}

export default Calendar;
