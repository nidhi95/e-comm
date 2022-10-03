import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  CheckBox,
  Line,
  Input,
  Button,
  List,
} from "components";
import Header1 from "components/Header/Header1";
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
          className="bg-yellow_100 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
          compid="13:2703"
          comptype="Row"
        >
          <Img
            src="images/img_reply.svg"
            className="reply"
            compid="I13:2703;137:389;13:1705"
            comptype="Image"
            alt="reply"
          />
          <Text
            className="FastEasyand"
            compid="I13:2703;137:390"
            variant="body7"
            comptype="Text"
          >
            Fast, Easy and Free Returns
          </Text>
          <Img
            src="images/img_map.svg"
            className="map"
            compid="I13:2703;137:392;13:3703"
            comptype="Image"
            alt="map"
          />
          <Text
            className="price"
            compid="I13:2703;137:393"
            variant="body7"
            comptype="Text"
          >
            <span className="text-bluegray_900 font-inter lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
              Free shipping on order above ₹1000{" "}
            </span>
            <span className="text-bluegray_900 font-inter font-normal underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
              Learn More
            </span>
          </Text>
          <Img
            src="images/img_computer.svg"
            className="computer"
            compid="I13:2703;137:395;13:686"
            comptype="Image"
            alt="computer"
          />
          <Text
            className="SecurePayments"
            compid="I13:2703;137:396"
            variant="body7"
            comptype="Text"
          >
            Secure Payments
          </Text>
        </Row>
        <Header1 className="w-[100%]" compid="70" comptype="Header" />
        <Stack
          className="font-lato lg:h-[592px] xl:h-[740px] 2xl:h-[832px] 3xl:h-[998px] w-[100%]"
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
            compid="13:2708"
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
                variant="body4"
                comptype="Text"
              >
                Home
              </Text>
              <Text
                className="Two"
                compid="13:2738"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="Menscollectio"
                compid="13:2736"
                variant="body4"
                comptype="Text"
              >
                Men's collection
              </Text>
              <Text
                className="Two"
                compid="13:2739"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="WhiteWillow"
                compid="13:2737"
                variant="body4"
                comptype="Text"
              >
                Sneakers
              </Text>
            </Row>
            <Row
              className="items-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]"
              compid="281"
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
                className="font-bold lg:ml-[558px] xl:ml-[698px] 2xl:ml-[785px] 3xl:ml-[942px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_801 tracking-ls1 w-[auto]"
                compid="13:2789"
                variant="body4"
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
              compid="301"
              comptype="Row"
            >
              <Column
                className="justify-start w-[76%]"
                compid="296"
                comptype="Column"
              >
                <Row className="items-end w-[83%]" compid="294" comptype="Row">
                  <CheckBox
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    compid="13:2794"
                    comptype="CheckBox"
                    name="Vector"
                    label=""
                  ></CheckBox>
                  <Text
                    className="price_Two1"
                    compid="13:2711"
                    variant="body4"
                    comptype="Text"
                  >
                    ALL
                  </Text>
                  <Text
                    className="ITEM"
                    compid="13:2712"
                    variant="body4"
                    comptype="Text"
                  >
                    ITEM
                  </Text>
                  <Text
                    className="PRICE_Three"
                    compid="13:2713"
                    variant="body4"
                    comptype="Text"
                  >
                    PRICE
                  </Text>
                  <Text
                    className="QTY"
                    compid="13:2714"
                    variant="body4"
                    comptype="Text"
                  >
                    QTY
                  </Text>
                  <Text
                    className="TOTAL"
                    compid="13:2715"
                    variant="body4"
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
                compid="297"
                comptype="Column"
              >
                <Line
                  className="bg-gray_400 h-[1px] w-[100%]"
                  compid="13:2790"
                  comptype="Line"
                />
                <Row
                  className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                  compid="284"
                  comptype="Row"
                >
                  <Input
                    className="placeholder:text-gray_500 Group104"
                    wrapClassName="w-[64%]"
                    compid="13:2783"
                    comptype="EditText"
                    name="Group104"
                    placeholder="Coupon Code"
                    size="md"
                  ></Input>
                  <Button
                    className="font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                    compid="62"
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
              compid="318"
              comptype="List"
              orientation="vertical"
            >
              <Row className="listvector_one" compid="285" comptype="Row">
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2797"
                  comptype="CheckBox"
                  name="Vector One"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_rectangle745.png"
                  className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius12 w-[9%]"
                  compid="13:2720"
                  comptype="Image"
                  alt="Rectangle827"
                />
                <Column className="w-[86%]" compid="298" comptype="Column">
                  <Row
                    className="items-end justify-between w-[100%]"
                    compid="286"
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
                    compid="13:2721"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2717"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2709"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Column
                      className="bg-white_A700 border border-gray_400 border-solid items-center justify-start lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[3%]"
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
                      className="Group118"
                      compid="13:2725"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Stack
                      className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[3%]"
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
                    <Text
                      className="price_One2"
                      compid="13:2710"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Button
                      className="font-bold lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] mt-[4px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[28%]"
                      compid="61"
                      comptype="Button"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillGray900"
                    >
                      Proceed to Payment
                    </Button>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[20%]"
                    compid="287"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2740;13:4922"
                      comptype="Image"
                      alt="favorite One"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2718"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2741;13:5396"
                      comptype="Image"
                      alt="trash One"
                    />
                    <Text
                      className="Delete"
                      compid="13:2719"
                      variant="body4"
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
                compid="288"
                comptype="Row"
              >
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2800"
                  comptype="CheckBox"
                  name="Vector Two"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_rectangle802.png"
                  className="Rectangle830"
                  compid="13:2748"
                  comptype="Image"
                  alt="Rectangle830"
                />
                <Column
                  className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[78%]"
                  compid="299"
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
                    compid="13:2749"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2745"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2742"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Column
                      className="bg-white_A700 border border-gray_400 border-solid items-center justify-start lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[4%]"
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
                      className="Group118"
                      compid="13:2753"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Stack
                      className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[4%]"
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
                    <Text
                      className="price_One2"
                      compid="13:2743"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[34%]"
                    compid="289"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2760;13:4922"
                      comptype="Image"
                      alt="favorite Two"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2746"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2761;13:5396"
                      comptype="Image"
                      alt="trash Two"
                    />
                    <Text
                      className="Delete"
                      compid="13:2747"
                      variant="body4"
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
                compid="290"
                comptype="Row"
              >
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2803"
                  comptype="CheckBox"
                  name="Vector Three"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_group134.png"
                  className="Rectangle830"
                  compid="13:2768"
                  comptype="Image"
                  alt="Rectangle830 One"
                />
                <Column
                  className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[78%]"
                  compid="300"
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
                    compid="13:2769"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2765"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2762"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Column
                      className="bg-white_A700 border border-gray_400 border-solid items-center justify-start lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[4%]"
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
                      className="Group118"
                      compid="13:2773"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Stack
                      className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[4%]"
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
                    <Text
                      className="price_One2"
                      compid="13:2763"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[34%]"
                    compid="291"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2780;13:4922"
                      comptype="Image"
                      alt="favorite Three"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2766"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2781;13:5396"
                      comptype="Image"
                      alt="trash Three"
                    />
                    <Text
                      className="Delete"
                      compid="13:2767"
                      variant="body4"
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
            compid="60"
            comptype="Column"
          >
            <Column
              className="bg-white_A700 border border-gray_400 border-solid justify-start lg:mb-[101px] xl:mb-[127px] 2xl:mb-[143px] 3xl:mb-[171px] lg:p-[49px] xl:p-[62px] 2xl:p-[70px] 3xl:p-[84px] rounded-radius24 w-[47%]"
              compid="13:2807"
              comptype="Column"
            >
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] text-gray_900 w-[auto]"
                compid="13:2810"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                LogIn OR SignUp
              </Text>
              <Text
                className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-gray_500 w-[auto]"
                compid="13:2811"
                variant="body4"
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
              <Text
                className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] text-gray_500 w-[auto]"
                compid="13:2831"
                variant="body4"
                comptype="Text"
              >
                Phone Number
              </Text>
              <Input
                className="font-semibold p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[100%]"
                wrapClassName="2xl:ml-[9px] 2xl:my-[8px] 3xl:ml-[10px] 3xl:my-[9px] flex lg:ml-[6px] lg:my-[5px] w-[93%] xl:ml-[8px] xl:my-[7px]"
                compid="13:2834"
                comptype="EditText"
                name="NinetyOne"
                placeholder=""
                suffix={
                  <Img
                    src="images/img_close.svg"
                    className="lg:w-[14px] lg:h-[15px] lg:ml-[173px] lg:mr-[4px] xl:w-[17px] xl:h-[18px] xl:ml-[217px] xl:mr-[6px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[244px] 2xl:mr-[7px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[292px] 3xl:mr-[8px] my-[auto]"
                    compid="I13:2837;13:5549"
                    comptype="Image"
                    alt="close"
                  />
                }
                size="sm"
              ></Input>
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
                    compid="13:2818"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-gray_500 w-[auto]"
                      compid="13:2819"
                      variant="body4"
                      comptype="Text"
                    >
                      Verification Code
                    </Text>
                    <Row
                      className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
                      compid="312"
                      comptype="Row"
                    >
                      <Input
                        className="rounded-radius6 w-[100%]"
                        wrapClassName="2xl:h-[51px] 3xl:h-[61px] flex lg:h-[36px] w-[14%] xl:h-[45px]"
                        compid="13:2821"
                        comptype="EditText"
                        name="Rectangle810"
                        placeholder=""
                        variant="OutlineGray4001_2"
                      ></Input>
                      <Input
                        className="rounded-radius6 w-[100%]"
                        wrapClassName="2xl:h-[51px] 3xl:h-[61px] flex lg:h-[36px] w-[14%] xl:h-[45px]"
                        compid="13:2822"
                        comptype="EditText"
                        name="Rectangle821"
                        placeholder=""
                        variant="OutlineGray4001_2"
                      ></Input>
                      <Input
                        className="rounded-radius6 w-[100%]"
                        wrapClassName="2xl:h-[51px] 3xl:h-[61px] flex lg:h-[36px] w-[14%] xl:h-[45px]"
                        compid="13:2823"
                        comptype="EditText"
                        name="Rectangle822"
                        placeholder=""
                        variant="OutlineGray4001_2"
                      ></Input>
                      <Input
                        className="rounded-radius6 w-[100%]"
                        wrapClassName="2xl:h-[51px] 3xl:h-[61px] flex lg:h-[36px] w-[14%] xl:h-[45px]"
                        compid="13:2824"
                        comptype="EditText"
                        name="Rectangle823"
                        placeholder=""
                        variant="OutlineGray4001_2"
                      ></Input>
                      <Input
                        className="rounded-radius6 w-[100%]"
                        wrapClassName="2xl:h-[51px] 3xl:h-[61px] flex lg:h-[36px] w-[14%] xl:h-[45px]"
                        compid="13:2825"
                        comptype="EditText"
                        name="Rectangle824"
                        placeholder=""
                        variant="OutlineGray4001_2"
                      ></Input>
                      <Input
                        className="rounded-radius6 w-[100%]"
                        wrapClassName="2xl:h-[51px] 3xl:h-[61px] flex lg:h-[36px] w-[14%] xl:h-[45px]"
                        compid="13:2826"
                        comptype="EditText"
                        name="Rectangle825"
                        placeholder=""
                        variant="OutlineGray4001_2"
                      ></Input>
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
                  variant="body4"
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
