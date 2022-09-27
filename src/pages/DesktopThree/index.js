import React from "react";

import { Column, Row, Img, Text, Grid, Stack, Button, Input } from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const DesktopThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/cartpage");
  }
  function handleNavigate2() {
    navigate("/loginflowotp");
  }
  function handleNavigate3() {
    navigate("/loginflowmobile");
  }
  function handleNavigate4() {
    navigate("/productdetailspageproductdescription");
  }

  return (
    <>
      <Column
        className="bg-gray_100 font-lato mx-[auto] w-[100%]"
        compid="1:1569"
        comptype="Column"
      >
        <Column
          className="items-center w-[100%]"
          compid="151"
          comptype="Column"
        >
          <Row
            className="bg-yellow_100 font-inter items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
            compid="1:1570"
            comptype="Row"
          >
            <Img
              src="images/img_reply.svg"
              className="reply"
              compid="I1:1570;137:389;13:1705"
              comptype="Image"
              alt="reply"
            />
            <Text
              className="FastEasyand"
              compid="I1:1570;137:390"
              variant="body7"
              comptype="Text"
            >
              Fast, Easy and Free Returns
            </Text>
            <Img
              src="images/img_map.svg"
              className="map"
              compid="I1:1570;137:392;13:3703"
              comptype="Image"
              alt="map"
            />
            <Text
              className="price"
              compid="I1:1570;137:393"
              variant="body7"
              comptype="Text"
            >
              <span className="text-bluegray_900 font-inter lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                Free shipping on order above ₹1000{" "}
              </span>
              <span className="text-bluegray_900 font-inter font-normal underline lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                Learn More
              </span>
            </Text>
            <Img
              src="images/img_computer.svg"
              className="computer"
              compid="I1:1570;137:395;13:686"
              comptype="Image"
              alt="computer"
            />
            <Text
              className="SecurePayments"
              compid="I1:1570;137:396"
              variant="body7"
              comptype="Text"
            >
              Secure Payments
            </Text>
          </Row>
          <Header1
            className="font-inter w-[100%]"
            compid="67"
            comptype="Header"
            ontrashClick={handleNavigate1}
            onfavoriteClick={handleNavigate2}
            onuserClick={handleNavigate3}
            onNewarrivalClick={handleNavigate4}
          />
          <Text
            className="font-extrabold font-lato lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] text-gray_900 tracking-ls1 uppercase w-[auto]"
            compid="1:1573"
            variant="body1"
            comptype="Text"
          >
            SHOP BY CATAGORIES
          </Text>
          <Grid
            className="font-inter lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-6 lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[92%]"
            compid="149"
            comptype="Grid"
          >
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1575"
              style={{ backgroundImage: "url('images/img_categorycard.png')" }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="5"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1575;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop by men
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1576"
              style={{
                backgroundImage: "url('images/img_categorycard_186X200.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="6"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1576;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop by women
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1577"
              style={{
                backgroundImage: "url('images/img_categorycard_1.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="7"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1577;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop by sport
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1578"
              style={{
                backgroundImage: "url('images/img_categorycard_2.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="8"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1578;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop sports
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1579"
              style={{
                backgroundImage: "url('images/img_categorycard_3.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="9"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1579;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop new arrivals
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1580"
              style={{
                backgroundImage: "url('images/img_categorycard_4.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius24 w-[100%]"
                compid="10"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen_five"
                  compid="I1:1580;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop collaborations
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1581"
              style={{
                backgroundImage: "url('images/img_categorycard_5.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="11"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1581;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop by men
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1582"
              style={{
                backgroundImage: "url('images/img_categorycard_6.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="12"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1582;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop by women
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1583"
              style={{
                backgroundImage: "url('images/img_categorycard_7.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="13"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1583;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop by sport
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1584"
              style={{
                backgroundImage: "url('images/img_categorycard_8.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="14"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1584;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop sports
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1585"
              style={{
                backgroundImage: "url('images/img_categorycard_9.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="15"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:1585;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop new arrivals
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:1586"
              style={{
                backgroundImage: "url('images/img_categorycard_10.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius24 w-[100%]"
                compid="16"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen_five"
                  compid="I1:1586;21:340"
                  variant="body5"
                  comptype="Text"
                >
                  Shop collaborations
                </Text>
              </Column>
            </Column>
          </Grid>
          <Stack
            className="font-montserrat lg:h-[1756px] xl:h-[2008px] 2xl:h-[2259px] 3xl:h-[2710px] w-[100%]"
            compid="112"
            comptype="Stack"
          >
            <Stack
              className="absolute bottom-[0] lg:h-[1255px] xl:h-[1435px] 2xl:h-[1615px] 3xl:h-[1937px] w-[100%]"
              compid="118"
              comptype="Stack"
            >
              <Row
                className="absolute justify-between left-[8%] top-[38%] w-[48%]"
                compid="130"
                comptype="Row"
              >
                <Row
                  className="bg-white_A700 border border-gray_301 border-solid items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius32 w-[20%]"
                  compid="1:1589"
                  comptype="Row"
                >
                  <Text
                    className="font-semibold ml-[2px] text-black_900 w-[auto]"
                    compid="1:1591"
                    variant="body5"
                    comptype="Text"
                  >
                    ₹
                  </Text>
                  <Text
                    className="font-extrabold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] text-black_900 w-[auto]"
                    compid="1:1590"
                    variant="body1"
                    comptype="Text"
                  >
                    2,900
                  </Text>
                </Row>
                <Column
                  className="items-end w-[7%]"
                  compid="1:1592"
                  comptype="Column"
                >
                  <Img
                    src="images/img_grid.svg"
                    className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] w-[67%]"
                    compid="1:1594"
                    comptype="Image"
                    alt="grid"
                  />
                  <Text
                    className="font-semibold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] text-white_A700 w-[auto]"
                    compid="1:1593"
                    variant="body6"
                    comptype="Text"
                  >
                    Colour
                  </Text>
                </Column>
              </Row>
              <Column
                className="absolute bg-white_A700 font-lato justify-center lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] lg:py-[46px] xl:py-[53px] 2xl:py-[60px] 3xl:py-[72px] rounded-bl-[0] rounded-br-[0] rounded-tl-[96px] rounded-tr-[96px] w-[100%]"
                compid="4"
                comptype="Column"
              >
                <Row
                  className="items-end justify-end 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] mt-[4px] pb-[2px] pr-[2px] w-[88%]"
                  compid="1:1608"
                  comptype="Row"
                >
                  <Text
                    className="leading-[normal] mb-[4px] text-black_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[21%]"
                    compid="1:1609"
                    as="h3"
                    variant="h3"
                    comptype="Text"
                  >
                    Hand Picked
                    <br />
                    for You.
                  </Text>
                  <Text
                    className="font-bold leading-[normal] lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] text-gray_800 tracking-ls1 w-[33%]"
                    compid="1:1610"
                    variant="body1"
                    comptype="Text"
                  >
                    {`For us, comfort isn't rocket science -`}
                    <br />
                    Ist Standard
                  </Text>
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[1px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="1:1614"
                    comptype="Image"
                    alt="clock"
                  />
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mr-[1px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="1:1620"
                    comptype="Image"
                    alt="clock One"
                  />
                </Row>
                <Row
                  className="items-center justify-end lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]"
                  compid="1:1603"
                  comptype="Row"
                >
                  <Img
                    src="images/img_rectangle13.png"
                    className="lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] rounded-radius64 w-[31%]"
                    compid="1:1604"
                    comptype="Image"
                    alt="RectangleThirteen"
                  />
                  <Img
                    src="images/img_rectangle14.png"
                    className="lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius64 w-[31%]"
                    compid="1:1605"
                    comptype="Image"
                    alt="RectangleFourteen"
                  />
                  <Img
                    src="images/img_rectangle15.png"
                    className="lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius64 w-[31%]"
                    compid="1:1606"
                    comptype="Image"
                    alt="RectangleFifteen"
                  />
                  <Img
                    src="images/img_rectangle16.png"
                    className="lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-bl-[64px] rounded-br-[0] rounded-tl-[64px] rounded-tr-[0] w-[3%]"
                    compid="1:1607"
                    comptype="Image"
                    alt="RectangleSixteen"
                  />
                </Row>
                <Stack
                  className="lg:h-[554px] xl:h-[634px] 2xl:h-[713px] 3xl:h-[855px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[87%]"
                  compid="116"
                  comptype="Stack"
                >
                  <Row
                    className="absolute justify-between pl-[4px] right-[0] w-[73%]"
                    compid="1:1624"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[325px] xl:mt-[372px] 2xl:mt-[419px] 3xl:mt-[503px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      compid="I1:1634;1:1614"
                      comptype="Image"
                      alt="clock Two"
                    />
                    <Img
                      src="images/img_clock.svg"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[325px] xl:mt-[372px] 2xl:mt-[419px] 3xl:mt-[503px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      compid="I1:1635;1:1620"
                      comptype="Image"
                      alt="clock Three"
                    />
                    <Img
                      src="images/img_rectangle29.png"
                      className="lg:h-[554px] xl:h-[634px] 2xl:h-[713px] 3xl:h-[855px] rounded-radius64 w-[61%]"
                      compid="1:1625"
                      comptype="Image"
                      alt="RectangleTwentyNine"
                    />
                    <Column
                      className="items-center rounded-radius48 w-[22%]"
                      compid="1:1626"
                      comptype="Column"
                    >
                      <Img
                        src="images/img_rectangle30.png"
                        className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius48 w-[100%]"
                        compid="1:1627"
                        comptype="Image"
                        alt="RectangleThirty"
                      />
                      <Img
                        src="images/img_rectangle31.png"
                        className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius48 w-[100%]"
                        compid="1:1628"
                        comptype="Image"
                        alt="RectangleThirtyOne"
                      />
                      <Img
                        src="images/img_rectangle32.png"
                        className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius48 w-[100%]"
                        compid="1:1629"
                        comptype="Image"
                        alt="RectangleThirtyTwo"
                      />
                      <Column
                        className="bg-gray_200 border border-gray_801 border-solid items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius48 shadow-bs w-[100%]"
                        compid="1:1630"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] text-gray_900 tracking-ls1 w-[auto]"
                          compid="1:1632"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          View All
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                  <Column
                    className="absolute left-[0] pt-[3px] top-[0] w-[35%]"
                    compid="1:1637"
                    comptype="Column"
                  >
                    <Text
                      className="font-bold ml-[1px] text-gray_800 tracking-ls1 w-[auto]"
                      compid="1:1639"
                      variant="body1"
                      comptype="Text"
                    >
                      The Sneakers Edit
                    </Text>
                    <Text
                      className="font-extrabold leading-[normal] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-black_900 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[100%]"
                      compid="1:1640"
                      as="h2"
                      variant="h2"
                      comptype="Text"
                    >
                      White Sneakers
                      <br />
                      craze.
                    </Text>
                    <Text
                      className="leading-[132.02%] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] not-italic text-gray_802 tracking-ls1 w-[100%]"
                      compid="1:1641"
                      variant="body2"
                      comptype="Text"
                    >
                      Ineffable fashions has a great collection of vibrant and
                      creative collection of casual wear. All of them are found
                      in many styles, patterns and sizes.
                    </Text>
                  </Column>
                </Stack>
              </Column>
            </Stack>
            <Img
              src="images/img_blackflagcrea.png"
              className="absolute lg:h-[502px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] top-[0] w-[100%]"
              compid="1:1736"
              comptype="Image"
              alt="BlackFlagCrea"
            />
          </Stack>
          <Row
            className="bg-cover bg-repeat font-lato justify-end lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
            compid="1:1644"
            style={{ backgroundImage: "url('images/img_group62.png')" }}
            comptype="Row"
          >
            <Column
              className="lg:mb-[142px] xl:mb-[162px] 2xl:mb-[183px] 3xl:mb-[219px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[34%]"
              compid="1:1645"
              comptype="Column"
            >
              <Text
                className="font-extrabold text-yellow_100 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
                compid="1:1646"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Our Story
              </Text>
              <Text
                className="leading-[132.02%] ml-[1px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic text-gray_101 tracking-ls1 w-[89%]"
                compid="1:1647"
                variant="body2"
                comptype="Text"
              >
                Ineffable fashions has a great collection of vibrant and
                creative collection of casual wear. All of them are found in
                many styles, patterns and sizes.
              </Text>
            </Column>
            <Stack
              className="bg-black_900_bf border-bw11 border-solid border-white_A700 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] lg:px-[40px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[62px] rounded-radius50 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
              compid="1:1648"
              comptype="Stack"
            >
              <Img
                src="images/img_play.svg"
                className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[28%]"
                compid="I1:1650;13:8142"
                comptype="Image"
                alt="play"
              />
            </Stack>
            <Row
              className="items-center justify-center lg:ml-[125px] xl:ml-[143px] 2xl:ml-[161px] 3xl:ml-[193px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] lg:mt-[297px] xl:mt-[339px] 2xl:mt-[382px] 3xl:mt-[458px] rounded-radius35 w-[30%]"
              compid="1:1651"
              comptype="Row"
            >
              <Button
                className="font-black lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 text-center w-[53%]"
                compid="1:1652"
                comptype="Button"
                shape="CircleBorder35"
                size="2xl"
                variant="FillWhiteA700"
              >
                Watch Film
              </Button>
              <Button
                className="font-black lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[42%]"
                compid="1:1655"
                comptype="Button"
                shape="CircleBorder35"
                size="2xl"
                variant="FillBlueA100"
              >
                Our Story
              </Button>
            </Row>
          </Row>
        </Column>
        <Column
          className="items-end lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] w-[100%]"
          compid="152"
          comptype="Column"
        >
          <div
            className="overflow-x-auto w-[100%]"
            compid="150"
            comptype="HorizontalScroll"
          >
            <Stack
              className="lg:h-[618px] xl:h-[707px] 2xl:h-[795px] 3xl:h-[954px] overflow-auto w-[100%]"
              compid="114"
              comptype="Stack"
            >
              <Stack
                className="absolute bottom-[0] lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] left-[0] w-[31%]"
                compid="1:1667"
                comptype="Stack"
              >
                <Column
                  className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                  compid="1:1668"
                  comptype="Column"
                >
                  <Text
                    className="leading-[normal] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_902 uppercase w-[75%]"
                    compid="1:1670"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    The Streetwear
                    <br />
                    Selection
                  </Text>
                  <Text
                    className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowbaggyjoggers"
                    compid="1:1671"
                    comptype="Text"
                  >
                    Casual Jackets
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
                    compid="135"
                    comptype="Row"
                  >
                    <Text
                      className="mt-[1px] rowbaggyjoggers"
                      compid="1:1672"
                      comptype="Text"
                    >
                      Baggy Joggers
                    </Text>
                    <Text
                      className="mb-[1px] rowbaggyjoggers"
                      compid="1:1674"
                      comptype="Text"
                    >
                      Sports Jackets
                    </Text>
                  </Row>
                  <Row
                    className="lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]"
                    compid="136"
                    comptype="Row"
                  >
                    <Text
                      className="mt-[2px] rowbaggyjoggers"
                      compid="1:1675"
                      comptype="Text"
                    >
                      Round Caps
                    </Text>
                    <Text
                      className="mb-[2px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowbaggyjoggers"
                      compid="1:1673"
                      comptype="Text"
                    >
                      Accessories
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle41.png"
                  className="RectangleFortyOne"
                  compid="1:1676"
                  comptype="Image"
                  alt="RectangleFortyOne"
                />
              </Stack>
              <Stack
                className="absolute bottom-[0] lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] left-[32%] w-[31%]"
                compid="1:1677"
                comptype="Stack"
              >
                <Column
                  className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                  compid="1:1678"
                  comptype="Column"
                >
                  <Text
                    className="leading-[normal] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_902 uppercase w-[46%]"
                    compid="1:1680"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    The Tee
                    <br />
                    Selection
                  </Text>
                  <Text
                    className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowbaggyjoggers"
                    compid="1:1681"
                    comptype="Text"
                  >
                    Casual Jackets
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
                    compid="140"
                    comptype="Row"
                  >
                    <Text
                      className="mt-[1px] rowbaggyjoggers"
                      compid="1:1682"
                      comptype="Text"
                    >
                      Baggy Joggers
                    </Text>
                    <Text
                      className="mb-[1px] rowbaggyjoggers"
                      compid="1:1684"
                      comptype="Text"
                    >
                      Sports Jackets
                    </Text>
                  </Row>
                  <Row
                    className="lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]"
                    compid="141"
                    comptype="Row"
                  >
                    <Text
                      className="mt-[2px] rowbaggyjoggers"
                      compid="1:1685"
                      comptype="Text"
                    >
                      Round Caps
                    </Text>
                    <Text
                      className="mb-[2px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowbaggyjoggers"
                      compid="1:1683"
                      comptype="Text"
                    >
                      Accessories
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle56.png"
                  className="RectangleFortyOne"
                  compid="1:1686"
                  comptype="Image"
                  alt="RectangleFiftySix"
                />
              </Stack>
              <Stack
                className="absolute bottom-[0] lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] right-[12%] w-[23%]"
                compid="1:1687"
                comptype="Stack"
              >
                <Column
                  className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                  compid="1:1688"
                  comptype="Column"
                >
                  <Text
                    className="leading-[normal] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_902 uppercase w-[68%]"
                    compid="1:1690"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    The Tee
                    <br />
                    Selection
                  </Text>
                  <Text
                    className="lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rowbaggyjoggers"
                    compid="1:1691"
                    comptype="Text"
                  >
                    Sports Tee
                  </Text>
                  <Text
                    className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowbaggyjoggers"
                    compid="1:1692"
                    comptype="Text"
                  >
                    Sports Shorts
                  </Text>
                  <Text
                    className="lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rowbaggyjoggers"
                    compid="1:1693"
                    comptype="Text"
                  >
                    Sports Joggers
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle57.png"
                  className="RectangleFortyOne"
                  compid="1:1694"
                  comptype="Image"
                  alt="RectangleFiftySeven"
                />
              </Stack>
              <Column
                className="absolute justify-end xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[9px] right-[0] w-[100%]"
                compid="1:1722"
                comptype="Column"
              >
                <Row
                  className="mr-[auto] pr-[4px] w-[85%]"
                  compid="1:1723"
                  comptype="Row"
                >
                  <Text
                    className="rowalsoexplore"
                    compid="1:1724"
                    as="h2"
                    variant="h2"
                    comptype="Text"
                  >
                    Also Explore
                  </Text>
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[1062px] lg:ml-[688px] xl:ml-[787px] 2xl:ml-[885px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="I1:1726;1:1614"
                    comptype="Image"
                    alt="clock Four"
                  />
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="I1:1727;1:1620"
                    comptype="Image"
                    alt="clock Five"
                  />
                </Row>
                <Stack
                  className="lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] xl:ml-[1095px] 2xl:ml-[1232px] 3xl:ml-[1479px] lg:ml-[958px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[20%]"
                  compid="1:1728"
                  comptype="Stack"
                >
                  <Column
                    className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                    compid="1:1729"
                    comptype="Column"
                  >
                    <Text
                      className="leading-[normal] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_902 uppercase w-[68%]"
                      compid="1:1731"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      The Tee
                      <br />
                      Selection
                    </Text>
                    <Text
                      className="lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rowbaggyjoggers"
                      compid="1:1732"
                      comptype="Text"
                    >
                      Sports Tee
                    </Text>
                    <Text
                      className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowbaggyjoggers"
                      compid="1:1733"
                      comptype="Text"
                    >
                      Sports Shorts
                    </Text>
                    <Text
                      className="lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rowbaggyjoggers"
                      compid="1:1734"
                      comptype="Text"
                    >
                      Sports Joggers
                    </Text>
                  </Column>
                  <Img
                    src="images/img_rectangle59.png"
                    className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] left-[0] rounded-radius24 top-[0] w-[82%]"
                    compid="1:1735"
                    comptype="Image"
                    alt="RectangleFiftyNine"
                  />
                </Stack>
              </Column>
            </Stack>
          </div>
        </Column>
        <Column
          className="items-center lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]"
          compid="153"
          comptype="Column"
        >
          <Stack
            className="lg:h-[439px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] w-[92%]"
            compid="113"
            comptype="Stack"
          >
            <Text
              className="absolute left-[0] top-[0] rowalsoexplore"
              compid="1:1658"
              as="h2"
              variant="h2"
              comptype="Text"
            >
              They Say it, We don't!
            </Text>
            <Column
              className="absolute items-end top-[0] w-[100%]"
              compid="1:1659"
              comptype="Column"
            >
              <Row
                className="items-center ml-[auto] p-[4px] w-[8%]"
                compid="1:1664"
                comptype="Row"
              >
                <Img
                  src="images/img_clock.svg"
                  className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  compid="I1:1665;1:1614"
                  comptype="Image"
                  alt="clock Six"
                />
                <Img
                  src="images/img_clock.svg"
                  className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  compid="I1:1666;1:1620"
                  comptype="Image"
                  alt="clock Seven"
                />
              </Row>
              <Row
                className="items-center justify-between lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]"
                compid="133"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle52.png"
                  className="RectangleFiftyTwo"
                  compid="1:1660"
                  comptype="Image"
                  alt="RectangleFiftyTwo"
                />
                <Img
                  src="images/img_rectangle57.png"
                  className="RectangleFiftyTwo"
                  compid="1:1663"
                  comptype="Image"
                  alt="RectangleFiftyThree"
                />
                <Img
                  src="images/img_rectangle54.png"
                  className="RectangleFiftyTwo"
                  compid="1:1661"
                  comptype="Image"
                  alt="RectangleFiftyFour"
                />
                <Img
                  src="images/img_rectangle55.png"
                  className="RectangleFiftyTwo"
                  compid="1:1662"
                  comptype="Image"
                  alt="RectangleFiftyFive"
                />
              </Row>
            </Column>
          </Stack>
          <Column
            className="bg-cover bg-repeat items-center lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:p-[46px] xl:p-[53px] 2xl:p-[60px] 3xl:p-[72px] w-[100%]"
            compid="1:1695"
            style={{ backgroundImage: "url('images/img_group72.png')" }}
            comptype="Column"
          >
            <Text
              className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] text-yellow_100 tracking-ls1 w-[auto]"
              compid="1:1700"
              variant="body1"
              comptype="Text"
            >
              Making of a Shoe
            </Text>
            <Stack
              className="bg-black_900_bf border-bw11 border-solid border-white_A700 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mb-[173px] xl:mb-[198px] 2xl:mb-[223px] 3xl:mb-[267px] lg:mt-[122px] xl:mt-[139px] 2xl:mt-[157px] 3xl:mt-[188px] lg:px-[40px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[62px] rounded-radius50 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
              compid="1:1697"
              comptype="Stack"
            >
              <Img
                src="images/img_play.svg"
                className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[28%]"
                compid="I1:1699;13:8142"
                comptype="Image"
                alt="play One"
              />
            </Stack>
          </Column>
          <Column
            className="lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] rounded-radius24 w-[92%]"
            compid="1:1701"
            comptype="Column"
          >
            <Text
              className="font-bold font-lato ml-[1px] text-gray_800 tracking-ls1 w-[auto]"
              compid="1:1703"
              variant="body1"
              comptype="Text"
            >
              Only @Rapidbox. Not seen anywhere else
            </Text>
            <Text
              className="font-rubik lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-black_900 uppercase w-[auto]"
              compid="1:1704"
              as="h1"
              variant="h1"
              comptype="Text"
            >
              Newest in the town
            </Text>
            <Row
              className="items-center justify-between lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius24 w-[100%]"
              compid="1:1705"
              comptype="Row"
            >
              <Img
                src="images/img_rectangle29.png"
                className="lg:h-[263px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[41%]"
                compid="1:1706"
                comptype="Image"
                alt="RectangleFortyFour"
              />
              <Img
                src="images/img_rectangle30.png"
                className="lg:h-[263px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[24%]"
                compid="1:1707"
                comptype="Image"
                alt="RectangleFortyFive"
              />
              <Img
                src="images/img_rectangle31.png"
                className="lg:h-[263px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[32%]"
                compid="1:1708"
                comptype="Image"
                alt="RectangleFortySix"
              />
            </Row>
          </Column>
          <Column
            className="bg-white_A700 items-center lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] rounded-bl-[0] rounded-br-[0] rounded-tl-[96px] rounded-tr-[96px] w-[100%]"
            compid="1:1709"
            comptype="Column"
          >
            <Column
              className="items-center lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius8 w-[49%]"
              compid="1:1711"
              comptype="Column"
            >
              <Text
                className="font-black text-black_900 w-[auto]"
                compid="1:1714"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Stay in Touch
              </Text>
              <Text
                className="font-bold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-gray_800 tracking-ls1 w-[auto]"
                compid="1:1713"
                variant="body1"
                comptype="Text"
              >
                Only @Rapidbox. Not seen anywhere else
              </Text>
              <Row
                className="items-center justify-between lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius8 w-[100%]"
                compid="1:1715"
                comptype="Row"
              >
                <Stack
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] w-[65%]"
                  compid="117"
                  comptype="Stack"
                >
                  <Text
                    className="absolute bottom-[2%] font-bold left-[8%] text-gray_500 tracking-ls1 w-[auto]"
                    compid="1:1716"
                    variant="body1"
                    comptype="Text"
                  >
                    Enter Email
                  </Text>
                  <Input
                    className="absolute font-bold p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_500 text-gray_500 tracking-ls1 w-[100%]"
                    wrapClassName="absolute w-[100%]"
                    compid="18"
                    type="email"
                    comptype="EditText"
                    name="GroupEighteen"
                    placeholder="Enter Email"
                    size="lg"
                  ></Input>
                </Stack>
                <Button
                  className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[31%]"
                  compid="17"
                  comptype="Button"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillGray900"
                >
                  Subscribe
                </Button>
              </Row>
            </Column>
          </Column>
          <Footer
            className="bg-gray_903 font-inter w-[100%]"
            compid="1:1721"
            comptype="Footer"
          />
        </Column>
      </Column>
    </>
  );
};

export default DesktopThreePage;
