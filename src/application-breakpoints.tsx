import './styles/application.css';

import { Breakpoint } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxIconButton,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

import { useState } from 'react';

export default () => {
  const [breakpoints, setBreakpoints] = useState<Breakpoint[]>(['md']);

  return (
    <IxApplication breakpoints={breakpoints}>
      <IxApplicationHeader name="Data Xchange DxC Administration">

        <IxAvatar>
          <IxDropdownItem label="Action 1"></IxDropdownItem>
          <IxDropdownItem label="Action 2"></IxDropdownItem>
          <IxDropdownItem label="Action 3"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          header-title="Choose breakpoint"
        ></IxContentHeader>
        
      </IxContent>
    </IxApplication>
  );
};
