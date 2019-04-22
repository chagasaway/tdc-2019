export class QRCodePageObject {

  public async getScreen() {
    return await element(by.id('QRCodeScreen'));
  }

  public async share() {
    await element(by.id('shareBtn')).tap();
  }

}
