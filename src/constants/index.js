import AusFlag from '@/assets/flags/au.svg';
import InFlag from '@/assets/flags/in.svg';
import UkFlag from '@/assets/flags/uk.svg';
import UsFlag from '@/assets/flags/us.svg';

export default {
  markersData: [
    {
      id: 1,
      code: 'UK',
      displayName: 'London',
      refCode: 'UK_ref',
      tzDiff: '0.0',
      tz: 'UTC',
      text: '&#9671;',
      styleName: 'marker__uk',
      flagSrc: UkFlag,
    },
    {
      id: 2,
      code: 'US',
      displayName: 'New York',
      refCode: 'US_ref',
      tzDiff: '-5.0',
      tz: 'America/New_York',
      text: '&#9671;',
      styleName: 'marker__us',
      flagSrc: UsFlag,
    },
    {
      id: 3,
      code: 'IN',
      displayName: 'Mumbai',
      refCode: 'IN_ref',
      tzDiff: '5.5',
      tz: 'Asia/Kolkata',
      text: '&#9671;',
      styleName: 'marker__in',
      flagSrc: InFlag,
    },
    {
      id: 4,
      code: 'AU',
      displayName: 'Sydney',
      refCode: 'AU_ref',
      tzDiff: '9.5',
      tz: 'Australia/Brisbane',
      text: '&#9671;',
      styleName: 'marker__au',
      flagSrc: AusFlag,
    },
  ]
}