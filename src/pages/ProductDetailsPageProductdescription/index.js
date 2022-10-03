import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Line,
  List,
  Button,
  Input,
} from "components";
import Header1 from "components/Header/Header1";

const ProductDetailsPageProductdescriptionPage = () => {
  return (
    <>
      <Column
        className="bg-gray_100 font-inter justify-start mx-[auto] overflow-auto w-[100%]"
        compid="13:2178"
        comptype="Column"
      >
        <Column
          className="items-center lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] w-[100%]"
          compid="242"
          comptype="Column"
        >
          <Row
            className="bg-yellow_100 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
            compid="13:2179"
            comptype="Row"
          >
            <Img
              src="images/img_reply.svg"
              className="reply"
              compid="I13:2179;137:389;13:1705"
              comptype="Image"
              alt="reply"
            />
            <Text
              className="FastEasyand"
              compid="I13:2179;137:390"
              variant="body7"
              comptype="Text"
            >
              Fast, Easy and Free Returns
            </Text>
            <Img
              src="images/img_map.svg"
              className="map"
              compid="I13:2179;137:392;13:3703"
              comptype="Image"
              alt="map"
            />
            <Text
              className="price"
              compid="I13:2179;137:393"
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
              compid="I13:2179;137:395;13:686"
              comptype="Image"
              alt="computer"
            />
            <Text
              className="SecurePayments"
              compid="I13:2179;137:396"
              variant="body7"
              comptype="Text"
            >
              Secure Payments
            </Text>
          </Row>
          <Header1 className="w-[100%]" compid="68" comptype="Header" />
        </Column>
        <Row
          className="font-lato items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[96%]"
          compid="235"
          comptype="Row"
        >
          <Column
            className="justify-start w-[61%]"
            compid="225"
            comptype="Column"
          >
            <Row
              className="items-center lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[47%]"
              compid="13:2182"
              comptype="Row"
            >
              <Text
                className="Home"
                compid="13:2183"
                variant="body4"
                comptype="Text"
              >
                Home
              </Text>
              <Text
                className="Two"
                compid="13:2187"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="Menscollectio"
                compid="13:2184"
                variant="body4"
                comptype="Text"
              >
                Men's collection
              </Text>
              <Text
                className="Two"
                compid="13:2188"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="Two"
                compid="13:2185"
                variant="body4"
                comptype="Text"
              >
                Sneakers
              </Text>
              <Text
                className="Two"
                compid="13:2189"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="WhiteWillow"
                compid="13:2186"
                variant="body4"
                comptype="Text"
              >
                White Willow
              </Text>
            </Row>
            <Column
              className="bg-white_A700 justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius12 w-[87%]"
              compid="20"
              comptype="Column"
            >
              <Row
                className="items-center justify-end ml-[auto] w-[95%]"
                compid="156"
                comptype="Row"
              >
                <Stack
                  className="bg-gray_200 lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] RectangleFour"
                  compid="13:2372"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_airejordannik.png"
                    className="absolute lg:h-[212px] xl:h-[265px] 2xl:h-[298px] 3xl:h-[357px] inset-[0] justify-center m-[auto] lg:w-[211px] xl:w-[264px] 2xl:w-[297px] 3xl:w-[356px]"
                    compid="13:2374"
                    comptype="Image"
                    alt="AireJordanNik"
                  />
                </Stack>
                <Img
                  src="images/img_rectangle13.png"
                  className="RectangleThree"
                  compid="13:2375"
                  comptype="Image"
                  alt="RectangleThree"
                />
              </Row>
              <Row
                className="items-center justify-end ml-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[95%]"
                compid="157"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle4.png"
                  className="RectangleFour"
                  compid="13:2376"
                  comptype="Image"
                  alt="RectangleFour"
                />
                <Img
                  src="images/img_rectangle5.png"
                  className="RectangleThree"
                  compid="13:2379"
                  comptype="Image"
                  alt="RectangleFive"
                />
              </Row>
              <Row
                className="items-center justify-end ml-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[95%]"
                compid="158"
                comptype="Row"
              >
                <Img
                  src="images/img_group62.png"
                  className="RectangleFour"
                  compid="13:2377"
                  comptype="Image"
                  alt="Rectangle744"
                />
                <Img
                  src="images/img_rectangle745.png"
                  className="RectangleThree"
                  compid="13:2380"
                  comptype="Image"
                  alt="Rectangle745"
                />
              </Row>
              <Row
                className="items-center justify-end ml-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[95%]"
                compid="159"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle746.png"
                  className="RectangleFour"
                  compid="13:2378"
                  comptype="Image"
                  alt="Rectangle746"
                />
                <Column
                  className="bg-cover bg-repeat items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] 3xl:p-[115px] lg:p-[68px] xl:p-[85px] 2xl:p-[96px] rounded-radius24 w-[48%]"
                  compid="13:2381"
                  style={{ backgroundImage: "url('images/img_group134.png')" }}
                  comptype="Column"
                >
                  <Text
                    className="font-normal 3xl:my-[118px] lg:my-[70px] xl:my-[88px] 2xl:my-[99px] text-white_A700 w-[auto]"
                    compid="13:2383"
                    variant="body1"
                    comptype="Text"
                  >
                    View More
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column
            className="justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[39%]"
            compid="234"
            comptype="Column"
          >
            <Line
              className="bg-gray_400 h-[1px] w-[100%]"
              compid="13:2260"
              comptype="Line"
            />
            <Row
              className="items-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pr-[2px] py-[2px] w-[100%]"
              compid="13:2262"
              comptype="Row"
            >
              <Img
                src="images/img_group136.svg"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] w-[18%]"
                compid="13:2264"
                comptype="Image"
                alt="Group136"
              />
              <Text
                className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_900 w-[auto]"
                compid="13:2276"
                variant="body6"
                comptype="Text"
              >
                4.5
              </Text>
              <Text
                className="font-bold ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_900 w-[auto]"
                compid="13:2277"
                variant="body6"
                comptype="Text"
              >
                (187)
              </Text>
              <Text
                className="font-semibold lg:ml-[128px] xl:ml-[161px] 2xl:ml-[181px] 3xl:ml-[217px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-black_900 w-[auto]"
                compid="13:2281"
                variant="body4"
                comptype="Text"
              >
                Add to Wishlist
              </Text>
              <Img
                src="images/img_favorite.svg"
                className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] w-[5%]"
                compid="I13:2280;13:4922"
                comptype="Image"
                alt="favorite One"
              />
              <Img
                src="images/img_clock_26X26.svg"
                className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                compid="I13:2282;13:1831"
                comptype="Image"
                alt="clock"
              />
            </Row>
            <Line
              className="bg-gray_400 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"
              compid="13:2261"
              comptype="Line"
            />
            <Text
              className="font-bold lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_800 w-[auto]"
              compid="13:2204"
              variant="body4"
              comptype="Text"
            >
              Leather Derby Shoes
            </Text>
            <Text
              className="font-black xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-gray_903 tracking-ls1 w-[auto]"
              compid="13:2203"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              ₹1239.00
            </Text>
            <Text
              className="font-medium lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-gray_801 tracking-ls1 w-[97%]"
              compid="13:2201"
              variant="body4"
              comptype="Text"
            >
              A pillar of sneaker culture, the Nike Air Max 90 remains one of
              the most significant designs since the brand’s founding. And while
              its OG colorways are some of the most significant.
            </Text>
            <Line
              className="bg-gray_400 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
              compid="13:2205"
              comptype="Line"
            />
            <Column
              className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pt-[3px] rounded-radius6 w-[100%]"
              compid="13:2206"
              comptype="Column"
            >
              <Row
                className="items-end justify-between w-[100%]"
                compid="13:2238"
                comptype="Row"
              >
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="13:2239"
                  variant="body1"
                  comptype="Text"
                >
                  Select Size:
                </Text>
                <Text
                  className="font-normal mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 underline w-[auto]"
                  compid="13:2240"
                  comptype="Text"
                >
                  Size Guide
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius6 w-[100%]"
                compid="13:2207"
                comptype="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]"
                  compid="167"
                  comptype="Row"
                >
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2208"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    7
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2214"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    7.5
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2220"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineBlack900"
                  >
                    8
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2226"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    8.5
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2232"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    9
                  </Button>
                </Row>
                <Row
                  className="items-center justify-between lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]"
                  compid="168"
                  comptype="Row"
                >
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2211"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    9.5
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2217"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    10
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2223"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    10.5
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2229"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    11
                  </Button>
                  <Button
                    className="font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                    compid="13:2235"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineGray400"
                  >
                    12
                  </Button>
                </Row>
              </List>
              <Line
                className="bg-gray_400 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                compid="13:2241"
                comptype="Line"
              />
            </Column>
            <Row
              className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pl-[3px] pt-[3px] w-[91%]"
              compid="13:2244"
              comptype="Row"
            >
              <Img
                src="images/img_mail.svg"
                className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                compid="I13:2256;13:3741"
                comptype="Image"
                alt="mail"
              />
              <Text
                className="font-normal leading-[normal] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[2px] not-italic text-light_green_900 w-[12%]"
                compid="13:2255"
                variant="body4"
                comptype="Text"
              >
                Made in
                <br />
                India
              </Text>
              <Img
                src="images/img_question.svg"
                className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                compid="I13:2253;13:3679"
                comptype="Image"
                alt="question"
              />
              <Text
                className="font-normal leading-[normal] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[2px] not-italic text-light_green_900 w-[13%]"
                compid="13:2252"
                variant="body4"
                comptype="Text"
              >
                GRS
                <br />
                Certified
              </Text>
              <Img
                src="images/img_trash_30X30.svg"
                className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                compid="I13:2247;13:3521"
                comptype="Image"
                alt="trash One"
              />
              <Text
                className="font-normal leading-[normal] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[2px] not-italic text-light_green_900 w-[12%]"
                compid="13:2246"
                variant="body4"
                comptype="Text"
              >
                1% of it
                <br />
                donated
              </Text>
              <Img
                src="images/img_shop.svg"
                className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[6%]"
                compid="I13:2250;13:3557"
                comptype="Image"
                alt="shop"
              />
              <Text
                className="font-normal leading-[normal] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[2px] not-italic text-light_green_900 w-[13%]"
                compid="13:2249"
                variant="body4"
                comptype="Text"
              >
                GRS
                <br />
                Certified
              </Text>
            </Row>
            <Line
              className="bg-gray_400 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="13:2243"
              comptype="Line"
            />
            <Column
              className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius8 w-[100%]"
              compid="13:2190"
              comptype="Column"
            >
              <Row
                className="items-center justify-between rounded-radius8 w-[100%]"
                compid="13:2191"
                comptype="Row"
              >
                <Button
                  className="font-normal lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[37%]"
                  compid="13:2192"
                  comptype="Button"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="FillGray500"
                >
                  Add to Cart
                </Button>
                <Button
                  className="font-normal lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[58%]"
                  compid="13:2195"
                  comptype="Button"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="FillGray900"
                >
                  Buy Now
                </Button>
              </Row>
              <Line
                className="bg-gray_400 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                compid="13:2198"
                comptype="Line"
              />
            </Column>
            <Text
              className="font-semibold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] text-bluegray_900 w-[auto]"
              compid="13:2587"
              variant="body1"
              comptype="Text"
            >
              Check Delivery
            </Text>
            <Row
              className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
              compid="13:2588"
              comptype="Row"
            >
              <Input
                className="font-bold p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_801 text-gray_801 tracking-ls1 w-[100%]"
                wrapClassName="w-[58%]"
                compid="13:2589"
                comptype="EditText"
                name="Group172"
                placeholder="Enter Pin"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineGray400"
              ></Input>
              <Button
                className="font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[37%]"
                compid="13:2592"
                comptype="Button"
                shape="RoundedBorder8"
                size="lg"
                variant="FillGray900"
              >
                Check Now
              </Button>
            </Row>
            <Row
              className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[61%]"
              compid="13:2595"
              comptype="Row"
            >
              <Button
                className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center rounded-radius50 lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                compid="13:2597"
                comptype="IconButton"
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
                className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-bluegray_900 w-[auto]"
                compid="13:2596"
                variant="body4"
                comptype="Text"
              >
                Free Home Delivery by 22nd September
              </Text>
            </Row>
            <Line
              className="bg-gray_400 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="13:2584"
              comptype="Line"
            />
            <Text
              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] columnproductmeter"
              compid="13:2389"
              variant="body1"
              comptype="Text"
            >
              Product Specifications
            </Text>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pt-[3px] w-[28%]"
              compid="13:2390"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2394"
                comptype="View"
              ></div>
              <Text
                className="language"
                compid="13:2393"
                variant="body4"
                comptype="Text"
              >
                Material :{" "}
              </Text>
              <Text
                className="Leather"
                compid="13:2391"
                variant="body4"
                comptype="Text"
              >
                Leather
              </Text>
            </Row>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pt-[3px] w-[49%]"
              compid="13:2395"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2399"
                comptype="View"
              ></div>
              <Text
                className="language"
                compid="13:2398"
                variant="body4"
                comptype="Text"
              >
                Upper Material :{" "}
              </Text>
              <Text
                className="Leather"
                compid="13:2396"
                variant="body4"
                comptype="Text"
              >
                Knitted Material
              </Text>
            </Row>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pt-[3px] w-[37%]"
              compid="13:2400"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2404"
                comptype="View"
              ></div>
              <Text
                className="font-semibold mb-[1px] 2xl:ml-[11px] 3xl:ml-[13px] xl:ml-[9px] rowellipseeight"
                compid="13:2403"
                variant="body4"
                comptype="Text"
              >
                Sole Material :{" "}
              </Text>
              <Text
                className="mt-[1px] Leather"
                compid="13:2401"
                variant="body4"
                comptype="Text"
              >
                TPR, TPU
              </Text>
            </Row>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pt-[3px] w-[38%]"
              compid="13:2405"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2409"
                comptype="View"
              ></div>
              <Text
                className="language"
                compid="13:2408"
                variant="body4"
                comptype="Text"
              >
                Insole Material :{" "}
              </Text>
              <Text
                className="Leather"
                compid="13:2406"
                variant="body4"
                comptype="Text"
              >
                Soft EVA
              </Text>
            </Row>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pt-[3px] w-[28%]"
              compid="13:2410"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2414"
                comptype="View"
              ></div>
              <Text
                className="font-semibold mb-[1px] 2xl:ml-[11px] 3xl:ml-[13px] xl:ml-[9px] rowellipseeight"
                compid="13:2413"
                variant="body4"
                comptype="Text"
              >
                Suitable for :{" "}
              </Text>
              <Text
                className="mt-[1px] Leather"
                compid="13:2411"
                variant="body4"
                comptype="Text"
              >
                Men
              </Text>
            </Row>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pt-[3px] w-[40%]"
              compid="13:2415"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2419"
                comptype="View"
              ></div>
              <Text
                className="language"
                compid="13:2418"
                variant="body4"
                comptype="Text"
              >
                Usage For :{" "}
              </Text>
              <Text
                className="Leather"
                compid="13:2416"
                variant="body4"
                comptype="Text"
              >
                Casual Purpose
              </Text>
            </Row>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pt-[3px] w-[54%]"
              compid="13:2420"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2424"
                comptype="View"
              ></div>
              <Text
                className="language"
                compid="13:2423"
                variant="body4"
                comptype="Text"
              >
                Wear it to :{" "}
              </Text>
              <Text
                className="Leather"
                compid="13:2421"
                variant="body4"
                comptype="Text"
              >
                Weekend Outings, Office
              </Text>
            </Row>
            <Row
              className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pt-[3px] w-[32%]"
              compid="13:2425"
              comptype="Row"
            >
              <div
                className="bg-gray_500 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                compid="13:2429"
                comptype="View"
              ></div>
              <Text
                className="language"
                compid="13:2428"
                variant="body4"
                comptype="Text"
              >
                Type :{" "}
              </Text>
              <Text
                className="capitalize font-black lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] text-black_900 w-[auto]"
                compid="13:2426"
                variant="body4"
                comptype="Text"
              >
                High heel{" "}
              </Text>
            </Row>
            <Text
              className="capitalize font-semibold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-lime_900 underline w-[auto]"
              compid="13:2387"
              comptype="Text"
            >
              View Less
            </Text>
            <Line
              className="bg-gray_400 h-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"
              compid="13:2385"
              comptype="Line"
            />
            <Column
              className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pt-[3px] rounded-radius3 w-[100%]"
              compid="13:2430"
              comptype="Column"
            >
              <Column
                className="justify-start rounded-radius3 w-[91%]"
                compid="13:2432"
                comptype="Column"
              >
                <Text
                  className="columnproductmeter"
                  compid="13:2433"
                  variant="body1"
                  comptype="Text"
                >
                  Product Meter
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pt-[3px] rounded-radius3 w-[96%]"
                  compid="13:2434"
                  comptype="List"
                  orientation="vertical"
                >
                  <Column
                    className="justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] rounded-radius3 w-[100%]"
                    compid="13:2435"
                    comptype="Column"
                  >
                    <Text
                      className="columnproductmeter"
                      compid="13:2436"
                      variant="body4"
                      comptype="Text"
                    >
                      Weight of the shoe
                    </Text>
                    <Row
                      className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"
                      compid="170"
                      comptype="Row"
                    >
                      <div
                        className="bg-light_green_800 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2438"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-light_green_A700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2439"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-bluegray_100 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2440"
                        comptype="View"
                      ></div>
                    </Row>
                  </Column>
                  <Column
                    className="justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] rounded-radius3 w-[100%]"
                    compid="13:2441"
                    comptype="Column"
                  >
                    <Text
                      className="columnproductmeter"
                      compid="13:2442"
                      variant="body4"
                      comptype="Text"
                    >
                      Comfort of the Shoe
                    </Text>
                    <Row
                      className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"
                      compid="172"
                      comptype="Row"
                    >
                      <div
                        className="bg-light_green_800 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2444"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-light_green_A700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2445"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-bluegray_100 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2446"
                        comptype="View"
                      ></div>
                    </Row>
                  </Column>
                  <Column
                    className="justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] rounded-radius3 w-[100%]"
                    compid="13:2447"
                    comptype="Column"
                  >
                    <Text
                      className="columnproductmeter"
                      compid="13:2448"
                      variant="body4"
                      comptype="Text"
                    >
                      Durability of the shoe
                    </Text>
                    <Row
                      className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"
                      compid="174"
                      comptype="Row"
                    >
                      <div
                        className="bg-light_green_800 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2450"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-light_green_A700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2451"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-bluegray_100 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius3 w-[32%]"
                        compid="13:2452"
                        comptype="View"
                      ></div>
                    </Row>
                  </Column>
                </List>
              </Column>
              <Line
                className="bg-gray_400 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                compid="13:2431"
                comptype="Line"
              />
            </Column>
            <Text
              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] columnproductmeter"
              compid="13:2286"
              variant="body1"
              comptype="Text"
            >
              Product Ratings & Reviews
            </Text>
            <Row
              className="items-center justify-end ml-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[92%]"
              compid="13:2287"
              comptype="Row"
            >
              <Column
                className="items-center xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] lg:pt-[9px] w-[43%]"
                compid="13:2289"
                comptype="Column"
              >
                <Text
                  className="text-gray_904 w-[auto]"
                  compid="13:2291"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  4.3
                </Text>
                <Img
                  src="images/img_frame430.svg"
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] mt-[1px] w-[67%]"
                  compid="13:2292"
                  comptype="Image"
                  alt="Frame430"
                />
                <Text
                  className="font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-gray_600 w-[auto]"
                  compid="13:2315"
                  variant="body4"
                  comptype="Text"
                >
                  319 ratings and 55 reviews
                </Text>
              </Column>
              <Line
                className="bg-gray_400 lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] w-[1px]"
                compid="13:2288"
                comptype="Line"
              />
              <List
                className="gap-[0] min-h-[auto] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rounded-radius4 w-[52%]"
                compid="13:2316"
                comptype="List"
                orientation="vertical"
              >
                <Row
                  className="items-start justify-between lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius4 w-[100%]"
                  compid="13:2317"
                  comptype="Row"
                >
                  <Text
                    className="Five"
                    compid="13:2318"
                    variant="body8"
                    comptype="Text"
                  >
                    5★
                  </Text>
                  <div
                    className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] overflow-hidden relative rounded-radius50 shadow-bs1 w-[78%]"
                    compid="13:2319"
                    comptype="ProgressBar"
                    name="Group212"
                  >
                    <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-light_green_800  rounded-[4px]"
                      style={{ width: "93%" }}
                    ></div>
                  </div>
                  <Text
                    className="TwoHundredTwentySix"
                    compid="13:2322"
                    variant="body8"
                    comptype="Text"
                  >
                    226
                  </Text>
                </Row>
                <Row
                  className="items-start justify-between lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius4 w-[100%]"
                  compid="13:2323"
                  comptype="Row"
                >
                  <Text
                    className="Five"
                    compid="13:2324"
                    variant="body8"
                    comptype="Text"
                  >
                    4★
                  </Text>
                  <div
                    className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] overflow-hidden relative rounded-radius50 shadow-bs1 w-[78%]"
                    compid="13:2325"
                    comptype="ProgressBar"
                    name="Group213"
                  >
                    <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-light_green_A700  rounded-[4px]"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                  <Text
                    className="TwoHundredTwentySix"
                    compid="13:2328"
                    variant="body8"
                    comptype="Text"
                  >
                    140
                  </Text>
                </Row>
                <Row
                  className="items-start justify-between lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius4 w-[100%]"
                  compid="13:2335"
                  comptype="Row"
                >
                  <Text
                    className="Five"
                    compid="13:2336"
                    variant="body8"
                    comptype="Text"
                  >
                    3★
                  </Text>
                  <div
                    className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] overflow-hidden relative rounded-radius50 shadow-bs1 w-[78%]"
                    compid="13:2337"
                    comptype="ProgressBar"
                    name="Group214"
                  >
                    <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-light_green_A700  rounded-[4px]"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <Text
                    className="TwoHundredTwentySix"
                    compid="13:2340"
                    variant="body8"
                    comptype="Text"
                  >
                    120
                  </Text>
                </Row>
                <Row
                  className="items-start justify-between lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius4 w-[100%]"
                  compid="13:2329"
                  comptype="Row"
                >
                  <Text
                    className="Five"
                    compid="13:2330"
                    variant="body8"
                    comptype="Text"
                  >
                    2★
                  </Text>
                  <div
                    className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] overflow-hidden relative rounded-radius50 shadow-bs1 w-[78%]"
                    compid="13:2331"
                    comptype="ProgressBar"
                    name="Group215"
                  >
                    <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-lime_700  rounded-[4px]"
                      style={{ width: "23%" }}
                    ></div>
                  </div>
                  <Text
                    className="TwoHundredTwentySix"
                    compid="13:2334"
                    variant="body8"
                    comptype="Text"
                  >
                    140
                  </Text>
                </Row>
                <Row
                  className="items-start justify-between lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius4 w-[100%]"
                  compid="13:2341"
                  comptype="Row"
                >
                  <Text
                    className="Five"
                    compid="13:2342"
                    variant="body8"
                    comptype="Text"
                  >
                    1★
                  </Text>
                  <div
                    className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] overflow-hidden relative rounded-radius50 shadow-bs1 w-[78%]"
                    compid="13:2343"
                    comptype="ProgressBar"
                    name="Group216"
                  >
                    <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-lime_900  rounded-[4px]"
                      style={{ width: "13%" }}
                    ></div>
                  </div>
                  <Text
                    className="TwoHundredTwentySix"
                    compid="13:2346"
                    variant="body8"
                    comptype="Text"
                  >
                    120
                  </Text>
                </Row>
              </List>
            </Row>
            <Stack
              className="xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[84px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="13:2453"
              comptype="Stack"
            >
              <Text
                className="absolute capitalize font-semibold right-[0] text-indigo_A700 top-[4%] w-[auto]"
                compid="13:2454"
                variant="body4"
                comptype="Text"
              >
                View All
              </Text>
              <Column
                className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[97%]"
                compid="13:2455"
                comptype="Column"
              >
                <Text
                  className="columnproductmeter"
                  compid="13:2456"
                  variant="body1"
                  comptype="Text"
                >
                  Photos
                </Text>
                <Row
                  className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]"
                  compid="13:2457"
                  comptype="Row"
                >
                  <Img
                    src="images/img_rectangle13.png"
                    className="Rectangle729"
                    compid="13:2458"
                    comptype="Image"
                    alt="Rectangle729"
                  />
                  <Img
                    src="images/img_rectangle746.png"
                    className="Rectangle729"
                    compid="13:2459"
                    comptype="Image"
                    alt="Rectangle730"
                  />
                  <Stack
                    className="bg-cover bg-repeat lg:px-[16px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] Rectangle729"
                    compid="13:2463"
                    style={{ backgroundImage: "url('images/img_group62.png')" }}
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_lock.svg"
                      className="absolute lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] justify-center m-[auto] w-[25%]"
                      compid="I13:2465;13:8142"
                      comptype="Image"
                      alt="lock"
                    />
                  </Stack>
                  <Img
                    src="images/img_rectangle5.png"
                    className="Rectangle729"
                    compid="13:2460"
                    comptype="Image"
                    alt="Rectangle732"
                  />
                  <Stack
                    className="bg-cover bg-repeat lg:px-[16px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] Rectangle729"
                    compid="13:2466"
                    style={{
                      backgroundImage: "url('images/img_rectangle746.png')",
                    }}
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_lock.svg"
                      className="absolute lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] justify-center m-[auto] w-[25%]"
                      compid="I13:2468;13:8142"
                      comptype="Image"
                      alt="lock One"
                    />
                  </Stack>
                  <Img
                    src="images/img_rectangle14.png"
                    className="Rectangle729"
                    compid="13:2461"
                    comptype="Image"
                    alt="Rectangle734"
                  />
                  <Img
                    src="images/img_rectangle31.png"
                    className="Rectangle729"
                    compid="13:2462"
                    comptype="Image"
                    alt="Rectangle735"
                  />
                </Row>
              </Column>
            </Stack>
            <Stack
              className="lg:h-[202px] xl:h-[252px] 2xl:h-[284px] 3xl:h-[340px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="154"
              comptype="Stack"
            >
              <Column
                className="absolute items-center justify-start left-[8%] top-[1%] w-[20%]"
                compid="219"
                comptype="Column"
              >
                <Text
                  className="font-black text-bluegray_901 tracking-ls1 w-[auto]"
                  compid="13:2257"
                  variant="body6"
                  comptype="Text"
                >
                  Value for Money
                </Text>
                <Text
                  className="font-black xl:mt-[104px] 2xl:mt-[118px] 3xl:mt-[141px] lg:mt-[83px] text-bluegray_901 tracking-ls1 w-[auto]"
                  compid="13:2258"
                  variant="body6"
                  comptype="Text"
                >
                  Value for Money
                </Text>
              </Column>
              <Column
                className="absolute bg-light_green_800 h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[1px] rounded-radius4 w-[6%]"
                compid="19"
                comptype="Column"
              >
                <Text
                  className="font-normal not-italic text-white_A700 w-[auto]"
                  compid="13:2348"
                  variant="body8"
                  comptype="Text"
                >
                  5★
                </Text>
              </Column>
              <Column
                className="absolute justify-start rounded-radius4 w-[100%]"
                compid="13:2349"
                comptype="Column"
              >
                <Column
                  className="justify-start rounded-radius4 w-[100%]"
                  compid="13:2351"
                  comptype="Column"
                >
                  <Column
                    className="justify-start rounded-radius4 w-[94%]"
                    compid="13:2353"
                    comptype="Column"
                  >
                    <Row
                      className="items-start ml-[1px] rounded-radius4 w-[30%]"
                      compid="13:2355"
                      comptype="Row"
                    >
                      <Stack
                        className="bg-light_green_800 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[1px] rounded-radius4 w-[21%]"
                        compid="48"
                        comptype="Stack"
                      >
                        <Text
                          className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-white_A700 w-[max-content]"
                          compid="13:2360"
                          variant="body8"
                          comptype="Text"
                        >
                          5★
                        </Text>
                        <Text
                          className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-white_A700 w-[max-content]"
                          compid="13:2361"
                          variant="body8"
                          comptype="Text"
                        >
                          5★
                        </Text>
                      </Stack>
                      <Text
                        className="rowfive_two"
                        compid="13:2356"
                        variant="body6"
                        comptype="Text"
                      >
                        Value for Money
                      </Text>
                    </Row>
                    <Text
                      className="columnfive_two"
                      compid="13:2354"
                      variant="body4"
                      comptype="Text"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. <br />
                      Exercitation veniam consequat sunt nostrud amet. Amet
                      minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud amet.
                    </Text>
                  </Column>
                  <Line
                    className="bg-gray_400 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]"
                    compid="13:2352"
                    comptype="Line"
                  />
                </Column>
                <Column
                  className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]"
                  compid="13:2362"
                  comptype="Column"
                >
                  <Column
                    className="justify-start rounded-radius4 w-[94%]"
                    compid="13:2364"
                    comptype="Column"
                  >
                    <Row
                      className="items-start ml-[1px] rounded-radius4 w-[30%]"
                      compid="13:2366"
                      comptype="Row"
                    >
                      <Text
                        className="bg-light_green_800 font-normal mb-[1px] not-italic lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] py-[1px] rounded-radius4 text-white_A700 w-[32px]"
                        compid="13:2368"
                        variant="body8"
                        comptype="Text"
                      >
                        5★
                      </Text>
                      <Text
                        className="rowfive_two"
                        compid="13:2367"
                        variant="body6"
                        comptype="Text"
                      >
                        Value for Money
                      </Text>
                    </Row>
                    <Text
                      className="columnfive_two"
                      compid="13:2365"
                      variant="body4"
                      comptype="Text"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. <br />
                      Exercitation veniam consequat sunt nostrud amet. Amet
                      minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud amet.
                    </Text>
                  </Column>
                  <Line
                    className="bg-gray_400 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]"
                    compid="13:2363"
                    comptype="Line"
                  />
                </Column>
                <Text
                  className="capitalize font-semibold lg:ml-[340px] xl:ml-[425px] 2xl:ml-[478px] 3xl:ml-[573px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-indigo_A700 w-[auto]"
                  compid="13:2350"
                  variant="body4"
                  comptype="Text"
                >
                  View All
                </Text>
              </Column>
            </Stack>
          </Column>
        </Row>
        <Column
          className="font-lato items-center lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]"
          compid="243"
          comptype="Column"
        >
          <Column
            className="justify-start rounded-radius24 w-[89%]"
            compid="13:2567"
            comptype="Column"
          >
            <Row
              className="items-start pr-[4px] rounded-radius24 w-[91%]"
              compid="13:2568"
              comptype="Row"
            >
              <Img
                src="images/img_rectangle4.png"
                className="Rectangle800"
                compid="13:2569"
                comptype="Image"
                alt="Rectangle800"
              />
              <Column
                className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[44%]"
                compid="13:2570"
                comptype="Column"
              >
                <Text
                  className="ml-[1px] rowalsoexplore"
                  compid="13:2572"
                  as="h2"
                  variant="h2"
                  comptype="Text"
                >
                  Go Steady
                </Text>
                <Text
                  className="font-semibold leading-[normal] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-gray_500 tracking-ls1 w-[100%]"
                  compid="13:2571"
                  variant="body1"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                  <br />
                  <br />
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </Text>
              </Column>
            </Row>
            <Row
              className="items-start justify-end ml-[auto] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius24 w-[91%]"
              compid="13:2578"
              comptype="Row"
            >
              <Column
                className="items-end justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[46%]"
                compid="13:2580"
                comptype="Column"
              >
                <Text
                  className="rowalsoexplore"
                  compid="13:2582"
                  as="h2"
                  variant="h2"
                  comptype="Text"
                >
                  Fire up your Soul
                </Text>
                <Text
                  className="font-semibold leading-[normal] mr-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-gray_500 tracking-ls1 w-[95%]"
                  compid="13:2581"
                  variant="body1"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                  <br />
                  <br />
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </Text>
              </Column>
              <Img
                src="images/img_rectangle745.png"
                className="Rectangle800"
                compid="13:2579"
                comptype="Image"
                alt="Rectangle801"
              />
            </Row>
            <Row
              className="items-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] pr-[4px] rounded-radius24 w-[91%]"
              compid="13:2573"
              comptype="Row"
            >
              <Img
                src="images/img_rectangle802.png"
                className="Rectangle800"
                compid="13:2574"
                comptype="Image"
                alt="Rectangle802"
              />
              <Column
                className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[44%]"
                compid="13:2575"
                comptype="Column"
              >
                <Text
                  className="rowalsoexplore"
                  compid="13:2577"
                  as="h2"
                  variant="h2"
                  comptype="Text"
                >
                  Stabilize your Move
                </Text>
                <Text
                  className="font-semibold leading-[normal] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-gray_500 tracking-ls1 w-[100%]"
                  compid="13:2576"
                  variant="body1"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                  <br />
                  <br />
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </Text>
              </Column>
            </Row>
          </Column>
          <footer
            className="lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]"
            compid="13:2469"
            comptype="Footer"
          >
            <Column
              className="justify-start w-[100%]"
              compid="75"
              comptype="Column"
            >
              <Column
                className="justify-start lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[96%]"
                compid="237"
                comptype="Column"
              >
                <Row
                  className="items-end w-[93%]"
                  compid="13:2505"
                  comptype="Row"
                >
                  <Text
                    className="rowalsoexplore"
                    compid="13:2470"
                    as="h2"
                    variant="h2"
                    comptype="Text"
                  >
                    Styled in the product .
                  </Text>
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[3px] lg:ml-[458px] xl:ml-[572px] 2xl:ml-[644px] 3xl:ml-[773px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="I13:2506;25:864"
                    comptype="Image"
                    alt="clock One"
                  />
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[3px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="I13:2507;25:870"
                    comptype="Image"
                    alt="clock Two"
                  />
                </Row>
                <Row
                  className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                  compid="214"
                  comptype="Row"
                >
                  <Column
                    className="bg-cover bg-repeat lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius24 w-[24%]"
                    compid="49"
                    style={{
                      backgroundImage: "url('images/img_rectangle57.png')",
                    }}
                    comptype="Column"
                  >
                    <Row
                      className="items-center w-[85%]"
                      compid="176"
                      comptype="Row"
                    >
                      <div
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                        compid="13:2485"
                        comptype="View"
                      ></div>
                      <Text
                        className="rowellipsefive"
                        compid="13:2478"
                        variant="body1"
                        comptype="Text"
                      >
                        <span className="text-white_A700 font-lato lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          John Doe |{" "}
                        </span>
                        <span className="text-white_A700 font-lato font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          West bengal
                        </span>
                      </Text>
                    </Row>
                    <Row
                      className="items-center lg:mt-[293px] xl:mt-[366px] 2xl:mt-[412px] 3xl:mt-[494px] w-[100%]"
                      compid="177"
                      comptype="Row"
                    >
                      <Text
                        className="rowgroupfortyseven"
                        compid="47"
                        variant="body4"
                        comptype="Text"
                      >
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★ /{" "}
                        </span>
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★
                        </span>
                      </Text>
                      <Button
                        className="font-bold lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[61%]"
                        compid="43"
                        comptype="Button"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Had on: 02/06/2022
                      </Button>
                    </Row>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius24 w-[24%]"
                    compid="50"
                    style={{ backgroundImage: "url('images/img_group50.png')" }}
                    comptype="Column"
                  >
                    <Row
                      className="items-center w-[85%]"
                      compid="179"
                      comptype="Row"
                    >
                      <div
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                        compid="13:2486"
                        comptype="View"
                      ></div>
                      <Text
                        className="rowellipsefive"
                        compid="13:2480"
                        variant="body1"
                        comptype="Text"
                      >
                        <span className="text-white_A700 font-lato lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          John Doe |{" "}
                        </span>
                        <span className="text-white_A700 font-lato font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          West bengal
                        </span>
                      </Text>
                    </Row>
                    <Img
                      src="images/img_lock.svg"
                      className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] lg:mt-[124px] xl:mt-[155px] 2xl:mt-[175px] 3xl:mt-[210px] w-[17%]"
                      compid="I13:2565;13:8142"
                      comptype="Image"
                      alt="lock Two"
                    />
                    <Row
                      className="items-center lg:mt-[131px] xl:mt-[164px] 2xl:mt-[185px] 3xl:mt-[222px] w-[100%]"
                      compid="180"
                      comptype="Row"
                    >
                      <Text
                        className="rowgroupfortyseven"
                        compid="46"
                        variant="body4"
                        comptype="Text"
                      >
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★ /{" "}
                        </span>
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★
                        </span>
                      </Text>
                      <Button
                        className="font-bold lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[61%]"
                        compid="42"
                        comptype="Button"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Had on: 02/06/2022
                      </Button>
                    </Row>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius24 w-[24%]"
                    compid="51"
                    style={{
                      backgroundImage: "url('images/img_rectangle55.png')",
                    }}
                    comptype="Column"
                  >
                    <Row
                      className="items-center w-[85%]"
                      compid="182"
                      comptype="Row"
                    >
                      <div
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                        compid="13:2487"
                        comptype="View"
                      ></div>
                      <Text
                        className="rowellipsefive"
                        compid="13:2482"
                        variant="body1"
                        comptype="Text"
                      >
                        <span className="text-white_A700 font-lato lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          John Doe |{" "}
                        </span>
                        <span className="text-white_A700 font-lato font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          West bengal
                        </span>
                      </Text>
                    </Row>
                    <Img
                      src="images/img_lock.svg"
                      className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] lg:mt-[124px] xl:mt-[155px] 2xl:mt-[175px] 3xl:mt-[210px] w-[17%]"
                      compid="I13:2566;13:8142"
                      comptype="Image"
                      alt="lock Three"
                    />
                    <Row
                      className="items-center lg:mt-[131px] xl:mt-[164px] 2xl:mt-[185px] 3xl:mt-[222px] w-[100%]"
                      compid="183"
                      comptype="Row"
                    >
                      <Text
                        className="rowgroupfortyseven"
                        compid="45"
                        variant="body4"
                        comptype="Text"
                      >
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★ /{" "}
                        </span>
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★
                        </span>
                      </Text>
                      <Button
                        className="font-bold lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[61%]"
                        compid="41"
                        comptype="Button"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Had on: 02/06/2022
                      </Button>
                    </Row>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius24 w-[24%]"
                    compid="52"
                    style={{ backgroundImage: "url('images/img_group52.png')" }}
                    comptype="Column"
                  >
                    <Row
                      className="items-center w-[85%]"
                      compid="207"
                      comptype="Row"
                    >
                      <div
                        className="bg-white_A700 border border-gray_400 border-solid lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                        compid="13:2488"
                        comptype="View"
                      ></div>
                      <Text
                        className="rowellipsefive"
                        compid="13:2484"
                        variant="body1"
                        comptype="Text"
                      >
                        <span className="text-white_A700 font-lato lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          John Doe |{" "}
                        </span>
                        <span className="text-white_A700 font-lato font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          West bengal
                        </span>
                      </Text>
                    </Row>
                    <Row
                      className="items-center lg:mt-[293px] xl:mt-[366px] 2xl:mt-[412px] 3xl:mt-[494px] w-[100%]"
                      compid="208"
                      comptype="Row"
                    >
                      <Text
                        className="rowgroupfortyseven"
                        compid="44"
                        variant="body4"
                        comptype="Text"
                      >
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★ /{" "}
                        </span>
                        <span className="text-gray_900 font-lato font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          5
                        </span>
                        <span className="text-gray_900 font-lato lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          ★
                        </span>
                      </Text>
                      <Button
                        className="font-bold lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[61%]"
                        compid="40"
                        comptype="Button"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Had on: 02/06/2022
                      </Button>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="items-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[93%]"
                  compid="13:2508"
                  comptype="Row"
                >
                  <Text
                    className="rowalsoexplore"
                    compid="13:2471"
                    as="h2"
                    variant="h2"
                    comptype="Text"
                  >
                    Similar Products You may like
                  </Text>
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[318px] xl:ml-[398px] 2xl:ml-[448px] 3xl:ml-[537px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="I13:2509;25:864"
                    comptype="Image"
                    alt="clock Three"
                  />
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    compid="I13:2510;25:870"
                    comptype="Image"
                    alt="clock Four"
                  />
                </Row>
                <Row
                  className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]"
                  compid="215"
                  comptype="Row"
                >
                  <Column
                    className="bg-white_A700 outline outline-[1px] outline-gray_400 lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] rounded-radius16 w-[24%]"
                    compid="39"
                    comptype="Column"
                  >
                    <Stack
                      className="bg-cover bg-repeat lg:h-[207px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]"
                      compid="53"
                      style={{
                        backgroundImage: "url('images/img_group53.png')",
                      }}
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="favorite_Two"
                        compid="I13:2561;13:4922"
                        comptype="Image"
                        alt="favorite Two"
                      />
                    </Stack>
                    <Column
                      className="justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[68%]"
                      compid="238"
                      comptype="Column"
                    >
                      <Text
                        className="text-black_900 w-[auto]"
                        compid="13:2519"
                        variant="body3"
                        comptype="Text"
                      >
                        Chunky Derby sneakers
                      </Text>
                      <Text
                        className="price_Two"
                        compid="13:2523"
                        variant="body4"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                      <Row
                        className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[30%]"
                        compid="185"
                        comptype="Row"
                      >
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="32"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_900 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2549"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="28"
                          comptype="Column"
                        >
                          <div
                            className="bg-amber_501 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2553"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="24"
                          comptype="Column"
                        >
                          <div
                            className="bg-indigo_902 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2557"
                            comptype="View"
                          ></div>
                        </Column>
                      </Row>
                      <Text
                        className="NewArrival_One"
                        compid="13:2527"
                        variant="body8"
                        comptype="Text"
                      >
                        New Arrival
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] outline outline-[1px] outline-gray_400 lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] rounded-radius16 w-[24%]"
                    compid="38"
                    comptype="Column"
                  >
                    <Stack
                      className="bg-cover bg-repeat lg:h-[207px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]"
                      compid="54"
                      style={{
                        backgroundImage: "url('images/img_group134.png')",
                      }}
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_clock_17X20.svg"
                        className="favorite_Two"
                        compid="I13:2562;13:4922"
                        comptype="Image"
                        alt="clock Five"
                      />
                    </Stack>
                    <Column
                      className="justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[68%]"
                      compid="239"
                      comptype="Column"
                    >
                      <Text
                        className="text-black_900 w-[auto]"
                        compid="13:2520"
                        variant="body3"
                        comptype="Text"
                      >
                        Chunky Derby sneakers
                      </Text>
                      <Text
                        className="price_Two"
                        compid="13:2524"
                        variant="body4"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                      <Row
                        className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[42%]"
                        compid="191"
                        comptype="Row"
                      >
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="35"
                          comptype="Column"
                        >
                          <div
                            className="bg-lime_901 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2546"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="31"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_900 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2550"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="27"
                          comptype="Column"
                        >
                          <div
                            className="bg-amber_501 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2554"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="23"
                          comptype="Column"
                        >
                          <div
                            className="bg-indigo_902 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2558"
                            comptype="View"
                          ></div>
                        </Column>
                      </Row>
                      <Text
                        className="NewArrival_One"
                        compid="13:2528"
                        variant="body8"
                        comptype="Text"
                      >
                        New Arrival
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] outline outline-[1px] outline-gray_400 lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] rounded-radius16 w-[24%]"
                    compid="37"
                    comptype="Column"
                  >
                    <Stack
                      className="bg-cover bg-repeat lg:h-[207px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]"
                      compid="55"
                      style={{
                        backgroundImage: "url('images/img_group55.png')",
                      }}
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_clock_17X20.svg"
                        className="favorite_Two"
                        compid="I13:2563;13:4922"
                        comptype="Image"
                        alt="clock Six"
                      />
                    </Stack>
                    <Column
                      className="justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[68%]"
                      compid="240"
                      comptype="Column"
                    >
                      <Text
                        className="text-black_900 w-[auto]"
                        compid="13:2521"
                        variant="body3"
                        comptype="Text"
                      >
                        Chunky Derby sneakers
                      </Text>
                      <Text
                        className="price_Two"
                        compid="13:2525"
                        variant="body4"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                      <Row
                        className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[42%]"
                        compid="197"
                        comptype="Row"
                      >
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="34"
                          comptype="Column"
                        >
                          <div
                            className="bg-lime_901 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2547"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="30"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_900 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2551"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="26"
                          comptype="Column"
                        >
                          <div
                            className="bg-amber_501 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2555"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="22"
                          comptype="Column"
                        >
                          <div
                            className="bg-indigo_902 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2559"
                            comptype="View"
                          ></div>
                        </Column>
                      </Row>
                      <Text
                        className="NewArrival_One"
                        compid="13:2529"
                        variant="body8"
                        comptype="Text"
                      >
                        New Arrival
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] outline outline-[1px] outline-gray_400 lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] rounded-radius16 w-[24%]"
                    compid="36"
                    comptype="Column"
                  >
                    <Stack
                      className="bg-cover bg-repeat lg:h-[207px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]"
                      compid="56"
                      style={{
                        backgroundImage: "url('images/img_rectangle4.png')",
                      }}
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_favorite_17X20.svg"
                        className="favorite_Two"
                        compid="I13:2564;13:4922"
                        comptype="Image"
                        alt="favorite Three"
                      />
                    </Stack>
                    <Column
                      className="justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[68%]"
                      compid="241"
                      comptype="Column"
                    >
                      <Text
                        className="text-black_900 w-[auto]"
                        compid="13:2522"
                        variant="body3"
                        comptype="Text"
                      >
                        Chunky Derby sneakers
                      </Text>
                      <Text
                        className="price_Two"
                        compid="13:2526"
                        variant="body4"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                      <Row
                        className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[42%]"
                        compid="203"
                        comptype="Row"
                      >
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="33"
                          comptype="Column"
                        >
                          <div
                            className="bg-lime_901 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2548"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="29"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_900 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2552"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="25"
                          comptype="Column"
                        >
                          <div
                            className="bg-amber_501 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2556"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="bg-bluegray_101 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] rounded-radius4 lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          compid="21"
                          comptype="Column"
                        >
                          <div
                            className="bg-indigo_902 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                            compid="13:2560"
                            comptype="View"
                          ></div>
                        </Column>
                      </Row>
                      <Text
                        className="NewArrival_One"
                        compid="13:2530"
                        variant="body8"
                        comptype="Text"
                      >
                        New Arrival
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Row
                className="bg-gray_903 font-inter items-center lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[98%]"
                compid="223"
                comptype="Row"
              >
                <Column
                  className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[61%]"
                  compid="222"
                  comptype="Column"
                >
                  <Img
                    src="images/img_logo_white_A700.svg"
                    className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[14%]"
                    compid="I13:2472;60:555"
                    comptype="Image"
                    alt="logo One"
                  />
                  <Row
                    className="items-start ml-[2px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] pt-[2px] w-[97%]"
                    compid="I13:2472;60:515"
                    comptype="Row"
                  >
                    <Column
                      className="justify-start mt-[1px] w-[26%]"
                      compid="I13:2472;60:516"
                      comptype="Column"
                    >
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        compid="I13:2472;61:715;60:518"
                        variant="body7"
                        comptype="Text"
                      >
                        About Rapidbox
                      </Text>
                      <Text
                        className="font-normal lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-gray_500 w-[auto]"
                        compid="I13:2472;61:716;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        About Us/Out Story
                      </Text>
                      <Text
                        className="font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-yellow_400 underline w-[auto]"
                        compid="I13:2472;61:717;60:523"
                        comptype="Text"
                      >
                        Why Rapidbox
                      </Text>
                      <Text
                        className="AboutUsOutSt_One"
                        compid="I13:2472;60:524;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Founding Team
                      </Text>
                      <Text
                        className="AboutUsOutSt_One"
                        compid="I13:2472;60:525;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Our Journey
                      </Text>
                      <Text
                        className="AboutUsOutSt_One"
                        compid="I13:2472;60:526;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Making of Our Shoes
                      </Text>
                      <Text
                        className="AboutUsOutSt_Four"
                        compid="I13:2472;60:527;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        We Care - Social Causes
                      </Text>
                      <Text
                        className="AboutUsOutSt_Five"
                        compid="I13:2472;60:528;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Community
                      </Text>
                    </Column>
                    <Column
                      className="justify-start mt-[1px] w-[26%]"
                      compid="I13:2472;60:529"
                      comptype="Column"
                    >
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        compid="I13:2472;60:530;60:518"
                        variant="body7"
                        comptype="Text"
                      >
                        Need help?
                      </Text>
                      <Text
                        className="font-normal lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-gray_500 w-[auto]"
                        compid="I13:2472;60:532;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Help Center
                      </Text>
                      <Text
                        className="AboutUsOutSt_Four"
                        compid="I13:2472;60:533;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Size Guide
                      </Text>
                      <Text
                        className="AboutUsOutSt_Five"
                        compid="I13:2472;60:534;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Shipping & Delivery
                      </Text>
                      <Text
                        className="AboutUsOutSt_One"
                        compid="I13:2472;60:535;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Returns & Exchange
                      </Text>
                      <Text
                        className="AboutUsOutSt_One"
                        compid="I13:2472;60:536;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Order Tracking
                      </Text>
                      <Text
                        className="AboutUsOutSt_Four"
                        compid="I13:2472;60:537;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Gift Cards
                      </Text>
                      <Text
                        className="AboutUsOutSt_Five"
                        compid="I13:2472;60:538;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        Site Map
                      </Text>
                    </Column>
                    <Column
                      className="justify-start mt-[1px] pb-[3px] pr-[3px] w-[26%]"
                      compid="I13:2472;60:539"
                      comptype="Column"
                    >
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        compid="I13:2472;60:540;60:518"
                        variant="body7"
                        comptype="Text"
                      >
                        Our E-stores
                      </Text>
                      <Text
                        className="font-normal lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-gray_500 w-[auto]"
                        compid="I13:2472;60:542;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        The Sneaker Store
                      </Text>
                      <Text
                        className="font-normal lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_500 w-[auto]"
                        compid="I13:2472;60:543;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        The Athleisure Store
                      </Text>
                      <Text
                        className="AboutUsOutSt_Five"
                        compid="I13:2472;60:544;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        The Sports Shoes Store
                      </Text>
                      <Text
                        className="font-normal lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-gray_500 w-[auto]"
                        compid="I13:2472;60:545;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        The Streetwear Store
                      </Text>
                      <Text
                        className="font-normal lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-gray_500 w-[auto]"
                        compid="I13:2472;60:546;60:521"
                        variant="body5"
                        comptype="Text"
                      >
                        The Jacket Store
                      </Text>
                    </Column>
                    <Column
                      className="justify-start w-[23%]"
                      compid="I13:2472;60:547"
                      comptype="Column"
                    >
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        compid="I13:2472;60:548;60:518"
                        variant="body7"
                        comptype="Text"
                      >
                        Social Media
                      </Text>
                      <Row
                        className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] pl-[1px] pt-[1px] w-[54%]"
                        compid="I13:2472;61:718"
                        comptype="Row"
                      >
                        <Img
                          src="images/img_camera.svg"
                          className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                          compid="I13:2472;61:718;60:551;13:5774"
                          comptype="Image"
                          alt="camera"
                        />
                        <Text
                          className="font-normal 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] not-italic text-gray_500 w-[auto]"
                          compid="I13:2472;61:718;60:552"
                          variant="body5"
                          comptype="Text"
                        >
                          Instagram
                        </Text>
                      </Row>
                      <Row
                        className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[1px] py-[1px] w-[53%]"
                        compid="I13:2472;60:553"
                        comptype="Row"
                      >
                        <Img
                          src="images/img_facebook.svg"
                          className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                          compid="I13:2472;60:553;60:551;13:8886"
                          comptype="Image"
                          alt="facebook"
                        />
                        <Text
                          className="font-normal 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] not-italic text-gray_500 w-[auto]"
                          compid="I13:2472;60:553;60:552"
                          variant="body5"
                          comptype="Text"
                        >
                          Facebook
                        </Text>
                      </Row>
                      <Row
                        className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[1px] py-[1px] w-[48%]"
                        compid="I13:2472;60:554"
                        comptype="Row"
                      >
                        <Img
                          src="images/img_play_14X18.svg"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[20%]"
                          compid="I13:2472;60:554;60:551;13:8937"
                          comptype="Image"
                          alt="play"
                        />
                        <Text
                          className="font-normal 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] not-italic text-gray_500 w-[auto]"
                          compid="I13:2472;60:554;60:552"
                          variant="body5"
                          comptype="Text"
                        >
                          Youtube
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Text
                    className="font-medium ml-[1px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] text-white_A700 w-[auto]"
                    compid="I13:2472;60:513"
                    variant="body7"
                    comptype="Text"
                  >
                    © 2022 Rapidbox®, Inc.
                  </Text>
                  <Text
                    className="font-normal ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-white_A700 w-[auto]"
                    compid="I13:2472;60:514"
                    variant="body7"
                    comptype="Text"
                  >
                    <span className="text-white_A700 font-inter font-medium underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      Privacy Policy
                    </span>
                    <span className="text-white_A700 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      {" "}
                      /{" "}
                    </span>
                    <span className="text-white_A700 font-inter font-medium underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      Terms of Use
                    </span>
                    <span className="text-white_A700 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      {" "}
                      /{" "}
                    </span>
                    <span className="text-white_A700 font-inter font-medium underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      Cookie Preferences
                    </span>
                  </Text>
                </Column>
                <Column className="w-[29%]" compid="221" comptype="Column">
                  <Text
                    className="font-normal text-yellow_400 w-[auto]"
                    compid="I13:2472;60:567"
                    variant="body1"
                    comptype="Text"
                  >
                    Stay in loop
                  </Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-white_A700 w-[auto]"
                    compid="I13:2472;60:570"
                    variant="body5"
                    comptype="Text"
                  >
                    Sign up for email updates today.
                  </Text>
                  <Input
                    className="p-[0] w-[100%]"
                    wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] flex lg:mt-[5px] w-[100%] xl:mt-[7px]"
                    compid="I13:2472;102:331"
                    comptype="EditText"
                    name="input"
                    placeholder=""
                    suffix={
                      <Img
                        src="images/img_checkmark.svg"
                        className="ml-[0] lg:w-[14px] lg:mr-[4px] xl:w-[17px] xl:mr-[6px] 2xl:w-[20px] 2xl:mr-[7px] 3xl:w-[24px] 3xl:mr-[8px] my-[auto]"
                        compid="I13:2472;102:332;13:2321"
                        comptype="Image"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder16"
                    size="sm"
                    variant="FillWhiteA700"
                  ></Input>
                  <Text
                    className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic text-gray_500 w-[91%]"
                    compid="I13:2472;60:573"
                    variant="body7"
                    comptype="Text"
                  >
                    By providing your email, you agree to the Terms of Use and
                    Privacy Policy.
                  </Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-gray_500 w-[auto]"
                    compid="I13:2472;60:574"
                    variant="body7"
                    comptype="Text"
                  >
                    You may unsubscribe later.
                  </Text>
                  <Text
                    className="font-normal lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] text-gray_400 w-[auto]"
                    compid="I13:2472;60:503"
                    variant="body7"
                    comptype="Text"
                  >
                    Accepted Payment Methods
                  </Text>
                  <Row
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[81%]"
                    compid="I13:2472;60:504"
                    comptype="Row"
                  >
                    <Stack
                      className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[4px] rounded-radius348 w-[10%]"
                      compid="I13:2472;60:505"
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_visalogo.svg"
                        className="absolute lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] inset-[0] justify-center m-[auto] w-[69%]"
                        compid="I13:2472;60:505;349:1192"
                        comptype="Image"
                        alt="visalogo"
                      />
                    </Stack>
                    <Stack
                      className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                      compid="I13:2472;60:506"
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[53%]"
                        compid="I13:2472;60:506;356:1729"
                        comptype="Image"
                        alt="videocamera"
                      />
                    </Stack>
                    <Stack
                      className="bg-blue_700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[2px] rounded-radius348 w-[10%]"
                      compid="I13:2472;60:507"
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_amex.svg"
                        className="absolute lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] inset-[0] justify-center m-[auto] w-[81%]"
                        compid="I13:2472;60:507;356:3321"
                        comptype="Image"
                        alt="AMEX"
                      />
                    </Stack>
                    <Stack
                      className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                      compid="I13:2472;60:508"
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_mastercard.svg"
                        className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[72%]"
                        compid="I13:2472;60:508;356:6429"
                        comptype="Image"
                        alt="Mastercard"
                      />
                    </Stack>
                    <Stack
                      className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                      compid="I13:2472;60:509"
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_volume.svg"
                        className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[69%]"
                        compid="I13:2472;60:509;356:7909"
                        comptype="Image"
                        alt="volume"
                      />
                    </Stack>
                    <Stack
                      className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[3px] rounded-radius3 w-[10%]"
                      compid="I13:2472;60:510"
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_lightbulb.svg"
                        className="absolute bottom-[9%] lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] inset-x-[0] mx-[auto] w-[78%]"
                        compid="I13:2472;60:510;356:26883"
                        comptype="Image"
                        alt="lightbulb"
                      />
                    </Stack>
                    <Stack
                      className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                      compid="I13:2472;60:511"
                      comptype="Stack"
                    >
                      <Img
                        src="images/img_googlepay.svg"
                        className="absolute bottom-[5%] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] inset-x-[0] mx-[auto] w-[69%]"
                        compid="I13:2472;60:511;356:14833"
                        comptype="Image"
                        alt="GooglePay"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default ProductDetailsPageProductdescriptionPage;
