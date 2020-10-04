import React, { useState, useEffect } from 'react';
import { Row, Col, Radio, Table, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Focard, CardBarChart, CardGroup, SocialMediaWrapper, LineChartWrapper, ChartContainer } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { SocialMediaContent } from '../../components/social-media/overview';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import {
  forcastOverviewGetData,
  forcastOverviewFilterData,
  youtubeSubscribeFilterData,
  youtubeSubscribeGetData,
  socialTrafficGetData,
  socialTrafficFilterData,
  twitterOverviewGetData,
  twitterOverviewFilterData,
  instagramOverviewGetData,
  instagramOverviewFilterData,
  linkdinOverviewGetData,
  linkdinOverviewFilterData,
} from '../../redux/chartContent/actionCreator';
import { chartLinearGradient, customTooltips } from '../../components/utilities/utilities';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    forcastOverviewState,
    foIsLoading,
    youtubeSubscribeState,
    yuIsLoading,
    socialTrafficState,
    twitterOverviewState,
    twIsLoading,
    instagramOverviewState,
    inIsLoading,
    linkdinOverviewState,
    liIsLoading,
  } = useSelector(state => {
    return {
      forcastOverviewState: state.chartContent.forcastData,
      twitterOverviewState: state.chartContent.twitterOverviewData,
      twIsLoading: state.chartContent.twLoading,
      instagramOverviewState: state.chartContent.instagramOverviewData,
      inIsLoading: state.chartContent.inLoading,
      foIsLoading: state.chartContent.foLoading,
      youtubeSubscribeState: state.chartContent.youtubeSubscribeData,
      yuIsLoading: state.chartContent.yuLoading,
      socialTrafficState: state.chartContent.socialTrafficData,
      soIsLoading: state.chartContent.soLoading,
      linkdinOverviewState: state.chartContent.linkdinOverviewData,
      liIsLoading: state.chartContent.liLoading,
    };
  });

  const [state, setState] = useState({
    youtubeSubscribeTabActive: 'year',
    twitterOverviewTabActive: 'month',
    instagramOverviewTabActive: 'month',
    linkdinOverviewTabActive: 'month',
  });

  useEffect(() => {
    if (forcastOverviewGetData) {
      dispatch(twitterOverviewGetData());
      dispatch(forcastOverviewGetData());
      dispatch(youtubeSubscribeGetData());
      dispatch(socialTrafficGetData());
      dispatch(instagramOverviewGetData());
      dispatch(linkdinOverviewGetData());
    }
  }, [dispatch]);

  const chartOptions = {
    tooltips: {
      yAlign: 'bottom',
      xAlign: 'center',
      mode: 'nearest',
      position: 'nearest',
      intersect: false,
      enabled: false,
      custom: customTooltips,
      callbacks: {
        labelColor(tooltipItem, chart) {
          return {
            backgroundColor: '#20C997',
          };
        },
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    layout: {
      padding: {
        left: '0',
        right: 8,
        top: 15,
        bottom: -10,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            color: '#e5e9f2',
            borderDash: [8, 4],
            zeroLineColor: 'transparent',
            beginAtZero: true,
          },
          ticks: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            color: '#e5e9f2',
            borderDash: [8, 4],
            zeroLineColor: 'transparent',
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  const moreContent = (
    <>
      <NavLink to="#">
        <span>2 years</span>
      </NavLink>
      <NavLink to="#">
        <span>3 years</span>
      </NavLink>
      <NavLink to="#">
        <span>4 years</span>
      </NavLink>
    </>
  );

  const youtubeSubscribeDatasets = youtubeSubscribeState !== null && [
    {
      data: youtubeSubscribeState.gained,
      backgroundColor: '#5F63F280',
      hoverBackgroundColor: '#5F63F2',
      label: 'Gained',
      maxBarThickness: 10,
      barThickness: 12,
    },
    {
      data: youtubeSubscribeState.lost,
      backgroundColor: '#FF4D4F80',
      hoverBackgroundColor: '#FF4D4F',
      label: 'Lost',
      maxBarThickness: 10,
      barThickness: 12,
    },
  ];

  const handleActiveChangeYoutube = value => {
    setState({
      ...state,
      youtubeSubscribeTabActive: value,
    });
    dispatch(youtubeSubscribeFilterData(value));
  };

  const handleActiveChangeTwitter = value => {
    setState({
      ...state,
      twitterOverviewTabActive: value,
    });
    return dispatch(twitterOverviewFilterData(value));
  };

  const handleActiveChangeInstagram = value => {
    setState({
      ...state,
      instagramOverviewTabActive: value,
    });
    return dispatch(instagramOverviewFilterData(value));
  };

  const handleActiveChangeLinkdin = value => {
    setState({
      ...state,
      linkdinOverviewTabActive: value,
    });
    dispatch(linkdinOverviewFilterData(value));
  };

  const trafficTableColumns = [
    {
      dataIndex: 'network',
      key: 'network',
    },
    {
      title: 'Acquisition',
      dataIndex: 'users',
      key: 'users',
    },
    {
      dataIndex: 'newUsers',
      key: 'newUsers',
    },
    {
      dataIndex: 'sessions',
      key: 'sessions',
    },
    {
      title: 'Behavior',
      dataIndex: 'bounceRate',
      key: 'bounceRate',
    },
    {
      dataIndex: 'pages',
      key: 'pages',
    },
    {
      dataIndex: 'avg',
      key: 'avg',
    },
  ];

  const { facebook, twitter, youtube, linkdin, pinterest, google } = socialTrafficState !== null && socialTrafficState;

  const trafficTableData =
    socialTrafficState !== null
      ? [
          {
            key: '1',
            network: <span className="traffic-title">Social Network</span>,
            users: <span className="traffic-title">Users</span>,
            newUsers: <span className="traffic-title">New Users</span>,
            sessions: <span className="traffic-title">Sessions</span>,
            bounceRate: <span className="traffic-title">Bounce Rate</span>,
            pages: <span className="traffic-title">Pages / Session</span>,
            avg: <span className="traffic-title">Avg. Session Duration</span>,
          },
          {
            key: '2',
            network: (
              <Link to="#">
                <span className="social-name">Facebook</span>
              </Link>
            ),
            users: facebook.users,
            newUsers: facebook.newUsers,
            sessions: facebook.session,
            bounceRate: facebook.bounceRate,
            pages: facebook.pagesSession,
            avg: facebook.avg,
          },
          {
            key: '3',
            network: (
              <Link to="#">
                <span className="social-name">Twitter</span>
              </Link>
            ),
            users: twitter.users,
            newUsers: twitter.newUsers,
            sessions: twitter.session,
            bounceRate: twitter.bounceRate,
            pages: twitter.pagesSession,
            avg: twitter.avg,
          },
          {
            key: '4',
            network: (
              <Link to="#">
                <span className="social-name">Linkdin</span>
              </Link>
            ),
            users: linkdin.users,
            newUsers: linkdin.newUsers,
            sessions: linkdin.session,
            bounceRate: linkdin.bounceRate,
            pages: linkdin.pagesSession,
            avg: linkdin.avg,
          },
          {
            key: '5',
            network: (
              <Link to="#">
                <span className="social-name">Youtube</span>
              </Link>
            ),
            users: youtube.users,
            newUsers: youtube.newUsers,
            sessions: youtube.session,
            bounceRate: youtube.bounceRate,
            pages: youtube.pagesSession,
            avg: youtube.avg,
          },
          {
            key: '6',
            network: (
              <Link to="#">
                <span className="social-name">Pinterest</span>
              </Link>
            ),
            users: pinterest.users,
            newUsers: pinterest.newUsers,
            sessions: pinterest.session,
            bounceRate: pinterest.bounceRate,
            pages: pinterest.pagesSession,
            avg: pinterest.avg,
          },
          {
            key: '7',
            network: (
              <Link to="#">
                <span className="social-name">Google+</span>
              </Link>
            ),
            users: google.users,
            newUsers: google.newUsers,
            sessions: google.session,
            bounceRate: google.bounceRate,
            pages: google.pagesSession,
            avg: google.avg,
          },
        ]
      : [];

  const forcastOverview = e => {
    dispatch(forcastOverviewFilterData(e.target.value));
  };

  const socialTraffic = e => {
    dispatch(socialTrafficFilterData(e.target.value));
  };

  const lineChartPointStyle = {
    borderColor: '#C6D0DC',
    borderWidth: 2,
    fill: false,
    pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    pointBackgroundColor: [
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      '#20C997',
    ],
    pointHoverBackgroundColor: '#20C997',
    pointHoverRadius: 6,
    pointBorderColor: 'transparent',
  };

  return (
    <>
      <PageHeader
        ghost
        title="Social Media Dashboard"
        buttons={[
          <div key="6" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row justify="center" gutter={25}>
          <Col xxl={8} lg={24} xs={24}>
            <SocialMediaWrapper>
              <Cards title="Social Media Overview" size="large">
                <Row gutter={25}>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="facebook" bgColor="#2366B8" title="5,461" subTitle="Likes" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="twitter" bgColor="#00ABE4" title="5,461" subTitle="Followers" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent
                      icon="instagram"
                      bgColor="linear-gradient(to top, #ffc107 0%,#f44336 31%,#9c27b0 65%,#9c27b0 100%)"
                      title="5,461"
                      subTitle="Followers"
                    />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="youtube-play" bgColor="#E32212" title="5,461" subTitle="Subscribers" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="pinterest-p" bgColor="#E32212" title="5,461" subTitle="Followers" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="linkedin" bgColor="#007CBC" title="5,461" subTitle="Followers" />
                  </Col>
                </Row>
              </Cards>
            </SocialMediaWrapper>
          </Col>

          <Col xxl={16} xs={24}>
            <CardGroup>
              <div className="forcast-overview">
                {forcastOverviewState !== null && (
                  <Cards
                    isbutton={
                      <div className="card-radio">
                        <Radio.Group onChange={forcastOverview} defaultValue="today">
                          <Radio.Button value="today">Today</Radio.Button>
                          <Radio.Button value="week">Week</Radio.Button>
                          <Radio.Button value="month">Month</Radio.Button>
                          <Radio.Button value="year">Year</Radio.Button>
                        </Radio.Group>
                      </div>
                    }
                    title="Facebook Overview"
                    size="large"
                  >
                    {foIsLoading ? (
                      <div className="sd-spin">
                        <Spin />
                      </div>
                    ) : (
                      <Row gutter={25}>
                        <Col xl={12} md={24}>
                          <Row className="focard-wrapper focard-divider">
                            <Col md={12} sm={12} xs={24}>
                              <Focard>
                                <div className="focard-details growth-upward">
                                  <Heading as="h1">{forcastOverviewState.Engaged}</Heading>
                                  <p className="subtitle">Engaged Users</p>
                                  <p className="focard-status">
                                    <span className="focard-status__percentage">
                                      <FeatherIcon icon="trending-up" />
                                      25%
                                    </span>
                                    <span> 20,641 (prev)</span>
                                  </p>
                                </div>
                                <div className="focard-chart">
                                  <ChartjsAreaChart
                                    id="engaged"
                                    labels={forcastOverviewState.EnLabels}
                                    datasets={[
                                      {
                                        data: forcastOverviewState.EnData,
                                        borderColor: '#20C997',
                                        borderWidth: 3,
                                        fill: true,
                                        backgroundColor: () =>
                                          chartLinearGradient(document.getElementById('engaged'), 165, {
                                            start: '#20C99710',
                                            end: '#20C99701',
                                          }),
                                        pointHoverRadius: 0,
                                        pointHoverBorderColor: 'transparent',
                                      },
                                    ]}
                                    height={window.innerWidth <= 1199 ? 100 : 165}
                                  />
                                </div>
                              </Focard>
                            </Col>
                            <Col md={12} sm={12} xs={24}>
                              <Focard>
                                <div className="focard-details growth-upward">
                                  <Heading as="h1">{forcastOverviewState.Impressions}</Heading>
                                  <p className="subtitle">Page Impressions</p>
                                  <p className="focard-status">
                                    <span className="focard-status__percentage">
                                      <FeatherIcon icon="trending-up" />
                                      14%
                                    </span>
                                    <span> 20,641 (prev)</span>
                                  </p>
                                </div>
                                <div className="focard-chart">
                                  <ChartjsAreaChart
                                    id="impression"
                                    labels={forcastOverviewState.ImLabels}
                                    datasets={[
                                      {
                                        data: forcastOverviewState.ImData,
                                        borderColor: '#FF69A5',
                                        borderWidth: 3,
                                        fill: true,
                                        backgroundColor: () =>
                                          chartLinearGradient(document.getElementById('impression'), 165, {
                                            start: '#FF69A510',
                                            end: '#FF69A501',
                                          }),
                                        pointHoverRadius: 0,
                                        pointHoverBorderColor: 'transparent',
                                      },
                                    ]}
                                    height={window.innerWidth <= 1199 ? 100 : 165}
                                  />
                                </div>
                              </Focard>
                            </Col>
                          </Row>
                        </Col>
                        <Col xl={12} xs={24}>
                          <Row className="focard-wrapper">
                            <Col md={12} sm={12}>
                              <Focard>
                                <div className="focard-details growth-downward">
                                  <Heading as="h1">{forcastOverviewState.Like}</Heading>
                                  <p className="subtitle">Total Page Likes</p>
                                  <p className="focard-status">
                                    <span className="focard-status__percentage">
                                      <FeatherIcon icon="trending-down" />
                                      12%
                                    </span>
                                    <span> 20,641 (prev)</span>
                                  </p>
                                </div>
                                <div className="focard-chart">
                                  <ChartjsAreaChart
                                    labels={forcastOverviewState.LiLabels}
                                    id="likes"
                                    datasets={[
                                      {
                                        data: forcastOverviewState.LiData,
                                        borderColor: '#5F63F2',
                                        borderWidth: 3,
                                        fill: true,

                                        backgroundColor: () =>
                                          chartLinearGradient(document.getElementById('likes'), 165, {
                                            start: '#5F63F210',
                                            end: '#5F63F201',
                                          }),
                                        pointHoverRadius: 0,
                                        pointHoverBorderColor: 'transparent',
                                      },
                                    ]}
                                    height={window.innerWidth <= 1199 ? 100 : 165}
                                  />
                                </div>
                              </Focard>
                            </Col>
                            <Col md={12} sm={12} xs={24}>
                              <Focard>
                                <div className="focard-details growth-upward">
                                  <Heading as="h1">{forcastOverviewState.Impressions2}</Heading>
                                  <p className="subtitle">Page Impressions</p>
                                  <p className="focard-status">
                                    <span className="focard-status__percentage">
                                      <FeatherIcon icon="trending-up" />
                                      14%
                                    </span>
                                    <span> 20,641 (prev)</span>
                                  </p>
                                </div>
                                <div className="focard-chart">
                                  <ChartjsAreaChart
                                    labels={forcastOverviewState.ImLabels2}
                                    id="impression2"
                                    datasets={[
                                      {
                                        data: forcastOverviewState.ImData2,
                                        borderColor: '#FA8B0C',
                                        borderWidth: 3,
                                        fill: true,
                                        backgroundColor: () =>
                                          chartLinearGradient(document.getElementById('impression2'), 165, {
                                            start: '#FA8B0C10',
                                            end: '#FA8B0C01',
                                          }),
                                        pointHoverRadius: 0,
                                        pointHoverBorderColor: 'transparent',
                                      },
                                    ]}
                                    height={window.innerWidth <= 1199 ? 100 : 165}
                                  />
                                </div>
                              </Focard>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    )}
                  </Cards>
                )}
              </div>
            </CardGroup>
          </Col>

          <Col xxl={8} xs={24}>
            {youtubeSubscribeState !== null && (
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.youtubeSubscribeTabActive === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeYoutube('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.youtubeSubscribeTabActive === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeYoutube('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.youtubeSubscribeTabActive === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeYoutube('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Youtube Subscribers"
                size="large"
              >
                {yuIsLoading ? (
                  <div className="sd-spin">
                    <Spin />
                  </div>
                ) : (
                  <CardBarChart>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div className="card-bar-top">
                        <p>Subscribers</p>
                        <Heading as="h3">
                          {youtubeSubscribeState.Subscribe}
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            {youtubeSubscribeState.percent}%
                          </sub>
                        </Heading>
                      </div>
                      <ul>
                        {youtubeSubscribeDatasets &&
                          youtubeSubscribeDatasets.map((item, key) => {
                            return (
                              <li key={key + 1} className="custom-label">
                                <span
                                  style={{
                                    backgroundColor: item.hoverBackgroundColor,
                                  }}
                                />
                                {item.label}
                              </li>
                            );
                          })}
                      </ul>
                    </div>

                    <ChartjsBarChartTransparent
                      labels={youtubeSubscribeState.labels}
                      datasets={youtubeSubscribeDatasets}
                      options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        layout: {
                          padding: {
                            top: 20,
                          },
                        },
                        legend: {
                          display: false,
                          position: 'top',
                          align: 'end',
                          labels: {
                            boxWidth: 6,
                            display: true,
                            usePointStyle: true,
                          },
                        },

                        scales: {
                          yAxes: [
                            {
                              gridLines: {
                                color: '#e5e9f2',
                                borderDash: [3, 3],
                                zeroLineColor: '#e5e9f2',
                                zeroLineWidth: 1,
                                zeroLineBorderDash: [3, 3],
                              },
                              ticks: {
                                beginAtZero: true,
                                fontSize: 12,
                                fontColor: '#182b49',
                                max: Math.max(...youtubeSubscribeState.gained),
                                stepSize: Math.max(...youtubeSubscribeState.gained) / 5,
                                display: true,
                                min: 0,
                                padding: 10,
                              },
                            },
                          ],
                          xAxes: [
                            {
                              gridLines: {
                                display: true,
                                zeroLineWidth: 2,
                                zeroLineColor: '#fff',
                                color: 'transparent',
                                z: 1,
                              },
                              ticks: {
                                beginAtZero: true,
                                fontSize: 12,
                                fontColor: '#182b49',
                                min: 0,
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </CardBarChart>
                )}
              </Cards>
            )}
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <LineChartWrapper>
              {twitterOverviewState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.twitterOverviewTabActive === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeTwitter('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.twitterOverviewTabActive === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeTwitter('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.twitterOverviewTabActive === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeTwitter('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  title="Twitter Overview"
                  size="large"
                >
                  {twIsLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <div className="overview-container">
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-downward">
                            <p>Tweets</p>
                            <Heading as="h4">
                              {twitterOverviewState.twist.data}
                              <sub>
                                <FeatherIcon icon="arrow-down" size={14} />
                                25%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: twitterOverviewState.twist.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>Tweet impressions</p>
                            <Heading as="h4">
                              {twitterOverviewState.impressions.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                108%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: twitterOverviewState.impressions.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-downward">
                            <p>Retweets</p>
                            <Heading as="h4">
                              {twitterOverviewState.retweets.data}
                              <sub>
                                <FeatherIcon icon="arrow-down" size={14} />
                                30%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: twitterOverviewState.retweets.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>Engagement rate</p>
                            <Heading as="h4">
                              {twitterOverviewState.rate.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                34%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: twitterOverviewState.rate.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>New followers</p>
                            <Heading as="h4">
                              {twitterOverviewState.followers.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                27%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: twitterOverviewState.followers.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                </Cards>
              )}
            </LineChartWrapper>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <LineChartWrapper>
              {instagramOverviewState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.instagramOverviewTabActive === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeInstagram('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.instagramOverviewTabActive === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeInstagram('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.instagramOverviewTabActive === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeInstagram('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  title="Instagram Overview"
                  size="large"
                >
                  {inIsLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <div className="overview-container">
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>Post</p>
                            <Heading as="h4">
                              {instagramOverviewState.post.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                25%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: instagramOverviewState.post.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>Like</p>
                            <Heading as="h4">
                              {instagramOverviewState.like.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                108%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: instagramOverviewState.like.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-downward">
                            <p>Comments</p>
                            <Heading as="h4">
                              {instagramOverviewState.comments.data}
                              <sub>
                                <FeatherIcon icon="arrow-down" size={14} />
                                30%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: instagramOverviewState.comments.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>New Followers</p>
                            <Heading as="h4">
                              {instagramOverviewState.rate.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                34%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: instagramOverviewState.rate.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-downward">
                            <p>Following</p>
                            <Heading as="h4">
                              {instagramOverviewState.followers.data}
                              <sub>
                                <FeatherIcon icon="arrow-down" size={14} />
                                27%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: instagramOverviewState.followers.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                </Cards>
              )}
            </LineChartWrapper>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <LineChartWrapper>
              {linkdinOverviewState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.linkdinOverviewTabActive === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLinkdin('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.linkdinOverviewTabActive === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLinkdin('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.linkdinOverviewTabActive === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLinkdin('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  title="Linkedin Key Metrics"
                  size="large"
                >
                  {liIsLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <div className="linkedin-chart-wrap">
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>Clicks</p>
                            <Heading as="h4">
                              {linkdinOverviewState.post.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                25%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: linkdinOverviewState.post.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>Like</p>
                            <Heading as="h4">
                              {linkdinOverviewState.like.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                108%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: linkdinOverviewState.like.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-downward">
                            <p>Comments</p>
                            <Heading as="h4">
                              {linkdinOverviewState.comments.data}
                              <sub>
                                <FeatherIcon icon="arrow-down" size={14} />
                                30%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: linkdinOverviewState.comments.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-upward">
                            <p>New Followers</p>
                            <Heading as="h4">
                              {linkdinOverviewState.rate.data}
                              <sub>
                                <FeatherIcon icon="arrow-up" size={14} />
                                34%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: linkdinOverviewState.rate.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                      <Row className="line-chart-row">
                        <Col xxl={10} xs={24}>
                          <div className="growth-downward">
                            <p>Following</p>
                            <Heading as="h4">
                              {linkdinOverviewState.followers.data}
                              <sub>
                                <FeatherIcon icon="arrow-down" size={14} />
                                27%
                              </sub>
                            </Heading>
                          </div>
                        </Col>
                        <Col xxl={14} xs={24}>
                          <div className="border-linechart">
                            <ChartContainer className="parentContainer">
                              <ChartjsLineChart
                                height={55}
                                datasets={[
                                  {
                                    data: linkdinOverviewState.followers.chartValue,
                                    ...lineChartPointStyle,
                                  },
                                ]}
                                options={chartOptions}
                              />
                            </ChartContainer>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                </Cards>
              )}
            </LineChartWrapper>
          </Col>
          <Col xxl={16} xs={24}>
            <CardGroup>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-radio">
                      <Radio.Group onChange={socialTraffic} defaultValue="today">
                        <Radio.Button value="today">Today</Radio.Button>
                        <Radio.Button value="week">Week</Radio.Button>
                        <Radio.Button value="month">Month</Radio.Button>
                        <Radio.Button value="year">Year</Radio.Button>
                      </Radio.Group>
                    </div>
                  }
                  title="Social Traffic Metrics"
                  size="large"
                  more={moreContent}
                >
                  <div className="traffic-table table-responsive">
                    <Table columns={trafficTableColumns} dataSource={trafficTableData} pagination={false} />
                  </div>
                </Cards>
              </div>
            </CardGroup>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Dashboard;
