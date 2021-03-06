import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from "./services/user.service";
import {LoginComponent} from "./components/login/login.component";
import {PostService} from "./services/post.service";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { PostsComponent } from './components/posts/posts.component';
import {PhotoService} from "./services/photo.service";
import {SubService} from "./services/sub.service";
import {PostViewModelService} from "./services/postViewModel.service";
import {UserViewModelService} from "./services/userViewModel.service";
import {LikeService} from "./services/like.service";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {HashtagService} from "./services/hashtag.service";
import { HashtagComponent } from './components/hashtag/hashtag.component';
import {CommentService} from "./services/comment.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {ComplaintService} from "./services/complaint.service";

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "feed", component: FeedComponent},
  {path: "user/:id", component: UserComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: LoginComponent},
  {path: "post/id/:id", component: PostComponent},
  {path: "hashtag/id/:id", component: HashtagComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FeedComponent,
    PostComponent,
    NotFoundComponent,
    UserComponent,
    PostsComponent,
    HashtagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [UserService, PostService, PhotoService, SubService, PostViewModelService, UserViewModelService, LikeService, HashtagService, CommentService, ComplaintService],
  exports: [HomeComponent, UserComponent, LoginComponent, HeaderComponent, PostsComponent, FeedComponent, HashtagComponent, PostComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
