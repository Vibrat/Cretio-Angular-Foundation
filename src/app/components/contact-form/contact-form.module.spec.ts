import { ContactFormModule } from './contact-form.module';

describe('ContactFormModule', () => {
  let contactFormModule: ContactFormModule;

  beforeEach(() => {
    contactFormModule = new ContactFormModule();
  });

  it('should create an instance', () => {
    expect(contactFormModule).toBeTruthy();
  });
});
