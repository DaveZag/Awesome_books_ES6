// get date from luxon
import { DateTime } from './luxon.min.js';
import { headTime } from './components.js';

export default function topTime() {
  headTime.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}