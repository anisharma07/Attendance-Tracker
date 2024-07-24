import React from "react";
import SubCard from "./SubCard";
import { Plus } from "lucide-react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Link,
} from "@nextui-org/react";
const Home = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 content-start p-4 w-full  page-height-class bg-zinc-900 text-[#949494] font-poppins">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        scrollBehavior={"outside"}
        size={"xl"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black font-bold">
                Edit Experience
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  autoFocus
                  className="text-black"
                  label="Company Name"
                  name="company_name"
                  onChange={(e) => {
                    setTempExp({ ...tempExp, [e.target.name]: e.target.value });
                  }}
                  onFocus={() => setActiveInput("company_name")}
                  value={tempExp.company_name}
                  placeholder="Enter your company name"
                  variant="bordered"
                />

                <Input
                  isRequired
                  className="text-black"
                  label="Job Title"
                  name="job_function"
                  onFocus={() => setActiveInput("job_title")}
                  onChange={(e) => {
                    setJobFunction(e.target.value);
                  }}
                  value={jobFunctionInput}
                  placeholder="Enter your Job Title"
                  variant="bordered"
                />
                {activeInput === "job_title" &&
                jobFunction?.filter((e) => {
                  if (jobFunctionInput.length == 0) {
                    return false;
                  } else {
                    if (e.toLowerCase() === jobFunctionInput.toLowerCase())
                      return false;
                    return e
                      .toLowerCase()
                      .includes(jobFunctionInput.toLowerCase());
                  }
                }).length ? (
                  <div className="border w-full h-auto px-4 py-2 -my-2 rounded-lg max-h-[150px] overflow-auto">
                    {jobFunction
                      ?.filter((e) => {
                        if (jobFunctionInput.length == 0) {
                          return true;
                        } else {
                          return e
                            .toLowerCase()
                            .includes(jobFunctionInput.toLowerCase());
                        }
                      })
                      .slice(0, 25)
                      .map((e) => {
                        return (
                          <button
                            key={e}
                            onClick={() => {
                              setJobFunction(e);
                            }}
                            className="text-black w-full hover:bg-gray-100 text-sm text-start py-2 px-2  rounded-lg"
                          >
                            {e}
                          </button>
                        );
                      })}
                  </div>
                ) : (
                  ""
                )}
                <Select
                  className="text-black"
                  label="Work type"
                  name="work_type"
                  onChange={(e) => {
                    setActiveInput("work_type");
                    setTempExp({
                      ...tempExp,
                      work_type: e.target.value,
                    });
                  }}
                  defaultSelectedKeys={[tempExp.work_type]}
                  variant="bordered"
                  isRequired
                >
                  {workTypes.map((workType) => (
                    <SelectItem
                      key={workType}
                      value={workType}
                      className="text-black"
                    >
                      {workType}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  isRequired
                  className="text-black"
                  label="Industry"
                  name="industry"
                  onFocus={() => setActiveInput("industry")}
                  onChange={(e) => {
                    setIndustryInput(e.target.value);
                  }}
                  value={industryInput}
                  placeholder="Enter industry name"
                  variant="bordered"
                />
                {activeInput === "industry" &&
                industries?.filter((e) => {
                  if (industryInput.length == 0) {
                    return false;
                  } else {
                    if (e.toLowerCase() === industryInput.toLowerCase())
                      return false;
                    return e
                      .toLowerCase()
                      .includes(industryInput.toLowerCase());
                  }
                }).length ? (
                  <div className="border w-full h-auto px-4 py-2 -my-2 rounded-lg max-h-[150px] overflow-auto">
                    {industries
                      ?.filter((e) => {
                        if (industryInput.length == 0) {
                          return true;
                        } else {
                          return e
                            .toLowerCase()
                            .includes(industryInput.toLowerCase());
                        }
                      })
                      .slice(0, 25)
                      .map((e) => {
                        return (
                          <button
                            key={e}
                            onClick={() => {
                              setIndustryInput(e);
                            }}
                            className="text-black w-full hover:bg-gray-100 text-sm text-start py-2 px-2  rounded-lg"
                          >
                            {e}
                          </button>
                        );
                      })}
                  </div>
                ) : (
                  ""
                )}
                <Input
                  isRequired
                  className="text-black"
                  label="Location"
                  name="location"
                  onFocus={() => setActiveInput("location")}
                  onChange={(e) => {
                    setTempExp({ ...tempExp, [e.target.name]: e.target.value });
                  }}
                  value={tempExp.location}
                  placeholder="Enter location"
                  variant="bordered"
                />
                <Select
                  isRequired
                  className="text-black"
                  label="Location Type"
                  name="location_type"
                  placeholder="Select Location type"
                  onChange={(e) => {
                    setActiveInput("location_type");
                    setTempExp({
                      ...tempExp,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  defaultSelectedKeys={[tempExp.location_type] || []}
                  variant="bordered"
                >
                  {locationTypes.map((Location) => (
                    <SelectItem
                      key={Location}
                      value={Location}
                      className="text-black"
                    >
                      {Location}
                    </SelectItem>
                  ))}
                </Select>

                <div className="flex px-2 gap-1 py-2 border-2 rounded-lg w-full flex-col flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {tags.map((e, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            let arr = tags;
                            setTags(arr.filter((e1) => e1 != e));
                          }}
                          className="text-sm px-2 py-1 bg-[#D4DBFD] flex text-black items-center justify-center rounded-lg"
                        >
                          {e}{" "}
                          <span>
                            <Plus className="text-sm font-light rotate-45" />
                          </span>{" "}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    value={searchSkills}
                    onFocus={() => setActiveInput("skills")}
                    onChange={(e) => {
                      setSearchSkills(e.target.value);
                    }}
                    className="px-2 rounded-lg py-1 text-black border w-auto"
                    placeholder="Enter skill "
                  />
                </div>
                {searchSkills && (
                  <div className="w-full gap-2 my-2 border px-3 flex flex-wrap  rounded-lg h-auto py-2">
                    <button
                      onClick={() => {
                        let arr = tags;
                        arr.push(searchSkills);
                        setTags(arr);
                        setSearchSkills("");
                      }}
                      className="text-sm text-start w-full px-2 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-lg text-black"
                    >
                      {searchSkills}
                    </button>
                    {skills?.filter((e) => {
                      if (searchSkills.length == 0) return false;
                      return e.toLocaleLowerCase().includes(searchSkills);
                    }).length ? (
                      <>
                        {skills
                          ?.filter((e) => {
                            if (searchSkills.length == 0) return false;
                            return e.toLocaleLowerCase().includes(searchSkills);
                          })
                          .slice(0, 5)
                          .map((e, index) => {
                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  // let arr = tags;
                                  setTags([...tags, e]);
                                  // arr.push(e);
                                  // setTags(arr);
                                  setSearchSkills("");
                                }}
                                className="text-sm text-start w-full px-2 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-lg text-black"
                              >
                                {e}
                              </button>
                            );
                          })}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                )}
                <Input
                  isRequired
                  className="text-black"
                  label="Job Description"
                  name="job_desc"
                  onChange={(e) => {
                    setTempExp({ ...tempExp, [e.target.name]: e.target.value });
                  }}
                  onFocus={() => setActiveInput("job_dessc")}
                  value={tempExp.job_desc}
                  placeholder="Enter job description"
                  variant="bordered"
                />
                <div className="flex gap-4">
                  <Select
                    className="text-black"
                    label="Start month"
                    name="start_date_month"
                    onChange={(e) => {
                      setActiveInput("start_month");

                      setTempExp({
                        ...tempExp,
                        start_date: {
                          ...tempExp.start_date,
                          month: e.target.value,
                        },
                      });
                    }}
                    defaultSelectedKeys={[tempExp.start_date.month]}
                    isRequired
                    variant="bordered"
                  >
                    {months
                      .filter(
                        (month, index) =>
                          tempExp.start_date.year !== currentYear.toString() ||
                          index <= currentMonth
                      )
                      .map((month) => (
                        <SelectItem
                          key={month}
                          value={month}
                          className="text-black"
                        >
                          {month}
                        </SelectItem>
                      ))}
                  </Select>

                  <Select
                    className="text-black"
                    label="Start year"
                    name="start_date_year"
                    onChange={(e) => {
                      setActiveInput("start_year");
                      e.target.value === currentYear.toString()
                        ? checkIfAvailStart(tempExp.start_date.month)
                        : null;
                      setTempExp({
                        ...tempExp,
                        start_date: {
                          ...tempExp.start_date,
                          year: e.target.value,
                        },
                      });
                    }}
                    isRequired
                    defaultSelectedKeys={[tempExp.start_date.year]}
                    variant="bordered"
                  >
                    {years.map((year) => (
                      <SelectItem
                        key={year}
                        value={year}
                        className="text-black"
                      >
                        {year.toString()}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <Checkbox
                  className="text-black"
                  isSelected={tempExp.isCurrentJob}
                  onChange={(e) => {
                    setActiveInput("iscurrentjob");
                    setTempExp({
                      ...tempExp,
                      isCurrentJob: e.target.checked,
                      end_date: {
                        month: null,
                        year: null,
                      },
                    });
                  }}
                >
                  Currently working here
                </Checkbox>

                {!tempExp.isCurrentJob && (
                  <div className="flex gap-4">
                    <Select
                      className="text-black"
                      label="End month"
                      name="end_date_month"
                      onChange={(e) => {
                        setActiveInput("end_month");
                        setTempExp({
                          ...tempExp,
                          end_date: {
                            ...tempExp.end_date,
                            month: e.target.value,
                          },
                        });
                      }}
                      defaultSelectedKeys={
                        tempExp.end_date.month ? [tempExp.end_date.month] : null
                      }
                      isRequired
                      variant="bordered"
                    >
                      {months
                        .filter(
                          (month, index) =>
                            tempExp.end_date.year !== currentYear.toString() ||
                            index <= currentMonth
                        )
                        .map((month) => (
                          <SelectItem
                            key={month}
                            value={month}
                            className="text-black"
                          >
                            {month}
                          </SelectItem>
                        ))}
                    </Select>

                    <Select
                      className="text-black"
                      label="End year"
                      name="end_date_year"
                      onChange={(e) => {
                        setActiveInput("end_year");
                        e.target.value === currentYear.toString()
                          ? checkIfAvailEnd(tempExp.end_date.month)
                          : null;
                        setTempExp({
                          ...tempExp,
                          end_date: {
                            ...tempExp.end_date,
                            year: e.target.value,
                          },
                        });
                      }}
                      defaultSelectedKeys={
                        tempExp.end_date.year ? [tempExp.end_date.year] : null
                      }
                      isRequired
                      variant="bordered"
                    >
                      {years.map((year) => (
                        <SelectItem
                          key={year}
                          value={year}
                          className="text-black"
                        >
                          {year.toString()}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    onAddexp(onClose);
                  }}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* <p className="mb-4">No records to display</p>
      <div className="flex flex-col items-center">
        <svg
          className="w-[200px] h-[200px] mb-8"
          viewBox="0 0 254 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_397_105)">
            <path
              d="M139.65 113.85H190.25V139.15H139.65V189.75H114.35V139.15H63.75V113.85H114.35V63.25H139.65V113.85ZM127 253C93.4501 253 61.2743 239.672 37.551 215.949C13.8276 192.226 0.5 160.05 0.5 126.5C0.5 92.9501 13.8276 60.7743 37.551 37.051C61.2743 13.3276 93.4501 0 127 0C160.55 0 192.726 13.3276 216.449 37.051C240.172 60.7743 253.5 92.9501 253.5 126.5C253.5 160.05 240.172 192.226 216.449 215.949C192.726 239.672 160.55 253 127 253ZM127 227.7C153.84 227.7 179.581 217.038 198.559 198.059C217.538 179.081 228.2 153.34 228.2 126.5C228.2 99.6601 217.538 73.9195 198.559 54.9408C179.581 35.9621 153.84 25.3 127 25.3C100.16 25.3 74.4195 35.9621 55.4408 54.9408C36.4621 73.9195 25.8 99.6601 25.8 126.5C25.8 153.34 36.4621 179.081 55.4408 198.059C74.4195 217.038 100.16 227.7 127 227.7Z"
              fill="#282B36"
            />
          </g>
          <defs>
            <clipPath id="clip0_397_105">
              <rect
                width="253"
                height="253"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="text-xl">Click on Add button to add a new subject</p>
      </div> */}

      <SubCard
        attended={4}
        total={6}
        Sub_name="DSA"
        target_percentage={75}
        card_color="#1A5F18"
      />
      {/* <div className="h-3"></div> */}
      <SubCard
        attended={9}
        total={9}
        Sub_name="DASA"
        target_percentage={75}
        card_color="#892B2B"
      />
      <div className="w-full flex items-center justify-center">
        <svg
          className="w-[50px] h-[50px] my-8"
          viewBox="0 0 254 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_397_105)">
            <path
              d="M139.65 113.85H190.25V139.15H139.65V189.75H114.35V139.15H63.75V113.85H114.35V63.25H139.65V113.85ZM127 253C93.4501 253 61.2743 239.672 37.551 215.949C13.8276 192.226 0.5 160.05 0.5 126.5C0.5 92.9501 13.8276 60.7743 37.551 37.051C61.2743 13.3276 93.4501 0 127 0C160.55 0 192.726 13.3276 216.449 37.051C240.172 60.7743 253.5 92.9501 253.5 126.5C253.5 160.05 240.172 192.226 216.449 215.949C192.726 239.672 160.55 253 127 253ZM127 227.7C153.84 227.7 179.581 217.038 198.559 198.059C217.538 179.081 228.2 153.34 228.2 126.5C228.2 99.6601 217.538 73.9195 198.559 54.9408C179.581 35.9621 153.84 25.3 127 25.3C100.16 25.3 74.4195 35.9621 55.4408 54.9408C36.4621 73.9195 25.8 99.6601 25.8 126.5C25.8 153.34 36.4621 179.081 55.4408 198.059C74.4195 217.038 100.16 227.7 127 227.7Z"
              fill="#282B36"
            />
          </g>
          <defs>
            <clipPath id="clip0_397_105">
              <rect
                width="253"
                height="253"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Home;
