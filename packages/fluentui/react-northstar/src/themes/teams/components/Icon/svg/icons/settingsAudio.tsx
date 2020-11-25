import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg className={classes.svg} viewBox="2 2 16 16" role="presentation" focusable="false">
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.95 5C14.7184 3.85888 13.7095 3 12.5 3C11.2905 3 10.2816 3.85888 10.05 5H2.5C2.22386 5 2 5.22386 2 5.5C2 5.77614 2.22386 6 2.5 6H10.05C10.2816 7.14112 11.2905 8 12.5 8C13.7297 8 14.752 7.11217 14.961 5.94254C14.9575 5.96177 14.9539 5.98093 14.95 6H17.5C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5H14.95ZM12.5 7C13.3284 7 14 6.32843 14 5.5C14 4.67157 13.3284 4 12.5 4C11.6716 4 11 4.67157 11 5.5C11 6.32843 11.6716 7 12.5 7Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.94999 14C9.71836 12.8589 8.70948 12 7.5 12C6.29052 12 5.28164 12.8589 5.05001 14H2.5C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H5.05001C5.28164 16.1411 6.29052 17 7.5 17C8.70948 17 9.71836 16.1411 9.94999 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H9.94999ZM7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16Z"
        />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M17.25 5H14.8855C14.567 3.98572 13.6194 3.25 12.5 3.25C11.3806 3.25 10.433 3.98572 10.1145 5H2.75C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H10.1145C10.433 7.51428 11.3806 8.25 12.5 8.25C13.6194 8.25 14.567 7.51428 14.8855 6.5H17.25C17.6642 6.5 18 6.16421 18 5.75C18 5.33579 17.6642 5 17.25 5Z" />
        <path d="M2.75 13.5C2.33579 13.5 2 13.8358 2 14.25C2 14.6642 2.33579 15 2.75 15H5.11445C5.43302 16.0143 6.38059 16.75 7.5 16.75C8.61941 16.75 9.56698 16.0143 9.88555 15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H9.88555C9.56698 12.4857 8.61941 11.75 7.5 11.75C6.38059 11.75 5.43302 12.4857 5.11445 13.5H2.75Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
