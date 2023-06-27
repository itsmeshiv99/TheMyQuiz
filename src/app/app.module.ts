import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    AddQuestionComponent,
    ViewQuizQuestionsComponent,
    UpdateQuizComponent,
    WelcomeComponent,
    UserSidebar,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    HomeComponent,
  
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    CKEditorModule,
    BrowserAnimationsModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
