import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  CheckBox,
  List,
  Line,
  Button,
  Input,
} from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const CartPagePage = () => {
  return (
    <>
      <Column
        className="bg-gray_100 font-inter justify-start mx-[auto] w-[100%]"
        compid="13:2600"
        comptype="Column"
      >
        <Column
          className="items-center w-[100%]"
          compid="278"
          comptype="Column"
        >
          <Row
            className="bg-yellow_100 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
            compid="13:2601"
            comptype="Row"
          >
            <Img
              src="images/img_reply.svg"
              className="reply"
              compid="I13:2601;137:389;13:1705"
              comptype="Image"
              alt="reply"
            />
            <Text
              className="FastEasyand"
              compid="I13:2601;137:390"
              variant="body7"
              comptype="Text"
            >
              Fast, Easy and Free Returns
            </Text>
            <Img
              src="images/img_map.svg"
              className="map"
              compid="I13:2601;137:392;13:3703"
              comptype="Image"
              alt="map"
            />
            <Text
              className="price"
              compid="I13:2601;137:393"
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
              compid="I13:2601;137:395;13:686"
              comptype="Image"
              alt="computer"
            />
            <Text
              className="SecurePayments"
              compid="I13:2601;137:396"
              variant="body7"
              comptype="Text"
            >
              Secure Payments
            </Text>
          </Row>
          <Header1 className="w-[100%]" compid="69" comptype="Header" />
        </Column>
        <Row
          className="font-lato items-start mt-[1px] w-[96%]"
          compid="272"
          comptype="Row"
        >
          <Column
            className="bg-white_A700 justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] shadow-bs2 w-[76%]"
            compid="59"
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
                variant="body4"
                comptype="Text"
              >
                Home
              </Text>
              <Text
                className="Two"
                compid="13:2634"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="Menscollectio"
                compid="13:2632"
                variant="body4"
                comptype="Text"
              >
                Men's collection
              </Text>
              <Text
                className="Two"
                compid="13:2635"
                variant="body4"
                comptype="Text"
              >
                /
              </Text>
              <Text
                className="WhiteWillow"
                compid="13:2633"
                variant="body4"
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
              compid="255"
              comptype="Row"
            >
              <CheckBox
                className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                inputClassName="mr-[5px] w-[undefinedpx]"
                compid="13:2690"
                comptype="CheckBox"
                name="Vector"
                label=""
              ></CheckBox>
              <Text
                className="price_Two1"
                compid="13:2607"
                variant="body4"
                comptype="Text"
              >
                ALL
              </Text>
              <Text
                className="ITEM"
                compid="13:2608"
                variant="body4"
                comptype="Text"
              >
                ITEM
              </Text>
              <Text
                className="PRICE_Three"
                compid="13:2609"
                variant="body4"
                comptype="Text"
              >
                PRICE
              </Text>
              <Text
                className="QTY"
                compid="13:2610"
                variant="body4"
                comptype="Text"
              >
                QTY
              </Text>
              <Text
                className="TOTAL"
                compid="13:2611"
                variant="body4"
                comptype="Text"
              >
                TOTAL
              </Text>
            </Row>
            <List
              className="gap-[0] lg:mb-[35px] xl:mb-[44px] 2xl:mb-[50px] 3xl:mb-[60px] min-h-[auto] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[87%]"
              compid="277"
              comptype="List"
              orientation="vertical"
            >
              <Row className="listvector_one" compid="247" comptype="Row">
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2693"
                  comptype="CheckBox"
                  name="Vector One"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_rectangle745.png"
                  className="Rectangle8271"
                  compid="13:2616"
                  comptype="Image"
                  alt="Rectangle827"
                />
                <Column className="w-[78%]" compid="258" comptype="Column">
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
                    compid="13:2617"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2613"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2605"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Button
                      className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] text-center w-[4%]"
                      compid="13:2624"
                      comptype="Button"
                      size="md"
                      variant="OutlineGray4001_2"
                    ></Button>
                    <Text
                      className="Group118"
                      compid="13:2621"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Button
                      className="text-center w-[4%]"
                      compid="13:2618"
                      comptype="Button"
                      size="sm"
                      variant="OutlineGray4001_2"
                    ></Button>
                    <Text
                      className="price_One2"
                      compid="13:2606"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[34%]"
                    compid="248"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2636;13:4922"
                      comptype="Image"
                      alt="favorite One"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2614"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2637;13:5396"
                      comptype="Image"
                      alt="trash One"
                    />
                    <Text
                      className="Delete"
                      compid="13:2615"
                      variant="body4"
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
              <Row className="listvector_one" compid="249" comptype="Row">
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2696"
                  comptype="CheckBox"
                  name="Vector Two"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_rectangle802.png"
                  className="Rectangle8271"
                  compid="13:2644"
                  comptype="Image"
                  alt="Rectangle830"
                />
                <Column className="w-[78%]" compid="259" comptype="Column">
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
                    compid="13:2645"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2641"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2638"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Button
                      className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] text-center w-[4%]"
                      compid="13:2652"
                      comptype="Button"
                      size="md"
                      variant="OutlineGray4001_2"
                    ></Button>
                    <Text
                      className="Group118"
                      compid="13:2649"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Button
                      className="text-center w-[4%]"
                      compid="13:2646"
                      comptype="Button"
                      size="sm"
                      variant="OutlineGray4001_2"
                    ></Button>
                    <Text
                      className="price_One2"
                      compid="13:2639"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[34%]"
                    compid="250"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2656;13:4922"
                      comptype="Image"
                      alt="favorite Two"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2642"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2657;13:5396"
                      comptype="Image"
                      alt="trash Two"
                    />
                    <Text
                      className="Delete"
                      compid="13:2643"
                      variant="body4"
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
              <Row className="listvector_one" compid="251" comptype="Row">
                <CheckBox
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  compid="13:2699"
                  comptype="CheckBox"
                  name="Vector Three"
                  label=""
                ></CheckBox>
                <Img
                  src="images/img_group134.png"
                  className="Rectangle8271"
                  compid="13:2664"
                  comptype="Image"
                  alt="Rectangle830 One"
                />
                <Column className="w-[78%]" compid="260" comptype="Column">
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
                    compid="13:2665"
                    comptype="Row"
                  >
                    <Text
                      className="UK42Black"
                      compid="13:2661"
                      variant="body4"
                      comptype="Text"
                    >
                      UK 42 / Black
                    </Text>
                    <Text
                      className="price_Four"
                      compid="13:2658"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                    <Button
                      className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] text-center w-[4%]"
                      compid="13:2672"
                      comptype="Button"
                      size="md"
                      variant="OutlineGray4001_2"
                    ></Button>
                    <Text
                      className="Group118"
                      compid="13:2669"
                      variant="body4"
                      comptype="Text"
                    >
                      1
                    </Text>
                    <Button
                      className="text-center w-[4%]"
                      compid="13:2666"
                      comptype="Button"
                      size="sm"
                      variant="OutlineGray4001_2"
                    ></Button>
                    <Text
                      className="price_One2"
                      compid="13:2659"
                      variant="body4"
                      comptype="Text"
                    >
                      ₹1239.00
                    </Text>
                  </Row>
                  <Row
                    className="items-start ml-[2px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[34%]"
                    compid="252"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite_One1"
                      compid="I13:2676;13:4922"
                      comptype="Image"
                      alt="favorite Three"
                    />
                    <Text
                      className="Saveforlater"
                      compid="13:2662"
                      variant="body4"
                      comptype="Text"
                    >
                      Save for later
                    </Text>
                    <Img
                      src="images/img_trash_20X18.svg"
                      className="trash_One"
                      compid="I13:2677;13:5396"
                      comptype="Image"
                      alt="trash Three"
                    />
                    <Text
                      className="Delete"
                      compid="13:2663"
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
            className="items-center justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[23%]"
            compid="271"
            comptype="Column"
          >
            <Row
              className="items-end justify-between w-[100%]"
              compid="266"
              comptype="Row"
            >
              <Text
                className="font-bold mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_801 tracking-ls1 w-[auto]"
                compid="13:2685"
                variant="body4"
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
              compid="267"
              comptype="Row"
            >
              <Input
                className="placeholder:text-gray_500 Group104"
                wrapClassName="w-[64%]"
                compid="13:2679"
                comptype="EditText"
                name="Group104"
                placeholder="Coupon Code"
                size="md"
              ></Input>
              <Button
                className="font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                compid="58"
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
              compid="57"
              comptype="Button"
              shape="RoundedBorder8"
              size="lg"
              variant="FillGray900"
            >
              Proceed to Payment
            </Button>
          </Column>
        </Row>
        <Column
          className="font-inter items-center w-[100%]"
          compid="279"
          comptype="Column"
        >
          <Footer
            className="bg-gray_903 w-[100%]"
            compid="13:2603"
            comptype="Footer"
          />
        </Column>
      </Column>
    </>
  );
};

export default CartPagePage;
