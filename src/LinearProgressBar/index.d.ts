import * as React from 'react';

export interface LinearProgressBarProps {
  error?: boolean;
  errorMessage?: string;
  light?: boolean;
  showProgressIndication?: boolean;
  value?: number | string;
  shouldLoadAsync?: boolean;
  skin?: 'standard' | 'success';
}

export default class LinearProgressBar extends React.PureComponent<
  LinearProgressBarProps
> {}
