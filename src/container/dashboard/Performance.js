import React, { useState, useEffect } from 'react';
import { Row, Col, Progress, Table, Spin } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { VectorMap } from 'react-jvectormap';

import {
  OverviewCard,
  PerformanceChartWrapper,
  Pstates,
  SessionChartWrapper,
  SessionState,
  RegionList,
  RegionMap,
  LadingPages,
  TrafficTableWrapper,
} from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { ChartjsAreaChart, ChartjsDonutChart } from '../../components/charts/chartjs';
import { Button } from '../../components/buttons/buttons';
import { Dropdown } from '../../components/dropdown/dropdown';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { chartLinearGradient, customTooltips } from '../../components/utilities/utilities';
import {
  performanceFilterData,
  performanceGetData,
  setIsLoading,
  trafficChanelGetData,
  trafficChanelFilterData,
  deviceFilterData,
  deviceGetData,
  landingPageFilterData,
  landingPageGetData,
  regionFilterData,
  regionGetData,
} from '../../redux/chartContent/actionCreator';

const moreContent = (
  <>
    <NavLink to="#">
      <FeatherIcon size={16} icon="printer" />
      <span>Printer</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="book-open" />
      <span>PDF</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="file-text" />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="x" />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="file" />
      <span>CSV</span>
    </NavLink>
  </>
);

