

import { configure} from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import authReducer from "./auth";

configure({ adapter: new Adapter() });

describe("im doing test component", () => {
  it("update reducer", () => {
    expect(authReducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false
    });
  });
});
