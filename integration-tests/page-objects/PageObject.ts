import { RenderAPI } from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';

export abstract class PageObject {
  public id: string;
  protected app: RenderAPI;

  constructor(app: RenderAPI, id: string) {
    this.app = app;
    this.id = id;
  }

  public isVisible(): boolean {
    const page = this.app.queryByTestId(this.id);
    return !!page;
  }

  protected page(): ReactTestInstance {
    return this.app.getByTestId(this.id);
  }
}
