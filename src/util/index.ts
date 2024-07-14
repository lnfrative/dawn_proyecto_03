export function getTimeZoneFromSeconds(seconds: number) {
  const sign = seconds < 0 ? '-' : '+';
  const offsetHours = Math.abs(seconds) / 3600;
  const hours = Math.floor(offsetHours);
  const minutes = (offsetHours - hours) * 60;
  return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function formatNumberWithDots(num: number): string {
  let numStr = num.toString();
  let result = '';
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
      result = numStr[i] + result;
      count++;

      if (count === 3 && i !== 0) {
          result = '.' + result;
          count = 0;
      }
  }

  return result;
}

export function convertTimestampToTime(timestamp: number, timezoneOffset: number): string {
  const date = new Date((timestamp + timezoneOffset) * 1000); // Aplicar la zona horaria al timestamp
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}