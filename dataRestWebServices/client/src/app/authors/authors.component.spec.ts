import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from '../service/authors.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AuthorsComponent', () => {
let component: AuthorsComponent;
let fixture: ComponentFixture<AuthorsComponent>;

beforeEach(async () => {
await TestBed.configureTestingModule({
declarations: [AuthorsComponent],
imports: [HttpClientTestingModule, FormsModule],
providers: [AuthorsService]
}).compileComponents();
});

beforeEach(() => {
fixture = TestBed.createComponent(AuthorsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should call searchAuthor method', () => {
spyOn(component, 'searchAuthor');
component.authorId = '1';
component.searchAuthor();
expect(component.searchAuthor).toHaveBeenCalled();
});
});
