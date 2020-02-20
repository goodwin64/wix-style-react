import * as React from 'react';

export interface ComposerHeaderProps {
  dataHook?: string;
  backButtonValue?: React.ReactNode;
  onBackClick?: React.MouseEventHandler<HTMLElement>;
  size?: 'small' | 'medium';
  dropShadow?: boolean;
}

export default class ComposerHeader extends React.Component<ComposerHeaderProps> {
  static SaveStatus: typeof ComposerHeaderSaveStatus;
  static Actions: typeof ComposerHeaderActions;
  static MainActions: typeof ComposerHeaderMainActions;
}

declare const ComposerHeaderSaveStatus: React.SFC<ComposerHeaderSaveStatusProps>;
interface ComposerHeaderSaveStatusProps {
  saveStatusValue: string;
  saveStatusError?: string;
  dataHook?: string;
  size?: 'small' | 'medium';
}

declare const ComposerHeaderActions: React.SFC;
declare const ComposerHeaderMainActions: React.SFC;
