import { Shipping } from "./shipping";
import { CorreioServiceMock } from "../tests/mocks/correioService";
import { ParametersServiceMock } from "../tests/mocks/parametersService";

describe("Function calculates shipping value", () => {
  it("Result of calculates shipping value", () => {
    const _CorreioService = new CorreioServiceMock();
    const _ParametersService = new ParametersServiceMock();
    const _Shipping = new Shipping(_CorreioService, _ParametersService);

    expect(_Shipping.calcularFrete()).toBe(8.5);
  });
});
