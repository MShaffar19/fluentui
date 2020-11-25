import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path d="M3.13196 9.16156C2.94578 9.3655 2.96017 9.68176 3.16412 9.86794C3.36806 10.0541 3.68431 10.0397 3.87049 9.83578L9.50122 3.66792L9.50122 17.4987C9.50122 17.7748 9.72508 17.9987 10.0012 17.9987C10.2774 17.9987 10.5012 17.7748 10.5012 17.4987L10.5012 3.67081L16.1293 9.83578C16.3155 10.0397 16.6317 10.0541 16.8357 9.86794C17.0396 9.68176 17.054 9.3655 16.8678 9.16156L10.5538 2.24521C10.426 2.10526 10.2585 2.02543 10.0854 2.00572C10.058 2.00109 10.0299 1.99867 10.0012 1.99867C9.97435 1.99867 9.94797 2.00079 9.92225 2.00487C9.74634 2.02305 9.57568 2.10316 9.446 2.24521L3.13196 9.16156Z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
