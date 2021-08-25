import React from "react";
import { shallow } from "enzyme";
import TripSummary from "./TripSummary";

describe("Component TripSummary", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <TripSummary
        id="aaa"
        image="iii.jpg"
        name="nnn"
        cost="$100"
        days={5}
        tags={["aaa", "bbb", "ccc"]}
      />
    );
  });

  it("should render correct alt and image", () => {
    const expectedAlt = "aaaa";
    const expectedImage = "iii.jpg";
    const component = shallow(
      <TripSummary image={expectedImage} name={expectedAlt} tags={[]} />
    );
  });

  it("should render correct props: name, cost, days", () => {
    const expectedPropName = "name";
    const expectedPropCost = "$100";
    const expectedPropDays = 10;

    const component = shallow(
      <TripSummary
        name={expectedPropName}
        days={expectedPropDays}
        cost={expectedPropCost}
        tags={[]}
      />
    );

    expect(component.find(".title").text()).toEqual(expectedPropName);
    expect(component.find(".details").childAt(1).text()).toEqual(
      `from ${expectedPropCost}`
    );
    expect(component.find(".details").childAt(0).text()).toEqual(
      `${expectedPropDays} days`
    );
  });

  it("should render correct link with id", () => {
    const mockVariant = "link";
    // const expectedLink = '/trip/abc';
    const expectedId = "abc";
    const component = shallow(
      <TripSummary variant={mockVariant} id={expectedId} tags={[]} />
    );
    expect(component.find("Link").hasClass("link")).toBe(true);
  });

  it("should render correct array in tags", () => {
    const firstElement = "aaa";
    const secondElement = "bbb";
    const thirdElement = "ccc";
    const expectedArray = [firstElement, secondElement, thirdElement];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find(".tag").at(0).text()).toEqual(expectedArray[0]);
    expect(component.find(".tag").at(1).text()).toEqual(expectedArray[1]);
    expect(component.find(".tag").at(2).text()).toEqual(expectedArray[2]);
  });

  it("shouldnt render tags if tags is not exist", () => {
    const component = shallow(<TripSummary />);
    console.log(component.debug());
    expect(component.find(".tags").exists()).toEqual(false);
  });
});
