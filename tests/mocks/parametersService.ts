import { IParametersService } from "../../src/interfaces/IParametersService";

export class ParametersServiceMock implements IParametersService {
  additionalShipping() {
    return 2.0;
  }
}
