import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";
import {CalendarProps} from "../Calendar";

export type DatePickerState = 'error' | 'warning' | 'loading';
export interface DatePickerProps extends WixComponentProps, CalendarProps {
  customInput?: React.ReactNode;
  inputProps?: {};
  dateFormat?: string | Function;
  locale?: string | {distanceInWords?: {}, format?: {},}
  disabled?: boolean;
  inputDataHook?: string;
  calendarDataHook?: string;
  placeholderText?: string;
  rtl?: boolean;
  value?: {};
  isOpen?: boolean;
  initialOpen?: boolean;
  status?: DatePickerState;
  statusMessage?: React.ReactNode;
  width?: number | string;
  zIndex?: number;
}

export default class DatePicker extends React.PureComponent<DatePickerProps> {
}
