import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    this.getStats();
  }

  getStats() {
    fetch('/api/stats')
      .then(result => {
        return result.json();
      })
      .then(entries => {
        const cop = [...entries];
        const eventsId = [];
        const digitDay = [];
        const event = [];
        const moodUrl = [];
        const eventUrl = [];
        const month = [];
        const mood = [];
        const moodId = [];
        const moodIdCount = [];
        const eventIdCount = [];

        for (var z = 0; z < cop.length; z++) {
          eventsId.push(cop[z].eventsId);
          digitDay.push(cop[z].digitDay);
          event.push(cop[z].event);
          moodUrl.push(cop[z].moodUrl);
          eventUrl.push(cop[z].eventUrl);
          month.push(cop[z].month);
          mood.push(cop[z].mood);
          moodId.push(cop[z].moodId);
        }

        const uniqueMood = [...new Set(mood)];
        const uniqueMoodId = [...new Set(moodId)];
        const uniqueEvent = [...new Set(event)];
        const uniqueEventId = [...new Set(eventsId)];

        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

        for (var j = 0; j < uniqueMoodId.length; j++) {
          const val = uniqueMoodId[j];
          var countM = countOccurrences(moodId, val);
          moodIdCount.push(countM);
        }
        for (var L = 0; L < uniqueEventId.length; L++) {
          const val = uniqueEventId[L];
          var count = countOccurrences(eventsId, val);
          eventIdCount.push(count);
        }

        this.setState({
          moodId,
          mood,
          uniqueMoodId,
          moodIdCount,
          uniqueMood,
          event,
          eventsId,
          uniqueEventId,
          eventIdCount,
          uniqueEvent,
          digitDay,
          month
        });

      });
  }

  render() {
    var moodGRAFz = {
      labels: this.state.uniqueMood,
      aspectRatio: 1,
      datasets: [
        {
          label: 'Mood Count',
          backgroundColor: [
            '#FFB800',
            '#24FF00',
            '#414141',
            '#3A89FF',
            '#FF0000'
          ],
          hoverBackgroundColor: [
            '#B28100',
            '#0F6900',
            '#0F0F0F',
            '#1C4F9A',
            '#AF0000'
          ],
          data: this.state.moodIdCount
        }
      ]
    };
    var eventGRAFz = {
      labels: this.state.uniqueEvent,
      datasets: [
        {
          type: 'bar',
          backgroundColor: [
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF'
          ],
          hoverBackgroundColor: [
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)',
            'rgba(255, 255, 255, 0.466)'

          ],
          data: this.state.eventIdCount
        }
      ]
    };
    return (
      <div className="stats-container d-flex flex-column justify-content-around align-items-center" >
        <Doughnut
          data={moodGRAFz}
          options={{
            title: {
              display: true,
              text: 'Mood Count',
              fontSize: 24,
              fontColor: '#FFFFFF',
              aspectRatio: 1
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
        <Bar
          data={eventGRAFz}
          options={{
            title: {
              display: true,
              text: 'Event Count',
              fontSize: 24,
              fontColor: '#FFFFFF'
            },
            aspectRatio: 1,
            legend: {
              display: false
            }
          }}
        />
      </div >
    );
  }
}

export default Stats;
