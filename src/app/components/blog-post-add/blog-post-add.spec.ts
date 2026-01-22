import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostAdd } from './blog-post-add';

describe('BlogPostAdd', () => {
  let component: BlogPostAdd;
  let fixture: ComponentFixture<BlogPostAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
