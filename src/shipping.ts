import { ICorreioService } from "./interfaces/ICorreioService";
import { IParametersService } from "./interfaces/IParametersService";

export class Shipping {
  constructor(
    private readonly correioService: ICorreioService,
    private readonly parametersService: IParametersService
  ) {}

  calcularFrete() {
    return (
      this.correioService.calculateShipping() +
      this.parametersService.additionalShipping()
    );
  }
}
