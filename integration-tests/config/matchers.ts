import { PageObject } from '../page-objects/PageObject';

function toBeVisible<T extends PageObject>(received: T) {
  const isVisible = received.isVisible();
  return {
    message: () => isVisible ? '' : `testID ${received.id} is not visible on the screen`,
    pass: isVisible,
  };
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeVisible(): R;
    }
  }
}

expect.extend({
  toBeVisible,
});
