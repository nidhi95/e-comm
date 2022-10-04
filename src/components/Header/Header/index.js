import React from "react";

import { Row, Img, Text, Stack } from "components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/productdetailspageproductdescription");
  }

  return (
    <>
      <header className={props.className} compid="417" comptype="Header">
        <Row
          className="bg-white_A700 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] shadow-bs w-[100%]"
          compid="13:2181"
          comptype="Row"
        >
          <Img
            src="images/img_logo.svg"
            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[9%]"
            compid="I13:2181;1:10418"
            comptype="Image"
            alt="logo"
          />
          <Row
            className="items-start justify-center lg:ml-[153px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] w-[31%]"
            compid="I13:2181;1:10411"
            comptype="Row"
          >
            <Text
              className="common-pointer hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center my-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
              compid="I13:2181;1:10412"
              variant="body6"
              comptype="Text"
              onClick={handleNavigate4}
            >
              New arrival
            </Text>
            <Text
              className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
              compid="I13:2181;1:10413"
              variant="body6"
              comptype="Text"
            >
              Featured
            </Text>
            <Text
              className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
              compid="I13:2181;1:10414"
              variant="body6"
              comptype="Text"
            >
              Men
            </Text>
            <Text
              className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center mb-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
              compid="I13:2181;1:10415"
              variant="body6"
              comptype="Text"
            >
              Women
            </Text>
            <Text
              className="hover:bg-gray_800 cursor-pointer hover:font-bold font-inter font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
              compid="I13:2181;1:10416"
              variant="body6"
              comptype="Text"
            >
              Sale
            </Text>
          </Row>
          <Row
            className="bg-white_A700 border border-gray_500 border-solid items-center justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[24%]"
            compid="I13:2181;1:10417"
            comptype="Row"
          >
            <Img
              src="images/img_contrast.svg"
              className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] checkmark_Four"
              compid="I13:2181;1:10417;1:10369"
              comptype="Image"
              alt="contrast"
            />
            <Text
              className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:mr-[18px] xl:mr-[23px] 2xl:mr-[26px] 3xl:mr-[31px] input"
              compid="I13:2181;1:10417;1:10370"
              variant="body6"
              comptype="Text"
            >
              Search for products, categories, etc
            </Text>
          </Row>
          <Stack
            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] w-[9%]"
            compid="508"
            comptype="Stack"
          >
            <Row
              className="absolute bottom-[0] items-center justify-between left-[0] w-[91%]"
              compid="I13:2181;1:10429"
              comptype="Row"
            >
              <Img
                src="images/img_user.svg"
                className="checkmark_Four"
                compid="I13:2181;1:10430"
                comptype="Image"
                alt="user"
              />
              <Img
                src="images/img_favorite.svg"
                className="checkmark_Four"
                compid="I13:2181;1:10431"
                comptype="Image"
                alt="favorite"
              />
              <Img
                src="images/img_file.svg"
                className="checkmark_Four"
                compid="I13:2181;1:10432"
                comptype="Image"
                alt="file"
              />
            </Row>
            <Text
              className="hover:absolute absolute bg-gray_800 cursor-pointer hover:font-bold font-bold font-inter p-[4px] right-[0] rounded-radius4 hover:text-gray_500 text-yellow_100 top-[0] w-[23px]"
              compid="I13:2181;1:10433"
              variant="body8"
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

export default Header;
