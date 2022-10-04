import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Button,
  Line,
  Stack,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const CartPagePage = () => {
  return (
    <>
      <Column
        className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]"
        compid="13:2600"
        comptype="Column"
      >
        <Column
          className="justify-start w-[100%]"
          compid="634"
          comptype="Column"
        >
          <Row
            className="bg-yellow_100 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
            compid="13:2601"
            comptype="Row"
          >
            <Row
              className="items-start justify-center 3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[88px] pr-[1px] pt-[1px] w-[28%]"
              compid="I13:2601;137:388"
              comptype="Row"
            >
              <Img
                src="images/img_reply.svg"
                className="reply"
                compid="I13:2601;137:389"
                comptype="Image"
                alt="reply"
              />
              <Text
                className="center"
                compid="I13:2601;137:390"
                variant="body8"
                comptype="Text"
              >
                Fast, Easy and Free Returns
              </Text>
            </Row>
            <List
              className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[58%]"
              compid="643"
              comptype="List"
              orientation="horizontal"
            >
              <Row
                className="items-center p-[1px] w-[100%]"
                compid="I13:2601;137:391"
                comptype="Row"
              >
                <Img
                  src="images/img_car.svg"
                  className="car"
                  compid="I13:2601;137:392"
                  comptype="Image"
                  alt="car"
                />
                <Text
                  className="left"
                  compid="I13:2601;137:393"
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
                compid="I13:2601;137:394"
                comptype="Row"
              >
                <Img
                  src="images/img_computer.svg"
                  className="computer"
                  compid="I13:2601;137:395"
                  comptype="Image"
                  alt="computer"
                />
                <Text
                  className="left"
                  compid="I13:2601;137:396"
                  variant="body8"
                  comptype="Text"
                >
                  Secure Payments
                </Text>
              </Row>
            </List>
          </Row>
          <Header className="w-[100%]" compid="417" comptype="Header" />
          <Row
            className="font-lato items-start mt-[1px] w-[96%]"
            compid="638"
            comptype="Row"
          >
            <Column
              className="bg-white_A700 justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] shadow-bs2 w-[76%]"
              compid="631"
              comptype="Column"
            >
              <Row
                className="items-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[28%]"
                compid="13:2630"
                comptype="Row"
              >
                <Text
                  className="Home"
                  compid="13:2631"
                  variant="body5"
                  comptype="Text"
                >
                  Home
                </Text>
                <Text
                  className="Two"
                  compid="13:2634"
                  variant="body5"
                  comptype="Text"
                >
                  /
                </Text>
                <Text
                  className="Menscollectio"
                  compid="13:2632"
                  variant="body5"
                  comptype="Text"
                >
                  Men's collection
                </Text>
                <Text
                  className="Two"
                  compid="13:2635"
                  variant="body5"
                  comptype="Text"
                >
                  /
                </Text>
                <Text
                  className="WhiteWillow"
                  compid="13:2633"
                  variant="body5"
                  comptype="Text"
                >
                  Sneakers
                </Text>
              </Row>
              <Text
                className="font-normal lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] text-black_900 w-[auto]"
                compid="13:2627"
                variant="body1"
                comptype="Text"
              >
                ITEM SUMMARY (3)
              </Text>
              <Row
                className="items-end lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[85%]"
                compid="621"
                comptype="Row"
              >
                <Button
                  className="flex items-center justify-center checkmark_Four"
                  compid="13:2690"
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
                  compid="13:2607"
                  variant="body5"
                  comptype="Text"
                >
                  ALL
                </Text>
                <Text
                  className="mb-[1px] xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[87px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                  compid="13:2608"
                  variant="body5"
                  comptype="Text"
                >
                  ITEM
                </Text>
                <Text
                  className="mb-[1px] lg:ml-[130px] xl:ml-[163px] 2xl:ml-[184px] 3xl:ml-[220px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                  compid="13:2609"
                  variant="body5"
                  comptype="Text"
                >
                  PRICE
                </Text>
                <Text
                  className="mb-[1px] 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                  compid="13:2610"
                  variant="body5"
                  comptype="Text"
                >
                  QTY
                </Text>
                <Text
                  className="mb-[1px] lg:ml-[135px] xl:ml-[169px] 2xl:ml-[190px] 3xl:ml-[228px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rowprice_four"
                  compid="13:2611"
                  variant="body5"
                  comptype="Text"
                >
                  TOTAL
                </Text>
              </Row>
              <List
                className="gap-[0] lg:mb-[35px] xl:mb-[44px] 2xl:mb-[50px] 3xl:mb-[60px] min-h-[auto] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[87%]"
                compid="644"
                comptype="List"
                orientation="vertical"
              >
                <Row className="listvector" compid="604" comptype="Row">
                  <Button
                    className="flex items-center justify-center checkmark_Four"
                    compid="13:2693"
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
                    className="Rectangle830"
                    compid="13:2616"
                    comptype="Image"
                    alt="Rectangle827"
                  />
                  <Column className="w-[78%]" compid="624" comptype="Column">
                    <Text
                      className="text-black_900 w-[auto]"
                      compid="13:2612"
                      variant="body3"
                      comptype="Text"
                    >
                      Chunky Derby sneakers
                    </Text>
                    <Row
                      className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                      compid="605"
                      comptype="Row"
                    >
                      <Text
                        className="UK42Black"
                        compid="13:2613"
                        variant="body5"
                        comptype="Text"
                      >
                        UK 42 / Black
                      </Text>
                      <Text
                        className="price_One1"
                        compid="13:2605"
                        variant="body5"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                      <Row
                        className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[13%]"
                        compid="13:2617"
                        comptype="Row"
                      >
                        <Column
                          className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                          compid="13:2624"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                            compid="13:2626"
                            comptype="View"
                          ></div>
                        </Column>
                        <Text
                          className="rowfive2"
                          compid="13:2621"
                          variant="body5"
                          comptype="Text"
                        >
                          1
                        </Text>
                        <Stack
                          className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                          compid="13:2618"
                          comptype="Stack"
                        >
                          <Img
                            src="images/img_plus.svg"
                            className="plus"
                            compid="13:2620"
                            comptype="Image"
                            alt="plus"
                          />
                        </Stack>
                      </Row>
                      <Text
                        className="price_One2"
                        compid="13:2606"
                        variant="body5"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                    </Row>
                    <Row
                      className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[35%]"
                      compid="618"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="checkmark_Four"
                        compid="13:2636"
                        comptype="Image"
                        alt="favorite One"
                      />
                      <Text
                        className="rowfavorite"
                        compid="13:2614"
                        variant="body5"
                        comptype="Text"
                      >
                        Save for later
                      </Text>
                      <Img
                        src="images/img_trash.svg"
                        className="trash"
                        compid="13:2637"
                        comptype="Image"
                        alt="trash"
                      />
                      <Text
                        className="rowfavorite"
                        compid="13:2615"
                        variant="body5"
                        comptype="Text"
                      >
                        Delete
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-gray_400"
                  compid="13:2675"
                  comptype="Line"
                />
                <Row className="listvector" compid="608" comptype="Row">
                  <Button
                    className="flex items-center justify-center checkmark_Four"
                    compid="13:2696"
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
                    className="Rectangle830"
                    compid="13:2644"
                    comptype="Image"
                    alt="Rectangle830"
                  />
                  <Column className="w-[78%]" compid="625" comptype="Column">
                    <Text
                      className="text-black_900 w-[auto]"
                      compid="13:2640"
                      variant="body3"
                      comptype="Text"
                    >
                      Chunky Derby sneakers
                    </Text>
                    <Row
                      className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                      compid="609"
                      comptype="Row"
                    >
                      <Text
                        className="UK42Black"
                        compid="13:2641"
                        variant="body5"
                        comptype="Text"
                      >
                        UK 42 / Black
                      </Text>
                      <Text
                        className="price_One1"
                        compid="13:2638"
                        variant="body5"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                      <Row
                        className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[13%]"
                        compid="13:2645"
                        comptype="Row"
                      >
                        <Column
                          className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                          compid="13:2652"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                            compid="13:2654"
                            comptype="View"
                          ></div>
                        </Column>
                        <Text
                          className="rowfive2"
                          compid="13:2649"
                          variant="body5"
                          comptype="Text"
                        >
                          1
                        </Text>
                        <Stack
                          className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                          compid="13:2646"
                          comptype="Stack"
                        >
                          <Img
                            src="images/img_plus.svg"
                            className="plus"
                            compid="13:2648"
                            comptype="Image"
                            alt="plus One"
                          />
                        </Stack>
                      </Row>
                      <Text
                        className="price_One2"
                        compid="13:2639"
                        variant="body5"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                    </Row>
                    <Row
                      className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[35%]"
                      compid="619"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="checkmark_Four"
                        compid="13:2656"
                        comptype="Image"
                        alt="favorite Two"
                      />
                      <Text
                        className="rowfavorite"
                        compid="13:2642"
                        variant="body5"
                        comptype="Text"
                      >
                        Save for later
                      </Text>
                      <Img
                        src="images/img_trash.svg"
                        className="trash"
                        compid="13:2657"
                        comptype="Image"
                        alt="trash One"
                      />
                      <Text
                        className="rowfavorite"
                        compid="13:2643"
                        variant="body5"
                        comptype="Text"
                      >
                        Delete
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-gray_400"
                  compid="13:2675"
                  comptype="Line"
                />
                <Row className="listvector" compid="612" comptype="Row">
                  <Button
                    className="flex items-center justify-center checkmark_Four"
                    compid="13:2699"
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
                    className="Rectangle830"
                    compid="13:2664"
                    comptype="Image"
                    alt="Rectangle830 One"
                  />
                  <Column className="w-[78%]" compid="626" comptype="Column">
                    <Text
                      className="text-black_900 w-[auto]"
                      compid="13:2660"
                      variant="body3"
                      comptype="Text"
                    >
                      Chunky Derby sneakers
                    </Text>
                    <Row
                      className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                      compid="613"
                      comptype="Row"
                    >
                      <Text
                        className="UK42Black"
                        compid="13:2661"
                        variant="body5"
                        comptype="Text"
                      >
                        UK 42 / Black
                      </Text>
                      <Text
                        className="price_One1"
                        compid="13:2658"
                        variant="body5"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                      <Row
                        className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[13%]"
                        compid="13:2665"
                        comptype="Row"
                      >
                        <Column
                          className="bg-white_A700 border border-gray_400 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[34%]"
                          compid="13:2672"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] mb-[1px] w-[88%]"
                            compid="13:2674"
                            comptype="View"
                          ></div>
                        </Column>
                        <Text
                          className="rowfive2"
                          compid="13:2669"
                          variant="body5"
                          comptype="Text"
                        >
                          1
                        </Text>
                        <Stack
                          className="bg-white_A700 border border-gray_400 border-solid lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[34%]"
                          compid="13:2666"
                          comptype="Stack"
                        >
                          <Img
                            src="images/img_plus.svg"
                            className="plus"
                            compid="13:2668"
                            comptype="Image"
                            alt="plus Two"
                          />
                        </Stack>
                      </Row>
                      <Text
                        className="price_One2"
                        compid="13:2659"
                        variant="body5"
                        comptype="Text"
                      >
                        ₹1239.00
                      </Text>
                    </Row>
                    <Row
                      className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[35%]"
                      compid="620"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="checkmark_Four"
                        compid="13:2676"
                        comptype="Image"
                        alt="favorite Three"
                      />
                      <Text
                        className="rowfavorite"
                        compid="13:2662"
                        variant="body5"
                        comptype="Text"
                      >
                        Save for later
                      </Text>
                      <Img
                        src="images/img_trash.svg"
                        className="trash"
                        compid="13:2677"
                        comptype="Image"
                        alt="trash Two"
                      />
                      <Text
                        className="rowfavorite"
                        compid="13:2663"
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
              className="items-center justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[23%]"
              compid="637"
              comptype="Column"
            >
              <Row
                className="items-end justify-between w-[100%]"
                compid="632"
                comptype="Row"
              >
                <Text
                  className="font-bold mb-[2px] text-gray_801 rowuk42black"
                  compid="13:2685"
                  variant="body5"
                  comptype="Text"
                >
                  Subtotal
                </Text>
                <Text
                  className="font-extrabold text-gray_900 w-[auto]"
                  compid="13:2684"
                  variant="body1"
                  comptype="Text"
                >
                  ₹1239.00
                </Text>
              </Row>
              <Line
                className="bg-gray_400 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]"
                compid="13:2686"
                comptype="Line"
              />
              <Row
                className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                compid="633"
                comptype="Row"
              >
                <Input
                  className="placeholder:text-gray_500 Group104"
                  wrapClassName="w-[64%]"
                  compid="13:2679"
                  comptype="EditText"
                  name="Group104"
                  placeholder="Coupon Code"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineGray400"
                ></Input>
                <Button
                  className="font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                  compid="409"
                  comptype="Button"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray900"
                >
                  Apply
                </Button>
              </Row>
              <Line
                className="bg-gray_400 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                compid="13:2687"
                comptype="Line"
              />
              <Button
                className="font-bold lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[100%]"
                compid="408"
                comptype="Button"
                shape="RoundedBorder8"
                size="lg"
                variant="FillGray900"
              >
                Proceed to Payment
              </Button>
            </Column>
          </Row>
          <Footer
            className="bg-gray_903 font-inter w-[100%]"
            compid="13:2603"
            comptype="Footer"
          />
        </Column>
      </Column>
    </>
  );
};

export default CartPagePage;
