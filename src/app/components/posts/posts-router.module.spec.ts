import { PostsRouterModule } from './posts-router.module';

describe('RouterModule', () => {
  let routerModule: PostsRouterModule;

  beforeEach(() => {
    routerModule = new PostsRouterModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
