import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResumeSectionList } from "./resumeSection/ResumeSectionList";
import { ResumeSectionCreate } from "./resumeSection/ResumeSectionCreate";
import { ResumeSectionEdit } from "./resumeSection/ResumeSectionEdit";
import { ResumeSectionShow } from "./resumeSection/ResumeSectionShow";
import { DashboardSettingsList } from "./dashboardSettings/DashboardSettingsList";
import { DashboardSettingsCreate } from "./dashboardSettings/DashboardSettingsCreate";
import { DashboardSettingsEdit } from "./dashboardSettings/DashboardSettingsEdit";
import { DashboardSettingsShow } from "./dashboardSettings/DashboardSettingsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ResumeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ResumeSection"
          list={ResumeSectionList}
          edit={ResumeSectionEdit}
          create={ResumeSectionCreate}
          show={ResumeSectionShow}
        />
        <Resource
          name="DashboardSettings"
          list={DashboardSettingsList}
          edit={DashboardSettingsEdit}
          create={DashboardSettingsCreate}
          show={DashboardSettingsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
