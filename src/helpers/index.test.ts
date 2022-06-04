import { uuidV4 } from '.';

describe('Helpers', () => {
  describe('uuidV4', () => {
    it('returns an uuidV4', () => {
      const id = uuidV4();
      expect(id).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$/);
    });
  });
});
