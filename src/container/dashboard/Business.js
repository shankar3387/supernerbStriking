import React, { useState, useEffect } from 'react';
import { Row, Col, Progress, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Focard, CardBarChart, ExList, RatioCard, IncomeExpenseWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import {
  cashFlowGetData,
  cashFlowFilterData,
  incomeGetData,
  incomeFilterData,
} from '../../redux/chartContent/actionCreator';
import { chartLinearGradient } from '../../components/utilities/utilities';

const Business = () => {
  const dispatch = useDispatch();
  const { cashFlowState, cfIsLoading, incomeState, isIcLoading } = useSelector(state => {
    return {
      cashFlowState: state.chartContent.cashFlowData,
      cfIsLoading: state.chartContent.cfLoading,
      incomeState: state.chartContent.incomeData,
      isIcLoading: state.chartContent.icLoading,
    };
  });
  const [state, setState] = useState({
    cashFlowActive: 'year',
    incomeFlowActive: 'year',
  });

  useEffect(() => {
    if (cashFlowGetData) {
      dispatch(cashFlowGetData());
      dispatch(incomeGetData());
    }
  }, [dispatch]);

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

  const handleActiveChangeCash = value => {
    setState({
      ...state,
      cashFlowActive: value,
    });
    dispatch(cashFlowFilterData(value));
  };

  const handleActiveChangeIncome = value => {
    setState({
      ...state,
      incomeFlowActive: value,
    });
    dispatch(incomeFilterData(value));
  };

  const cashFlowDataset = cashFlowState !== null && [
    {
      data: cashFlowState.dataIn,
      backgroundColor: '#20C99770',
      hoverBackgroundColor: '#20C997',
      label: 'Cash in',
      maxBarThickness: 10,
      barThickness: 12,
    },
    {
      data: cashFlowState.dataOut,
      backgroundColor: '#FF4D4F70',
      hoverBackgroundColor: '#FF4D4F',
      label: 'Cash out',
      maxBarThickness: 10,
      barThickness: 12,
    },
  ];
  const incomeDataset = incomeState !== null && [
    {
      data: incomeState.total[1],
      backgroundColor: '#5F63F250',
      hoverBackgroundColor: '#5F63F2',
      label: 'Total Income',
    },
    {
      data: incomeState.sale[1],
      backgroundColor: '#FF69A550',
      hoverBackgroundColor: '#FF69A5',
      label: 'Cost of goods sold',
    },
    {
      data: incomeState.expense[1],
      backgroundColor: '#FA8B0C40',
      hoverBackgroundColor: '#FA8B0C',
      label: 'Total expenses',
    },
    {
      data: incomeState.profit[1],
      backgroundColor: '#20C99740',
      hoverBackgroundColor: '#20C997',
      label: 'Net profit',
    },
  ];
  return (
    <>
      <PageHeader
        ghost
        title="Finance Dashboard"
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
          <Col xxl={12} xs={24}>
            <Row gutter={25}>
              <Col md={12}>
                <Focard>
                  <div className="forcast-card-box">
                    <Cards headless title="Net Profit">
                      <div className="focard-details growth-downward">
                        <Heading as="h1">$25.3k</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="arrow-down" /> 25%
                          </span>
                          <span>Since last month</span>
                        </p>
                      </div>
                      <ChartjsAreaChart
                        id="netProfit"
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                        datasets={[
                          {
                            data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                            borderColor: '#5F63F2',
                            borderWidth: 3,
                            fill: true,
                            pointHoverBackgroundColor: '#5F63F2',
                            pointHoverBorderWidth: 0,
                            pointHoverBorderColor: 'transparent',
                            backgroundColor: () =>
                              chartLinearGradient(document.getElementById('netProfit'), 80, {
                                start: '#5F63F212',
                                end: '#5F63F202',
                              }),
                          },
                        ]}
                        height={80}
                      />
                    </Cards>
                  </div>
                </Focard>
              </Col>
              <Col md={12}>
                <Focard>
                  <div className="forcast-card-box">
                    <Cards headless title="Gross Profit">
                      <div className="focard-details growth-upward">
                        <Heading as="h1">$82.24k</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="arrow-up" /> 25%
                          </span>
                          <span>Since last month</span>
                        </p>
                      </div>
                      <ChartjsAreaChart
                        id="grossProfit"
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                        datasets={[
                          {
                            data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                            borderColor: '#20C997',
                            borderWidth: 3,
                            fill: true,
                            pointHoverBackgroundColor: '#20c997',
                            pointHoverBorderWidth: 0,
                            pointHoverBorderColor: 'transparent',
                            backgroundColor: () =>
                              chartLinearGradient(document.getElementById('grossProfit'), 80, {
                                start: '#20C99712',
                                end: '#20C99702',
                              }),
                          },
                        ]}
                        height={80}
                      />
                    </Cards>
                  </div>
                </Focard>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <RatioCard>
                  <Cards headless title="Quick Ratio">
                    <div className="ratio-content">
                      <Heading as="h1">1.8</Heading>
                      <Progress percent={80} className="progress-success" />
                      <p>
                        <strong>1 or higher</strong> quick ratio target
                      </p>
                    </div>
                  </Cards>
                </RatioCard>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <RatioCard>
                  <Cards headless title="Current Ratio">
                    <div className="ratio-content">
                      <Heading as="h1">2.4</Heading>
                      <Progress percent={72} status="warning" />
                      <p>
                        <strong>3 or higher</strong> current ratio target
                      </p>
                    </div>
                  </Cards>
                </RatioCard>
              </Col>
            </Row>
          </Col>
          <Col xxl={12} xs={24}>
            {cashFlowState !== null && (
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.cashFlowActive === 'week' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeCash('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.cashFlowActive === 'month' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeCash('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.cashFlowActive === 'year' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeCash('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title={
                  <div>
                    Cash Flow <span>Nov 23, 2019 - Nov 29, 2019</span>
                  </div>
                }
                size="large"
                more={moreContent}
              >
                {cfIsLoading ? (
                  <div className="sd-spin">
                    <Spin />
                  </div>
                ) : (
                  <CardBarChart>
                    <div className="card-bar-top d-flex flex-grid">
                      <div className="flex-grid-child">
                        <p>Current Balance</p>
                        <Heading as="h3" className="color-primary">
                          ${cashFlowState.current}
                        </Heading>
                      </div>
                      <div className="flex-grid-child">
                        <p>Cash In</p>
                        <Heading as="h3">${cashFlowState.in}</Heading>
                      </div>
                      <div className="flex-grid-child">
                        <p>Cash Out</p>
                        <Heading as="h3">${cashFlowState.out}</Heading>
                      </div>
                    </div>
                    <ChartjsBarChartTransparent
                      labels={cashFlowState.labels}
                      datasets={cashFlowDataset}
                      height={106}
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
                          position: 'bottom',
                          align: 'start',
                          labels: {
                            boxWidth: 6,
                            display: false,
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
                                max: Math.max(...cashFlowState.dataIn),
                                stepSize: Math.floor(Math.max(...cashFlowState.dataIn) / 5),
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
                                zeroLineColor: '#fff',
                                color: 'transparent',
                                z: 1,
                              },
                              ticks: {
                                beginAtZero: true,
                                fontSize: 12,
                                fontColor: '#182b49',
                              },
                            },
                          ],
                        },
                      }}
                    />
                    <ul className="chart-dataIndicator">
                      {cashFlowDataset &&
                        cashFlowDataset.map((item, key) => {
                          return (
                            <li key={key + 1} style={{ display: 'inline-flex', alignItems: 'center' }}>
                              <span
                                style={{
                                  width: '10px',
                                  height: '10px',
                                  display: 'flex',
                                  backgroundColor: item.hoverBackgroundColor,
                                  borderRadius: '50%',
                                  margin: '0px 6.5px',
                                }}
                              />
                              {item.label}
                            </li>
                          );
                        })}
                    </ul>
                  </CardBarChart>
                )}
              </Cards>
            )}
          </Col>
          <Col md={24}>
            <IncomeExpenseWrapper>
              {incomeState !== null && (
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li className={state.incomeFlowActive === 'week' ? 'active' : 'regular'}>
                          <Link onClick={() => handleActiveChangeIncome('week')} to="#">
                            Week
                          </Link>
                        </li>
                        <li className={state.incomeFlowActive === 'month' ? 'active' : 'regular'}>
                          <Link onClick={() => handleActiveChangeIncome('month')} to="#">
                            Month
                          </Link>
                        </li>
                        <li className={state.incomeFlowActive === 'year' ? 'active' : 'regular'}>
                          <Link onClick={() => handleActiveChangeIncome('year')} to="#">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  title={
                    <div>
                      Income And Expenses <span>Nov 23, 2019 - Nov 29, 2019</span>
                    </div>
                  }
                  size="large"
                  more={moreContent}
                >
                  {isIcLoading ? (
                    <div className="sd-spin">
                      <Spin />
                    </div>
                  ) : (
                    <Row gutter="25">
                      <Col xxl={6} sm={24}>
                        <ExList>
                          <div>
                            <p>Total income</p>
                            <Heading as="h1">
                              <span>${incomeState.total[0]}</span>
                              <sub>
                                <span>
                                  <FeatherIcon icon="arrow-up" /> 37%
                                </span>
                                Since last month
                              </sub>
                            </Heading>
                          </div>
                          <div>
                            <p>Total expenses</p>
                            <Heading as="h1">
                              <span>${incomeState.sale[0]}</span>
                              <sub className="growth-downward">
                                <span>
                                  <FeatherIcon icon="arrow-down" /> 25%
                                </span>
                                Since last month
                              </sub>
                            </Heading>
                          </div>
                          <div>
                            <p>Cost of goods sold</p>
                            <Heading as="h1">
                              <span>${incomeState.expense[0]}</span>
                              <sub>
                                <span>
                                  <FeatherIcon icon="arrow-up" /> 25%
                                </span>
                                Since last month
                              </sub>
                            </Heading>
                          </div>
                          <div>
                            <p>Net profit</p>
                            <Heading as="h1">
                              <span>${incomeState.profit[0]}</span>
                              <sub>
                                <span>
                                  <FeatherIcon icon="arrow-up" /> 25%
                                </span>
                                Since last month
                              </sub>
                            </Heading>
                          </div>
                        </ExList>
                      </Col>
                      <Col xxl={18} xs={24}>
                        <ChartjsBarChartTransparent
                          labels={incomeState.labels}
                          datasets={incomeDataset}
                          height={88}
                          options={{
                            maintainAspectRatio: true,
                            responsive: true,
                            legend: {
                              display: false,
                              position: 'bottom',
                              labels: {
                                boxWidth: 6,
                                display: true,
                                usePointStyle: true,
                              },
                              align: 'start',
                            },
                            layout: {
                              padding: {
                                left: '0',
                                right: 0,
                                top: 0,
                                bottom: '0',
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
                                    max: Math.max(...incomeState.sale[1]),
                                    stepSize: Math.max(...incomeState.sale[1]) / 5,
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
                                    zeroLineColor: '#fff',
                                    color: 'transparent',
                                    z: 1,
                                  },
                                  barPercentage: 0.6,
                                  ticks: {
                                    beginAtZero: true,
                                    fontSize: 13,
                                    fontColor: '#182b49',
                                  },
                                },
                              ],
                            },
                          }}
                        />
                        <ul className="chart-dataIndicator">
                          {incomeDataset &&
                            incomeDataset.map((item, index) => {
                              return (
                                <li key={index + 1} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                  <span
                                    style={{
                                      width: '10px',
                                      height: '10px',
                                      display: 'flex',
                                      backgroundColor: item.hoverBackgroundColor,
                                      borderRadius: '50%',
                                      margin: '0px 5px',
                                    }}
                                  />
                                  {item.label}
                                </li>
                              );
                            })}
                        </ul>
                      </Col>
                    </Row>
                  )}
                </Cards>
              )}
            </IncomeExpenseWrapper>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="account-card">
              <Cards title="Account Receivable" more={moreContent}>
                <ChartjsLineChart
                  labels={['Current', '1-30', '30-60', '60-90', '91+']}
                  datasets={[
                    {
                      data: [105, 145, 95, 149, 90],
                      borderColor: '#FA8B0C',
                      borderWidth: 3,
                      fill: false,
                      pointBackgroundColor: '#FA8B0C',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: '#fff',
                      pointBorderWidth: 2,
                      pointHoverBorderWidth: 3,
                      pointHoverRadius: 5,
                      z: 5,
                    },
                  ]}
                  height={window.innerWidth <= 575 ? 230 : 100}
                  options={{
                    legend: {
                      display: false,
                    },
                    elements: {
                      point: {
                        radius: 5,
                        z: 5,
                      },
                    },

                    tooltips: {
                      mode: 'label',
                      intersect: false,
                      backgroundColor: '#ffffff',
                      position: 'average',
                      titleFontColor: '#5A5F7D',
                      titleFontSize: 13,
                      titleSpacing: 15,
                      bodyFontColor: '#868EAE',
                      bodyFontSize: 12,
                      borderColor: '#F1F2F6',
                      borderWidth: 2,
                      bodySpacing: 15,
                      xPadding: 15,
                      yPadding: 15,
                      z: 999999,
                      custom(tooltip) {
                        if (!tooltip) return;
                        // disable displaying the color box;
                        tooltip.displayColors = false;
                      },
                      callbacks: {
                        title() {
                          return `Account Receivable`;
                        },
                        label(t, d) {
                          const { yLabel, xLabel } = t;
                          return `${xLabel}: $${yLabel}k`;
                        },
                        labelColor(tooltipItem, chart) {
                          return {
                            backgroundColor: '#000',
                            borderColor: 'transparent',
                          };
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
                            max: 200,
                            stepSize: 50,
                            padding: 10,
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
                          },
                        },
                      ],
                    },
                  }}
                />
              </Cards>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="account-card">
              <Cards title="Account Payable" more={moreContent}>
                <ChartjsLineChart
                  labels={['Current', '1-30', '30-60', '60-90', '91+']}
                  datasets={[
                    {
                      data: [80, 160, 105, 140, 107],
                      borderColor: '#2C99FF',
                      borderWidth: 3,
                      fill: false,
                      pointBackgroundColor: '#2C99FF',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: '#fff',
                      pointBorderWidth: 2,
                      pointHoverBorderWidth: 3,
                      pointHoverRadius: 5,
                      z: 5,
                    },
                  ]}
                  height={window.innerWidth <= 575 ? 230 : 100}
                  options={{
                    legend: {
                      display: false,
                    },
                    elements: {
                      point: {
                        radius: 5,
                        z: 5,
                      },
                    },

                    tooltips: {
                      mode: 'label',
                      intersect: false,
                      backgroundColor: '#ffffff',
                      position: 'average',
                      titleFontColor: '#5A5F7D',
                      titleFontSize: 13,
                      titleSpacing: 15,
                      bodyFontColor: '#868EAE',
                      bodyFontSize: 12,
                      borderColor: '#F1F2F6',
                      borderWidth: 2,
                      bodySpacing: 15,
                      xPadding: 15,
                      yPadding: 15,
                      z: 999999,
                      // enabled: false,
                      // custom: customTooltips,
                      custom(tooltip) {
                        if (!tooltip) return;
                        tooltip.displayColors = false;
                      },
                      callbacks: {
                        title() {
                          return `Account Payable`;
                        },
                        label(t, d) {
                          const { yLabel, xLabel } = t;
                          return `${xLabel}: $${yLabel}k`;
                        },
                        labelColor(tooltipItem, chart) {
                          return {
                            backgroundColor: '#000',
                            borderColor: 'transparent',
                          };
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
                            max: 200,
                            stepSize: 50,
                            padding: 10,
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
                          },
                        },
                      ],
                    },
                  }}
                />
              </Cards>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Business;
