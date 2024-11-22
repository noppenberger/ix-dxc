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
  IxPushCard
} from '@siemens/ix-react';


export default () => {
  
  return (
    <IxApplication>
      <IxApplicationHeader name="DxC Administration">
        <div slot="logo">
          <img className="logo" src="https://ix.siemens.io/img/logo.svg" alt="Siemens Industrial Experience" aria-label="Siemens Industrial Experience"/></div>
        <IxAvatar>
          <IxDropdownItem label="Action 1"></IxDropdownItem>
          <IxDropdownItem label="Action 2"></IxDropdownItem>
          <IxDropdownItem label="Action 3"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem tab-icon="home">Overview</IxMenuItem>
        <IxMenuItem tab-icon="add-application">Add AAS server</IxMenuItem>
        
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
        <IxPushCard
      icon="bulb"
      notification="99"
      heading="Heading content"
      subheading="Subheading"
      variant="insight"
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </IxPushCard>
      </IxContent>

    </IxApplication>
  );
};
