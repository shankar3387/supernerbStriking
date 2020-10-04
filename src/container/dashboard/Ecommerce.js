import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { VectorMap } from 'react-jvectormap';
import { useSelector, useDispatch } from 'react-redux';
import {
  CardBarChart2,
  LocationMapWrapper,
  RevenueWrapper,
  RevenueTableWrapper,
  RevenueChartWrapper,
  EChartCard,
} from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import {
  ChartjsAreaChart,
  ChartjsBarChartTransparent,
  ChartjsLineChart,
  ChartjsDonutChart2,
} from '../../components/charts/chartjs';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { chartLinearGradient, customTooltips } from '../../components/utilities/utilities';
import {
  performanceFilterData,
  performanceGetData,
  generatedFilterData,
  generatedGetData,
  topSaleGetData,
  topSaleFilterData,
  locationGetData,
  locationFilterData,
  deviceFilterData,
  deviceGetData,
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

const chartOptions = {
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        barPercentage: 1,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

const revenueColumns = [
  {
    title: 'Name of Source',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
  },
  {
    title: 'Page View',
    dataIndex: 'page_View',
    key: 'page_View',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Trend',
    dataIndex: 'trend',
    key: 'trend',
    width: 120,
  },
];

const sellingColumns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];

const locationColumns = [
  {
    title: 'Top Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];

const Ecommerce = () => {
  const dispatch = useDispatch();
  const {
    performanceState,
    preIsLoading,
    generatedState,
    topSaleState,
    locationState,
    deviceState,
    dvIsLoading,
  } = useSelector(state => {
    return {
      deviceState: state.chartContent.deviceData,
      dvIsLoading: state.chartContent.dvLoading,
      generatedState: state.chartContent.generatedData,
      locationState: state.chartContent.locationData,
      topSaleState: state.chartContent.topSaleData,
      performanceState: state.chartContent.performanceData,
      preIsLoading: state.chartContent.perLoading,
      geIsLoading: state.chartContent.geLoading,
    };
  });
  const [state, setState] = useState({
    revenue: 'year',
    generated: 'year',
    products: 'year',
    location: 'today',
    device: 'year',
  });

  useEffect(() => {
    if (performanceGetData) {
      dispatch(performanceGetData());
      dispatch(generatedGetData());
      dispatch(topSaleGetData());
      dispatch(locationGetData());
      dispatch(deviceGetData());
    }
  }, [dispatch]);

  const handleActiveChangeRevenue = value => {
    setState({
      ...state,
      revenue: value,
    });
    return dispatch(performanceFilterData(value));
  };

  const handleActiveChangeGenerated = value => {
    setState({
      ...state,
      generated: value,
    });
    dispatch(generatedFilterData(value));
  };

  const handleActiveChangeProducts = value => {
    setState({
      ...state,
      products: value,
    });
    dispatch(topSaleFilterData(value));
  };

  const handleActiveChangeLocation = value => {
    setState({
      ...state,
      location: value,
    });
    dispatch(locationFilterData(value));
  };

  const handleActiveChangeDevice = value => {
    setState({
      ...state,
      device: value,
    });
    dispatch(deviceFilterData(value));
  };

  const performanceDatasets = performanceState !== null && [
    {
      data: performanceState.users[1],
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
      amount: '$7,596',
      amountClass: 'current-amount',
    },
    {
      data: performanceState.users[2],
      borderColor: '#C6D0DC',
      borderWidth: 2,
      fill: false,
      backgroundColor: '#00173750',
      label: 'Previous period',
      borderDash: [3, 3],
      pointRadius: '0',
      hoverRadius: '0',
      amount: '$3,258',
      amountClass: 'prev-amount',
    },
  ];

  const revenueData = [];
  if (generatedState !== null)
    generatedState.map(value => {
      const { key, name, visitors, page_View, revenue, trend } = value;

      return revenueData.push({
        key,
        name,
        visitors,
        page_View,
        revenue,
        trend: (
          <ChartjsLineChart
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
            datasets={[
              {
                data: trend.data,
                borderColor: trend.borderColor,
                borderWidth: 2,
                fill: false,
              },
            ]}
            height={30}
            width={120}
            options={{
              ...chartOptions,
              elements: {
                point: {
                  radius: 0,
                },
              },
            }}
          />
        ),
      });
    });

  const sellingData = [];

  if (topSaleState !== null) {
    topSaleState.map(value => {
      const { key, name, price, sold, revenue } = value;
      return sellingData.push({
        key,
        name,
        price,
        sold,
        revenue,
      });
    });
  }

  const locationData = [];

  if (locationState !== null) {
    locationState.map(value => {
      const { key, location, order, revenue } = value;
      return locationData.push({
        key,
        location,
        order,
        revenue,
      });
    });
  }

  return (
    <>
      <PageHeader
        ghost
        title="Ecommerce Dashboard"
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
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">7,461</Heading>
                    <span>Orders</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#EFEFFE',
                        hoverBackgroundColor: '#5F63F2',
                        label: 'Orders',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">$28,947</Heading>
                    <span>Revenue</span>
                    <p>
                      <span className="growth-downward">
                        <FeatherIcon icon="arrow-down" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#FFF0F6',
                        hoverBackgroundColor: '#FF69A5',
                        label: 'Revenue',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">$3,241</Heading>
                    <span>Avg. order value</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#E8FAF4',
                        hoverBackgroundColor: '#20C997',
                        label: 'Avg Orders',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">45.2k</Heading>
                    <span>Unique visitors</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#E9F5FF',
                        hoverBackgroundColor: '#2C99FF',
                        label: 'Visitors',
                      },
                    ]}
                    options={chartOptions}
                  />
                </div>
              </EChartCard>
            </Cards>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <RevenueWrapper>
              {performanceState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        {/* <li className={state.revenue === 'today' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeRevenue('today')} to="#">
                            Today
                          </Link>
                        </li> */}
                        <li className={state.revenue === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeRevenue('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.revenue === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeRevenue('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.revenue === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeRevenue('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  more={moreContent}
                  title="Total Revenue"
                  size="large"
                >
                  {preIsLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <div className="performance-lineChart">
                      <ul>
                        {performanceDatasets &&
                          performanceDatasets.map((item, key) => {
                            return (
                              <li key={key + 1} className="custom-label">
                                <strong className={item.amountClass}>{item.amount}</strong>
                                <div>
                                  <span
                                    style={{
                                      backgroundColor: item.borderColor,
                                    }}
                                  />
                                  {item.label}
                                </div>
                              </li>
                            );
                          })}
                      </ul>

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
                            position: 'bottom',
                            align: 'start',
                            labels: {
                              boxWidth: 6,
                              display: false,
                              usePointStyle: true,
                            },
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
                                return `Total Revenue`;
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
                                  suggestedMin: 50,
                                  suggestedMax: 80,
                                  stepSize: 20,

                                  // padding: 10,
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
                        height={window.innerWidth <= 575 ? 200 : 120}
                      />
                    </div>
                  )}
                </Cards>
              )}
            </RevenueWrapper>
          </Col>
          <Col xxl={12} xs={24}>
            <RevenueTableWrapper>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        {/* <li className={state.generated === 'today' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('today')} to="#">
                            Today
                          </Link>
                        </li> */}
                        <li className={state.generated === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.generated === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.generated === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeGenerated('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  more={moreContent}
                  title="Source Of Revenue Generated"
                  size="large"
                >
                  <div className="table-bordered revenue-table table-responsive">
                    <Table columns={revenueColumns} dataSource={revenueData} pagination={false} />
                  </div>
                </Cards>
              </div>
            </RevenueTableWrapper>
          </Col>
          <Col xxl={8} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.products === 'today' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('today')} to="#">
                          Today
                        </Link>
                      </li>
                      <li className={state.products === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.products === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.products === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeProducts('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Top Selling Products"
                size="large"
                bodypadding="0px"
              >
                <div className="table-bordered top-seller-table table-responsive">
                  <Table columns={sellingColumns} dataSource={sellingData} pagination={false} />
                </div>
              </Cards>
            </div>
          </Col>
          <Col xxl={8} md={12} xs={24}>
            <LocationMapWrapper>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.location === 'today' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('today')} to="#">
                            Today
                          </Link>
                        </li>
                        <li className={state.location === 'week' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.location === 'month' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.location === 'year' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeLocation('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  title="Sales By Location"
                  size="large"
                >
                  <div className="location-map d-flex justify-content-center">
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
                        markerStyle={{
                          initial: {
                            'stroke-width': 6,
                            fill: '#fff',
                            stroke: '#5F63F2',
                            r: 6,
                          },
                          hover: {
                            fill: '#5F63F2',
                            stroke: '#fff',
                          },
                        }}
                        markers={[
                          {
                            latLng: [38, -97],
                            name: 'United States',
                          },
                          {
                            latLng: [20, 77],
                            name: 'India',
                          },
                          {
                            latLng: [60, -95],
                            name: 'Canada',
                          },
                          {
                            latLng: [51, 9],
                            name: 'Germany',
                          },
                          {
                            latLng: [54, -2],
                            name: 'United Kingdom',
                          },
                        ]}
                        containerStyle={{
                          width: '100%',
                          height: '100%',
                        }}
                        containerClassName="map"
                      />
                    </div>
                  </div>

                  <div className="location-table">
                    <Table columns={locationColumns} dataSource={locationData} pagination={false} />
                  </div>
                </Cards>
              </div>
            </LocationMapWrapper>
          </Col>
          <Col xxl={8} md={12} xs={24}>
            <RevenueChartWrapper>
              {deviceState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.device === 'today' ? 'active' : 'deactivate'}>
                          <Link onClick={() => handleActiveChangeDevice('today')} to="#">
                            Today
                          </Link>
                        </li>
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
                  title="Revenue By Device"
                  size="large"
                >
                  {dvIsLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <div className="revenue-doughnut">
                      <ChartjsDonutChart2
                        labels={['Desktop', 'Mobile', 'Tablets']}
                        datasets={[
                          {
                            data: deviceState,
                            backgroundColor: ['#20C997', '#5F63F2', '#FA8B0C'],
                          },
                        ]}
                      />
                    </div>
                  )}
                </Cards>
              )}
            </RevenueChartWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Ecommerce;
