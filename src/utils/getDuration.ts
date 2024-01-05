export function getDuration(duration: string) {
  let time: string = '';
  const regH = new RegExp(/(\d+)(?=\s*H)/);
  const regM = new RegExp(/(\d+)(?=\s*M)/);
  const regS = new RegExp(/(\d+)(?=\s*S)/);

  const hours = duration.match(regH);
  if (hours !== null) {
    if (hours[0].length < 2) {
      time += '0' + hours[0] + ':';
    } else {
      time += hours[0] + ':';
    }
  }

  const minutes = duration.match(regM);
  if (minutes !== null) {
    if (minutes[0].length < 2) {
      time += '0' + minutes[0] + ':';
    } else {
      time += minutes[0] + ':';
    }
  } else {
    time += '00:';
  }

  const seconds = duration.match(regS);
  if (seconds !== null) {
    if (seconds[0].length < 2) {
      time += '0' + seconds[0];
    } else {
      time += seconds[0];
    }
  }

  if (!hours && !minutes && !seconds) {
    time = 'stream';
  }

  return time;
}
