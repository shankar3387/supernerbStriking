import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';

const Dashboard = lazy(() => import('./dashboard'));
const Ecommerce = lazy(() => import('./ecommerce'));
const Charts = lazy(() => import('./charts'));
const Pages = lazy(() => import('./pages'));
const Components = lazy(() => import('./components'));
const Maps = lazy(() => import('./maps'));
const Icons = lazy(() => import('./icons'));
const Projects = lazy(() => import('./projects'));
const Calendars = lazy(() => import('../../container/Calendar'));
const Tables = lazy(() => import('../../container/table/Table'));
const Forms = lazy(() => import('../../container/forms/Forms'));
const Inbox = lazy(() => import('../../container/email/Email'));
const Chat = lazy(() => import('../../container/chat/ChatApp'));
const Settings = lazy(() => import('../../container/profile/settings/Settings'));
const Firebase = lazy(() => import('./firebase'));

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route path={path} component={Dashboard} />
        <Route path={`${path}/ecommerce`} component={Ecommerce} />
        <Route path={`${path}/charts`} component={Charts} />
        <Route path={`${path}/pages`} component={Pages} />
        <Route path={`${path}/components`} component={Components} />
        <Route path={`${path}/maps`} component={Maps} />
        <Route path={`${path}/icons`} component={Icons} />
        <Route path={`${path}/project`} component={Projects} />

        <Route path={`${path}/calendar`} component={Calendars} />
        <Route path={`${path}/tables`} component={Tables} />
        <Route path={`${path}/forms`} component={Forms} />

        <Route path={`${path}/email/:page`} component={Inbox} />
        <Route path={`${path}/firestore`} component={Firebase} />
        <Route path={`${path}/main/chat`} component={Chat} />
        <Route path={`${path}/profile/settings`} component={Settings} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
