// get date from luxon
import { DateTime } from './luxon.js';
import { headTime } from './components.js';

export default function topTime() {
  const dateNow = DateTime.now();
  headTime.innerText = dateNow.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}