const locationColumns = [
  {
    title: 'Channel',
    dataIndex: 'channel',
    key: 'channel',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Goal Conv. Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Goals Completions',
    dataIndex: 'completions',
    key: 'completions',
  },
  {
    title: 'Percentage of Traffic (%)',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

const landingColumns = [
  {
    title: 'Landing Pages',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Bounce Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'CTR',
    dataIndex: 'ctr',
    key: 'ctr',
  },
  {
    title: 'Goal Conv. Rate',
    dataIndex: 'percentage',
    key: 'percentage',
  },
];

const regionColumns = [
  {
    title: 'Top Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
];

const Performance = () => {
  const dispatch = useDispatch();
  const {
    performanceState,
    preIsLoading,
    trafficState,
    deviceState,
    dvIsLoading,
    landingState,
    regionState,
    rtl,
  } = useSelector(state => {
    return {
      performanceState: state.chartContent.performanceData,
      regionState: state.chartContent.regionData,
      landingState: state.chartContent.landingPageData,
      trafficState: state.chartContent.trafficChanelData,
      preIsLoading: state.chartContent.perLoading,
      deviceState: state.chartContent.deviceData,
      dvIsLoading: state.chartContent.dvLoading,
      lpIsLoading: state.chartContent.lpLoading,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  const [state, setState] = useState({
    performance: 'year',
    performanceTab: 'users',
    traffic: 'year',
    device: 'year',
    landing: 'year',
    region: 'year',
  });

  const { performance, performanceTab } = state;

  useEffect(() => {
    if (performanceGetData) {
      dispatch(performanceGetData());
      dispatch(trafficChanelGetData());
      dispatch(deviceGetData());
      dispatch(landingPageGetData());
      dispatch(regionGetData());
    }
  }, [dispatch]);

  const locationData = trafficState !== null && [
    {
      key: '1',
      channel: 'Direct',
      sessions: trafficState.direct.sessions,
      rate: `${trafficState.direct.rate}%`,
      completions: trafficState.direct.goals,
      percentage: (
        <Progress
          percent={trafficState.direct.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-dt progress-primary"
        />
      ),
      value: `${trafficState.direct.value}%`,
    },
    {
      key: '2',
      channel: 'Email',
      sessions: trafficState.email.sessions,
      rate: `${trafficState.email.rate}%`,
      completions: trafficState.email.goals,
      percentage: (
        <Progress
          percent={trafficState.email.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-et progress-secondary"
        />
      ),
      value: `${trafficState.email.value}%`,
    },
    {
      key: '3',
      channel: 'Organic Search',
      sessions: trafficState.search.sessions,
      rate: `${trafficState.search.rate}%`,
      completions: trafficState.search.goals,
      percentage: (
        <Progress
          percent={trafficState.search.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-ost progress-success"
        />
      ),
      value: `${trafficState.search.value}%`,
    },
    {
      key: '4',
      channel: 'Referral',
      sessions: trafficState.referral.sessions,
      rate: `${trafficState.referral.rate}%`,
      completions: trafficState.referral.goals,
      percentage: (
        <Progress
          percent={trafficState.referral.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-rt progress-info"
        />
      ),
      value: `${trafficState.referral.value}%`,
    },
    {
      key: '5',
      channel: 'Social Media',
      sessions: trafficState.media.sessions,
      rate: `${trafficState.media.rate}%`,
      completions: trafficState.media.goals,
      percentage: (
        <Progress
          percent={trafficState.media.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-smt progress-warning"
        />
      ),
      value: `${trafficState.media.value}%`,
    },
    {
      key: '6',
      channel: 'Other',
      sessions: trafficState.other.sessions,
      rate: `${trafficState.other.rate}%`,
      completions: trafficState.other.goals,
      percentage: (
        <Progress
          percent={trafficState.other.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-ot progress-danger"
        />
      ),
      value: `${trafficState.other.value}%`,
    },
  ];

  const landingData = landingState !== null && [
    {
      key: '1',
      pages: (
        <Link to="#" className="page-title">
          Homepage
        </Link>
      ),
      sessions: landingState.direct.sessions,
      rate: `${landingState.direct.rate}%`,
      ctr: landingState.direct.goals,
      percentage: `${landingState.direct.percent}%`,
    },
    {
      key: '2',
      pages: (
        <Link to="#" className="page-title">
          Our Service
        </Link>
      ),
      sessions: landingState.email.sessions,
      rate: `${landingState.email.rate}%`,
      ctr: landingState.email.goals,
      percentage: `${landingState.email.percent}%`,
    },
    {
      key: '3',
      pages: (
        <Link to="#" className="page-title">
          List of Products
        </Link>
      ),
      sessions: landingState.search.sessions,
      rate: `${landingState.search.rate}%`,
      ctr: landingState.search.goals,
      percentage: `${landingState.search.percent}%`,
    },
    {
      key: '4',
      pages: (
        <Link to="#" className="page-title">
          Contact us
        </Link>
      ),
      sessions: landingState.media.sessions,
      rate: `${landingState.media.rate}%`,
      ctr: landingState.media.goals,
      percentage: `${landingState.media.percent}%`,
    },
    {
      key: '5',
      pages: (
        <Link to="#" className="page-title">
          Products
        </Link>
      ),
      sessions: landingState.other.sessions,
      rate: `${landingState.other.rate}%`,
      ctr: landingState.other.goals,
      percentage: `${landingState.other.percent}%`,
    },
  ];

  const regionData = [];

  if (regionState !== null)
    regionState.map((item, key) => {
      return regionData.push({
        key: key + 1,
        region: item[0],
        sessions: item[1],
      });
    });

  const handleActiveChangePerformance = value => {
    setState({
      ...state,
      performance: value,
    });
    dispatch(performanceFilterData(value));
  };

  const handleActiveChangeTraffic = value => {
    setState({
      ...state,
      traffic: value,
    });
    dispatch(trafficChanelFilterData(value));
  };

  const handleActiveChangeDevice = value => {
    setState({
      ...state,
      device: value,
    });
    dispatch(deviceFilterData(value));
  };

  const handleActiveChangeLanding = value => {
    setState({
      ...state,
      landing: value,
    });
    dispatch(landingPageFilterData(value));
  };

  const handleActiveChangeRegion = value => {
    setState({
      ...state,
      region: value,
    });
    dispatch(regionFilterData(value));
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
      height: '220px',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  };

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object).isRequired,
  };

  const onPerformanceTab = value => {
    setState({
      ...state,
      performanceTab: value,
    });
    return dispatch(setIsLoading());
  };

  const performanceDatasets = performanceState !== null && [
    {
      data: performanceState[performanceTab][1],
      borderColor: '#5F63F2',
      borderWidth: 4,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('performance'), 300, {
          start: '#5F63F230',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#5F63F2',
      hoverBorderWidth: 5,
    },
    {
      data: performanceState[performanceTab][2],
      borderColor: '#C6D0DC',
      borderWidth: 2,
      fill: false,
      backgroundColor: '#00173750',
      label: 'Previous period',
      borderDash: [3, 3],
      pointRadius: '0',
      hoverRadius: '0',
    },
  ];

  return (
    <>
      <PageHeader
        ghost
        title="Website Performance Dashboard"
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
        <Row justify="center" gutter={25}>
          <Col xxl={8} xl={10} lg={12} xs={24}>
            <OverviewCard>
              <div className="d-flex align-items-center justify-content-between overview-head">
                <Heading as="h4">Daily Overview</Heading>
                <Dropdown>
                  <Button>
                    Export <FeatherIcon icon="chevron-down" size={14} />
                  </Button>
                </Dropdown>
              </div>
              <div className="overview-box">
                <Cards headless>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="overview-box-single">
                      <Heading as="h2" className="color-primary">
                        5,461
                      </Heading>
                      <p>Users Today</p>
                    </div>
                    <div className="overview-box-single text-right">
                      <Heading as="h2">8,085</Heading>
                      <p>Expected Users</p>
                    </div>
                  </div>

                  <Progress percent={70} showInfo={false} className="progress-primary" />

                  <p>
                    <span className="growth-upward">
                      <FeatherIcon icon="arrow-up" size={14} />
                      25% <span>Since yesterday</span>
                    </span>
                    <span className="overview-box-percentage" style={{ float: !rtl ? 'right' : 'left' }}>
                      70%
                    </span>
                  </p>
                </Cards>
              </div>

              <div className="overview-box">
                <Cards headless>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="overview-box-single">
                      <Heading as="h2" className="color-info">
                        140
                      </Heading>
                      <p>Goals Today</p>
                    </div>
                    <div className="overview-box-single text-right">
                      <Heading as="h2">120</Heading>
                      <p>Expected Goals</p>
                    </div>
                  </div>
                  <Progress percent={70} showInfo={false} />
                  <p>
                    <span className="growth-downward">
                      <FeatherIcon icon="arrow-down" size={14} />
                      25% <span>Since yesterday</span>
                    </span>
                    <span className="overview-box-percentage" style={{ float: !rtl ? 'right' : 'left' }}>
                      70%
                    </span>
                  </p>
                </Cards>
              </div>
            </OverviewCard>
          </Col>
          <Col xxl={16} xl={14} lg={12} xs={24}>
            <PerformanceChartWrapper>
              {performanceState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={performance === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangePerformance('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={performance === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangePerformance('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={performance === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangePerformance('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  more={moreContent}
                  title="Website Performance"
                  size="large"
                >
                  <Pstates>
                    <div
                      onClick={() => onPerformanceTab('users')}
                      className={`growth-upward ${performanceTab === 'users' && 'active'}`}
                      role="button"
                      onKeyPress={() => {}}
                      tabIndex="0"
                    >
                      <p>Users</p>
                      <Heading as="h1">
                        {performanceState.users[0]}
                        <sub>
                          <span>
                            <FeatherIcon icon="arrow-up" size={14} /> 25%
                          </span>
                        </sub>
                      </Heading>
                    </div>
                    <div
                      onClick={() => onPerformanceTab('sessions')}
                      className={`growth-upward ${performanceTab === 'sessions' && 'active'}`}
                      role="button"
                      onKeyPress={() => {}}
                      tabIndex="0"
                    >
                      <p>Sessions</p>
                      <Heading as="h1">
                        {performanceState.sessions[0]}
                        <sub>
                          <span>
                            <FeatherIcon icon="arrow-up" size={14} /> 47%
                          </span>
                        </sub>
                      </Heading>
                    </div>
                    <div
                      onClick={() => onPerformanceTab('bounce')}
                      className={`growth-downward ${performanceTab === 'bounce' && 'active'}`}
                      role="button"
                      onKeyPress={() => {}}
                      tabIndex="0"
                    >
                      <p>Bounce Rate</p>
                      <Heading as="h1">
                        {performanceState.bounce[0]}
                        <sub>
                          <span>
                            <FeatherIcon icon="arrow-down" size={14} /> 28%
                          </span>
                        </sub>
                      </Heading>
                    </div>
                    <div
                      onClick={() => onPerformanceTab('duration')}
                      className={`growth-upward ${performanceTab === 'duration' && 'active'}`}
                      role="button"
                      onKeyPress={() => {}}
                      tabIndex="0"
                    >
                      <p>Session Duration</p>
                      <Heading as="h1">
                        {performanceState.duration[0]}
                        <sub>
                          <span>
                            <FeatherIcon icon="arrow-up" size={14} /> 13%
                          </span>
                        </sub>
                      </Heading>
                    </div>
                  </Pstates>
                  {preIsLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <div className="performance-lineChart">
                      <ChartjsAreaChart
                        id="performance"
                        labels={performanceState.labels}
                        datasets={performanceDatasets}
                        options={{
                          maintainAspectRatio: true,
                          elements: {
                            z: 9999,
                          },
                          legend: {
                            display: false,
                          },
                          hover: {
                            mode: 'index',
                            intersect: false,
                          },
                          tooltips: {
                            mode: 'label',
                            intersect: false,
                            backgroundColor: '#ffffff',
                            position: 'average',
                            enabled: false,
                            custom: customTooltips,
                            callbacks: {
                              title() {
                                return performanceTab;
                              },
                              label(t, d) {
                                const { yLabel, datasetIndex } = t;
                                return `<span class="chart-data">${yLabel}k</span> <span class="data-label">${d.datasets[datasetIndex].label}</span>`;
                              },
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
                                  fontSize: 13,
                                  fontColor: '#182b49',
                                  max: 80,
                                  stepSize: 20,
                                  callback(label) {
                                    return `${label}k`;
                                  },
                                },
                              },
                            ],
                            xAxes: [
                              {
                                gridLines: {
                                  display: true,
                                  zeroLineWidth: 2,
                                  zeroLineColor: 'transparent',
                                  color: 'transparent',
                                  z: 1,
                                  tickMarkLength: 0,
                                },
                                ticks: {
                                  padding: 10,
                                },
                              },
                            ],
                          },
                        }}
                        height={window.innerWidth <= 575 ? 200 : 86}
                      />
                      <ul>
                        {performanceDatasets &&
                          performanceDatasets.map((item, index) => {
                            return (
                              <li key={index + 1} className="custom-label">
                                <span
                                  style={{
                                    backgroundColor: item.borderColor,
                                  }}
                                />
                                {item.label}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  )}
                </Cards>
              )}
            </PerformanceChartWrapper>
          </Col>
          <Col xxl={16} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.traffic === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTraffic('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.traffic === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTraffic('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.traffic === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTraffic('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Traffic Channels"
                size="large"
                more={moreContent}
              >
                <TrafficTableWrapper>
                  <div className="table-bordered table-responsive">
                    <Table columns={locationColumns} dataSource={locationData} pagination={false} />
                  </div>
                </TrafficTableWrapper>
              </Cards>
            </div>
          </Col>
          <Col xxl={8} xl={8} md={12} xs={24}>
            <SessionChartWrapper>
              {deviceState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.device === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeDevice('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.device === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeDevice('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.device === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeDevice('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  title="Sessions By Device"
                  size="large"
                >
                  {dvIsLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <div className="session-chart-inner">
                      <ChartjsDonutChart
                        labels={['Desktop', 'Mobiles', 'Tablets']}
                        datasets={[
                          {
                            data: deviceState,
                            backgroundColor: ['#20C997', '#5F63F2', '#FA8B0C'],
                            total: '9,283',
                          },
                        ]}
                      />

                      <SessionState className="session-wrap d-flex justify-content-center">
                        <div className="session-single">
                          <div className="chart-label">
                            <span className="label-dot dot-success" />
                            Desktop
                          </div>
                          <span>{deviceState[0]}</span>
                          <sub>45%</sub>
                        </div>
                        <div className="session-single">
                          <div className="chart-label">
                            <span className="label-dot dot-info" />
                            Mobile
                          </div>
                          <span>{deviceState[1]}</span>
                          <sub>30%</sub>
                        </div>
                        <div className="session-single">
                          <div className="chart-label">
                            <span className="label-dot dot-warning" />
                            Tablets
                          </div>
                          <span>{deviceState[1]}</span>
                          <sub>25%</sub>
                        </div>
                      </SessionState>
                    </div>
                  )}
                </Cards>
              )}
            </SessionChartWrapper>
          </Col>
          <Col xxl={12} xl={16} md={12} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.landing === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLanding('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.landing === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLanding('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.landing === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLanding('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Top Landing Pages"
                size="large"
                more={moreContent}
              >
                <LadingPages>
                  <div className="table-bordered table-responsive">
                    <Table columns={landingColumns} dataSource={landingData} pagination={false} />
                  </div>
                </LadingPages>
              </Cards>
            </div>
          </Col>
          <Col xxl={12} xs={24}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li className={state.region === 'week' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeRegion('week')} to="#">
                        Week
                      </Link>
                    </li>
                    <li className={state.region === 'month' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeRegion('month')} to="#">
                        Month
                      </Link>
                    </li>
                    <li className={state.region === 'year' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeRegion('year')} to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title="Sessions by Region"
              size="large"
              more={moreContent}
            >
              <Row>
                <Col xxl={10} md={11} xs={24}>
                  <RegionList>
                    <Scrollbars autoHeight autoHeightMin={280} autoHide renderThumbVertical={renderThumb}>
                      <Table columns={regionColumns} dataSource={regionData} pagination={false} />
                    </Scrollbars>
                  </RegionList>
                </Col>
                <Col xxl={14} md={13} xs={24}>
                  <RegionMap>
                    <div>
                      <VectorMap
                        map="world_mill"
                        backgroundColor="transparent"
                        regionStyle={{
                          initial: {
                            fill: '#DBE1E8',
                            'fill-opacity': 1,
                            stroke: 'none',
                            'stroke-width': 0,
                            'stroke-opacity': 1,
                          },
                          hover: {
                            'fill-opacity': 1,
                            cursor: 'pointer',
                            fill: '#5F63F2',
                          },
                          selected: {
                            fill: 'yellow',
                          },
                          selectedHover: {},
                        }}
                        containerStyle={{
                          width: '100%',
                          height: '100%',
                        }}
                        containerClassName="map"
                      />
                    </div>
                  </RegionMap>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Performance;
