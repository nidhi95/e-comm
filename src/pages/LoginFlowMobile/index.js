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

const LoginFlowMobilePage = () => {
  return (
    <>
      <Column
        className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]"
        compid="13:2838"
        comptype="Column"
      >
        <Row
          className="bg-yellow_100 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
          compid="13:2839"
          comptype="Row"
        >
          <Img
            src="images/img_reply.svg"
            className="reply"
            compid="I13:2839;137:389;13:1705"
            comptype="Image"
            alt="reply"
          />
          <Text
            className="FastEasyand"
            compid="I13:2839;137:390"
            variant="body7"
            comptype="Text"
          >
            Fast, Easy and Free Returns
          </Text>
          <Img
            src="images/img_map.svg"
            className="map"
            compid="I13:2839;137:392;13:3703"
            comptype="Image"
            alt="map"
          />
          <Text
            className="price"
            compid="I13:2839;137:393"
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
            compid="I13:2839;137:395;13:686"
            comptype="Image"
            alt="computer"
          />
          <Text
            className="SecurePayments"
            compid="I13:2839;137:396"
            variant="body7"
            comptype="Text"
          >
            Secure Payments
          </Text>
        </Row>
        <Header1 className="w-[100%]" compid="66" comptype="Header" />
        <Stack
          className="font-lato lg:h-[592px] xl:h-[740px] 2xl:h-[832px] 3xl:h-[998px] w-[100%]"
          compid="13:2842"
          comptype="Stack"
        >
          <div
            className="absolute bg-white_A700 lg:h-[591px] xl:h-[739px] 2xl:h-[831px] 3xl:h-[997px] inset-y-[0] left-[0] my-[auto] shadow-bs2 w-[73%]"
            compid="13:2843"
            comptype="View"
          ></div>
          <Column
            className="absolute h-[max-content] inset-[0] justify-center m-[auto] py-[3px] w-[92%]"
            compid="13:2844"
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
                variant="body4"
                comptype="Text"
              >
                Home
              </Text>
              <Text
                className="Two"
                compid="13:2874"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="Menscollectio"
                compid="13:2872"
                variant="body4"
                comptype="Text"
              >
                Men's collection
              </Text>
              <Text
                className="Two"
                compid="13:2875"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="WhiteWillow"
                compid="13:2873"
                variant="body4"
                comptype="Text"
              >
                Sneakers
              </Text>
            </Row>
            <Row
              className="items-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]"
              compid="80"
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
                className="font-bold lg:ml-[558px] xl:ml-[698px] 2xl:ml-[785px] 3xl:ml-[942px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_801 tracking-ls1 w-[auto]"
                compid="13:2925"
                variant="body4"
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
            <Row
              className="items-start justify-evenly lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
              compid="100"
              comptype="Row"
            >
              <Column
                className="justify-start w-[76%]"
                compid="95"
                comptype="Column"
              >
                <Row className="items-end w-[83%]" compid="93" comptype="Row">
                  <CheckBox
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    compid="13:2930"
                    comptype="CheckBox"
                    name="Vector"
                    label=""
                  ></CheckBox>
                  <Text
                    className="price_Two1"
                    compid="13:2847"
                    variant="body4"
                    comptype="Text"
                  >
                    ALL
                  </Text>
                  <Text
                    className="ITEM"
                    compid="13:2848"
                    variant="body4"
                    comptype="Text"
                  >
                    ITEM
                  </Text>
                  <Text
                    className="PRICE_Three"
                    compid="13:2849"
                    variant="body4"
                    comptype="Text"
                  >
                    PRICE
                  </Text>
                  <Text
                    className="QTY"
                    compid="13:2850"
                    variant="body4"
                    comptype="Text"
                  >
                    QTY
                  </Text>
                  <Text
                    className="TOTAL"
                    compid="13:2851"
                    variant="body4"
                    comptype="Text"
                  >
                    TOTAL
                  </Text>
                </Row>
                <Line
                  className="bg-gray_400 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[98%]"
                  compid="13:2868"
                  comptype="Line"
                />
              </Column>
              <Column
                className="items-center justify-start w-[24%]"
                compid="96"
                comptype="Column"
              >
                <Line
                  className="bg-gray_400 h-[1px] w-[100%]"
                  compid="13:2926"
                  comptype="Line"
                />
                <Row
                  className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                  compid="83"
                  comptype="Row"
                >
                  <Input
                    className="placeholder:text-gray_500 Group104"
                    wrapClassName="w-[64%]"
                    compid="13:2919"
                    comptype="EditText"
                    name="Group104"
                    placeholder="Coupon Code"
                    size="md"
                  ></Input>
                  <Button
                    className="font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                    compid="2"
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
              compid="111"
              comptype="List"
              orientation="vertical"
            >
              <Row className="listvector_one" compid="84" comptype="Row">
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2933"
                  comptype="CheckBox"
                  name="Vector One"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_rectangle745.png"
                  className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius12 w-[9%]"
                  compid="13:2856"
                  comptype="Image"
                  alt="Rectangle827"
                />
                <Column className="w-[86%]" compid="97" comptype="Column">
                  <Row
                    className="items-end justify-between w-[100%]"
                    compid="85"
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
                    compid="13:2857"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2853"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2845"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Column
                      className="bg-white_A700 border border-gray_400 border-solid items-center justify-start lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[3%]"
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
                      className="Group118"
                      compid="13:2861"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Stack
                      className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[3%]"
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
                    <Text
                      className="price_One2"
                      compid="13:2846"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Button
                      className="font-bold lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] mt-[4px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[28%]"
                      compid="1"
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
                    compid="86"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2876;13:4922"
                      comptype="Image"
                      alt="favorite One"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2854"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2877;13:5396"
                      comptype="Image"
                      alt="trash One"
                    />
                    <Text
                      className="Delete"
                      compid="13:2855"
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
                compid="13:2915"
                comptype="Line"
              />
              <Row
                className="items-center lg:mr-[330px] xl:mr-[413px] 2xl:mr-[465px] 3xl:mr-[558px] lg:my-[17px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[65%]"
                compid="87"
                comptype="Row"
              >
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2936"
                  comptype="CheckBox"
                  name="Vector Two"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_rectangle802.png"
                  className="Rectangle830"
                  compid="13:2884"
                  comptype="Image"
                  alt="Rectangle830"
                />
                <Column
                  className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[78%]"
                  compid="98"
                  comptype="Column"
                >
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
                    compid="13:2885"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2881"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2878"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Column
                      className="bg-white_A700 border border-gray_400 border-solid items-center justify-start lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[4%]"
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
                      className="Group118"
                      compid="13:2889"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Stack
                      className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[4%]"
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
                    <Text
                      className="price_One2"
                      compid="13:2879"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[34%]"
                    compid="88"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2896;13:4922"
                      comptype="Image"
                      alt="favorite Two"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2882"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2897;13:5396"
                      comptype="Image"
                      alt="trash Two"
                    />
                    <Text
                      className="Delete"
                      compid="13:2883"
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
                compid="13:2915"
                comptype="Line"
              />
              <Row
                className="items-center lg:mr-[330px] xl:mr-[413px] 2xl:mr-[465px] 3xl:mr-[558px] lg:my-[17px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[65%]"
                compid="89"
                comptype="Row"
              >
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2939"
                  comptype="CheckBox"
                  name="Vector Three"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_group134.png"
                  className="Rectangle830"
                  compid="13:2904"
                  comptype="Image"
                  alt="Rectangle830 One"
                />
                <Column
                  className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[78%]"
                  compid="99"
                  comptype="Column"
                >
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
                    compid="13:2905"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2901"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2898"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Column
                      className="bg-white_A700 border border-gray_400 border-solid items-center justify-start lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[4%]"
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
                      className="Group118"
                      compid="13:2909"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Stack
                      className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[4%]"
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
                    <Text
                      className="price_One2"
                      compid="13:2899"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[34%]"
                    compid="90"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2916;13:4922"
                      comptype="Image"
                      alt="favorite Three"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2902"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2917;13:5396"
                      comptype="Image"
                      alt="trash Three"
                    />
                    <Text
                      className="Delete"
                      compid="13:2903"
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
            compid="3"
            comptype="Column"
          >
            <Column
              className="bg-white_A700 border border-gray_400 border-solid justify-start lg:mb-[101px] xl:mb-[127px] 2xl:mb-[143px] 3xl:mb-[171px] lg:p-[49px] xl:p-[62px] 2xl:p-[70px] 3xl:p-[84px] rounded-radius24 w-[47%]"
              compid="13:2943"
              comptype="Column"
            >
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] text-gray_900 w-[auto]"
                compid="13:2946"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                LogIn OR SignUp
              </Text>
              <Text
                className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-gray_500 w-[auto]"
                compid="13:2947"
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
              <Column
                className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] rounded-radius6 w-[93%]"
                compid="13:2957"
                comptype="Column"
              >
                <Text
                  className="font-semibold text-gray_500 w-[auto]"
                  compid="13:2958"
                  variant="body4"
                  comptype="Text"
                >
                  Phone Number
                </Text>
                <Input
                  className="font-semibold p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[100%]"
                  wrapClassName="2xl:h-[51px] 2xl:my-[8px] 3xl:h-[61px] 3xl:my-[9px] flex lg:h-[36px] lg:my-[5px] w-[100%] xl:h-[45px] xl:my-[7px]"
                  compid="13:2961"
                  comptype="EditText"
                  name="NinetyOne"
                  placeholder=""
                  size="sm"
                ></Input>
              </Column>
              <Row
                className="items-end lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[85%]"
                compid="13:2952"
                comptype="Row"
              >
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2954"
                  comptype="CheckBox"
                  name="Vector Four"
                  label=""
                ></CheckBox>
                <Text
                  className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
                  compid="13:2953"
                  variant="body4"
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
