import dayjs from 'dayjs';
import 'dayjs/locale/es-us';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('es-us');
dayjs.extend(customParseFormat);
