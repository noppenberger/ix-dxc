import './styles/application.css';

import { Breakpoint } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxMenuSettings,
  IxMenuSettingsItem
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
        <IxMenuItem tab-icon="add-application">Add AAS server</IxMenuItem>
        <IxMenuItem tab-icon="list">Registered AAS servers</IxMenuItem>
        <IxMenuItem tab-icon="consistency-check">Compliance checks</IxMenuItem>
        <IxMenuItem tab-icon="info" slot="bottom">Terms and conditions</IxMenuItem>
        <IxMenuSettings>
          <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
          <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
        </IxMenuSettings>
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
