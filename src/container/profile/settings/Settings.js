import React, { lazy, Suspense } from 'react';
import { Row, Col, Upload, Spin, message } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import { ProfileAuthorBox, SettingWrapper } from './overview/style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const Profile = lazy(() => import('./overview/Profile'));
const Account = lazy(() => import('./overview/Account'));
const Password = lazy(() => import('./overview/Passwoard'));
const SocialProfiles = lazy(() => import('./overview/SocialProfile'));
const Notification = lazy(() => import('./overview/Notification'));

const Settings = ({ match }) => {
  const { path } = match;
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <PageHeader
        ghost
        title="Profile Settings"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />

      <Main>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <ProfileAuthorBox>
              <Cards headless>
                <div className="author-info">
                  <figure>
                    <img src={require('../../../static/img/users/1.png')} alt="" />

                    <Upload>
                      <Link to="#">
                        <FeatherIcon icon="camera" size={16} />
                      </Link>
                    </Upload>
                  </figure>
                  <figcaption>
                    <div className="info">
                      <Heading as="h4">Duran Clayton</Heading>
                      <p>UI/UX Designer</p>
                    </div>
                  </figcaption>
                </div>
                <nav className="settings-menmulist">
                  <ul>
                    <li>
                      <NavLink to={`${path}/profile`}>
                        <FeatherIcon icon="user" size={14} />
                        Edit Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/account`}>
                        <FeatherIcon icon="settings" size={14} />
                        Account Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/password`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-key"
                        >
                          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                        </svg>
                        Change Password
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/social`}>
                        <FeatherIcon icon="users" size={14} />
                        Social Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/notification`}>
                        <FeatherIcon icon="bell" size={14} />
                        Notification
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </Cards>
            </ProfileAuthorBox>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <SettingWrapper>
              <div className="cover-image">
                <img
                  style={{ width: '100%' }}
                  src={require('../../../static/img/profile/cover-img.png')}
                  alt="banner"
                />
                <Upload {...props}>
                  <Link to="#">
                    <FeatherIcon icon="camera" size={16} /> Change Cover
                  </Link>
                </Upload>
              </div>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route exact path={`${path}`} component={Profile} />
                  <Route exact path={`${path}/profile`} component={Profile} />
                  <Route exact path={`${path}/account`} component={Account} />
                  <Route exact path={`${path}/password`} component={Password} />
                  <Route exact path={`${path}/social`} component={SocialProfiles} />
                  <Route exact path={`${path}/notification`} component={Notification} />
                </Suspense>
              </Switch>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

Settings.propTypes = {
  match: propTypes.object,
};

export default Settings;
