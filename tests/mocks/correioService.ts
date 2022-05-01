import { ICorreioService } from "../../src/interfaces/ICorreioService";

export class CorreioServiceMock implements ICorreioService {
  calculateShipping() {
    return 6.5;
  }
}
