import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Stack,
  Button,
  Line,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const LoginFlowOTPPage = () => {
  return (
    <>
      <Column
        className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]"
        compid="13:2702"
        comptype="Column"
      >
        <Row
          className="bg-yellow_100 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
          compid="13:2703"
          comptype="Row"
        >
          <Row
            className="items-start justify-center 3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[88px] pr-[1px] pt-[1px] w-[28%]"
            compid="I13:2703;137:388"
            comptype="Row"
          >
            <Img
              src="images/img_reply.svg"
              className="reply"
              compid="I13:2703;137:389"
              comptype="Image"
              alt="reply"
            />
            <Text
              className="center"
              compid="I13:2703;137:390"
              variant="body8"
              comptype="Text"
            >
              Fast, Easy and Free Returns
            </Text>
          </Row>
          <List
            className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[58%]"
            compid="692"
            comptype="List"
            orientation="horizontal"
          >
            <Row
              className="items-center p-[1px] w-[100%]"
              compid="I13:2703;137:391"
              comptype="Row"
            >
              <Img
                src="images/img_car.svg"
                className="car"
                compid="I13:2703;137:392"
                comptype="Image"
                alt="car"
              />
              <Text
                className="left"
                compid="I13:2703;137:393"
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
              compid="I13:2703;137:394"
              comptype="Row"
            >
              <Img
                src="images/img_computer.svg"
                className="computer"
                compid="I13:2703;137:395"
                comptype="Image"
                alt="computer"
              />
              <Text
                className="left"
                compid="I13:2703;137:396"
                variant="body8"
                comptype="Text"
              >
                Secure Payments
              </Text>
            </Row>
          </List>
        </Row>
        <Header className="w-[100%]" compid="418" comptype="Header" />
        <Stack
          className="font-lato lg:h-[591px] xl:h-[740px] 2xl:h-[832px] 3xl:h-[998px] w-[100%]"
          compid="13:2706"
          comptype="Stack"
        >
          <div
            className="absolute bg-white_A700 lg:h-[591px] xl:h-[739px] 2xl:h-[831px] 3xl:h-[997px] inset-y-[0] left-[0] my-[auto] shadow-bs2 w-[73%]"
            compid="13:2707"
            comptype="View"
          ></div>
          <Column
            className="absolute h-[max-content] inset-[0] justify-center m-[auto] py-[3px] w-[92%]"
            compid="681"
            comptype="Column"
          >
            <Row
              className="items-center w-[21%]"
              compid="13:2734"
              comptype="Row"
            >
              <Text
                className="Home"
                compid="13:2735"
                variant="body5"
                comptype="Text"
              >
                Home
              </Text>
              <Text
                className="Two"
                compid="13:2738"
                variant="body5"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="Menscollectio"
                compid="13:2736"
                variant="body5"
                comptype="Text"
              >
                Men's collection
              </Text>
              <Text
                className="Two"
                compid="13:2739"
                variant="body5"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="WhiteWillow"
                compid="13:2737"
                variant="body5"
                comptype="Text"
              >
                Sneakers
              </Text>
            </Row>
            <Row
              className="items-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]"
              compid="646"
              comptype="Row"
            >
              <Text
                className="font-normal mt-[1px] text-black_900 w-[auto]"
                compid="13:2731"
                variant="body1"
                comptype="Text"
              >
                ITEM SUMMARY (3)
              </Text>
              <Text
                className="font-bold lg:ml-[558px] xl:ml-[698px] 2xl:ml-[785px] 3xl:ml-[942px] text-gray_801 rowuk42black"
                compid="13:2789"
                variant="body5"
                comptype="Text"
              >
                Subtotal
              </Text>
              <Text
                className="font-extrabold mb-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] text-gray_900 w-[auto]"
                compid="13:2788"
                variant="body1"
                comptype="Text"
              >
                ₹1239.00
              </Text>
            </Row>
            <Row
              className="items-start justify-evenly lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
              compid="675"
              comptype="Row"
            >
              <Column
                className="justify-start w-[76%]"
                compid="670"
                comptype="Column"
              >
                <Row className="items-end w-[83%]" compid="668" comptype="Row">
                  <Button
                    className="flex items-center justify-center checkmark_Four"
                    compid="13:2794"
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
                  <Text
                    className="mb-[1px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                    compid="13:2711"
                    variant="body5"
                    comptype="Text"
                  >
                    ALL
                  </Text>
                  <Text
                    className="mb-[1px] xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[87px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                    compid="13:2712"
                    variant="body5"
                    comptype="Text"
                  >
                    ITEM
                  </Text>
                  <Text
                    className="mb-[1px] lg:ml-[130px] xl:ml-[163px] 2xl:ml-[184px] 3xl:ml-[220px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                    compid="13:2713"
                    variant="body5"
                    comptype="Text"
                  >
                    PRICE
                  </Text>
                  <Text
                    className="mb-[1px] 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                    compid="13:2714"
                    variant="body5"
                    comptype="Text"
                  >
                    QTY
                  </Text>
                  <Text
                    className="mb-[1px] lg:ml-[135px] xl:ml-[169px] 2xl:ml-[190px] 3xl:ml-[228px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                    compid="13:2715"
                    variant="body5"
                    comptype="Text"
                  >
                    TOTAL
                  </Text>
                </Row>
                <Line
                  className="bg-gray_400 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[98%]"
                  compid="13:2732"
                  comptype="Line"
                />
              </Column>
              <Column
                className="items-center justify-start w-[24%]"
                compid="671"
                comptype="Column"
              >
                <Line
                  className="bg-gray_400 h-[1px] w-[100%]"
                  compid="13:2790"
                  comptype="Line"
                />
                <Row
                  className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                  compid="649"
                  comptype="Row"
                >
                  <Input
                    className="placeholder:text-gray_500 Group104"
                    wrapClassName="w-[64%]"
                    compid="13:2783"
                    comptype="EditText"
                    name="Group104"
                    placeholder="Coupon Code"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineGray400"
                  ></Input>
                  <Button
                    className="font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                    compid="413"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    Apply
                  </Button>
                </Row>
              </Column>
            </Row>
            <List
              className="gap-[0] lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] min-h-[auto] mt-[4px] w-[100%]"
              compid="693"
              comptype="List"
              orientation="vertical"
            >
              <Row className="listvector" compid="650" comptype="Row">
                <Button
                  className="flex items-center justify-center checkmark_Four"
                  compid="13:2797"
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
                  src="images/img_rectangle745.png"
                  className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius12 w-[9%]"
                  compid="13:2720"
                  comptype="Image"
                  alt="Rectangle827"
                />
                <Column className="w-[86%]" compid="672" comptype="Column">
                  <Row
                    className="items-end justify-between w-[100%]"
                    compid="651"
                    comptype="Row"
                  >
                    <Text
                      className="text-black_900 w-[auto]"
                      compid="13:2716"
                      variant="body3"
                      comptype="Text"
                    >
                      Chunky Derby sneakers
                    </Text>
                    <Line
                      className="bg-gray_400 h-[1px] mb-[3px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[28%]"
                      compid="13:2791"
                      comptype="Line"
                    />
                  </Row>
                  <Row
                    className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="652"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2717"
                      variant="body5"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_One1"
                      compid="13:2709"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Row
                      className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[8%]"
                      compid="13:2721"
                      comptype="Row"
                    >
                      <Column
                        className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                        compid="13:2728"
                        comptype="Column"
                      >
                        <div
                          className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                          compid="13:2730"
                          comptype="View"
                        ></div>
                      </Column>
                      <Text
                        className="rowfive2"
                        compid="13:2725"
                        variant="body5"
                        comptype="Text"
                      >
                        1
                      </Text>
                      <Stack
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                        compid="13:2722"
                        comptype="Stack"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="plus"
                          compid="13:2724"
                          comptype="Image"
                          alt="plus"
                        />
                      </Stack>
                    </Row>
                    <Text
                      className="price_One2"
                      compid="13:2710"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Button
                      className="font-bold lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] mt-[4px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[28%]"
                      compid="412"
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
                    compid="665"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="checkmark_Four"
                      compid="13:2740"
                      comptype="Image"
                      alt="favorite One"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2718"
                      variant="body5"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      compid="13:2741"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2719"
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
                compid="13:2779"
                comptype="Line"
              />
              <Row
                className="items-center lg:mr-[330px] xl:mr-[413px] 2xl:mr-[465px] 3xl:mr-[558px] lg:my-[17px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[65%]"
                compid="655"
                comptype="Row"
              >
                <Button
                  className="flex items-center justify-center checkmark_Four"
                  compid="13:2800"
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
                  src="images/img_rectangle802.png"
                  className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] Rectangle830"
                  compid="13:2748"
                  comptype="Image"
                  alt="Rectangle830"
                />
                <Column
                  className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[78%]"
                  compid="673"
                  comptype="Column"
                >
                  <Text
                    className="text-black_900 w-[auto]"
                    compid="13:2744"
                    variant="body3"
                    comptype="Text"
                  >
                    Chunky Derby sneakers
                  </Text>
                  <Row
                    className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="656"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2745"
                      variant="body5"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_One1"
                      compid="13:2742"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Row
                      className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[13%]"
                      compid="13:2749"
                      comptype="Row"
                    >
                      <Column
                        className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                        compid="13:2756"
                        comptype="Column"
                      >
                        <div
                          className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                          compid="13:2758"
                          comptype="View"
                        ></div>
                      </Column>
                      <Text
                        className="rowfive2"
                        compid="13:2753"
                        variant="body5"
                        comptype="Text"
                      >
                        1
                      </Text>
                      <Stack
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                        compid="13:2750"
                        comptype="Stack"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="plus"
                          compid="13:2752"
                          comptype="Image"
                          alt="plus One"
                        />
                      </Stack>
                    </Row>
                    <Text
                      className="price_One2"
                      compid="13:2743"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[35%]"
                    compid="666"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="checkmark_Four"
                      compid="13:2760"
                      comptype="Image"
                      alt="favorite Two"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2746"
                      variant="body5"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      compid="13:2761"
                      comptype="Image"
                      alt="trash One"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2747"
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
                compid="13:2779"
                comptype="Line"
              />
              <Row
                className="items-center lg:mr-[330px] xl:mr-[413px] 2xl:mr-[465px] 3xl:mr-[558px] lg:my-[17px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[65%]"
                compid="659"
                comptype="Row"
              >
                <Button
                  className="flex items-center justify-center checkmark_Four"
                  compid="13:2803"
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
                <Img
                  src="images/img_group134.png"
                  className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] Rectangle830"
                  compid="13:2768"
                  comptype="Image"
                  alt="Rectangle830 One"
                />
                <Column
                  className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[78%]"
                  compid="674"
                  comptype="Column"
                >
                  <Text
                    className="text-black_900 w-[auto]"
                    compid="13:2764"
                    variant="body3"
                    comptype="Text"
                  >
                    Chunky Derby sneakers
                  </Text>
                  <Row
                    className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="660"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2765"
                      variant="body5"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_One1"
                      compid="13:2762"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Row
                      className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[13%]"
                      compid="13:2769"
                      comptype="Row"
                    >
                      <Column
                        className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                        compid="13:2776"
                        comptype="Column"
                      >
                        <div
                          className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                          compid="13:2778"
                          comptype="View"
                        ></div>
                      </Column>
                      <Text
                        className="rowfive2"
                        compid="13:2773"
                        variant="body5"
                        comptype="Text"
                      >
                        1
                      </Text>
                      <Stack
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                        compid="13:2770"
                        comptype="Stack"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="plus"
                          compid="13:2772"
                          comptype="Image"
                          alt="plus Two"
                        />
                      </Stack>
                    </Row>
                    <Text
                      className="price_One2"
                      compid="13:2763"
                      variant="body5"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[35%]"
                    compid="667"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="checkmark_Four"
                      compid="13:2780"
                      comptype="Image"
                      alt="favorite Three"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2766"
                      variant="body5"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      compid="13:2781"
                      comptype="Image"
                      alt="trash Two"
                    />
                    <Text
                      className="rowfavorite"
                      compid="13:2767"
                      variant="body5"
                      comptype="Text"
                    >
                      Delete
                    </Text>
                  </Row>
                </Column>
              </Row>
            </List>
          </Column>
          <Column
            className="absolute bg-black_900_bf items-center justify-start lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] w-[100%]"
            compid="411"
            comptype="Column"
          >
            <Column
              className="bg-white_A700 border border-gray_400 border-solid justify-start lg:mb-[101px] xl:mb-[127px] 2xl:mb-[143px] 3xl:mb-[171px] lg:p-[49px] xl:p-[62px] 2xl:p-[70px] 3xl:p-[84px] rounded-radius24 w-[47%]"
              compid="13:2807"
              comptype="Column"
            >
              <Column
                className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[84%]"
                compid="13:2809"
                comptype="Column"
              >
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  compid="13:2810"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  LogIn OR SignUp
                </Text>
                <Text
                  className="font-semibold xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-gray_500 w-[auto]"
                  compid="13:2811"
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
                className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[93%]"
                compid="13:2830"
                comptype="Column"
              >
                <Text
                  className="font-semibold text-gray_500 w-[auto]"
                  compid="13:2831"
                  variant="body5"
                  comptype="Text"
                >
                  Phone Number
                </Text>
                <Row
                  className="bg-gray_101 border border-gray_400 border-solid items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius6 w-[100%]"
                  compid="13:2832"
                  comptype="Row"
                >
                  <Text
                    className="rowninetyone"
                    compid="13:2834"
                    variant="body4"
                    comptype="Text"
                  >
                    +91
                  </Text>
                  <Line
                    className="bg-gray_400 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]"
                    compid="13:2836"
                    comptype="Line"
                  />
                  <Input
                    className="font-semibold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                    wrapClassName="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] w-[26%] xl:ml-[9px]"
                    compid="13:2835"
                    comptype="EditText"
                    name="9838830000"
                    placeholder="983-883-0000"
                  ></Input>
                  <Img
                    src="images/img_close.svg"
                    className="lg:ml-[172px] xl:ml-[215px] 2xl:ml-[242px] 3xl:ml-[290px] checkmark_Four"
                    compid="13:2837"
                    comptype="Image"
                    alt="close"
                  />
                </Row>
              </Column>
              <Column
                className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius6 w-[93%]"
                compid="13:2815"
                comptype="Column"
              >
                <Row
                  className="items-end justify-between pt-[3px] rounded-radius6 w-[100%]"
                  compid="13:2817"
                  comptype="Row"
                >
                  <Column
                    className="justify-start rounded-radius6 w-[74%]"
                    compid="687"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-gray_500 w-[auto]"
                      compid="13:2819"
                      variant="body5"
                      comptype="Text"
                    >
                      Verification Code
                    </Text>
                    <Row
                      className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
                      compid="686"
                      comptype="Row"
                    >
                      <div
                        className="bg-gray_101 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius6 w-[14%]"
                        compid="13:2821"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_101 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius6 w-[14%]"
                        compid="13:2822"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_101 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius6 w-[14%]"
                        compid="13:2823"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_101 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius6 w-[14%]"
                        compid="13:2824"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_101 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius6 w-[14%]"
                        compid="13:2825"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_101 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius6 w-[14%]"
                        compid="13:2826"
                        comptype="View"
                      ></div>
                    </Row>
                  </Column>
                  <Button
                    className="font-normal lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]"
                    compid="13:2827"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="OutlineGray4001_2"
                  >
                    Resend
                  </Button>
                </Row>
                <Text
                  className="font-semibold lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_500 w-[auto]"
                  compid="13:2816"
                  variant="body5"
                  comptype="Text"
                >
                  A 6 digit varification code has been sent to XXX-XXX-0000
                </Text>
              </Column>
              <Button
                className="font-normal lg:mb-[51px] xl:mb-[64px] 2xl:mb-[73px] 3xl:mb-[87px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[93%]"
                compid="13:2812"
                comptype="Button"
                shape="RoundedBorder8"
                size="lg"
                variant="FillGray900"
              >
                SIGN IN
              </Button>
            </Column>
          </Column>
        </Stack>
        <Footer
          className="bg-gray_903 font-inter w-[100%]"
          compid="13:2705"
          comptype="Footer"
        />
      </Column>
    </>
  );
};

export default LoginFlowOTPPage;
