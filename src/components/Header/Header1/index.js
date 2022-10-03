import React from "react";

import { Row, Img, Text, Stack } from "components";
import { useNavigate } from "react-router-dom";

const Header1 = (props) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/desktopthree");
  }
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
      <header className={props.className} compid="69" comptype="Header">
        <Row
          className="bg-white_A700 items-start justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] shadow-bs w-[100%]"
          compid="13:2181"
          comptype="Row"
        >
          <Img
            src="images/img_logo.svg"
            className="common-pointer lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[8%]"
            compid="I13:2181;1:10418"
            comptype="Image"
            onClick={handleNavigate}
            alt="logo"
          />
          <Text
            className="common-pointer hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[153px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
            compid="I13:2181;1:10412"
            variant="body5"
            comptype="Text"
            onClick={handleNavigate4}
          >
            New arrival
          </Text>
          <Text
            className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
            compid="I13:2181;1:10413"
            variant="body5"
            comptype="Text"
          >
            Featured
          </Text>
          <Text
            className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
            compid="I13:2181;1:10414"
            variant="body5"
            comptype="Text"
          >
            Men
          </Text>
          <Text
            className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
            compid="I13:2181;1:10415"
            variant="body5"
            comptype="Text"
          >
            Women
          </Text>
          <Text
            className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
            compid="I13:2181;1:10416"
            variant="body5"
            comptype="Text"
          >
            Sale
          </Text>
          <Row
            className="bg-white_A700 border border-gray_500 border-solid items-center justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 w-[24%]"
            compid="I13:2181;1:10417"
            comptype="Row"
          >
            <Img
              src="images/img_contrast.svg"
              className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
              compid="I13:2181;1:10417;1:10369;1:4300"
              comptype="Image"
              alt="contrast"
            />
            <Text
              className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mr-[17px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] not-italic text-gray_500 w-[auto]"
              compid="I13:2181;1:10417;1:10370"
              variant="body5"
              comptype="Text"
            >
              Search for products, categories, etc
            </Text>
          </Row>
          <Stack
            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] w-[9%]"
            compid="155"
            comptype="Stack"
          >
            <Row
              className="absolute bottom-[0] items-center justify-between left-[0] p-[2px] w-[91%]"
              compid="I13:2181;1:10429"
              comptype="Row"
            >
              <Img
                src="images/img_user.svg"
                className="common-pointer lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                compid="I13:2181;1:10430;1:2527"
                comptype="Image"
                onClick={handleNavigate3}
                alt="user"
              />
              <Img
                src="images/img_favorite.svg"
                className="common-pointer lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[17%]"
                compid="I13:2181;1:10431;13:4922"
                comptype="Image"
                onClick={handleNavigate2}
                alt="favorite"
              />
              <Img
                src="images/img_trash_20X18.svg"
                className="common-pointer lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mr-[1px] w-[16%]"
                compid="I13:2181;1:10432;1:3913"
                comptype="Image"
                onClick={handleNavigate1}
                alt="trash"
              />
            </Row>
            <Text
              className="hover:absolute absolute bg-gray_800 cursor-pointer hover:font-bold font-bold font-inter p-[4px] right-[0] rounded-radius4 hover:text-gray_500 text-yellow_100 top-[0] w-[23px]"
              compid="I13:2181;1:10433"
              variant="body7"
              comptype="Text"
            >
              12
            </Text>
          </Stack>
        </Row>
      </header>
    </>
  );
};

export default Header1;
