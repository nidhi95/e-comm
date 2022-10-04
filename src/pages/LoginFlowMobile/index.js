import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Stack,
  Line,
  Button,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const LoginFlowMobilePage = () => {
  return (
    <>
      <Column
        className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]"
        compid="13:2838"
        comptype="Column"
      >
        <Row
          className="bg-yellow_100 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
          compid="13:2839"
          comptype="Row"
        >
          <Row
            className="items-start justify-center 3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[88px] pr-[1px] pt-[1px] w-[28%]"
            compid="I13:2839;137:388"
            comptype="Row"
          >
            <Img
              src="images/img_reply.svg"
              className="reply"
              compid="I13:2839;137:389"
              comptype="Image"
              alt="reply"
            />
            <Text
              className="center"
              compid="I13:2839;137:390"
              variant="body8"
              comptype="Text"
            >
              Fast, Easy and Free Returns
            </Text>
          </Row>
          <List
            className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[58%]"
            compid="462"
            comptype="List"
            orientation="horizontal"
          >
            <Row
              className="items-center p-[1px] w-[100%]"
              compid="I13:2839;137:391"
              comptype="Row"
            >
              <Img
                src="images/img_car.svg"
                className="car"
                compid="I13:2839;137:392"
                comptype="Image"
                alt="car"
              />
              <Text
                className="left"
                compid="I13:2839;137:393"
                variant="body8"
                comptype="Text"
              >
                <span className="text-bluegray_900 font-inter lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                  Free shipping on order above ₹1000{" "}
                </span>
                <span className="text-bluegray_900 font-inter font-normal underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                  Learn More
                </span>
              </Text>
            </Row>
            <Row
              className="items-center justify-end pl-[1px] py-[1px] w-[100%]"
              compid="I13:2839;137:394"
              comptype="Row"
            >
              <Img
                src="images/img_computer.svg"
                className="computer"
                compid="I13:2839;137:395"
                comptype="Image"
                alt="computer"
              />
              <Text
                className="left"
                compid="I13:2839;137:396"
                variant="body8"
                comptype="Text"
              >
                Secure Payments
              </Text>
            </Row>
          </List>
        </Row>
        <Header className="w-[100%]" compid="414" comptype="Header" />
        <Stack
          className="font-lato lg:h-[591px] xl:h-[740px] 2xl:h-[832px] 3xl:h-[998px] w-[100%]"
          compid="13:2842"
          comptype="Stack"
        >
          <div
            className="absolute bg-white_A700 lg:h-[591px] xl:h-[739px] 2xl:h-[831px] 3xl:h-[997px] inset-y-[0] left-[0] my-[auto] shadow-bs2 w-[73%]"
            compid="13:2843"
            comptype="View"
          ></div>
          <Stack
            className="absolute lg:h-[533px] xl:h-[667px] 2xl:h-[750px] 3xl:h-[900px] inset-[0] justify-center m-[auto] w-[92%]"
            compid="13:2844"
            comptype="Stack"
          >
            <List
              className="absolute bottom-[0] gap-[0] min-h-[auto] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] w-[100%]"
              compid="456"
              comptype="List"
              orientation="vertical"
            >
              <Row className="listvector" compid="431" comptype="Row">
                <Button
                  className="flex items-center justify-center checkmark_Four"
                  compid="13:2933"
                  comptype="IconButton"
                  shape="icbRoundedBorder6"
                  size="smIcn"
                  variant="icbFillLightgreen800"
                >
                  <Img
                    src="images/img_vector.svg"
                    className="flex items-center justify-center"
                    alt="Vector"
                  />
                </Button>
                <Img
                  src="images/img_rectangle745.png"
                  className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius12 w-[9%]"
                  compid="13:2856"
                  comptype="Image"
                  alt="Rectangle827"
                />
                <Column className="w-[86%]" compid="449" comptype="Column">
                  <Row
                    className="items-end justify-between w-[100%]"
                    compid="432"
                    comptype="Row"
                  >
                    <Text
                      className="text-black_900 w-[auto]"
                      compid="13:2852"
                      variant="body3"
                      comptype="Text"
                    >
                      Chunky Derby sneakers
                    </Text>
                    <Line
                      className="bg-gray_400 h-[1px] mb-[3px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[28%]"
                      compid="13:2927"
                      comptype="Line"
                    />
                  </Row>
                  <Row
                    className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="433"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2853"
                      variant="body5"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_One1"
                      compid="13:2845"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Row
                      className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[8%]"
                      compid="13:2857"
                      comptype="Row"
                    >
                      <Column
                        className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                        compid="13:2864"
                        comptype="Column"
                      >
                        <div
                          className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                          compid="13:2866"
                          comptype="View"
                        ></div>
                      </Column>
                      <Text
                        className="rowfive2"
                        compid="13:2861"
                        variant="body5"
                        comptype="Text"
                      >
                        1
                      </Text>
                      <Stack
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                        compid="13:2858"
                        comptype="Stack"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="plus"
                          compid="13:2860"
                          comptype="Image"
                          alt="plus"
                        />
                      </Stack>
                    </Row>
                    <Text
                      className="price_One2"
                      compid="13:2846"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Button
                      className="font-bold lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] mt-[4px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[28%]"
                      compid="354"
                      comptype="Button"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillGray900"
                    >
                      Proceed to Payment
                    </Button>
                  </Row>
                  <Row
                    className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[20%]"
                    compid="444"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="checkmark_Four"
                      compid="13:2876"
                      comptype="Image"
                      alt="favorite One"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2854"
                      variant="body5"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      compid="13:2877"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2855"
                      variant="body5"
                      comptype="Text"
                    >
                      Delete
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Line
                className="self-center w-[75%] h-[1px] bg-gray_400"
                compid="13:2915"
                comptype="Line"
              />
              <Row
                className="items-center justify-between lg:mr-[330px] xl:mr-[413px] 2xl:mr-[465px] 3xl:mr-[558px] lg:my-[17px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[65%]"
                compid="436"
                comptype="Row"
              >
                <Button
                  className="flex items-center justify-center checkmark_Four"
                  compid="13:2936"
                  comptype="IconButton"
                  shape="icbRoundedBorder6"
                  size="smIcn"
                  variant="icbFillLightgreen800"
                >
                  <Img
                    src="images/img_vector.svg"
                    className="flex items-center justify-center"
                    alt="Vector One"
                  />
                </Button>
                <Img
                  src="images/img_rectangle802.png"
                  className="Rectangle830"
                  compid="13:2884"
                  comptype="Image"
                  alt="Rectangle830"
                />
                <Column className="w-[78%]" compid="450" comptype="Column">
                  <Text
                    className="text-black_900 w-[auto]"
                    compid="13:2880"
                    variant="body3"
                    comptype="Text"
                  >
                    Chunky Derby sneakers
                  </Text>
                  <Row
                    className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="437"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2881"
                      variant="body5"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_One1"
                      compid="13:2878"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Row
                      className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[13%]"
                      compid="13:2885"
                      comptype="Row"
                    >
                      <Column
                        className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                        compid="13:2892"
                        comptype="Column"
                      >
                        <div
                          className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                          compid="13:2894"
                          comptype="View"
                        ></div>
                      </Column>
                      <Text
                        className="rowfive2"
                        compid="13:2889"
                        variant="body5"
                        comptype="Text"
                      >
                        1
                      </Text>
                      <Stack
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                        compid="13:2886"
                        comptype="Stack"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="plus"
                          compid="13:2888"
                          comptype="Image"
                          alt="plus One"
                        />
                      </Stack>
                    </Row>
                    <Text
                      className="price_One2"
                      compid="13:2879"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[35%]"
                    compid="445"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="checkmark_Four"
                      compid="13:2896"
                      comptype="Image"
                      alt="favorite Two"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2882"
                      variant="body5"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      compid="13:2897"
                      comptype="Image"
                      alt="trash One"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2883"
                      variant="body5"
                      comptype="Text"
                    >
                      Delete
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Line
                className="self-center w-[75%] h-[1px] bg-gray_400"
                compid="13:2915"
                comptype="Line"
              />
              <Row
                className="items-center justify-between lg:mr-[330px] xl:mr-[413px] 2xl:mr-[465px] 3xl:mr-[558px] lg:my-[17px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[65%]"
                compid="440"
                comptype="Row"
              >
                <Button
                  className="flex items-center justify-center checkmark_Four"
                  compid="13:2939"
                  comptype="IconButton"
                  shape="icbRoundedBorder6"
                  size="smIcn"
                  variant="icbFillLightgreen800"
                >
                  <Img
                    src="images/img_vector.svg"
                    className="flex items-center justify-center"
                    alt="Vector Two"
                  />
                </Button>
                <Img
                  src="images/img_group134.png"
                  className="Rectangle830"
                  compid="13:2904"
                  comptype="Image"
                  alt="Rectangle830 One"
                />
                <Column className="w-[78%]" compid="451" comptype="Column">
                  <Text
                    className="text-black_900 w-[auto]"
                    compid="13:2900"
                    variant="body3"
                    comptype="Text"
                  >
                    Chunky Derby sneakers
                  </Text>
                  <Row
                    className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="441"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2901"
                      variant="body5"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_One1"
                      compid="13:2898"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Row
                      className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[13%]"
                      compid="13:2905"
                      comptype="Row"
                    >
                      <Column
                        className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                        compid="13:2912"
                        comptype="Column"
                      >
                        <div
                          className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                          compid="13:2914"
                          comptype="View"
                        ></div>
                      </Column>
                      <Text
                        className="rowfive2"
                        compid="13:2909"
                        variant="body5"
                        comptype="Text"
                      >
                        1
                      </Text>
                      <Stack
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                        compid="13:2906"
                        comptype="Stack"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="plus"
                          compid="13:2908"
                          comptype="Image"
                          alt="plus Two"
                        />
                      </Stack>
                    </Row>
                    <Text
                      className="price_One2"
                      compid="13:2899"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[35%]"
                    compid="446"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="checkmark_Four"
                      compid="13:2916"
                      comptype="Image"
                      alt="favorite Three"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2902"
                      variant="body5"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      compid="13:2917"
                      comptype="Image"
                      alt="trash Two"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2903"
                      variant="body5"
                      comptype="Text"
                    >
                      Delete
                    </Text>
                  </Row>
                </Column>
              </Row>
            </List>
            <Stack
              className="absolute lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] left-[0] top-[11%] w-[75%]"
              compid="461"
              comptype="Stack"
            >
              <Row
                className="absolute items-center left-[5%] top-[16%] w-[43%]"
                compid="429"
                comptype="Row"
              >
                <Text
                  className="mt-[1px] rowprice_four"
                  compid="13:2847"
                  variant="body5"
                  comptype="Text"
                >
                  ALL
                </Text>
                <Text
                  className="xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[87px] mt-[1px] rowprice_four"
                  compid="13:2848"
                  variant="body5"
                  comptype="Text"
                >
                  ITEM
                </Text>
                <Text
                  className="mb-[1px] lg:ml-[130px] xl:ml-[163px] 2xl:ml-[184px] 3xl:ml-[220px] rowprice_four"
                  compid="13:2849"
                  variant="body5"
                  comptype="Text"
                >
                  PRICE
                </Text>
              </Row>
              <Stack
                className="absolute lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[100%]"
                compid="426"
                comptype="Stack"
              >
                <Row
                  className="absolute bottom-[0] items-start justify-between right-[15%] w-[28%]"
                  compid="427"
                  comptype="Row"
                >
                  <Text
                    className="mt-[1px] rowprice_four"
                    compid="13:2850"
                    variant="body5"
                    comptype="Text"
                  >
                    QTY
                  </Text>
                  <Text
                    className="rowprice_four"
                    compid="13:2851"
                    variant="body5"
                    comptype="Text"
                  >
                    TOTAL
                  </Text>
                </Row>
                <Line
                  className="absolute bg-gray_400 bottom-[3%] h-[1px] w-[100%]"
                  compid="13:2868"
                  comptype="Line"
                />
                <Button
                  className="absolute flex items-center justify-center left-[0] top-[0] checkmark_Four"
                  compid="13:2930"
                  comptype="IconButton"
                  shape="icbRoundedBorder6"
                  size="smIcn"
                  variant="icbFillLightgreen800"
                >
                  <Img
                    src="images/img_vector.svg"
                    className="flex items-center justify-center"
                    alt="Vector Three"
                  />
                </Button>
              </Stack>
            </Stack>
            <Column
              className="absolute justify-start top-[0] w-[100%]"
              compid="447"
              comptype="Column"
            >
              <Row
                className="items-center w-[21%]"
                compid="13:2870"
                comptype="Row"
              >
                <Text
                  className="Home"
                  compid="13:2871"
                  variant="body5"
                  comptype="Text"
                >
                  Home
                </Text>
                <Text
                  className="Two"
                  compid="13:2874"
                  variant="body5"
                  comptype="Text"
                >
                  /
                </Text>
                <Text
                  className="Menscollectio"
                  compid="13:2872"
                  variant="body5"
                  comptype="Text"
                >
                  Men's collection
                </Text>
                <Text
                  className="Two"
                  compid="13:2875"
                  variant="body5"
                  comptype="Text"
                >
                  /
                </Text>
                <Text
                  className="WhiteWillow"
                  compid="13:2873"
                  variant="body5"
                  comptype="Text"
                >
                  Sneakers
                </Text>
              </Row>
              <Row
                className="items-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]"
                compid="428"
                comptype="Row"
              >
                <Text
                  className="font-normal mt-[1px] text-black_900 w-[auto]"
                  compid="13:2867"
                  variant="body1"
                  comptype="Text"
                >
                  ITEM SUMMARY (3)
                </Text>
                <Text
                  className="font-bold lg:ml-[558px] xl:ml-[698px] 2xl:ml-[785px] 3xl:ml-[942px] text-gray_801 rowuk42black"
                  compid="13:2925"
                  variant="body5"
                  comptype="Text"
                >
                  Subtotal
                </Text>
                <Text
                  className="font-extrabold mb-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] text-gray_900 w-[auto]"
                  compid="13:2924"
                  variant="body1"
                  comptype="Text"
                >
                  ₹1239.00
                </Text>
              </Row>
            </Column>
            <Column
              className="absolute items-center justify-start right-[0] top-[11%] w-[24%]"
              compid="448"
              comptype="Column"
            >
              <Line
                className="bg-gray_400 h-[1px] w-[100%]"
                compid="13:2926"
                comptype="Line"
              />
              <Row
                className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                compid="430"
                comptype="Row"
              >
                <Input
                  className="placeholder:text-gray_500 Group104"
                  wrapClassName="w-[64%]"
                  compid="13:2919"
                  comptype="EditText"
                  name="Group104"
                  placeholder="Coupon Code"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineGray400"
                ></Input>
                <Button
                  className="font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                  compid="355"
                  comptype="Button"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray900"
                >
                  Apply
                </Button>
              </Row>
            </Column>
          </Stack>
          <Column
            className="absolute bg-black_900_bf items-center justify-start lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] w-[100%]"
            compid="356"
            comptype="Column"
          >
            <Column
              className="bg-white_A700 border border-gray_400 border-solid justify-start lg:mb-[101px] xl:mb-[127px] 2xl:mb-[143px] 3xl:mb-[171px] lg:p-[49px] xl:p-[62px] 2xl:p-[70px] 3xl:p-[84px] rounded-radius24 w-[47%]"
              compid="13:2943"
              comptype="Column"
            >
              <Column
                className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[84%]"
                compid="13:2945"
                comptype="Column"
              >
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  compid="13:2946"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  LogIn OR SignUp
                </Text>
                <Text
                  className="font-semibold xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-gray_500 w-[auto]"
                  compid="13:2947"
                  variant="body5"
                  comptype="Text"
                >
                  <span className="text-gray_500 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Hey, Enter your{" "}
                  </span>
                  <span className="text-gray_500 font-lato font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Phone number
                  </span>
                  <span className="text-gray_500 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                    to get Sign In to your account
                  </span>
                </Text>
              </Column>
              <Column
                className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] pt-[3px] w-[93%]"
                compid="13:2951"
                comptype="Column"
              >
                <Column
                  className="justify-start rounded-radius6 w-[100%]"
                  compid="13:2957"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    compid="13:2958"
                    variant="body5"
                    comptype="Text"
                  >
                    Phone Number
                  </Text>
                  <Row
                    className="bg-gray_101 border border-gray_400 border-solid items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius6 w-[100%]"
                    compid="13:2959"
                    comptype="Row"
                  >
                    <Text
                      className="rowninetyone"
                      compid="13:2961"
                      variant="body4"
                      comptype="Text"
                    >
                      +91
                    </Text>
                    <Line
                      className="bg-gray_400 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]"
                      compid="13:2963"
                      comptype="Line"
                    />
                    <Input
                      className="font-semibold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                      wrapClassName="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] w-[46%] xl:ml-[9px]"
                      compid="13:2962"
                      type="number"
                      comptype="EditText"
                      name="EnteryourMobi"
                      placeholder="Enter your Mobile number"
                    ></Input>
                  </Row>
                </Column>
                <Row
                  className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[91%]"
                  compid="13:2952"
                  comptype="Row"
                >
                  <Button
                    className="flex items-center justify-center checkmark_Four"
                    compid="13:2954"
                    comptype="IconButton"
                    shape="icbRoundedBorder6"
                    size="smIcn"
                    variant="icbFillLightgreen800"
                  >
                    <Img
                      src="images/img_vector.svg"
                      className="flex items-center justify-center"
                      alt="Vector Four"
                    />
                  </Button>
                  <Text
                    className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
                    compid="13:2953"
                    variant="body5"
                    comptype="Text"
                  >
                    <span className="text-gray_500 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      By signing in you agree to Rapidbox{" "}
                    </span>
                    <span className="text-indigo_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      Terms & Conditions.
                    </span>
                  </Text>
                </Row>
              </Column>
              <Button
                className="font-normal lg:mb-[120px] xl:mb-[150px] 2xl:mb-[169px] 3xl:mb-[202px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[93%]"
                compid="13:2948"
                comptype="Button"
                shape="RoundedBorder8"
                size="lg"
                variant="FillGray900"
              >
                Continue
              </Button>
            </Column>
          </Column>
        </Stack>
        <Footer
          className="bg-gray_903 font-inter w-[100%]"
          compid="13:2841"
          comptype="Footer"
        />
      </Column>
    </>
  );
};

export default LoginFlowMobilePage;
