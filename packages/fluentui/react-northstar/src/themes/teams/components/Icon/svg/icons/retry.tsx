import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M3.06573 9.05001C3.5904 5.21978 7.12074 2.5401 10.951 3.06478C12.8937 3.3309 14.5398 4.36954 15.6231 5.82967L15.7494 6H12.5001C12.2239 6 12.0001 6.22386 12.0001 6.5C12.0001 6.77614 12.2239 7 12.5001 7H16.5001C16.7762 7 17.0001 6.77614 17.0001 6.5V2.5C17.0001 2.22386 16.7762 2 16.5001 2C16.2239 2 16.0001 2.22386 16.0001 2.5V4.70732C14.7758 3.3185 13.0653 2.34507 11.0867 2.07403C6.70929 1.4744 2.67461 4.53689 2.07498 8.91429C1.47535 13.2917 4.53784 17.3264 8.91524 17.926C13.2926 18.5256 17.3273 15.4631 17.9269 11.0857C18.0011 10.5445 18.0192 10.0079 17.9857 9.48211C17.9681 9.20653 17.7304 8.9974 17.4548 9.015C17.1792 9.03261 16.9701 9.27028 16.9877 9.54586C17.017 10.0055 17.0012 10.4752 16.9362 10.95C16.4115 14.7802 12.8812 17.4599 9.05095 16.9353C5.22073 16.4106 2.54105 12.8802 3.06573 9.05001Z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M10.6276 2.0247C6.22292 1.67804 2.37123 4.96771 2.02457 9.37236C1.67792 13.777 4.96758 17.6287 9.37224 17.9754C13.7769 18.322 17.6286 15.0324 17.9752 10.6277C17.9976 10.3442 18.0038 10.0397 17.9948 9.73856C17.9824 9.32453 17.6367 8.99896 17.2227 9.01137C16.8086 9.02378 16.4831 9.36947 16.4955 9.7835C16.5029 10.0321 16.4978 10.2826 16.4799 10.51C16.1982 14.0888 13.0687 16.7617 9.48993 16.48C5.91114 16.1983 3.23829 13.0688 3.51995 9.49005C3.8016 5.91127 6.93111 3.23842 10.5099 3.52008C12.2462 3.65672 13.8156 4.47053 14.9222 5.75475L15.1258 6.00263L12.747 6.0035L12.6452 6.01035C12.2791 6.06001 11.997 6.37381 11.997 6.7535C11.997 7.1332 12.2791 7.44699 12.6452 7.49666L12.747 7.5035H16.7469L16.8487 7.49666C17.1815 7.45151 17.4449 7.18807 17.4901 6.85527L17.4969 6.7535V2.7535L17.4901 2.65173C17.4449 2.31894 17.1815 2.0555 16.8487 2.01035L16.7469 2.0035L16.6451 2.01035C16.3124 2.0555 16.0489 2.31894 16.0038 2.65173L15.9969 2.7535L15.9981 4.70625C14.6402 3.16635 12.7322 2.19034 10.6276 2.0247Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
