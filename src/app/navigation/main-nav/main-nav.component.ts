import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth-service.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy {

  public authenticationStatus = false;
  private authObservalbeSub: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  ngOnInit() {
    this.authenticationStatus = this.authService.getAuthenticationStatus();
    this.authObservalbeSub = this.authService.getAuthStatusObservable()
    .subscribe(authenticationStatus => {
      this.authenticationStatus = authenticationStatus;
    });
  }

  onLogout() {
    this.authService.logoutUser();
  }

  ngOnDestroy() {
    this.authObservalbeSub.unsubscribe();
  }

}
