import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AboutUsPageList } from "./aboutUsPage/AboutUsPageList";
import { AboutUsPageCreate } from "./aboutUsPage/AboutUsPageCreate";
import { AboutUsPageEdit } from "./aboutUsPage/AboutUsPageEdit";
import { AboutUsPageShow } from "./aboutUsPage/AboutUsPageShow";
import { HomePageList } from "./homePage/HomePageList";
import { HomePageCreate } from "./homePage/HomePageCreate";
import { HomePageEdit } from "./homePage/HomePageEdit";
import { HomePageShow } from "./homePage/HomePageShow";
import { ExternalLinkPageList } from "./externalLinkPage/ExternalLinkPageList";
import { ExternalLinkPageCreate } from "./externalLinkPage/ExternalLinkPageCreate";
import { ExternalLinkPageEdit } from "./externalLinkPage/ExternalLinkPageEdit";
import { ExternalLinkPageShow } from "./externalLinkPage/ExternalLinkPageShow";
import { ServicesPageList } from "./servicesPage/ServicesPageList";
import { ServicesPageCreate } from "./servicesPage/ServicesPageCreate";
import { ServicesPageEdit } from "./servicesPage/ServicesPageEdit";
import { ServicesPageShow } from "./servicesPage/ServicesPageShow";
import { NewsPageList } from "./newsPage/NewsPageList";
import { NewsPageCreate } from "./newsPage/NewsPageCreate";
import { NewsPageEdit } from "./newsPage/NewsPageEdit";
import { NewsPageShow } from "./newsPage/NewsPageShow";
import { PartnerList } from "./partner/PartnerList";
import { PartnerCreate } from "./partner/PartnerCreate";
import { PartnerEdit } from "./partner/PartnerEdit";
import { PartnerShow } from "./partner/PartnerShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { ContactUsPageList } from "./contactUsPage/ContactUsPageList";
import { ContactUsPageCreate } from "./contactUsPage/ContactUsPageCreate";
import { ContactUsPageEdit } from "./contactUsPage/ContactUsPageEdit";
import { ContactUsPageShow } from "./contactUsPage/ContactUsPageShow";
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
        title={"CompanyWebsiteService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AboutUsPage"
          list={AboutUsPageList}
          edit={AboutUsPageEdit}
          create={AboutUsPageCreate}
          show={AboutUsPageShow}
        />
        <Resource
          name="HomePage"
          list={HomePageList}
          edit={HomePageEdit}
          create={HomePageCreate}
          show={HomePageShow}
        />
        <Resource
          name="ExternalLinkPage"
          list={ExternalLinkPageList}
          edit={ExternalLinkPageEdit}
          create={ExternalLinkPageCreate}
          show={ExternalLinkPageShow}
        />
        <Resource
          name="ServicesPage"
          list={ServicesPageList}
          edit={ServicesPageEdit}
          create={ServicesPageCreate}
          show={ServicesPageShow}
        />
        <Resource
          name="NewsPage"
          list={NewsPageList}
          edit={NewsPageEdit}
          create={NewsPageCreate}
          show={NewsPageShow}
        />
        <Resource
          name="Partner"
          list={PartnerList}
          edit={PartnerEdit}
          create={PartnerCreate}
          show={PartnerShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="ContactUsPage"
          list={ContactUsPageList}
          edit={ContactUsPageEdit}
          create={ContactUsPageCreate}
          show={ContactUsPageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
