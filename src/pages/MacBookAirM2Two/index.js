import React from "react";

import { Column, Stack, Img, Row, Text, Button, Line, List } from "components";

const MacBookAirM2TwoPage = () => {
  return (
    <>
      <Column className="bg-black_900 flex flex-col font-ubuntu justify-start mx-[auto] shadow-bs6 w-[100%]">
        <Column className="flex flex-col items-center w-[100%]">
          <Stack className="h-[94px] relative w-[100%]">
            <Img
              src="images/img_ellipse1.png"
              className="absolute h-[63px] left-[26%] max-w-[100%] top-[0] w-[18%]"
              alt="EllipseOne"
            />
            <Img
              src="images/img_ellipse2.png"
              className="absolute h-[54px] max-w-[100%] w-[14%]"
              alt="EllipseTwo"
            />
            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[19px] p-[25px] sm:px-[15px] sm:py-[14px] w-[100%]">
              <Stack className="font-typouprightbt h-[35px] sm:ml-[28px] md:ml-[36px] ml-[47px] relative w-[9%]">
                <Img
                  src="images/img_vickremovebgp.png"
                  className="absolute bottom-[3%] h-[29px] left-[0] max-w-[100%] sm:w-[100%] w-[43%]"
                  alt="vickremovebgp"
                />
                <Text
                  className="absolute font-normal not-italic text-teal_A100 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  ickyJay
                </Text>
              </Stack>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center justify-center md:ml-[208px] ml-[269px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                <Text
                  className="text-light_blue_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Home
                </Text>
                <Text
                  className="sm:ml-[33px] md:ml-[43px] ml-[56px] text-light_blue_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Services
                </Text>
                <Text
                  className="sm:ml-[34px] md:ml-[44px] ml-[58px] text-light_blue_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  About
                </Text>
                <Text
                  className="sm:ml-[34px] md:ml-[44px] ml-[57px] text-light_blue_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Portoflio
                </Text>
                <Text
                  className="sm:ml-[34px] md:ml-[44px] ml-[57px] text-light_blue_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Contact
                </Text>
              </Row>
              <Button
                className="cursor-pointer font-bold font-ubuntu min-w-[9%] md:ml-[117px] ml-[152px] sm:ml-[91px] mt-[2px] text-[15px] text-center text-white_A700 w-[max-content]"
                size="sm"
                variant="OutlineBlack90070"
              >
                Let’s Talk
              </Button>
            </Row>
          </Stack>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[10px] sm:mt-[5px] md:mt-[7px] pr-[10px] sm:pr-[5px] md:pr-[7px] py-[10px] sm:py-[5px] md:py-[7px] w-[100%]">
            <Stack className="h-[680px] max-w-[646px] ml-[auto] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[26px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Text
                className="absolute bottom-[10%] font-normal leading-[normal] sm:mx-[0] not-italic right-[9%] text-cyan_400 sm:w-[100%] w-[27%]"
                as="h2"
                variant="h2"
              >
                . . . . . . . . . . . . <br />. . . . . . . . . . . .<br />. . .
                . . . . . . . . .{" "}
              </Text>
              <Stack className="absolute h-[680px] w-[100%]">
                <Img
                  src="images/img_pngclipartyel.png"
                  className="absolute h-[495px] inset-x-[0] max-w-[100%] mx-[auto] top-[11%] sm:w-[100%] w-[95%]"
                  alt="pngclipartyel"
                />
                <Img
                  src="images/img_fqshape21.png"
                  className="absolute h-[194px] left-[0] max-w-[100%] top-[6%] w-[17%]"
                  alt="fqshapeTwentyOne"
                />
                <Stack className="absolute h-[680px] w-[100%]">
                  <Stack
                    className="absolute bg-cover bg-no-repeat bottom-[0] h-[640px] sm:p-[15px] md:p-[42px] p-[55px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Img
                      src="images/img_pngtreememphis.png"
                      className="absolute bottom-[14%] h-[204px] left-[0] max-w-[100%] w-[32%]"
                      alt="pngtreememphis"
                    />
                  </Stack>
                  <Stack className="absolute h-[601px] inset-x-[0] mx-[auto] top-[0] sm:w-[100%] w-[81%]">
                    <Img
                      src="images/img_istockphoto120.png"
                      className="absolute h-[601px] max-w-[100%] rounded-radius3005 w-[100%]"
                      alt="istockphoto120"
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Column className="flex flex-col items-center justify-start max-w-[546px] md:ml-[7px] ml-[auto] mr-[auto] mt-[102px] sm:mt-[61px] md:mt-[78px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Stack className="h-[348px] ml-[1px] relative sm:w-[100%] w-[97%]">
                  <Column className="absolute bottom-[0] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[62%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[normal] ml-[113px] md:ml-[87px] sm:mx-[0] not-italic text-cyan_400 sm:w-[100%] w-[53%]"
                        as="h2"
                        variant="h2"
                      >
                        . . . . . . . . . . . . <br />. . . . . . . . . . . .
                        <br />. . . . . . . . . . . .{" "}
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[123px] mt-[160px] sm:mt-[95px] w-[100%]">
                        <div className="border-amber_600 border-bw7 border-solid sm:h-[30px] md:h-[39px] h-[50px] sm:mt-[13px] md:mt-[17px] mt-[22px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[50px]"></div>
                        <Img
                          src="images/img_location.svg"
                          className="max-w-[100%] w-[20%]"
                          alt="location"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Text
                    className="absolute left-[1%] text-pink_A200 top-[0] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Hello, I’m VickyJay
                  </Text>
                  <Text
                    className="absolute bottom-[8%] inset-x-[0] leading-[normal] sm:mx-[0] mx-[auto] text-cyan_50 sm:w-[100%] w-[99%]"
                    as="h1"
                    variant="h1"
                  >
                    Professional
                    <br />
                    Web Developer,
                    <br />
                    Video Editor &<br />
                    Graphics Designer
                  </Text>
                </Stack>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                  <Button
                    className="cursor-pointer font-bold sm:mb-[13px] md:mb-[17px] mb-[23px] min-w-[34%] text-[17px] text-center text-white_A700 w-[max-content]"
                    variant="OutlineBlack900ce"
                  >
                    Hire Now
                  </Button>
                  <Text
                    className="font-normal leading-[normal] md:ml-[132px] ml-[171px] mt-[11px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] not-italic text-cyan_400 sm:w-[100%] w-[27%]"
                    as="h4"
                    variant="h4"
                  >
                    . . . . . . . . . . . . <br />. . . . . . . . . . . .<br />.
                    . . . . . . . . . . .{" "}
                  </Text>
                </Row>
                <Line className="bg-blue_200_3f h-[3px] sm:mt-[22px] md:mt-[28px] mt-[37px] sm:w-[100%] w-[49%]" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[4px] ml-[6px] sm:mt-[4px] md:mt-[5px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <List
                    className="sm:gap-[19px] md:gap-[24px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[17px] w-[35%]"
                    orientation="horizontal"
                  >
                    <Stack className="h-[40px] relative w-[100%]">
                      <Img
                        src="images/img_facebook.svg"
                        className="absolute h-[25px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[14px] md:w-[19px] w-[25px]"
                        alt="facebook"
                      />
                      <div className="absolute border-2 border-cyan_700 border-solid sm:h-[24px] md:h-[31px] h-[40px] rounded-radius50 sm:w-[23px] md:w-[30px] w-[40px]"></div>
                    </Stack>
                    <Stack className="h-[40px] relative w-[100%]">
                      <Img
                        src="images/img_twitter.svg"
                        className="absolute h-[25px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[14px] md:w-[19px] w-[25px]"
                        alt="twitter"
                      />
                      <div className="absolute border-2 border-cyan_700 border-solid sm:h-[24px] md:h-[31px] h-[40px] rounded-radius50 sm:w-[23px] md:w-[30px] w-[40px]"></div>
                    </Stack>
                    <Stack className="h-[40px] relative w-[100%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="absolute h-[25px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[14px] md:w-[19px] w-[25px]"
                        alt="instagram"
                      />
                      <div className="absolute border-2 border-cyan_700 border-solid sm:h-[24px] md:h-[31px] h-[40px] rounded-radius50 sm:w-[23px] md:w-[30px] w-[40px]"></div>
                    </Stack>
                  </List>
                  <Button
                    className="flex sm:h-[24px] md:h-[31px] h-[40px] items-center justify-center sm:ml-[19px] md:ml-[24px] ml-[32px] sm:mt-[10px] md:mt-[13px] mt-[18px] rounded-radius50 sm:w-[23px] md:w-[30px] w-[40px]"
                    size="smIcn"
                    variant="icbOutlineCyan700"
                  >
                    <Img
                      src="images/img_group21.svg"
                      className="h-[25px] sm:h-[15px] md:h-[20px] flex items-center justify-center"
                      alt="GroupTwentyOne"
                    />
                  </Button>
                  <div className="border-bw7 border-cyan_400 border-solid sm:h-[30px] md:h-[39px] h-[50px] sm:mb-[4px] md:mb-[6px] mb-[8px] sm:ml-[140px] md:ml-[181px] ml-[234px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[50px]"></div>
                </Row>
              </Column>
            </Column>
          </Row>
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Stack className="bg-gray_900 h-[699px] sm:pr-[15px] md:pr-[16px] pr-[21px] sm:py-[15px] md:py-[16px] py-[21px] relative w-[100%]">
              <Stack className="absolute h-[645px] inset-y-[0] my-[auto] sm:w-[100%] w-[96%]">
                <Text
                  className="absolute bottom-[7%] font-normal leading-[normal] sm:mx-[0] not-italic right-[41%] text-cyan_400 w-[10%] sm:w-[100%]"
                  as="h4"
                  variant="h4"
                >
                  . . . . . . . . . . . . <br />. . . . . . . . . . . .<br />. .
                  . . . . . . . . . .{" "}
                </Text>
                <Column className="absolute flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[0] top-[10%] sm:w-[100%] w-[49%]">
                  <Text
                    className="font-bold sm:ml-[14px] md:ml-[19px] ml-[25px] text-cyan_700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    About Me
                  </Text>
                  <Stack className="font-nunito h-[278px] sm:mr-[14px] md:mr-[19px] mr-[25px] sm:mt-[22px] md:mt-[28px] mt-[37px] relative sm:w-[100%] w-[96%]">
                    <div className="absolute border-bw7 border-cyan_400 border-solid bottom-[12%] sm:h-[30px] md:h-[39px] h-[50px] left-[0] rounded-radius50 sm:w-[29px] md:w-[38px] w-[50px]"></div>
                    <Text
                      className="absolute leading-[normal] sm:mx-[0] not-italic text-gray_50 sm:w-[100%] w-[96%]"
                      as="h5"
                      variant="h5"
                    >
                      Hi, my name is OLATUNJI Victor Toluwase, I am a Front-end
                      developer and UI developer. I have honed my skills in
                      <br /> Web Development and i have core understanding of
                      advance UI design principles.
                      <br />
                      <br />
                      1+ Years of experience. Specialised in building Websites,
                      while ensuring a seamless web experience for end users. My
                      specialty is Front-end web Development,Turning Beautiful
                      Designs and turning it into beautiful, semantic HTML &
                      CSS.
                      <br />
                      <br />
                      {`When I'm not designing, I'm probably Playing games, Jamming to music, Watching Video, Gisting or Thinking about my life🙂. This is a fun fact About me. Reach out to me cos I Love making new Friends.`}
                      <br />.
                    </Text>
                  </Stack>
                  <Text
                    className="font-normal leading-[normal] md:ml-[373px] ml-[483px] sm:mx-[0] not-italic text-cyan_400_7f sm:w-[100%] w-[20%]"
                    as="h4"
                    variant="h4"
                  >
                    . . . . . . . . . . . . <br />. . . . . . . . . . . .<br />.
                    . . . . . . . . . . .{" "}
                  </Text>
                  <Button
                    className="cursor-pointer font-bold min-w-[29%] sm:ml-[19px] md:ml-[25px] ml-[33px] sm:mr-[234px] md:mr-[303px] mr-[392px] sm:mt-[12px] md:mt-[16px] mt-[21px] text-[17px] text-center text-white_A700 w-[max-content]"
                    variant="OutlineGray90066"
                  >
                    Download CV
                  </Button>
                </Column>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                      <Img
                        src="images/img_ellipse12.png"
                        className="flex-shrink-0 max-w-[100%] w-[28%]"
                        alt="EllipseTwelve"
                      />
                      <Text
                        className="flex-grow font-bold sm:ml-[14px] md:ml-[19px] ml-[25px] sm:mt-[40px] md:mt-[51px] mt-[67px] text-pink_A200"
                        as="h2"
                        variant="h2"
                      >
                        Services
                      </Text>
                    </Row>
                    <Stack className="h-[507px] sm:ml-[35px] md:ml-[45px] ml-[59px] sm:mt-[10px] md:mt-[13px] mt-[18px] relative sm:w-[100%] w-[91%]">
                      <Column className="absolute bottom-[0] flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                        <Text
                          className="font-normal leading-[normal] md:ml-[204px] ml-[264px] sm:mx-[0] not-italic text-cyan_400 sm:w-[100%] w-[31%]"
                          as="h4"
                          variant="h4"
                        >
                          . . . . . . . . . . . . <br />. . . . . . . . . . . .
                          <br />. . . . . . . . . . . .{" "}
                        </Text>
                        <Img
                          src="images/img_eye.svg"
                          className="max-w-[100%] sm:mt-[101px] md:mt-[131px] mt-[170px] w-[22%]"
                          alt="eye"
                        />
                      </Column>
                      <Column className="absolute bg-gray_901 flex flex-col justify-center left-[4%] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[17px] rounded-radius10 shadow-bs7 top-[0] sm:w-[100%] w-[47%]">
                        <Img
                          src="images/img_computer.svg"
                          className="sm:h-[24px] md:h-[31px] h-[40px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] md:mt-[10px] mt-[13px] sm:mt-[7px] sm:w-[23px] md:w-[30px] w-[40px]"
                          alt="computer"
                        />
                        <Text
                          className="font-bold font-ubuntu sm:ml-[4px] md:ml-[6px] ml-[8px] sm:mt-[11px] md:mt-[15px] mt-[20px] text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          WEB DEVELOPMENT
                        </Text>
                        <Text
                          className="font-nunito leading-[normal] sm:mb-[21px] md:mb-[27px] mb-[36px] md:ml-[6px] ml-[8px] sm:mt-[12px] md:mt-[16px] mt-[21px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[97%]"
                          variant="body1"
                        >
                          I create beautiful interfaces with
                          <br />
                          <br />
                          HTML, CSS & JavaScript
                        </Text>
                      </Column>
                      <Column className="absolute bg-gray_901 flex flex-col justify-center sm:mx-[0] md:p-[10px] p-[13px] sm:p-[7px] rounded-radius10 shadow-bs7 sm:w-[100%] w-[47%]">
                        <Img
                          src="images/img_location_40X40.svg"
                          className="sm:h-[24px] md:h-[31px] h-[40px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[7px] sm:mt-[10px] md:mt-[13px] mt-[17px] sm:w-[23px] md:w-[30px] w-[40px]"
                          alt="location One"
                        />
                        <Text
                          className="font-bold font-ubuntu ml-[12px] sm:ml-[7px] md:ml-[9px] sm:mt-[11px] md:mt-[15px] mt-[20px] text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          VERSION CONTROL
                        </Text>
                        <Text
                          className="font-nunito leading-[normal] sm:mb-[23px] md:mb-[30px] mb-[40px] ml-[12px] md:ml-[9px] sm:mt-[12px] md:mt-[16px] mt-[21px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[95%]"
                          variant="body1"
                        >
                          I can use version control systems
                          <br />
                          <br />
                          well, and Git is my go-to-tool
                        </Text>
                      </Column>
                      <Column className="absolute bg-pink_A200 bottom-[6%] flex flex-col justify-center left-[5%] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[23px] rounded-radius10 shadow-bs7 sm:w-[100%] w-[47%]">
                        <Img
                          src="images/img_arcticonsaudio.svg"
                          className="sm:h-[24px] md:h-[31px] h-[40px] max-w-[100%] sm:mt-[4px] md:mt-[5px] mt-[7px] sm:w-[23px] md:w-[30px] w-[40px]"
                          alt="arcticonsaudio"
                        />
                        <Text
                          className="font-bold font-ubuntu ml-[2px] sm:mt-[11px] md:mt-[15px] mt-[20px] text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Video Editing
                        </Text>
                        <Text
                          className="font-nunito leading-[normal] sm:mb-[17px] md:mb-[23px] mb-[30px] ml-[2px] sm:mt-[12px] md:mt-[16px] mt-[21px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[94%]"
                          variant="body1"
                        >
                          very good in video edting and <br />
                          manipulation
                        </Text>
                      </Column>
                      <Column className="absolute bg-gray_901 bottom-[6%] flex flex-col justify-center sm:mx-[0] p-[2px] right-[0] rounded-radius10 shadow-bs7 sm:w-[100%] w-[47%]">
                        <Img
                          src="images/img_computer_40X40.svg"
                          className="sm:h-[24px] md:h-[31px] h-[40px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[21px] sm:mt-[16px] md:mt-[21px] mt-[28px] sm:w-[23px] md:w-[30px] w-[40px]"
                          alt="computer One"
                        />
                        <Text
                          className="font-bold font-ubuntu sm:ml-[13px] md:ml-[17px] ml-[23px] sm:mt-[11px] md:mt-[15px] mt-[20px] text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          WEB SCRAPING
                        </Text>
                        <Text
                          className="font-nunito leading-[normal] sm:mb-[18px] md:mb-[24px] mb-[31px] md:ml-[16px] ml-[21px] sm:mt-[12px] md:mt-[16px] mt-[21px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[92%]"
                          variant="body1"
                        >
                          I can collect content and data
                          <br />
                          <br />
                          from the internet then manipulate
                          <br />
                          <br />
                          and analyze as needed
                        </Text>
                      </Column>
                    </Stack>
                  </Column>
                </Column>
              </Stack>
            </Stack>
          </Column>
        </Column>
        <Stack className="h-[633px] max-w-[1188px] ml-[auto] mr-[auto] sm:mt-[43px] md:mt-[55px] mt-[72px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Stack className="absolute h-[633px] right-[4%] sm:w-[100%] w-[97%]">
            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] right-[0] top-[0] sm:w-[100%] w-[52%]">
              <Text
                className="font-bold text-pink_A200 w-[auto]"
                as="h2"
                variant="h2"
              >
                Portoflio
              </Text>
              <div className="border-amber_600 border-bw7 border-solid sm:h-[30px] md:h-[39px] h-[50px] md:mt-[11px] mt-[15px] sm:mt-[8px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[50px]"></div>
            </Row>
            <List
              className="absolute bottom-[0] md:gap-[1px] sm:gap-[1px] gap-[2px] grid sm:grid-cols-1 grid-cols-2 left-[0] min-h-[auto] sm:w-[100%] w-[71%]"
              orientation="horizontal"
            >
              <Stack className="h-[568px] sm:mb-[14px] md:mb-[19px] mb-[25px] relative w-[100%]">
                <Text
                  className="absolute font-normal leading-[normal] left-[0] sm:mx-[0] not-italic text-cyan_400 top-[0] sm:w-[100%] w-[28%]"
                  as="h4"
                  variant="h4"
                >
                  . . . . . . . . . . . . <br />. . . . . . . . . . . .<br />. .
                  . . . . . . . . . .{" "}
                </Text>
                <Column className="absolute bg-gray_902 bottom-[0] flex flex-col justify-start sm:mx-[0] sm:pb-[15px] md:pb-[20px] pb-[27px] right-[0] rounded-radius10 shadow-bs8 sm:w-[100%] w-[85%]">
                  <Img
                    src="images/img_blog1.png"
                    className="max-w-[100%] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="blogOne"
                  />
                  <Column className="flex flex-col justify-start md:ml-[20px] ml-[27px] sm:mt-[17px] md:mt-[22px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Blog Post
                    </Text>
                    <Text
                      className="leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[21px] not-italic text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      A Web-page that makes you read abou recent happenings.
                    </Text>
                    <Button
                      className="cursor-pointer font-bold min-w-[47%] sm:mt-[16px] md:mt-[20px] mt-[27px] text-[15px] text-bluegray_50 text-center w-[max-content]"
                      variant="OutlineBlack901"
                    >
                      view demo
                    </Button>
                  </Column>
                </Column>
              </Stack>
              <Stack className="h-[530px] sm:mt-[37px] md:mt-[48px] mt-[63px] relative w-[100%]">
                <div className="absolute border-amber_600 border-bw7 border-solid bottom-[0] sm:h-[30px] md:h-[39px] h-[50px] left-[0] rounded-radius50 sm:w-[29px] md:w-[38px] w-[50px]"></div>
                <Column className="absolute bg-gray_902 flex flex-col justify-start sm:mx-[0] sm:pb-[15px] md:pb-[20px] pb-[27px] right-[0] rounded-radius10 shadow-bs8 top-[0] sm:w-[100%] w-[95%]">
                  <Img
                    src="images/img_todo1.png"
                    className="max-w-[100%] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="TODOOne"
                  />
                  <Column className="flex flex-col justify-start md:ml-[20px] ml-[27px] sm:mt-[17px] md:mt-[22px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Todo LIST
                    </Text>
                    <Text
                      className="leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[21px] not-italic text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      A Todo list page that makes you to select and plan your
                      work.
                      <br />
                    </Text>
                    <Button className="cursor-pointer font-bold min-w-[47%] sm:mt-[16px] md:mt-[20px] mt-[27px] text-[15px] text-bluegray_50 text-center w-[max-content]">
                      view demo
                    </Button>
                  </Column>
                </Column>
              </Stack>
            </List>
          </Stack>
          <Column className="absolute bg-gray_902 bottom-[4%] flex flex-col justify-start sm:mx-[0] sm:pb-[15px] md:pb-[20px] pb-[27px] right-[0] rounded-radius10 shadow-bs8 sm:w-[100%] w-[31%]">
            <Img
              src="images/img_withdraw1.png"
              className="max-w-[100%] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
              alt="withdrawOne"
            />
            <Column className="flex flex-col justify-start md:ml-[20px] ml-[27px] sm:mt-[17px] md:mt-[22px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                Withdrawal Form
              </Text>
              <Text
                className="leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[21px] not-italic text-white_A700 w-[100%]"
                as="h5"
                variant="h5"
              >
                A simple Responsive withdrawal Form
              </Text>
              <Button className="cursor-pointer font-bold min-w-[47%] sm:mt-[16px] md:mt-[20px] mt-[27px] text-[15px] text-bluegray_50 text-center w-[max-content]">
                view demo
              </Button>
            </Column>
          </Column>
        </Stack>
        <Column className="flex flex-col items-center md:mt-[100px] mt-[130px] sm:mt-[77px] w-[100%]">
          <Stack className="h-[433px] relative w-[100%]">
            <Stack className="absolute h-[380px] top-[0] w-[100%]">
              <Row className="absolute bg-cyan_700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[19px] p-[25px] top-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mb-[14px] md:mb-[19px] mb-[25px] ml-[128px] md:ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                  <Text
                    className="font-normal leading-[normal] sm:mt-[29px] md:mt-[37px] mt-[49px] sm:mx-[0] not-italic text-cyan_400 sm:w-[100%] w-[21%]"
                    as="h2"
                    variant="h2"
                  >
                    . . . . . . . . . . . . . . . <br />. . . . . . . . . . . .
                    . . . <br />. . . . . . . . . . . . . . .<br />. . . . . . .
                    . . . . . . . .
                  </Text>
                  <Img
                    src="images/img_ellipse17.svg"
                    className="max-w-[100%] sm:ml-[138px] md:ml-[178px] ml-[231px] w-[5%]"
                    alt="EllipseSeventeen"
                  />
                  <Stack className="h-[94px] sm:ml-[261px] md:ml-[338px] ml-[437px] mt-[12px] sm:mt-[7px] md:mt-[9px] relative w-[11%]">
                    <div className="absolute bg-white_A700_66 sm:h-[42px] md:h-[55px] h-[70px] left-[0] rounded-radius50 top-[0] sm:w-[41px] md:w-[54px] w-[70px]"></div>
                    <Column className="absolute border-2 border-solid border-white_A700_66 bottom-[0] flex flex-col sm:h-[42px] md:h-[55px] h-[70px] items-center justify-end md:px-[14px] sm:px-[15px] px-[19px] right-[0] rounded-radius50 sm:w-[41px] md:w-[54px] w-[70px]">
                      <div className="border-2 border-solid border-white_A700_66 sm:h-[18px] md:h-[24px] h-[30px] mt-[1px] rounded-radius50 sm:w-[17px] md:w-[23px] w-[30px]"></div>
                    </Column>
                  </Stack>
                </Row>
              </Row>
              <Column className="absolute bg-gray_902 bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] md:p-[12px] sm:p-[15px] p-[16px] rounded-radius10 shadow-bs9 sm:w-[100%] w-[53%]">
                <Column className="flex flex-col justify-start sm:mb-[2px] md:mb-[3px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Stack className="h-[88px] relative sm:w-[100%] w-[91%]">
                    <Text
                      className="absolute bottom-[0] font-medium right-[0] text-gray_51 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Hire me for your awesome project
                    </Text>
                    <Img
                      src="images/img_3613613820cli.png"
                      className="absolute h-[54px] left-[0] max-w-[100%] top-[0] w-[14%]"
                      alt="3613613820cli"
                    />
                    <Img
                      src="images/img_polygon1.svg"
                      className="absolute h-[48px] max-w-[100%] right-[31%] top-[8%] w-[8%]"
                      alt="PolygonOne"
                    />
                  </Stack>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[10px] ml-[13px] sm:mt-[10px] md:mt-[13px] mt-[17px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <div className="bg-cyan_700 sm:h-[12px] md:h-[16px] h-[20px] sm:mb-[14px] md:mb-[19px] mb-[25px] sm:mt-[29px] md:mt-[38px] mt-[50px] rounded-radius50 sm:w-[11px] md:w-[15px] w-[20px]"></div>
                    <Text
                      className="leading-[normal] sm:mb-[16px] md:mb-[20px] mb-[27px] sm:mx-[0] not-italic text-cyan_400 sm:w-[100%] w-[19%]"
                      variant="body1"
                    >
                      . . . . . . . . . . . . . . . <br />. . . . . . . . . . .
                      . . . . <br />. . . . . . . . . . . . . . .<br />. . . . .
                      . . . . . . . . . .
                    </Text>
                    <Button
                      className="cursor-pointer font-bold sm:mb-[10px] md:mb-[13px] mb-[18px] min-w-[29%] sm:ml-[50px] md:ml-[65px] ml-[85px] sm:mt-[13px] md:mt-[17px] mt-[22px] text-[15px] text-center text-white_A700 w-[max-content]"
                      variant="OutlineBluegray3002b"
                    >
                      Contact me
                    </Button>
                    <div className="border-amber_600 border-bw5 border-solid sm:h-[18px] md:h-[24px] h-[30px] sm:ml-[108px] md:ml-[140px] ml-[181px] sm:mt-[38px] md:mt-[50px] mt-[65px] rounded-radius50 sm:w-[17px] md:w-[23px] w-[30px]"></div>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Text
              className="absolute bottom-[0] font-normal leading-[normal] sm:mx-[0] not-italic right-[19%] text-cyan_400_7f sm:w-[100%] w-[17%]"
              as="h2"
              variant="h2"
            >
              . . . . . . . . . . . . . . . <br />. . . . . . . . . . . . . . .{" "}
              <br />. . . . . . . . . . . . . . .<br />. . . . . . . . . . . . .
              . .
            </Text>
          </Stack>
          <Row className="bg-gray_902 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[113px] sm:mt-[67px] md:mt-[87px] sm:p-[15px] md:p-[23px] p-[30px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between max-w-[1178px] md:ml-[10px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Stack className="font-typouprightbt h-[35px] mb-[1px] relative w-[10%]">
                <Img
                  src="images/img_vickremovebgp.png"
                  className="absolute bottom-[3%] h-[29px] left-[0] max-w-[100%] sm:w-[100%] w-[43%]"
                  alt="vickremovebgp One"
                />
                <Text
                  className="absolute font-normal not-italic text-cyan_100 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  ickyJay
                </Text>
              </Stack>
              <Text
                className="font-nunito md:mt-[12px] mt-[16px] sm:mt-[9px] not-italic text-cyan_701 w-[auto]"
                variant="body1"
              >
                copyright@2022
              </Text>
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MacBookAirM2TwoPage;
