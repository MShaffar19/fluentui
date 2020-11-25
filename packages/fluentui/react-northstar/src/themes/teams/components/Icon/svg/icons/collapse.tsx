import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg viewBox="2 2 16 16" role="presentation" className={classes.svg} focusable="false">
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M3.5 11H8.5C8.74546 11 8.94961 11.1769 8.99194 11.4101L9 11.5V16.5C9 16.7761 8.77614 17 8.5 17C8.25454 17 8.05039 16.8231 8.00806 16.5899L8 16.5V12.706L2.85355 17.8536C2.65829 18.0488 2.34171 18.0488 2.14645 17.8536C1.97288 17.68 1.9536 17.4106 2.08859 17.2157L2.14645 17.1464L7.292 12H3.5C3.25454 12 3.05039 11.8231 3.00806 11.5899L3 11.5C3 11.2545 3.17688 11.0504 3.41012 11.0081L3.5 11H8.5H3.5ZM17.8536 2.14645C18.0271 2.32001 18.0464 2.58944 17.9114 2.78431L17.8536 2.85355L12.706 8H16.5C16.7455 8 16.9496 8.17688 16.9919 8.41012L17 8.5C17 8.74546 16.8231 8.94961 16.5899 8.99194L16.5 9L11.4796 8.99959L11.4112 8.99213L11.309 8.96221L11.233 8.92281L11.1779 8.88242L11.1464 8.85355L11.109 8.81166L11.0667 8.74977L11.0376 8.69059L11.0166 8.62814L11.0111 8.60499C11.0038 8.5713 11 8.5361 11 8.5L11.0055 8.57392L11.0018 8.5428L11 3.5C11 3.22386 11.2239 3 11.5 3C11.7455 3 11.9496 3.17687 11.9919 3.41012L12 3.5V7.292L17.1464 2.14645C17.3417 1.95118 17.6583 1.95118 17.8536 2.14645Z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M3.75 11H8.25C8.6297 11 8.94349 11.2822 8.99315 11.6482L9 11.75V16.25C9 16.6642 8.66421 17 8.25 17C7.8703 17 7.55651 16.7178 7.50685 16.3518L7.5 16.25V13.56L3.03033 18.0303C2.73744 18.3232 2.26256 18.3232 1.96967 18.0303C1.7034 17.7641 1.6792 17.3474 1.89705 17.0538L1.96967 16.9697L6.438 12.5H3.75C3.3703 12.5 3.05651 12.2178 3.00685 11.8518L3 11.75C3 11.3703 3.28215 11.0565 3.64823 11.0068L3.75 11H8.25H3.75ZM18.0303 1.96967C18.2966 2.23594 18.3208 2.6526 18.1029 2.94621L18.0303 3.03033L13.06 8H16.25C16.6297 8 16.9435 8.28215 16.9932 8.64823L17 8.75C17 9.1297 16.7178 9.44349 16.3518 9.49315L16.25 9.5H11.25C10.8703 9.5 10.5565 9.21785 10.5068 8.85177L10.5 8.75V3.75C10.5 3.33579 10.8358 3 11.25 3C11.6297 3 11.9435 3.28215 11.9932 3.64823L12 3.75V6.938L16.9697 1.96967C17.2626 1.67678 17.7374 1.67678 18.0303 1.96967Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
