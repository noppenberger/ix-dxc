import './styles/application.css';

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
  IxMenuSettingsItem,
  IxCardList,
  IxPushCard,
} from '@siemens/ix-react';


export default () => {
  
  return (
    <IxApplication>
      <IxApplicationHeader name="DxC Administration">
        <div slot="logo">
          <img className="logo" src="https://ix.siemens.io/img/logo.svg" alt="Siemens DxC Administration" aria-label="Siemens DxC Administration"/></div>
        <IxAvatar>
          <IxDropdownItem icon="user-profile" label="Profile"></IxDropdownItem>
          <IxDropdownItem icon="log-out" label="Logout"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem tab-icon="home">Overview</IxMenuItem>
        <IxMenuItem tab-icon="add-application">Add AAS server</IxMenuItem>
        <IxMenuItem tab-icon="list">Manage AAS servers</IxMenuItem>
        <IxMenuItem tab-icon="consistency-check">Compliance checks</IxMenuItem>
        <IxMenuItem tab-icon="analyze">Server analytics</IxMenuItem>

        <IxMenuItem tab-icon="info" slot="bottom">Terms and conditions</IxMenuItem> 
        <IxMenuSettings>
          <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
          <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
        </IxMenuSettings>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          header-title=""
        ></IxContentHeader>

<IxCardList label="Overview" showAllCount={4} listStyle={'stack'}>
        <IxPushCard
          icon="project-server"
          notification="3"
          heading="AAS Servers registered"
          subheading="Server registry"
          variant="notification"
        ></IxPushCard>
        <IxPushCard
          icon="history"
          notification="1 hour ago"
          heading="Last crawling"
          subheading="Database up to date"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon="consistency-check"
          notification="Compliance"
          heading="Checks successful"
          subheading="No issues found"
          variant="success"
        ></IxPushCard>
        <IxPushCard
          icon="optimize"
          notification="Analytics"
          heading="Checks successful"
          subheading="Subheading"
          variant="success"
        ></IxPushCard>
      </IxCardList>

      </IxContent>

    </IxApplication>
  );
};
