import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L4.89045 5.59754L2.36172 8.52303C2.13624 8.78549 2 9.12684 2 9.5V12.5C2 13.8807 3.11929 15 4.5 15H6.5C7.88071 15 9 13.8807 9 12.5V11H10.2929L11 11.7071V12.5C11 13.8807 12.1193 15 13.5 15H14.2929L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645ZM7.29291 8H4.13561L5.59943 6.30652L7.29291 8ZM8 9.5V12.5C8 13.3284 7.32843 14 6.5 14H4.5C3.67157 14 3 13.3284 3 12.5V9.5C3 9.22386 3.22386 9 3.5 9H7.5C7.77614 9 8 9.22386 8 9.5Z" />
        <path d="M12 9.87866L11.095 8.97362C11.3081 8.40485 11.8568 8 12.5 8H15.8571L13.5701 5.34706C13.3801 5.1267 13.1036 5 12.8127 5H12C11.7239 5 11.5 4.77614 11.5 4.5C11.5 4.22386 11.7239 4 12 4H12.8127C13.3945 4 13.9476 4.25341 14.3275 4.69412L17.5324 8.41178C17.8204 8.68511 18 9.07158 18 9.5V12.5C18 13.4157 17.5077 14.2164 16.7733 14.6519L16.0264 13.905C16.5952 13.6919 17 13.1432 17 12.5V9.5C17 9.37429 16.9536 9.25941 16.877 9.17155L16.8713 9.17647L16.8165 9.1129C16.7303 9.04234 16.6201 9 16.5 9H12.5C12.2239 9 12 9.22386 12 9.5V9.87866Z" />
        <path d="M7.12331 5.00198L6.31908 4.19774C6.58658 4.06904 6.88245 4 7.18617 4H8C8.27614 4 8.5 4.22386 8.5 4.5C8.5 4.77614 8.27614 5 8 5H7.18617C7.16514 5 7.14417 5.00066 7.12331 5.00198Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L4.89045 5.59754L2.36172 8.52303C2.13624 8.78549 2 9.12684 2 9.5V12.5C2 13.8807 3.11929 15 4.5 15H6.5C7.88071 15 9 13.8807 9 12.5V11H10.2929L11 11.7071V12.5C11 13.8807 12.1193 15 13.5 15H14.2929L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645ZM7.29291 8H4.13561L5.59943 6.30652L7.29291 8Z" />
        <path d="M16.7733 14.6519L11.095 8.97362C11.3081 8.40485 11.8568 8 12.5 8H15.8571L13.5701 5.34706C13.3801 5.1267 13.1036 5 12.8127 5H12C11.7239 5 11.5 4.77614 11.5 4.5C11.5 4.22386 11.7239 4 12 4H12.8127C13.3945 4 13.9476 4.25341 14.3275 4.69412L17.5324 8.41178C17.8204 8.68511 18 9.07158 18 9.5V12.5C18 13.4157 17.5077 14.2164 16.7733 14.6519Z" />
        <path d="M6.31908 4.19774L7.12331 5.00198C7.14417 5.00066 7.16514 5 7.18617 5H8C8.27614 5 8.5 4.77614 8.5 4.5C8.5 4.22386 8.27614 4 8 4H7.18617C6.88245 4 6.58658 4.06904 6.31908 4.19774Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
